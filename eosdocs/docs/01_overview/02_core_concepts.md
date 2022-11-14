---
tags:
  - eosnetworkfoundation/docs/tree/main/docs/01_overview/02_core_concepts.md
  - eosnetworkfoundation/docs
  - main
title: Core Concepts
---

## Accounts, Wallets and Permissions

### Accounts

An account is a human-readable name that is stored on the blockchain. It can be owned through authorization by an individual or group of individuals depending on permissions configuration. An account is required to transfer or push any valid transaction to the blockchain.

### Wallets

Wallets are clients that store keys that may or may not be associated with the permissions of one or more accounts. Ideally, a wallet has a locked (encrypted) and unlocked (decrypted) state that is protected by a high entropy password. The Antelope/leap repository comes bundled with a CLI client called `cleos` that interfaces with a lite-client called `keosd` and together, they demonstrate this pattern.

### Authorization and Permissions

Permissions are arbitrary names used to define the requirements for a transaction sent on behalf of that permission. Permissions can be assigned for authority over specific contract actions by *linking authorization* or linkauth.

For more information about these concepts, see the [_Accounts and Permissions_](../04_protocol/04_accounts_and_permissions.md) documentation.
<!-- The link will be updated once the initial site is live -->

## Smart Contracts

A smart contract is a piece of code that can execute on a blockchain and keep the state of contract execution as a part of the immutable history of that blockchain instance. Therefore, developers can rely on that blockchain as a trusted computation environment in which inputs, execution, and the results of a smart contract are independent and free of external influence.

## Delegated Proof of Stake (DPOS)

The Antelope framework implements a proven decentralized consensus algorithm capable of meeting the performance requirements of applications on the blockchain called the _Delegated Proof of Stake_ (DPOS). Under this algorithm, if you hold tokens on a Antelope-based blockchain, you can select block producers through a continuous approval voting system. Anyone can choose to participate in the block production and will be given an opportunity to produce blocks, provided they can persuade token holders to vote for them.

For more information about DPOS BFT, see [Antelope Consensus](../04_protocol/01_consensus_protocol.md#3-eosio-consensus-dpos--abft).

<!-- The link will be updated once the initial site is live -->

## System Resources

### RAM

RAM, in a Antelope-based blockchain, is one of the important system resources consumed by blockchain accounts and smart contracts. RAM acts as a permanent storage and is used to store account names, permissions, token balance and other data for speedy on-chain data access. RAM needs to be purchased and is not based on staking as it is a limited persistent resource.

More details about RAM as a system resource can be found [here](https://docs.eosnetwork.com/system-contracts/latest/key-concepts/ram).

### CPU

CPU, in a Antelope-based blockchain, represents the processing time of an action and is measured in microseconds (μs). CPU is referred to as `cpu bandwidth` in the cleos `get account` command output and indicates the amount of processing time an account has at its disposal when pushing actions to a contract. CPU is a transient system resource and falls under the staking mechanism of Antelope.

More details about CPU as a system resource can be found [here](https://docs.eosnetwork.com/system-contracts/latest/key-concepts/cpu).

### Network (NET)

Besides CPU and RAM, NET is also a very important resource in Antelope-based blockchains. NET is the network bandwidth, measured in bytes, of transactions and is referred to as `net bandwidth` on the cleos `get account` command. NET is a also a transient system resource and falls under the staking mechanism of Antelope.

More details about NET as a system resource can be found [here](https://docs.eosnetwork.com/system-contracts/latest/key-concepts/net).

## What's Next?

- [Technical Features](03_technical_features.md): Learn about Antelope's technical features
