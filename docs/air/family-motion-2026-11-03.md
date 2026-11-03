# Family phone UX and coherent motion — 2026-11-03

Scope: Cloakyard, CloakPDF, CloakIMG, CloakResume, CloakDrop website and CloakRoll website. Native apps and KERR are unchanged. Air 1.5.0 owns the portable policy and implementations; standalone products have local copies.

**Verdict: PASS for this bounded automated web audit.** Physical-device and spoken-assistive gates remain open.

## Review findings

| Before                                                                                                       | After                                                                                                                                                           | Why                                                                                        |
| ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Keyboard dismissal and several React mounts skipped motion; individual components used different lifecycles. | Dialogs enter in 240ms and exit in 160ms for touch, pointer and keyboard.                                                                                       | The same action has the same visible result. Focus and controls are available immediately. |
| Working panes disappeared before users could follow the change.                                              | Compact panes enter from 12px below and remain mounted for their 160ms exit; Resume section views crossfade.                                                    | Preserve context without animating layout height or moving the photo itself.               |
| Custom pickers, native disclosures and update notices appeared abruptly.                                     | Shared 180ms entry/160ms exit, with opacity/transform only and native details semantics.                                                                        | One small-surface vocabulary across every website.                                         |
| A retained IMG tool could register a stale pending bake.                                                     | Only the active tool owns pending apply; outgoing controls are inert.                                                                                           | Presentation cannot change exported output or duplicate an edit.                           |
| IMG dialogs mounted already open bypassed the library’s starting attribute.                                  | CSS starting-style covers first mount too.                                                                                                                      | First opening and later openings follow the same timing.                                   |
| Touch Export did not reliably focus its trigger.                                                             | Focus the source control before opening; restore it on dismissal.                                                                                               | Safari/touch focus has a concrete return destination.                                      |
| Native opening visibility could briefly prevent immediate field focus.                                       | Opening changes visibility immediately while opacity fades; closing retains discrete visibility. Reduced-motion specificity covers both open and closed states. | Keyboard input must never wait for a decorative transition.                                |
| PDF used an outlined header X while the other editors used quiet dismissal.                                  | Shared quiet header dismissal is explicit in Air and applied to PDF.                                                                                            | Equivalent actions should have equivalent emphasis.                                        |
| Separate immediate-menu and timer-presence rules drifted.                                                    | Remove obsolete modality listeners, timer hook and duplicate CSS.                                                                                               | No new runtime dependency or animation framework.                                          |

Native file-picker and menu-to-dialog handoffs retain immediate teardown when required to preserve user activation and release the previous focus trap. Invalidated hints disappear immediately rather than displaying stale advice. Typing, selection, dragging and applied output remain immediate. Reduced motion settles every surface immediately, including a live preference change. Older engines without details-content transitions keep native disclosure behavior.

## Validation

Three rounds covered real phone opens/closes, interruption/focus/transaction regressions, then production family comparison and enlarged-text/desktop regressions. Representative phone home, privacy and dialog captures are in [the evidence directory](evidence/surface-motion-2026-11-03).

| Check                     | Result                                                                                                                                                                                                                                                                                            |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Presence matrix           | 170 Chrome/WebKit observations across 320, 390, 430, 844 landscape, 768, 1024, 1280 and 1440 widths, light/dark.                                                                                                                                                                                  |
| Final focused regressions | 38 development checks including same-turn disclosure focus, interrupted reversal, repeated close, disposal and live reduced motion; 36 final production checks.                                                                                                                                   |
| Public family comparison  | 648 home layouts, 288 secondary layouts and 390 interactions; zero deviations/errors.                                                                                                                                                                                                             |
| Privacy                   | 408 layouts and 22 navigation journeys, including 200% text; zero deviations/errors.                                                                                                                                                                                                              |
| PWA notices               | 396 real-worker layouts with 162 captures; PDF/Resume/IMG match. PDF additionally passed 44 deferred-update layouts and actual editor/export/two-tab/standalone/race checks; IMG passed actual two-tab editor protection and explicit home update. Resume worker tests are in its 373-test suite. |
| IMG                       | 488 units; 416 all-tool observations per engine across 26 tools, phone/tablet/laptop/200% text; 20 normal-motion Apply/Cancel/history/PNG journeys; 8 normal-motion control/Tap-to-fix journeys; 12 exported PNG pixel hashes/dimensions/transparency equal preceding production.                 |
| PDF                       | 461 units; modal, responsive motion, keyboard interactions, command palette and comprehensive export suites; 12 normal-motion phone journeys with real PDF downloads.                                                                                                                             |
| Resume                    | 373 tests in 10 files, no skips; 16 normal-motion close/reopen/autosave/reload journeys; 12 normal-motion persistent-preview and modal-handoff journeys, including 200% text, in Chrome/WebKit.                                                                                                   |
| Reference and packaging   | 24 reference tests, 8 native-reference motion journeys, generated-bundle checks, standalone portability, lint/type/build/deployment-size and applicable dead-code gates pass. Drop's isolated web checkout builds identically to the reviewed website. Roll worker dry-run passes.                |

