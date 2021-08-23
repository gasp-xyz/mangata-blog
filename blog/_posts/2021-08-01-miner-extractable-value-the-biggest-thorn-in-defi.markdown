---
layout: post
title:  "Miner Extractable Value: The Biggest Thorn in DeFi"
date: 2021-08-01
image: "mga-mev.jpg"
author: "Ingamar Ramirez"
author-image: "ingamar.jpg"
---

In traditional finance, you may have heard the term “front-running,” an illegal practice that involves entering an equity trade with advance knowledge of a pending transaction that would effectively move the price of the underlying asset. It falls under the umbrella of insider trading, meaning people go to jail over this kind of behavior.

Traditional finance created some more or less successful prevention mechanisms to minimize damage from insider trading, but Decentralized Finance is still in its infancy.

Current popular blockchains such as Ethereum were architected years ago, when the sudden flourishing of decentralized financial applications was not a huge consideration. Its design is neglecting one important aspect: Transaction ordering.

The main power that miners have over transaction ordering are:
- Reordering (i.e. in a block)
- Rejection of transactions (i.e. not include in a block)

These powers give them the ability to decide over what transactions get executed where, and calculate the best outcome for themselves. This extraction of value is commonly called Miner Extractable Value (MEV).

The current blockchain architectures are not designed to deal with these powers. The prevention mechanisms require consensus changes.

## How severe is MEV?

![How severe is MEV?](/assets/posts/mev-1.png)

MEV might seem negligibly small at first, but being able to frontrun one transaction can give you gains of millions if you know what you’re doing. Example: imagine you want to buy 50 ETH at the price of 2000 USDC per ETH on Uniswap, and you have a 1000,000 USDC to spend. Your order will move the price up by 100 dollars.

A miner who has control over the transaction order, can create their own order, put it in front of your transaction, and have 100% certainty you will move the price. In effect, the miner will create a second transaction (in a way it sandwiches your transaction), that will sell the asset with a guaranteed profit. Such guaranteed profits are insider trading that is unethical and detrimental to the rules of fair finance.

The issue was well described, in a now [seminal study](https://arxiv.org/abs/1904.05234) on Miner Extractable Value, which is a broader term for re-ordering attacks we just described. It pointed out a slippery slope, where Ethereum could go, if this issue will not be addressed. It describes that if miners want to extract value through re-ordering, they might even try re-organizing the blockchain history, which is essentially an attack on the chain.

![Coder extractable value](/assets/posts/mev-2.png)

This paper was written in hypotheticals, but today it’s real. Miners are extracting value, and rumors are they’re already attempting to attack Ethereum by re-organizing the chain history.
It is [rumored](https://twitter.com/EdgarArout/status/1413150399456968717) that the biggest pool Ethermine is attempting at developing such strategies.
The problem is so big, that not only regular people are getting screwed on Ethereum DeFi, but now the whole blockchain is at risk of attacks and all the dApps that sits on it.

In a worse scenario, miners can collude together, and play game-theoretic games against each other, and they can reject blocks from miners with less hashpower, because they want to push through their version of the blockchain. This can effectively lead to a sort of “cold war” between miners, which can even halt the blockchain for unknown periods of time. A halted blockchain is not a live one, thus a major threat to the ecosystem.

As a consequence, Ethereum is getting serviced through private mempools, which is another problem. Private mempools were created in order to create a trusted solution, where you place your transaction into the trusted hands of a miner that you believe will not exploit you. The core ethos of blockchain is transparency and trustlessness, whereas this phenomenon is the antithesis because it reverts back to trust and closed information. The Ethereum DeFi is on a continuous path of exploitation from all sides, and is steering towards a broken future.

## So what happens if we don’t solve MEV?

Let’s divide this into a few scenarios:

### 1. We ignore MEV and continue as usual

For algo traders on DEXes, their typical strategy can be based on technical analysis and market signals - but in the MEV world, the question becomes “how can I out-compete for blocks against other frontrunning bots?”

This becomes toxic for DeFi because it ruins the ruleset of trading based on fundamentals, and will be extremely exploitative of retail users - you know, the people on the other side of mass adoption. In the MEV future, price dynamics become uncorrelated. Smart contract devs are forced to deal with new complex verticals of MEV algo-games, and they have less time to focus on UX solutions for less technical users. It’s a bad direction for retail adoption, that will get worse over time, and it will slowly push users away from MEV-ridden DeFi.

### 2. Instead of solving MEV, we decide to work with it

![Request for reorg](/assets/posts/mev-3.png)

This proposes that miners can be incentivized through on-chain bounties to re-organize the chain to disclude an exploitive transaction. The problem with this is that the finality of the Ethereum (or any other) blockchain is indefinitely held for ransom, when anything can be rolled back. In addition, malicious actors can still attempt to claim the bounty, at which point the bounty holder can either give it to the perpetrator, or burn it entirely. Time wasted, money pissed away. Not a sustainable solution. It becomes a process of relying on who can most benevolently attack the chain.

Initiatives such as Flashbots are trying to minimize the MEV by making it more available to anyone through custom ETH client. This client creates a new marketplace of transaction bundles, where anyone can propose its version of a new block and slightly capitalize on it. This gives algorithmic developers a chance to have a piece of cake, but it is still a very exclusing game to retail users.
In this future, Ethereum becomes a moated island of algorithmic developers competing with each other, and alienating users from a good on-chain trading experience.

### 3. We switch to Proof of Stake

Proof of Stake would not change the MEV dynamics, it would still be present. Arguably, the users have easier access to participate in MEV through allocating their tokens to the best MEV validators, through staking. The profits from staking are essentially distributed to anyone who stakes. Since native token holders have an easier path to participate in staking, they have an easier route to MEV profits. In PoW chains, the token holders need to get mining hardware and cheap electricity, which is a bigger obstacle.

### Why is this important?

Because with the discovery of MEV, the powers are shifting back to miners, at the expense of the users. This crisis will need to be resolved soon or Ethereum DeFi will slowly but surely deteriorate into vampire games that miners play on user transactions.

The main problem here is inequality. Since the inception of Bitcoin, there have been wild discussions about whether miners or users have the ultimate power. The block size debate was precisely about that: a debate over how much power should be placed in miners’ hands. Ultimately the users prevailed in what was the [User Activated Soft Fork in Bitcoin](https://bitcoinmagazine.com/culture/bitcoin-independence-day-how-this-watershed-day-defines-community-consensus).

Good blockchain design should strive for equality between participants, e.g. not giving one party an overwhelming majority of power.

These problems are the core of the solution that [Mangata](https://mangata.finance/) brings. We’re researching these problems and we’re aiming for a complete solution to MEV, which must happen at novel consensus level mechanisms, to bring the power back to the users. We’ll be sharing some more details in the coming weeks about our upcoming single-application blockchain’s consensus mechanisms and mempool encryption models.

So stay tuned. Solutions are well underway.

Shoutouts to [@uPeterKris](https://twitter.com/uPeterKris), co-founder of Mangata, who assisted in writing and editing this piece