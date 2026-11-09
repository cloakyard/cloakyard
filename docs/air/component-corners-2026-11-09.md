# Component corners — 2026-11-09

Status: all-view component review, corrections and product website rollout pass.
The canonical PR records its own final main/deployment receipt after merge. This record is not a physical-device sign-off.

The approved CloakRoll website-only PR #15 is merged at `f81c19f`. Exact-main
Website/Cloudflare checks pass. Production matches seven raw files and three HTML
files after removing only the existing Cloudflare challenge injection. Dev
`6ee0140` includes main; its native tree matches its previous head. Its unrelated
native work remains unpublished. Yard #49 is also merged and verified.

## Changes

Air 1.7.1 makes the existing radius roles explicit: controls 10px; chips/tabs 8px;
menus 12px; cards and boxed feedback 18px; dialogs 20px; attached working panels
flush. Modal phone sheets keep 20px top corners and square bottom corners.
Three small geometry helpers serve custom compositions without adding another
component framework or restyling document/image output.

IMG's model choices, layer actions, HSL controls, status badges, feedback cards,
batch tiles, recent-image cards and small palette swatches now follow those roles.
Its attached mobile tool pane is flush with the workspace. Shared AI feedback
Cancel/Retry actions use the same Air controls. Five unused exports are made
file-private; the functions/constants themselves remain live and unchanged.

PDF's smallest calendar adopts sheet corners. A focused test also exposed a
scrollbar consuming enough width to shrink its seven day targets below 44px.
The grid now uses the full scrollport on that phone size, keeping the normal
header padding and vertical scrolling. Range/disclosure corners no longer change
when focused. Resume's library clip derives its 17px inner corner from the 18px
card minus its actual 1px border.

The cross-editor comparator checks all four corners in default/hover/focus states.
An optional observer records actual corners while the existing all-view browser
suites run. Its semantic checks distinguish controls, chips, cards, popovers,
attached panels, sheets, circular swatches and derived clips. Unknown roles remain
listed for source/visual review; they are never silently counted as conforming.
A negative test proves that one asymmetric corner and an old 4px layer action fail.

The enlarged-text IMG sweep also found split words in Selective colour and Remove
BG controls, and a cramped multi-line ID-photo shortcut. Reset/model actions now
wrap as whole controls; the shortcut has separate help text and a clear background
action. The Remove BG primary action retains its intrinsic wrapped height; the
button clipping check now includes icon/label children. That stronger sweep exposed
four more direct inspector actions compressed by their scroll container. A single
composition rule now preserves direct action height while the inspector scrolls;
final strengthened sweeps verify the affected layouts.
Crop flip/rotate actions also reflow by available content width so labels keep
whole words at enlarged text. The direct-text check covers icon buttons too.
The original ten failing observations are retained, with passing reruns
replacing those affected tool states in the effective coverage receipt.

The long PDF collection test previously checked scroll geometry before its
requestAnimationFrame restoration finished. It now waits for the same visible
outcome; the unchanged ownership and visibility assertions pass with and without
the observer. No production collection behavior changed.

## Coverage ledger

All six websites are included. Work is isolated under
`/Users/sumitsahoo/Developer/.air-mobile-2026-11-09`; original PDF AI work and
Drop/Roll native history remain untouched.

| View                                               | Evidence in this pass                                                                                                                                            | Status                                     |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| Six homepages, header/footer, reading and recovery | 648 home + 288 secondary layouts; both themes, all required sizes and text reflow                                                                                | Passed                                     |
| Six privacy surfaces and return navigation         | 408 layouts and 22 journeys                                                                                                                                      | Passed                                     |
| PDF/IMG/Resume editor controls                     | 66 Chromium + 66 WebKit cases; canonical default/hover/focus comparison; another 54 after product fixes                                                          | Passed                                     |
| Dialogs, close actions, native scrollbars          | 264 cases, both engines, eleven sizes, both themes, normal/enlarged text; native thumb drag and wheel scrolling                                                  | Passed                                     |
| PWA notices                                        | 396 real waiting-worker layouts and 162 captures, all three PWAs                                                                                                 | Passed                                     |
| PDF tools, collections, export and model-state UI  | 176 tool selections/148 navigation layouts, 88 collection layouts, actual export/redaction downloads, 64-case export and AI-state matrices                       | Passed                                     |
| PDF calendar and metadata                          | 28 metadata/calendar layouts plus 44 built browser cases; output, recovery, drafts, keyboard and mobile Apply                                                    | Passed                                     |
| PDF standalone flows                               | Six actual non-AI processing workflows                                                                                                                           | Passed                                     |
| IMG tools                                          | All 26 tools: 1,560 effective Chromium and 512 WebKit observations (480 base plus corrected enlarged-text states); final reruns replace matching affected states | Passed                                     |
| IMG entry/recovery/batch                           | 204 entry states, 176 batch states and 44 actual ZIP downloads                                                                                                   | Passed                                     |
| IMG feedback/edge components                       | Ten actual-component layouts; corner, overflow, touch-target and callbacks                                                                                       | Passed; fixture states, no inference claim |
| IMG transactions and output                        | Eight completion journeys; 12 real PNGs identical to baseline decoded pixels, repeated after fixes                                                               | Passed                                     |
| Resume sections/library/review/Actions             | 1,666 section, 386 library, 960 review and 192 Actions observations; 16 fresh library clip checks                                                                | Passed                                     |
| Surface motion/workflows                           | 74 real browser observations across phone/tablet/laptop/desktop and both engines                                                                                 | Passed                                     |
| Code/output gates                                  | IMG 488, PDF 461, Resume 373 tests; Yard 18 reference/radius tests; applicable type/build/design/portability/dead-code checks                                    | Passed                                     |

