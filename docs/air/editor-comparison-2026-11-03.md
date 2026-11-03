# Full-view editor comparison — 2026-11-03

This pass compares CloakPDF, CloakIMG and CloakResume inside their real working
views, including secondary flows, controls, pickers and output. App comparisons
now explicitly require a per-view coverage ledger in `AGENTS.md` and `CLAUDE.md`.
Public-page evidence establishes public-page consistency only.

## Findings and bounded fixes

- PDF's regular inspector heading was 14px and its compact heading 13px. They now
  use Air's 20px regular / 14px compact hierarchy; supporting copy uses body size.
  Its model picker also had one obsolete `thin-scrollbar` reference; it uses the
  shared `air-scroll` treatment now.
- IMG's object-placement button is “Place watermark”, distinguishing placement
  from the tool's Apply action. A real image-watermark journey exposed an invalid
  native Scale field: `min=3.333…` with `step=0.1` rejected the default 10%, blocking
  Apply. The minimum now matches the displayed one-decimal percentage, 3.3%.
  The underlying size clamp and image renderer are unchanged.
- Resume's date popup lacked the Air popover layer. In compact layouts, following
  form fields painted over it and intercepted taps. It now uses
  `--air-z-popover`, as its logo/colour pickers already do. The test checks actual
  hit ownership, not only geometry. Stale in-flow update-banner guidance is removed.
- PDF's older browser drivers measured entering panels or tapped behind a retained
  offline notice. They now await settled motion and dismiss the real notice before
  using the covered control. Resume's date driver waits for its popup to exit.
  WebKit and Chromium serialize CSS shorthand differently; shared assertions use
  the outline's width/style longhands.

No processing engine, document data, template, AI model or native app changes.
Air remains **1.6.0**: these fixes implement its existing rules, including the
compact notice and scrollbar specification from the preceding pass.

## Equivalent roles, deliberate compositions

The real field measurements agree across the three editors: Geist, 10px radius,
1px neutral contour, one 2px focus outline and no duplicate shadow; 16px touch
input text and 14px desktop input text. Primary actions remain neutral. Dialog
close targets use the same 44px dismiss component. The canvas surround changes
with the theme while actual paper and photo colours remain output-accurate.

The approved Air variants remain intentional: PDF/IMG use a right inspector;
Resume uses a left writing panel and autosave. IMG retains its approved floating
canvas toolbar and compact local X/tick pair. PDF keeps labelled Cancel/Apply;
Resume's writing panel uses Close because it autosaves. These task boundaries
must not be replaced merely to make screenshots identical.

## Coverage ledger

“Fresh” means this pass. “Retained” means passing evidence from the same deployed
foundation, linked explicitly; it is not represented as a new run.

| View / state                                                                   | Coverage and result                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Actual editor, active controls, keyboard focus and dialog dismissal            | Fresh 48 shared cases in Chrome/WebKit at 390×844, 768×1024, 1280×720 and 1440×900, light/dark. Populated Resume and real image/PDF fixtures; side-by-side captures.                                                                                                                       |
| PDF all 22 inspector tools and canvas                                          | Fresh 616 layouts per engine across all eleven required sizes and enlarged text. Mobile tool transactions, 176 navigation, 88 collection and 68 canvas layouts pass.                                                                                                                       |
| PDF standalone, search, history/collections, modals, AI edge states and export | Fresh six non-AI standalone workflows and all 16 smoke suites pass, including real downloads, failed reads/retry, keyboard/IME events, modal focus, chat state simulation and source navigation. No claim of re-running model-quality evaluation.                                          |
| IMG all 26 tools, canvas and export dialog                                     | Fresh 780 observations per Chromium/WebKit engine. Entry/batch suite adds 204 layouts, eight behavior checks and real PNG fidelity.                                                                                                                                                        |
| IMG editing, placement, cancellation and output                                | Fresh 20 Chrome/WebKit transaction journeys and real PNG downloads; 12 production-build text/image-watermark journeys. 36 decoded PNG comparisons against preceding production match exactly.                                                                                              |
| Resume every section and custom writing controls                               | Fresh 1,666 empty/populated section layouts, 384 writing-field and 128 contact-select layouts.                                                                                                                                                                                             |
| Resume overlays and secondary workflows                                        | Fresh 256 date layouts with actual hit ownership, 320 logo/photo layouts, 386 template-library layouts, 194 review/progress edge states and 192 Options layouts.                                                                                                                           |
| PWA update/offline states, classic scrollbars and dialog shells                | Retained [Air 1.6 audit](compact-popups-2026-11-03.md): 396 real-worker layouts, 264 Chrome/WebKit dialog cases, classic thumb drag/wheel and 48 live editor-dialog checks. The shared notice/scrollbar code is unchanged in this follow-up.                                               |
| Six public sites: landing, privacy, recovery, header/footer and hyperlinks     | Retained [all-layout audit](all-layout-audit-2026-11-03.md) and [compact-popup audit](compact-popups-2026-11-03.md), including 936 public layouts and six-site privacy coverage. Yard/Drop/Roll have no browser editor or fabricated PWA notice. Native apps remain outside this web pass. |
| Source/output/dead-code gates                                                  | PDF 461, IMG 488 and Resume 373 tests pass, with check/build, applicable Knip, Air provenance and portability checks. No runtime dependency is added by the new comparison harness.                                                                                                        |

