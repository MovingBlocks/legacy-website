---
layout: post
title: 'TeraSaturday #5: Do All The Changes! '
description: >
  An exploration of recent events in Terasology development
author: Skaldarnar
header-img: "/img/terasaturday/5/logo.png"
---

_Welcome to the return of TeraSaturday, a not-so-weekly update post about all the neat stuff that has been going on in
the world of Terasology! Half blog, half changelog, completely cool._

It has been a while since our last update, the [GSOC 2020 - Conclusion]({% post_url 2020-09-27-gsoc-2020-summary %}), and even longer since the last **TeraSaturday**. 
So, some update on the latest progress is overdue! You may think that we all took some break after GSOC finished, but quite the contrary seems to be the case.
Since the release of [Engine 4.0.0 / Alpha 16 - GSOC 2020](https://github.com/MovingBlocks/Terasology/releases/tag/v4.0.0) there were **more than 120** <a href="https://github.com/search?q=org%3AMovingBlocks+type%3Apr+merged%3A2020-09-20..2020-11-19"> merged engine PRs </a> 🤓 and **more than 130** <a href="https://github.com/search?q=org%3ATerasology+type%3Apr+merged%3A2020-09-20..2020-11-19"> merged module PRs </a> 👾.
That's an average of >4 PRs merged each day! We'll try to sum up the major achievements below, but feel free to read through each an every commit message at your convenience 😋

A lot of these changes happened "under the hood" which means that, except for the obligatory new bugs 🐛, you as a player won't notice much of this. 
_@Michael P_ and _@Niruandaleth_ have been working on migrating our code base away from [TeraMath](https://github.com/MovingBlocks/TeraMath) towards [JOML](https://joml-ci.github.io/JOML/), the Java OpenGL Math Library. We hope to reduce maintenance effort by using a thirdparty library here, as well as for potential performance improvements due to the best practices that come with using JOML.

_@immortius_ proposed to switch to [glTF](https://www.khronos.org/gltf/) for models and animations more than a year ago (see [MovingBlocks/Terasology#3785](https://github.com/MovingBlocks/Terasology/pull/3785)) and with the help of _@PAndaContron_, _@Qwertygiy_, and _@Michael P_ we eventually merged this to our main branch. Since then, _@Niruandaleth_ and _@casals_ have been working on the [glTF clean-up](https://github.com/MovingBlocks/Terasology/issues/4156), adjusting and fixing all the old MD5 models and animations in the game. We actually have quite a lot of those, we should definitely make better use of them 🧐 (and we already have some ideas on how to do that ...).

Finally, we also made the step towards [LW**JGL**](https://www.lwjgl.org/) thanks to the effort and contributions of _@DarkWeird_. This was initially suggested in December 2015 (now I'm feeling old ... 👴) by _@msteiger_ (see [MovingBlocks/Terasology#2099](https://github.com/MovingBlocks/Terasology/issues/2099)) and just now became reality by [MovingBlocks/Terasology#3969](https://github.com/MovingBlocks/Terasology/pull/3969). As with the other changes, you can see that everything is working if you don't see any difference to how it was before...

![Cute Monsters]({{ site.baseurl }}/img/terasaturday/5/cute-monsters.png)

But it's not all just nerdy changes and improvements. We used the motivation and excitement about the new model format to add [cute monsters](https://www.patreon.com/posts/39982825) (incl. a new custom sheep model) to the game. The models were created by [_@quaternius_](http://quaternius.com/), be sure to check out their [Patreon](https://www.patreon.com/quaternius/posts) for latest news and support.
These new models are (partially) integrated with the [WildAnimals](https://github.com/Terasology/WildAnimals) module and replace the old low-poly models (like our good ol' deer). We hope you like this new look, and we are looking forward to integrate more mobs and monsters into the gameplay templates so that you can experience them in the game!

In a similar fashion, [MetalRenegades](https://github.com/Terasology/MetalRenegades) is now way more ... metal 🤘 We replaced some of the Gooey citizens with actual robot models. Representing the good and lawful, sherrif robots will help to keep the piece in the old west towns. Opposing, the bad robots with their bulky, barrell-like bodies bend the boundaries of decency. Which side do you chose?

![Metal Renegades Robots]({{ site.baseurl }}/img/terasaturday/5/metal-renegades-robots.png)

And that's still not all! _@4D enthuasiast_ continues to shape the in-game world. By creating [FallingBlocks](https://github.com/Terasology/FallingBlocks) and reworking [FlowingLiquids](https://github.com/Terasology/FlowingLiquids) the world now feels more dynamic than before.
With the mass-preserving system of flowing liquids water becomes a valuable resources that should be used with care. 
Whole bodies of water may vanish in the depth of caves, so be careful which block you break!

<div align="center">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/CQHqrmoUWxQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
