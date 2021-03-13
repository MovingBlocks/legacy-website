---
layout: post
title: "TeraSaturday #11: A Part of GSOC 2021"
description: >
  An exploration of recent events in Terasology development
author: Skaldarnar, Niruandaleth
header-img: "/img/terasaturday/11/banner.jpg"
---

_Welcome to the return of TeraSaturday, a not-so-weekly update post about all the neat stuff that has been going on in
the world of Terasology! Half blog, half changelog, completely cool._

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">📯 For the 6th year in a row, The Terasology Foundation was accepted as an organization of Google Summer of Code 🎉<br><br>Looking forward to awesome student projects and welcoming YOU to our community 💚<br><br>Students: check out <a href="https://t.co/AfYyX1XZQf">https://t.co/AfYyX1XZQf</a> 🤓<a href="https://twitter.com/hashtag/GSoC2021?src=hash&amp;ref_src=twsrc%5Etfw">#GSoC2021</a> <a href="https://twitter.com/hashtag/opensource?src=hash&amp;ref_src=twsrc%5Etfw">#opensource</a> <a href="https://twitter.com/hashtag/gamedev?src=hash&amp;ref_src=twsrc%5Etfw">#gamedev</a></p>&mdash; Terasology (@Terasology) <a href="https://twitter.com/Terasology/status/1369389663912402948?ref_src=twsrc%5Etfw">March 9, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

## 📰 Since last TeraSaturday ...

@4Denthusiast
@agent-q1
@askneller
@DarkWeird
@iHDeveloper
@jdrueckert
@keturn
@pollend
@sin3point14
@skaldarnar

## Engine Changes 

