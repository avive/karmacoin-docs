---
id: tokenomics
title: Tokenomics
sidebar_label: Tokenomics
slug: /tokenomics
---

# Tokenomics

> This document is a work in progress. It is not final and is subject to change.

## Coin Units
- `KCents` - The basic Karma Coin blockchain accounting unit.
- `KCoins ($KC)` - The Karma Coin cryptocurrency. One KC equals one million KCents.
---

## Coin Issuance Model
The coin issuance and supply are designed to reward both users and validators and to encourage early adoption by both of these stakeholders, while also providing some coins to the Karma Coin dev company for the development and the maintenance of the product and the tech stack. 

The coin issued by the Karma Coin blockchain includes three main types of issuance:
1. Validator awards.
2. Karma mining issuance.
3. Genesis minting.

We call the logic that determines minting 'the protocol' in this document.

This issuance model is designed so the vast majority of the coins are issued in the first 20 years of the project while still rewarding validators and new users indefinitely. So technically Karma Coin supply is not capped but the amounts issued after the first 20 years from genesis are negligible compared to the first 20 years issuance.

1.875B KCs (75% of the supply) are minted by the protocol over 20 years from genesis.

After the first 20 years from genesis the coin supply will be 2.5 billion KCs (2.5 trillion KCents). We refer to this amount as 'the supply' in this document. 

In the following years, after the first 20 years, the only coin issuance by the protocol is validator rewards and signup rewards. These are issued indefinitely into the future. The validators rewards decay exponentially so only x are minted in year 20 to 40 from genesis. Signup rewards amount to up to 100 million additional protocol minted KCes for each 10 years period after the initial 20 years.

--- 

## Genesis Minting
625M KCs (25% of the supply) are minted by the protocol on genesis.
- 375M KCs (15% of the supply) are issued to the Karma Coin treasury and are used to build the platform.
- 250M KCs (10% of the supply) are issued to the genesis Karma Coin blockchain validators as their initial stake in the protocol.

---

## Validator Awards
500M KCs (20% of the supply) are allocated by the protocol to rewards the Karma Coin blockchain validators for providing security to the network for the first 20 years from genesis. These are minting by the protocol using a standard exponential decay function which rewards validators who starts validating early while still rewarding new validators that join the system over time. (First month reward 10M KCs, Lambda = 0.020036). The issuance continues indefinitely using the same decay function.

---

## Karma Mining
The Karma Coin protocol tokenomics are designed to encourage usage and growth in the early days of the network with the goal of destabilising Karma Coin as a global means of appreciation, tipping and payments. 

1.375B KCs (55% of the supply) are distributed by the protocol and awarded to users to encourage sign-ups, usage as means of payment and appreciation. We call this Karma mining. Karma Mining includes the following coin issuance:

### Signup Rewards
Signup rewards are designed to solve the cryptocurrency on ramp problem. Upon sign-up, the protocol mints a 1 KC reward to each new user with a verified mobile phone number. 
- A total of 300 million KCs is allocated by the protocol for signup rewards.
- The first 10 million users get 10 KCs on signup.
- The next 200 millions user get 1 KC on signup. 
- Users beyond the first 210 million users get a small reward of 1000 KCents on signup. This amounts to perpetual minting of 100 KCs for 1 million new users.

### Referral Rewards
- A total of 300 million KCs is allocated by the protocol for referral rewards. Referral rewards are awarded to a users who appreciated someone who signed up as a result to Karma Coin.
- A Karma Coin user can only get 1 referral reward.
- The first 10 million referees get a 10 KCs reward when their referral signs up.
- The next 200 millions referees get a 1 KC reward when their referral signs up.

### Karma Rewards
- Each month, the protocol mints 10 KCs to the top 1,000 users with the highest Karma points who didn't get this award yet. 
- Up to 300M KCs are allocated for this reward. When these have been allocated the protocol stops rewarding users with top karma.

### Causes Rewards
- 225 millions KCs are allocated by the protocol to reward causes submitted by users.
- Each month, for at the first 50 months since genesis, 10,000 KCs are distributed by the protocol to up to 20 causes that got funding in that calendar month via appreciations that didn't get funding in the previous month. The causes are randomly selected by the protocol. Getting a cause to become eligible requires cause registration and verification as a real non-profit with an established reputation.

### Transaction Fees Subsidies
The protocol allocates up 250M KCs as transaction fees subsidies. Fees susedies are minted by the protocol for appreciation and payment transactions and are given to the Karma Coin blockchain block producers. When a subsidy is applied, the user who submitted the transaction doesn't pay the transaction fee from his own balance.
- Only the first 10 transactions per user are eligible for transaction fees subsidies to mitigate spam attacks.
- These intentional design decision is designed to encourage sign-ups, appreciation, and coin usage in the real-world as means of tipping, appreciation and payment. 
- After the 250M KCs have been minted for fees subsidies, the protocol keeps minting 1 KCent for each transaction to subsidize the transaction fees of signup transactions. This is required to seamlessly onboard new users. This amounts to issuance of 1 KCs for 1 million new users, so it doesn't change the overall supply significantly in the long term.
---

## Protocol Minting Summary
A total of 1.875B KCs are minted by the protocol over 20 years from genesis. Minting breakdown
- 300M KCs - Signup rewards.
- 300M KCs - Referral rewards.
- 300M KCs - Karma rewards.
- 250M Kcs - Transactions fees subsidies.
- 225M KCs - Causes rewards;
- 500M KCs - Validators rewards.

After 20 years, the protocol mints small amounts of additional KCs. 
- Validator rewards - based on the same decay function used to calculate rewards in the first 20 years.
- Signup rewards - 1000 KCents per signup. 100 KCs for 1 million new users
- Signup transactions fee subsidy - 1 KCent per signup. 1 KC for 1 million signups.

----

---
:::info License
Copyright (c) 2022 by the Karma Coin Authors. This work is licensed under the [Karma Coin License](/docs/license).
:::