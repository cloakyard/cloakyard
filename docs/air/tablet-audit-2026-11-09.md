# Tablet consistency follow-up — 2026-11-09

Status: all local gates pass; PDF #234 and IMG #34 carry the bounded fixes through
dev → main. Final main/deployment receipts are recorded below and in the PRs.
Air remains 1.7.1; the existing contract already specifies these component roles.

## Findings and changes

1. PDF's stable scrollbar gutter left two rail labels breaking inside words.
   Existing short labels now show **Sign** and **Outline**; full tool names remain
   in search, tooltips, accessible names and panel titles. The new regression
   fails 36 of 104 observations on the previous build and passes all 104 on the fix.
2. IMG's full editor Export action used a secondary button while its compact
   layout and the other editors used primary. It now uses the existing primary
   class. The canonical comparator includes Export in default, hover and focus
   states, so this discrepancy cannot silently return.
3. IMG's ID-photo Print and Save PDF actions broke words into narrow columns at
   enlarged text. Giving each existing flex item an 8rem basis lets whole buttons
   wrap. Eight real PDF downloads and prepared print windows verify both actions.

GitHub also flagged the new rail test's predictable default temporary directory.
It now uses `mkdtemp`; the default-path rerun passes all 104 observations, with
unit/type/dead-code checks repeated. This test-only correction adds no app change.

The comparator now measures the actual coarse-pointer media query instead of
inferring input type from width. `AIR_TOUCH=1` explicitly covers wide tablets.
These are small metadata/class changes; no new UI abstraction, runtime dependency,
shared skin or processing path is introduced. Dead-code checks pass.

## Coverage ledger

The main tablet matrix is **768×1024, 820×1180, 1024×768 and 1180×820**, both themes,
with emulated touch even on wide tablets. Additional sizes below verify changed
pieces on phone, laptop and desktop. Counts are observations, not distinct features.
Each named app includes its applicable secondary and working views.

| View                                                 | Fresh coverage                                                                                                                                                                      | Result                                                   |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| Yard/PDF/Drop/Resume/Roll/IMG home, headers, footers | 96 tablet observations; 288 secondary reading/recovery observations retain the harness's broader fixed matrix; 78 interactions                                                      | Pass                                                     |
| All six privacy pages                                | 96 tablet layouts and 22 home/contents/theme journeys                                                                                                                               | Pass                                                     |
| PDF/IMG/Resume editors                               | 42 Chrome + 42 WebKit final touch cases across four tablets, 390×844, 1280×720 and 1440×900; 12 additional fine-pointer cases                                                       | Pass; canonical field/action states and all four corners |
| Dialogs, close buttons, scrollbars                   | 96 cases: both engines, four tablets, light/dark, 16/32px text; actual native-thumb drag and wheel scrolling, retained header/actions                                               | Pass                                                     |
| PDF/IMG/Resume PWA notices                           | 144 real waiting-worker layouts, 36 captures                                                                                                                                        | Pass; compact identical update/offline/updating roles    |
| Six landing animations                               | Per engine: 48 moving layouts, 24 preference fallbacks, six lifecycle/replay and six cold-stylesheet startup journeys                                                               | Pass in Chrome and WebKit                                |
| Surface entrances/exits                              | 50 real-browser motion/workflow observations, tablet profiles plus fixed lifecycle cases                                                                                            | Pass                                                     |
| PDF editor tools                                     | All 22 tools, 176 selections, 24 navigation layouts; state/history/focus preserved                                                                                                  | Pass                                                     |
| PDF collections/export                               | 32 layouts and actual document downloads                                                                                                                                            | Pass                                                     |
| PDF standalone flows                                 | 208 empty/file-selected states in both engines; six non-AI tools plus Ask PDF entry                                                                                                 | Pass; no new inference claim                             |
| PDF calendar/metadata                                | 16 built-calendar cases in both engines, all four tablets/themes                                                                                                                    | Pass; 44px days and close action                         |
| PDF model-state dialogs                              | Three 64-case matrices: delete confirmation, loading and download error; cancellation/retry and real cache/index deletion                                                           | Pass; fixed helper matrix, not all four new tablets      |
| PDF rail regression                                  | 104 observations in both engines, 13 profiles including breakpoint neighbors, 16/32px text                                                                                          | Pass; original 36 failing observations preserved         |
| IMG all 26 tools                                     | Initial 720 Chrome observations across four tablets plus enlarged 768/1024; 240 WebKit observations at 768/1024; 84 final ID-photo states per engine across seven viewport profiles | 768 effective Chrome / 312 effective WebKit states pass  |
| IMG entry/recovery                                   | 40 responsive/theme/text observations and PNG fidelity checks                                                                                                                       | Pass                                                     |
| IMG batch                                            | 64 layouts and 16 actual ZIP downloads, both engines and four tablets/themes                                                                                                        | Pass                                                     |
| IMG feedback edge states                             | Ten actual-component fixture layouts, callbacks, overflow, corners and targets                                                                                                      | Pass; no inference claim                                 |
| IMG image output                                     | 12 real PNG exports in both engines at phone/tablet/desktop sizes                                                                                                                   | Exact decoded-pixel match to baseline                    |
| IMG ID-photo output                                  | Eight 32px-text tablet journeys at 768/1024 in both engines/themes; one-page 4×6 PDFs and exact-size print windows                                                                  | Pass; physical printing not tested                       |
| Resume sections                                      | 418 observations covering all 13 sections, empty/populated states, four tablets, both themes and 16/32px text, plus fixed extras                                                    | Pass                                                     |
| Resume library/review/Actions                        | 98 library, 240 review and 48 Actions observations; search, no-results, long names, selected, busy and error states                                                                 | Pass                                                     |
| Resume date/colour/photo/select popovers             | 64 date, 51 colour, 80 photo and 32 select observations; values, focus and recovery                                                                                                 | Pass                                                     |
| Required source gates                                | PDF 461, IMG 488 and Yard 18 tests; applicable type/lint/format/build/design/dead-code checks and portable bundle verification                                                      | Pass                                                     |

