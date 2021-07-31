---
layout: post
title: "TeraSaturday #15: A Summer of Code"
description: >
  An exploration of recent events in Terasology development
author: Niruandaleth
header-img: "/img/terasaturday/15/banner.jpg"
---

_Welcome to the return of TeraSaturday, a not-so-weekly update post about all the neat stuff that has been going on in
the world of Terasology! Half blog, half changelog, completely cool._

## 🚀 Release Notes

We're happy to announce various releases of projects maintained by The Terasology Foundation over the past weeks.

First of all, our user interface library [TeraNUI] was [released in version 3.0.0](https://github.com/MovingBlocks/TeraNUI/releases/tag/v3.0.0), opening the way for new developments in the future.
_@pollend_ and _@DarkWeird_ work on experimental features for v4 related to dependency injection in [gestalt].

Talking about [gestalt], the Java library collection providing core game engine capabilities the Terasology Engine is built on, was [released in version 7.1.0](https://github.com/MovingBlocks/gestalt/releases/tag/v7.1.0).
Iin this release, _@keturn_ fixed some permission issues found in `ModuleEnvironment` and improved compatibility with semantic versioning when comparing snapshot versions.

Most importantly, we are happy to announce, that we released [Terasology 5.0.0 / Alpha 20](https://github.com/MovingBlocks/Terasology/releases/tag/v5.0.0) after successfully testing the second release candidate in our [July Playtest](#july-playtest).
Please note, that starting with this version, the minimal system requirements have changed. The GPU now has to support at least OpenGL 3.3.
Furthermore, this release has a known rendering bug showing square artifacts in the corner / at the edges of the screen (see [GitHub issue #4542](https://github.com/MovingBlocks/Terasology/issues/4542)).

## 📰 Since last TeraSaturday ...

Many thanks to our contributors since last [TeraSaturday #14]: _@ahv15_, _@Avalancs_, _@BenjaminAmos_, _@Casals_, _@Cervator_, _@DarkWeird_, _@Hume2_, _@IsaiahBlanks_, _@jdrueckert_, _@KdotJPG_, _@keturn_, _@meetcshah19, _@NicholasBatesNZ_, _@NicolaasJKotze_, _@pollend_, _@ryuk156_, _@skaldarnar_, _@tolziplohu_, and _@ZhouRicky_ 👏

The additional effort to mentor this year's Google Summer of Code (GSoC) projects definitely took its toll on our contributor's capacities to work on other topics.
However, we're happy that we still have a lot of things to show for over the past weeks.

A big shout-out to _@Michael P_ (aka _@pollend_), who tirelessly worked on migrating rendering to OpenGL 3.3, improve performance, and buzzed around the codebase, fixing issues and cleaning up code left and right 🐝
Another shout-out to _@keturn_, who relentlessly makes sure that we do not forget about investigating and fixing failing tests, and continuously challenges everybody to keep up the quality work 👍

In other news, we split the stages of our build pipeline to allow for a bit more detailed insights into test failures and quality-related analytics. Talking about tests, the [module tests are recovering](https://jenkins.terasology.io/teraorg/job/Terasology/job/Modules/view/Omega/) from the past migration efforts.

> We updated some tests to use Module Testing Environment, making some fixes to it along the way. We also removed some other "Environment" test classes (#4830) which were similarly named but not compatible.
> 
> That makes one less thing to be confused over for module developers.
>
> <div align="right">
> -- <i>@keturn</i>
> </div>

These and other minor efforts were coordinated in our weekly Org Meeting (every Saturday, 4PM UTC on our [Discord](https://discord.gg/terasology)) using our [Org Meeting Trello Board](https://trello.com/b/4cw7Q1BJ/org-meeting-board). Feel free to come join us and help make Terasology better and better 😉 

  <div style="float:left">
    <img src="{{ site.baseurl }}/img/terasaturday/15/org-board-done-1.png" width="20%" />
    <img src="{{ site.baseurl }}/img/terasaturday/15/org-board-done-2.png" width="20%" />
    <img src="{{ site.baseurl }}/img/terasaturday/15/org-board-done-3.png" width="20%" />
    <img src="{{ site.baseurl }}/img/terasaturday/15/org-board-done-4.png" width="20%" />
  </div>
  <br />

2️⃣7️⃣7️⃣ In total, we merged [124 engine PRs](https://github.com/MovingBlocks/Terasology/pulls?q=is%3Apr+sort%3Aupdated-desc+is%3Amerged+merged%3A2021-05-17..2021-07-31) and [105 PRs on modules](https://github.com/search?q=org%3Aterasology+is%3Apr+merged%3A2021-05-17..2021-07-31). In addition, we merged [48 PRs on libraries and side projects](https://github.com/search?q=-repo%3Amovingblocks%2Fterasology+org%3Amovingblocks+is%3Apr+merged%3A2021-05-17..2021-07-31) such as _gestalt_, the launcher, or the module site.


## 🎀️ Community Highlights

### ☀️ GSoC Halftime Show & Tell

The first half of this year's Google Summer of Code (GSoC) is over.
We are happy to announce that all five students passed their halftime evaluations.

Check out [TeraSpotlight: GSOC 2021 Halftime Show & Tell] to find out about the students' achievements over the past few weeks. Below are some canapés:

  <div style="float:left">
    <img src="{{ site.baseurl }}/img/2021-07-24-teraspotlight-gsoc-halftime/las_pregame-phase-countdown.png" width="33%" />
    <img src="{{ site.baseurl }}/img/2021-07-24-teraspotlight-gsoc-halftime/js_sheep-shearing-before.png" width="33%" />
    <img src="{{ site.baseurl }}/img/2021-07-24-teraspotlight-gsoc-halftime/mr_mesas.png" width="33%" />
  </div>

The students will continue to contribute to different areas of our wide ecosystem, ranging from modernizing our web presence over world generation both, in space and on earth, to improvements in various gameplays.

### 💻 Remote Mob Programming

Mob programming, similar to pair programming, is an approach to develop software with multiple people on the same computer. It leverages the different experiences and mindsets of multiple developers to find the best solution for a problem, taking into account various perspectives on it. Further, it is beneficial for team building and knowledge exchange as the collaborators learn how their colleagues approach a problem and technical expertise can be shared while doing so. 

Being spread across two continents, _@keturn_, _@Michael P_ (aka _@pollend_), _@skaldarnar_ and I, _@Niruandaleth_ (aka _@jdrueckert_) had to fall back to remote options rather than sitting in the same room. However, with the help of our Discord voice channel and IntelliJ's collaboration tool ["Code With Me"](https://blog.jetbrains.com/blog/2020/09/28/code-with-me-eap/), we actually had a good and productive time investigating module permissions and test issues.

### 🕹️ July Playtest

After a long time of bigger migrations in the underlying foundations of Terasology and the required stabilization efforts in their aftermath, we finally got around to another playtest session. One by one, we started our playtest server with Metal Renegades, Light & Shadow, Josharias' Survival, and Core Gameplay.

Apart from a few minor issues, the biggest problems that were identified are related to multiplayer bugs - gameplay aspects that work fine in singleplayer, but don't in multiplayer - and performance issues.
In a later investigation, we found that the observed performance issues seem to be more of a problem with the server setup rather than Terasology itself.
However, this still needs investigation, but we hope to improve the playtest experience by leveraging a dockerized setup in the future.

### 📸 Media

We are happy and honoured to be mentioned as one of the "Top 10 Games like Minecraft" comparison video on YouTube. Embedded below is the full video, to directly jump to the mention of Terasology, use the following shortlink: [https://youtu.be/0QO1nXkre94?t=476](https://youtu.be/0QO1nXkre94?t=476).

<div align="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/0QO1nXkre94" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<!-- References -->

[TeraNUI]: https://github.com/MovingBlocks/TeraNUI
[gestalt]: https://github.com/MovingBlocks/gestalt

[TeraSaturday #14]: {% post_url 2021-05-16-terasaturday-14 %}
[TeraSpotlight: GSOC 2021 Halftime Show & Tell]: {% post_url 2021-07-24-teraspotlight-gsoc-2021-halftime %}
