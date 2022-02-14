---
layout: post
title: "The Mangata Playbook - Part 3: Tokenomics"
date: 2022-01-21
image: "2022-02-14-the-mangata-playbook-part-3-cover.png"
author: "Mangata Team"
author-image: "mangata-team.png"
excerpt: "<p>This post introduces you to the Mangata X Tokenomics. First we will give you a summary, then we go into a deep dive to explain our thinking behind it.</p>"
---

This post introduces you to the Mangata X Tokenomics. First we will give you a summary, then we go into a deep dive to explain our thinking behind it.

Watch the video to this article:
<iframe width="560" height="315" src="https://www.youtube.com/embed/kHyF0lyllyg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Tokenomics Summary

### Ticker, Initial Supply, Hard Cap

The ticker of the native token of **Mangata X** will be **$MGX**. At TGE, it will have a **total supply of 1bn MGX**. Rewards will be issued up to a **capped supply of 4bn MGX**, which will be reached at the earliest in 5 years. 80% of the final supply of tokens are reserved for the community.

### Utility

The core utilities are:

- Usage in Proof-of-Liquidity
- Algorithmic buy & burn
- Governance: Managing the diversified Treasury & DEX-owned liquidity, Liquidity Incentives, Proof-of-Liquidity Whitelisting

### Exchange Commission & Fees

**The Exchange Commission** on trades is 0.3%, of which

- 0.2% go to liquidity providers,
- 0.05% to the Treasury
- 0.05% are used for algorithmic buy & burn.

### Token Distribution

**80% of all tokens are allocated for the Community**, with the main portions allocated for securing the network and providing liquidity. The rest of the community portion is awarded for supporting the network via crowdloans and other activities.

![A pie chart showing the final distribution](/assets/posts/2022-02-14-final-distribution.png)

### Emission Schedule

The token emission schedule will reach the **capped supply earliest after 5 years**. Algorithmic Buy & Burn can push this date back into the future. 

Below you can find a projection of the circulating supply until the hard cap is reached:

![A table showing the emission schedule](/assets/posts/2022-02-14-emission-schedule.png)

This chart shows the projected circulating supply:
![A chart showing the emission schedule](/assets/posts/2022-02-14-emission-schedule-chart.png)

This chart shows the projected distribution schedule:
![A chart showing the distribution schedule](/assets/posts/2022-02-14-distribution-schedule.png)

## Deep Dive

How do you construct Tokenomics? Whom do you reward? What do you pack into the utilities? In this post, we will dive a little deeper into the logic of how well-rounded Tokenomics are created.

### “What is the utility?”

It is one of the most heard questions when a new token is introduced. And it makes sense: Every project, protocol and parachain is solving specific problems. For a parachain, a token is like a medium to reward behavior that supports the network in the long term. The fundamental value that a token has is determined by its utility: The problems it allows us to solve.

### What Problems is Mangata solving?

Let’s look into our solutions to get an understanding for the utility that MGX will have:

- **front-running and MEV:** These are some of the most fundamental problems we are solving and the ones that give Mangata a unique position in crypto. We have a working solution ready to deploy: [**Themis Protocol**](https://blog.mangata.finance/blog/2021-10-10-themis-protocol/)
- **native tokens locked in staking:** This is a problem for every chain but would be even more so for a DeFi-oriented chain. This is why we are leveraging a revolutionary mechanism to unlock capital for staking: [**Proof-of-Liquidity**](https://blog.mangata.finance/blog/2021-11-08-proof-of-liquidity/)
- **low liquidity:** a problem that every DEX has to solve and that can be covered to a great degree with **liquidity mining**
- **liquidity leaving:** liquidity that is shuffled around different pools or leaves the DEX altogether is a common problem for incentivized DEXes. To give liquidity a reason to remain more calm, we introduce **time-incentivization on liquidity mining and DEX-owned liquidity**
- **inflation from incentive rewards:** a lot of projects suffer from an unclear strategy on inflation. At Mangata, you get predictability: We introduce a **hard cap on token supply**
- **negative effects from diminishing incentives:** hard-capping the supply usually leads to diminishing incentives and capital moving to the next problem. As we need continued incentives for securing the network in proof-of-liquidity, we are introducing **algorithmic buy & burn to continuously add deflationary pressure**

### MGX Utilities

From these problems and solutions, we arrive at MGX Utilities:

- **use in Proof-of-Liquidity staking to secure the network:** as this activity is also incentivized, there will be strong demand to provide liquidity for collator nodes.
- **liquidity base layer:** as a lot of liquidity concentrates around MGX, this will offer a lot of short trading routes through MGX, establishing a base layer of liquidity.
- **algorithmic buy & burn:** to continuously offer validation rewards to secure the network against front-runners, we take a small part of the exchange commission to buy & burn MGX.
- **Governance:** managing the diversified treasury and DEX-owned liquidity, as well as liquidity mining incentives and validation rewards will be political task that creates demand for liquid MGX

### Distribution Charts: The Activities Mangata incentivizes

Our token distribution chart shows the kind of activities we want to see in the network to happen. 80% of the final supply after 5 years go into the hands of the community.

- **LP incentives:** As traders are the most important stakeholder group, the thing they need most is deep liquidity to perform high volume trades. This is why we are incentivizing liquidity provision with 37.5%.
- **Validation Rewards:** Securing the network against front-running and MEV is one of our most important promises. To make sure there is a lot of competition around this activity, 30% of tokens will go to collators and delegators.
- **Crowdloan Rewards:** To help us secure a spot in the ecosystem, crowdloan rewards over the first 4 slot periods get 8.25% of the final supply
- **Ecosystem Development Fund:** To incentivize all sorts of activities that the community can do to support the network, the Ecosystem Development Fund will receive 4.25% of tokens to reward community activities.
- **Team:** To support continued development of the Parachain, we have reserved 11.5% for the team.
- **Backers:** The early supporters of the network will hold 8.5% of the final supply.


![May the Airwhale bless you with infinite rewards!](/assets/posts/airwhale.jpg)

May the Airwhale bless you with infinite rewards!