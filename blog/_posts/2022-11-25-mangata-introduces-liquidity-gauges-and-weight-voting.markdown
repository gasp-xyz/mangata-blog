---
layout: post
title: "Mangata introduces Liquidity Gauges and Weight Voting to Polkadot"
date: 2022-11-25
image: "2022-11-25-mangata-introduces-liquidity-gauges-and-weight-voting.png"
author: "Mangata Team"
author-image: "mangata-team.png"
excerpt: "Liquidity Gauges are a powerful incentive mechanism pioneered by Curve Finance on Ethereum that has led to deep liquidity, increased governance participation, and resulted in the infamous “Flywheel Effect” and the Curve Wars. Mangata Labs is now introducing Liquidity Gauges and Weight Voting to the Polkadot Ecosystem. The first release will go live on Mangata X next week."
---

Liquidity Gauges are a powerful incentive mechanism pioneered by Curve Finance on Ethereum that has led to deep liquidity, increased governance participation, and resulted in the infamous “Flywheel Effect” and the Curve Wars.

Mangata Labs is now introducing Liquidity Gauges and Weight Voting to the Polkadot Ecosystem. The first release will go live on Mangata X next week.

This article describes Liquidity Gauges, the underlying foundations that make them so successful and lays out the path for how Mangata will introduce them to the Polkadot ecosystem, starting with Mangata X on Kusama.

<iframe width="720" height="405" src="https://www.youtube.com/embed/3CIx16uRAuU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## How Curve pioneered the Liquidity Gauge

### Democratizing Incentives

As DeFi protocols become more powerful, the question of how liquidity mining emissions shall be distributed can become very contentious. It’s a *“make or break”* factor that decides if a protocol becomes hugely successful or succumbs to political infighting and corruption.

