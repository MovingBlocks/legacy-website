---
layout: post
title: "TeraSaturday #13: May the Maven be with us"
description: >
  An exploration of recent events in Terasology development
author: Niruandaleth
header-img: "/img/terasaturday/13/banner.jpg"
---

_Welcome to the return of TeraSaturday, a not-so-weekly update post about all the neat stuff that has been going on in
the world of Terasology! Half blog, half changelog, completely cool._

## 📩 GSoC Student Applications arrived!

Over the past weeks, almost 30 students joined our Discord Server, introducing themselves and voicing interest in Google's Summer of Code (GSoC).
With a round dozen of these students we enjoyed a lot of Q&A, discussion rounds and draft proposal review back-and-forth - basically setting our Discord on fire 🔥
We're proud to announce that we received 14 student applications for projects within our community in the context of this year's GSoC 💚

## 📰 Since last TeraSaturday ...

Many thanks to our contributors since last [TeraSaturday #12]: _@4Denthusiast_, _@ahv15_, _@antag99_, _@APsenpai42_, _@BenjaminAmos_, _@DarkWeird_, _@jdrueckert_, _@keturn_, _@mahela97_, _@pollend_, _@ryuk156_, _@skaldarnar_, _@tolziplohu_ 👏

First of all, we doubled up on UI this week 🖥️🖥️ when updating from `TeraNUI` 1.5 to 3.0! You could also say, our user interface got 3D now, but maybe that's too much bad jokes for one blog post 🤪
While talking about UI, let's also mention that _@DarkWeird_ [migrated `PlayerConfig` to leverage `AutoConfig`](https://github.com/MovingBlocks/Terasology/pull/4599).

With our documentation efforts focusing on making it easier for module developers to adjust documentation as part of a PR, we also continuously try to make it easier for our contributors to write blog posts.
In this context, _@skaldarnar_ fixed the devcontainer setup for our website, such that in addition to using GitPod, blog posts can also be authored using the [Visual Studio Code Remote - Containers extension](https://code.visualstudio.com/docs/remote/containers).

Amongst all those nice tooling improvements, sometimes we also have to say goodbye to some tools: 
This time we're [seeing `JCenter` off into the sunset](https://jfrog.com/blog/into-the-sunset-bintray-jcenter-gocenter-and-chartcenter/) by [removing it from all our build configurations](https://github.com/MovingBlocks/Terasology/issues/4582).
So the tool is dead, long live the tool! - And may the maven be always in our favor ✊

In other news, _@4Denthusiast_ conducted an [extensive refactoring of chunk-related classes](https://github.com/MovingBlocks/Terasology/pull/4600) affecting pretty much every module with world-generation aspects.
Furthermore, _@DarkWeird_, _@pollend_ and _@BenjaminAmos_ continued to work on [dependency injection (DI) for `gestalt`](https://github.com/MovingBlocks/gestalt/pull/87). Hopefully, later this weekend, we'll see a new `gestalt` release that includes the changes, allowing `TeraNUI` and `DestinationSol` to consume them.


With a [change to our `gradle` setup](https://github.com/MovingBlocks/Terasology/pull/4611), it's now possible to run the speedy unit tests and the rather slow and sometimes shaky integration tests (using `ModuleTestingEnvironment` or `TerasologyTestingEnvironment`) separately locally. As part of the preparation work for that, integration tests got an `MteTest` or `TteTest` tag to allow filtering for them. In addition, failing tests in [`SimpleFarming`](https://github.com/Terasology/SimpleFarming/pull/114) and [`Pathfinding`](https://github.com/Terasology/Pathfinding/pull/59) were fixed, while others were [removed](https://github.com/Terasology/Behaviors/pull/73) or [disabled](https://github.com/Terasology/DynamicCities/pull/97).
Ideally, both, unit and integration tests should succeed and be reliable, however as we've seen integration tests fail sporadically, for instance due to race conditions or timeouts, the trust in them is somewhat limited.
The separation allows PR authors to differentiate a failure in the trustworthy unit test, indicating that their PR broke something, from a failure in the less trustworthy integration tests.
We encourage everybody to investigate any failure regardless of its origin, but in urgent cases, an integration test failure might be accepted to get a fix in in time, for instance for a playtest or release candidate.
Please note, that the integration of this separation into the CI is still work in progress - we'll keep you posted 📯


Last but not least, we'd like to send out a warm welcome and thank you to our new contributors and GSoC applicants _@tolziplohu_ and _@mahela97_ who made their debuts in our community by [fixing a bug allowing to place blocks inside the player](https://github.com/MovingBlocks/Terasology/pull/4608) and [allowing players to keep jumping](https://github.com/MovingBlocks/Terasology/pull/4609/files) 🦘
Furthermore, there were some gameplay improvements with _@ahv15_ [randomizing the player respawn location](https://github.com/Terasology/LightAndShadow/pull/197) in `LightAndShadow` and first-time contributor _@APsenpai_ improving the user experience in `JoshariasSurvival` by [increasing thirst replenishment when drinking with a `woodenCup`](https://github.com/Terasology/ManualLabor/pull/46).

In total, we merged [34 engine PRs](https://github.com/search?q=org%3AMovingBlocks+type%3Apr+merged%3A2021-03-21..2021-04-17&type=Issues) and [58 PRs on modules](https://github.com/search?q=org%3ATerasology+type%3Apr+merged%3A2021-03-21..2021-04-17&type=Issues).


## 🎀️ Community Highlights

### ✨ Prettifying Repositories and Documentation

After cleaning up our main documentation in the engine wiki, we're continuing the documentation efforts outside of the engine.
Until we have enough capacity to introduce some more complex tool like [OrchidDocs](https://orchid.run/bundles/orchiddocs), we'll leverage the light and less intrusive [docsify](https://docsify.js.org/#/).
Have a look at the fancy new docs of our first migration candidate [`Health`](https://github.com/Terasology/Health): https://terasology.github.io/Health ✨

While in the artistic zone due to creating neat module banner images, _@skaldarnar_ also for our [module/repository archive](https://github.com/Terasology-Archived/).

<div align="center">
    <img src="{{ site.baseurl }}/img/terasaturday/13/terasology-archived-logo.png" alt="Visualizations in Kibana based on Log Data" width="50%"/>
</div>

### ✒️ Breaking Down Proposals and Feature Tasks

_@keturn_ wrote an [incredibly awesome forum post](https://forum.terasology.org/threads/proposals-and-feature-task-breakdown.2345/) as guidance for our prospective students regarding considerations for project time management and planning.
This post includes all the nitty-gritty details that you are likely to not consider when you're entering the complex world of software development and projects.

To only mention a few examples: collecting stakeholder feedback when designing software, doing proper research including state of the art work in- and outside of a project, planning with a bunch of iteration cycles, and collaborating with others by reviewing, answering questions or acting as a stakeholder yourself.

### 📊 Kibana Dashboard

GSoC applicant _@Pushpesh_ started playing around with visualizations in Kibana based on log data we collect on a voluntary basis.
The student applied for a project targeting log data analysis to help us gain information about the adoption of our gameplays and modules as well as about frequent issues and instable modules.
With DPP and GDPR, there's two more big topics to work out before we can move to a consent-based default log collection.

<div align="center">
    <img src="{{ site.baseurl }}/img/terasaturday/13/kibana-dashboard.png" alt="Visualizations in Kibana based on Log Data" width="100%"/>
</div>

<!-- References -->

[TeraSaturday #12]: {% post_url 2021-03-20-terasaturday-12 %}