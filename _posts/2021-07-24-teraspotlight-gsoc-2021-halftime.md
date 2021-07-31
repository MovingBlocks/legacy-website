---
layout: post
title: "TeraSpotlight: GSOC 2021 Halftime Show & Tell"
description: >
  In this post we are presenting the achievements of the student projects over the first half of this year's edition of Google Summer of Code (GSOC).
author: Niruandaleth
header-img: "/img/2021-07-24-teraspotlight-gsoc-halftime/banner.png"
---

_We are proud to present the achievements of this year's student projects for the first half of the [Google Summer of Code]._
_We are happy to announce that all five students passed their halftime evaluations._
_The students will continue to contribute to different areas of our wide ecosystem, ranging from modernizing our web presence over world generation both, in space and on earth, to improvements in various gameplays._

## Google Summer of Code Timeline

Being already in the work period, most of the relevant GSoC dates are already past us.
However, let's take a quick look at what's left for this year's Google Summer of Code.

<div align="center">
  <img src="{{ site.baseurl }}/img/2021-07-24-teraspotlight-gsoc-halftime/gsoc-2021-timeline.png" width="60%" />
</div>

Seven of the eleven weeks of working are already behind us, including the halftime evaluations.
For the students, this means they have four more weeks to finish their projects and submit their final work product.
Afterwards, the mentors will do the final evaluation of the students' work to assess who passes and who fails.
The final results of GSoC 2021 will be announced on August 31, a bit more than five weeks from now.

Read on to learn what the students achieved in the first half of their projects!