test: initialize Bullet for [Headless]Environment #4572 (@keturn)
merge resolution for #4324 #4569 (@keturn)
feat: Reduce the amount of gaps that appear while LOD chunks load #4567 (@4Denthusiast)
feature(subsystem-prepare): extract Network and R&R code from EventSystemImpl #4565 (@pollend)
chore: upgrade reflections to 0.9.12-MB from 0.9.10 #4564 (@keturn)
chore!: remove JUnit 4 from module dependencies #4563 (@keturn)
refactor: move DiscordRPC to org.terasology.subsystem #4562 (@keturn)
chore!: limit API for BlockComponent (2/2) #4561 (@skaldarnar)
refactor! move engine code in to org.terasology.engine package #4560 (@keturn)
chore(engine-test): use a temp directory instead of a Shrinkwrap archive #4559 (@keturn)
chore: upgrade gson to 2.8.6 from 2.6 #4558 (@keturn)
chore: upgrade guava to 30.1 from 23.0 #4557 (@keturn)
refactor(PathManager): do all the `createDirectories` at once #4556 (@keturn)
ci: buildSrc moved to build-logic #4554 (@keturn)
build: move `buildSrc` to `build-logic` #4553 (@keturn)
fix(ConstructorLibrary): prevent AccessControlException by using `AccessController.doPrivilaged` #4552 (@DarkWeird)
chore: update with joml math and update copyright for LocationComponentTest #4549 (@pollend)
chore: adding some null checks #4548 (@keturn)
feat(logs): improve prefab deserialization logging #4546 (@jdrueckert)
feat(ModuleManager): do not load all modules in the classpath by default #4543 (@keturn)
chore!: limit API for BlockComponent (1/2) #4528 (@pollend)
chore: replace FrustrumPlane with plane from joml-ext #4527 (@pollend)
chore: remove usage of fixed function pipline methods #4521 (@pollend)
feat: improve debug overlay with compass and additional heaps (MovingBlocks/Terasology#1942) #4513 (@pollend)
feat(TypeHandlerLibrary): Add generic Serializer for TypeHandlerLibrary. #4324 (@DarkWeird)
feat(discord-rpc): improve the system #4271 (@iHDeveloper)
feature(autoconfig): migrate SystemConfig #4235 (@DarkWeird)

## Module Changes

chore: migrate test with package migration Terasology/NameGenerator#29 (@pollend)
bugfix: migrate packages Terasology/Volcanoes#9 (@pollend)
test: update paths to engine-test classes Terasology/Pathfinding#56 (@keturn)
bugfix: fix normal calculation Terasology/SegmentedPaths#18 (@pollend)
chore: migrate to junit5 Terasology/Seasons#7 (@pollend)
chore: migrate junit5 Terasology/SimpleFarming#110 (@pollend)
chore: migrate to junit5 test Terasology/Pathfinding#55 (@pollend)
chore: migrate test cases to junit5 Terasology/ItemPipes#34 (@pollend)
chore: migrate test to junit5 Terasology/NameGenerator#28 (@pollend)
chore: migrate to JUnit 5 Terasology/WeatherManager#23 (@skaldarnar)
chore: migrate to JUnit 5 Terasology/ModuleTestingEnvironment#44 (@skaldarnar)
chore: migrate to JUnit 5 Terasology/MarkovChains#11 (@skaldarnar)
chore: migrate to JUnit 5 Terasology/Inventory#36 (@skaldarnar)
chore: migrate to JUnit 5 Terasology/HumanoidCharacters#11 (@skaldarnar)
chore: migrate to JUnit 5 Terasology/Genome#21 (@skaldarnar)
chore: migrate to JUnit 5 Terasology/FlexiblePathfinding#22 (@skaldarnar)
chore: upgrade guava to 30.1 from 23.0 Terasology/Behaviors#69 (@DarkWeird)
feat: ask ModuleManager to load classpath modules Terasology/ModuleTestingEnvironment#43 (@keturn)
chore: more logging, less exception hiding Terasology/ModuleTestingEnvironment#42 (@keturn)
test: fix RegenTest and disable BlockTest Terasology/Health#70 (@skaldarnar)
test: fix (some) failing MTE tests Terasology/Health#68 (@skaldarnar)
feat: show all damage indicators if no instigator Terasology/Health#67 (@skaldarnar)
doc: improve README Terasology/FlyingIslands#7 (@skaldarnar)
feat: junit5 migration Terasology/GrowingFlora#32 (@pollend)
feat: junit5 migration Terasology/Kallisti#4 (@pollend)
feat: migrate test cases to junit5 Terasology/MarkovChains#10 (@pollend)
fix: ModuleContext import in SerializationTest Terasology/Dialogs#23 (@jdrueckert)
feat: update assets for minecart Terasology/Rails#76 (@pollend)
add falling blocks support and LaputaAdamant block Terasology/FlyingIslands#5 (@sin3point14)
chore: remove usage of fixed function pipline methods from shadow pass Terasology/CoreRendering#35 (@pollend)
fix: initialize `hutPosition` vector to enable level spawning Terasology/Lost#36 (@skaldarnar)
test: migrate test for jupiter Terasology/DynamicCities#91 (@pollend)
refactor: remove usage of CoreRegistry for BiomeManager Terasology/BiomesAPI#11 (@pollend)
feat: Add a red flash on receiving damage Terasology/Health#53 (@askneller)
feature(autoconfig): migrate SystemConfig Terasology/ModuleTestingEnvironment#28 (@DarkWeird)
feat: Added tests using MTE Terasology/Behaviors#42 (@agent-q1)


- [41 engine RPs](https://github.com/search?q=org%3AMovingBlocks+type%3Apr+merged%3A2021-02-27..2021-03-13)
- [36 PRs on modules](https://github.com/search?q=org%3ATerasology+type%3Apr+merged%3A2021-02-27..2021-03-13)

## 🎀️ Community Highlights

ℹ️ Public Service Announcement: Clean the log files from your ~/.gradle/daemon folder once in a while. I've got over 800 MB in there right now.

(That's the gradle user home directory: https://docs.gradle.org/current/userguide/directory_layout.html#dir:gradle_user_home 
Windows might name things differently?)