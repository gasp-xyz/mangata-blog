---
layout: post
title: "Mangata SDK 1.0: Build your own DEXes and Bots"
date: 2022-07-18
image: "airwhale-boat-building.png"
author: "Mangata Team"
author-image: "mangata-team.png"
excerpt: "Today, we are giving builders a new tool to start using the DeFi legos that Mangata X has to offer. We are releasing the Mangata SDK 1.0, the same software package that our team is using to build the Mangata X trading app. With this SDK (Software Development Kit), developers will be able to directly tap into the capabilities of Mangata X: gasless swaps, front-running prevention, and private transactions. This allows them to create their own trading bots, DEX interfaces, wallets, and apps."
---

Today, we are giving builders a new tool to start using the DeFi legos that Mangata X has to offer. We are releasing the [Mangata SDK 1.0](https://docs.mangata.finance/sdk/), the same software package that our team is using to build the Mangata X trading app.

With this SDK (Software Development Kit), developers will be able to directly tap into the capabilities of Mangata X: gasless swaps, front-running prevention, and private transactions. This allows them to create their own trading bots, DEX interfaces, wallets, and apps.

This article explains what the Mangata SDK is and how you can utilize it for your own experiments and products.

![](/assets/posts/airwhale-boat-building.png)

**[Boat-Building near Flatford Mill - John Constable](https://commons.wikimedia.org/wiki/File:John_Constable_-_Boat-building_near_Flatford_Mill_-_WGA5182.jpg)**

## New Use Cases for Developers

DeFi is maturing and our SDK is a clear step in that direction. The DEX of the future is not bound to a single front-end, but rather allows many different applications to be developed on the same tech.

New use cases that become possible with the Mangata SDK include

- **Arbitrage bots** that don’t have to fear front-runners and MEV taking away their profits
- **Personalized Community DEXes** with your own selection of tokens
- **Cross-chain apps** that buy tokens just in time

### Arbitrage Bots

One of the primary target groups for this release is arbitrage bot developers, who will be able to focus on profiting from price differences between different chains. When building on top of Mangata X, they don’t have to fear being front-run or getting their transactions stolen by MEV. This will also benefit traders on Mangata X, as arbitrageurs will ensure that Mangata X will always offer the latest prices.

Combined with the power of Substrate, developers, and integrators of the Dotsama ecosystem can experiment with cross-chain arbitrage with the help of Mangata SDK.

### Personalized Community DEXes

Developers coming from Web2 will be able to leverage their skills and tap into native Web3 capabilities. 
For example, you can build a community DEX that is limited to your selection of tokens, such as only DeFi tokens, innovative Web3 projects, and certain metaverse projects.

### Cross-chain Apps

As cross-chain apps become possible, there will emerge a need to pay fees on many different chains. Developers can utilize Mangata X’s liquidity pools to tap into all available tokens and buy them just in time to execute their transactions.

## About the Mangata SDK

As a platform that is highly supportive of open source development, we are releasing the first version of the Mangata SDK on Github to support builders in the ecosystem.

The Mangata SDK is a Typescript library that provides easy methods for different types of transactions. With Mangata SDK, you can find APIs for transactions such as buying, selling, and transferring assets, creating liquidity pools, managing liquidity provision, and many more!

Builders are now able to access instructions on how to use Mangata SDK at [https://docs.mangata.finance/sdk/](https://docs.mangata.finance/sdk/).

![](/assets/posts/2022-07-18-sdk.png)

### Start Building Now for Alpha

The SDK is a great way to get started with developing Web3 applications. It provides fundamental tools for experimentation and integration to upcoming builders of the ecosystem. Developers can also use Mangata SDK to integrate their own apps with Mangata X.

There are a few upcoming opportunities that you might want to take advantage of:

- We are about to list aUSD and will strive to have many tokens paired against aUSD, KSM and MGX.
- As we bootstrap new pools and start to incentivize other pools, there will be migration activities from older pools to newer pools, creating imbalances.
- In the coming weeks, we will announce plans for our first Mangata X hackathon. Stay tuned.

### Stay in the loop!

- Get in contact with other [#developers](https://discord.gg/YUgHEx6R) ([https://discord.gg/YUgHEx6R](https://discord.gg/YUgHEx6R)){:target="\_blank"} at Mangata Discord.
- Follow us on Twitter: [@MangataFinance](https://twitter.com/MangataFinance){:target="\_blank"}
- [Join the Telegram](https://t.me/mgtfi){:target="\_blank"}
- Check out ([https://github.com/mangata-finance/mangata-sdk](https://github.com/mangata-finance/mangata-sdk)){:target="\_blank"} on Github.
- Subscribe to our YouTube channel: [youtube.com/c/MangataFinance](https://www.youtube.com/c/MangataFinance){:target="\_blank"}


## About Mangata
Mangata is a next-generation DEX with the mission to make tokens from all ecosystems tradable on a single DEX. It features gasless swaps, prevents front-running and MEV on the consensus level without additional fees, and secures the network with the revolutionary proof-of-liquidity consensus. As a Layer 1 app-chain building on Substrate, it is not bound by legacy restrictions and can customize the rules of the chain to optimize the whole ecosystem around capital efficiency and fairness. Mangata X is THE upcoming Kusama DEX that broke records when closing its crowdloan within 50 minutes.

[Website](https://mangata.finance/){:target="\_blank"} &#124; [Twitter](https://twitter.com/MangataFinance){:target="\_blank"} &#124; [Discord](https://discord.com/invite/mangata){:target="\_blank"} &#124; [Telegram](https://t.me/mgtfi){:target="\_blank"} &#124; [YouTube](https://www.youtube.com/c/mangatafinance/){:target="\_blank"} &#124; [GitHub](https://github.com/mangata-finance){:target="\_blank"} &#124; [Blog](https://blog.mangata.finance/){:target="\_blank"}
