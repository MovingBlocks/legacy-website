---
layout: post
title: "TeraSaturday #10: Consider us JOML-ified"
description: >
  An exploration of recent events in Terasology development
author: Niruandaleth
header-img: "/img/terasaturday/10/banner.jpg"
---

_Welcome to the return of TeraSaturday, a not-so-weekly update post about all the neat stuff that has been going on in
the world of Terasology! Half blog, half changelog, completely cool._

## 📰 Since last TeraSaturday ...

The endless weeks of ongoing JOML-ification are finally over 🎉
We conquered the land of vectors, quaternions and geometric primitives and sent the old reign of TeraMath into well-deserved retirement.
However, you that are ever loyal to the former ruler of matrices and rectangles do not despair, for the land of user interfaces is still vigilant and obedient to it's old master.
Be warned, though, that we will come for you at some point in the short- to mid-term future and bring NUI land to new glory under the benevolent reign of JOML.
But for now, the only thing left is to send a heartfelt **THANK YOU** to everybody that helped with the JOML-ification - above all _@Michael P_ 💚

After some correction fixes of JOML-induced bugs, we are happy to announce that we published both, a new (somewhat) stable **Terasology Alpha 18** release based on _engine v4.2.0_, and a new **Terasology Launcher v4.3.2** release supporting our new Jenkins.
Check out the game release and it's impressive changelog at [Release v4.2.0](https://github.com/MovingBlocks/Terasology/releases/tag/v4.2.0) or using the new launcher version you can grab at [GitHub](https://github.com/MovingBlocks/TerasologyLauncher/releases/tag/v4.3.2) or on our [Website](https://terasology.org/download.html).
Thank you to everybody that contributed to this game release, namely (in alphabetic order):

* _@4Denthusiast_
* _@agent-q1_ (_@Suhas_)
* _@askneller_
* _@Cervator_
* _@DarkWeird_
* _@hajdam_
* _@jdrueckert_ (_@Niruandaleth_)
* _@keturn_
* _@lasossette_
* _@pollend_ (_@Michael P_)
* _@QuentinAndre11_
* _@sanidhyaanand_
* _@skaldarnar_

Concluding the JOML chapter of our roadmap, we now open the next ones and focus on **Testing** 🧪 and **Gestalt v7** ⚙️.
We're grateful for _@keturn_ being passionate about meaningful tests and trustworthy test results and working out the details of the ModuleTestingEnvironment (MTE) in our CI.
Also we're looking forward to take up the piled up but postponed efforts on **Subsystem Extraction** again.
A big thank you to _@DarkWeird_ who put in a lot of work and had to show a lot of patience, too, due to the last months of JOML efforts.

Over the past month, since January 31, in total we merged [100 engine RPs](https://github.com/search?q=org:MovingBlocks+type:pr+merged:2021-01-31..2021-02-27) and [177 PRs on modules](https://github.com/search?q=org:Terasology+type:pr+merged:2021-01-31..2021-02-27) 💪

## 🎀️ Community Highlights





_@Cervator_ [enabled Omega builds on the shiny new Jenkins](https://github.com/MovingBlocks/Terasology/pull/4409) ✨ and _@Skaldarnar_ [adjusted the launcher to integrate these builds](https://github.com/MovingBlocks/TerasologyLauncher/pull/621) and make them available to everybody!
Thus, with our [Terasology Launcher v4.3.0](https://github.com/MovingBlocks/TerasologyLauncher/releases/tag/v4.3.0), you can now download the latest Omega builds from the new source 🎉

_@4D Enthusiast_ improved world generation and [brought back rough mountains, overhangs, and much more](https://github.com/Terasology/CoreWorlds/pull/18).
Below, we collected a few screenshots, but (while keeping in mind possible instabilities until the completion of JOML-ification) we encourage everybody to go check out our fancy new worlds themselves 🏞

![World Generation Improvements]({{ site.baseurl }}/img/terasaturday/9/worldgen.jpg)

_@Cervator_ worked together with _@e\_a_ and _@agent\_q1_ on getting our telemetry setup to work.
The telemetry setup mainly consists of an ELK (Elasticsearch, Logstash, Kibana) stack that allows for collecting, storing and visualizting telemetry data from Terasology game servers.
Though it's not hooked up with anything in particular yet, we are looking forward to use it with the play-test event server and see interesting visualizations at [telemetry.terasology.org](https://telemetry.terasology.com/) soon 📊

_@Hajdam_ (with help from _@DarkWeird_) [fixed good ol' TeraEd for Linux and Windows](https://github.com/MovingBlocks/Terasology/pull/4327).
With this foundation laid, _@Hajdam_ plans to add more functionality to TeraEd in the future, any improvement recommendations welcome.

Both, _@4D Enthusiast_ and _@DarkWeird_ worked on various ways to improve performance 🐢🧙‍♂️
_@4D Enthusiast_ worked on more chunk magic, in particular [rendering chunks in the far distance even before there's enough data to render them perfectly](https://github.com/MovingBlocks/Terasology/pull/4427) in order to reduce the main memory consumption.
The next iteration in that area will target rendering even more distant chunks (Level of Details, LOD).
_@DarkWeird_ reduced memory consumption by [deflating arrays for chunk representation](https://github.com/MovingBlocks/Terasology/pull/4433), [migrated our benchmarks to JMH](https://github.com/MovingBlocks/Terasology/pull/4401), and played around with different garbage collectors, comparing them.
With these insights we will probably adjust the default settings in the launcher after some testing.
Furthermore, _@4D Enthusiast_ [fixed an aging issue with chunk generation](https://github.com/MovingBlocks/Terasology/pull/4353) that produced NPEs and rendered some chunks invisible.

![Compare JVM Garbage Collectors]({{ site.baseurl }}/img/terasaturday/9/garbage-collectors.jpg)

Finally, _@keturn_ dug deeper into Gradle, Kotlin, and whathever else the dwarves are doing under the surface to build our gigantuous code base 🤓🧰
