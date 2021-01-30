---
layout: post
title: "TeraSaturday #9: Happy New Year"
description: >
  An exploration of recent events in Terasology development
author: Skaldarnar, Niruandaleth
header-img: "/img/terasaturday/9/banner.jpg"
---

_Welcome to the return of TeraSaturday, a not-so-weekly update post about all the neat stuff that has been going on in
the world of Terasology! Half blog, half changelog, completely cool._

## 📰 Since last TeraSaturday ...

The JOML-ification efforts were continued by _@Michael P_, _@Skaldarnar_ and _@Niruandaleth_ with additional reviewing and bugfixing help by _@4D\_enthusiast_ and _@DarkWeird_.
We're now at only a few hundred mentions of `org.terasology.math.geom` in engine and (omega) modules, so there's finally a light at the end of the tunnel! 🔦

As part of the JOML-ification efforts, we adopted the primitive geometric shapes from JOML (such as AABBs or Rectangles) as JOML extensions in the new [`joml-ext` repository](https://github.com/MovingBlocks/joml-ext).
This JOML geometry package was affectionately nicknamed "jom-geom" (pronounced `/ˈdʒɔm.dʒɔm/`).

With JOML-ification being about 90%, in total we merged [109 engine RPs](https://github.com/search?q=org%3AMovingBlocks+type%3Apr+merged%3A2020-12-26..2021-01-30) and [333 PRs on modules](https://github.com/search?q=org%3ATerasology+type%3Apr+merged%3A2020-12-26..2021-01-30) since December 25 👀

## 🎀️ Community Highlights

_@Cervator_ [enabled Omega builds on the shiny new Jenkins](https://github.com/MovingBlocks/Terasology/pull/4409) ✨ and _@Skaldarnar_ [adjusted the launcher to integrate these builds](https://github.com/MovingBlocks/TerasologyLauncher/pull/621) and make them available to everybody!
Thus, with our [Terasology Launcher v4.3.0](https://github.com/MovingBlocks/TerasologyLauncher/releases/tag/v4.3.0), you can now download the latest Omega builds from the new source 🎉

_@4D Enthusiast_ improved world generation and [brought back rough mountains, overhangs, and much more](https://github.com/Terasology/CoreWorlds/pull/18).
Below, we collected a few screenshots, but (while keeping in mind possible instabilities until the completion of JOML-ification) we encourage everybody to go check out our fancy new worlds themselves 🏞

![World Generation Improvements]({{ site.baseurl }}/img/terasaturday/9/worldgen.jpg)

_@Cervator_ worked together with _@e\_a_ and _@agent\_q1_ on getting our telemetry setup to work.
The telemetry setup mainly consists of an ELK (Elasticsearch, Logstash, Kibana) stack that allows for collecting, storing and visualizting telemetry data from Terasology game servers.
Though it's not hooked up with anything in particular yet, we are looking forward to use it with the play-test event server and see interesting visualizations at [telemetry.terasology.org](https://telemetry.terasology.com/) soon 📊

_@Hajdam_ (with help from _@DarkWeird_) [fixed good ol' TeraEd for Linux and Windows](https://github.com/MovingBlocks/Terasology/pull/4327).
With this foundation laid, _@Hajdam_ plans to add more functionality to TeraEd in the future, any improvement recommendations welcome.

Both, _@4D Enthusiast_ and _@DarkWeird_ worked on various ways to improve performance 🐢🧙‍♂️
_@4D Enthusiast_ started working on more chunk magic, in particular [rendering chunks in the far distance with less details](https://github.com/MovingBlocks/Terasology/pull/4427) (Level of Detail, LOD) in order to reduce the main memory consumption.
_@DarkWeird_ reduced memory consumption by [deflating arrays for chunk representation](https://github.com/MovingBlocks/Terasology/pull/4433), [migrated our benchmarks to JMH](https://github.com/MovingBlocks/Terasology/pull/4401), and played around with different garbage collectors, comparing them.
With these insights we will probably adjust the default settings in the launcher after some testing.
Furthermore, _@4D Enthusiast_ [fixed an aging issue with chunk generation](https://github.com/MovingBlocks/Terasology/pull/4353) that produced NPEs and rendered some chunks invisible.

![Compare JVM Garbage Collectors]({{ site.baseurl }}/img/terasaturday/9/garbage-collectors.jpg)

Finally, _@keturn_ dug deeper into Gradle, Kotlin, and whathever else the dwarves are doing under the surface to build our gigantuous code base 🤓🧰