The first audit caught IMG's initially-open dialog entrance and touch focus return; these are fixed. A real PDF keyboard test caught the native disclosure visibility delay; the fix is explicitly protected by the shared browser harness. Tests which encoded immediate command/dialog entry or the old DOM layout now assert the approved lifecycle and resting geometry. Earlier failed/interrupted runs were superseded by the recorded passing checks.

No dependency or animation framework was added. Removed obsolete input-modality listeners, Resume's timer-only presence hook and duplicate motion CSS/tokens. Existing output, undo/redo, consent, worker safety and native file activation remain the acceptance criteria.

Native disclosures retain their immediate platform fallback where `::details-content` transitions are unavailable. [WebKit's implementation note](https://webkit.org/blog/16574/webkit-features-in-safari-18-4/) describes this enhancement. Automated WebKit is not physical Safari acceptance: physical iPhone/software-keyboard, OS IME and spoken assistive checks remain tracked in `UX_REFRESH_TODO.md`. Native macOS apps and KERR were outside this web motion pass.

## Rollout

Product changes are merged through individual dev → main PRs:

| Product           | PR                                                      | Main commit | Live files                                               |
| ----------------- | ------------------------------------------------------- | ----------- | -------------------------------------------------------- |
| CloakIMG          | [#28](https://github.com/cloakyard/cloakimg/pull/28)    | `dbaf493`   | 89/89 exact                                              |
| CloakPDF          | [#227](https://github.com/cloakyard/cloakpdf/pull/227)  | `f961ae5`   | 130/130 exact                                            |
| CloakResume       | [#55](https://github.com/cloakyard/cloakresume/pull/55) | `73f6ae2`   | 101/101 exact                                            |
| CloakDrop website | [#57](https://github.com/cloakyard/cloakdrop/pull/57)   | `9f69916`   | 16/16 exact                                              |
| CloakRoll website | [#11](https://github.com/cloakyard/cloakroll/pull/11)   | `001977c`   | 8 exact; 3 existing Cloudflare HTML injection exceptions |

Cloudflare built the merged main commits; initial reads during its build queue served the preceding release and were superseded by the passing asset comparisons. Roll's exception removes exactly one existing challenge-platform script per HTML page and requires every remaining byte to match. The complete 347-file report is saved in `evidence/surface-motion-2026-11-03/product-live-assets.json.gz`.

The deployed products passed another 36 Chrome/WebKit phone motion checks and the 648 home/288 secondary/390-interaction family comparison with zero deviations/errors. This pre-merge comparison used Cloakyard's identical reviewed production preview alongside the five live product domains; Yard's own live verification is recorded in #44. The compressed reports are saved alongside asset evidence.

Product remote dev/main are synchronized. Drop's isolated web checkout is removed; its local dev contains merged main plus the eight previously unpublished commits, this task's equivalent website commit and synchronization merge. That local history was not pushed. Resume's unrelated worktrees are untouched.

Cloakyard [#44](https://github.com/cloakyard/cloakyard/pull/44) carries the canonical contract, implementation and final audit record. Its description records its own post-merge exact-main checks, live asset parity and final live family checks. Physical iPhone/software-keyboard, OS IME and spoken assistive acceptance remain open.
