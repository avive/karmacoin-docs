---
id: mining-pools
title: Mining Pools
sidebar_label: 👨‍👩‍👧‍👦 Mining Pools
---

## Overview
Mining pools is a unique feature of Karma Coin.
Mining pools empower Karma Coin users to pool together Karma Coins to nominate one or more Karmachain validators, and to earn a portion of the validation rewards awarded to Karmachain validators. Karma Coin users use the Karma Coin App to join a pool and to claim rewards. 

### Mining Pools are On-chain
Mining Pools exist on Karmachain and are therefore more secure than off-chain 3rd party pools. 
Users don't need to trust pool owners promises not to steal their coins from the pool. Karmachain enforces the security of users' pool coins.

### Mining Pools are Permissionless
Mining pools can be created anyone without anyone's permission as long as the user stakes the minimum amount required to create a pool.

Mining pools can be joined by anyone without anyone's permission as long as the joiner stakes the minimum amount required to join a pool.

This guide is for users who want to setup and make available mining pools to the Karma Coin users community.

Note that operating a pool requires monitoring Karmachain validators performance and changing validators nominated by the pool based on validators performance.

### Working with Pools
Pools creators and maintainers use the more advanced web UI to create pools and to perform pool-related operations. For a testnet, use the web ui to Karmachain available at [https://testnet.karmaco.in](https://testnet.karmaco.in) together with the [polkadot.js extension](https://polkadot.js.org/extension/).

---

## Step 1 - Create Pool Owner Account

1. Install the [polkadot.js browser extension](https://polkadot.js.org/extension/) for your browser and open it.
2. Click the '+' icon and select `Create new account`.
3. Choose the Karma Coin network for the account. e.g. `Karmachain TN3` for a testnet, or `Karmachain Mainnet` for a mainnet.
4. Write down the account security words to paper and store it with your important documents.
5. Enter account description and set password.
6. Fund the account so it has sufficient funds to create the pool's initial bond and to pay transaction fees. 

In Testnet 3 the bond's minimum amount is 5 Karma Coins.
You can transfer fund to this account from any Karma Coin user account via the Karma Coin App.
For testnets, you can request Testnet Karma Coins from the Karma Coin community.

---

## Step 2 - Create a Pool Website
Create a web page for your pool such as a social media page or a linktree page.
This page will be reviewed by Karma Coin users when considering which pool to join. 
- Add information about your pool and about the pool's owner to this page.
- Figure out the commission fee you are asking for maintaining the pool and add this information to the page.
- Explain the reasons for your requested commission fee.
- Add the web page's friendly URL to the pool's description.


## Step 3 - Create a Pool
Use the Karmachain web UI available at [https://testnet.karmaco.in/#/explorer](https://testnet.karmaco.in/#/explorer).

1. Go to `Network` > `Staking` tab.
2. Switch to `Pools` tab.
3. Click the `Add Pool` button.
4. `create pool from` - Use your pool account your.
5. `initial value` - Set your initial bond amount (5 Karma Coins or more for Testnet 3) 
6. `description` - paste the friendly URL of your pool's web page.
7. Click `create` to create the pool.
8. Sign the transaction with your pool owner account.


Note the new pool's id - this is the unique identifier for your new pool.
You should see your pool in the pools list including its pool id, description and the current pool roles.

Note that you can only be creator or member of one pool at a time. So, if you previously created or join a pool with your account then you need to delete it or leave it before creating a new one.

---

## Step 4 - Set Commission

Pool commission is a percentage of pool's earning that a `beneficiary accounts` gets for maintaining the pool and for nominating validators on behalf of the pool. It can be in the range of 0% to 100% of the pool's earnings. 

1. Go to `Developer` > `Extrinsics` tab.
2. Choose `nominationPools` and `setCommision`. 
3. Enter your `pool id`, `commission` and `beneficiary` account address.  

Note that Commission is set in `Perbill` units where 100% is 1 billion. This means that to set commission of 1% you enter 10,000,000. Beneficiary can be any Karma Coin account such as pool creator account. The beneficiary account is the account that the pool's commission will be sent to.

4. Submit the transaction using your `pool owner account`.

## Step 5 - Nominate Pool Validators
One or more validators are nominated by the pool and the pool gets a back percentage their validation rewards. These rewards are distributed as earnings to pool members. 
A pool will have no earnings unless its nominated validators earn validaton rewards for seucring Karmachain.

1. Go to `Network` > `Staking` tab.
2. Then switch to `Overview` tab.
3. Choose validators that you want to nominate, copy their account addresses.
4. Go to `Developer` > `Extrinsics` tab.
5. Choose `nominationPools` and `nominate`. 
6. Enter your pool id 
7. Add one ore more validators account addresses.
8. Submit transaction using your pool owner account.

Now you can return to pool tab (`Network` > `Staking` > `Pools`) and see that your pool has nominees.

-----

## Additional Pool Operations

### Changing Nominators
TODO: write this
---


### Setting Max Commission

Max commission is the maximum commission that the pool owner can set. Once set, it can't be removed, and can only be set to a lower value. So for example, if a pool's max commision is 20% then the pool creator will never be able to set it to more than 25%.

1. Go to `Developer` > `Extrinsics` tab.
2. Choose `nominationPools` and `setCommisionMax`. Enter your pool id and max commission. Commission is set in `Perbill` (Parts per billion units where 100% is 1,000,000,000). This means that to set commission of 20% you need to enter 200,000,000.
3. Submit transaction using your `pool owner account`.

---

### Setting Commission Change Rate

Commission change rate allow's pool creator to restrict how much commission can be changed at a time, and how often can it be changed.
So for example, setting change rate of 1% in 1,000 blocks means that the commision rate can't change in more than 1% in 1,000 blocks times the expected block time.

1. Go to `Developer` > `Extrinsics` tab.
2. Choose `nominationPools` and `setCommisionChangeRate`. Enter your pool id, commission change rate and commission change delay. Commission change rate is set in `Perbill` format, that means to set commission change rate equal to 1% you need to enter 10,000,000. And `commission change delay` is set in number of blocks units. 
3. Submit transaction using your pool owner account.

---

### Updating Pool Roles

A pool has 4 roles:

1. `Depositor` - creates the pool and is the initial member. Can only leave the pool once all other members have left. Once they have fully left, the pool is destroyed.
2. `Root` - can change the `nominator`, `bouncer`, or itself and can perform any of the actions the nominator or bouncer can perform, and manage commission.
3. `Nominator` - can select which validators the pool nominates.
4. `Bouncer` - can change the pools state and kick members if the pool is blocked.

When you create a pool, the creator account assumes all of the roles. You can update any of the roles to be assumes by any other account.

To change pool roles follow these steps:

1. Go to `Developer` > `Extrinsics` tab.
2. Choose `nominationPools` and `updateRoles`. Enter your pool id, and choose the roles you want to set/remove.
3. Submit transaction using your pool owner account.

--- 

### Deleting a Pool

You should delete a pool you own, if you decided to no longer maintaint and support it.
First, change the pool's state to `Destroying` from `Open`:

1. Go to `Developer` > `Extrinsics` tab.
2. Choose `nominationPools` and `setState`. Enter your pool id, and choose `Destroying` state.
3. Submit the transaction using your pool owner account.

Next, wait for all users leave pool by unbonding their funds or unbond their funds by itself. After that pool should be chilled:

1. Go to `Developer` > `Extrinsics` tab.
2. Choose `nominationPools` and `chill`. Enter your pool id.
3. Submit the transaction using your pool owner account.

After pool chilled you can unbond his funds and destroy the pool completely:

1. Go to `Developer` > `Extrinsics` tab.
2. Choose `nominationPools` and `unbond`. Enter your pool id and enter your bond amount including 6 decimals.
3. Submit the transaction using your pool owner account.

---

### Claiming Pool Payout

1. Go to `Network` > `Staking` tab.
2. Then switch to `Accounts` tab and select `Pooled`.
3. Here you can find your account, and your earnings under `claimable` column.
4. To claim your earnings click on the three dots near your account and choose `Withdraw claimable`.

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

---

