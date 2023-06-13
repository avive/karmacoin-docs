---
id: basics
title: Getting Started
sidebar_label: 📜 Getting Started
---

This technical document describes the basic transactions and data operations supported by Karmachain 2.0 Testnest2 (TN2).

## Creating an account

You can use any substrate-compatible wallet but the easiest way to get started is using the polkadot.js Crome extension.

1. Install the [polkadot.js chrome extension](https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd).
2. Connect to a Karmachain testnet via [polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftestnet.karmaco.in%2Ftestnet%2Fws#/explorer).
3. Follow the instructions in this guide. [Create an Account using Polkadot JS Extension](https://www.youtube.com/watch?v=sy7lvAqyzkY).

---

## Signing Up
1. Go to `Developer` > `Extrinsics` and choose from drop down menu `identity` and `newUser`.

![newUserTx](/testnet/new-user-tx.png)

2. Enter new user information
- `using the selected account` - the account which will sign transaction for this user, should match the `accountId` parameter.
- `accountId` - should be same as account used for signing tx
- `username` - your requested Karma Coin user name.
- `phoneNumber` - your requested phone number in international format. e.g. 972549805381

3. Click `Submit Transaction` to send the transaction. You should see an `ExtrinsicSuccess` message in few seconds.

----

## Appreciate Someone

1.Go to `Developer` > `Extrinsics` and choose from drop down menu `appreciation` and `appreciation`.

![appreciation](/testnet/appreciation.png)

2. Enter the appreciation's information.
- `using the selected account` - account which send appreciation (your account)
- `to` - AccountId, username or phone number of the appreciation's receiver
- `amount` - amount of tip in `KCents`to send with appreciation
- `communityId` - not supported yet. So do not include this option.
- `charTraitId` - appreciation char trait id. For example, 6 for `Awesome`, 7 for `Smart`. Click on the switch to include this option.

3. Click `Submit Transaction`. You should see an ExtrinsicSuccess message in few seconds.

---

## Browse Available Character Traits
1. Go to `Developer` > `Chain state`.
2. Choose `appreciation` and `charTrait`.
2. Click on "+".

You should see list of available character traits.

![characterTraits](/testnet/char-traits.png)

----

## View Current Account Balance

After signing up, you can see your account's balance in `Accounts` tab.

![accountBalance](/testnet/account-balance.png)

----

## View Account Information

1. Go to `Developer` > `Chain state`.
2. Choose `identity` and `identityOf`.
3. click on "+".
4. 
You should see basic information about your account.

![accoutnInfo](/testnet/account-info.png)

----



