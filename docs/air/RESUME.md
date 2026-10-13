# Air refresh — current handoff

2026-10-13: the user authorized one final agent review followed by implementation.
The review is complete; **Air 1.0.0 is locked**. Do not restart broad design studies
or ask for another design approval. `DESIGN_FREEZE.md` records the decision.

**AIR-04 is now implemented locally**: the complete Cloakyard homepage imports the
canonical CSS, with open product rows, system typography/themes, in-flow mobile
navigation, focus-safe anchors, KERR exploration links, principles/footer and a
new social image. Legacy font assets, old cards/pipeline/KERR artwork and competing
CSS are removed. No standalone study bundles or shader runtime enter production.
The two-plane still artwork has a finite 900ms CSS arrival and reduced-motion path.

The local preview is `http://127.0.0.1:8131/` (production build); the development server on port 8130 was stopped after verification.
Existing reference/product servers are untouched. Evidence is in
`evidence/home-2026-10-13.json` and the dated section of `validation.md`.

Passing: check/type/build, 76 layout/theme/text cases, keyboard/menu/Escape/hash/
back-forward/malformed hash/skip-link/coarse target checks, reduced motion/forced
colours, no-JS links, production local-only requests, 13 remote destinations, native
Safari 27.0.1 and Firefox 157.0.1 checks (including real 200% zoom), all five bundles
and 75 portability assertions. Full product tests from the preceding checkpoint
remain relevant to unchanged sibling runtime sources; no new sibling UI is adopted.

The user subsequently instructed **“commit then continue”** after the two remaining
checks were explicitly reported. This authorizes the current local commit with
those gaps documented. Physical-touch and screen-reader speech/navigation remain
unverified; `validated: false` is retained rather than claiming they passed.
Design lock commits: Cloakyard `ea26823`, PDF `e59bcd5`, IMG `0182ec0`, Resume
`b91e39e`, Drop `f507724`. The next commit contains the complete homepage work.

Next: **CloakPDF entry/landing and reading surfaces**, then its editor and custom
controls, followed by IMG, Resume, Drop website and family comparison. Use
`IMPLEMENTATION_PLAN.md`; no further general design approval is needed. Extract
complex production adapters when real product behavior needs them. Keep device
follow-ups visible. Live shaders retain their separate performance gate. KERR's
app/native macOS UI remain unchanged. No push or deployment is included.

## Saved checkpoints

- Cloakyard `0f32115`: shared motion and portable bundle integrity; `b2fbee4`:
  locally bundled Shaders light study. Current reference is served at
  `http://127.0.0.1:8120/docs/air/components.html` while the existing server runs.
- CloakDrop `4124a5b`: complete website baseline source/visual/functional audit and
  opt-in Air bundle. All 18 production source files reviewed; 19 inventory entries
  include the shared CSS. Evidence records 90 layouts, 24 header journeys,
  370 computed text pairs, 12 text-stress cases and 16 reviewed screenshots.
  Dark skip-link contrast and narrow enlarged-text home/404 layouts fail; the
  source-linked audit tracks these as migration requirements. Astro gates pass.
- The 2026-10-12 Cloakyard landing refinement adds native compact navigation,
  relative landing typography, short-landscape composition and a static family
  mark. The validation record contains 96 layout + 96 text-bound cases, keyboard,
  no-JS, touch emulation, field contours and 12 editor-dialog smoke checks.

- The 2026-10-12 dropdown/motion refinement gives all reference selects a shared
  native custom picker, inset arrow, neutral selected row/blue checkmark and
  viewport-constrained scrolling. The light has a stronger finite 900ms sweep;
  completion settles from 8px/.90 over 240ms. Evidence and remaining browser
  support gates are in the select/motion section of `validation.md`. No product
  migration or sibling commit is included in this checkpoint.

- The component-foundations checkpoint makes main-repo ownership explicit in
  `design/air/README.md`, the portable contract and bundle provenance. Both local
  validators are synchronized. Expanded fields/choices have working validation,
  read-only/disabled/multiline states, mixed checkboxes and native radio segments.
  `design/air/COMPONENTS.md` is the component coverage/next-work map. Production
  adoption and user visual sign-off remain open.

- The compound-fields/action-states checkpoint adds clearable template filtering,
  a bounded numeric unit field with visible retained applied value, and explicit
  busy/success/failure/retry/cancel controls. Shared shells preserve one field
  contour, a 44px clear target and stable translated action dimensions. The
  outcomes are simulated; no product file is processed. Evidence is in the dated
  validation section and `air-03-compound-actions-2026-10-12.json`.

- The floating-controls checkpoint adds settings popovers, named/hoverable
  tooltips, equivalent action/context menus, invalid rename and safe remove/restore
  dialogs. 56 viewport/theme/text configurations cover four surfaces each, with
  keyboard/focus journeys, text-stress traversal and lazy-load recovery. Canonical
  React adapters use unstyled Base UI 1.9.0; their generated local reference module
  and licenses are portable. Product runtime imports remain unchanged.

## Next bounded pieces

1. Migrate CloakPDF entry/landing, search, file intake, policy and recovery with
   Air foundations, preserving existing routing and processing contracts.
2. Proceed through PDF editor chrome, every tool panel, overlays and exported
   output checks. Then IMG → Resume → Drop website → full-family comparison.
3. Shared corrections return to Cloakyard first and propagate as a pinned revision.
   Run available required feature/build/design checks before each local commit;
   record physical-device/assistive follow-ups without reporting them as passed.

The commit-all checkpoint is saved: PDF `f960092`, IMG `2a639c4`, Resume `5367f46`
and Drop `9340c6d`; Cloakyard's reference is `340aee8`, followed by the implementation
plan checkpoint. Each repository passed its applicable gates before commit.
Resume's fresh full serial suite passes **288/288 in eight files, 386.58s**, with
zero skips or weakened assertions/timeouts. This supersedes the previous failing
latest-run gate. Historical intermittent failures are not claimed fixed; entry
failure capture now preserves UI state/screenshots before rethrowing. The complete
log is committed in Resume's `docs/air/evidence/precommit-suite-2026-10-12.log`.
All runtime Air adoption and product-specific migration gates remain open.

The task's CloakDrop preview server was stopped and its browser tab closed.
Temporary Air audit tabs/viewport/touch/media/font overrides were restored or
closed. Existing user/reference/editor servers and the user's Air tab remain.

Final base portable checkpoints (2026-10-13): PDF `dea80e8`, IMG `68b0828`, Resume
`4fb514c`, Drop `f44a492`; the Cloakyard commit containing this handoff owns the
canonical change. Contract `c6ec55c0fe59`, CSS `80fb336bb4eb`, collection module
`0bbea11f0a18`. All checks pass; Resume's complete serial gate is 288/288 in
386.12s. Evidence and five reviewed screenshots are in the collection section of
`validation.md`. Next: close the candidate's visual review, then AIR-04.
