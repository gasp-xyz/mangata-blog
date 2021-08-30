---
layout: post
title: "The first front-running attack on Karura just happened"
date: 2021-08-30
image: "karura-frontrunning.jpg"
author: "Mangata Team"
author-image: "mangata-team.png"
excerpt: "<p>On 25th August, 2021, the first known front-running attack on the Karura network happened. Front-running is a form of value extraction and we consider it theft. It is now coming to the Kusama ecosystem and will cost retail users millions of dollars in value. This article explains the details of the attack, how we were able to reproduce it and what the Mangata project plans to do to eliminate value extraction.</p>"
---

## Intro

On 25th August, 2021, the first known front-running attack on the Karura network happened. Front-running is a form of value extraction and we consider it theft. It is now coming to the Kusama ecosystem and will cost retail users millions of dollars in value. This article explains the details of the attack, how we were able to reproduce it and what the Mangata project plans to do to eliminate value extraction.

## What is Value Extraction?

Value extraction is one of the most [serious threats to DeFi](https://blog.mangata.finance/blog/2021-08-01-miner-extractable-value-the-biggest-thorn-in-defi/){:target="\_blank"}. It is a form of stealing that is done by malicious bots looking for genuine transactions freshly submitted to the blockchain and then adding their own transactions that are designed to steal from the genuine transaction.

In the simplest form, value extraction is done by influencing the price of a DEX swap. Every transaction in a DEX moves the price a little into a certain direction. For example, if you use the Karura DEX to swap kUSD for KSM, there will be less supply of KSM and therefore the price for KSM against kUSD will rise. Front-runners use so-called flashbots that scan the blockchain for upcoming transactions and then will abuse the price dynamic and insert their own transaction ahead of time (“front-run”) to extract value. They buy some tokens just the moment before the actual transaction and sell them a few moments later and a little bit of profit goes into the pocket of the attacker with every successful transaction.

But the value extracted is not extracted from the DEX, but rather from honest traders that have to pay higher prices to exchanges because price is manipulated just the moment they are making their trades. This is the reason why it is an illegal practice in traditional finance.

## The first known successful value extraction on Karura

While extracting value is pretty common on Ethereum and about 0.34 ETH are stolen with every block, it hasn’t been witnessed in the Polkadot and Kusama ecosystems. Until now.

On 25th August, 2021, a transaction was sent to the Karura network intending to [swap 100,000 kUSD into KSM](https://karura.subscan.io/extrinsic/0x73599d9a253f8bd8f847289d0c29c6e83dcc7351b435718cfcf420b6edf12ae4){:target="\_blank"}. At the time of writing, the kUSD-KSM liquidity pool on Karura is roughly 6 to 7 Million kUSD deep, so a transaction offering 100,000 kUSD would move the price enough to be considered a target for a flashbot.The transaction was included in block [400803](https://karura.subscan.io/block/400803){:target="\_blank"}.

Our presumed attacking flashbot saw the pending transaction and quickly inserted their own [malicious transaction to swap 235 kUSD for KSM](https://karura.subscan.io/extrinsic/0x125503e93e6f8020bdcb06b3b22dc9547bf14714dbef85f9efb95dd2b1b8cacc){:target="\_blank"}. The transaction was incentivized with a tip of 0.001 KAR, likely to make sure it would be inserted ahead of the original transaction. By doing this, the attacker was able to swap their own kUSD for KSM before the original 100,000 kUSD transaction would move the price of KSM up. The attacker got 0.7627 KSM for their 235 kUSD.

[Two blocks later](https://karura.subscan.io/block/400805){:target="\_blank"}, (now that the price of KSM was higher) a “backswap” transaction was sent by the attacker [swapping the 0.7627 KSM back for kUSD](https://karura.subscan.io/extrinsic/0xad22e722599fe0daf86c3430c998130ddcb38d9aed2d1e825bbca0b4c1a776e7){:target="\_blank"}. The attacker received 240.63 kUSD

From this attack alone, the attacker was able to make a profit of 5.63 kUSD on the attack. The cost of the front-run was 0.0066 KAR or about 0.05 USD.

## How we replicated it

At Mangata, it is our mission to put an end to front-running and stealing from users aka “extracting value”. That is why we have set up custom analytics-tools to constantly analyze the blockchain for attacks like these, understand their structure and to find ways to prohibit such behavior on our upcoming Polkadot parachain.

We were expecting such attacks to happen eventually but were surprised that they happened so fast after the inception of the first DEX in the Kusama ecosystem. Once our analytics tools alerted us of the attack, we analyzed the pattern and it confirmed our suspicions. In order to evaluate the feasibility, we attempted to reproduce this type of attack: sandwiching a genuine transaction with a front-run and backswap.

We programmed our bot to watch the KAR-KSM pool for relevant transactions. Once the bot saw a pending transaction to [swap 100 KSM for KAR](https://karura.subscan.io/extrinsic/0xbc9c358180f4f44b118808fd096bff602f83121a8e95f2e6a1b61bc906230bdc){:target="\_blank"}, it quickly [front-ran it to swap 19 of our own KSM](https://karura.subscan.io/extrinsic/0x188b6250494713edcd7ee42a8ae61f186cc86370ac1fbbaaaca8f7d4ddadb65b){:target="\_blank"}, paying a 0.003 KAR tip to get ahead in the queue. Two blocks later, we did a [backswap](https://karura.subscan.io/extrinsic/0x7a8d56184016bd697476b4b3adad0b01d1c307cbe651da08551a1fa0843950f3){:target="\_blank"} and got a total of 0.03 KSM (~8 USD) profit out of the transaction.

## Analysis

We were able to show that value extraction is already happening on the Karura blockchain. This is only the beginning and while the universally accessible nature of Substrate based blockchains is a great gift to developers around the world, it also makes it easier to attack different blockchain and DEX ecosystems with less effort. We expect to see a heavy increase in value extraction over the coming months and years. As we already discussed in a previous blogpost, we see [value extraction as one of the biggest problems in DeFi](https://blog.mangata.finance/blog/2021-08-01-miner-extractable-value-the-biggest-thorn-in-defi/){:target="\_blank"} that could not only steal millions from users, but also corrupt entire blockchains and put them to a grinding halt.

Front-running is theft and we must put an end to it. This is why Mangata is developing a novel consensus mechanism that is intended to prevent front-running and value extraction. We are proud to say that we recently [completed our first milestone in Parity’s official Substrate Builders](https://www.parity.io/blog/substrate-builders-program-milestone-update-august-2021){:target="\_blank"} Programme which also shows our proof-of-concept for this interesting new approach.

We invite you to join us in making DeFi more fair and accessible for everyone!
