---
layout: post
title: TeraSaturday #4: The Gradle Will Rock
description: >
  An exploration of recent events in Terasology development
author: Jordan H. (Qwertygiy)
header-img: "/img/terasaturday/4/logo.png"
---

_Welcome to the return of TeraSaturday, a not-so-weekly update post about all the neat stuff that has been going on in 
the world of Terasology! Half blog, half changelog, completely cool._

## TeraSaturday #4

### June 6, 2020

------------------------

#### The Gradle Will Rock

In addition to the realignment of modules, we've been hard at work overhauling the basic development environment of
Terasology. Keturn, DarkWeird, and of course Cervator have led the way towards further integration of project setup
and IDE.

In the past, our setup of IntelliJ IDEA and Gradle has not interacted very smoothly. Set up project with one script, fetch
modules with another, run yet another script so that IDEA is configured correctly... and if you happened to have certain
Java versions installed, or you already had another version of Gradle for another project, or if you clicked the wrong
button in IDEA, it might spit out an error nobody else can reproduce and fix.

But thanks to several advancements in IDEA and a lot of hard, metaphorically-dirty work, the days of "gradlew idea" are
numbered. The basic supported versions of Gradle and Java have been updated -- our Gradle wrapper should now use 
Gradle 6.4, and while Terasology still supports Java 8, it should work a lot better on Java 11 now, too. Starting with 
[IDEA 2020.1], it's possible to download and install specific versions of the Java Development Kit right from the IDE, 
making it much easier to set up a consistent project environment.


Because of all these changes, the process to set up a new Terasology workspace has changed. Here's the new process:

- As always, you'll first need to download the [engine repository], which you can do by either [downloading from GitHub]
or by [fetching with git].

- Once you have the engine downloaded, you'll be left with... just that, an empty engine without any modules. To set up
with the basics, you'll need to run `groovyw module init iota` in your choice of command prompt. To set up EVERYTHING
that is ready for gameplay (which will take a lot longer!) you can instead run `groovyw module init omega`.

- To add any modules not included in your distribution choice, such as (for example) *JoshariasSurvival*, running
 `groovyw module recurse JoshariasSurvival` will fetch all the modules used by JS in source form.
 
 - When opening the project in IDEA, make sure to "Import Gradle Project".
 
 - If launching the game from the IDE gives you any problems, or if you aren't using IntelliJ IDEA, it is 
 recommended to try `gradlew jar game`.
 
 This is all still subject to change in the coming days and weeks, so if you have any questions or suggestions, please
 feel free to give them on [the forums] or the [Discord server].

<!-- References -->
[IDEA 2020.1]: https://www.jetbrains.com/idea/download/#section=windows
[engine repository]: https://github.com/MovingBlocks/Terasology
[downloading from GitHub]: https://github.com/MovingBlocks/Terasology/archive/develop.zip
[fetching with git]: https://github.com/MovingBlocks/Terasology.git
[the forums]: http://forum.terasology.org/forum/
[Discord server]: https://discord.gg/terasology