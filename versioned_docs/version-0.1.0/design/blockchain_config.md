---
id: blockchain-config
title: Blockchain Config
sidebar_label: Blockchain Config
slug: /blockchain-config
---

# Genesis Config


## Block time
We'd like to initial have a 30 seconds block-time. This can ensure about 60 seconds transactions confirmation time which is reasonable for the first stage of the project. In the future, L2 tech can speed up transaction confirmation.

## Validators Deposit Amount
Validators deposit is 50,000 KCoins. See tokenomics for more info.

## Sudo
KarmaCoin blockchain should include a Sudo account to perform blockchain maintenance while the tech is experimental and the product is in beta. The goal is to remove the Sudo account via governance when the blockchain is ready for full decentralization operation.

## Governance
Karmacoin supports an on-chain governance system which the Karmacoin foundation is legally obligated to respect.
The following fundamental product changes must pass an on-chain voting procedure.

- A governance decision is required for the removal of Sudo account once the chain has proven to be stable and bug free.
- A governance decision is required to perform any blockchain runtime updates.
- A governance decision is needed for any consensus rules updates.

## Existential Deposit
The existential deposit in KarmaCoin is 100 KCents. Existential deposit is the minimum balance which permits an account to execute transactions. Note that sign-up transactions fees come from either protocol subsidiaries or from the signup reward and when both of these are not applicable, the protocol mints 1KCent to pay the transaction fee of these transactions to allow new users to sign-up in the long run.

## Genesis Config
Karmacoin genesis config values are defined in the following file: [genesis.rs](https://github.com/avive/karmacoin/blob/main/crates/base/src/genesis_config_service.rs)



---
:::info License
Copyright (c) 2022 by the [Karmacoin Authors](https://github.com/avive/karmacoin-docs). This work is licensed under the [Karmacoin License](/docs/license).
:::