The IMG effective receipts retain the original 12 failing ID-photo observations.
They replace matching states only with the final successful rerun, and include
its additional profiles. They do not report the original sweep as clean. Initial
shared-editor failures caused by the old width-based input assertion, and a
standalone test-driver selector error, remain as diagnostic receipts too.

## Visual review and evidence

Rendered comparisons include all six public headers/footers and privacy shells;
all three editors, their fields/actions/dialogs in both themes and orientations;
all 26 IMG inspectors; all 22 PDF tool panels and standalone forms; Resume's 13
sections, library, review and Actions; and PWA notice grids. Focused final views
confirm the repaired rail labels, primary Export and enlarged ID-photo actions.
Contact sheets are representative visual review, while the receipts enumerate
the complete automated matrix. Native output papers/pixels and task-specific
workspace compositions retain their intentional differences.

Raw captures, logs, original failures and receipts:
`/Users/sumitsahoo/Developer/.air-mobile-2026-11-09/evidence/tablet`.
[Portable evidence](evidence/tablet-audit-2026-11-09/manifest.json) retains compressed
receipts, harness sources and selected reviewed captures with SHA-256 hashes.
No temporary browser tooling becomes a production dependency.

The audit-only `tablet-scope.mjs` loader narrows existing fixed profile arrays and
adds screenshots without weakening assertions; its source and transformation
hash log are included. Run through `tablet-env.sh` from the isolated family.
The shared comparator additionally accepts `AIR_TOUCH=1` and `AIR_PROFILES`.
The PDF rail test is a permanent package script; ID-photo output and other focused
audit drivers are archived with this evidence. Product notes link this ledger.

## Limits and rollout

This is a fresh tablet-focused software and visual audit, not a new complete
physical-device acceptance. Physical Windows/iPad/iPhone, OS keyboards and IME,
real browser zoom, spoken assistive use and physical printing remain untested.
32px root text and automated WebKit do not stand in for those checks. AI edge
states use actual components and controlled states; full model inference and the
approved existing PDF Compact limitation are unchanged. Drop/Roll native apps,
original PDF AI work and KERR are untouched. Current-library verification remains
in the preceding same-day dependency audit; this pass changes no package versions.

PDF [#234](https://github.com/cloakyard/cloakpdf/pull/234) and
IMG [#34](https://github.com/cloakyard/cloakimg/pull/34) use dev → main. The canonical
audit/comparator follows through its own dev → main PR. Unchanged Resume, Drop and
Roll code needs no additional release. Exact-main checks, live asset hashes and
dev synchronization are recorded after merge; the canonical PR carries its own
final receipt to avoid a recursive evidence-only deployment.
