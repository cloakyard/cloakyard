# Growing family mark — 2026-11-09

Status: implementation and full software refinement verified; five product documentation PRs merged and dev synchronized. Canonical PR #53 records its own final deployment receipt.
Air 1.7.2 records this homepage motif. Shared controls and all five product runtimes
remain unchanged; portable contract documents and inventories adopt the new version.

## The change

`YardGrowth` replaces five bespoke miniature app scenes and their repeated home
mark with one isometric blue structure. One solid block represents each entry in
`productivityTools`; KERR remains an exploration link. A faint next cell indicates
room to grow. Stable expanding shells retain prior cell positions as the registry
grows; fitting and sequential timing are derived, with no fixed five-app layout.

The current sequence takes 3,740ms. Each block enters over 600ms with a 620ms step
and 160ms opening delay. Larger counts compress that step and keep entrances
sequential; the final 480ms outline keeps every sequence at or below 4,540ms.
WAAPI animates HTML wrappers using only transform/opacity and Air's ease-out curve.
SVG faces stay static; no library, shader, per-frame React state or network is added.

The shared artwork lifecycle preserves stylesheet readiness, static preference
fallbacks, offscreen/hidden suspension, departure cleanup and completion-only
pointer/touch/keyboard replay. The directory and primary action remain available.
The generated structure is complete before enhancement. Forced-colour visits keep
the existing hidden-artwork treatment; reduced-motion visits retain the still.

## Refinement and cleanup

- Remove `ToolGathering`, its five materials, the repeated mark and obsolete CSS.
- Replace its browser regression with `test-air-growth.mjs`; no obsolete active
  source/test/README references remain. Historical audit records stay historical.
- Add the growth invariant test for counts 0–125, checking retained coordinates,
  fitted bounds, sequential arrivals and the finite deadline.
- Update current README/architecture copy and stale Air 1.0 wording in the design
  system's entry document. The eight product/site README structures still pass.
- The five product bundles change only contract/version/inventory metadata. Their
  styles and shared runtime modules are byte-identical, recorded in the evidence.

## Focused verification

Format/lint, types, production build, Knip and portable contract checks pass.
The entry remains below its 85 kB gzip ceiling (76.00 kB). Sixteen pure tests pass,
including the new growth invariant. The README check passes eight documents and
114 local references. All public links retain neutral ink in 248 state/layout and
92 keyboard checks.

The growth browser check passes 44 static layouts at 16/32px text, 22 real-time
arrivals and four lifecycle/no-script journeys. Both Chromium and WebKit pass the
full six-site artwork matrix: 132 moving layouts, 24 fallbacks, six lifecycle and
six delayed-stylesheet startup cases per engine. Four-thread/no-memory WebKit is
explicitly exercised. Frame-by-frame light/dark storyboards and a finite preview
are retained; phone/tablet/laptop/desktop landing comparisons are visually reviewed.

## Motion review

| Before                                   | After                                               | Why                                                        |
| ---------------------------------------- | --------------------------------------------------- | ---------------------------------------------------------- |
| Five individually authored app materials | Registry-driven cube cells                          | Adding an app does not require a new animation             |
| Repeated mark beneath the illustrations  | One growing structure and an empty next position    | Removes redundant branding and conveys room to grow        |
| Fixed arrival/detail choreography        | Bounded sequential arrivals with a shared lifecycle | Preserves completion-only replay and the five-second limit |

Approve for the tested software scope: explanatory, occasional marketing motion;
shared easing, transform/opacity-only animation and explicit reduced-motion/static
fallbacks. Device feel remains subject to physical acceptance, not a screenshot claim.

## Coverage and acceptance

All 24 fresh audit suites pass. The final cleanup removes an unused model field;
both browser engines then repeat the Yard matrix (22 layouts, four fallbacks,
one lifecycle and one cold-stylesheet journey each). The complete product source,
styles, dependencies and runtime bundle files are unchanged from the earlier
same-day verified builds. Their unit, output-parity and full-engine tool evidence
in [the refinement ledger](refinement-2026-11-09.md) remains applicable; it is not
reported as newly rerun here. Fresh format/lint/Astro and portable checks pass.

