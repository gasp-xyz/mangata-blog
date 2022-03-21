---
layout: post
title: "Algorithmic Buy & Burn - A novel mechanism to correlate token price with success of the protocol"
date: 2022-03-21
image: "2022-03-21-algorithmic-buy-and-burn.png"
author: "Mangata Team"
author-image: "mangata-team.png"
excerpt: "<p>Algorithmic buy & burn is a novel mechanism that enables a crypto project to maintain a capped supply while at the same time continuously minting new rewards for services like liquidity provision and block creation. As a bonus for token holders, it positively correlates the success and activity of the network with token price appreciation.</p><p>In this article, we show the motivation behind the mechanism, explain the exact mechanism, describe the positive effects for the ecosystem and MGX holders and show projections about the expected outcomes.</p>"
---
Algorithmic buy & burn is a novel mechanism that enables a crypto project to maintain a capped supply while at the same time continuously minting new rewards for services like liquidity provision and block creation. As a bonus for token holders, it positively correlates the success and activity of the network with token price appreciation.

In this article, we show the motivation behind the mechanism, explain the exact mechanism, describe the positive effects for the ecosystem and MGX holders and show projections about the expected outcomes.

## Motivation

One of the mottos of [Mangata X Tokenomics](https://blog.mangata.finance/blog/2022-02-13-the-mangata-playbook-part-3-tokenomics/){:target="\_blank"} is “Hard capped, infinite rewards”. We like it, because it shows how you can overcome seemingly conflicting interests when you add a new twist to it. In the case above, the motto expresses how we managed to solve the incentive supply dilemma. To understand the supply dilemma, we first must understand the incentive dilemma.

### The Incentive Dilemma

DEXes and most other crypto projects are confronted with a lot of these conflicting interests from different stakeholders. The famous “DeFi Summer” of 2020 was kickstarted when the DEX incentive dilemma was solved. It is as follows:

- Liquidity providers want to earn as many fees and incentives as possible
- Traders want to pay as little as possible

Over time, a somewhat stable consensus has been reached that 0.3% exchange commission for uncorrelated assets is acceptable and most DEXes today follow this guideline.

**Here is the problem:** While 0.3% exchange commission works, it is very ineffective in attracting liquidity. In the competition for market share, liquidity mining rewards were invented to attract liquidity providers to the network. While solving the incentive dilemma, these rewards are often achieved with unbounded inflation by the protocol, which brings its own set of problems, leading to the supply dilemma.

### The Supply Dilemma

Unbounded inflation leads to a problem that is widespread with DEX tokens today: Constant devaluation of the token. This has become a slippery slope for many projects, as they develop different strategies to cope with the problem:

1. start with big rewards that get smaller over time
2. promise to solve the issue later
3. abandon a hard cap altogether

We think this problem can be solved better! At Mangata X, we have decided to maintain a hard cap at 4 billion MGX. We believe it is crucial to create trust in our tokenomics by setting a predictable target maximum supply.

The big question is thus: How can we maintain a hard cap of tokens and still give out rewards to liquidity providers? The answer to the question is: Algorithmic buy & burn. Algorithmic buy & burn solves the supply dilemma by continually removing MGX from the supply with every trade. This creates space for new incentives paid out by the system.

## How algorithmic buy & burn works at Mangata X

Buy & burn itself is not a new invention. It is already employed by other projects. The most prominent one is Binance, which burns parts of their profits in the [BNB burn](https://www.binance.com/en/blog/ecosystem/18th-bnb-burn-421499824684903294){:target="\_blank"} event every quarter. At Mangata, we will use a more dynamic method that burns MGX with every single trade: **Algorithmic** buy & burn.

Just as at other DEXes, the Mangata X exchange commission is 0.3% of every trade. Of that:

- 0.2% go to liquidity providers as LP fee
- 0.05% go to the Treasury and
- 0.05% are used for algorithmic buy & burn.

This means that for a million USD traded on the platform, 2,000 USD go to liquidity providers, 500 USD go to the Treasury and 500 USD worth of MGX get bought on the market and burned immediately.

The “algorithmic” in algorithmic buy & burn points to the fact that no human interaction is involved. It happens autonomously as an on chain mechanism!

## Positive Effects

**For the network,** algorithmic buy & burn removes tokens from circulation which allows it to mint new incentives for collators and liquidity providers. This gives governance levers to control the growth of the ecosystem.

**For token holders,** buy & burn creates demand for MGX and adds deflationary pressure, which leads to price appreciation. Algorithmic buy & burn also ensures that MGX holders are rewarded by trading activity in the system, irrespective of the pool that is used.

**For the team,** it removes the need to intervene in the ecosystem to stimulate price activity. Algorithmic buy & burn ensures that the success of the token is not dependent on a central team, but is rather delegated to the users of the platform and a result of trading activity.

Given the right circumstances, it might even create enough deflationary pressure to balance out the creation of new tokens.

## Projections

To develop a practical understanding of the effects of algorithmic buy & burn, we have simulated a year of trading activity for a hypothetical MGX-USDC pool on 4 different DEXes with different fee compositions and compare the results.

### Scenarios

We have chosen 4 different exchange commission scenarios to compare against each other:

- **Mangata X:** 0.2% LP fees, 0.05% to the Treasury, 0.05% to algorithmic buy & burn
- **Just LP fees:** 0.3% LP fees.
- **Fees + Treasury:** 0.2% LP fees, 0.1% Treasury
- **Fees + Buy & Burn:** 0.2% LP fees, 0.1% algorithmic buy & burn

### Setup

As parameters, we have chosen to simulate a present-day Top30 DEX:

- TVL: 250m USD
- Yearly volume: 8b USD
- MGX liquidity to supply: 30%
- MGX dominance: 30%

Following these params, we reduce complexity by assuming all liquid MGX exists in a single liquidity pool with USDC (150m USD pool value) and has an equivalent share of the total DEX volume (4.8b USD). These parameters would put MGX at an implied market cap of 250m USD.

To simulate the behavior of the pool over a year, we simulate 100,000 swaps USDC→MGX and back each, totalling 200,000 transactions. Each transaction has a volume of 24,000 USD (slippage 0.03%).

### Results

As shown in the table below, Mangata X offers the most sophisticated and calibrated model. 

![A table comparing different scenarios of fee configurations](/assets/posts/2022-03-21-algorithmic-buy-and-burn-simulation.png)

Algorithmic buy & burn adds upwards pressure to the price while removing tokens from the system as reward for validators and liquidity providers. At the same time, the Treasury takes in revenue to fund the continued development of the ecosystem.

The Mangata X model shows better price performance than the “Just LP Fees” model and the “Fees + Treasury” model, which should create more interest for the DEX on a global scale. At the same time, the Mangata X model also does not sacrifice Treasury intake like “Fees + Buy & Burn”.

## Summary

The DEX space is evolving and it is crucial for DEX Governance to be able to adapt to market conditions. While LP fees offer an incentive to liquidity providers and treasury fees generate revenue for the protocol to fund operations, marketing and development, algorithmic buy & burn creates a new lever that leads to price appreciation for token holders and allows for the creation of new incentives for other stakeholders while still maintaining a hard cap.

## Make sure to stay in the loop!
- Join the **Mangata X** Newsletter at [x.mangata.finance](https://x.mangata.finance/){:target="\_blank"}
- [Join the Discord](https://discord.gg/mangata){:target="\_blank"}
- Follow us on Twitter: [@MangataFinance](https://twitter.com/MangataFinance){:target="\_blank"}
