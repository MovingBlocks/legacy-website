---
layout: post
title: "TeraSpotlight: GSOC 2021 Projects"
description: >
  In this post we are presenting the student projects we accepted for this year's edition of Google Summer of Code (GSOC).
author: Skaldarnar
header-img: "/img/terasaturday/14/banner.jpg"
---

We are proud to present these year's student projects for the [Google Summer of Code].
We are happy to announce that we are supported by five students over the summer.
The students will contribute to different areas of our wide ecosystem: ranging from modernizing our web presence over world generation in space and on earth to gameplay improvements.
Read on to learn more about the individual projects!

<div class="col s12 m12" markdown="1">
  {% include gsoc_card.html student=site.data.gsoc2021.ahv %}

  Alluri (aka _@ahv15_) will target quality improvements for "Light & Shadow" in their GSoC project.
  As a first step, this includes overhauling the module in terms of package structure, code quality, bug fixes and documentation.
  
  Second, they will bring together and extend on existing mechanisms for economy (`Economy`) and defensive mechanisms (`GooeyDefense`) to allow for a more immersive gameplay experience than the current race for the flag.
  This will also lay a basic foundation for future work on minion management in "Light & Shadow".

  Finally, Alluri will leverage the weapons and traps provided by `CombatSystem` to empower players to actively influence both their team and their opponents.
  Using similar effects like the `GooeyDefense` tower effectors, this hopefully turns the current plain race into an exciting fight for the flag.

  The project will be mentored by _@Niruandaleth_  and _@Skaldarnar_.

  <div align="center">
    <img src="{{ site.baseurl }}/img/2021-05-31-teraspotlight/las-items.png" width="60%" />
    <figcaption>Weapons, Traps and Defensive Mechanisms for Light & Shadow</figcaption>
  </div>

  {% include gsoc_card.html student=site.data.gsoc2021.meet %}

  Meet (aka _@meetcshah19_) is a second year student working again with Terasology.
  After overhauling our "Lost" gameplay last year, this yearh they strive to improve animal interaction in "Josharias' Survival".

  The first part will bring a more pacifist way of dealing with sheep: instead of having to kill them to get wool, a new shearing mechanism will be added.
  The main focus for this is achieving a smooth transition between the two sheep models (with wool and without) in the events of shearing and hair regrowth, providing an immersive user experience using audio and visual feedback as well as proper documentation and testing.

  The rest of the project will focus on improving spawning animals such that in addition to spawning when chunks are loaded, they can also spawn over time in already loaded chunks.
  Furthermore, Meet will improve the `Fences` module to allow for properly flocking sheep and add behavior that will make sheep follow food, allowing players to lure them.

  The project will be mentored by _@Niruandaleth_  and _@keturn_, with additional support from _@casals_ and last year's student _@ktksan_.

  {% include gsoc_card.html student=site.data.gsoc2021.lorxu %}

  Metal Renegades is meant to feel like an immersive Old West-style world. 
  Right now, it’s just a desert, with some mountains made out of sand. 
  _@Lorxu_ (aka _@tolziplohu_) proposed to expand that with more interesting terrain typical of the Old West: 
  mesas where rock around a plateau has eroded away, canyons where rivers have cut deep into the rock, mountains made of rock instead of sand, and more.
  A "small proof of concept" in shadertoy looks already promising.
  The implementation in Terasology should look somewhat better, using actual multi-octave simplex noise 👨‍🏫.

  <div align="center">
    <iframe width="640" height="360" frameborder="0" src="https://www.shadertoy.com/embed/fdfGDN?gui=true&t=10&paused=true&muted=false" allowfullscreen></iframe>
  </div>

  Additionally, the project covers the creation of a realistic distribution of flora and fauna.
  On one hand, the terrain generation should be fairly realistic and follow principles of real-life geology.
  On the other hand, it needs to look nice and work well on the scale of actual gameplay (so features should generally be fairly small, so you can see them all) and be performant in an infinite world (so something like simulating erosion directly wouldn’t work). 

  The project will be mentored by _@Skaldarnar_ and _@keturn_, with additional support from _@Suhas_ (aka _@agent-q1_).

  {% include gsoc_card.html student=site.data.gsoc2021.yash %}

  Yash (aka _@ryuk156_) will be working on migrating our current web (splash) site to the module site originally started by _@majordwarf_ two years ago.
  The first part of their project will target the pipeline for collecting module data for generating module documentation for the module site based on the previous work done by _@majordwarf_.
  In addition to that, the module site build and deployment pipeline needs to be revisited to update and properly integrate it into the development processes of Terasology and the module site.
  Documenting both pipelines for our fellow contributors shall make it easy for interested parties to join the effort in the future.

  <div align="center">
    <img src="{{ site.baseurl }}/img/2021-05-31-teraspotlight/module-site.png" width="60%" />
    <figcaption>Exemplary module overview on the module site</figcaption>
  </div>

  The second part of Yash's project will entail re-designing and improving the module site.
  Amongst others, improving blog and module search, user experience and overhauling the gallery will be working items.
  Furthermore, as a special goodie for current and future blog post authors, Yash will work on automated preview image generation especially for our recurring blog post series "TeraSaturday" and "TeraSpotlight".
  The idea for this is to leverage in-game screenshots for the gallery, but also for blog post preview images, by adding a text overlay based on the blog post tag and number.

  The final part of the migration project will be the actual migration of the current website's contents into the module site.
  With everything in place, `terasology.org` can be adjusted to show the module site instead of our current website.

  The project will be mentored by _@majordwarf_  and _@Michael P_, with additional support from _@Niruandaleth_ and _@Cervator_.

  {% include gsoc_card.html student=site.data.gsoc2021.isaiah %}

  Isaiah (aka _@IsaiahBlanks_) aims to create a modular framework for world generation in Destination: Sol. 
  The main motivation behind this project is to allow more flexibility in the way the world can be generated.
  Instead of the current system which has very few options for world generation, Isaiah's work will lay the foundation for a system which can support many options.

  The new world-gen system will consist of a `WorldBuilder` class which will be able to initialize various types of `Generator` classes. 
  These `Generator` classes will represent the various different entities that make up the Destination: Sol world: solar systems, planets, and mazes.

  The generators will be implementations of abstract classes, such as `PlanetGenerator` for planets or `SolSystemGenerator` for solar systems.
  In addition, there will be specific implementations of these classes, like `DefaultSolSystemGenerator` or `DefaultPlanetGenerator`. 

  This will serve as the foundation for more interesting generators, allowing for behaviors like `DesertPlanetGenerator` or `WaterPlanetGenerator` etc. 

  > With this project, I hope to add a lot of flair to the way world generation is done in Destination: Sol.
  >
  > Look forward to the ability to implement custom SolSystems, Planets, and Mazes!

  The project will be mentored by _@Michael P_  and _@Cervator_, with additional support from last year's student _@Nicholas Bates_.

  <div align="center">
    <img src="{{ site.baseurl }}/img/2021-05-31-teraspotlight/dest-sol-worldgen.png" />
    <figcaption>Planned world generation flow for Destination: Sol.</figcaption>
  </div>
</div>

---

## The Terasology Foundation Ecosystem

<div align="center">

  {% include 2021-05-gsoc-projects.svg %}

  <figcaption>The Terasology Foundation ecosystem and areas of contribution for the GSOC projects.</figcaption>
</div>

<!-- References -->
[Google Summer of Code]: https://summerofcode.withgoogle.com/