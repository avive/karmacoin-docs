---
id: nominator
title: Become a Nominator
sidebar_label: 🙋‍♂️ Nomination
---

Nominators are one type of participant in the staking subsystem of Polkadot. They appoint their stake to the validators, the second type of participant. By appointing their stake, they can elect the active set of validators and share in the rewards that are paid out.

While the validators are active participants in the network that engage in the block production and finality mechanisms, nominators take a slightly more passive role. Being a nominator does not require running a node of your own or worrying about online uptime. However, a good nominator performs due-diligence on the validators that they elect. When looking for validators to nominate, a nominator should pay attention to their own reward percentage for nominating a specific validator - as well as the risk that they bear of being slashed if the validator gets slashed.

If you are a beginner, please watch the [video](https://www.youtube.com/watch?v=F59N3YKYCRs) below for detailed instructions.

### Create Accounts
- To start nominating, you need to create a `Stash account`.
- The `Stash account` is where you keep most of your coins. It is the custodian of your staking funds.
- You can use any Substrate-compatible wallet to create these accounts. We recommend using the [polkadot.js extension](https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd). Refer to this guide [Create an Account using Polkadot JS Extension](https://www.youtube.com/watch?v=sy7lvAqyzkY) for more information about using the extension.

## Request Testnet Coins
- Join the Karma Coin [Testnet Telegram Channel](https://t.me/karmacoinapp/293).
- The basic accounting unit of Karmachain is `Karma Coin` (KCOIN). The minimum amount is one-millionth KCOIN which is 1 Karma Cent (KCENT). 1 KCENT is one Micro KCOIN.
- The minimum testnet bonding amount is 1 KCOIN. We configured it in this way to make it easy to bond and validate.
- Share the public address of you `Stash account` and request testnet KCOINs for your bond.

## Nominating
Go to Network > Staking > Accounts. Then press `Nominator` button. 
- `Stash account` - Select your Stash account. Make sure that your `Stash account` contains at least this much. You can, of course, stake more than this.
- `Value bonded` - How much KCOINs from the Stash account you want to bond/stake. Note that you do not need to bond all the KCOINs in that account. Also note that you can always bond more KCOINs later. However, withdrawing any bonded amount requires the duration of the un-bonding period.
- `Payment destination` - The account where the rewards from nominating are sent. Payouts can go to any account. If you'd like to redirect payments to an account that is neither the controller nor the stash account, set one up. Note that it is extremely unsafe to set an exchange address as the recipient of your staking rewards.
- Next, click `Next` and choose validators that you want to nominate.
- Now, click `Bond & Nominate` and sign transaction with your `Stash account`. You should see an ExtrinsicSuccess message in about a minute.

## Nominator management
- You can change your nominations at any time by clicking on three dots on the right side of your account and then clicking `Set nominees`.
- You can also change your `Payment destination` by clicking on three dots on the right side of your account and then clicking `Change reward destination`.
- Bond more funds or unbond funds in same menu.
