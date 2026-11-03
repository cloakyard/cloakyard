# Compact notices, consistent dismissal and quiet scrolling — 2026-11-03

Scope: the six web surfaces, including PDF, IMG and Resume interiors. Air **1.6.0**.
Native applications and KERR are unchanged. The user's Windows screenshots exposed
an in-flow notice that consumed canvas height and a full-dialog native scrollbar.

## Changes

- PWA status is now a compact bottom-right popup: 384px maximum width, 16px/safe-area
  clearance, opaque surface, 18px corners and one 44px X. Update/retry is the only
  primary action; the X postpones the update. Busy and unsaved-work guards, local
  drafts, same-tab consent, pause-on-hover/focus and focus return are preserved.
- `air-dismiss` standardizes modal/popover dismissal to a quiet 44px target with
  an 18px/1.6-stroke X. It aligns with the title instead of centering beside a long
  filename or description. Actual modal ownership and existing motion remain intact.
- `air-scroll` replaces the three product scrollbar skins. It uses native scrolling,
  an 8px WebKit rail/native thin fallback, a stable transparent gutter, neutral
  inset thumb, and no WebKit arrows. Fine-pointer hover/focus reveals the thumb;
  touch/forced colours retain an indicator. Document/OS scrollbars are not reskinned.
- PDF keeps the header/footer fixed while its body scrolls; long export filenames
  move into that body. IMG stops flex content shrinking/clipping its metadata
  disclosure and exposes focused fields in WebKit. No output processing changed.
- Removed obsolete local scrollbar CSS and the obsolete IMG coarse-scrollbar probe.
  Existing tests now use the shared classes and single dismissal control. The AI
  modal test now checks Air 1.5's already-shipped keyboard entrance timing, rather
  than its superseded immediate-only assumption.

The shared contract, gallery and standalone product bundles are synchronized.
Yard, Drop website and Roll website have no PWA worker; they receive the design
contract and shared CSS without fabricated update notices.

## Verification

The dialog/PWA matrices include 320×568, 375×812, 390×844, 430×932, 844×390,
768×1024, 1024×768, 1280×720, 1366×768, 1440×900 and 1920×1080; both themes,
16px/32px root font, and applicable focus/input modes. Enlarged root font is not
claimed as physical browser zoom or software-keyboard testing.

| Check                             | Result                                                                                                                                                                                                                                                   |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Six-site public family audit      | 648 home + 288 secondary layouts; no deviations or browser errors                                                                                                                                                                                        |
| Actual PWA notice comparison      | 396 real-worker layouts, 162 captures; identical text, geometry, control colours and states                                                                                                                                                              |
| Actual dialogs, Chrome and WebKit | 264 layout/theme/text cases; close/footer containment, scrolling and numeric-field focus                                                                                                                                                                 |
| Classic scrollbar interaction     | Test browser's `--hide-scrollbars` default explicitly removed; real 8px gutter, neutral hover, no arrows, thumb drag and wheel scrolling pass in all three editors; PDF forced colours also pass                                                         |
| PDF                               | 461 unit tests; 320 export state/layout cases, all six formats, exact plain-PDF bytes, redaction protection, errors/retry and long names; modal ownership/AI states pass; 44 deferred-update layouts plus real activation/two-tab/draft/race checks pass |
| IMG                               | 488 unit tests; 718 Chrome / 720 WebKit all-tool observations, no browser errors or model downloads; 204 entry layouts with real exact PNG output; 132 notice layouts and real two-tab preservation pass                                                 |
| Resume                            | All 373 tests pass, including browser, template/output, PWA, nested dialogs and keyboard coverage                                                                                                                                                        |
| Design/build/dead code            | Product check/build, canonical provenance, standalone portability and applicable Knip checks pass; Roll site verification and worker dry run pass                                                                                                        |

New `scripts/test-air-dialogs.mjs` preserves the classic-scrollbar and fixed-action
regressions. `scripts/test-air-notices.mjs` asserts fixed bottom/right geometry and
single dismissal, with actual waiting workers. Raster comparisons exclude only the
rounded outside corners showing different pages and permit bounded SVG/font edge
noise (at most 0.1% pixels, 32/255 channel difference); dimensions and computed
colours must still match exactly. Representative captures were visually reviewed alongside
representative phone/tablet/desktop light/dark contact sheets.

[Committed evidence](evidence/compact-popups-2026-11-03) includes family comparisons,
editor notices, dialog states and the visible classic scrollbar. Full logs, fixtures
and captures: `/tmp/air-popups-2026-11-03`. Browser tooling is supplied externally
through `PLAYWRIGHT_MODULE`, `PUPPETEER_MODULE` and `SHARP_MODULE`; no runtime package
was added. `AIR_DIALOG_URLS` orders PDF, IMG, Resume; `AIR_FAMILY_URLS` orders Yard,
PDF, Drop, Resume, Roll, IMG. Use disposable local preview builds for worker tests.

Physical Windows and iPhone/software-keyboard acceptance, OS IME, actual browser
zoom and spoken assistive checks remain open. Classic-scrollbar Chrome on macOS
and automated WebKit do not certify those devices.

## Promotion and concurrent work

PDF's separate AI work, Drop's unpublished native commits and Roll's native beta
history are excluded using isolated checkouts. Original work is preserved. Product
fixes are verified locally; individual PR/deployment status is recorded below.
Roll's dev contains native commits absent from main. Website-only PR #14 is ready;
the user has been asked to approve that exceptional branch path before merging.

- Yard: pending commit/promotion.
- PDF: [PR #229](https://github.com/cloakyard/cloakpdf/pull/229); release verification pending.
- IMG: [PR #29](https://github.com/cloakyard/cloakimg/pull/29); release verification pending.
- Resume: [PR #57](https://github.com/cloakyard/cloakresume/pull/57); release verification pending.
- Drop website: [PR #58](https://github.com/cloakyard/cloakdrop/pull/58); release verification pending.
- Roll website: [PR #14](https://github.com/cloakyard/cloakroll/pull/14), merge decision pending.
