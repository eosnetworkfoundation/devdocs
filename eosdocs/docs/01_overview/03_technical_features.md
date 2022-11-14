---
tags:
  - eosnetworkfoundation/docs/tree/main/docs/01_overview/03_technical_features.md
  - eosnetworkfoundation/docs
  - main
title: Technical Features
---

## WebAssembly C++ Compilation

Antelope uses C++ as the smart contract programming language. If you are a C++ developer, you do not need to learn a new programming language to understand Smart Contract APIs and how Antelope supports smart contract development through C++ classes and structures. With your existing C++ programming capabilities, you can onboard Antelope development faster and be able to program Antelope smart contracts using specific Antelope canonical C++ code constructs and Smart Contract APIs in no time.  

On top of the Antelope core layer, a WebAssembly (Wasm) virtual machine, `EOS VM`, executes smart contract code, and it is designed from the ground up for the high demands of blockchain applications which require far more from a WebAssembly engine than those designed for web browsers or standards development. The design choice of using Wasm enables Antelope to reuse optimized and battle-tested compilers and toolchains which are being maintained and improved by a broader community. In addition, adopting Wasm standard also makes it easier for compiler developers to port other programming languages onto the Antelope framework.

## High Throughput, Faster Confirmations and Lower Latency

Antelope is designed with high transactions throughput in mind and each new version is achieving significant improvements.

The consensus mechanism of Delegated Proof of Stake (DPOS) achieves high transaction throughputs because DPOS does not need to wait for all the nodes to complete a transaction to achieve finality. This behavior results in faster confirmations and lower latency.

The `EOS VM` mentioned earlier, and all its blockchain-dedicated features and improvements add significant contribution to the overall performance of the Antelope-based blockchains.

## Programmable Economics and Governance

The resource allocation and governance mechanism of any Antelope-based blockchains are programmable through smart contracts. You can modify the system smart contracts to customize the resource allocation model and governance rules of a Antelope blockchain. The on-chain governance mechanism can be modified using system smart contracts, as the core layer code does not always have to be updated for the changes to take place.

## Staking Mechanism

In Antelope-based blockchains, access to the system resources is regulated by a process called the staking mechanism. The system resources that fall under the scope of the staking mechanism are CPU and NET. You can directly interact with the blockchain through the cleos CLI, the RPC APIs, or an application to access CPU and NET by staking system tokens.


:::info Note

RAM is a persistent system resource on the Antelope blockchain and does not fall in the scope of the staking mechanism.

:::


When you stake tokens for CPU and NET, you gain access to system resources proportional to the total amount of tokens staked by all other users for the same resource at the same time. This means you can perform transactions at no cost but in the limitations of the staked tokens. The staked tokens guarantee the proportional amount of resources regardless of any variations in the free market.

You can also allocate the system resources to Antelope accounts in a programmatic manner by customizing the resource allocation model in the system smart contract. This flexibility is provided by the programmable economics of the Antelope framework.

## Business Model Flexibility

Applications built on Antelope can adopt a freemium model in which application users do not need to pay for the cost of resources needed to execute transactions.

The execution of the costless transactions under the freemium model is facilitated by applications co-signing the transactions with the user. Alternatively, applications can also stake enough system tokens to guarantee the resources needed.

## Comprehensive Permission Schema

The Antelope framework has a comprehensive permission system for creating custom permission schemata for various use cases. For example, you can create a custom permission and use it to protect a specific feature of a smart contract. You can also split the authority required to modify a smart contract across multiple accounts with different levels of authority. This comprehensive permission system allows you to build a permissioned application on top of a flexible infrastructure.

## Upgradability

Applications deployed on Antelope-based blockchains are upgradeable. This means you can deploy code fix, add features, and change the application’s logic, as long as sufficient authority is provided. As a developer, you can iterate your application without the risk of being locked-in to a software bug permanently. It is also possible, however, to deploy smart contracts that cannot be modified on a Antelope-based blockchain. These decisions are at the discretion of developers rather than restricted by the protocol.

## Efficient energy consumption

With `DPOS` as the consensus mechanism, Antelope consumes much less energy to validate transactions and secure a blockchain compared to other consensus algorithms.

## What's Next?

- [Get Started](../02_getting-started/index.md): Learn how to develop on an Antelope blockchain
- [Protocol](../04_protocol/index.md): Understand the protocols that makes up an Antelope blockchain
- [Get Involved](../get-involved/index.md): Learn how to get involved and contribute to the Antelope ecosystem.
