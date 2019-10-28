---
layout: post
title: TeraCon Munich and Mentor Summit
description: >
  It has been a fun week for a handful of our contributors in Munich, Germany.
  We took the opportunity of the Google Mentor Summit and added our own little
  <b>TeraCon</b> meetup in the Bavarian capital.
author: Skaldarnar, Niruandaleth
header-img: "/img/2019-10-24-munich-mentor-summit/munich_beer.jpg"
---

_It has been a fun week for a handful of our contributors in Munich, Germany. We took the opportunity of the Google
Summer of Code **Mentor Summit** and added our own little **TeraCon** meetup in the Bavarian capital. During that time,
we played our part in the big [Merge-athon] - out of competition, of course. From Monday, October 14th, till Sunday,
October 20th, we've [**merged 35 PRs**][PRs-merged] and [created 9 new PRs (or drafts)][PRs-created], in addition to
lots of inspiring discussions and conversations. Read on for more details on our little TeraCon meet-up and the Mentor
Summit._

## TeraCon 2019 - Munich Edition

### Monday, October 14

The first Terasologist to arrive in Munich is eviltak. After some hours of flight and an unexpectedly long time in the
waiting line at immigrations, he is the first to check-in. Three hours later, skaldarnar and niruandaleth join him in
the AirBnB after a five hours train ride through the country and stopping by the grocery store. After some short
introductions and setting up the chromecast, we get to work: eviltak explains the new [AutoConfigPR] which replaces the
previous [FlexibleConfigs], while skaldarnar and niruandaleth begin to cook spaghetti bolognese; soon the PR is merged
and dinner is served - adhering to bavarian "tradition" - accompanied by a glass of beer ;) A bit later qwc also joins
the crowd, leaving jellysnake as the only Terasologist still missing in our crew. The remaining evening is mainly filled
with recalling the focus and extent of the tasks of previous years' GCI and discussing what we learnt from those years
and what we want to do different for this year's GCI.

![Terasologists at Work - part 1]({{site.baseurl}}/img/2019-10-24-munich-mentor-summit/munich_group_01.jpg){: .center-image}{:style="width:48%;"}

### Tuesday, October 15

The second day of our stay in Munich starts with a nice breakfast outside on the balcony with scrambled eggs, toast and
a lot of sunshine ☀️. While eviltak goes out exploring the bavarian capital, the other three of us stay in to code. As
skaldarnar and niruandaleth have to work for their day-job, however, the only one actually making progress with
Terasology is qwc by cleaning up his server and the docker build stuff on it. In the evening we get together again to do
a first playtest - well... try to at least. While qwc and niruandaleth experience some strange world generation issues
when starting up Light & Shadow, the daytime adventuring through Munich soon takes its toll on eviltak and he (in his
own words) "falls asleep basically right on his face". Eventually, skaldarnar and qwc manage to play a first round of
Light & Shadow capture the flag. With regard to jellysnakes estimated arrival early next morning and the necessity of a
good night's sleep to have a productive TeraCon, though, further rounds are postponed in favor of heading to bed early.

![Terasologists at Work - part 2]({{site.baseurl}}/img/2019-10-24-munich-mentor-summit/munich_group_02.jpg){: .center-image}{:style="width:48%;"}

### Wednesday, October 16

This year's TeraCon started early with jellysnake arriving at 8 o'clock german time. After a quick introduction round
and a few slices of toast for breakfast, we set up qwc's spare laptop to go through all the open PRs in the Terasology
Core repository with everybody being able to take notes, check related issues or updating the communication channels at
the same time. Soon we had a list of all PRs, annotated with "merged", "closed" or "revisit" - first round of
[Merge-athon] efforts done, check. Next up was a quick update for jellysnake on the results of Monday's GCI discussions,
followed by a first GCI Trello board clean-up effort and another discussion round. This time we dove deeper into the GCI
topic and thought about what possible GCI tasks and task chains could look like, which of the three levels "beginner",
"learning"/"tutorial", and "productive" to put these tasks in and how to precisely communicate acceptance and rejection
criteria. After enjoying some slices of yummy pizza, we continued with play-testing both Light & Shadow and Metal
Renegades. For both play-tests we listed issues we encountered. Together we were able to in-game debug and sometimes
even pinpoint the exact problem. Later-on qwc even started writing out issues respectively.

