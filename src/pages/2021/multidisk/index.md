---
title: Lets build mini Google Drive clone in few hours
date: '2021-07-17'
spoiler: To achieve that I have used awesome Uploadcare platform
tags: ["sample", "tutorial", "draft"]
---

> TL;DR you can find source code of the app at https://github.com/sergeyt/uploadcare-disk

## TODO

- upload video to youtube
- cover screenshot

I am going to show you how to quickly build a small Google Drive app powered by [Uploadcare](https://uploadcare.com) platform. Believe me or not but I've built the app within one morning.

## What I've done

In terms of features the app includes the following capabilities:
- Allow managing multiple drives
- Upload, download and deleting files
- At this point I've implemented only [Uploadcare](https://uploadcare.com) drive, but I'd like to add support for Google Drive, Dropbox, etc

You can watch [this short video](https://drive.google.com/file/d/1nDrBTZ_msFJSMdV2DkZeazyL52bVSyln/view) to have more vision about the features mentioned above.

## Tools

This app is built using the following tools:

- [TypeScript](https://www.typescriptlang.org/)
- [Uploadcare](https://uploadcare.com)
- [Next.js](https://nextjs.org/)
- [Material UI](https://material-ui.com/)

## How I've done this

Step by step:
- Bootstrap nextjs app
- Drive abstraction
- Home page with list of drives
- Drive view page with list of files
- Upload file is easy peasy with Uploadcare super widget
- New drive dialog
- Delete actions with confirmation dialog
