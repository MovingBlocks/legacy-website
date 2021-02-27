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
Also we're looking forward to take up the piled up but postponed efforts on **Subsystem Extraction** again.

Over the past month, since January 31, in total we merged [101 engine RPs](https://github.com/search?q=org:MovingBlocks+type:pr+merged:2021-01-31..2021-02-27) and [180 PRs on modules](https://github.com/search?q=org:Terasology+type:pr+merged:2021-01-31..2021-02-27) 💪

## 🎀️ Community Highlights

_@Cervator_ and _Suhas_ worked on our telemetry integration, so that now you can agree to send logs to our [telemetry stack](https://telemetry.terasology.com) 📝
To do so, check the "Metric Menu" in the game menu "Extras" and select to send logs. With this, we hope to get some insights into frequent failures players face.

_@keturn_ showed his passion for meaningful tests and trustworthy test results and worked out the details of the ModuleTestingEnvironment (MTE) in our CI 🔧
We hope to improve our test setup further to get reliable results as part of our push validation and continuously add to our test base.

_@Michael P_ improved the performance of our [Caves generation](https://github.com/Terasology/Caves/pull/16) and migrated our existing tests from JUnit 4 to JUnit 5 🐢

Finally, _@DarkWeird_ put a lot of work into the gestalt v7 and subsystem changes over the last months and showed a lot of patience, too, getting his PRs postponed time and again due to the last months of JOML efforts ⏳
We hope that we can finally get them up-to-date and into our codebase now.