The broad matrices include 320, 375, 390, 430, 844 landscape, 768 tablet portrait,
1024 tablet landscape, 1280 laptop, 1366 laptop, 1440 and 1920 desktop, light/dark,
and additional breakpoint/enlarged-text cases. Selected cross-app screenshots
cover all four viewport classes. These are rendered audits, not visual approval
of every possible user document or combination of controls.

## Evidence and limits

The portable comparison command is `node scripts/test-air-editors.mjs`, with
`PLAYWRIGHT_MODULE`, `AIR_EDITOR_URLS` (PDF, IMG, Resume), `AIR_PDF_FIXTURE` and
`AIR_EVIDENCE_DIR`; set `AIR_BROWSER=webkit` for the second engine. It complements,
not replaces, the product-specific suites listed above.

Selected [comparison images and receipts](evidence/editor-comparison-2026-11-03/)
are committed. Full raw results and logs remain in
`/tmp/air-editor-comparison-2026-11-03`. Production parity covers base, placed and
cancelled watermark outputs. IMG's pre-existing older-history WebP compression
is preserved; this is not a claim that Undo is pixel-lossless. The earlier
approved Compact PDF model limitation is unchanged.

Physical Windows/iPhone, software keyboards, OS IME, actual browser zoom and
spoken assistive acceptance remain open. Emulated WebKit, event-based IME checks
and enlarged root text do not close those gates.

## Promotion

Roll website-only PR #14 is merged and production-verified under the user's
explicit branch exception. Its native dev includes main; unrelated native beta
work remains unreleased. See the preceding audit's updated release receipt.

PDF, IMG and Resume changes are committed only after their required checks pass.
Production is verified after [PDF #230](https://github.com/cloakyard/cloakpdf/pull/230),
[IMG #30](https://github.com/cloakyard/cloakimg/pull/30) and
[Resume #58](https://github.com/cloakyard/cloakresume/pull/58), each dev → main.
Exact-main CI and Cloudflare builds pass. All 320 production files match the tested
builds (PDF 130, IMG 89, Resume 101), and each product's remote dev/main is synchronized.
The initial Cloudflare queue delayed publication; no source or build failure required
a code change or bypass.

The final live pass repeats all 48 cross-editor cases in Chrome/WebKit, all four
viewport classes and both themes. Resume adds 48 live date layouts with hit testing;
IMG adds 12 live watermark journeys and 48 decoded PNG matches against the tested
build. No page errors or asset mismatches remain. Exact commits, check URLs and
receipt hashes are in the [release receipt](evidence/editor-comparison-2026-11-03/release.json).

[Yard #48](https://github.com/cloakyard/cloakyard/pull/48) carries the comparison
harness, evidence and contributor guidance; its own final main checks, unchanged
homepage payload verification and dev synchronization are recorded in the PR
description. Original PDF AI work and Drop's unpublished native history are
preserved. Task previews on 8511–8514 are stopped; raw evidence remains in scratch.
