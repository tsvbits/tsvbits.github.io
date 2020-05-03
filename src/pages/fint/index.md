---
title: .NET CIL interpreter in F#
date: '2019-11-01'
spoiler: Hardcore tiny project for dotnet NSK meetup 
---

I've prepared compact [.NET CIL](https://en.wikipedia.org/wiki/Common_Intermediate_Language) interpreter called [Fint](https://github.com/sergeyt/fint) in pure F# for [NskDotNet Meetup #6](https://www.meetup.com/NskDotNet/events/265652338/).

It can run C# programs with the following features at this point:
- all control flow statements (if, for, switch, etc)
- arithmetic operations including bitwise one
- boolean algebra operators
- string concatenation
- static function calls
- Console.WriteLine calls

It can be easily extended with other features.

Some code in this project is just ported from [PageFX project](https://github.com/GrapeCity/pagefx) I wrote about [recently](/flash-viewer-story).

It would be nice to try porting Fint to JavaScript using [Fable](https://fable.io/) and run .NET binary code right in a browser.
Later we can try to port [Roslyn C# compiler](https://github.com/dotnet/roslyn) to [WASM](https://webassembly.org/) with [Blazor compiler](https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor) and build online tutorial that:
- compiles small C# program to .NET PE file in browser
- runs .NET PE file in browser
- shows CIL code for given method
- provides debugging experience of CIL instruction set

This could be a great web resource to help learning .NET code at low-level.

If you like Fint project please stargaze it on github.
