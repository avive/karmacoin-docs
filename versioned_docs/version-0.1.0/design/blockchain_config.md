---
id: blockchain-config
title: Blockchain Config
sidebar_label: Blockchain Config
slug: /blockchain-config
---

# Blockchain Config


## Block time
We'd like to initial have a 30 seconds blocktime. This can ensure about 60 seconds transactions confirmation time which is reasonable for the first stage of the project. In the future, L2 tech can speed up transaction confirmation.

## Validators Deposit Amount
KarmaCoin uses a dPOS consensus algorithm. Validators need to acquire KCoins from the KarmaCoin foundation (or from any other KCoins cold holder) in order to obtain the coins deposit requirement. The minimum validator deposit amount is 50,000 KCoins. It is designed in a way that is low enough to allow for non-rich validators and high-enough to ensure skin-in-the-game from validators and stake that has non-negligible fiat value. The KarmaCoin foundation will conduct coin auctions for validators to enable them to purchase coins in an open market context where the coin price is discovered by the market. 

## Sudo
KarmaCoin blockchain includes a Sudo account to perform blockchain maintenance while the the tech is experimental and the product is in beta. The goal is to remove the Sudo account via governance when the blockchain is ready for full decentralization operation.

## Governance
Karmacoin supports an on-chain governance system which the Karmacoin foundation is legally obligated to respect.
The following fundamental product changes must pass an on-chain voting procedure.

- A governance decision is required for the removal of Sudo account once the chain has proven to be stable and bug free.
- A governance decision is required to perform any blockchain runtime updates.
- A governance decision is needed for any consensus rules updates.

## Existential Deposit
The existential deposit in KarmaCoin is 100 KCents. When the protocol allocated sign-up reward is depleted after 110 million users, new users get 200 KCents on new account creation from the verifier's account. Existential deposit is the minimum balance which permits an account to execute transactions.

## Social Account Recovery


## Lottery Games



---
:::info License
Copyright (c) 2022 by the [Karmacoin Authors](https://github.com/avive/karmacoin-docs). This work is licensed under the [Karmacoin License](/docs/license).
:::
