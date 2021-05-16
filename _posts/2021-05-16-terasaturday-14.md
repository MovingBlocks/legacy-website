---
layout: post
title: "TeraSaturday #14: Spring Cleanup"
description: >
  An exploration of recent events in Terasology development
author: Skaldarnar
header-img: "/img/terasaturday/14/banner.jpg"
---

_Welcome to the return of TeraSaturday, a not-so-weekly update post about all the neat stuff that has been going on in
the world of Terasology! Half blog, half changelog, completely cool._

## 🚀 Release Notes

The launcher has received two patches to address some bugs reported by players 🐛 
[v4.3.3] fixed the start script for Windows, and [v4.3.4] fixed delayed startup (several minutes) due to one of the game provider servers being shut down.

Be sure to update to the latest version if you haven't already 🎮

## 📰 Since last TeraSaturday ...

Many thanks to our contributors since last [TeraSaturday #13]: _@4Denthusiast_, _@BenjaminAmos_, _@Cervator_, _@jdrueckert_, _@keturn_, _@mahela97_, _@Onkar627_, _@pollend_, _@ryuk156_, _@skaldarnar_, and _@tolziplohu_ 👏

Switching to a Trello board for our [weekly org meetings](https://trello.com/b/4cw7Q1BJ/org-meeting-board) has already paid off. 
It's nice to have everything in one place with a static pointer to it (no need to look for the right link each time), and we also get a better feeling of progress when moving cards from left to right 📈 
While we keep tracking technical discussion on Github, the org meeting allows for community discussions (are shorter or fewer methods better?) and high level planning (yeah, it was time to revisit our [project timeline and roadmap](https://docs.google.com/spreadsheets/d/1wnU49-IcSVL_K-5OVlOynxSbz1QekfmKewejwxpzxLY/edit#gid=2066342702)).

<div align="center">
    <a href="https://trello.com/b/4cw7Q1BJ/org-meeting-board" target="_blank" alt="Trello Org Meeting Board">
    <img src="{{ site.baseurl }}/img/terasaturday/14/trello_done_cards.png" alt="Weekly list of completed Trello cards." width="100%"/>
    </a>
</div>

What's barely visible in this short list of completed cards are the countless contributions on fixing bugs, reducing technical debt, and working off the big and small chores in a big software project.
A big shout-out to _@keturn_ for persistently pushing the [gestalt v7 migration](https://github.com/orgs/MovingBlocks/projects/20) forward!

1️⃣8️⃣9️⃣ In total, we merged [25 engine PRs](https://github.com/MovingBlocks/Terasology/pulls?q=is%3Apr+sort%3Aupdated-desc+is%3Amerged+merged%3A2021-04-17..2021-05-16) and [130 PRs on modules](https://github.com/search?q=org%3Aterasology+is%3Apr+merged%3A2021-04-17..2021-05-16). In addition, we merged [34 PRs on libraries and side projects](https://github.com/search?q=-repo%3Amovingblocks%2Fterasology+org%3Amovingblocks+is%3Apr+merged%3A2021-04-17..2021-05-16) such as _gestalt_, the launcher, or the module site.


## 🎀️ Community Highlights

### 🏷️ New and Consistent Labels

We finally came around to overhaul the [set of labels](https://github.com/MovingBlocks/Terasology/labels) used throughout the projects of The Terasology Foundation.
This has been on the todo list for quite some time, and we are looking forward to make better use of the same labels across our repositories.

If you are curious about the details, you can find the "source of truth" checked in to the engine repository at [`.github/labels.json`](https://github.com/MovingBlocks/Terasology/blob/3a89aebd34542ae79add1e3ebff581a60a87e033/.github/labels.json). 
Syncing the labels between all repositories is still a manual task, but [Financial-Times/github-label-sync](https://github.com/Financial-Times/github-label-sync) made this a lot easier!
As bash scripting is definitely not a strength of mine, I was happy to find this tool.
It supports `aliases` to update existing labels instead of creating new ones and deleting old ones, which allowed us to keep most label assignments in place.

<div align="center">
    <a href="https://github.com/MovingBlocks/Terasology/labels" target="_blank" alt="Github labels of MovingBlocks/Terasology">
    <img src="{{ site.baseurl }}/img/terasaturday/14/github_labels.png" alt="Excerpt of our overhauled Github labels." width="80%"/>
    </a>
</div>

### 🕸️ Spring Cleanup

In lack of big and shiny projects, I'll title this one as **spring cleanup**.
At some point we should post about gradle-module v7, but we haven't figured out how to highlight that yet. 😅

In other news, we have a couple little features on module builds:
The JavaDoc from jenkins builds works better now, e.g. [JavaDoc for Health module](http://jenkins.terasology.io/teraorg/job/Terasology/job/Modules/view/develop/job/H/job/Health/job/develop/javadoc).
Jenkins did build these before, but javascript and frames were disabled, so they weren't very usable.
Thanks to _@keturn_, this has now improved.

There's another little addition to our build tooling.
Builds now publish a **dependency report** so you can see what jenkins used for the build, e.g. [dependency report for Health module]( http://jenkins.terasology.io/teraorg/job/Terasology/job/Modules/view/develop/job/H/job/Health/job/develop/54/Dependency_20Report/).
You can use this locally by running `gradlew htmlDependencyReport`, or `gradlew :modules:Health:htmlDependencyReport` if you're only interested in a specific module.

_@Cervator_ shared the news that Jenkins technically is https now. 🔒
> Not anything particularly special but it worked easier and better than I had thought. I even seem to get auto-redirected to it now.

In other logistical news, the old Jenkins is gone - which essentially lead to the new launcher releases promoted above 🙈
Unfortunately, this also means that most old builds of Terasology are currently no longer available via the launcher.
But don't worry: if you're getting nostalgic you can crawl through the [releases on Github](https://github.com/MovingBlocks/Terasology/releases) 🏺

<!-- References -->

[v4.3.3]: https://github.com/MovingBlocks/TerasologyLauncher/releases/tag/v4.3.3
[v4.3.4]: https://github.com/MovingBlocks/TerasologyLauncher/releases/tag/v4.3.4

[TeraSaturday #13]: {% post_url 2021-04-17-terasaturday-13 %}