---
id: onboarding
title: Onboarding
sidebar_label: Onboarding
slug: /onboarding
---

## On-boarding via a referral

<img src="/appreciate.png" height="400"/>


1. Referrer's client creates a `payment transaction` with the receiver's mobile phone number and submits it to the network. In this case the receiver's has not created a user account yet. Referrer can optionally specify a receiver's character trait to appreciate as part of the transaction.

2. The transaction gets to the `Karmachain transactions pool`. An active verifier sees the transaction and figures out that receiver hasn't registered yet. It sends a text message to the receiver's mobile phone, with link to download the app to his mobile phone with information about the amount of coin sent, and the optional character trait appreciation. The verifier also stores the id of the pending payment transaction as the `referral transaction id` for the receiver's mobile phone number, so it can be included in the attestation it provides to the user in the next step.

3. Receiver downloads the Karma Coin mobile app and signs-up using his mobile phone number. This involves verifying his mobile number with the verifier and setting a unique available nickname. The verifier sends a signed attestation about the verified number and its association with an receiver's account id. The attestation includes the referrer's payment transaction id stored in the previous step.

4. Receiver creates and signs a `new user transaction`. It adds to it the verifier's attestation and the `referral transaction id` obtained by it in step 5 above.

5. A block producer gets the `new user transaction` from the pool and processes it. The attestation includes the referrer's payment transaction id. The producer locates this `payment transaction` in the pool by its id, and adds it to the block it is producing. The `new user transaction` is processed first and the `payment transaction` second. As part of processing of the `new user transaction`, the new user's online account is created and the new user's balance is updated with a `sign-up reward`. Next, it updates the referrer's account with the `referral reward` and updates balances based on the `payment transaction`. The referral reward payment is added to the payment translation's `transaction event` emitted by the producer. Note that in case that the `payment transaction` identified by the id is not in the pool, then no referral reward is assigned.

The chain should now have the following state:
1. Receiver has a new account on chain. 
2. Receiver's account is updated with the coin amount sent in the payment transaction from the referrer. 
3. A point is added to their character score in the receiver's account if the payment transaction included an appreciation.
4. Receiver's account is updated with the sign-up reward when applicable. 
5. Referrer's account is updated with the referral reward and is debited the amount sent to the receiver. 
6. The transaction fee is debited from referrer's account unless it was paid by the protocol via a subsidy.
7. The `payment transaction` is on-chain. 
8. The `new user transaction` is on-chain. 
9. Balances are updated with the payment transaction fees. e.g. the fee is either minted by the protocol and assigned to verifier or paid by the referring user to the verifier.

> Note that the block producer can only get the `payment transaction` fee (from the referrer or from the protocol) if it adds the 2 transactions to a block it is creating. So it has an incentive to behave according to the protocol.

> Referral reward and signup rewards are assigned while the protocol hasn't reached the limit of minting of coins for these rewards. See tokenomics for more info.

---
## On-boarding without a referral

1. New user signs-up via a Karma Coin client and verifies his mobile phone number using the active verifier.
2. The verifier sends the user a signed attestation with his account number, verified mobile phone number and nickname.
3. User queries the verifier for any payment transaction id associated with his mobile phone number. Since there is none, no transaction id is returned.
4. The new user creates, signs and submits a `new user transaction` to the Karma Coin blockchain which includes the verifier's attestation. It sets the referral's account id to void to signal that there is no referral for this new account creation.
5. A block producer gets the transaction from the memory pool, executes the transaction, adds the new user account and the transaction to the chain and gets the transaction fee from the user or from the protocol if a subsidy is applicable. It also assigns the new user sign-up reward when applicable according to the protocol.

> Verifiers are run by the Karma Coin foundation and have an off-chain incentive to pay the transaction fees for new user accounts. e.g. mandate to see Karma Coin grows in terms of unique users.

The chain should now have the following state:
1. Receiver has a new account on chain.
2. Receiver's account is updated with the sign-up reward when applicable.
3. The new transaction fee is debited from verifier account unless it was paid by the protocol.
4. The `new user transaction` is on-chain.


---
:::info License
Copyright (c) 2022 by the Karma Coin Authors. This work is licensed under the [Karma Coin License](/docs/license).
:::