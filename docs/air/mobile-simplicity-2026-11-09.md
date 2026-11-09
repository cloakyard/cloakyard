# Mobile simplicity, motion and dependency audit — 2026-11-09

Status: implementation, all applicable browser gates and visual review passed.
Drop #59, Resume #60, IMG #32 and PDF #232 are deployed with exact-main checks
and 334 exact live files; their remote dev branches include main. Yard #49 carries
this canonical update and records its own post-merge verification in its description.
Roll website-only #15 awaits the branch exception; its unrelated native dev
history remains excluded. Do not infer physical-device acceptance.

Scope: all six websites and all applicable views. Native Drop/Roll/KERR UI is
excluded. Original PDF AI changes and unpublished native branches remain untouched.
Persistent isolated family: `/Users/sumitsahoo/Developer/.air-mobile-2026-11-09`.

## Changes and findings

Air 1.7.0 defines a shared unboxed compact header: home at the leading edge,
Export and More actions at the trailing edge. Task navigation may use the middle.
PDF retains page navigation; IMG retains photo history; Resume uses one Preview/Edit
switch. Desktop composition and the IMG canvas exception remain intentional.

PDF's redundant Expand/Split controls and hover document popover are removed.
Its phone/tablet tools share the 48px X/tick completion pair already used by IMG.
Inspection and deferred-mark tools retain Close; autosaved Resume retains Close.
Tool headings stay fixed while their bodies scroll. At least 40% of the compact
working region remains preview; enlarged Resume fields can use the remaining 60%.
IMG's compact floating toolbar skin and duplicate menu-row styles are removed.
The interactive Air reference no longer teaches the obsolete Expand-controls pattern.

Real regressions found and fixed: PDF completion registration now precedes paint,
preventing a fast tap on Bookmarks from changing Close into Apply mid-click. Header
focus follows history controls into Actions when crossing a breakpoint; disabled
history remains focusable with guarded activation. Resume's enlarged-text writing
pane gains enough space for the focused growing bullet field. Tests wait for actual
modal exit and responsive mounting rather than interacting with an inert background.

## Per-view coverage ledger

All-layout shell matrices use 320×568, 375×812, 390×844, 430×932, 844×390,
768×1024, 1024×768, 1280×720, 1366×768, 1440×900 and 1920×1080, in both themes.
Tool-specific matrices additionally cover breakpoint neighbours and 32px root text.
Counts are observations, not a percentage guarantee.

| Views                                                           | Fresh passing coverage                                                                                                                                                                                                               | Remaining / limits                                                                                                        |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| Six landing pages, navigation, footer, secondary/recovery pages | 648 public + 288 secondary cases; 408 privacy layouts + 22 journeys                                                                                                                                                                  | Physical browsers and assistive review remain open                                                                        |
| PDF/IMG/Resume workspace, fields, controls, dialogs             | 66 Chromium + 66 WebKit cases against isolated canonical controls; 24 compact follow-up cases                                                                                                                                        | History/focus navigation regression passed; physical-device acceptance remains open                                       |
| Shared PWA notices                                              | 396 real-worker cases, 162 captures, matching presentation and work protection                                                                                                                                                       | Only the three actual PWAs; no fabricated notices on static sites                                                         |
| Dialog close controls and classic scrollbars                    | 264 Chromium/WebKit cases, including actual native scrollbar dragging and fixed header/actions                                                                                                                                       | Physical Windows remains untested                                                                                         |
| PDF tools, standalone flows, export and AI edge states          | 22 tools mounted in combined real editor suites; 16 phone commit/cancel/double-tap/export journeys in both engines; six standalone tools; 64-case export/AI state matrices; 88 collection and 68 canvas cases; seven extended suites | 176 tool selections and 148 navigation layouts passed; raw private fixture output stays local                             |
| PDF upgraded model runtime                                      | Real Quality/Compact inference, exact contact extraction, warm reload, model switch, memory release/reload passed                                                                                                                    | Existing approved Compact long-document limitation remains; this short-fixture run does not re-certify all long documents |
| IMG tools and custom controls                                   | 1,680 Chromium and 480 WebKit states across all 26 tools; 26-tool rail sweep; real MediaPipe 1.2.2 face detection/anonymization; 8 compact action and 20 navigation/history journeys                                                 | 204 entry layouts plus eight custom-control journeys passed                                                               |
| IMG batch and output                                            | 176 states and 44 real two-file ZIP downloads; 12 PNG downloads match the pre-upgrade build pixel-for-pixel                                                                                                                          | Physical photo-library acquisition remains open                                                                           |
| Resume writing, library, review and Actions                     | 1,666 section layouts, 386 library layouts, 960 review layouts, 192 Actions states; full production suite 373/373 including actual template/output/browser checks                                                                    | Actual OS keyboard/IME and assistive speech remain open                                                                   |
| Motion across all six sites                                     | Each engine: 132 moving artwork layouts, 24 fallbacks, six lifecycle journeys; 230 presence/workflow observations; PDF responsive motion suite                                                                                       | Physical-device frame pacing/battery not established                                                                      |
| Reference shader                                                | Shaders 4.0.7 guarded adapter build; real WebGPU first draw and idle settlement; seven lifecycle tests                                                                                                                               | This is reference-only, not a landing runtime addition                                                                    |

