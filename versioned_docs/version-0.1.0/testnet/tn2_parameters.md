---
id: tn2-parameters
title: Karmachain 2.0 Testnet 2 Parameters
sidebar_label: TN2 Parameters
description: Learn about common testnet parameters
keywords: [parameters, testnet2, tn2, on-chain]
---

### Periods of common actions and attributes

- Slot: 12 seconds \*(generally one block per slot, although see note below)
- Epoch: 1 hour (300 slots x 12 seconds)
- Session: 1 hour (6 sessions per Era)
- Era: 6 hours (1800 slots x 12 seconds)

| Kusama  | Time      | Slots\* |
| ------- | --------- | ------- |
| Slot    | 6 seconds | 1       |
| Epoch   | 1 hour    | 300     |
| Session | 1 hour    | 300     |
| Era     | 6 hours   | 1_800   |

\*_A maximum of one block per slot can be in a canonical chain. Occasionally, a slot will be without
a block in the chain. Thus, the times given are *estimates*. See
[Consensus](../../learn/learn-consensus.md) for more details._

### Accounts, Identity and Crowdloans

- The [Existential Deposit](../../learn/learn-accounts.md#existential-deposit-and-reaping) is 100 KCents
- No deposit required to set an Identity

### Staking, Validating, and Nominating

A maximum of 40 validators can be nominated by a nominator on Karmachain.

| Karmachain           | Time    | Slots   | Description                                                                                                                                                                                         |
| -------------------- | ------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Term duration        | 6 hours | 1_800   | The time for which a validator is in the set after being elected. Note, this duration can be shortened in the case the a validator misbehaves.                                                      |
| Nomination period    | 6 hours | 1_800   | How often a new validator set is [elected](../../learn/learn-phragmen.md).                                                                                                                          |
| Bonding duration     | 7 days  | 302_400 | How long until your funds will be transferrable after unbonding. Note that the bonding duration is defined in eras, not directly by slots.                                                          |
| Slash defer duration | 7 days  | 302_400 | Prevents overslashing and validators "escaping" and getting their nominators slashed with no repercussions to themselves. Note that the bonding duration is defined in eras, not directly by slots. |

### Rewards

#### Signup Rewards

Signup rewards are designed to solve the cryptocurrency on ramp problem. Upon sign-up, the protocol mints a 1 KC reward to each new user with a verified mobile phone number.

* A total of 300 million KCs is allocated by the protocol for signup rewards.
* A user who gets this reward also gets the Karma Rewards Winner special appreciation.
* The first 10 million users get 10 KCs on signup.
* The next 200 millions user get 1 KC on signup.
* Users beyond the first 210 million users get a small reward of 1000 KCents on signup. This amounts to perpetual minting of 100 KCs for 1 million new users.

#### Referral Rewards

* A total of 300 million KCs is allocated by the protocol for referral rewards. Referral rewards are awarded to a users who appreciated someone who signed up as a result to Karma Coin.
* A Karma Coin user can only get 1 referral reward.
* The first 10 million referees get a 10 KCs reward when their referral signs up.
* The next 200 millions referees get a 1 KC reward when their referral signs up.

#### Karma Rewards

* Every day, the protocol mints 10 KCs to up to 10 random users from the top 100 users with the highest Karma Score who didn't get this award yet who had appreciated at least 1 people in that time period.
* Up to 300M KCs are allocated for this reward. When these have been allocated the protocol stops rewarding users with top karma.
* Deterministic randomness is provided from Karmachain.

#### Transaction Fees Subsidies

The protocol allocates up 250M KCs as transaction fees subsidies. Fees susedies are minted by the protocol for appreciation and payment transactions and are given to the Karma Coin blockchain block producers. When a subsidy is applied, the user who submitted the transaction doesn't pay the transaction fee from his own balance.

* Only the first 10 transactions per user are eligible for transaction fees subsidies to mitigate spam attacks.
* These intentional design decision is designed to encourage sign-ups, appreciation, and coin usage in the real-world as means of tipping, appreciation and payment.
* After the 250M KCs have been minted for fees subsidies, the protocol keeps minting 1 KCent for each transaction to subsidize the transaction fees of signup transactions. This is required to seamlessly onboard new users. This amounts to issuance of 1 KCs for 1 million new users, so it doesn't change the overall supply significantly in the long term.

### Precision

KCent have 6 decimals of precision. In other words, 1e6 (1_000_000, or one billion).
