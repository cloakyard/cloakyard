# Air refresh — current handoff

Resumed at the user's request on 2026-10-12 after the 2026-10-11 pause.
The user explicitly chose **keep refining Air before rollout**. Production
migration and detailed visual sign-off remain open. The user subsequently requested
committing all saved work and an implementation plan. Follow
[IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md) for execution order, commit slices
and gates. No production redesign, push or deployment occurred in that planning step.

The latest continuation closes the broad base-pattern work with collections,
layers, history, custom Select and nested overlays. The user asked to wind up the
design and start implementation. **Read DESIGN_FREEZE.md next: one detailed visual
lock, then AIR-04 (shared runtime foundation + complete Cloakyard home).** Do not
start another general component-refinement cycle. The review decision is pending;
product sources still do not import the Air bundle.

The new reference is `docs/air/collections.html`. The canonical reducer uses local
sample rows only. It covers filtered/mixed selection, 100 rows, reorder alternatives,
rename/discard, visibility, remove/undo, history branching and focus restoration.
Both lazy modules are independently budgeted below 150 kB gzip. The complete
portable contract and inert reference bundles are synchronized across all five repos.
See the dated collection section in `validation.md` for current checks and limits.

Browser/device parity, actual formats/IME/output and specialised product control
states remain open against their owning rollout pieces. The final candidate's
review gate does not mean those checks passed. KERR/native UI stay unchanged;
KERR becomes an exploration link during the first home implementation. No push or
deployment is included. Historical Resume flakiness is not claimed fixed.

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

1. Close the detailed visual review using `DESIGN_FREEZE.md`; record the user's
   approval or specific remaining correction. Do not infer approval from test passes.
2. Implement AIR-04 shared foundation and Cloakyard home as defined there. Extract
   only real production primitives, preserve the content registry/hash routes,
   replace KERR's illustration with a link, clean old design code and pass every gate.
3. Continue PDF → IMG → Resume → Drop website. Keep all engine/device, specialised
   state, processing/output and full-feature tests on the owning piece's checklist.
   Use `IMPLEMENTATION_PLAN.md` and `UX_REFRESH_TODO.md`, not a landing-only rollout.
4. Every shared correction goes to the canonical source first, then all affected
   bundles. Rebuild both studies with `node scripts/build-air-overlays.mjs` and
   verify determinism with `--check` before sync. Commit only passing pieces.

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