| View / state                                  | Fresh coverage and result                                                                                                                                                                                                     |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Six landing pages, headers, footers and menus | 648 layout observations and 390 interactions; 120 home/privacy captures across five profiles, both themes. Four viewport classes visually compared.                                                                           |
| Privacy, recovery and secondary reading pages | 288 secondary shell observations; 408 policy layouts and 22 return/contents journeys, including enlarged text.                                                                                                                |
| PDF/IMG/Resume editors and common controls    | 24 Chromium + 24 WebKit cases at 390/768/1280/1440, both themes; editor, active controls, Actions/Export and focus/hover compared.                                                                                            |
| Dialogs, update notices and scrolling         | 264 dialog cases and 396 notice states, including classic scrollbar emulation, short screens and enlarged text. 162 notice captures.                                                                                          |
| Motion                                        | 74 presence cases; both engines each pass 132 six-site moving layouts, 24 fallbacks, six lifecycle and six delayed-stylesheet journeys. Yard's focused static/arrival and final-engine reruns also pass.                      |
| IMG all 26 tools and alternate states         | 480 observations across four viewport classes and both themes; no errors, failures or unexpected requests. Fresh representative tool sheets compared. Prior same-day complete WebKit/enlarged-text matrix remains applicable. |
| IMG entry and batch                           | 204 entry layouts, eight entry checks and three fidelity checks; 176 batch observations. Previous same-day canvas, transaction and pixel-output proofs apply to unchanged code.                                               |
| PDF all editor tools and collections          | 176 registered tool selections, 148 navigation layouts and 88 collection cases; 16 Chromium/WebKit phone apply/cancel/download journeys.                                                                                      |
| PDF standalone and Ask entry                  | 260 empty/selected/loading observations across seven tools, two engines, five profiles and both themes. Fully loaded Ask and AI dialog edge states retain earlier same-day evidence; no new inference claim.                  |
| Resume all 13 content sections                | 1,666 empty/populated observations, 16 profiles, both themes and 16/32px text, with 16 contrast pairs.                                                                                                                        |
| Resume library, review and controls           | 386 library, 960 review, 192 options, 256 dates, 320 logo/photo and 128 contact/language observations; empty, busy, failure and populated states included.                                                                    |
| Links, documentation and contract             | 248 link states and 92 keyboard checks; eight READMEs/114 local references; eight synchronized Air 1.7.2 specifications and five portable product bundles.                                                                    |

Representative visual review covers landing/header/footer and privacy compositions,
all three editors, compact tools, dialogs/notices, IMG tools, PDF standalone flows
and Resume sections/library/review/options. The full machine matrices are broader
than the sampled images; this does not claim human inspection of every screenshot.
Equivalent controls follow the same Air roles; task-specific composition and exported
content remain intentional. No further product UI change was warranted by this pass.

Portable receipts and selected reviewed images are in the
[evidence manifest](evidence/growing-mark-2026-11-09/manifest.json).
Initial command diagnostics are retained: two Astro roots have no Vite workspace,
a direct canonical sync check resolved original siblings rather than the isolated
family, and the README family checker requires an explicit checkout directory.
Correct package tools, symlink-preserving paths and the explicit family argument
pass. These setup errors are not accepted as passing product gates.

Raw evidence: `/Users/sumitsahoo/Developer/.air-mobile-2026-11-09/evidence/cube-growth`.
This work does not close physical Windows/iPhone/iPad, actual browser zoom, OS
keyboard/IME, spoken assistive or physical print acceptance. Native apps, KERR and
unrelated original PDF AI work remain untouched. The existing approved Compact
model quality limitation is unchanged; UI audits do not certify AI inference.

## Promotion receipts

| Product     | PR                                                      | Main commit |
| ----------- | ------------------------------------------------------- | ----------- |
| cloakpdf    | [#236](https://github.com/cloakyard/cloakpdf/pull/236)  | `b536029`   |
| cloakimg    | [#36](https://github.com/cloakyard/cloakimg/pull/36)    | `d25af37`   |
| cloakresume | [#63](https://github.com/cloakyard/cloakresume/pull/63) | `a08921c`   |
| cloakdrop   | [#62](https://github.com/cloakyard/cloakdrop/pull/62)   | `b4f6acf`   |
| cloakroll   | [#18](https://github.com/cloakyard/cloakroll/pull/18)   | `f58ff48`   |

All five product documentation PRs are merged after passing hosted checks;
remote dev includes main. Roll's native tree remains `0070581a9987d3bf69923e7ed263d81892d03042`.
Original clean IMG/Resume dev checkouts are fast-forwarded; unrelated original
PDF AI and Drop/Roll native work are preserved. Production matches 334 exact
product files, plus Roll's ten files after normalizing only three existing
Cloudflare challenge-script insertions. Runtime files did not change in these
five documentation promotions. Exact-main hosted status receipts are retained.

Some GitHub PR workflows initially failed with an internal server error before
jobs were created. Reruns recovered most; refreshing the same Resume/Drop PR
events recovered the remaining jobs. Source and checks were not weakened. Both
fresh PR events pass, as do their same-head push checks and Cloudflare previews.

[Cloakyard #53](https://github.com/cloakyard/cloakyard/pull/53) promotes the actual
animation through dev → main. Its description records final exact-main checks,
live asset/motion verification and dev synchronization after merge, avoiding a
recursive documentation-only deployment. The rollout concludes on 2026-11-10
local time; this ledger retains its implementation date.
