---
layout: post
title: "TeraSaturday #3: Core Explosion"
description: >
  An exploration of recent events in Terasology development
author: Jordan H. (Qwertygiy)
header-img: "/img/terasaturday/3/banner.jpg"
---

_Welcome to the return of TeraSaturday, a not-so-weekly update post about all the neat stuff that has been going on in 
the world of Terasology! Half blog, half changelog, completely cool._

------------------------

* It's been a lot longer than I intended since I put together the last TeraSaturday post. Some quiet weeks, some buggy 
weeks, some apocalyptic weeks! There's been a lot that's happened in the interim, but there's one 
recent project that deserves the most attention first:

## The Core Explosion

For years, the Core module of Terasology contained everything needed for some simple gameplay. Basic world generators, 
the inventory system, grass and stone and trees and chests and all that fun stuff. Even dynamite! There was a bit of a 
problem, though, in that not every game mode *needs* all those things. They might use a completely different world 
generator, or have a different inventory system, or they don't want to have players blowing things up. So about a year 
and a half ago, we began mining out the Core.

Jellysnake separated [Inventory] from Core, and Adrijaned pulled out Biomes. [Health] got its own fresh new module thanks
 to e-aakash. I pulled out all the world blocks, creating the CoreBlocks module, and CoreAssets for the textures and 
 sounds they used. That was a big project, requiring updates to over 50 different modules!

This was _bigger._

![just a small part of the changes!](https://cdn.discordapp.com/attachments/696830442065625118/712674385391255562/unknown.png){: .center-image}{:style="width:48%;"}

Taking the extraction to its logical conclusion, Skaldarnar and Niruandaleth have completely removed the Core module. 
CoreBlocks has been blown up, too. In their place, a new network of modules stretches across the workspace, each 
providing a specific subset of functionality for the Core Gameplay preset.

![New Core Module Diagram](https://i.imgur.com/qBHbynr.png){: .center-image}{:style="width:88%;"}

The old Inventory and LootPools modules, used to keep track of items, have been mixed together and separated again, 
forming a refreshed [Inventory] module and a new [Drops] module.

CoreBlocks has been divided and conquered. Basic blocks like dirt, stone, sand, and wood have gone directly into 
[CoreAssets], while fancy blocks like chests and doors and TNT have gone into [CoreAdvancedAssets]. 
_(Yes, the name is still a work in progress.)_

The new modules of [Furnishings] and [Explosives] hold the game logic that those fancy blocks need to work, so other modules
 can make their own storage, doors, or bombs without needing to keep the basic versions around too. All the 
 world-builders have been moved to the aptly-named [CoreWorlds]. All together, [CoreSampleGameplay] combines this new 
 collection of modules into the same base gameplay setting that existed before.
 
If you're just playing the game, you probably won't notice much of a difference before and after. But for module 
developers, it opens a lot of doors (and chests!) for making more cool stuff, more efficiently.

<!-- References -->
[CoreAdvancedAssets]: https://github.com/Terasology/CoreAdvancedAssets
[CoreAssets]: https://github.com/Terasology/CoreAssets
[CoreSampleGameplay]: https://github.com/Terasology/CoreAssets
[CoreWorlds]: https://github.com/Terasology/CoreWorlds
[Drops]: https://github.com/Terasology/Drops
[Explosives]: https://github.com/Terasology/Explosives
[Inventory]: https://github.com/Terasology/Inventory
[Furnishings]: https://github.com/Terasology/Furnishings
[Health]: https://github.com/Terasology/Health