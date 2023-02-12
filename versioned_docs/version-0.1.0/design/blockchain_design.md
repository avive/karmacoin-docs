---
id: blockchain
title: Blockchain Design
sidebar_label: Blockchain
slug: /blockchain
---

# Blockchain Design
This page describes the Karma Coin on-chain data. We are using `Protobufs` as the language to describe the data. 

The design decisions assume Karma Coin blockchain will be implemented using `Substrate`. 

This design constraint influences the data modeling as we ensure compatibility with Substrate basic data types and idioms. For example, account Ids are not just ED25519 public keys as they include a chain-id prefix to avoid cross-chains signature issues and balances are defined to support locked funds.

## On-chain Data Modeling
The following section describes the data stored on-chain.

### Basic Data Types

```protobuf
// Account id is derived from a public key
message AccountId {
  // net id and public key per Substrate concept
  bytes data = 1;
}

// CharTrait defines specific supported character traits
enum CharTrait {
  CHAR_TRAIT_KIND = 0;
  CHAR_TRAIT_HELPFUL = 1;
  CHAR_TRAIT_SMART = 2;
  // etc...
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
  COIN_TYPE_CORE = 0;   // $KCents - the basic accounting unit of Karma Coins
  COIN_TYPE_STABLE = 1; // $KCStableCents - a built-in stable coin
  // other coin types can be added in future versions of the protocol
}

// We use substrate notions here to support PoStake consensus such as locked funds
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
  repeated SignedTransaction transactions = 4; // all transactions in blocks
}
```

- see Transactions for additional information about Karma Coin transactions...
---

## Consensus Protocol
Karma Coin uses a nominated Proof of Stake (nPOS) consensus protocol with deterministic finality on blocks. The protocol used is Parity tech `Babe` and `Grandpa`. Block producers and validators must stake an amount of KCoin in order to participate in the network. Entities who want to participate in the consensus protocol must be both block producers and validators.


---

## Accounts and Addresses
Karma Coin uses accounts and addresses so the standard Substrate wallets can be used with Karma Coin.

Karma Coin should Substrate SS58 address format for accounts identifiers. 

Users key pairs should use the ED25519 scheme.

Accounts ids should be derived from user's maintain public keys and include a network id to avoid cross-chain signing issues. If public key for signature verification purposes can't be obtained from these ids then it needs to be included separately in signed transactions and messages so signatures can be verified.

---

## Mobile phone verifiers
Verifiers should always run a blockchain node and must always participate in the consensus protocol. e.g. they are both block producers and validators. Verifiers servers should be configured to have local access to a node managed by the verifiers and use the same ids for verification and consensus participation.

---

## Transactions
Karma Coin supports 3 kinds of blockchain transactions: `NewUser`, `Update` and `Payment`. Each transaction is signed by the user's private key which corresponds to its public accountId.

### NewUser Transaction
This transaction is submitted by new Karma Coin users to create an on-chain account.
It includes a signed message from a trusted verifier that attests the user's requested unique user-name, verified phone number and account id.

```protobuf

// Created and signed by a verifier to attest that an account owns a mobile number
message UserVerificationData {
  AccountId verifier_account_id = 1;
  uint64 timestamp = 2;
  VerificationResult verification_result = 3;
  AccountId account_id = 4;
  MobileNumber mobile_number = 5;
  string requested_user_name = 7;
  Signature signature = 8;
}

enum VerificationResult {
  VERIFICATION_RESULT_UNSPECIFIED = 0;
  VERIFICATION_RESULT_USER_NAME_TAKEN = 1; // there's already a user with the requested user name
  VERIFICATION_RESULT_VERIFIED = 2; // user is verified using provided token
  VERIFICATION_RESULT_UNVERIFIED = 3; // user is not verifier using provided token
  VERIFICATION_RESULT_MISSING_DATA = 4; // request is missing required data
  VERIFICATION_RESULT_INVALID_SIGNATURE = 5; // bad client signature
  VERIFICATION_RESULT_ACCOUNT_MISMATCH = 6; // different account associated with phone number
}

// new user transactions submitted by users
message NewUserTransactionV1 {
    // Evidence from a valid verifier about the new user
    UserVerificationData verify_number_response = 1;
}
```



---
:::info License
Copyright (c) 2022 by the Karma Coin Authors. This work is licensed under the [Karma Coin License](/docs/license).
:::