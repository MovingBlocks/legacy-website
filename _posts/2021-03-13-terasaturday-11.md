---
layout: post
title: "TeraSaturday #11: GSOC 2021 is Coming"
description: >
  An exploration of recent events in Terasology development
author: Skaldarnar, Niruandaleth
header-img: "/img/terasaturday/11/banner.jpg"
---

_Welcome to the return of TeraSaturday, a not-so-weekly update post about all the neat stuff that has been going on in
the world of Terasology! Half blog, half changelog, completely cool._

## 📯 Accepted for Google Summer of Code 

First of all: For the 6th year in a row, **[The Terasology Foundation](https://summerofcode.withgoogle.com/organizations/5338575677161472/) was accepted as an organization of [Google Summer of Code](https://summerofcode.withgoogle.com/)** 🎉
We're looking forward to awesome student projects over the summer, and hopefully keeping the students as valuable members of our community afterwards 💚
If you're a student, look at our [GSoC Idea Cards](https://trello.com/b/5QQGHuTt/gsoc-gsod-ideas), **become active** within the community and join the students that already started preparing to apply on [Discord](https://discord.gg/terasology) 🤓

And if you're not a student, help us **spread the word** 😉

<div align="center">
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">📯 For the 6th year in a row, The Terasology Foundation was accepted as an organization of Google Summer of Code 🎉<br><br>Looking forward to awesome student projects and welcoming YOU to our community 💚<br><br>Students: check out <a href="https://t.co/AfYyX1XZQf">https://t.co/AfYyX1XZQf</a> 🤓<a href="https://twitter.com/hashtag/GSoC2021?src=hash&amp;ref_src=twsrc%5Etfw">#GSoC2021</a> <a href="https://twitter.com/hashtag/opensource?src=hash&amp;ref_src=twsrc%5Etfw">#opensource</a> <a href="https://twitter.com/hashtag/gamedev?src=hash&amp;ref_src=twsrc%5Etfw">#gamedev</a></p>&mdash; Terasology (@Terasology) <a href="https://twitter.com/Terasology/status/1369389663912402948?ref_src=twsrc%5Etfw">March 9, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
</div>

## 📰 Since last TeraSaturday ...

Many thanks to our contributors since last [TeraSaturday #10]({% post_url 2021-02-27-terasaturday-10 %}): _@4Denthusiast, @agent-q1, @askneller, @DarkWeird, @iHDeveloper, @jdrueckert, @keturn, @pollend, @sin3point14_, and _@skaldarnar_.

Overall, we shifted our focus towards getting Terasology up to speed with _gestalt v7_ to become more future-proof. This required a lot of groundwork around updating depencies ([#4558], [#4557], [#4564]) and tests ([#4563] and associated [module PRs migrating to JUnit 5][modules:junit5]). Alongside, we got back to subsystem extractions driven by _@DarkWeird_ and some fine tuning of **LOD Chunks** ([#4567]) by _@4Denthusiast_ and improvements to the **Discord integration** ([#4271]) by _@iHDeveloper_.

In total, we merged [41 engine PRs](https://github.com/search?q=org%3AMovingBlocks+type%3Apr+merged%3A2021-02-27..2021-03-13) and [36 PRs on modules](https://github.com/search?q=org%3ATerasology+type%3Apr+merged%3A2021-02-27..2021-03-13).


## 🎀️ Community Highlights

This week's community highlight started off on November last year, when _@askneller_ opened a PR to add a "red flash" as visual indicator when the player receives damage ([Terasology/Health#53]).
We eventually found the time to follow-up on that, and push it over the finish line ([Terasology/Health#67]). 

From now on, you'll see a visual indicator when being hit. The indicator will hint at where the damage is coming from, e.g., show a flashing read indicator on the left edge of the screen when being hit from the left. 
If no specific direction can be identified, e.g., if the damage is due to thirst or falling damage, all indicators will flash up at the same time.

<p align="center">
<img src="{{ site.baseurl }}/img/terasaturday/11/damage-flash.gif" alt="Sorted in-game help"/>
</p>

---

Let's end this post with a "service announcement" which also fits the **T**oday **I** **L**earned category of thigs:

> ℹ️ Public Service Announcement: Clean the log files from your ~/.gradle/daemon folder once in a while. I've got over 800 MB in there right now.
> 
> (That's the gradle user home directory: https://docs.gradle.org/current/userguide/directory_layout.html#dir:gradle_user_home 
> Windows might name things differently?)

<!-- References -->
[#4271]: https://github.com/MovingBlocks/Terasology/pull/4271
[#4557]: https://github.com/MovingBlocks/Terasology/pull/4557
[#4558]: https://github.com/MovingBlocks/Terasology/pull/4558
[#4563]: https://github.com/MovingBlocks/Terasology/pull/4563
[#4564]: https://github.com/MovingBlocks/Terasology/pull/4564
[#4567]: https://github.com/MovingBlocks/Terasology/pull/4567
[modules:junit5]: https://github.com/search?q=org%3ATerasology+type%3Apr+merged%3A2021-02-27..2021-03-13+junit
[Terasology/Health#53]: https://github.com/Terasology/Health/pull/53
[Terasology/Health#67]: https://github.com/Terasology/Health/pull/67
