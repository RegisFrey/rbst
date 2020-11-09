<img src="./logo-rbst-regis-basic-style-tokens.png" height="150" />

# Regis' Basic Style Tokens (SUPER WIP)

In an [atomic approach to design][1] `Design Tokens`
or `Style Tokens` describe building blocks like
colors, font sizes, spacing, and more. (See ["What are Design Tokens?"][2])

I used to use [Theo][3] but it got a bit cluky and lacks some features I wanted:
- defining colors more flexibly
- tokens referencing other tokens [Issue 100][4]
- tokens using math [Issue 186][5]
- types on imported tokens [Issue 174][6]
- outputing css custom properties to a class selector

It also didn't hook into webpack or my pipelines in the ways
I wanted to use it (more webpack and sass-loaders fault than Theo).

So I hacked together a bespoke tool for defining tokens I can
use in the ways I wanted.

It is meant to consume tokens defined as JSON (or YAML loaded as JSON)
but my primary use case is defining tokens directly as Typescript.

⚠️ ⚠️ ⚠️

These v0.X.X versions will not have
a fixed semantic versioned API
and will be web centric: 
exporting tokens to Javascript/Typescript
and CSS (and various CSS preprocessors)

Because its for me first,
I'll be prioritizing features and formats I want or need.

Lastly, work is being done to create an 
[official Design Tokens spec][7]
which will lay better foundations for tools and interoperability.
When that happens, I may adopt it if it is compatible,
but it seems a couple years off.

[1]: https://bradfrost.com/blog/post/atomic-web-design/
[2]: https://css-tricks.com/what-are-design-tokens/
[3]: https://github.com/salesforce-ux/theo
[4]: https://github.com/salesforce-ux/theo/issues/100
[5]: https://github.com/salesforce-ux/theo/issues/186
[6]: https://github.com/salesforce-ux/theo/issues/174
[7]: https://github.com/design-tokens/community-group