![Pizza]({{site.baseurl}}/img/2019-10-24-munich-mentor-summit/munich_pizza.jpg){: .center-image}{:style="width:48%;"}

## Google Mentor Summit

The remainder of the week was reserved for the [Mentor Summit], hosted by Google at the Marriott Hotel Munich.
Unfortunately, _vampcat_ could not attend, so _skaldarnar_ dropped in and joined _eviltak_ and _jellysnake_  for the
fun. We were among 318 attendees from 42 countries! The 10 Google volunteers made a great job organizing everything and
giving us a great time - Thanks to all of you!

Meeting so many other open source enthusiasts was an exciting experience to us all. Be it fellow game developers from
[Godot Engine], scientists from [PEcAn] who study ecosystems from crops to forests, or tech-talk about Gradle and JavaFX
with some new friends from [JabRef]. But it was not only just talking - we tried out the [Checker Framework] on the spot
in [MovingBlocks/Terasology#3769], leading to a small improvement merged in [MovingBlocks/Terasology#3769].

![]({{ site.baseurl }}/img/2019-10-24-munich-mentor-summit/munich_mentor-summit-stage.jpg){: .center-image}{:style="width:66%"}

Besides some fun activities such as a scavenger hunt through Munich or a castle tour the mentor summit is an
**unconference**. There is no predefined schedule (beside lunch time, of course 🍔🥗) the attendees have to follow.
Instead, everything is self-organized. You can find an overview of the [Mentor Summit Sessions] online, and many notes
are shared as well. Two sessions were hosted by us: _eviltak_ asked the question how short-term contributors can be
empowered to make high impact contributions, and _skaldarnar_ initiated a discussion on how to estimate contributor
potential (where is their strength, how to guide them, ...?).

All the lively discussions motivated _jellysnake_ and _skaldarnar_ to spent some additional hours on bug fixes and new
features. Spontaneous coding in the hotel lobby or at the coffee table was fun and refreshing, resulting in a [new
`BlockFamily`][MovingBlocks/Terasology#3771] which will allow for upside-down stairs 😃 Keep an eye out for more changes
to come while the Merge-athon continues 😉

<!-- References -->
[AutoConfigPR]: https://github.com/MovingBlocks/Terasology/pull/3723
[Checker Framework]: https://checkerframework.org/
[DestSol]: http://destinationsol.org/
[FlexibleConfigs]: https://github.com/MovingBlocks/Terasology/issues/2668
[Godot Engine]: https://godotengine.org/
[GSOC]: https://summerofcode.withgoogle.com/
[JabRef]: http://www.jabref.org/
[Mentor Summit Sessions]: https://sites.google.com/view/gsoc-mentorsummit2019/more-info/session-notes
[Mentor Summit]: https://sites.google.com/view/gsoc-mentorsummit2019/home
[Merge-athon]: https://github.com/MovingBlocks/Terasology/issues/3737
[MovingBlocks/Terasology#3769]: https://github.com/MovingBlocks/Terasology/pull/3769
[MovingBlocks/Terasology#3770]: https://github.com/MovingBlocks/Terasology/pull/3770
[MovingBlocks/Terasology#3771]: https://github.com/MovingBlocks/Terasology/pull/3771
[PEcAn]: https://pecanproject.github.io/
[PRs-created]: https://github.com/search?q=org%3AMovingBlocks+org%3ATerasology+is%3Apr+created%3A2019-10-14..2019-10-20+is%3Aopen&type=Issues
[PRs-merged]: https://github.com/search?q=org%3AMovingBlocks+org%3ATerasology+is%3Apr+created%3A2019-10-14..2019-10-20+is%3Amerged&type=Issues
[Terasology Launcher]: https://github.com/MovingBlocks/TerasologyLauncher
[Terasology]: https://terasology.org
[The Terasology Foundation]: https://summerofcode.withgoogle.com/organizations/4777549354237952
