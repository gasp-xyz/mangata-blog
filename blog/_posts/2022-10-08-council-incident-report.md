---
layout: post
title: "Council Incident Report"
date: 2022-10-08
image: "2022-10-08-council-incident-report.jpg"
author: "Mangata Team"
author-image: "mangata-team.png"
excerpt: ""
---

On 6th October 2022, Mangata X was targeted by a governance attack which resulted in attackers gaining voting rights on the on-chain Council for a brief time. The incident has since been resolved and Mangata X is fully operational and safe.

The type of the attack was novel. Instead of a technical hack, the attacker used a hostile takeover of the council at 4:39 AM UTC to authorize transferring KSM from the parachain sovereign account on Kusama to another Kusama account. At 18:29 PM UTC we regained control of the council and countered the actions taken by the attackers in full.

11700 KSM have been stolen. We have replenished the stolen amount from our own funds to ensure continued and safe operations. No user has their funds affected. Users do not need to take any additional action.

Our team is in contact with relevant parties to assess this matter in the most assertive way. We will provide more information going forward - in particular how other parachains can prevent this kind of governance attack in the future.

We will dedicate our next Mangata Monday community call on Monday, 5pm UTC to discuss this incident with the community and talk about the way forward.

Remember to only trust our official channels. We will publish all relevant information on our official Twitter, Telegram, and Discord channels.

This post will go into the details of what happened, how we reacted and what learnings we can share with the community. Follow our socials to get updated on the progress of Mangata:

