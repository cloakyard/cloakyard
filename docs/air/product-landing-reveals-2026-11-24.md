# Product landing reveals and web dependencies

24 November 2026 · Local production builds · Air 1.8.1

All six product entries use the same portable reveal as Cloakyard. Each block
wipes down, fades from 60% opacity and settles upward by 4 px over 520 ms. Blocks
entering together start 240 ms apart in reading order. The existing product hero
artwork retains its own timing. Each repository ships its own CSS and controller.

## Landing coverage

| Product     | Editorial blocks                                                   | Additional checks                                                                                    |
| ----------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| Cloakyard   | 11 directory entries, principles and invitations in total          | 44 static layouts, 22 real artwork arrivals and four navigation journeys                             |
| CloakPDF    | 3 category introductions and the privacy summary on desktop        | Search, anchored tool buttons, dropzone, handoff to editor, desktop/mobile text and Markdown exports |
| CloakIMG    | 6 capabilities, ID photo workflow and privacy                      | 204 entry observations, real HEIC import, PNG fidelity, export and history                           |
| CloakResume | 3 start options, 3 feature articles and privacy                    | 335 entry layouts and 14 journeys covering new, saved and sample documents                           |
| CloakRoll   | 13 product, screenshot, principle, privacy and installation blocks | Home, privacy and 404 links, including the short final section                                       |
| CloakDrop   | 11 product, screenshot, principle and installation blocks          | Home, privacy and 404 links, including the short final section                                       |
| CloakTools  | 13 product, screenshot, principle, privacy and installation blocks | Links and keyboard navigation across all seven public routes                                         |

The production browser runner covered 22 viewport sizes from 320 to 2560 px in
light and dark with both Chromium and WebKit, for 616 page/size/theme/engine
combinations. It measured the content and veil together, animation durations,
reading order, overflow, focus, deep links, history return, print, forced colours
and a live reduced-motion change. Touch with reduced motion and a missing observer
were checked on the six product entries. The three Astro sites also exposed their
content and navigation with JavaScript disabled. Each product stores its local
review sheet in `docs/air/evidence/landing-reveals-2026-11-24.jpg`.

The React entries now restore initial fragments after their targets mount. The
PDF hover regression caught a moving tool button during scroll. Applying the
reveal to the editorial introduction keeps every tool's hit area anchored.
The Drop and Roll link regression caught the active marker lagging the final
section and verified the correction in both themes.

Run `scripts/test-air-landing-reveals.mjs` from Cloakyard for each built URL.
Supply `AIR_PRODUCT` (repository name), `SITE_URL`, `PLAYWRIGHT_MODULE`,
`AIR_BROWSER` (chromium or webkit) and optionally `AIR_EVIDENCE_DIR`.
The product reports list the additional feature and build checks. CloakPDF passed
474 unit tests, CloakIMG passed 501, and CloakResume passed all 373 production
suite tests with zero skips.

## Dependency verification

Checked 106 direct runtime and development package declarations against npm's
published versions. The four Vite projects use Vite+ 1.8.0, its Vite-compatible
core 8.3.8001 and pnpm 12.23.0. The three Astro sites use Astro 7.4.13,
Sitemap 3.7.6, Wrangler 4.167.0 and npm 12.2.3. Their current checker declares
a TypeScript 5.x or 6.x peer, so those sites use the latest 6.x release, 6.0.3.
The Vite projects use TypeScript 7.0.2. [Astro Check package metadata](https://registry.npmjs.org/@astrojs/check/0.9.12)

Updated transitive packages within the upstream ranges. Frozen pnpm installs and
clean npm installs reproduced the locks. The seven package audits reported zero
known vulnerabilities. The locally generated Air bundles and dependency licences
passed their hash checks. CloakIMG also rebuilt its HEIC/WebP binary with the
7.0.1 Emscripten SDK and verified outputs against its previous binary.

Scope is the web landing rollout and the tested dependency regressions. Broader
product migration, physical-device and assistive-technology acceptance remain
open. The three Mac products were exercised through their websites.
