# Family refinement, cleanup and README consistency — 2026-11-09

Status: software refinement and audit verified; product rollout verified. Air remains 1.7.1; this pass removes unused
styles, aligns visible sentence-case copy and updates documentation/assets without adding a new visual language.

## Bounded changes

- The six root READMEs and Drop/Roll website READMEs share ten ordered sections,
  a product identity/link header, explicit privacy/build/release boundaries and
  local Air references. Product features and native limitations remain intact.
- `docs/README_STANDARD.md` records the structure. The lean, dependency-free
  checker validates headings, nonempty sections, local files and Markdown anchors.
  Yard CI runs its standalone mode; family mode checks all eight documents.
  Five positive/negative fixture cases verify that missing sections/files/anchors
  fail while fenced examples and explicit legacy anchors work.
- Current commands replace stale build/rollout wording. Existing inbound Drop
  installation/features/testing and Roll Cloudflare anchors remain usable.
  PDF, IMG and Resume screenshots and dependent social cards are refreshed.
  IMG dark screenshots live in documentation, not the installation precache.
- IMG removes `.transition-opacity` and five unused `t-*` typography selectors
  from its compatibility stylesheet. Redundant Knip entries/ignore configuration
  are removed. No live compatibility token, dynamic selector, output style,
  reference-gallery component, generated codec or native code is deleted.
- IMG captures now drive actual controls, isolate contexts and capture both
  themes. Canvas focus checks wait for the exact persistent Crop shortcut;
  batch checks require the actual Batch recipe surface. The initial failed
  focus experiment expected the general picker instead of the correct shortcut;
  that diagnostic is retained, with no production focus change required.

- PDF standalone headings/categories, password recovery and download actions
  follow the existing sentence-case rule. Resume’s Interests & tools section and ATS-friendly category
  follow the same rule; authored document content is preserved.
- Drop/Roll website CI reads npm from the package manifest rather than pinning an
  older version separately. Roll’s setup-node action matches the family SHA.
  YAML/shell checks and both npm 12.2.2 audits pass with zero vulnerabilities.

## Cleanup method and limits

Knip checks the six web module/dependency graphs. A separate tracked-source scan
reviews app-specific CSS, including `air-entry.css` and `air-editor.css`; generated
portable `air.css` is a complete shared library, not a per-page purge target.
The sole remaining unmatched candidate, Resume's `resume-section-nav--rail`, is
constructed from `variant` in SectionRail and is live. Script entry points are
intentional developer tools; browser execution verifies the changed capture/test
paths. These checks establish no remaining findings in the reviewed scope, not
mathematical proof that every possible runtime branch is reachable.

## Coverage ledger

The audit compares equivalent control roles while preserving task-specific
composition and authored output. Fresh source/build/dead-code gates pass for all
six web codebases. PDF has 461 unit passes, IMG 488, Resume 373 production tests
with no skips, and the canonical bundle has 20 pure workflow tests. Later copy
edits receive focused production reruns. All eight READMEs and 114 local references
pass; five checker fixtures verify rejection of broken structure/links.

| View / state                                          | Coverage and result                                                                                                                                                                                                                                                                                                                                                   |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Six public landing pages, headers, footers, menus     | 648 layouts, 390 interactions; fresh 120 home/privacy captures at 390/768/1024/1280/1440 in both themes; extra 48 tablet measurements. Visually reviewed four viewport classes, both themes.                                                                                                                                                                          |
| Privacy, recovery and secondary reading pages         | 288 secondary shell observations; 408 policy layouts and 22 navigation journeys; both themes, enlarged text, back/contents actions.                                                                                                                                                                                                                                   |
| PDF/IMG/Resume working views and shared control roles | 66 Chromium + 66 WebKit cases at all eleven required sizes; actual controls, focus/hover, dialogs and full workspace composition. Phone/tablet/laptop/desktop light/dark comparisons visually reviewed.                                                                                                                                                               |
| Dialogs, PWA notices, scroll containment              | 264 dialog cases and 396 notice states (162 captures), including classic-scrollbar emulation, short viewports and enlarged text. Cross-app close buttons, body scroll and bottom notices remain aligned.                                                                                                                                                              |
| Overlay/sheet motion and landing artwork              | 230 presence/workflow cases. Each engine passes 132 moving layouts, 24 fallbacks, six lifecycle and six stylesheet-startup cases. Reduced motion, hidden/offscreen suspension and replay remain intact.                                                                                                                                                               |
| IMG all 26 tools and alternate states                 | 840 observations in Chromium and 840 in WebKit: 390, 768, 1024 landscape, 1280, 1440; both themes, plus 390/1024 at 32px text. All default tools visually reviewed in four viewport classes and both themes; alternate states retained in receipts.                                                                                                                   |
| IMG entry, batch, canvas and output                   | 204 entry and 176 batch observations, 20 canvas journeys, eight compact completion journeys. Twelve exported PNGs match baseline decoded pixels exactly.                                                                                                                                                                                                              |
| PDF editor tools, collections and transactions        | 148 navigation layouts/176 selections, 88 collection layouts and real downloads; 16 Chromium/WebKit phone transaction journeys. Earlier same-day tablet captures retain every tool; fresh shared editor/control captures and navigation cover all classes.                                                                                                            |
| PDF standalone tools and Ask entry                    | 260 empty/selected/loading states across seven tools in both engines, five profiles and both themes, plus 20 fully loaded Ask model-choice states. Final six-tool workflows verify downloads/encryption/extraction/comparison/signature output.                                                                                                                       |
| PDF AI dialog edge states                             | 192 delete/loading/error layouts plus storage recovery, cancel/retry, keyboard and motion checks. Disposable storage and held requests exercise UI; no new inference quality claim.                                                                                                                                                                                   |
| Resume content sections                               | 1,666 observations across all 13 sections, 16 profiles, empty/populated data, light/dark and 16/32px text; 16 contrast pairs. Fresh section captures reviewed; prior same-day tablet per-section captures remain applicable to unchanged composition.                                                                                                                 |
| Resume library, review and custom controls            | 386 library layouts, 960 review states, 192 options states, 256 date layouts, 320 photo/icon-picker layouts and 128 contact/language layouts pass. Final copy verification adds 128 section states, eight loaded library captures and three production regressions. Both themes and all viewport classes are covered; full receipts preserve empty/error/busy states. |

