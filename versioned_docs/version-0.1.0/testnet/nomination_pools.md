---
id: mining-pools
title: Mining Pools
sidebar_label: 👨‍👩‍👧‍👦 Mining Pools
---

## Overview
Mining pools empowers Karma Coin users to pool together Karma Coins to nominate one or more Karmachain validators, and to earn a portion of the validation rewards awarded to Karmachain validators. Karma Coin users use the Karma Coin App to join a pool and to claim rewards. 

Pools creators and maintainers use the more advanced web UI to create pools and to perform pool-related operations.

### Mining Pools are On-chain
Mining Pools exist on Karmachain and are therefore more secure than off-chain 3rd party pools. 
Users don't need to trust pool owners promises not to steal their coins from the pool. Karmachain enforces the security of users' pool coins.

### Mining Pools are Permissionless
Mining pools can be created anyone without anyone's permission as long as the user stakes the minimum amount required to create a pool. 
Mining pools can be joined by anyone without anyone's permission as long as the joiner stakes the minimum amount required to join a pool.

This guide is designed for users who want to setup and make available mining pools to the Karma Coin users community.
Note that operating a pool requires monitoring validators performance and changing validators nominated by the pool based on validators performance.

---

## Creating Pool's Owner Account
You can create a new Karmachain account in the polkadot.js browser extension or import an account created in the Karma Coin App to the extension.
You need to have sufficient funds in your accounts to create the pool's initial bond. In Testnet 3 the bond's minimum amount is 5 Karma Coins.

### Option 1 - Import from Karma Coin App
1. Open the `polkadot.js browser externsion` in your web browser.
2. Click on the '+' button and select `import account from pre-existing seed`. 
3. Paste your account backup words that you copied from the Karma Coin App.
4. Choose the Karma Coin network for the account. e.g. `Karmachain TN3` for a testnet pool or `Karmachain Mainnet` for a mainnet pool.
5. Enter account description and set password.

### Option 2 - Create a New Account
1. Open the `polkadot.js browser externsion` in your web browser.
2. Click the '+' icon and select `Create new account`.
3. Choose the Karma Coin network for the account. e.g. `Karmachain TN3` for a testnet pool or `Karmachain Mainnet` for a mainnet pool.
4. Write down the account security words to paper and store it with your important documents.
5. Enter account description and set password.

---

## Creating a pool

### Pool's Web Page
Create a web page for your pool such as a social media page or a linktree page.  This page will be reviewed by Karma Coin users when considering which pool to join. 
- Add information about your pool and about the pool's owner to this page.
- Figure out the commission fee you are asking for maintaining the pool and add this information to the page.
- Explain the reasons for your requested commission fee.
- Add the web page's friendly URL to the pool's description.


### Creating a Pool

Follow the steps below to create a pool using the web UI available at [https://testnet.karmaco.in/#/explorer](https://testnet.karmaco.in/#/explorer).

1. Go to `Network` > `Staking` tab.
2. Switch to `Pools` tab.
3. Click the `Add Pool` button.
4. `create pool from` - Use your pool account your.
5. `initial value` - Set your initial bond amount (5 Karma Coins or more for Testnet 3) 
6. `description` - paste the friendly URL of your pool's web page.
7. Click `create` to create the pool.

Note the pool id - this is the unique identifier for your new pool.
You should see your pool in the pools list including pool id, description and the current pool roles.

Note: you can only be creator or member of one pool at a time. So, if you previously created or join a pool with your account then you need to delete it or leave it before creating a new one.

---

## Setting Commission

Pool commission is a percentage of pool's earning that pool creator gets for maintaining the pool and nominating validators on behalf of the pool.
It can be in the range of 0% to 100% of pool's earnings. Follow these steps to set the pool's commission.

### Setting max commission

Max commission is the maximum commission that the pool owner can set. Can not be removed once set, and can only be set to more
restrictive values i.e. a lower max commission.

1. Go to `Developer` > `Extrinsics` tab.
2. Choose `nominationPools` and `setCommisionMax`. Enter your pool id and max commission. Commission is set in `Perbill` format, that means to set commission equal to 10% you need to enter 100000.
3. Submit transaction using your pool owner account.

### Setting commission change rate

Commission change rate allow to restrict how much commission can be changed at once and how often it can be changed.

1. Go to `Developer` > `Extrinsics` tab.
2. Choose `nominationPools` and `setCommisionChangeRate`. Enter your pool id, commission change rate and commission change delay. Commission change rate is set in `Perbill` format, that means to set commission change rate equal to 10% you need to enter 100000. And commission change delay is set in number of blocks.
3. Submit transaction using your pool owner account.

### Setting commission and beneficiary

1. Go to `Developer` > `Extrinsics` tab.
2. Choose `nominationPools` and `setCommision`. Enter your pool id, commission and beneficiary account. Commission is set in `Perbill` format, that means to set commission equal to 10% you need to enter 100000.
3. Submit transaction using your pool owner account.

---

## Nominating Validators
Validators are nominated by the pool and the pool shares their validation rewards.

1. Go to `Network` > `Staking` tab.
2. Then switch to `Overview` tab.
3. Choose validators that you want to nominate, copy their account addresses.
4. Go to `Developer` > `Extrinsics` tab.
5. Choose `nominationPools` and `nominate`. Enter your pool id and add the validators addresses.
6. Submit transaction using your pool owner account.

Now you can return to pool tab (`Network` > `Staking` > `Pools`) and see that your pool has nominees.

--- 

## Joining a Pool

You can only be a mebmer of one pool at a time. You can't join a pool while still an owner or a member of another pool.

1. Go to `Network` > `Staking` tab.
2. Then switch to `Pools` tab.
3. Choose pool that you like most, and click on `Join` button.
4. Choose your account and enter bond amount.
5. Click `Join` and submit transaction.

Note: you can also join a pool from the Karma Coin App.

---

## Leaving a Pool

1. Go to `Network` > `Staking` tab.
2. Then switch to `Accounts` tab and select `Pooled`.
3. Click on the three dots near your account and choose `Unbond funds`.
4. Enter amount that you want to unbond and click `Unbond` and submit transaction.
5. Wait for unbonding period (24 hours on Testnet) to end and then you can withdraw your funds.
6. After unbonding period pass, on the same page click on the three dots near your account and choose `Withdraw unbonded`.
7. Submit transaction, and funds will be returned to your account.

---

## Claiming Pool Payout

1. Go to `Network` > `Staking` tab.
2. Then switch to `Accounts` tab and select `Pooled`.
3. Here you can find your account, and your earnings under `claimable` column.
4. To claim your earnings click on the three dots near your account and choose `Withdraw claimable`.

---

## Pool roles

Pool have 4 roles:

1. Depositor - creates the pool and is the initial member. They can only leave the pool once all other members have left. Once they fully leave, the pool is destroyed.
2. Root - can change the nominator, bouncer, or itself and can perform any of the actions the nominator or bouncer can and also manage commission.
3. Nominator - can select which validators the pool nominates.
4. Bouncer - can change the pools state and kick members if the pool is blocked.

To change pool roles follow these steps:

1. Go to `Developer` > `Extrinsics` tab.
2. Choose `nominationPools` and `updateRoles`. Enter your pool id, and choose the roles you want to set/remove.
3. Submit transaction using your pool owner account.
