---
layout: post
title: 'TeraSaturday #6: Hide and Sheep'
description: >
  An exploration of recent events in Terasology development
author: Skaldarnar
header-img: "/img/terasaturday/6/banner.png"
---

_Welcome to the return of TeraSaturday, a not-so-weekly update post about all the neat stuff that has been going on in
the world of Terasology! Half blog, half changelog, completely cool._

## 📰 Since last TeraSaturday ...

We had the **November Play Test** last Sunday, trying out all the new and exciting things that have been added over the last months. We all tested the first release candidate for the upcoming stable version to identify weak spots we want to smooth out. You can download [Engine 4.1.0 / Alpha 17 Preview (Release Candidate 1)](https://github.com/MovingBlocks/Terasology/releases/tag/v4.1.0-rc.1) as **Terasology (Nightly) #1119** in the launcher. _@Skaldarnar_ streamed via [twitch](https://www.twitch.tv/terasology), you can watch the (slightly trimmed) recording here - as always, feedback is welcome 🤓

<div align="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/QbD8Z98Evb4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

We would like to say a warm welcome to _@HajdaM_ and _@iHDeveloper_ who both jumped straight from play-testing into coding, e.g., by improving performance or the integration with Discord. _@Michael P_ and _@Niruandaleth_ are still crawling through the JOML conversion 👩‍🏫 and _@Dark Weird_, among other things, dissambles our engine into smaller subsystems 👨‍🔧

Overall, we again merged more than **60 PRs** on [the engine](https://github.com/search?q=org%3AMovingBlocks+type%3Apr+merged%3A2020-11-20..2020-11-28) and in [module space](https://github.com/search?q=org%3ATerasology+type%3Apr+merged%3A2020-11-20..2020-11-28) over the last week, with more contributions from _@4D enthusiast_ and _@Cervator_. 💪

<div align="center">
<img src="{{ site.baseurl }}/img/terasaturday/6/discord-integration.jpg" alt="Discord Integration" />
</div>


## 🐛 Bug Fixes 🐞

🕹 You may enjoy this play-test video by _Lowricsec_ who gave the our 2020-05 release a try. This has slipped our attention for 3 months, but here you go 🎮 Videos like these are a great source of both inspiration and new bugs to fix. It helps us to identify the issues that really affect the player, and we often also get some suggestion on how this might be fixed. 

<div align="center">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/R3CozWpC3G0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

_@Niruandaleth_ and _@Skaldarnar_ took this as an opportunity to address some of those bugs. They tweaked the brightness at night, adjusted the player height and model scale, pushed the name tags back into place, and got rid of some bugs which crashed the game. Health regeneration was also fixed, so no more blocks reganing their health faster than you can hit 'em. _@Dark Weird_ also contributed here, investigating some networking issues to make the "Join Game" work smoothly again. 

![Brightness at Night]({{ site.baseurl }}/img/terasaturday/6/night-brightness.png)

## 🚀 Module/Feature Highlights

Finally, we want to give you a little sneak peak at the world generation improvements _@4D enthusiast_ is working on. On the long way to bringin back pretty overhangs you can now find overgrown cave entrances in the world (with the Caves world generator plugin). There are more improvements to lakes and surfaces in general, but this deserves it's own highlight spot 😉

![Cave Entrace]({{ site.baseurl }}/img/terasaturday/6/cave-entrance.jpg)
