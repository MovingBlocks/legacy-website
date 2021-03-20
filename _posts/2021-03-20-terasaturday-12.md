---
layout: post
title: "TeraSaturday #12: "
description: >
  An exploration of recent events in Terasology development
author: Skaldarnar, Niruandaleth
header-img: "/img/terasaturday/12/banner.jpg"
---

_Welcome to the return of TeraSaturday, a not-so-weekly update post about all the neat stuff that has been going on in
the world of Terasology! Half blog, half changelog, completely cool._

## 📰 Since last TeraSaturday ...

Many thanks to our contributors since last [TeraSaturday #11]({% post_url 2021-03-13-terasaturday-11 %}): _@antag99_, _@DarkWeird_, _@keturn_, _@pollend_, and _@skaldarnar_.

After the preparational groundwork of the previous week, the _gestalt v7_ efforts of this week led to moving basically each and every package and file in the engine. As a result most of our omega modules had to be adjusted accordingly. A big thank you to _@keturn_, _@pollend_ and _@DarkWeird_ for their dedication! 🤗

- gestalt DI / DestSol pollend, DarkWeird
- build stuff keturn
- antag99 fix

In total, we merged [10 engine PRs](https://github.com/search?q=org%3AMovingBlocks+type%3Apr+merged%3A2021-03-14..2021-03-20) and [130 PRs on modules](https://github.com/search?q=org%3ATerasology+type%3Apr+merged%3A2021-03-14..2021-03-20).


## 🎀️ Community Highlights

- laputa + story
- JS issues + motivation
- wiki / docs / structure + explanation



This week's community highlight started off on November last year, when _@askneller_ opened a PR to add a "red flash" as visual indicator when the player receives damage ([Terasology/Health#53]).
We eventually found the time to follow-up on that, and push it over the finish line ([Terasology/Health#67]). 

From now on, you'll see a visual indicator when being hit. The indicator will hint at where the damage is coming from, e.g., show a flashing read indicator on the left edge of the screen when being hit from the left. 
If no specific direction can be identified, e.g., if the damage is due to thirst or falling damage, all indicators will flash up at the same time.

<p align="center">
<img src="{{ site.baseurl }}/img/terasaturday/11/damage-flash.gif" alt="Sorted in-game help"/>
</p>

---

Let's end this post with a teaser for a TeraSpotlight post about our recent community pulse-check workshop that will (hopefully) come up soon: Have you ever thought about what animal Terasology might be? - We neither 😁 But then we decided to try... here's what we came up with.

<p align="center">
<img src="{{ site.baseurl }}/img/terasaturday/12/terasology-animal.png" alt="What animal should Terasology become?"/>
</p>