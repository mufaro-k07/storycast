# StoryCast

StoryCast is an independent, accessible multimedia storytelling microsite built for the Advanced Frontend Web Development course. It presents racing stories as editorial, documentary-style experiences that can be watched, listened to or read.

## Featured story

**When Everything Goes Wrong: The 2021 Hungarian Grand Prix**

A race shaped by wet weather, a first-lap collision, an extraordinary restart with a single car on the grid, unexpected strategy decisions, Esteban Ocon's maiden Formula 1 victory and Sebastian Vettel's later disqualification.

The site is made up of three pages:

| Page | File |
| --- | --- |
| Home | `index.html` |
| The Story | `story/hungarian-grand-prix.html` |
| About & Access | `about.html` |

Accessibility target: **WCAG 2.1 AA**. The site has not yet been audited against this target (see [Development status](#development-status)).

## Technologies

- HTML5 (semantic markup)
- Sass (SCSS), compiled to CSS with Dart Sass
- CSS Grid
- Flexbox
- CSS container queries
- CSS cascade layers
- Vanilla JavaScript (no frameworks or UI libraries)

Fonts: [Prata](https://fonts.google.com/specimen/Prata) (headings) and [Poppins](https://fonts.google.com/specimen/Poppins) (body and interface), loaded from Google Fonts.

## Project structure

```
storycast/
├── index.html                  Home page
├── about.html                  About & Access page
├── story/
│   └── hungarian-grand-prix.html   Story detail page
├── sass/                       Sass source (edit these, not css/)
│   ├── main.scss               Entry point
│   ├── _layers.scss            Cascade layer order
│   ├── _tokens.scss            Forwards all tokens and helpers
│   ├── _helpers.scss           rem()/fluid() functions, breakpoints, mixins
│   ├── _colors.scss            Colour tokens
│   ├── _typography.scss        Typography tokens
│   ├── _spacing.scss           Spacing and layout tokens
│   ├── _reset.scss             @layer reset
│   ├── _base.scss              @layer base
│   ├── _layout.scss            @layer layout
│   ├── _components.scss        @layer components
│   └── _accessibility.scss     Focus, skip link, utilities, reduced motion
├── css/
│   └── main.css                Compiled CSS (committed for GitHub Pages)
├── js/
│   └── main.js                 Progressive enhancements
├── assets/
│   ├── images/                 Illustrations and diagrams
│   ├── video/                  Video files
│   ├── audio/                  Audio narration
│   ├── captions/               WebVTT caption files
│   └── transcripts/            Written transcripts
├── design_reference/           Figma high-fidelity mockups (SVG)
└── docs/
    ├── research/               Research notes and sources
    └── documentation/          Project documentation
```

### Sass architecture

- **Tokens.** Colours, typography and spacing are Sass variables in their own partials, forwarded through `_tokens.scss`. Each partial loads them with `@use "tokens" as *;`. The project uses the Sass module system (`@use`/`@forward`), not the deprecated `@import`.
- **Cascade layers** in the order `reset, base, layout, components, utilities`. Later layers override earlier ones regardless of selector specificity.
- **BEM naming**, for example `.site-header__link` and `.button--primary`.
- **Fluid type and spacing** via `fluid()`, which scales between the 390px mobile and 1440px desktop mockups.

## Design references

`design_reference/` contains six high-fidelity SVG mockups exported from Figma: Home, Story and About & Access, each at desktop (1440px) and mobile (390px) widths. They are the visual reference for the build and are not used as page content. The pages themselves are built with real semantic HTML.

## Local setup

Requires [Node.js](https://nodejs.org/) (which includes npm).

```bash
npm install
```

This installs Dart Sass, the only development dependency.

## Sass build

Compile `sass/main.scss` to `css/main.css` once:

```bash
npm run build
```

Run this before committing so the compiled CSS is up to date. GitHub Pages serves `css/main.css` directly and does not run Sass.

## Sass watch mode

Recompile automatically whenever a `.scss` file changes:

```bash
npm run dev
```

Press `Ctrl + C` to stop. Watch mode also writes a source map (`css/main.css.map`) for browser dev tools. Source maps are git-ignored, and `npm run build` produces CSS without one.

## Local preview

Serve the project root with a local development server so relative paths behave as they will on GitHub Pages. For example:

1. Install the **Live Server** extension in VS Code.
2. Open `index.html` and choose **Open with Live Server** (or click **Go Live** in the status bar).
3. Run `npm run dev` in a terminal alongside it so style changes are recompiled.

## Development status

**Phase 1: Foundation and Sass architecture (current)**

Done:

- Folder structure, npm scripts and Dart Sass build
- Colour, typography and spacing tokens; cascade layers; BEM components
- Three pages with semantic landmarks, one H1 each, and a shared header, navigation and footer
- Skip link, visible focus indicators and reduced-motion support

Not yet built (planned for later phases):

- Full Home, Story and About & Access page content
- Audio and video media, captions and transcripts
- Interactive race timeline and strategy interaction
- Mobile menu (navigation links are currently always visible)
- A full accessibility audit; the site does not yet claim WCAG 2.1 AA conformance
