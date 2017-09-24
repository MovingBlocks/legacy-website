Terasology Splash Site
-----------------------------

This is our GitHub-hosted "Page" site serving as a splash site for Terasology.

It is meant to be a light-end front for our most popular links and resources,
such as builds, forum, wiki, etc.

Contributors
------------

Before pushing any image to the repo, please make sure that it is web-optimized.
Use programs like [ImageOptim](https://imageoptim.com/) or services like
[PunyPNG](http://www.punypng.com/).

Adding New Blog Post
-----------

  1. Create a .md file in the `_posts` folder. The file must have a prefix containing the current date in `YYYY-MM-DD-` format followed by the post short/brief title. This file name is going to be used as the article directory.
  Ex: `2017-06-14-new-splash-site` will be translated to http://terasology.org/2017/06/14/new-splash-site.html
  2. The new post file must have the following format:
```yaml
layout: post
title: "Say Hello to Our New Website!" #This is your post tile
description: > #This is a brief description of your post that will show up in post previews.
  If you have visited our website before you might notice something different now. Yep, we have a new design!
  Our new website is heavily inspired by Google's Material Design and is inline with the Design Unification Project.
author: "Scott Moses Sunarto" #This will show up as the post author
header-img: "/img/ss_8.jpg" #This is the header image that you see above your post and on post previews
---
#content goes here
```
  3. If you created your post file correctly, the post will be visible on the front page of the site automatically. Make sure that all your images, authors, and date and description appear correctly on the post.



Adding New Gallery Images
------------

Adding new gallery image is now extremely easy!

 1. Insert your image into the `/img` folder
 2. Add this code in the front-matter of  `gallery.html` file

```yaml
  - image_path: img/image file

    title: title of image
```
  3. If you added the image correctly, your image will now be visible on the gallery page.

Credits
-------

The legacy splash page was designed and contributed by @3000Lane and edited by @NowNewStart and @MiJyn. The new splash page was designed and contributed by @smsunarto.

The Terasology splash site is licensed under Apache 2.0, artwork and assets are licensed under CC-BY 4.0 unless stated otherwise.
