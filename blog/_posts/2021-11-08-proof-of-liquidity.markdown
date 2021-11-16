---
layout: post
title: "Building the most capital efficient DEX-chain with Proof-of-Liquidity"
date: 2021-11-08
image: "earn-once-stake-twice.jpg"
author: "Mangata Team"
author-image: "mangata-team.png"
excerpt: "<p>Proof-of-Liquidity is a novel consensus mechanism that builds on Proof-of-Stake but eliminates the problem of locked capital, which is detrimental to DeFi. This article explains why we at Mangata think capital efficiency will define the Endgame for DEXes, how app-specific chains can fix the problems that DeFi has on Ethereum and how we arrived at the new paradigm of Proof-of-Liquidity.</p>"
---

*Proof-of-Liquidity is a novel consensus mechanism that builds on Proof-of-Stake but eliminates the problem of locked capital, which is detrimental to DeFi. This article explains why we at Mangata think capital efficiency will define the Endgame for DEXes, how app-specific chains can fix the problems that DeFi has on Ethereum and how we arrived at the new paradigm of Proof-of-Liquidity.*

<iframe width="560" height="315" src="https://www.youtube.com/embed/9UWhei5w2e4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## The True Endgame for DEXes will be...
Not all DEXes are created equal. While currently there is a race about which DEX can offer the best liquidity mining programs, it is obvious that giving away free money won’t be a sustainable tactic in the long run. The true end game for DeFi and DEXes will be decided on another question: Which protocols will be the most capital efficient?

Capital Efficiency is the relationship between how much someone is spending to grow revenue and how much they are getting in return.

* Less gas fees to perform a transaction → More capital efficiency.
* Less slippage when swapping tokens → More capital efficiency.
* Less transactions to achieve what you want → More capital efficiency.

A protocol is said to be capital efficient if it has little friction, little overhead costs and provides the most value for the capital invested.

**Paying less to get more will be THE key driving factor to decide which DEXes are the most successful.**

This is why at Mangata Finance we have been looking at what factors influence capital efficiency the most. How can we minimize fees and slippage? How can we allow for deeper liquidity? We turned every stone and didn’t stop at the fundamental blockchain infrastructure. And we had to face some inconvenient truths.

## A case for app-specific chains
The truth of the matter is: While we owe a lot of gratitude to Ethereum, it comes with flaws that are detrimental to the long-term success of DeFi. Gas fees are high and Flashbots auctions are capturing the slippage of DeFi users, resulting in users moving to private mempools, which puts the decentralization of Ethereum at risk.

And another risk looms on the horizon: Once Ethereum has completed its transition to Proof-of-Stake, there is a dilemma for capital holders. Will they stake their tokens or put them into DeFi? It can only be one or the other.

**While Proof-of-Stake in itself is very smart, it creates a problem: It makes the market less liquid.**

Locking away liquidity is detrimental to the overall DeFi ecosystem as pools will be shallower and become less capital efficient. What we want instead is to have a market that is as liquid as possible.

While Ethereum is here for the long run and might serve as a global settlement layer for data in the foreseeable future, there is a case for chains that optimize for app-specific use cases. It's much more efficient when a blockchain is hosting only one application, compared to a plethora of many applications like on Ethereum. It allows us to specialize the security of the chain and create an incentive structure around the token economy. Consensus and rules can be changed and adapted to optimize for certain goals. This lead us to the key question that is driving the development of the Mangata DEX:

**If the true endgame of DEXes is capital efficiency, how would a pure DEX-chain look like that optimizes for capital efficiency?**

How would it handle gas, block construction, staking and liquidity? We believe that finding the answers to these questions leads us on a road to construct a system that lays the groundwork for a DEX that is highly specialized in decentralized trading and could become the most fundamentally optimized DEX possible.

