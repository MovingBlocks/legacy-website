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
  {% include gsoc_card.html student=site.data.gsoc2021.meet %}
  {% include gsoc_card.html student=site.data.gsoc2021.lorxu %}
  {% include gsoc_card.html student=site.data.gsoc2021.yash %}

  Yash (aka _@ryuk156_) will be working on migrating our current web (splash) site to the module site originally started by _@majordwarf_ two years ago.
  The first part of their project will target the pipeline for collecting module data for generating module documentation for the module site based on the previous work done by _@majordwarf_.
  In addition to that, the module site build and deployment pipeline needs to be revisited to update and properly integrate it into the development processes of Terasology and the module site.
  Documenting both pipelines for our fellow contributors shall make it easy for interested parties to join the effort in the future.

  The second part of Yash's project will entail re-designing and improving the module site.
  Amongst others, improving blog and module search, user experience and overhauling the gallery will be working items.
  Furthermore, as a special goodie for current and future blog post authors, Yash will work on automated preview image generation especially for our recurring blog post series "TeraSaturday" and "TeraSpotlight".
  The idea for this is to leverage in-game screenshots for the gallery, but also for blog post preview images, by adding a text overlay based on the blog post tag and number.

  The final part of the migration project will be the actual migration of the current website's contents into the module site.
  With everything in place, `terasology.org` can be adjusted to show the module site instead of our current website.

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