Visual review uses captured editor/tool and public-page contact sheets, with targeted
full-size inspection. It covers equivalent control roles while preserving different
product content. Raw evidence is under the isolated family's `evidence/`; selected
portable receipts and reviewed contact sheets are in
[`evidence/mobile-simplicity-2026-11-09`](evidence/mobile-simplicity-2026-11-09/manifest.json).

## Dependency and cleanup record

Fresh registry checks upgraded all six web dependency graphs. Vite+ 1.5.0, pnpm
12.18.0, npm 12.2.2, Astro 7.4.7, PDF.js 6.5.438, Transformers 4.3.2, MediaPipe
1.2.2, Harper 3.0.0, Tailwind 4.3.5, Lucide 1.70.0 and Wrangler 4.158.0 are included.
All six current security audits report zero known vulnerabilities. Stale package
age exclusions and obsolete skins/references are removed. PDF's dead-code gate
passes; existing deliberate compatibility overrides are retained where needed.

One demonstrated exception: the Astro websites retain TypeScript 6.0.3. Their
current `astro check` rejects stable TypeScript 7.0.2; an isolated real invocation
recorded that diagnostic. See [Astro's checker compatibility change](https://github.com/withastro/astro/pull/18053).
Do not describe its zero exit code as a passing typecheck. Both sites pass their
actual TypeScript 6 checker, production build and worker dry run.

The official yt-dlp bundle exception concerns the native app and remains unchanged.
No native dependency or unpublished native change is included in this web pass.

## Motion review

Approved for the tested browser paths: entrances explain a new layer; exits retain
focus/inertness until completion. Shared durations remain 180ms for disclosures/
notices, 240ms for dialogs/panels and 160ms exit. Reduced-motion and constrained
artwork settle without decorative movement; replay cannot queue during the initial
sequence. Existing source animations use transform/opacity, with measured progress
and direct manipulation kept responsive. Removed expansion controls no longer
resize away the preview. Retained timers serve cleanup, debouncing or real loading,
not guessed dialog handoffs. IMG batch-step details now use retained 180ms entry/160ms exit with an inert closing
body; 12 dedicated motion/reduced-motion cases and the full batch matrix pass.
Canonical product notes now reference current motion
and bottom-right notices instead of superseded immediate/in-flow instructions.

Physical iPhone/Windows, software keyboards/OS IME, actual browser zoom and spoken
assistive review remain untested; browser emulation cannot close those gates.

## Rollout record

| Website     | Release PR | Main commit                                          | Verification                                                                                         |
| ----------- | ---------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| CloakDrop   | #59        | `7440bb015d439f65c501aa1b6b902f5102c9958c`           | Exact-main checks; 14 exact live files                                                               |
| CloakResume | #60        | `69e29c3d56be2b4e50b814228689898fff761dd5`           | Exact-main checks; 101 exact live files                                                              |
| CloakIMG    | #32        | `2d956df13ae073b2186d8d6997ada629ab2a359b`           | Exact-main checks; 89 exact files; eight live completion journeys and 12 pixel-identical PNG exports |
| CloakPDF    | #232       | `82d75521e628a3e90045d15356d6ac1aed4f5b61`           | Exact-main checks; 130 exact files; 16 live phone transaction/PDF-download journeys                  |
| Cloakyard   | #49        | Recorded in release PR                               | Canonical audit/contract/dependencies; post-merge checks in PR description                           |
| CloakRoll   | #15        | Candidate `67bc9674cce5ff68a4e407bb901d899d2204ddee` | Website/preview checks pass; awaiting branch exception before merge                                  |

Final production interaction verification passes: 24 Chromium + 24 WebKit
cross-editor layouts compare real field/button/dismiss states to canonical Air.
Sixteen PDF phone transaction/download journeys, eight IMG completion journeys
and 12 IMG PNG exports also pass; all 12 live PNG pixel hashes match both the
tested build and pre-upgrade baseline. An initial cross-editor attempt overlapped
PDF deployment and stopped during loading; the completed rerun above follows the
exact-main build and exact-file checks.

The clean original IMG/Resume dev checkouts are fast-forwarded and installed from
the frozen lockfiles. PDF's original dirty AI work and Drop's unpublished native
history remain untouched. Roll's additional 11 native dev commits stay off main.
