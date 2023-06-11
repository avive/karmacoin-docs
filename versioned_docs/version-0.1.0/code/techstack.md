---
id: techstack
title: Tech Stack
sidebar_label: Tech Stack
---

Karma Coin employs a modern, flexible tech stack that is designed for enabling agile development of the robust app user experience and the decentralization we aim to achieve for the Karma Coin blockchain. The Karma Coin core dev team has significant experience and skills building scalable solutions with it.

### Frameworks and Programming Languages

All languages, frameworks and libraries used are 100% open source software. All Karma Coin software is open source software.

- [Flutter framework](https://flutter.dev/) for the cross-platform Karma Coin App.
- [Rust programming language](https://www.rust-lang.org/) for the verifier and the Karma Coin blockchain - Karmachain.
- [Substrate blockchain framework](https://substrate.io/) for Karmachain.
- [Dart programming language](https://dart.dev/) for the verifier microservice.
- [Docusaurus framework](https://docusaurus.io/) for all docs and for the Karma Coin website.
- [Google Cloud Functions](https://cloud.google.com/functions), [Firebase Cloud Functions](https://firebase.google.com/docs/cloud-messaging) and [Firebase Cloud Firestore](https://firebase.google.com/docs/firestore) for providing push notifications to client apps when an appreication was received and when Karma Rewards were awarded.

### Service Providers

A verity of high-quality service providers and production-grade paid service tiers are ued to implement karma Coin.

- [Firebase](https://firebase.google.com/) as a phone number authentication service provider.
- [Twilio](https://www.twilio.com/) as an SMS gateway service provider.
- [Github](https://github.com/karma-coin) as the open source code repositories service provider.

---

### The Karma Coin 1.0 Tech Stack
Karma Coin 1.0 is code complete and is running in an open testnet that launched March 10th 2023. Karma Coin App 1.0  is available for Web, iOS and Android. For more info see https://karmaco.in/testnet

- [Karma Coin App 1.0](https://github.com/karma-coin/karmacoin-app) - the cross-platform Karma Coin App.
- [Karmachain 1.0](https://github.com/karma-coin/karmacoin-server) - the Karma coin blockchain, implementing Karma Mining. Built in Rust.
- `Public API 1.0` - A public Karmachain 1.0 api used by the App to submit transactions and to get data from Karmachain.
- `Authenticator 1.0` Microservice - a microservice that assists in verifying mobile phone numbers.
- [Karmachain 1.0 explorer](https://github.com/karma-coin/karmachain-dash) - A web-based testnet explorer. Deployed at https://chain.karmaco.in

---
### The Karma Coin 2.0 Tech Stack
info Karma Coin 2.0 is currently under active development. We plan to launch a testnet in Summer 2023.

- [Karmachain 2.0](https://github.com/karma-coin/karmachain) - The permission-less Karma Coin blockchain built with the Substrate blockchain framework in Rust.
- `Karmachain 2.0 public API endpoint` - A Karmachain 2.0 RPC public end point backed by Karma Coin org backing nodes.
- `Verifier 2.0` - A public end point providing the Karma chain phone verifier API. Used to verify mobile phone numbers of new users. Backed by a Karmachain 2.0 node.
- `Karma Coin App 2.0` - The cross-platform Karma Coin App for Web, iOS and Android platforms.
- [Karmachain-js 2.0](https://github.com/karma-coin/karmachain-js) - An npm package that enables Javascript clients to use the Karmachain 2.0 API in a type-safe manner. Used by the Karma Coin app to communicate with Karmachain. 
- `Authenticator 2.0` - A Microservice proxy to firebase api - used by verifier for verifying mobile phone numbers.
- Public network dashboard and explorer - A public network explorer to Karmachain 2.0 based networks.
- `Karmawallet 2.0` - a Mac and Windows desktop wallet for managing large amounts of Karma Coin with support to hardware wallets.

---
:::info License
Copyright (c) 2022 by the Karma Coin Authors. This work is licensed under the [Karma Coin License](/docs/license).
:::
