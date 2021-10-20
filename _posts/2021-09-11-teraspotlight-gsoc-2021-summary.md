---
layout: post
title: "TeraSpotlight: GSOC 2021 Final Show & Tell"
description: >
  In this post we are presenting the achievements of the student projects during this year's edition of Google Summer of Code (GSOC).
author: Niruandaleth
header-img: "/img/2021-09-11-teraspotlight-gsoc-summary/banner.jpg"
---

_We are proud to present the achievements of this year's student projects for the first half of the [Google Summer of Code]._
_We are happy to announce that all five students passed their halftime evaluations._
_The students will continue to contribute to different areas of our wide ecosystem, ranging from modernizing our web presence over world generation both, in space and on earth, to improvements in various gameplays._

Eleven weeks of hard work are behind us, including the halftime and final evaluations.
For the students, this means they have finished their projects and submitted their final work product.
In addition, the students introduced their achievements to our community in a final "GSoC Show & Tell" session.

Read on to learn what the students achieved in their projects!

<div class="col s12 m12" markdown="1">
  {% include gsoc_card.html student=site.data.gsoc2021.ahv %}

  Alluri (aka _@ahv15_) overhauled the [`LightAndShadow`](https://github.com/Terasology/lightandshadow) module including removal of unused code and refactorings towards proper event-based Entity-Component-System architecture.
  Further, Alluri fixed a lot of gameplay bugs related to world generation, starting and respawning inventory, weapon drops and pickups, et cetera.
  In terms of features, the student introduced a pre-game phase designed to balance delays in team setup both with regards to players joining and teams discussing strategy.
  This pre-game phase also gives players time to buy in the new shop screen that was extracted from our tower-defense gameplay `GooeyDefence`.
  Accessible throughout all game stages is the new statistics screen that shows the player distribution across the teams as well as stats on their deaths, kills and scored flag points.
  The final feature, active defensive structures to be placed by players to affect players of the opposing team is still pending in the final review cycles.

  <div align="center">
    <img src="{{ site.baseurl }}/img/2021-09-11-teraspotlight-gsoc-summary/las.png" width="60%" />
    <figcaption>Light & Shadow - Shop Screen, Pre-game Phase with separating Domes and Team Balancing, Statistics Screen</figcaption>
  </div>

  The project was mentored by _@Niruandaleth_ (aka _@jdrueckert_)  and _@Skaldarnar_.

  {% include gsoc_card.html student=site.data.gsoc2021.meet %}

  Meet (aka _@meetcshah19_) introduced a gameplay mechanism to shear sheep to allow players to gain wool for crafting without having to kill the animals.
  The feature was delivered to full extent, including particle and sound effects, a new item, documentation and tests, as well as an implementation adhering to our event-based Entity-Component-System architecture.
  The new `Shearable` component even allows the mechanism to be extended to other animals in the future.

  <div align="center">
    <img src="{{ site.baseurl }}/img/2021-09-11-teraspotlight-gsoc-summary/js_shearing.png" width="80%" />
    <figcaption>Josharias' Survival - Sheep Shearing</figcaption>
  </div>

  In addition, the student implemented another gameplay mechanism that allows to lure sheep with items such as grass or flowers.
  This allows the player to gather sheep at a desired place and is the first step towards enabling players to fulfill their dream and become a shepard.

  <div align="center">
    <img src="{{ site.baseurl }}/img/2021-09-11-teraspotlight-gsoc-summary/js_luring.png" width="80%" />
    <figcaption>Josharias' Survival - Sheep Luring</figcaption>
  </div>

  The project was mentored by _@Niruandaleth_ (aka _@jdrueckert_) and _@keturn_, with additional support from _@casals_ and last year's student _@ktksan_.

  {% include gsoc_card.html student=site.data.gsoc2021.lorxu %}

  _@Lorxu_ (aka _@tolziplohu_) completed the overhaul of the Metal Renegades world generation towards a shiny new Old West world with diverse biomes, strata, mesas, and rivers.
  The introduction of the new biomes for scrubland, rocky terrain, rivers and steppe are accompanied by a lot of work in the background.

  <div style="float:left">
    <img src="{{ site.baseurl }}/img/2021-09-11-teraspotlight-gsoc-summary/mr_river-real.png" width="49%" />
    <img src="{{ site.baseurl }}/img/2021-09-11-teraspotlight-gsoc-summary/mr_river-ingame.png" width="49%" />
  </div>

  The student changed the API for biomes to be more modular and reusable and re-implemented block tinting for grass blocks and leaves.
  More visible in-game are the more transition zones between biomes that Lorxu designed to look more messy instead of hard cut as well as the new Baobab trees based on `GrowingFlora`.

  <div style="float:left">
    <img src="{{ site.baseurl }}/img/2021-09-11-teraspotlight-gsoc-summary/mr_terrain-transition.png" width="49%" />
    <img src="{{ site.baseurl }}/img/2021-09-11-teraspotlight-gsoc-summary/mr_baobab-trees.png" width="49%" />
  </div>

  The flat-sided mountains called "Mesas" with their characteristic layers of different types of rock called "Strata" and the new dry and water-filled rivers that meander through the world let the player immerse in the Old West setting.
  The student proved their open-source mindset by getting active in related yet distant parts of the project, for instance the chunk ordering logic for chunk generation and processing as well as the world generation tutorial.

  <div align="center">
    <img src="{{ site.baseurl }}/img/2021-09-11-teraspotlight-gsoc-summary/mr_mesa-comparison.png" width="60%" />
  </div>

  The project was mentored by _@Skaldarnar_ and _@keturn_, with additional support from _@Suhas_ (aka _@agent-q1_).

  {% include gsoc_card.html student=site.data.gsoc2021.yash %}

  Yash (aka _@ryuk156_) completed the the module site improvements and automation efforts required as a preparation for migrating our web presence from our current splash site to the module site.
  First, the student overhauled the automated generation of module information leveraging a cron job on Jenkins running python and bash scripts to gather information and exhibit it on the site.
  To make the contents of the site available for visitors to see, Yash created a GitHub Action to deploy the Gatsby-based site.
  To ensure continuous stability and quality of the site code, the student also performed maintenance tasks such as a Gatsby upgrade, CSS to SCSS migration, and general cleanup of the existing code.
  In alignment with our current web presence, Yash introduced pages presenting information about our GSoC/TSoC mentors and even created a new page listing available projects.
  Further, some of the existing pages, such as the Gallery and game info, and site elements were redesigned or improved to allow for a better user experience.
  Finally, the remaining content - especially all the blog posts - were migrated and can now even be filtered by tags, author, date or using a full-text search.
  As a special goodie for present and future blog authors, Yash is working on generating blog post images based on blog post metadata and new gallery images.

  <div style="float:left">
    <img src="{{ site.baseurl }}/img/2021-09-11-teraspotlight-gsoc-summary/module-site_modules.png" width="49%" />
    <img src="{{ site.baseurl }}/img/2021-09-11-teraspotlight-gsoc-summary/module-site_gallery.png" width="49%" />
    <img src="{{ site.baseurl }}/img/2021-09-11-teraspotlight-gsoc-summary/module-site_mentors.png" width="49%" />
    <img src="{{ site.baseurl }}/img/2021-09-11-teraspotlight-gsoc-summary/module-site_blog-filters.png" width="49%" />
  </div>

  The project was mentored by _@majordwarf_  and _@Michael P_ (aka _@pollend_), with additional support from _@Niruandaleth_ (aka _@jdrueckert_) and _@Cervator_.

  {% include gsoc_card.html student=site.data.gsoc2021.isaiah %}

  Isaiah (aka _@IsaiahBlanks_) completed the redesign of the world generation system in Destination:Sol towards improved modularization and variability.
  The former hard-coded and very rigid design was replaced by a top-down generation flow based on a collection of modular pieces that can easily be extended, reduced, or exchanged.
  Generators are now easy to implement and provide the basis for configuring and generating the various elements of the game world.
  To enable current and future contributors to leverage this improvement as soon as possible, Isaiah created a tutorial to teach the creation of custom generators.
  Furthermore, the student created a new system to allow for custom maze layouts and shapes instead of purely randomly generated ones.

  <div style="float:left">
    <img src="{{ site.baseurl }}/img/2021-09-11-teraspotlight-gsoc-summary/dest-sol-1.png" width="49%" />
    <img src="{{ site.baseurl }}/img/2021-09-11-teraspotlight-gsoc-summary/dest-sol-2.png" width="49%" />
  </div>

  The project was mentored by _@Nicholas Bates_ and _@Cervator_, with additional support from last year's student _@Isaac L_.

</div>

<!-- References -->
[Google Summer of Code]: https://summerofcode.withgoogle.com/
