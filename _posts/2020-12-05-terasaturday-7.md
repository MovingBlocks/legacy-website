---
layout: post
title: "TeraSaturday #7: It's a new spawn, it's a new day"
description: >
  An exploration of recent events in Terasology development
author: Skaldarnar
header-img: "/img/terasaturday/7/banner.jpg"
---

_Welcome to the return of TeraSaturday, a not-so-weekly update post about all the neat stuff that has been going on in
the world of Terasology! Half blog, half changelog, completely cool._

## 📰 Since last TeraSaturday ...

Another week has passed, and we just released [Terasology Alpha 17 (Release Candidate 2)](https://github.com/MovingBlocks/Terasology/releases/tag/v4.1.0-rc.2) with a bunch of performance bug fixes and performance improvements. We updated the TerasologyLauncher ([latest release v4.2.0](https://github.com/MovingBlocks/TerasologyLauncher/releases/tag/v4.2.0)) so that you can also start the latest release candidates on your Mac 🍏.

_@DarkWeird_ tracked down some zombie threads that stopped the game from exiting properly, _@Michael P_ tweaked the lighting code a bit to remove the overexposure in bright daylight, and _@Skaldarnar_ fixed the issue where killing mobs in Josharia's Survival would crash the server.

Our ... distinctive spawn point features (🙄) have been smoothed out by _@4D enthusiast_ who also continued to erase the remnants of the `SurfaceHeightFacets` from all modules.
_@Niruandaleth_ applied the finishing touches to the glTF models, unifying our Gooey assests in the [MawGooey module](https://github.com/Terasology/MawGooey) and doing some fine tuning of model sizes.

Furthermore, new contributors _@Paul_ and _@Gwhoyanne_ fixed the time synchronization between host and clients and now want to add some permissions to our magic time travel keys (<kbd>F3</kbd> to enable debug mode, then do time travel via <kbd>→</kbd> or <kbd>←</kbd>).

In total, that's [21 engine RPs](https://github.com/search?q=org%3AMovingBlocks+type%3Apr+merged%3A2020-11-28..2020-12-05) and [40 PRs on modules](https://github.com/search?q=org%3ATerasology+type%3Apr+merged%3A2020-11-28..2020-12-05) since November 28. 

![World Generation Improvements]({{ site.baseurl }}/img/terasaturday/7/worldgen.jpg)

## 🚀 Module/Feature Highlights

Since we focussed on stabilization and bug fixes this week not much happened regarding gameplay features. _@Niruandaleth_ and _@Skaldarnar_ did a pass over the in-game help present in Josharia's Survival and worked on some usability aspects. 
Items and Blocks are now sorted by their display name, and the order in which help sections are displayed is now the same all the time. 
In addition, a few blocks and items got a display name or description added where it was still missing.
All this is hopefully just the start of improving the in-game help features offered in our gameplays, making Terasology more accessible for new players 🕹

<p align="center">
<img src="{{ site.baseurl }}/img/terasaturday/7/ingame-help.png" alt="Sorted in-game help"/>
</p>
