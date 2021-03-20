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

## 📯 Terasology Alpha 19 (v4.3.0) released!

We are happy to announce that we just released Terasology Alpha 19 (v4.3.0).
While this release mainly consists of foundation work and "under-the-hood" improvements that are not visible in the game, our contributors also added a few quite visible goodies such as visual damage indicators (see TeraSaturday #11) and a world generation plugin for Flying Islands 🛸

## 📰 Since last TeraSaturday ...

Many thanks to our contributors since last [TeraSaturday #11]({% post_url 2021-03-13-terasaturday-11 %}): _@antag99_, _@DarkWeird_, _@keturn_, _@pollend_, and _@skaldarnar_.

After the preparational groundwork of the previous week, the _gestalt v7_ efforts of this week led to moving basically each and every package and file in the engine. As a result most of our omega modules had to be adjusted accordingly. A big thank you to _@keturn_, _@pollend_ and _@DarkWeird_ for their dedication! 🤗

- gestalt DI / DestSol pollend, DarkWeird
- build stuff keturn

Last but not least, since our recent JOML efforts we had a bug that resulted in the target indication box on a previously targeted block to stay rendered even when rotating the camera upwards so that it points at a block that is not within range.
We'd like to send out a warm welcome and thank you to our new contributor _@antag99_  who fixed this bug as one of his first contributions within our community 👋

In total, we merged [10 engine PRs](https://github.com/search?q=org%3AMovingBlocks+type%3Apr+merged%3A2021-03-14..2021-03-20) and [130 PRs on modules](https://github.com/search?q=org%3ATerasology+type%3Apr+merged%3A2021-03-14..2021-03-20).


## 🎀️ Community Highlights

### Laputa Adamant

We start this week's community highlights with the finishing touches to the [Flying Islands][Terasology/FlyingIslands] module, which is in the just released **alpha 19** (engine v4.3.0).
_@sin3point14_ did a great job implementing a world gen plugin to add flying islands to the world. 

But what power lets these islands float in the air (and prevent them from falling down from the sky in case [Falling Blocks][Terasology/FallingBlocks] is enabled)? 
On the tracks of _[Gulliver's Travels](https://en.wikipedia.org/wiki/Laputa)_ we discover that there is a strange block at the core of each of the islands, shimmering of magic.

<p align="center">
<video width= "320" height="240" controls autoplay loop>
  <source src="{{ site.baseurl }}/img/terasaturday/12/laputa-adamant.webm" type="video/webm">
</video>
</p>

> Working on a new block texture for the `Laputa Adamant` block in Flying Islands was pretty fun. 
> I used the opportunity to try out [aseprite] for the pixel art, and am pretty satsified with how intuitive the UX is.
> I tried to catch the magical essence of the block - it is floating for some non-obvious reason, there has to be magic involved!✨ - by giving it a cracked look, with a purple light shining from the core.
> 
> After _@4Denthusiast_ pointed out that we support **animated block tiles** the frame-by-frame animation of aseprite came in pretty handy, and now we have a pulsating, magical block 🙃

<div class="row">
  <div class="col s12 m3 l3"></div>
  <div class="col s12 m6 l6">
      <img class="img-margin fwidth materialboxed z-depth-3" src="{{ site.baseurl }}/img/terasaturday/12/laputa-adamant-aseprite.png" alt="Working on Lapuata Adamant block texture in aseprite"/>
  </div>
  <div class="col s12 m3 l3"></div>
</div>

- JS issues + motivation
- wiki / docs / structure + explanation

---

Let's end this post with a teaser for a TeraSpotlight post about our recent community pulse-check workshop that will (hopefully) come up soon: Have you ever thought about what animal Terasology might be? - We neither 😁 But then we decided to try... here's what we came up with.

<p align="center">
<img src="{{ site.baseurl }}/img/terasaturday/12/terasology-animal.png" alt="What animal should Terasology become?"/>
</p>

<!-- References -->

[aseprite]: https://www.aseprite.org/
[Terasology/FlyingIslands]: https://github.com/Terasology/FlyingIslands
[Terasology/FallingBlocks]: https://github.com/Terasology/FallingBlocks