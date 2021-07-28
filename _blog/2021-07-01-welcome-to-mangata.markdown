---
layout: post
title:  "Anatomy of an attack on Uniswap traders from 13.11.2020"
date:   2021-07-01 16:29:20 +0200
image: "traps.jpg"
author: "Mangata Team"
author-image: "mangata-team.png"
---


While conducting on-chain research last night, our team was experimenting with several strategies involving front-running Ethereum transactions. During this process, a unique attack vector came across our radar. While running a test bot that was benchmarking across a few Uniswap pools, our bot mistakenly bought into a pool created just moments ago.

It was a pool that was trying to fake a token sale on Uniswap of an existing token sale campaign. The attackers had tried to mimic the CFI token, using a Fake-CFI token. They created a number of decoy token contracts; here is one example:

<https://etherscan.io/token/0xbad7560220d89d39da1403eb854e2db2f27f9f30>

This contract mimics the ERC-20 standard, but the transfer function is limited to a one-way valve. You can buy the tokens from Uniswap, but can’t sell them later.

Function `multiaddress` is the only function to set allowed addresses. Allowed addresses are called `_Addressint[]` in the code and only the contract owner can set new allowed addresses.

Here is an example of an approval transaction allowing selected addresses to transfer tokens:

<https://etherscan.io/tx/0x7aafa34cf47c9f0bacc5d325e00008d488bb10092f589b50bd89d557d81cc49e>

It is done by the `multiaddress` function call.

Approximately 164 addresses have bought this token to date and have been scammed. At least 25 ETH of damage has been done from a single contract alone, with many more contracts remaining that use the same name and code.

This is an example of a trap token, that mimics ERC-20 or another standard but does not encompass its complete functionality. Such trap tokens are a real danger for automated traders on Ethereum. Everyone who bought these trap tokens or provided liquidity to the trap token Uniswap pool lost their ETH.

For an automated trading strategy, it’s difficult to distinguish between a properly functioning ERC-20 and a trap token. The behavior of the pool is similar to a legitimate pool. In fact, the attacker was even washtrading his own ETH through the pool, to create the illusion of a high-volume pair with a growing fake-token price.

To prevent such attack vectors, we encourage algorithmic traders to use verified token lists for their strategies. This can prevent them from falling prey to similar frauds.