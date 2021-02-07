---
layout: post
title: "TeraSpotlight: Extrem View Distances with LOD Chunks"
description: >
  The idea of extreme view distances with LOD chunks is nearly as old as this project, and now it's finally a dream come true.
author: Skaldarnar
header-img: "/img/terasaturday/9/banner.jpg"
---

_Please enjoy this special spotlight post about a new feature we are excited about. We hope you will like it as much as we do!_

## 🤩 Spotlight

Thanks to _@4D Enthusiast_ a long-time dream has finally come true. 
You can experience the worlds of Terasology with [**extrem view and render distances**](https://github.com/MovingBlocks/Terasology/pull/4452) now!
This was made possible by allowing for different levels of detail (LOD) for the chunks.
But let's hear what _@4D Enthusiast_ has to say about this in detail. 🤓

> I've wanted to implement this feature for ages, but this has been the first time it was at the top of my priority list.
> I was a bit worried that it would make the code (particularly world generation) so much messier that it wouldn't be worth it, but now that I've seen how great it looks, I'm really pleased that I did do it.

<div class="row">
    <div class="col s12 m6 l6">
        <img class="img-margin fwidth materialboxed z-depth-3" src="{{ site.baseurl }}/img/2021-02-07-teraspotlight-lod-chunks/Terasology-210201222947-1920.jpg" alt="{{ image.title }}">
    </div>
    <div class="col s12 m6 l6">
        <img class="img-margin fwidth materialboxed z-depth-3" src="{{ site.baseurl }}/img/2021-02-07-teraspotlight-lod-chunks/Terasology-210201223553-1920.jpg" alt="{{ image.title }}">
    </div>
</div>

> For each level of detail (with the number controlled by a slider, 1 to 10), a set of chunks is generated with half the resolution, but twice the size.
> There are also some LOD chunks around the edge of the actual loaded region that are about the same size as real chunks, in order to ensure that everything lines up neatly if the edge of the loaded region does not align to the double-scale chunk grid. 
> This means that the amount of detail visible at each level of detail is approximately the same (because of perspective), but size of the visible area grows exponentially with the number of LOD levels. 
> I set the maximum LOD level to 10 not because adding more would be too computationally expensive for anyone to run, but because the view area is already so large that levels 9 and 10 look practically identical anyway. 
> As an example, with view distance Near (9 * 7 * 9), it would take 16 LODs to have an area the size of the earth visible, and 22 LODs for the moon to be directly visible in the sky (although a block-based moon couldn't actually move).

So, the available levels of details should be sufficient 👍 
In addition to scaling down the chunk resolution the visible details are also limited to _world facets_ that support the scaling.
This is currently only implemented for the basic terrain generation, but we are looking forward to extending this to features like trees.
Oh, and the LOD chunks should have a quite low impact on the performance, too:

> After an LOD chunk is finished generating, all of its data except for the mesh is discarded, because they are static and cannot be interacted with, so the mesh is all that's needed. 
> Because the mesh data is only stored on the GPU, this means that each LOD chunk takes up barely any main memory.

As always when writing some code, not everything went as planned right from the start.
Read on for some technical insights, as well as some more screenshots:

> Unlike in normal chunk generation, each LOD chunk is generated completely independently of the others. 
> This causes some issues in areas where the appearance of a chunk actually does depend on the adjacent chunks, in particular, lighting, ambient occlusion, and face culling. 
> To approximate the lighting, the sunlight regen is set to full for any block at the top of a chunk that isn't too far underground, and that sunlight regen can pass through.
>
> In order to avoid issues with ambient occlusion and face culling, each LOD chunk is actually generated slightly larger than the area it needs to cover, so that there's overlap between the edges of adjacent chunks' meshes. 
> This also helps to cover up some of the gaps caused by differences between chunks of different scales.
> I also tried at one point having all the faces on the outside of each chunk visible in order to avoid gaps, but that made it much less efficient because of all of the underground chunks that would become visible.

<div class="row">
    <div class="col s12 m6 l6">
        <img class="img-margin fwidth materialboxed z-depth-3" src="{{ site.baseurl }}/img/2021-02-07-teraspotlight-lod-chunks/Terasology-210201224636-1920.jpg" alt="{{ image.title }}">
    </div>
    <div class="col s12 m6 l6">
        <img class="img-margin fwidth materialboxed z-depth-3" src="{{ site.baseurl }}/img/2021-02-07-teraspotlight-lod-chunks/Terasology-210201231714-1920.jpg" alt="{{ image.title }}">
    </div>
</div>

> Another issue I had to fix was that the far clipping plane was sometimes too close. 
> There's a tradeoof in rendering between the accuracy with which it can be determined which of two things is closer (and therefore should be visible in front) and the maximum distance at which you can see something. 
> The maximum distance was set to 5000 previously, I suppose as that seemed like obviously plenty (probably even too much), but with LOD chunks, much greater view distances than that are possible, so I had to adjust the far clipping plane distance to adapt to the current render distance and number of LODs.
> This then had another issue that at the minimum settings, the clipping plane was so close that the sky wasn't visible, and would just appear black instead, so I had to set a minimum limit to avoid that.

We are preparing a new release candidate to make this available from the launcher as well. 
Looking forward to your feedback when checking this out! 🎮

## 📰 Since last TeraSaturday ...

This spotlight post is mainly about the LOD chunks, but we don't want to withhold other news of the last week.

_@keturn_ made a change to the workspace structure worth noting for developers: Gradle will no longer put jars in the `modules/` directory itself.
There is a new directory `cachedModules` for the module JARs.
See [MovingBlocks/Terasology#4454](https://github.com/MovingBlocks/Terasology/pull/4454) for more details.

_@DarkWeird_ contributed a small change with great profit by [replacing dense arrays to sparse arrays for chunk's light data](https://github.com/MovingBlocks/Terasology/pull/4438).
This benefits both LOD chunks and regular chunks as less memory is used during generation and while the chunks are loaded.
This results in a performance boost of 5% for writing/reading.

And, as always, JOML-ification was continued by _@Michael P_, _@Niruandaleth_, and _@Skaldarnar_ about to push it over the finish line today 🥳

In total we merged [~50 engine PRs](https://github.com/search?q=org%3AMovingBlocks+type%3Apr+merged%3A2021-01-30..2021-02-07+is%3Apr&type=issues) and [over 100 module PRs](https://github.com/search?q=org%3ATerasology+type%3Apr+merged%3A2021-01-30..2021-02-07) since January 30 👀. 