<div class="col s12 m12" markdown="1">
  {% include gsoc_card.html student=site.data.gsoc2021.ahv %}

  Alluri (aka _@ahv15_) completed the overhaul of the [`LightAndShadow`](https://github.com/Terasology/lightandshadow) module.
  The student removed unused code and refactored the remainder of the project to properly follow our event-based Entity-Component-System architecture.
  Further, they consolidated logic corresponding to a particular topic, making it easier to merge packages, and added documentation to better explain in which scenarios certain systems are used.

  Second, Alluri improved the gameplay, for instance by preventing trees from obstructing gameplay-relevant areas such as the fool's platform and the team bases.
  Further improvements targeted the starting and respawning inventory as well as weapon drops and pickups in the event of a player's death.
  Moreover, the student introduced a pre-game phase in which players are invulnerable and restricted to a circular area around their team base.
  As soon as there is at least one player in each team, the countdown to the begin of the actual game round starts.
  This phase should allow players to join teams and prepare themselves for the game without being able to influence it yet.
  Thus, players that join earlier do not have an unfair advantage.

  <div style="float:left">
    <img src="{{ site.baseurl }}/img/2021-07-24-teraspotlight-gsoc-halftime/las_pregame-phase.png" width="49%" />
    <img src="{{ site.baseurl }}/img/2021-07-24-teraspotlight-gsoc-halftime/las_pregame-phase-countdown.png" width="49%" />
  </div>

  Make sure to test out the current state by selecting "Light & Shadow" when starting a game! Please note, though, that this gameplay is now multiplayer-only.
  In the remaining weeks of their GSoC project, Alluri plans to introduce a notion of economy into Light & Shadow.
  This will include a wallet with starting budget for each player and a shop to buy additional weapons and defensive elements.

  The project is mentored by _@Niruandaleth_ (aka _@jdrueckert_)  and _@Skaldarnar_.

  {% include gsoc_card.html student=site.data.gsoc2021.meet %}

  Meet (aka _@meetcshah19_) completed the introduction of a gameplay mechanism to shear sheep.
  Before, the only possible interaction with animals in Josharias' Survival was killing them.
  Now, sheep can be sheared to gain wool for crafting purposes in an animal-friendly way.

  Shearing requires the player to use a newly introduce item called "Crude Shears".
  Using this item on a sheep results in three effects: a change of the sheep's appearance, a particle effect visualizing bits of wool flying off, and a sound effect providing a more immersive player experience.
  The sheep hair regrows after a few minutes, changing the sheep's appearance back.
  The mechanism was implemented in adherence with our event-based Entity-Component-System architecture including documentation and tests.

  <div style="float:left">
    <img src="{{ site.baseurl }}/img/2021-07-24-teraspotlight-gsoc-halftime/js_sheep-shearing-before.png" width="49%" />
    <img src="{{ site.baseurl }}/img/2021-07-24-teraspotlight-gsoc-halftime/js_sheep-shearing-after.png" width="49%" />
  </div>

  Make sure to test out the current state by selecting "Josharias' Survival" when starting a game!
  For the remaining weeks, Meet plans to add behavior that will make sheep follow food, allowing players to lure them and improve the `Fences` module to allow for properly flocking sheep and other animals.

  The project is mentored by _@Niruandaleth_ (aka _@jdrueckert_) and _@keturn_, with additional support from _@casals_ and last year's student _@ktksan_.

  {% include gsoc_card.html student=site.data.gsoc2021.lorxu %}

  _@Lorxu_ (aka _@tolziplohu_) completed the expansion of the Metal Renegades world generation with more interesting terrain typical of the Old West: 
  fertile river beds, additional biomes for scrubland, steppe, and rocky terrain, strata and mesas.

  <div style="float:left">
    <img src="{{ site.baseurl }}/img/2021-07-24-teraspotlight-gsoc-halftime/mr_river-beds.png" width="49%" />
    <img src="{{ site.baseurl }}/img/2021-07-24-teraspotlight-gsoc-halftime/mr_biomes.png" width="49%" />
    <img src="{{ site.baseurl }}/img/2021-07-24-teraspotlight-gsoc-halftime/mr_strata.png" width="49%" />
    <img src="{{ site.baseurl }}/img/2021-07-24-teraspotlight-gsoc-halftime/mr_mesas.png" width="49%" />
  </div>

  Additionally, Lorxu fixed a multitude of bugs related to world generation, helped to improve chunk generation performance and updated the [world generation tutorial](https://github.com/Terasology/tutorialworldgeneration).

  Make sure to test out the current state by selecting "Metal Renegades" when starting a game!
  For the remaining weeks, Lorxu plans to add dry riverbeds and polish the biomes and introduced world feature some more.
  Furthermore, the student wants to continue helping to improve performance and potentially integrate the Metal Renegades towns with the new biomes.

  The project is mentored by _@Skaldarnar_ and _@keturn_, with additional support from _@Suhas_ (aka _@agent-q1_).

  {% include gsoc_card.html student=site.data.gsoc2021.yash %}

  Yash (aka _@ryuk156_) completed the automation efforts for the generation of module information, the deployment of the ModuleSite and the integration with the [Trello board for GSoC / TSoC topics](https://trello.com/b/5QQGHuTt/gsoc-gsod-ideas).
  In addition, the site was successfully migrated to SCSS and most of the website pages were migrated and the underlying technical features overhauled. 

  <div style="float:left">
    <img src="{{ site.baseurl }}/img/2021-07-24-teraspotlight-gsoc-halftime/module-site_gsoc-tsoc-page.png" width="49%" />
    <img src="{{ site.baseurl }}/img/2021-07-24-teraspotlight-gsoc-halftime/module-site_mentors-page.png" width="49%" />
  </div>

  The preview image generation feature is currently still in progress.
  
  Make sure to test out the current state at https://terasology.org/ModuleSite/.
  For the remaining weeks, Yash plans to improve the search capabilities for blogs and modules and improve the visuals of the Module Site some more before migrating the remaining content - mostly blogs - from the website.

  The project is mentored by _@majordwarf_  and _@Michael P_ (aka _@pollend_), with additional support from _@Niruandaleth_ (aka _@jdrueckert_) and _@Cervator_.

  {% include gsoc_card.html student=site.data.gsoc2021.isaiah %}

  Isaiah (aka _@IsaiahBlanks_) completed the creation of a framework of skeleton classes to be filled in with more details later.
  The first class to be filled and completed was `WorldBuilder`, which looks through available solar system generators, picks generator types at random and creates instances of them according to the number of systems to be created for a world.
  Based on this, the `SolarSystemGenerators`, that calculate positions for mazes, planets, belts, etc., were approached and completed.
  These generators can now also be configured allowing for more control over the details of the system.

  In the remaining weeks, Isaiah will continue working on the `PlanetGenerator` class allowing modders to configure planet attributes such as size, sky color, gravity, as well as objects on the planets, such as decorations, ships, and trading posts.

  The project is mentored by _@Michael P_ (aka _@pollend_) and _@Cervator_, with additional support from last year's student _@Nicholas Bates_.

</div>

<!-- References -->
[Google Summer of Code]: https://summerofcode.withgoogle.com/