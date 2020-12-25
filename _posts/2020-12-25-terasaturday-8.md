---
layout: post
title: "TeraSaturday #8: A Merry, Gooey Christmas!"
description: >
  An exploration of recent events in Terasology development
author: Niruandaleth
header-img: "/img/2020-12_xmas.jpg"
---

_Welcome to the return of TeraSaturday, a not-so-weekly update post about all the neat stuff that has been going on in
the world of Terasology! Half blog, half changelog, completely cool._

## 📰 Since last TeraSaturday ...

A few weeks have passed since we released [Terasology Alpha 17](https://github.com/MovingBlocks/Terasology/releases/tag/v4.1.0) with a lot of features, bug fixes and under-the-hood improvements.
Since then, albeit the stressful pre-christmas time, we did not lay back and rest, but continued to improve Terasology in different ways:

_@DarkWeird_ relieved the main engine system of yet another subsystem - our type handlers now live in their own library, the [TypeHandlerLibrary](https://github.com/MovingBlocks/Terasology/pull/4255).
Meanwhile, _@keturn_ worked on cleaning up a few Intellij idea workspace issues and [decluttered our module snapshot versioning and dependency resolution](https://github.com/MovingBlocks/Terasology/commit/5d5ffeebcca1c2cc552e81be161d6a899db44ed2) 🔧️.

<<<<<<< HEAD
The JOML-ification efforts were continued by _@Michael P_, _@Skaldarnar_ and _@Niruandaleth_ both in terms of smaller migrations of engine packages and a detailed [API overhaul for `BlockRegion`](https://github.com/MovingBlocks/Terasology/pull/4326).
=======
Our Jenkins setup was modernized by _@e\a_ and _@Cervator_ both of whom did a lot of cleanup work, moving jobs from our legacy Jenkins to the new one, refactoring for more modern tech and so on, so we can finally retire the old one 👴️.

The JOML-ification efforts were continued by _@Michael P_, _@Skaldarnar and _@Niruandaleth_ both in terms of smaller migrations of engine packages and a detailed [API overhaul for `BlockRegion`](https://github.com/MovingBlocks/Terasology/pull/4326).
>>>>>>> 0739c64d7a0e52a320b891ff05fb5186f702940e
Especially the latter required a lot of discussion, multiple revisions and a lot of nerves for all participants 😅️.

_@4D Enthusiast_ went about and fixed an [issue with our atlas regions](https://github.com/MovingBlocks/Terasology/pull/4311) that resulted (on some graphics setups) in weird texture artifacts as well as [a bug that removed the camera on purging a world](https://github.com/MovingBlocks/Terasology/pull/4310) 🐛️.
Additionally, new contributors _@lasossette_ and _@asma_ lightened the AFKSystem a bit and model assets for Gooey and friends are now available in a general [`Gooey` module](https://github.com/Terasology/gooey).

In total, that's [27 engine RPs](https://github.com/search?p=3&q=org%3AMovingBlocks+type%3Apr+merged%3A2020-12-06..2020-12-25) and [75 PRs on modules](https://github.com/search?q=org:Terasology+type:pr+merged:2020-12-06..2020-12-25) since December 6.

## 🎀️ Community Highlights

On a personal note, we are very happy to celebrate their admission to the Cornell Tech master's programm with _@IsaacL_ 🎉️

Furthermore, we're very glad about _@Cervator_'s secret (but often teasered) project [finally being revealed](https://cervator.github.io/1st-day-of-Xmas/): [KubicArk](https://cervator.github.io/1st-day-of-Xmas/KubicArk) 🦖️
We're also looking forward very much to how this will become closer related to Terasology in the future! 

Concluding, the whole Terasology Foundation wishes everybody out there a very healthy, happy and gooey christmas! 🎄️
Enjoy the holidays and look out for announcements on our Discord channel - there could be a suprise event before the end of the year 😉️