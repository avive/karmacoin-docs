---
id: blockchain
title: Blockchain Design
sidebar_label: Blockchain
slug: /blockchain
---

# Blockchain Design
This page describes the KarmaCoin on-chain data. We are using `Protobufs` as the language to describe the data. The design decisions assume Karmacoin blockchain will be implemented using `Substrate`. This design constraint influences the data modeling as we ensure compatibility with Substrate basic data types and idioms. For example, account IDs are not public key but rather derived from public keys with optional a chain-id prefix to avoid cross-chains signature related issues and balances are defined to support locked funds.

## On-chain Data Modeling
The following section describes the data stored on-chain.

### Basic Data Types

```protobuf
// Account id is derived from a public key
message AccountId {
  // derived from pub key
  bytes data = 1;
}

// CharTrait defines a specific supported character trait
enum CharTrait {
  CHAR_TRAIT_KIND = 0;
  CHAR_TRAIT_HELPFUL = 1;
  CHAR_TRAIT_SMART = 2;
}

// TraitName associates a name to each unique CharTrait
message TraitName {
  CharTrait trait = 1;
  string name = 2;
}

// TraitScore is a specific character trait score for a specific user
message TraitScore {
  CharTrait trait = 1;
  uint32 score = 2;
}

// A non-negative coin amount in a supported coin type
message Amount {
  uint64 value = 1;
  CoinType coin_type = 2;
}

// Supported built-in coin types
enum CoinType {
  COIN_TYPE_CORE = 0;   // $KCents - the basic accounting unit of KarmaCoins
  COIN_TYPE_STABLE = 1; // $KCStableCents - a built-in stable coin
  // other coin types can be added in future versions of the protocol
}

message Balance {
  Amount free = 1;
  Amount reserved = 2;
  Amount misc_frozen = 3;
  Amount fee_frozen = 4;
}
```

---

### Users Data

A user has basic account info such as AccountId, a unique user-name (string) and a verified mobile phone number.
In addition, coin balances and translations nonce are stored for each user.
The user's score for each character trait that has a non-zero score is maintained.
Pre-encryption keys are stored to facilitate e2e messaging between any two users.

```protobuf
message User {
  AccountId account_id = 1; // account id derived from a public key
  uint64 nonce = 2;
  string user_name = 3; // unique across the system
  MobileNumber mobile_number = 4; // verified current number
  repeated Balance balances = 5;
  repeated TraitScore trait_scores = 6;
  repeated PreKey pre_keys = 7; // one-time enc pre-keys for e2e messaging
}
```
---

### Phones Verifier
Phones verifiers are used to verify user's mobile phone numbers. The account ids and names of active verifiers which are in-consensus  are stored on-chain. Sudo or governance operations may modify this data.

```protobuf
message PhoneVerifier {
  AccountId account_id = 1; // verifier's account id
  string name = 2;
}
```

---

### Onchain Data
The following is a conceptual definition of all on-chain stored data. Besides users and verifiers, the chain stores all executed transactions.

```protobuf
message OnChainData {
  repeated User users = 1;
  repeated PhoneVerifier sms_verifiers = 2;
  repeated TraitName traits = 3; // char trait ids supported by the system
  repeated SignedTransaction transactions = 4; // all transactions
}
```

- see Transactions for additional information about Karmacoin transactions...
---

:::info License
Copyright (c) 2022 by the [Karmacoin Authors](https://github.com/avive/karmacoin-docs). This work is licensed under the [Karmacoin License](/docs/license).
:::
