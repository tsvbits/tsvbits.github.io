---
title: How did we make Flash Viewer at ActiveReports
date: '2019-08-12'
spoiler: Open sourcing PageFX compiler
---

It was not easy path. First we implemented a cross compiler from [.NET](https://en.wikipedia.org/wiki/Common_Intermediate_Language) to [Flash Player](https://www.adobe.com/content/dam/acom/en/devnet/pdf/avm2overview.pdf) byte code.

And this post is about this cross compiling tool.
It was called [PageFX](https://github.com/GrapeCity/pagefx).

## History

I started this project by invitation from [Scott Willeke](https://scott.willeke.com/). Initial idea was to create a framework for building rich internet applications.

## Going open source

I've just wrote a few emails recently with idea to publish code of the PageFX. And there were no conerns with that from side.
BTW in 2013 I asked to open source PageFX and on that moment company was not ready by some reasons.
