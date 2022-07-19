---
layout: post
title: "Time Incentivization - Attract calm liquidity to create reliable markets"
date: 2022-07-19
image: "2022-07-19-time-incentivization.png"
author: "Mangata Team"
author-image: "mangata-team.png"
excerpt: "Today, we are giving builders a new tool to start using the DeFi legos that Mangata X has to offer. We are releasing the Mangata SDK 1.0, the same software package that our team is using to build the Mangata X trading app. With this SDK (Software Development Kit), developers will be able to directly tap into the capabilities of Mangata X: gasless swaps, front-running prevention, and private transactions. This allows them to create their own trading bots, DEX interfaces, wallets, and apps."
---

This article introduces time incentivized liquidity mining - our solution to attract calm liquidity for predictable markets. You can also listen to the recording of a previous Mangata Monday that is focused on Time Incentivization.

You can also watch the article as video:
<iframe width="720" height="405" src="https://www.youtube.com/embed/6YkthwEAkmc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Warships in a Heavy Storm

A rough day on the sea. Heavy clouds lie over the scene. Strong waves are smashing against ships that try to stay afloat. The crew was in panic, turbulences everywhere. Would you go for a swim?

![**[Ludolf Bakhuizen: Warships in a Heavy Storm](), ca. 1695**](/assets/posts/warships-in-a-heavy-storm.png)

