---
layout: post
title: GSOC 2017 - An Overview
description: >
  The first hurdle of Google Summer of Code is already over for our students, so it's about time to happily announce
  that all ten students have passed the first evaluation. Yes, you read that correctly, we are mentoring TEN students
  this year! We want to take the opportunity to thank everyone involved in the project, mentors, students, and every
  contributor chiming in with ideas, tips, and tricks. You make this the awesome experience it truly is!

author: skaldarnar
header-img: "/img/ss_11.jpg"
---

The first hurdle of [Google Summer of Code][GSOC] is already over for our students, so it's about time to happily announce
that all ten students have passed the first evaluation. Yes, you read that correctly, we are mentoring TEN students
this year! We want to take the opportunity to thank everyone involved in the project, mentors, students, and every
contributor chiming in with ideas, tips, and tricks. You make this the awesome experience it truly is!

# The Projects - An Overview
To shed some light on the projects currently in progress I'll go through each and every one of them and briefly explain
its purpose. Some students have set up awesome blogs, interesting dev diaries, or are using our forum for communicating
progress. If you want to learn more about a specific project, just follow the provided links.

## Anatomy System and Genome Integration
Arpan is working on improving the game play experience to bringing some more detail into the current health system.
Instead of a simple health bar, the project aims to add anatomical body parts (like head, arms, legs etc.) to creatures
and implement a Dwarf Fortress style health system which has effects on specific body parts (like a broken leg from
falling down a cliff).

The second part of the project deals with integration of the Genome module for genetics effects with other modules like
SimpleFarming and WildAnimals for breeding and mutation effects. This opens up a whole new play-style of breeding and
crossing animals and plants to retrieve varieties of specific characteristics.

Read more about this project in [Arpan's Blog][].

## External Server API
The main goal of this project is to provide a HTTP/WebSocket server running inside the game server process that will
allow access to Terasology functionalities for players and server admins alike. For instance, actions like kicking or
teleporting players, changing game properties, adjusting game time, or loading a save game become available through
those protocols - according to user permissions.

![Sending chat messages from the web client to the running game instance](https://gianluca-nitti.github.io/GSoC-2017-devlog/images/client-console-1.PNG){:width="100%"}
_Sending chat messages from the web client to the running game instance._

Up to now, the server exposes some basic resources through HTTP and Websocket, and there is a web client that can
connect to the server. Client side authentication is supported and allows to trigger in-game commands from the web
interface. The blog entries contain all information you need in order to test it by yourself!

Read more about this project in [Gianluca's Blog][].

## Behavior Trees
The concept of behavior trees has been around for some time now, the first implementation in Terasology dates back to
2013 when our contributor [synopia introduced them in the forum](http://forum.terasology.org/threads/behavior-trees.882/).
For this Google Summer of Code project, Terasology’s behavior tree AI implementation is to be completed to the point
where it is easily usable by module authors and generally whomever wants to give their mobs behavior of any kind.

We are looking forward to a well documented behavior system living in the
[Behaviors module](https://github.com/Terasology/Behaviors/tree/behaviorv2), providing pre-defined behaviors, behavior
nodes, and easy hooks from a behavior node to check an actor’s status. Furthmore, communication with other Actors is
going to be simplified. The project also includes tutorials and example creatures using the system. You see, there will
be nothing stopping you from bringing some clever mobs to the game!

Read more on this topic in [David's Blog][].

## Blender MD5 Exporter
- Kartikey: Blender Exporter

## Destination Sol Overhaul
- [Destination Sol][DestSol]
- Vampcat: Destination Sol

## Exploration World Gameplay
- Nihal: - http://nihal111.github.io/tags/#GSoC

## Telemetry System
- Gabriel: Telemetry - https://gabrielxia.github.io/telemetry.html

## Physics-based Combat System
- Swastik 'Shine' Garg - Physics-based Combat System

## Sectors
- Vizaxo: Sectors - http://forum.terasology.org/threads/new-conceptual-layer-sector-plus-musings-on-multi-world-node.1420/#post-15124, https://vizaxo.github.io/2017/06/28/google-summer-of-code-introduction.html

## Scenario Creation
- Tyler 'Cata' Thompson: Scenarios
<div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/UiCuz4s5nmE?ecver=2" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe></div>


<!-- References -->
[Arpan's Blog]: http://arpan98.github.io/2017/07/01/gsoc-anatomy-complete.html
[Gianluca's Blog]: https://gianluca-nitti.github.io/GSoC-2017-devlog/
[David's Blog]: https://dkambersky.github.io/tera/2017/07/07/on-responsiveness.html
[GSOC]: https://summerofcode.withgoogle.com/
[DestSol]: http://destinationsol.org/
