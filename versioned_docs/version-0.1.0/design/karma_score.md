---
id: karma-score
title: Karma Score
sidebar_label: Karma Score
slug: /karma-score
---

Each on-chain user account has an associated Karma Score. It is computed based on users actions. Karma Score is a global score that is computed based on:

1. The user's actions in the app, mainly the appreciation the user sends using the app. 
2. other users appreciations of the user. 

In addition to the global Karma Score each user has a Karma Score for each community he is a member of. This score is computed based on the user's actions in the community. This model is explained in greater details below.

## Character Traits
Character traits (aka traits) are positive specific traits that can be assigned to users such as honest, smart, helpful, patient, etc... via payment transactions. Each trait is associated with a name and a unique identifier. Each trait has a name, id and a possible associated with one or more supported communities.

```protobuf
// Unique char traits supported in a Karmachain network
enum CharTraitId {
  CHAR_TRAIT_KIND = 0;
  CHAR_TRAIT_HELPFUL = 1;
  CHAR_TRAIT_SMART = 2;
  // etc...
}

// TraitName associates a name to each unique CharTrait
message CharTrait {
  CharTraitId trait = 1;
  // The name of this trait
  string name = 2;
  // representative emoji for this trait
  string emoji = 3;
}
```

## Data Modeling and Storage
A karmachain blockchain network (such as the mainnet) should include a list of all supported character traits and supported communities and make these available for clients via the Karma Coin API. 

An initial list should be part of a network's genesis config. 

New character traits and new communities can be added by Sudo via Sudo calls to the blockchain at any time.

The number of appreciations per traits should be stored in user's account on-chain data. For example, if a user got 3 awesome transactions then 3 should be associated with the awesome trait in the user's account data.
We call this user's character trait count. The count is 0 for all traits for new users.

In addition, the association between each character trait count and a supported community should be stored on chain. For each community, there's a set of traits that specify the community important values and the ways that the community managers would like community members to appreciate each other by. 

So for example, consider a `grateful` character trait. Any user can appreciate any other user using it without being a member. Assume we have a supported community that has a 'grateful' community trait. Users who are members of that community can appreciate other members using the 'grateful' trait in the context of the community via the App. In this case, the community ID should be associated with the grateful trait appreciation in the user's account data. 

### Trait Scores
Traits scores are assigned to users for any character trait that has a non-zero count in the user's account.

1. Via a character trait specified in a payment transaction to the user's account from another user. For example, if user A specified smart in a payment transaction to user B then the smart count of user B is increased by 1.
2. Via block producers based on consensus rules when processing user's transactions. For example, if a user appreciates a non-existing user by mobile number and that person becomes a user then the inviter `karma coin ambassador` character trait count should increase by 1. These consensus rules will be part of the Karmachain runtime spec. The main idea is to reward users with character traits that are beneficial to the network growth and usage.

```protobuf
message TraitScore {
  uint32 trait_id = 1;
  uint32 score = 2;
  // 0 for no community, otherwise community id this trait was assigned
  uint32 community_id = 3;
}

```

So each user's account conceptually has a collection of AssignedTraits which may have an associated community. The count of each trait for the user is the total number of such assigned traits in the user's account. 

### Special Character Traits
The following special character traits are automatically awarded to users by the Karmachain rules, based on specific users actions in the Karma Coin app.

#### Ambassador Character Trait
A user gets 1 point in this trait for each payment transaction that resulted in a new user sign up (referral conversion).

#### Karma Spender Character Trait
A user gets 1 point in this trait for each payment transaction without an appreciation it sent that was executed (received by receiver's account).

#### Karma Grower Character Trait
A user gets 1 point in this trait for signing up to Karma Coin.

Special traits are never assigned in the context of a community, there are only applicable to the global karma score and the global user's chart traits.

---

## Global Karma Score
Each user has a global karma score. The karma score is computed only based on the user's character traits count on-chain and therefore can be efficiently computed by clients or servers in a straight-forward way so  there's no need to specially store it on chain.

The formula for Karma Score should take into account the number of non-zero count character traits associated with the user and the count of each of these traits. This design gives us the flexibility to change the formula in clients based on the assigned-traits on-chain data.

### Global Karma Score - Initial formula

`KarmaScore = received_appreciations +  sent_apprecitiaons + communities_memberships`

Where
- `received_appreciations` is the count of appreciations sent to the user (a payment transaction with a non-zero character trait and without a community context) user. Note that this includes any special character trait point assigned by Karmachain to the user and not only appreciations sent by other users.
- `sent_appreciations` is the count of appreciations sent by the user (a payment transaction with a non-zero character trait and without a community context).
- `communites_memberships` is the count of the Karma Coin communities that the user is member of.

The goal of this simple formula is make the user's score based on their actions in the app and the actions of other users in the app in relation to it. The formula is designed to be simple and easy to compute. We will keep iterating over this formula to make more indicative of user's karma. 

Note that users get points for referrals and payments via the special Karmachain assigned traits so users get karma score for these actions via these special traits..

Note that community-specific appreciations do not affect the global karma score but only the community-specific karma score.


-- 
## Community-Specific Karma Score
A community-specific karma score specified how the user's actions in the community are appreciated by other users in the community according to the specific community values. The community specific karma score is computed based on the user's character traits count in the community and therefore can be efficiently computed by clients or servers in a straight-forward way so  there's no need to specially store it on chain.

When a user appreciates another user via a payment transaction executed in the context of a community in the Karma Coin App, a unique community ID should be added to the transaction. The receiving user's account should store this association together with the character trait. For example. if user A appreciated user B by specifying he's grateful in community C then community C should be associated with the grateful character trait in user B's account data. This is required to compute user's B community C specific karma score.

### Community-Specific Karma Score - Initial formula

`KarmaScore(community) = 1 + received_appreciations(community) + sent_appreciations(community)`

Where 
- `1` is assigned for members for joining the community.
- `received apprecitions(community)` is the count of community-specific appreciations sent by other users by another community member. Note that these include special traits assigned by the protocol in the community.
- `sent_appreciations(community)` is the count of community-specific appreciations that the user has sent to other community members. e.g. an appreciation where the community id was specified.

By community-specific appreciation we mean an appreciation that was sent by one community member to another community memmber in the Karma Coin App in the context of a specific community. Note that when a community manager appreciates someone and that person signs-up, it becomes a member of the community and the appreciation is also community-specific.

---
:::info License
Copyright (c) 2022 by the Karma Coin Authors. This work is licensed under the [Karma Coin License](/docs/license).
:::