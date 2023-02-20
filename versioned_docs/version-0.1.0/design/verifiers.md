---
id: verifiers
title: Verifiers
sidebar_label: Verifiers
slug: /verifiers
---

## About Verifiers
Users in Karma Coin are identified by their mobile phone numbers. We employ this design to mitigate creation of multiple accounts by users as Karma Coin is designed for people and each user should only have one Karma Coin account.

Verifiers are microservices that are responsible for verifying users mobile phone numbers. Currently, verifiers are centrally trusted. We plan to decentralize them in future releases of Karma Coin software. The identity of verifiers is part of a Karma Coin blockchain genesis config. This identity is a public key of a verifier key pair used to sign verification messages.

## Verifier Role
Verifiers get requests from users client app to verify a phone number. Verification is an association between a user's accountId (its public key) and a mobile phone number. A verifier verifies the association and returns a signed message signed with the verifier private identity key. This message is included by user's clients in NewUserV1 signup transactions. Block producers validate that this message was signed by a trusted verifier before creating a new on-chain user account when processing the new user transaction. This design makes the verification evidence part of the core transaction processing logic and makes it unnecessary for block producers to use an external api service when processing transactions. In addition, the verifier evidence goes on-chain and therefore is agreed upon as valid by the Karma Coin blockchain validators. Their honest behavior is to only approve signup transactions in blocks that use a trusted validators and are properly signed by such validator.

In addition to phone verification, validators store the ids of payment transactions to non-users and add these ids in the attestations they provide to users as part of the signup flow.

## Current Implementation
User clients use Firebase phone authentication to sign up to Karma Coin. We store the user's account ID in the Firebase users database using the user's name field. Verifiers use the firebase admin api to query the firebase users database and to check that the user is indeed authenticated on Firebase using his requested mobile phone number and account id. This logic is implemented [here](https://github.com/karma-coin/karmacoin-verifier).

The full verification flow is implemented by the [Karma Coin client app](https://github.com/karma-coin/karmacoin-app) and by the Karma Coin server transaction processing logic and verifier API implementation.


### Implementation Notes
The verifier is implemented in Dart because the Firebase admin sdk is not yet available for Rust. The Dart implementation is used by the [Rust Karma coin server](https://github.com/karma-coin/karmacoin-server) as an implementation details and users use the verifier API provided by the Rust server and do not use the Dart microservice directly. The Rust Karma Coin server provides the verifier api and the blockchain api to clients.


---
:::info License
Copyright (c) 2022 by the Karma Coin Authors. This work is licensed under the [Karma Coin License](/docs/license).
:::