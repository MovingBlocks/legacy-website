---
layout: post
title: "TeraSaturday #2"
description: >
  A summary of what has been going on in the past week of Terasology, from January 25 through 31, 2020.
author: Jordan H. (Qwertygiy)
header-img: "/img/terasaturday/2/banner.jpg"
---

_Welcome to the sequel edition of **TeraSaturday**, a weekly update post about all the neat stuff that has been going on in
 the world of Terasology! Half blog, half changelog, completely cool. Still no sharks, though. But there are aliens this time._

---

* There may not be quite as many new things this week as in our inaugural edition, but rest assured, there's a lot of 
other great new things on the way, too, big things that take a lot more than one week to finish and have been in the works
for a while now. Stay tuned!

## New Features (The Fun Stuff)

* Sladyn98 has been been working on the ability to easily set up and connect to [multiplayer servers over LAN]. So for
those of you lucky enough to have friends you can meet up with in the Physical Reality (or who have mastered the ancient
art of Hamachi), you'll be able to play Terasology without any complicated port forwarding or IP routing.

---

![Fancy block shape stuff](https://cdn.discordapp.com/attachments/270264625419911192/672118776258363392/unknown.png){: .center-image}{:style="width:48%;"}

* Progress continues on our Blender block shape integration. There are some quirks to work out with converting Blender's
data structures to Terasology's block shape structure; since Blender stores all the UV and normal data per *face* instead
of per *vertex,* it may need an update or two to the .shape format. But, if all goes as planned, all the old .shape files 
will still work fine _(no need for another massive file conversion like when all the blocks in the Core module got moved 
to CoreBlocks!)_ and new .shape files will be able to handle multiple UV locations per vertex. _(In words that less geeky,
that means we'll be able to have more advanced textures and lighting for blocks with complex shapes. Shiny shiny.)_

---

![Inferno!](https://cdn.discordapp.com/attachments/270264625419911192/666236136057733150/unknown.png){: .center-image}{:style="width:88%;"}

* Pardon me for being blunt... but if you download this module update, you can go to hell. No, really -- it's once again
possible to visit iojw's fiery [Inferno] now that Torpedo99 has fixed the spawning mechanism! You might ask, _how do you
expect me to travel to this dimension of shadow and lava? You don't really expect me to construct some sort of portal, 
do you?_ No, Mr. Goo, I expect you to die. Once you reach 0 health, you'll respawn in the Inferno!

---

## Bugfixes and Optimizations (The Nerdy Stuff)

* Naman-sopho has fixed some bugs in [Master of Oreon] by giving your alien builders the ability to properly order their
to-do lists, so that they don't get overwhelmed and confused when you give them more than one task. Take your time, 
Oreons. Alien Rome wasn't built in a day.

---

* My side-project over in [NameGenerator] has been cleaned up a little more. We're still a long way out from having
procedurally-generated animal species, so no, you still won't be able to hunt down a South Ecuadorian Giant Laser Shark 
any time soon. _(Nor do you have to worry about being hunted down by any South Ecuadorian Giant Laser Sharks. Unless you're
exploring evil lairs in South Ecuador, of course.)_ But if you want to make [cities] or NPCs that have names from Ancient 
Greece, Ancient Rome, Ancient Egypt, medieval Japan, modern Hindi, or a few other cultures, you'll soon be able to grab 
them from the new templates.

---

Thus concludes the second TeraSaturday changeblog. Hopefully, despite its shortness, it has still been sweet. _(If not, 
I recommend a banana.)_ Enjoy the game, and I'll be back for another update next week!

<!-- References -->
[Cities]: https://github.com/Terasology/DynamicCities
[Inferno]: https://github.com/Terasology/Inferno/pull/8
[Master of Oreon]: https://github.com/Terasology/MasterOfOreon/pull/61
[Multiplayer servers over LAN]: https://github.com/MovingBlocks/Terasology/pull/3828
[NameGenerator]: https://github.com/Terasology/NameGenerator/pull/22