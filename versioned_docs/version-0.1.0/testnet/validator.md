---
id: validator
title: Running a Validator Node
sidebar_label: ⛓️ Validation
---

Follow the instructions in this document to run your own a validator node on the [karmachain 2.0 Testnet 3 (TN3)](https://github.com/karma-coin/karmachain/releases/tag/v0.3.0).

## System Requirements
- The specs below are not a hard requirement to run a validator, but are considered best practice.
- Running a validator is a responsible task. Using professional hardware is a must.
- The most common way for a beginner to run a validator is on a cloud server running Linux. You may choose whatever VPS provider that your prefer. As for OS it is best to use a recent Debian-based Linux (Debian or Ubuntu).

### CPU
- x86-64 compatible
- Intel Ice Lake, or newer (Xeon or Core series)
- Minimum of 2 physical cores @ 3.4GHz. 4 cores recommended
- Simultaneous multithreading disabled (Hyper-Threading on Intel, SMT on AMD)
- Prefer single-threaded performance over higher cores count
- An NVMe SSD of 500 GB (As it should be reasonably sized to deal with blockchain growth)

### Memory
- 16 GB DDR4 ECC

### System
- Linux Kernel 5.16 or newer

### Network
- Minimum symmetric networking speed of 500 Mbit/s (62.5 MB/s).
- Make sure your system is configured to run NTP to sync its local time.

---

## Dev Environment Setup
Running a validator node requires [Docker](https://docs.docker.com/engine/install/).

## Read Testnet 3 Release Notes
Read the latest [testnet release](https://github.com/karma-coin/karmachain/releases/tag/v0.3.0).

## Run your node
The Karmachain TN3 node is available as a docker image on [DockerHub](https://hub.docker.com/layers/teamkarmacoin/karmachain/tn3/images/sha256-3c32d0b0896b8c67eb0f3a7221cfc430432c33d5569fc8e05c0eaa07d49deaac?context=explore). 

Alternatively, you can clone the Karmachain open source Github repo and build a docker image directly from source code. To do so, git check out the code from the [release tag](https://github.com/karma-coin/karmachain/tree/v0.3.0), build a local docker image and modify the docker run command below to use your local image instead of the dockerhub one.

1. Install `docker` for your platform.

2. Copy the command below to a text editor.

```bash
sudo docker run --name karmachain-node --mount source=chain-data,target=/chain-data -p 30333:30333 -p 9944:9944 -p 9933:9933 teamkarmacoin/karmachain:tn3 --base-path /chain-data --chain chain-spec/chainSpecTN3.json --port 30333 --unsafe-rpc-external --rpc-port 9933 --rpc-cors all --rpc-methods unsafe --validator --name [YOUR_NODE_NAME] --bootnodes /dns/testnet.karmaco.in/tcp/30333/p2p/12D3KooWF6sxqSYcgm2LTATwVWgnzTaZrf4zkJwskdAfFa9Crq2t --telemetry-url "wss://telemetry.polkadot.io/submit/ 0"
```

3. Modify the command to set your node's name as the value of the `--name` flag.

4. Run the modified command.

To verify that your node is running, view the logs of your node obtain the container id by running `sudo docker ps` and run `sudo docker logs NODE-CONTAINER-ID -f`. If your node is correctly set up then you should see blocks syncing via the logs.

### Create Accounts
- To start validating, you should create a `Stash account` and a `Controller account`.
- The `Stash account` is where you keep most of your coins. It is the custodian of your staking funds.
- The `Controller account` is an account designed to perform various validation-related transactions.

> Security note. 
On mainnet, for increased security, you want to set up your `Stash Account` as a cold wallet. Meaning, its private key should not be stored on your computer. Your controller acccount can be a hot-wallet with private key on your computer. For testnet, you can have both account private keys in your hot wallet. On Testnet, you can may skip the controller account creation step and use your stash account as your controller.

- You can use any Substrate-compatible wallet to create these accounts. We recommend using the [polkadot.js extension](https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd). Refer to this guide [Create an Account using Polkadot JS Extension](https://www.youtube.com/watch?v=sy7lvAqyzkY) for more information about using the extension.

## Request Testnet Coins
- Join the Karma Coin [Testnet Telegram Channel](https://t.me/karmacoinapp/293).
- The basic accounting unit of Karmachain is `Karma Coin` (KCOIN). The minimum amount is one-millionth KCOIN which is 1 Karma Cent (KCENT). 1 KCENT is one Micro KCOIN.
- The minimum testnet bonding amount is 1 KCOIN. We configured it in this way to make it easy to bond and validate.
- Share the public address of you `Stash account` and request testnet KCOINs for your bond.
- You will receive 1 million testnet Karma Coins which is sufficient to post the validation bond and additional smaller bonds.
- Once you received some funds, transfer some of them to your `Controller account`.

## Bond Karma Coins
Follow these steps to set up your validator.

- Bond coins in your `Stash account`. These coins will be used as stake for the security of the network and can be slashed. 

- Make sure not to bond your entire coin balance since in that case you will be unable to pay transaction fees from your `Stash account`.

- Make sure that your bond amount must be equal or greater than the minimum validation amount. For testnets, this is 500,000 Karma Coins.


- Access the testnet's web app on [testnet.karmaco.in](https://testnet.karmaco.in/#/explorer) and complete the steps below in it.

- Go to the Staking section. Click on `Accounts`, and then the `+ Stash` button.

  ![bond](/testnet/bond.png)

- `Stash account` - Select your Stash account. Make sure that your `Stash account` contains at least this much. You can, of course, stake more than this.
- `Value bonded` - How much KCOINs from the Stash account you want to bond/stake. Note that you do not need to bond all the KCOINs in that account. Also note that you can always bond more KCOINs later. However, withdrawing any bonded amount requires the duration of the un-bonding period.
- `Controller account` - Select yhour controller account.
- `Payment destination` - The account where the rewards from validating are sent. Payouts can go to any account. If you'd like to redirect payments to an account that is neither the controller nor the stash account, set one up. Note that it is extremely unsafe to set an exchange address as the recipient of your staking rewards.
- Next, click `Bond` and sign the transaction with your `Stash account`. You should see an ExtrinsicSuccess message in about a minute.
- Your bonded account will available under `Stashes`.
- You should now see a new card with all of your accounts (note: you may need to refresh the page). The bonded amount on the right corresponds to the funds bonded by the `Stash account`.

![bond](/testnet/stash.png)


## Generate Session Keys

Install Websocat

```bash
sudo wget -qO /usr/local/bin/websocat https://github.com/vi/websocat/releases/latest/download/websocat.x86_64-unknown-linux-musl
sudo chmod a+x /usr/local/bin/websocat
```

Run this command on the same machine that runs your validator node. Ensure that the node is running with the WS RPC port set to 9944.

```bash
echo '{"id":1,"jsonrpc":"2.0","method":"author_rotateKeys","params":[]}' | websocat -n1 -B 99999999 ws://127.0.0.1:9933
```

The output will have a hex-encoded `result` field. Save this result for a later step.

## Submit a `setKeys` Transaction

You need to tell Karmachain about your Session keys by signing and submitting an extrinsic. This is what associates your validator with your stash account and your controller account.

1. Select `Staking` from the `Network` menu.
2. Click on `Accounts` and select `All stashes`.
3. Locate your `Stash account` in the list of stashes.
4. Click the `Session Key` button. 
5. Paste the hex string value of `result field` of the response for `author_rotateKeys`.

For example, for this response:
```json
{"jsonrpc":"2.0","result":"0xcc10239e1384fb33117f5121bb394c3290c87e2ec79d145acf9e16493b3409190e48cd261f2d3a32c0c3f5e6f930f00dfd0dd6964c0baaeadb7009022d78d91a","id":1}
```

The value to copy and paste is `0xcc10239e1384fb33117f5121bb394c3290c87e2ec79d145acf9e16493b3409190e48cd261f2d3a32c0c3f5e6f930f00dfd0dd6964c0baaeadb7009022d78d91a`.

5. Click `Set Session Key`.

![setKeys](/testnet/set-session-key.png)


## Validating

1. Select `Staking` from the `Network` menu and click on `Accounts`. 

2. Click on `All Stashes` and Locate your stash account in the list.

3. Click `Validate` for your validator to set up validation.

The `Reward commission percentage` is the commission percentage that you can declare against your validator's rewards. This is the rate that your validator will be commissioned with.

`Payment preferences` - You can specify the percentage of the rewards that will get paid to you. The remaining will be split among your nominators.

You can also determine if you would like to receive nominations with the `allows new nominations` option.

![validate](/testnet/validate.png)

4. Click `Bond & Validate`.

5. Click on `Waiting` and verify that your node is listed as waiting.

At the top of the page, The number of validator slots that are available is displayed as well as the number of nodes that have signaled their intention to be a validator.

If your validator is not selected to become part of the validator set, it will remain in the waiting queue until it is.

There is no need to re-start your node if you are not selected for the validator set in a particular era.

The validator set is refreshed every era. In the next era, if there's a slot available and your node is selected to join the validator set, your node will become an active validator. Until then, it will remain in the waiting queue.

🎉 Congratulation, you have successfully set up validation and your node should start validation the testnet and get you coin rewards in the next era (in up to 24 hours).

## Summary
We hope this guide got your validator up and running smoothly.
Please feel free to contact Team Karma Coin if you came across any issue.


