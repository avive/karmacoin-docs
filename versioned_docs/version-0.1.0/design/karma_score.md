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

## Personality Traits
Personality traits are positive specific traits that can be assigned to users such as honest, smart, helpful, patient, etc via payment transactions. Each trait is associated with a name and a unique identifier. Each trait has a name, id and a possible associated with one or more supported communities.

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
}
```

## Data Modeling and Storage
A karmachain blockchain network (such as the mainnet) should include a list of all supported personality traits and supported communities and make these available for clients via the Karma Coin API. 

An initial list should be part of a network's genesis config. 

New personality traits and new communities can be added by Sudo via Sudo calls to the blockchain at any time.

The number of appreciations per traits should be stored in user's account on-chain data. For example, if a user got 3 awesome transactions then 3 should be associated with the awesome trait in the user's account data.
We call this user's personality trait count. The count is 0 for all traits for new users.

In addition, the association between each personality trait count and a supported community should be stored on chain. For each community, there's a set of traits that specify the community important values and the ways that the community managers would like community members to appreciate each other by. 

So for example, consider a `grateful` character trait. Any user can appreciate any other user using it without being a member. Assume we have a supported community that has a 'grateful' community trait. Users who are members of that community can appreciate other members using the 'grateful' trait in the context of the community via the App. In this case, the community ID should be associated with the grateful trait appreciation in the user's account data. 

### Assigned Personality Traits
Personality traits count is monotonically increasing. A count can be increased in two ways:
1. Via a personality trait specified in a payment transaction to the user's account from another user. For example, if user A specified smart in a payment transaction to user B then the smart count of user B is increased by 1.
2. Via block producers based on consensus rules when processing user's transactions. For example, if a user appreciates a non-existing user by mobile number and that person becomes a user then the inviter `karma coin ambassador` personality trait count should increase by 1. These consensus rules will be part of the Karmachain runtime spec. The main idea is to reward users with personality traits that are beneficial to the network growth and usage.

```protobuf
// An assigned trait to a specific user - stored in user's account
message AssignedTrait {
  // The specific trait (kind and name)
  TraitName trait = 1;
  // Optional community id when applicable for this assigned trait
  int32 community = 2;
}

// User's on-chain account includes a list of assigned personality traits
message UserAccountData {
  repeted AssignedTrait assigned_traits = 1;
  ...
}

```

So each user's account conceptually has a collection of AssignedTraits which may have an associated community. The coun of each trait for the user is the total number of such assigned traits in the user's account. 

---

## Global Karma Score
Each user has a global karma score. The karma score is computed only based on the user's personality traits count on-chain and therefore can be efficiently computed by clients or servers in a straight-forward way so  there's no need to specially store it on chain.

The formula for Karma Score should take into account the number of non-zero count personality traits associated with the user and the count of each of these traits. This design gives us the flexibility to change the formula in clients based on the assigned-traits on-chain data.

### Initial formula

`KarmaScore = 1 + assigned_traits_count + communities_count + sent_apprecitiaons_count + referals_count`

Where `assigned_traits_count` is the count of each personality trait assigned to the user, `communites_count` is the total number unique communities that the user got assigned personality traits in (communities he's member of), `sent_appreciations_count` is the total number of appreciations sent by the user, and `referrals_count` is the total number of appreciations sent by the user who resulted in a new user sign-up. One is added to give a point to the user for his sign-up to Karma Coin. e.g. the creation of a user's on-chain account based on his NewUser transaction going on-chain.

-- 
## Community-Specific Karma Score
A community specific karma score specified how the user's actions in the community are appreciated by other users in the community according to the specific community values. The community specific karma score is computed based on the user's personality traits count in the community and therefore can be efficiently computed by clients or servers in a straight-forward way so  there's no need to specially store it on chain.

When a user appreciates another user via a payment transaction executed in the context of a community in the Karma Coin App, a unique community ID should be added to the transaction. The receiving user's account should store this association together with the personality trait. For example. if user A appreciated user B by specifying he's grateful in community C then community C should be associated with the grateful personality trait in user B's account data. This is required to compute user's B community C specific karma score.

### Initial formula

`KarmaScore(community) = assigned_traits_count(community) + sent_appreciations(community) + referrals_count(community)`

Where `assigned_traits_count` is the sum of personality traits assigned to the user in the community via an appreciation, `sent_appreciations(community)` is number of appreciations that the user has sent to other users in the community. e.g. an appreciation where the community id was specified and `referrals_count(community)` is the total number of appreciations sent by the user that resulted in a new community member sign-up.

---
:::info License
Copyright (c) 2022 by the Karma Coin Authors. This work is licensed under the [Karma Coin License](/docs/license).
:::