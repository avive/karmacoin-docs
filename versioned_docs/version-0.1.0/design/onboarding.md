---
id: onboarding
title: Onboarding
sidebar_label: Onboarding
slug: /onboarding
---

## On-boarding via a referral
1. Referrer's client creates a `payment transaction` with the receiver's mobile phone number and submits it to the network. In this case the receiver's has not created a user account yet. User can optionally specify a receiver's character trait to appreciate.
2. The active verifier sends a text message to the receiver's mobile phone, with link to download the app to his mobile phone with information about the amount of coin sent to it and the optional character trait appreciation.
3. Receiver downloads the Karmacoin mobile app and signs-up using his mobile phone number.
4. Once the active verifier verifies the receiver's mobile phone number, it creates and signs a `new user transaction` with information about the new user such as his chosen nickname and mobile phone number and submits it to the network (together with the payment transaction to make sure that block producer will get both or none). 
5. A block producer adds the two transactions consecutively to a block it creates. The payment transaction is now valid because the receiver's account is on chain. The block producer executes the in-consensus transaction processing logic handles the required update to balances and receiver's character trait score when applicable. For example, fee calculation, referral award and new user reward. This is deterministically verifiable by all other verifiers because the rules are deterministic and part of the runtime.

The chain should now have the following state:
1. Receiver has a new account on chain. 
2. Receiver's account is updated with the coin amount sent in the payment transaction from the referrer. 
3. A point is added to their character score in the receiver's account if the payment transaction included an appreciation.
4. Receiver's account is updated with the sign-up reward when applicable. 
5. Referrer's account is updated with the referral reward and is debited the amount sent to the receiver. 
6. The transaction fee is debited from its account unless it was paid by the protocol. 
7. The `payment transaction` is on-chain. 
8. The `new user transaction` is on-chain. 
9. Balances are updated with the payment transaction fees. e.g. the fee is either minted by the protocol and assigned to verifier or paid by the referring user to the verifier.

> Note that the verifier can only get the `payment transaction` fee (from the referrer or from the protocol) if he submits the 2 transactions to the chain. So it has an incentive to behave according to the protocol.

> Referral reward and signup rewards are assigned while the protocol hasn't reach the limit of minting of coins for these rewards. See tokenomics for more info.

---
## On-boarding without a referral
1. New user signs-up via a Karmacoin client and verifies his mobile phone number using the active verifier.
2. The verifier creates, signs and submits a `new user transaction` to the Karmacoin blockchain. It sets the referral's account id to void to signal that there is no referral for this new account creation.
3. Block producer executes the transaction, adds the new user account and the transaction to the chain and gets the transaction fee from the verifier. It also assigns the new user sign-up reward when applicable according to the protocol.

> Verifiers are run by the Karmacoin foundation and have an off-chain incentive to pay the transaction fees for new user accounts. e.g. mandate to see Karmacoin grows in terms of unique users.

The chain should now have the following state:
1. Receiver has a new account on chain.
2. Receiver's account is updated with the sign-up reward when applicable.
3. The new transaction fee is debited from verifier account unless it was paid by the protocol.
4. The `new user transaction` is on-chain.


---
:::info License
Copyright (c) 2022 by the [Karmacoin Authors](https://github.com/avive/karmacoin-docs). This work is licensed under the [Karmacoin License](/docs/license).
:::
