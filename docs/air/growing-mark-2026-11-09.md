# Growing family mark — 2026-11-09

Status: implementation and focused gates verified; broader refinement in progress.
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
The entry remains below its 85 kB gzip ceiling (76.01 kB). Sixteen pure tests pass,
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

The all-view refinement is still running. Its final ledger will distinguish fresh
geometry/behavior matrices, representative visual review and prior same-day output
and unit evidence for unchanged product code. It includes public/reading/recovery
pages, all editor tools/sections, standalone/batch/library flows, dialogs/notices,
custom controls and edge states in both themes and all viewport classes.

Raw evidence: `/Users/sumitsahoo/Developer/.air-mobile-2026-11-09/evidence/cube-growth`.
This work does not close physical Windows/iPhone/iPad, actual browser zoom, OS
keyboard/IME, spoken assistive or physical print acceptance. Native apps, KERR and
unrelated original PDF AI work remain untouched. The existing approved Compact
model quality limitation is unchanged; UI audits do not certify AI inference.

Individual tested PRs and their post-merge deployment/dev receipts follow the
completed refinement. No production deployment has occurred for this piece yet.