**[Ludolf Bakhuizen: Warships in a Heavy Storm](https://commons.wikimedia.org/wiki/File:Schepen_aan_lager_wal_-_Ships_running_aground_-_The_%27Ridderschap%27_and_%27Hollandia%27_in_trouble_in_the_Street_of_Gibraltar_1-3_March_1694_(Ludolf_Backhuysen,_1708).jpg){:target="\_blank"}, ca. 1695**

A scene that represents how many DEXes feel like today. They attract liquidity with mining incentives, but the liquidity just keeps washing from pool to pool every few days. Pools are dominated by liquidity providers that select for the highest APR without much respect for the turbulences they leave behind in pools they are leaving. This creates a lot of unpredictability and movement, making the situation for everyone else very uncertain. Will the liquidity stick or leave the DEX altogether after a few weeks when the next hottest platform opens up?

Protocols like OlympusDAO even named it “mercenary capital” and tried to come up with solutions against it, like protocol-owned liquidity. 

In this article we are introducing an alternative: time incentivized liquidity mining, our solution to attract calmer liquidity and reward loyalty over time.

## Design Goals for Time Incentivized Liquidity Mining

When we think about the ideal DEX, we are thinking about a DEX that steadily builds up liquidity on the important pools. It has the right incentives put in place to attract calm and predictable liquidity that allows users to gain trust and create an upward momentum for everyone.

![](/assets/posts/salem-harbor.png)

**[Fitz Henry Lane: Salem Harbor](https://commons.wikimedia.org/wiki/File:Salem_Harbor_Fitz_Hugh_Lane.jpeg){:target="\_blank"}**

The ideal DEX acts like a safe harbor, protecting everyone from the force of nature to safely onboard and depart with their assets while they get ready for their next journey.

A DEX has to go with the flow of the market, but at the same time it can slow down the negative effects of the market by clever design. This is the starting point for time incentivized liquidity mining.

### Reward the time that capital has worked in a liquidity pool

The primary design goal is to set up liquidity mining rewards in a way that rewards loyal liquidity providers that stay longer in a liquidity pool. The liquidity should be “calmer”. We want to attract liquidity providers who are more thoughtful about where they want to stay and that is loyal to the protocol.

We want Mangata X to reward the amount of time that capital has spent working in a pool. The longer it worked, the more rewards it should get.

### Maintain freedom of liquidity providers

At the same time, we need to consider the fluctuations in the market. LPs should not fear that time incentivization requires an undesirable lock-in or has too big opportunity costs. We are not friends of forcing liquidity into vaults or locking it away in other ways! Instead, we want to provide an attractive offer while maintaining the freedom of users to move their capital at any point.

### No infinite scaling

Potential liquidity providers should not feel like they cannot catch up with the rewards that older LPs get. There should not be a situation where there are “incentive whales” that grab all the rewards from the platform. We need to find a solid middle ground of incentivizing time and inviting new players.

## Approaches

It is easier to show our time incentive solution by discussing different approaches that are utilized throughout the ecosystem. From simple to more complex approaches, this section explains Mangata’s model and the process of how & why we came up with the idea.

### The linear approach

The basic solution is to ramp up reward emissions over time: Give out more rewards for liquidity that has been staying in the pool for a longer amount of time. This makes it attractive to remain loyal to the pool and should incentivize providers to consider it very thoroughly before leaving the pool and giving up the accumulated progress. It also disincentivizes short-term liquidity provision, as the rewards only start to stack up later.

![Linear.png](/assets/posts/linear.png)

This approach can lead to two major problems: Either the rewards start so slow that they almost don’t provide anything in the beginning (carrying huge opportunity costs) or they get big very fast and lead to hyperinflation of the protocol token.

A second major issue is that it keeps scaling infinitely, creating incentive whales that take most of the incentives, and leaving almost nothing for new liquidity providers. In this situation, the pool might even slowly die off because no new liquidity providers would be incentivized to join the pool.

### The ‘linear with limit’ approach

Let’s introduce a new rule and say that the rewards will hit a limit after some time.

![Linear with Limit.png](/assets/posts/linear-with-limit.png)

This approach keeps the advantages of disincentivizing provision for only a few days and increases rewards over time. This approach is fairer to new users since they have a chance to catch up after some time.

At the same time, there remain some disadvantages. One major concern with this approach is that the ramp-up time carries a lot of opportunity costs in which the rewards are only at a fraction of their eventual level.

We need a quicker on-ramp! This leads us to a refined approach.

## The Mangata Approach: Asymptotic Reward Curve

We are introducing an asymptotic reward curve for time incentivized liquidity mining.

![](/assets/posts/time-incentivization.png)

This curve offers a quick on-ramp and continually increases the rewards of senior users relative to newcomers while giving new users a chance to catch up significantly in the first few weeks. The reason is that the growth of additional rewards per time slows down as it approaches its full capacity.

Mangata X asymptotic reward curve is configured to reach **>90% utilization within 8 weeks**, allowing users to onboard quickly. While disincentivizing the short-term provision, the curve rewards loyalty since it infinitely increases.

## Scenarios

Let's put these in practical examples to provide a better understanding of what these mean for the liquidity providers and explain the effects of how the Mangata approach plays out further.

### Later user joins

This chart compares two users. The first user joins the pool on day zero and the second one joins after a month. Let's assume they are providing the same amount of liquidity, hence they have the same curve. But since the second user joins the pool later, the second user will always be behind the first user. But the difference shrinks over time.

![](/assets/posts/time-incentivization-later.png)

### Adding liquidity

In this example, the user adds the same amount of liquidity on top of its initially provided liquidity after a month. Since adding liquidity after some time will create a different maximum on the curve, this design prevents a user to ramp up its percentage with a small amount of capital and farm the increased incentives by adding great sums of liquidity afterward.

![](/assets/posts/time-incentivization-add.png)

## Set sail!

Traders and liquidity providers require stability and predictability instead of unstable pools with slippage. Mangata X incentivize those users who stick with the protocol in order to create stable pools and reward our early supporters for their loyalty. Time Incentivization rewards long-term liquidity providers by establishing a fair ground for them against incentive whales that abuses high APR pools and leaves after the incentives dry up.

![airwhale-claide-lorrain.png](/assets/posts/airwhale-claide-lorrain.png)

**[Claude Lorrain: Seaport with the Embarkation of the Queen of Sheba](https://en.wikipedia.org/wiki/The_Embarkation_of_the_Queen_of_Sheba){:target="\_blank"}**

### Stay in the loop!

- Get in contact with other [#developers](https://discord.gg/YUgHEx6R) ([https://discord.gg/YUgHEx6R](https://discord.gg/YUgHEx6R)){:target="\_blank"} at Mangata Discord.
- Follow us on Twitter: [@MangataFinance](https://twitter.com/MangataFinance){:target="\_blank"}
- [Join the Telegram](https://t.me/mgtfi){:target="\_blank"}
- Check out ([https://github.com/mangata-finance/mangata-sdk](https://github.com/mangata-finance/mangata-sdk)){:target="\_blank"} on Github.
- Subscribe to our YouTube channel: [youtube.com/c/MangataFinance](https://www.youtube.com/c/MangataFinance){:target="\_blank"}


## About Mangata
Mangata is a next-generation DEX with the mission to make tokens from all ecosystems tradable on a single DEX. It features gasless swaps, prevents front-running and MEV on the consensus level without additional fees, and secures the network with the revolutionary proof-of-liquidity consensus. As a Layer 1 app-chain building on Substrate, it is not bound by legacy restrictions and can customize the rules of the chain to optimize the whole ecosystem around capital efficiency and fairness. Mangata X is THE upcoming Kusama DEX that broke records when closing its crowdloan within 50 minutes.

[Website](https://mangata.finance/){:target="\_blank"} &#124; [Twitter](https://twitter.com/MangataFinance){:target="\_blank"} &#124; [Discord](https://discord.com/invite/mangata){:target="\_blank"} &#124; [Telegram](https://t.me/mgtfi){:target="\_blank"} &#124; [YouTube](https://www.youtube.com/c/mangatafinance/){:target="\_blank"} &#124; [GitHub](https://github.com/mangata-finance){:target="\_blank"} &#124; [Blog](https://blog.mangata.finance/){:target="\_blank"}
