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
Kartikey chose to improving the current md5 exporter for blender to be better suited to the needs of Terasology. The
script will automate most of the tasks for creating new blocks and models while providing an easy to use GUI for the
blender environment. Features like automating triangulation of faces, separating faces, exporting multiple animations,
creating a prefab file for specific AI animations and GUI development will be implemented during this project. I
probably have to point out that this projects sticks out of the others in that it uses Python for implementation (we are
Java/JVM language dominated, otherwise).

You may want to check out [Kartikey's Project Board][] to stay up-to-date.

## Destination Sol Overhaul
Started back in 2015 as a demo, [Destination Sol][DestSol] is a Space Shooter that gives the player a chance to be the
captain of his own fantasy ship, fighting enemies and looting gold. After the initial hype settled down, the developers
who originally made the game drifted off to other projects, and Destination Sol came to be managed by Moving Blocks.
However, the game has gone too long without updates, the associated tools that were once used to create assets for the
game are no longer functioning, and a lot of features just leave the player discontent.

This project aims to change all that, and more. 'Vampcat' already applied a lot of work under the hood, for instance
splitting up the games core and engined, fixing the asset handling, and more. Have a look at [Vampcat's Project Board][]
to learn more about the project status and what is yet to come.

## Exploration World Gameplay
The idea of this project is to bring together a ton of different independent features and develop a gameplay mode that
has more depth. Currently Terasology has a lot of different features, but there is not really a good way for the user to
enjoy them. What is really missing is a consistent gameplay setting which offers some challenge to the end-user and
makes the game enjoyable.

With this background Nihal is dragging _all the modules_ together - brining wild animals to life (oh my deer!),
integrating exploration logs into the journal, and building a bunch of traps and puzzles. There are videos and images
in the blog posts alongside great summaries of the work done. For a taste, here is a video showcasing the "Wipe Out
Lava Room".

You should check out [Nihal's Blog][] for details, explanations, and background information.

<div style="position:relative;height:0;padding-bottom:56.25%">
<iframe src="https://www.youtube.com/embed/djTG0Ovf_UI?ecver=2" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe>
</div>

## Telemetry System
Terasology has a CrashReporter that allows users to upload log files and report bug in forum or Github issues. However,
the error reporting process is kind of manual. It might limit the awareness of existing error. Besides, developers treat
the error report in an inconvenient way: they need to read the log file line by line, collects the environment
information manually and guess what might be the cause of the error.
Furthermore, more _feedback_ from users is also needed: What are their systems? Does Terasology run smoothly in their
PCs? What is the users' favorite module? Collecting this data can help Terasology make the decision of what kind of
optimization could be applied as well as help Terasology provide more fun for users.

![](https://gabrielxia.github.io/img/telemetry/launch.png){: .center-image}

Therefore, Gabriel is implementing automatic metric & error reporting.
Exceptions and errors, i.e., abnormal behavior of the game, are tracked locally and may be send to a server to collect
the reports. For metrics, [Snowplow][] tools are used to collect custom metric events. The data can be visualized on a dashboard for easy consumption. Note that no information is sent without the user's confirmation (opt-in).

Check out [Gabriel's Blog][] for more information.

## Physics-based Combat System
Currently, Terasology lacks a proper physics-based combat system. Basic combat, based entirely on proximity and angles,
can be simulated currently but creating a combat system that could use high velocity projectiles and reacts with
environment much more dynamically (e.g., projectiles bouncing off surfaces) will be an important addition to the
gameplay.

'0shine0' aims at restoring much of the functionality of an old branch of the legacy combat system while also improving
AI with regard to new events and situations introduced by a functional combat system. The project also aims at defining
the characters in anatomical way with different body parts and making them susceptible to disease.

## Sectors
The focus of this project is to add sectors to the Terasology engine. Sectors are a level of entity storage between
chunk-scope and global-scope, which allows entities that would usually be put in the global scope to be split into
multiple groups. Each of these groups can be run on a separate thread, or even on a separate server node.

Sector-level entities are still loaded when their chunks are unloaded, allowing simulations to continue when the player
is away, but they can be stopped if a whole sector is unloaded to increase performance. Vizaxo currently is in the
process of integrating this concept with [Dynamic Cities][] (developed during last year's GSOC) and potentially extend
it towards even more dynamic (moving) simulation subjects.

Get more information on this project in [Vizaxo's Blog][] and the [forum update posts][sector updates].

## Scenario Creation
Tyler 'Cata' took inspiration from the Minecraft community along with some pre-existing suggestions and ideas within
Terasology. The concept of Scenarios has been suggested in the past and is essential in order to properly develop any
notion of _static_ worlds such as what would exist for [Light & Shadow][]. In addition, it provides assistance to
creation of exploration worlds such parkour or puzzle maps.

Implementing scenarios can be thought of as basically creating a _game maker_ utility set built baked into Terasology.
The following video shows the tool for defining regions in action. Regions, for instance, can be used by map makers to
trigger events when the player enters.

<div style="position:relative;height:0;padding-bottom:56.25%">
<iframe src="https://www.youtube.com/embed/UiCuz4s5nmE?ecver=2" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe>
</div>

---

> _The way students report their progress is determined by the student and their mentors. There is no policy applying to
> all participants, that's why you might find blogs, forum reports for others, or only technical discussion and
> documentation for one or another student. We encourage this diversity and are always excited about the format of
> project documentation._
>
> _The project summaries and descriptions are partly taken from the student's proposals._

<!-- References -->
[Arpan's Blog]: http://arpan98.github.io/2017/07/01/gsoc-anatomy-complete.html
[Gianluca's Blog]: https://gianluca-nitti.github.io/GSoC-2017-devlog/
[David's Blog]: https://dkambersky.github.io/tera/2017/07/07/on-responsiveness.html
[Vizaxo's Blog]: https://vizaxo.github.io/2017/06/28/google-summer-of-code-introduction.html
[Nihal's Blog]: http://nihal111.github.io/tags/#GSoC
[Gabriel's Blog]: https://gabrielxia.github.io/telemetry.html
[Sector Updates]: http://forum.terasology.org/threads/new-conceptual-layer-sector-plus-musings-on-multi-world-node.1420/#post-15124
[GSOC]: https://summerofcode.withgoogle.com/
[DestSol]: http://destinationsol.org/
[Dynamic Cities]: http://forum.terasology.org/threads/dynamic-cities.1555/
[Light & Shadow]: http://forum.terasology.org/threads/las-light-and-shadow-art-discussion.762/
[Vampcat's Project Board]: https://github.com/orgs/MovingBlocks/projects/1
[Kartikey's Project Board]: https://github.com/orgs/MovingBlocks/projects/7
[Snowplow]: https://snowplowanalytics.com/
