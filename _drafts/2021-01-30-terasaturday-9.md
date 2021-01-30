---
layout: post
title: "TeraSaturday #9: Happy New Year"
description: >
  An exploration of recent events in Terasology development
author: Skaldarnar
header-img: "/img/2020-12_xmas.jpg"
---

_Welcome to the return of TeraSaturday, a not-so-weekly update post about all the neat stuff that has been going on in
the world of Terasology! Half blog, half changelog, completely cool._

## 📰 Since last TeraSaturday ...


The JOML-ification efforts were continued by _@Michael P_, _@Skaldarnar_ and _@Niruandaleth_ ...

In total, that's [109 engine RPs](https://github.com/search?q=org%3AMovingBlocks+type%3Apr+merged%3A2020-12-26..2021-01-30) and [333 PRs on modules](https://github.com/search?q=org%3ATerasology+type%3Apr+merged%3A2020-12-26..2021-01-30) since December 25. :eyes:

We adopted the primitive geometric shapes from JOML (such as AABBs or Rectangles) as JOML extensions in the new [`joml-ext` repository](https://github.com/MovingBlocks/joml-ext).

## 🎀️ Community Highlights

_@Cervator_ enabled Omega builds on the shiny new Jenkins (https://github.com/MovingBlocks/Terasology/pull/4409), _@Skaldarnar_ adjusted the launcher (https://github.com/MovingBlocks/TerasologyLauncher/pull/621).
With Terasoloy Launcher v4.3.0 you can download the latest Omega builds from the new source. (https://github.com/MovingBlocks/TerasologyLauncher/releases/tag/v4.3.0)

_@4D Enthusiast_ improved world generation and brought back rough mountains, overhangs, and much more (https://github.com/Terasology/CoreWorlds/pull/18)

> :construction: add screenshots

_@Cervator_ made https://telemetry.terasology.com/ work (although I have no idea how to use it :see_no_evil:)

ELK stack (ElasticSearch, Logstash, Kibana) to allow collecting and visualizing telemtry data from Terasology game servers. Not hooked up to anything yet, but we are looking forward to use it for the play-test event server.

_@Hajdam_ (with help from _@DarkWeird_) fixed good ol' TeraEd for Linux and Windows. (https://github.com/MovingBlocks/Terasology/pull/4327)

_@4D Enthusiast_ started working on more chunk magic, in particular rendering chunks in the far distance with less details (Level of Detail, LOD).

> :construction: add screenshot

_@DarkWeird_ played around with different garbage collectors and compared them. With these insight we will probably adjust the default settings in the launcher after some testing.


_@4D Enthusiast_ work on chunks / world gen
    - https://github.com/MovingBlocks/Terasology/pull/4353 
    - https://github.com/MovingBlocks/Terasology/pull/4427
    - https://github.com/MovingBlocks/Terasology/pull/4418
    - https://github.com/MovingBlocks/Terasology/pull/4394
    - https://github.com/MovingBlocks/Terasology/pull/4313
_@DarkWeird_ migrated our benchmarks to JMH (https://github.com/MovingBlocks/Terasology/pull/4401)
    - performance improvements by defalting arrays for chunk representation (https://github.com/MovingBlocks/Terasology/pull/4433)


_@Keturn_ dug deeper into Gradle, Kotlin, and whathever else the dwarves are doing under the surface to build our gigantuous code base 