## Aligning staking and liquidity incentives to maximize capital efficiency
We chose building a parachain for the Polkadot ecosystem because it allows us to create a sovereign chain where we have power to redesign the whole architecture as we see fit. In our thinking process there was an obvious elephant in the room: If we’re making a DEX-chain, liquidity and security are essentially the same thing. A DEX without liquidity can’t work and it doesn’t make sense. Liquidity providers are to an extent similar to validators as they give the platform legitimacy and provide security by ensuring deep liquidity, thus allowing the DEX to function well.

**That’s why we decided to merge staking and provision of liquidity - Welcome to Proof of Liquidity!**

![Proof of Liquidity versus Proof of Stake](/assets/posts/pos-vs-pol.jpg)

## Proof-of-Liquidity unlocks staked liquidity for DeFi
Building on Proof-of-Stake, we are introducing the revolutionary Proof-of-Liquidity mechanism.

The idea is basic and simple: Proof-of-Liquidity unlocks staked liquidity by using liquidity pool tokens as staking assets, allowing for deeper liquidity and thereby increasing capital efficiency. 

![Proof of Liquidity versus Proof of Stake](/assets/posts/proof-of-liquidity.jpg)

**Proof-of-Liquidity is very straightforward:**
1. **Instead of a single asset, you stake LP tokens:** Instead of just staking the native token like in other networks, you first obtain liquidity pool (LP) tokens. On the Mangata DEX-chain, these are assets like
  * DOT, the native token of the Polkadot relay chain
  * Parachain tokens like ACA, GLMR, etc...
  * ERC20 tokens from our Ethereum bridge
2. **All staking assets are paired against MGA:** Every asset is paired against MGA to create stakeable LP tokens. This helps governance make security-related decisions affecting MGA and therefore the whole stake.
3. **Staking LP tokens keeps the corresponding pools liquid:** LP tokens are staked with nodes and will automatically be used in the corresponding liquidity pool. Instead of being locked capital, the stake will keep working as unlocked liquidity.

The concept is simple and elegant and will create a liquidity base layer that enables a lot of new use-cases on the Mangata DEX-chain.

## Implications & Considerations
Because the concept is so new, it will have a lot of implications that we will need to consider. To name a few:
* **Liquidity Base Layer:** As the staked LP tokens are incentivized by staking block rewards and these LP tokens are paired to MGA, we expect them to create a base layer of liquidity on which other trading pairs can rely on.
* **Security:** To make sure the system is not gamed by staking bogus tokens, only assets whitelisted by governance will be allowed as Proof-of-Liquidity base assets.
Stake once, earn twice: Rewards are much more attractive. As users can be stakers and liquidity providers at the same time, they will profit from block rewards AND trading fees. Stake once, earn twice.
* **Risks:** Proof-of-Liquidity combines the reward and risk potential of Staking and liquidity provision. Risks are slashing risk if staking with a misbehaving node and impermanent loss risk. These risks are in general well understood by now and steps can be taken to mitigate them.

## Conclusion & Outlook
Proof-of-Liquidity is an evolution of Proof-of-Stake targeted at DEX-specific chains that unlocks liquidity, increases capital efficiency and adds additional revenue streams to stakers and liquidity providers.

We think the concept is very promising and are betting big on it by building a complete blockchain based on it from the ground up. We ask your help in exploring this new paradigm:
* What attack vectors are possible?
* How is security affected?
* How is decentralization affected?
* What new types of applications become possible when creating a base layer that has MGA as tokenized liquidity?

In the end we think the DEXes that are the most capital efficient will be the most successful. They will attract investors seeking to optimize their trades and income. We invite you to become part of the journey!

## Join the Mangata Pioneers
* Join the Discussion on the [Mangata Discord Server](https://discord.gg/BAE7GFkax4){:target="\_blank"}!
* Subscribe to the Mangata Newsletter at [mangata.finance](https://mangata.finance){:target="\_blank"} to get updates and latest news!
* Follow us on Twitter: [@MangataFinance](https://twitter.com/MangataFinance){:target="\_blank"}