Required dimensions are 320×568, 375×812, 390×844, 430×932, 844×390,
768×1024, 1024×768, 1280×720, 1366×768, 1440×900 and 1920×1080.
The all-tool Chromium sweep adds 32px text at phone and laptop widths. WebKit's
all-tool pass covers 390/768/1280/1440; the corrected controls also cover enlarged
laptop text. The shared editor/dialog/calendar matrices cover all eleven sizes in
both engines. Do not describe a smaller product-specific subset as all eleven.

Visual review compares public header/footer grids across all six products,
PDF/IMG/Resume editors, controls and dialogs in both themes, all 26 IMG tool
inspectors across phone/tablet/laptop/desktop, Resume section/library/review
surfaces, and focused final calendar/feedback/reflow captures. Contact sheets are
selected evidence; the raw matrix includes initial and scrolled states. Unchanged
finite landing artwork retains the preceding Air 1.7.0 progression/static/replay
evidence; this pass adds fresh public layouts and surface-motion checks.

Source review distinguishes compact inline notices and field/readout groups (the
shared 10px control geometry) from standalone feedback cards (18px). It includes
native circular radios/thumbs, capped progress tracks,
functional colour readouts/curves, preview-paper corners, resume output and Roll's
film artwork. These are explicit role exceptions, not inconsistent button/card
skins. Output templates, pixels, SVG artwork and native app UI are unchanged.

Raw captures, observer NDJSON, logs and receipts are in `evidence/radii` under the
isolated family. [Portable evidence](evidence/component-corners-2026-11-09/manifest.json)
contains compressed check receipts and 28 reviewed captures. The semantic corner
report checks 595 distinct role/class entries with zero corner failures across
more than 448,000 observations. Its 196 unclassified entries remain visible and
are addressed by the source/exception review; they are not counted as automated
role passes. The effective IMG receipt preserves the initial ten reflow and
18 nested-label failures, replacing affected states only after passing reruns.

The production smoke run passes 48 public/privacy-return/menu/support journeys.
A further 24 editor cases compare live PDF/Resume to the final local IMG build;
final asset verification and post-merge checks are recorded in the release PRs.

Physical Windows/iPhone, software keyboards, OS IME, actual browser zoom and spoken
assistive acceptance remain open. Emulated WebKit, classic scrollbar tests and
32px root text do not replace those checks. The approved pre-existing PDF Compact
long-document limitation and native official-bundle exception are unchanged;
this CSS-focused pass does not repeat full model inference or native release work.

## Rollout

Normal websites use dev → main PRs. Roll uses the approved website-only route;
main is merged into dev while its unrelated native history remains off main.

| Website     | PR                                                      | Verified main                           | Remote dev                                      |
| ----------- | ------------------------------------------------------- | --------------------------------------- | ----------------------------------------------- |
| CloakDrop   | [#60](https://github.com/cloakyard/cloakdrop/pull/60)   | `8b683e9`                               | Same as main                                    |
| CloakRoll   | [#16](https://github.com/cloakyard/cloakroll/pull/16)   | `db7469b`                               | `0c376c9`, includes main; native tree unchanged |
| CloakResume | [#61](https://github.com/cloakyard/cloakresume/pull/61) | `f556c92`                               | Same as main                                    |
| CloakPDF    | [#233](https://github.com/cloakyard/cloakpdf/pull/233)  | `e3dbd46`                               | Same as main                                    |
| CloakIMG    | [#33](https://github.com/cloakyard/cloakimg/pull/33)    | `6decd7e`                               | Same as main                                    |
| Cloakyard   | Canonical audit PR                                      | Final release receipt in PR description | Updated after merge                             |

Drop, Roll, Resume, PDF and IMG exact-main CI/Cloudflare checks pass. Production
file verification is retained in the release receipts; Drop, Resume and PDF match
14, 101 and 130 files respectively. IMG matches all 89 files. Roll matches seven raw files plus three
HTML files after identified challenge injection removal. The original Roll #15 approval is complete and its release receipt
is preserved separately. Native Drop/Roll/KERR interfaces are unchanged.
