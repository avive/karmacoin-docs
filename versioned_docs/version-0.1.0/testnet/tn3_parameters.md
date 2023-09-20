---
id: tn3
title: Karmachain 2.0 Testnet 3
sidebar_label: 🌎 Testnet 3
description: Learn about common testnet parameters
keywords: [parameters, testnet3, tn3, on-chain]
---

### Periods of common actions and attributes

- Slot: 12 seconds. One block is epxected per slot.
- Epoch: 4 hours (1,200 slots x 12 seconds).
- Session: 4 hours (6 sessions per Era).
- Era: 24 hours (7,200 slots x 12 seconds).

| Term    | Time       | Slots\* |
| ------- | ---------- | ------- |
| Slot    | 12 seconds | 1       |
| Epoch   | 4 hours    | 1,200   |
| Session | 4 hours    | 1,200   |
| Era     | 24 hours   | 7,200   |

\*_A maximum of one block per slot can be in a canonical chain. Occasionally, a slot will be without a block in the chain. Thus, the times given are *estimates*. See [Consensus](https://guide.kusama.network/docs/learn-consensus) for more details._

### Accounts, Identity and Crowdloans

- The [Existential Deposit](https://guide.kusama.network/docs/learn-accounts.md#existential-deposit-and-reaping) is 100 KCents.
- No deposit required to set an Identity.

### Staking, Validating, and Nominating

A maximum of 100 validators can be nominated by a nominator on Karmachain.

| Karmachain           | Time    | Slots   | Description                                                                                                                                                                                       |
| -------------------- | ------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Term duration        | 24 hours | 7,200   | The time for which a validator is in the set after being elected. Note, this duration can be shortened in the case the a validator misbehaves.                                                    |
| Nomination period    | 24 hours | 7,200   | How often a new validator set is [elected](https://guide.kusama.network/docs/learn-phragmen.md).                                                                                                                          |
| Bonding duration     | 24 hours  | 7,200 | How long until your funds will be transferrable after unbonding. Note that the bonding duration is defined in eras, not directly by slots.                                                        |

### Rewards

#### Signup Rewards

Signup rewards are designed to solve the cryptocurrency on ramp problem. Upon sign-up, the protocol mints a Karma Coin reward to each new user with a verified mobile phone number.

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

* Every month, the protocol mints 10 KCs to up to 500 random users who didn't get this award yet who had appreciated at least 2 people in that time period.
* Up to 300M KCs are allocated for this reward. When these have been allocated the protocol stops rewarding users with top karma.
* Deterministic randomness is provided by Karmachain.

#### Transaction Fees Subsidies

The protocol allocates up 250M KCs as transaction fees subsidies. Fees susedies are minted by the protocol for appreciation and payment transactions and are given to the Karma Coin blockchain block producers. When a subsidy is applied, the user who submitted the transaction doesn't pay the transaction fee from his own balance.

* Only the first 10 transactions per user are eligible for transaction fees subsidies to mitigate spam attacks.
* These intentional design decision is designed to encourage sign-ups, appreciation, and coin usage in the real-world as means of tipping, appreciation and payment.
* After the 250M KCs have been minted for fees subsidies, the protocol keeps minting 10 KCent for each transaction to subsidize the transaction fees of signup transactions. This is required to seamlessly onboard new users.

### Precision

KCOINs (KCs) have 6 decimals of precision. In other words, the smallest amount is one millionth (0.000001) KC which is 1 KCENT. There are 6 million KCENTs and one KCOIN.


