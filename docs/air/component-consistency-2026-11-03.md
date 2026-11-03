# Component-state consistency — 2026-11-03

This follow-up compares actual public pages, editor interiors, tools and overlays.
Shared component roles must match the portable Air reference. The approved canvas,
inspector and autosave compositions retain their task-specific arrangements.
Air remains 1.6.0; these corrections implement its existing specification.

## Findings

- IMG's local `btn*` and `control-field` families duplicated Air and drifted in
  secondary contours, primary hover opacity, quiet-action colour, compact text and
  field hover. All consumers now use the pinned Air primitives. The obsolete skin
  rules and unused large-button variant are removed; only compact geometry remains.
- IMG's global focus offset is 3px. Its vertical tool rail uses `air-scroll`;
  intentional horizontal preset strips retain their existing touch composition.
  Smart-action error dismissal uses the shared 44px target and 18px icon.
- Resume's global/editor focus overrides used a 2px offset. They now use 3px;
  ordinary Air buttons inherit their shared rule. Template choices match as well.
  The browser test now expects the specified 3px ring and still checks clipping.
- PDF's anchored select gap was 4px. It is now 8px, with real keyboard, Escape,
  focus-return and viewport-containment checks at every required size.
- The visual comparison also found PDF’s short landscape tool panel forcing an
  18rem minimum and shrinking the document preview. Below 500px height it now
  keeps the default half-column split; Expand remains available for the controls.
  Both engines pass 88 additional landscape/enlarged-text tool observations;
  16 action/download journeys verify Apply, Cancel, Undo/Redo and the split.
- The comparison harness now measures default, hover and settled keyboard focus
  against an isolated copy of the portable CSS. Modal Tab-wrap settling and lazy
  tool-panel readiness are awaited. Heading assertions read the actual regular/
  compact variant; viewport width alone is not a reliable proxy for composition.
- The preceding editor audit's prose incorrectly called the UI font Geist. The
  measurements always recorded the native system stack; the prose is corrected.

No document/image processor, résumé template, AI model or native app is changed.
No runtime dependency is added. Historical evidence is preserved; old class names
inside dated logs are historical, not active CSS consumers.

## Coverage ledger

Release verification is in progress. The following completed checks are fresh
in this pass; final deployment receipts remain pending.

| View or component                                                                 | Evidence                                                                                                                                                                                                                              |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Six public sites, header/footer, hyperlinks, recovery and secondary reading views | 648 home + 288 secondary layouts; no deviations or browser errors.                                                                                                                                                                    |
| Six privacy pages, home/contents navigation and text reflow                       | 408 layouts and 22 navigation journeys; no deviations.                                                                                                                                                                                |
| Actual PWA update/offline states                                                  | 396 disposable-worker layouts and 162 captures, equal across PDF/Resume/IMG.                                                                                                                                                          |
| Dialog shells, close targets, classic scrollbars, body and action reachability    | 264 Chrome/WebKit cases on final builds, all eleven sizes, both themes and enlarged text.                                                                                                                                             |
| Shared editor fields, primary/secondary buttons and dismiss controls              | 132 Chrome/WebKit cases, 1,320 default/hover/focus observations across all eleven sizes; no component differences or browser errors. Six further cross-app landscape cases pass after the PDF layout refinement.                      |
| PDF all 22 tools and canvas                                                       | 616 observations per engine, all eleven sizes and enlarged text.                                                                                                                                                                      |
| PDF standalone, search, collections, modal/export and AI edge states              | All 16 smoke suites pass, including actual downloads and simulated error/retry states. Model quality is not re-evaluated.                                                                                                             |
| PDF select                                                                        | 44 layouts and keyboard journeys; every observed trigger gap is 8px.                                                                                                                                                                  |
| IMG all 26 tools                                                                  | 780 observations per Chrome/WebKit engine; no deviations, errors or unexpected model downloads.                                                                                                                                       |
| IMG entry/batch, project/blank/export and custom controls                         | 204 entry layouts and real PNG fidelity; 26-tool hybrid-touch sweep; desktop/phone modal journeys; eight switch/radio/colour/menu interaction journeys.                                                                               |
| IMG actual image/text placement, cancellation and download                        | 12 Chrome/WebKit journeys; 48 decoded PNG hashes exactly match the preceding production-equivalent build.                                                                                                                             |
| Resume all 13 content sections                                                    | 1,666 empty/populated layouts and 16 contrast pairs; no page errors.                                                                                                                                                                  |
| Resume template library                                                           | 386 layouts and eight contrast pairs pass.                                                                                                                                                                                            |
| Product feature/output checks                                                     | PDF 461, IMG 488, Resume 373 tests pass; Resume uses its production build. Root reference suites: 27 pass.                                                                                                                            |
| Other secondary widgets                                                           | Retained detailed writing/contact/date/logo/photo/review/Options receipts in [the preceding full-view audit](editor-comparison-2026-11-03.md), supplemented by fresh production browser regressions and current dialog/section tests. |

Required sizes: 320×568, 375×812, 390×844, 430×932, 844×390, 768×1024,
1024×768, 1280×720, 1366×768, 1440×900 and 1920×1080. Both themes, coarse
and fine input, breakpoint neighbours and enlarged-text cases are included in
applicable suites. Public sites have no fabricated browser editor; Drop/Roll
native applications and KERR remain outside this web pass.

## Evidence, acceptance and rollout

Raw runs, failed diagnostic attempts and final receipts are retained in
`/tmp/air-components-2026-11-03`. Initial incomplete runs are not counted as passes.
Selected [comparison images and compressed receipts](evidence/component-consistency-2026-11-03/) are saved alongside this audit.
Visual review covers public pages, populated editors and overlays; it does not
claim every possible user document or combination of values has been inspected.

Physical Windows/iPhone, software keyboards, OS IME, real browser zoom and spoken
assistive acceptance remain open. Emulated WebKit, event-driven keyboard checks
and 32px root text do not close those gates. The separately approved PDF Compact
beta model limitation is unchanged.

Promotion is pending final checks. The original PDF checkout's unrelated AI work,
Drop's unpublished native history and Roll's native beta history remain isolated.
