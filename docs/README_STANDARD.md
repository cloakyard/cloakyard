# Family README standard

The six product READMEs and the Drop/Roll website READMEs use the same navigation
and section order. Product-specific capabilities, privacy boundaries, build tools
and release limits remain explicit. Native SwiftUI apps keep their own design and
verification requirements; the Air contract governs web UI.

Start with one H1 product name, a short bold description and Website / Source /
Support links (website subdirectories may link to the product README instead).
Optional badges are centered and must describe supported facts. Root READMEs
show a current app/site capture or product artwork, with a light/dark picture where
available, useful alt text and a consistent 800px display width. Clearly distinguish
artwork from an actual app capture. Use synthetic content. Generated images must
have a documented source and regeneration command.

Use these H2 sections, exactly in this order. App-specific details belong under
H3/H4 headings, rather than changing the shared navigation:

1. **Overview** — what the product does and where it runs.
2. **Features** — supported workflows, outputs and relevant limitations.
3. **Privacy** — local storage, downloads, network use and policy references.
4. **Getting started** — the shortest user path and actual platform requirements.
5. **Development** — prerequisites, install/run commands, technology and checks.
6. **Design and assets** — the local Air contract, sources and capture workflow.
7. **Project structure** — current directories and their responsibilities.
8. **Deployment and releases** — website promotion and native release boundaries.
9. **Contributing** — repository instructions, bounded verification and support.
10. **License** — the actual license and third-party notice requirements.

Keep descriptions and headings in sentence case, without decorative heading
emoji. Commands must match package scripts and configuration. Distinguish a
full build script (`vp run build`) from the bundler alone (`vp build`). Test
commands must finish, and required browser tests cannot be silently skipped.
Do not copy native build commands into web-only projects or imply that a website
check certifies device behavior. Describe dated test counts as dated evidence.

Keep relative links usable from a standalone checkout. Preserve or redirect
published section anchors when reorganizing a README. Do not delete referenced
assets or rename capture files without checking the PWA manifest and social card.
Review changed captures in both themes. Historical audit records stay historical;
update current entry points rather than rewriting past evidence.

Run `node scripts/check-readmes.mjs` for this repository, or
`node scripts/check-readmes.mjs --family /path/to/family` for all six sibling
checkouts and both website READMEs. The check validates the section order and
local linked files/Markdown anchors; visual and factual review is still required.
It is a contributor audit, not a runtime dependency between products.
