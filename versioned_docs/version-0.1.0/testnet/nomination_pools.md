---
id: mining-pools
title: Mining Pools
sidebar_label: 👨‍👩‍👧‍👦 Mining Pools
---

## Overview
Mining pools empowers Karma Coin users to pool together Karma Coins to nominate one ore more Karmachain 2.0 validators, and to earn validation rewards awarded to the validators. 

Mining Pools exist on Karmachain and are therefore more secure than off-chain 3rd party pools. Users don't need to trust pool owners promises not to steal their coins from the pool. Karmachain enforces the security of users pool coins.

Mining pools can be created anynone without anyone's permission as long as the user stakes the minimum amount required to create a pool. 

This guide is designed for users who want to setup and make available mining pools to the Karma Coin users community.

Note that operating a pool requires monitoring validators performance and changing validators nominated by the pool based on validators performance.

# Creating a pool

## Create a pool owner account
1. Create a user account using the Karma Coin App.
2. Set up a web page, a social media page, or a Linktree page for your pool to provide information about it.
3. Set the social url of your account to your pool's web page. This enables users to learn more about your pool when considering which pool to join. To set the url tap `Set Profile Social Link` in the app's main menu.
4. Export your account's `backup words` from the app, write them down on a paper and store it in a safe place with your other important documents. To access the backwords, tap `Backup Account` from the app's main menu.
5. Make sure your account has sufficient funds to post the `minimum pool creation bond amount`. On Testnet 3 this is 5 Karma Coins.
6. Open the `polkadot.js browser externsion` in your web browser.
7. Click on the '+' button and select `import account from pre-existing seed`. Paste your account backup words and choose to use it with a Karma Coin network. e.g. `Karmachain TN3` for a testnet pool or `Karmachain Mainnet` for a mainnet pool.
8. Set the account's name to describe your pool. e.g. '[pool-name] owenr account' and set a password to enahance your account's security. 


## Create the pool

Follow the steps below to create a pool using the web UI avaialble [https://testnet.karmaco.in/#/explorer]((https://testnet.karmaco.in/#/explorer).

1. Go to `Network` > `Staking` tab.
2. Switch to `Pools` tab.
3. Click the `Add Pool` button.
4. `create pool from`` - Use your pool account your.
5. `initial value` - Set your initial bond amount (5 Karma Coins or more for Testnet 3) 
6. `description` - enter a short description of your pool or a social media url for your pool
7. Click `create` to create the pool.

Note the pool id - this is the unqiue identifier for your new pool.
You should see your pool in the pools list including pool id, description and the current pool roles.

Note: you can only be creator or member of one pool at a time. So, if you previously created or join a pool with your account then you need to delete it or leave it before creating a new one.

## Set Commision and update pool roles
TODO: write this.

## Nominate validators

1. Go to `Network` > `Staking` tab.
2. Then switch to `Overview` tab.
3. Choose validators that you want to nominate, copy their account addresses.
4. Go to `Developer` > `Extrinsics` tab.
5. Choose `nominationPools` and `nominate`. Enter your pool id and add the validators addresses.
6. Submit transaction using your pool owner account.

Now you can return to pool tab (`Network` > `Staking` > `Pools`) and see that your pool has nominees.

## Join a pool

1. Go to `Network` > `Staking` tab.
2. Then switch to `Pools` tab.
3. Choose pool that you like most, and click on `Join` button.
4. Choose your account and enter bond amount.
5. Click `Join` and submit transaction.

Note: you can also join a pool from the Karma Coin App.
Note that you can only be a mebmer of one pool at a time. You can't join a pool while still an owner or member of another pool.

## Leave a pool

1. Go to `Network` > `Staking` tab.
2. Then switch to `Accounts` tab and select `Pooled`.
3. Click on the three dots near your account and choose `Unbond funds`.
4. Enter amount that you want to unbond and click `Unbond` and submit transaction.
5. Wait for unbonding period (1 day) to end and then you can withdraw your funds.
6. After unbonding period pass, on the same page click on the three dots near your account and choose `Withdraw unbonded`.
7. Submit transaction, and funds will be returned to your account.

## Claim pool payout

1. Go to `Network` > `Staking` tab.
2. Then switch to `Accounts` tab and select `Pooled`.
3. Here you can find your account, and your earnings under `claimable` column.
4. To claim your earnings click on the three dots near your account and choose `Withdraw claimable`.
