# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

The toolchain is **Vite+**, driven by the `vp` CLI — not `pnpm run`. `package.json` defines only
`deploy` and a thin `build` alias (the latter exists so Cloudflare Workers Builds can auto-detect a
build command); everything else is a built-in `vp` command.

| Command         | Purpose                                            |
| --------------- | -------------------------------------------------- |
| `vp install`    | Install dependencies (wraps pnpm 11)               |
| `vp dev`        | Local dev server                                   |
| `vp check`      | Format + lint + type-check — the only quality gate |
| `vp build`      | Production build into `dist/`                      |
| `vp preview`    | Serve the production build                         |
| `vp run deploy` | `vp check && vp build && wrangler deploy`          |

Requires Node.js ≥ 24. There is no test framework in this repo, so `vp check` is what "passing"
means; run it before considering a change done.

Note `vite` in `devDependencies` is an alias for `@voidzero-dev/vite-plus-core`. Dependency
versions are pinned exactly (no `^`/`~`) — keep new additions pinned, and if a pinned package is
too new for pnpm's minimum-release-age policy, add it to `minimumReleaseAgeExclude` in
`pnpm-workspace.yaml`.

## Architecture

A single-page, client-rendered React 19 marketing/directory site for the Cloakyard family of
tools. Deliberately minimal: no router, no backend, no state library, no data fetching, no
analytics. The site makes zero network calls at runtime beyond its own static assets — preserve
that when adding anything.

**Content registry.** [src/data/tools.ts](src/data/tools.ts) is the single source of truth for
projects. `productivityTools` (typed `ProductivityTool`, with icon/status/platform/privacy) drives
the card grid automatically — adding a productivity tool should be a registry entry and nothing
else. `experiments` is typed more loosely (`YardProject`), and
[ExperimentSection.tsx](src/components/ExperimentSection.tsx) renders only `experiments[0]` with
KERR-specific copy and a hand-built animated visual hard-coded in the component. A second
experiment therefore requires generalising that section, not just a registry push.

**Composition.** [src/App.tsx](src/App.tsx) stacks the sections in fixed order; each section owns
its own `<section id>`. Navigation is hash anchors only — the `nav` array in
[Header.tsx](src/components/Header.tsx) (`#tools`, `#experiments`, `#principles`) must stay in sync
with the section IDs. `App` has one effect: it re-scrolls to the hash after `document.fonts.ready`,
because font swap shifts layout enough to break the browser's native anchor jump.

**Styling.** One global stylesheet, [src/index.css](src/index.css) (~1.5k lines) — no CSS modules,
no Tailwind, no CSS-in-JS. Components carry semantic class names and hold no styles. Conventions
that matter:

- Design tokens are `oklch()` custom properties in `:root`; use tokens rather than literal colors.
- Dark mode is `@media (prefers-color-scheme: dark)` token overrides only. There is no theme
  toggle and no `data-theme` attribute.
- The file is ordered by section (`/* Header ---- */`, `/* Hero ---- */`, …) with **all** breakpoint
  overrides collected in the trailing `/* Responsive */` block (1080/860/700/480px, plus
  `hover: none` and `prefers-reduced-motion`). Put new media queries there, not next to the base
  rules.
- Accessibility is load-bearing in the markup: skip link, `aria-label`s on icon-only links,
  `aria-hidden` on decorative icons and visuals. Keep it.

**Deployment.** Cloudflare Workers static assets ([wrangler.jsonc](wrangler.jsonc)) serving `dist/`
with SPA not-found handling.

## Keeping metadata in sync

Product-facing changes touch more than the registry: [index.html](index.html) holds the OG/Twitter
tags and the `WebSite` JSON-LD block, [public/sitemap.xml](public/sitemap.xml) lists the canonical
URL, and [README.md](README.md) lists the yard's projects. Update these alongside `tools.ts` when
projects or positioning change.

The homepage is a directory and a statement of principles — keep additions to that scope rather
than growing it into per-product marketing.