To solve this problem, Curve Finance has introduced [Liquidity Gauges](https://curve.readthedocs.io/dao-gauges.html){:target="\_blank"} on top of their liquidity pools. Liquidity Gauges essentially control the flow of rewards in the system: Which liquidity pools shall receive rewards and how are they distributed among liquidity providers? Gauges are a simple, powerful, and flexible tool that gives the DAO governance the levers to direct rewards to where they add the most value.

Gauges are made possible by weight voting. Weight voting on Curve democratizes decision-making. With it, token holders can vote on which liquidity pool shall receive incentives, thus giving each user a voice and each token utility by steering the policy of the DAO.

![gauge-relative-weight.png](/assets/posts/2022-11-25-mangata-introduces-liquidity-gauges-and-weight-voting-curve.png)

Additionally, protocols seeking liquidity on Curve get a means to incentivize liquidity provision by rewarding users that vote favorably.

### The Flywheel Effect

Introducing Curve Liquidity Gauges was a very successful strategy and led to a surge in liquidity provision and governance participation. And of course, the infamous [Curve Wars](https://www.youtube.com/watch?v=-0Q3fp-wzXI){:target="\_blank"}, where protocols compete for voting power in Curve.

The underlying genius of Liquidity Gauges and Weight Voting is that value-adding behavior becomes incentivized! Steering the protocol via governance participation as well as providing liquidity are beneficial behaviors that receive proper compensation from Liquidity Gauges.

As the proper value-adding behavior gets incentivized, the effect of growing interest compounds in the so-called Flywheel effect, where network effects take over to increase interest in the protocol.

In practical terms: Liquidity Gauges package features together that are beneficial for the growth of the ecosystem.

## Launching the Liquidity Gauge on Mangata X

As Mangata is striving to solve the big problems of DeFi, we intend to leverage the best solutions available on the market and invent new ones where they don’t exist yet. After having analyzed dozens of solutions, we think that Liquidity Gauges provide an excellent mental framework to gather value-adding features under one umbrella.

We start by providing the following features of the Liquidity Gauge to be voted into effect by the Mangata X Council:

- Weight Voting V1
- Time Incentivization V2

### Weight Voting V1

Previously, the constant emission of 300 million MGX per year in liquidity mining rewards was distributed equally among all incentivized pools on Mangata X. This left little control for governance to strategically direct incentives.

![Mangata X - Current Reward Distribution.png](/assets/posts/2022-11-25-mangata-introduces-liquidity-gauges-and-weight-voting-current.png)

Starting with Weight Voting V1, we introduce a mechanism for Governance to set up weights for each incentivized liquidity pool. This gives Governance fine-grained control and opens up the possibility for a sophisticated framework that considers many different factors and signals to determine incentives, such as relative liquidity distribution, strategic growth goals, and more.

### Time Incentivization V2

[Time Incentivization](https://blog.mangata.finance/blog/2022-07-19-time-incentivization/){:target="\_blank"} is Mangata’s novel mechanism to attract calm liquidity and reward loyal liquidity provision by increasing rewards the longer one provides liquidity. While Weight Voting decides on liquidity mining rewards on all pools, Time Incentivization decides how incentives are distributed within a pool.

![Untitled](/assets/posts/2022-11-25-mangata-introduces-liquidity-gauges-and-weight-voting-time-incentivization.png)

After having it launched in June 2022, we gained valuable insights and are proud to release Time Incentivization V2, which adds improved checkpointing and opens up the chain to introduce Gasless Swaps, Multi-Purpose Liquidity (Stake Once, Earn Twice), and [Proof-of-Liquidity](https://blog.mangata.finance/blog/2021-11-08-proof-of-liquidity/){:target="\_blank"} in the coming weeks and months.

### Progressively Decentralizing

The features will be provided to the Mangata X Governance, which currently is formed by the Mangata X Council. Going forward, it will be able to lead the dialogue with the community and decide on how to configure the Gauge.

We expect this to be an iterative learning process, which will also give us a great opportunity to onboard the Mangata community into the governance process and find a common base to debate the direction of the chain.

We have published the [Mangata X Incentivization Framework](https://www.notion.so/DRAFT-Mangata-X-Incentivization-Framework-b1695afba51a4f51a8c75c0d2f7edf5a){:target="\_blank"} and are posting the first proposal for updated weights with the publication of this blog post on the [Mangata Discord](https://discord.gg/mangata){:target="\_blank"}. We invite everyone to participate in the discussion and steer the direction of incentives on Mangata X.

As we go forward, we will explore paths to decentralize this feature further and give token holders the ability to participate in Weight Voting and other aspects of the Liquidity Gauge.

## Become a stakeholder!

We are excited to introduce this dynamic and exciting feature to the Polkadot ecosystem. We believe that Mangata X on Kusama is the perfect testing ground to innovate and see how we can find a market fit and leverage Substrate to create the flyest of wheels. We invite you to become part of the revolution.

- **Liquidity Providers:** If you are a liquidity provider on Mangata X, engaging in governance can give you a competitive edge in the future in deciding where rewards are going. We would love to have you as a part of the discussion.
- **Protocols:** Are you looking for liquidity or to engage your community meaningfully? We invite you to get in contact and explore options to get MGX incentives for your desired pair.
- **Governance Connoisseurs:** Are you in it for the governance? We understand! Come join our Discord and keep your eyes and ears open for opportunities to create a new governance culture and build a new incentivization framework.


## Make sure to stay in the loop

1. Follow us on Twitter [@MangataFinance](https://twitter.com/MangataFinance){:target="\_blank"}
2. Join our channel on [Telegram](https://t.me/mgtfi){:target="\_blank"} 
3. Subscribe to our [YouTube channel](http://youtube.com/c/MangataFinance){:target="\_blank"}
4. Join the **Mangata X** Newsletter at [x.mangata.finance](https://x.mangata.finance/){:target="\_blank"}
5. Join the [Discord channel](https://discord.gg/mangata){:target="\_blank"}

## About Mangata

Mangata is the next-generation DEX of Polkadot with the vision to make tokens from all ecosystems tradable on a single DEX. It features gasless swaps, prevents front-running and MEV, and increases capital efficiency with the revolutionary proof-of-liquidity consensus. As a Layer 1 app-chain building on Substrate, it is not bound by legacy EVM restrictions and optimizes the whole ecosystem around capital efficiency and fairness. Mangata X is the DEX of Kusama that broke records when closing its crowdloan within 50 minutes.

[Website](https://mangata.finance/){:target="\_blank"} | [Twitter](https://twitter.com/MangataFinance){:target="\_blank"} | [Discord](https://discord.com/invite/mangata){:target="\_blank"} | [Telegram](https://t.me/mgtfi){:target="\_blank"} | [YouTube](https://www.youtube.com/c/mangatafinance/){:target="\_blank"} | [GitHub](https://github.com/mangata-finance){:target="\_blank"} | [Blog](https://blog.mangata.finance/){:target="\_blank"}

