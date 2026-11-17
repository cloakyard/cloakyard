# Homepage platform groups — 2026-11-17

The directory now separates **Web apps** (PDF, Resume, IMG) from **macOS apps**
(Drop, Roll, Tools), using quiet category headings and one sentence of context.
Each group retains the existing open entries, three/two/one-column reflow, Air
colours and spacing. Web destinations say **Open in browser**; native destinations
say **Visit website**. Each accessible link name also identifies its product.

The registry owns a typed `platformType`; the existing compatibility, privacy and
release-status copy remains intact. The no-JavaScript directory has the same
categories. KERR remains a separate exploration link. No native UI, product
workspace, shared contract, runtime dependency or deployment changes are included.
This implements the existing Air directory requirement; Air remains at 1.7.5.

## Coverage ledger

| Surface                                        | Coverage                                                                        | Result                                                                                    |
| ---------------------------------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Homepage category headings and all six entries | Chromium and WebKit, all eleven required sizes, light/dark, 16px/32px root text | 88 layout observations; correct membership, named actions, no page/text overflow          |
| Phone/tablet/laptop/desktop presentation       | 390, 768, 1280 and 1440px, both engines and themes                              | 16 captures inspected for hierarchy, spacing, wrapping and legibility                     |
| Keyboard and compact navigation                | Both engines/themes, skip link, menu to `#tools`, six product links             | Focus and reachability pass; WebKit uses macOS Option+Tab link navigation                 |
| Coarse pointers and long copy                  | Touch input at phone/tablet widths, long headings and explanation at 200% text  | Targets remain at least 44px; content reflows                                             |
| No-JavaScript directory                        | Both engines/themes at 320px                                                    | Both platform categories, Explorations and all eight links remain available               |
| Public links, home and privacy                 | Existing public-link suite in Chrome                                            | 256 layout/state observations and 96 keyboard checks; neutral links and no console errors |
| Existing family artwork                        | Existing growth suite in Chrome                                                 | 44 static layouts, 22 finite arrivals and 4 lifecycle/no-script journeys pass             |

Loading/error/empty application states do not apply to these static category
headings. Other products, editor tools, native software, physical-device testing,
spoken assistive technology and actual browser zoom were not reaudited. The
separate family acceptance backlog remains open.

## Validation

Passed `vp check`, `./node_modules/.bin/tsc --noEmit`, `vp run build` (including
social metadata/image checks), `node scripts/sync-air-design.mjs --bundle --check`,
`node scripts/check-air-design.mjs`, `node scripts/check-air-portability.mjs`,
`node scripts/check-readmes.mjs`, `npx --yes knip@6.45.1`,
`node --test scripts/test-yard-growth.mjs`, `scripts/test-air-growth.mjs` and
`scripts/test-air-links.mjs`. Browser suites used an external Puppeteer module
against the production preview; a temporary Playwright probe checked the groups.
The JavaScript entry is 76.23 kB gzip, below the existing 85 kB ceiling.

Initial temporary keyboard probes incorrectly mixed pointer/programmatic focus,
raced queued anchor focus, and used ordinary Tab for macOS WebKit links. The
harness was corrected to wait for browser event settlement and use actual link
traversal. Final checks pass without production changes for those probe issues.

Modern Web Guidance's `accessibility` guide informed real H2 category headings,
H3 product names and product-specific accessible link names. Its
`form-factor-adaptation` guide informed wrapping category headers within the
existing container breakpoints. No new browser API or fallback is needed.

Evidence: [receipt](evidence/platform-groups-2026-11-17/receipt.json),
[desktop preview](evidence/platform-groups-2026-11-17/desktop-light.webp),
[Chromium light](evidence/platform-groups-2026-11-17/chromium-light.webp),
[Chromium dark](evidence/platform-groups-2026-11-17/chromium-dark.webp),
[WebKit light](evidence/platform-groups-2026-11-17/webkit-light.webp) and
[WebKit dark](evidence/platform-groups-2026-11-17/webkit-dark.webp).