- Mangata Twitter: [@MangataFinance](https://twitter.com/MangataFinance){:target="\_blank"}
- Mangata Telegram: [t.me/mgtfi](https://t.me/mgtfi){:target="\_blank"}
- Mangata Discord: [discord.gg/mangata](http://discord.gg/mangata){:target="\_blank"}

The attacker can reach us on Element mangata_finance, Keybase mangata_finance, or Email hello@mangata.finance

## Breakdown of the Governance Attack

Mangata X is based on the Substrate blockchain framework, which comes with several modules, called “pallets” out of the box. The Collective pallet is one of the standard pallets of Substrate and includes the feature that was being targeted by the attacker.

The Council is a feature of the Collective pallet that allows chains to organize governance around a set of elected accounts that can wield authority to enact fundamental changes on the chain, like connecting to other parachains, list new tokens, initiate bootstraps etc. This feature is enabled on Mangata X..

Councils can be voted on and this was the angle the attacker used to gain control of the council. The term duration after which new council members are selected is configured to be 120 days. The attacker used the first council election after the inception of the chain to get a list of accounts under their control voted into the council.

The attack was staged 7 and 4 days in advance by bringing council candidates in position. This was done by submitting funds to Mangata X to create and fund dedicated accounts and submit candidacies for the Council and vote for the candidates.

After winning the election, the attacker immediately created a [Council motion](https://mangatax.subscan.io/council/0){:target="\_blank"} to perform a specially crafted XCM message to transfer 11700 KSM from the parachain Sovereign Account on Kusama to [this account](https://kusama.subscan.io/account/5FjTduFGunthzB8FkG4qMJgH6YwqpfK6jqBuAtGuQc5yrMmB){:target="\_blank"}.

For details, see Appendix 1 - Timeline of the Attack

## Actions taken by our Team

This chapter describes what we have done to correct the issue.

### Regaining Control of the Council

Sudo removed the attackers accounts from the council and instated an honest council: [Filter](https://mangatax.subscan.io/extrinsic?address=&module=sudo&call=all&result=all&signedChecked=signed%20only&startDate=2022-10-06&endDate=2022-10-06&startBlock=&timeType=date&version=9&endBlock=){:target="\_blank"}

### Recovery of Funds

To ensure continued operations, we have added funds equal to the stolen amount to the Mangata X Sovereign Account on Kusama. For details, see Appendix 2 - Recovery of Funds

### Correcting Chain State

After the incident, one user tried to withdraw KSM. The transaction was successful on Mangata X but failed in Kusama due to missing funds: [Transfer](https://kusama.subscan.io/xcm_transfer/kusama-2110-869599-2){:target="\_blank"}

This resulted in a situation where the funds no longer were registered on Mangata X but also were not retrievable on Kusama. To correct the chain state, after recovering the funds, Sudo minted the KSM back to the account who lost it: [Extrinsic](https://mangatax.subscan.io/extrinsic/875602-2){:target="\_blank"}

This allowed the affected account to regain control of their KSM.

We are still evaluating if further actions need to be taken to correct the chain state. If this is the case, future calls by governance or a runtime upgrade will need to be enacted.

### Message to the Recipient

We have sent a message to the attackers holding account requesting to contact us: [Extrinsic](https://kusama.subscan.io/extrinsic/14777267-11){:target="\_blank"}

We intend to get in contact with the attacker and talk about returning the funds.

## Analysis

As we mentioned initially, no hack or exploit was used in this new type of attack vector. Instead, the hostile takeover of the council made this attack possible. Our codebase is safe and an independent audit by SRLabs from March till May of this year has confirmed this.

We consider the attack sophisticated. The attacker had to combine three elements to make it possible:

- Parachain mechanics
- Governance mechanics
- Timing

### Parachain mechanics

The attack shows a high degree of understanding of the parachain and XCM system. The attacker [crafted a special XCM message](https://mangatax.subscan.io/council/0){:target="\_blank"} to call OrmlXcm.send_as_sovereign to transfer funds from the Mangata X Sovereign Account to a holding account of the attacker.

A sovereign account is an account on the Kusama relay chain that is under the control of its parachain. Every parachain has such a sovereign account on the relay chain. It is a representation of the parachain on the relay chain. It is used for reserve-backed transfers of KSM between chains under the Kusama security umbrella. Whenever an account transfers funds from a chain to that parachain, those tokens get sent to the sovereign account and the parachain runtime then creates its own representation, e.g. by minting those tokens into a specific user account.

This very specific fact was used by the attacker to send tokens with the authority of the chain away from the sovereign account towards an account chosen by the attacker.

### Governance mechanics

On-Chain Governance comes in different flavors in Substrate. There can be fully permissioned systems where a single entity holds a Sudo key. There can be a council which acts similar to a traditional multi-sig. There can be full-fledged voting by all token holders. Substrate is flexible in that it allows an arbitrary configuration of governance, with the possibility of having only some powers being delegated to a council or committee.

The attacker had to be aware of how on-chain governance works and what kind of attacks can be mounted from it.

### Timing

The window of opportunity for this attack opened up after the first term of the Council cince the chain started. The attacker started preparing the hostile takeover ahead of the end of the term and enacted the transfer of funds within minutes of the council election.

### On the Introduction of Governance Attacks into the Ecosystem

With new capabilities come new attack vectors. While we spent enormous amounts of effort on quality assurance to ensure our code is safe and audited, this type of governance attack is novel and deserves more awareness. Every chain can configure governance to fit their needs and this added complexity opens new doors.

We propose that as an ecosystem we start to develop a best practices model on how to run and configure governance that is safe. Attacks on governance require different knowledge, technical capabilities, and ressources than traditional attacks and notably open the opportunity to attack with less than 50% of stake in the network.

We propose that parachain teams critically reflect this new attack vector and add it to the scope of their security audits.

## Appendix

### Appendix 1 - Timeline of the Governance Attack

- 2022-07-20 The Kusama account “Cj2o” is created which funds transfers to DICO, Heiko and Mangata X.
    - [Cj2o7CXBANuP7nGNaWxhDbbLKHPaEFvkgDEPt4sk1dPyhjd](https://kusama.subscan.io/account/Cj2o7CXBANuP7nGNaWxhDbbLKHPaEFvkgDEPt4sk1dPyhjd){:target="\_blank"}
- 2022-09-29
    - Cj2o funds the Kusama account “EwNu” to stage the attack on Mangata X.
        - [Funding Transaction](https://kusama.subscan.io/extrinsic/14661880-4){:target="\_blank"}
        - [EwNudmS8ddxarGsDFaibGz5AYhNemcBNKqcUVE4YtPLYueY](https://kusama.subscan.io/account/EwNudmS8ddxarGsDFaibGz5AYhNemcBNKqcUVE4YtPLYueY){:target="\_blank"}
    - The Mangata X Staging account “5ERm” gets funded: [5ERmFKRZWGd2qCTRSYmfhKd51xR8r6nzuwzs5px756Aqoogg](https://mangatax.subscan.io/account/5ERmFKRZWGd2qCTRSYmfhKd51xR8r6nzuwzs5px756Aqoogg?tab=xcm_transfer){:target="\_blank"}
- 2022-10-02
    - The Mangata X Staging account funds several accounts to become council members
- 2022-10-06
    - The attacker proposes Council executes sudo to withdraw 11,700 KSM to a holding account on Kusama
        - [Council Motion #0](https://mangatax.subscan.io/council/0){:target="\_blank"}
        - [Proposal Extrinsic](https://mangatax.subscan.io/extrinsic/866445-2){:target="\_blank"}
        - [Closing Extrinsic](https://mangatax.subscan.io/extrinsic/866468-2){:target="\_blank"}
- Account with stolen KSM on Kusama: [5FjTduFGunthzB8FkG4qMJgH6YwqpfK6jqBuAtGuQc5yrMmB](https://kusama.subscan.io/account/5FjTduFGunthzB8FkG4qMJgH6YwqpfK6jqBuAtGuQc5yrMmB){:target="\_blank"}

### Appendix 2 - Recovery of Funds

- Funded the Sovereign Account with sufficient KSM:
    - [https://kusama.subscan.io/extrinsic/14766638-3](https://kusama.subscan.io/extrinsic/14766638-3){:target="\_blank"}
    - [https://kusama.subscan.io/extrinsic/14769058-2](https://kusama.subscan.io/extrinsic/14769058-2){:target="\_blank"}
    - [https://kusama.subscan.io/extrinsic/14769254-2](https://kusama.subscan.io/extrinsic/14769254-2){:target="\_blank"}
    - [https://kusama.subscan.io/extrinsic/14769261-3](https://kusama.subscan.io/extrinsic/14769261-3){:target="\_blank"}
    - [https://kusama.subscan.io/extrinsic/14769268-10](https://kusama.subscan.io/extrinsic/14769268-10){:target="\_blank"}
    - [https://kusama.subscan.io/extrinsic/14769355-3](https://kusama.subscan.io/extrinsic/14769355-3){:target="\_blank"}