Selected reviewed captures and compressed machine receipts are in the portable
[evidence manifest](evidence/refinement-2026-11-09/manifest.json). The raw folder
retains every captured state. Visual review is a representative comparison of the
listed states, paired with the full automated geometry/behavior matrices; it does
not claim human inspection of every screenshot or every possible runtime path.

Initial diagnostics are retained: the standalone helper originally assumed a
44px fine-pointer minimum, then was corrected for valid 32px segments; its final
matrix passes. The standalone feature preflight needed the documented generated
fixtures. A PDF transaction run overlapped a rebuild and timed out while loading;
all 16 cases pass against the stable final build. IMG’s initial focus fixture
expected the picker instead of the persistent Crop shortcut. Ask captures now
explicitly distinguish lazy loading from the fully loaded model-choice state.
The focused Resume section audit exposed a Target JD-only assertion outside the selected section; its filter now scopes that assertion, and the final 128-case rerun passes. A duplicate Start blank selector in the capture helper was narrowed to the first visible entry. No failed required gate is accepted in place of its passing correction.

## Evidence and acceptance

Raw evidence is retained at
`/Users/sumitsahoo/Developer/.air-mobile-2026-11-09/evidence/refinement`.
Initial diagnostics remain alongside successful reruns. This audit does not
replace physical Windows/iPad/iPhone, OS keyboard/IME, actual browser zoom, spoken
assistive use or physical print acceptance. AI dialog-state verification does not
claim a new full inference run; the approved existing PDF Compact limitation
remains documented. Drop/Roll native code, KERR and original unrelated PDF AI
work remain outside this web pass. No dependency versions change here; the
preceding same-day current-library audit owns that verification.

## Promotion receipts

Passing bounded product commits use individual main PRs:

| Product           | PR                                                      | Main commit |
| ----------------- | ------------------------------------------------------- | ----------- |
| CloakDrop website | [#61](https://github.com/cloakyard/cloakdrop/pull/61)   | `8355c4f`   |
| CloakRoll website | [#17](https://github.com/cloakyard/cloakroll/pull/17)   | `d956b2d`   |
| CloakPDF          | [#235](https://github.com/cloakyard/cloakpdf/pull/235)  | `178d585`   |
| CloakIMG          | [#35](https://github.com/cloakyard/cloakimg/pull/35)    | `3f32650`   |
| CloakResume       | [#62](https://github.com/cloakyard/cloakresume/pull/62) | `55294fd`   |

All five are merged with exact-main CI/deployment checks passing. Remote dev
includes main for all five; Roll preserves its native tree unchanged under the
authorized website-only exception. Original clean IMG and Resume dev are updated.
PDF's 130 files, IMG's 89, Resume's 101 and Drop's 14 match production exactly;
Roll's ten files match after normalizing only its three existing Cloudflare HTML
injections. The six-site live public/privacy return smoke passes 48 journeys.
Resume's final deployed category copy passes eight loaded library states across
four viewport classes and both themes. Early asset probes taken during deployment
are retained separately from the final passing receipts.

This canonical documentation/checker piece follows dev → main. Its PR description
records its own exact-main CI, production asset verification and final dev sync
after merge; this avoids a recursive documentation-only deployment.
