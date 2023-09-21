---
id: nomination pools
title: Nomination pools
sidebar_label: 📜 Nomination pools
---

# App

# Polkadot UI

## Create Accounts
- To start nominating, you need to create a `Stash account`.
- The `Stash account` is where you keep most of your coins. It is the custodian of your staking funds.
- You can use any Substrate-compatible wallet to create these accounts. We recommend using the [polkadot.js extension](https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd). Refer to this guide [Create an Account using Polkadot JS Extension](https://www.youtube.com/watch?v=sy7lvAqyzkY) for more information about using the extension.

## Creating pool

1. Go to `Network` > `Staking` tab.
2. Then switch to `Pools` tab.
3. Click on `Add pool` button.
4. Using your `Stash account`, initial bond amount (at least 5 KCoins) and description (it is better to provide some URL link where users can find more information about your pool), then submit transaction.
5. Now you should see your pool in the list and information about it, like pool id, description, different pool roles and etc.

## Nominate validators

1. Go to `Network` > `Staking` tab.
2. Then switch to `Overview` tab.
3. Choose validators that you want to nominate, copy their addresses by clicking on their icons.
4. Go to `Developer` > `Extrinsics` tab.
5. Choose `nominationPools` and `nominate`. Pass your pool id and add validators addresses.
6. Submit transaction using same account which created pool.

Now you can return to pool tab (`Network` > `Staking` > `Pools`) and see that your pool has nominees.

## Joining pool

1. Go to `Network` > `Staking` tab.
2. Then switch to `Pools` tab.
3. Choose pool that you like most, and click on `Join` button.
4. Choose your account and enter bond amount.
5. Click `Join` and submit transaction.

## Leaving pool

1. Go to `Network` > `Staking` tab.
2. Then switch to `Accounts` tab and select `Pooled`.
3. Click on the three dots near your account and choose `Unbond funds`.
4. Enter amount that you want to unbond and click `Unbond` and submit transaction.
5. Wait for unbonding period (1 day) to end and then you can withdraw your funds.
6. After unbonding period pass, on the same page click on the three dots near your account and choose `Withdraw unbonded`.
7. Submit transaction, and funds will be returned to your account.

## Claim payout

1. Go to `Network` > `Staking` tab.
2. Then switch to `Accounts` tab and select `Pooled`.
3. Here you can find your account, and your earnings under `claimable` column.
4. To claim your earnings click on the three dots near your account and choose `Withdraw claimable`.
