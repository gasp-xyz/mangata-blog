---
layout: post
title: "Testnet Update: v0.11.2"
date: 2021-11-25
image: "2021-11-25-testnet-update-0-11-2.png"
author: "Mangata Team"
author-image: "mangata-team.png"
excerpt: "<p>We have a new release! Mangata - v0.11.2. We improved performance(this was a big guy), added a few UI niceties - Tooltip for wallets, better disabled buttons, and fixed bunch of bugs</p>"
---

🎉  We have a new release! Mangata - v0.11.2

### IMPORTANT NOTE
The release includes dummy UI for rewards - rewards are not working yet, the numbers there are just placeholders, please wait for the next release to test them 

### Tl;dr
We improved performance(this was a big guy), added a few UI niceties - Tooltip for wallets, better disabled buttons, and fixed bunch of bugs

### Full list - What's Changed
- Trading Inputs now correctly update their values when assets are changed
- Fixed the bug that caused Pool Detail in sidebar to automatically close when it was opened too quickly after some other Pool Detail was closed
- Added error handling for transactions which fail due to transaction promise rejection (reasons other than manual rejection of the transaction in Polkadot extension)
- Fixed useTxProgress error handling (it's handled by the SDK now)
- Improved visual feedback for disabled trading form
- Internal fixes for logging
- Implemented manual refetch for assets and pools after transactions to address performance issues
- Fixed ERC20 balance fetching in Deposit scenario
- Updated tokens list in Deposit modal
- Added tooltips for Polkadot and Metamask addresses in the UI
- Updated copy of POOL form fees info
- Fixed the bug in Deposit logic that prevented non-custom assets from being deposited