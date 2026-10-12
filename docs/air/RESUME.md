# Air refresh — current handoff

Resumed at the user's request on 2026-10-12 after the 2026-10-11 pause.
The user explicitly chose **keep refining Air before rollout**. Production
migration and detailed visual sign-off remain open. No push or deployment occurred.

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

1. Add explicit privacy/long-reading and recovery-page studies. Keep the same
   family navigation, reading measure and action hierarchy across both themes.
   Continue custom editor typography/controls with `design/air/COMPONENTS.md`;
   preserve output geometry and single-contour fields.
2. Cover stacked/nested overlays, submenu dismissal and real product forms. The
   floating study validates local sample behavior; real async adapters, processing
   failures and unsaved-work guards remain rollout gates. Rebuild `overlays.tsx`
   changes with `node scripts/build-air-overlays.mjs` before bundle sync; verify
   deterministic output with `--check`.
3. Continue actual browser zoom, physical touch/software-keyboard and cross-engine
   checks. Native custom selects fall back to platform pickers in unsupported
   browsers; establish and test the accessible adapter before product adoption. Root-font enlargement and browser emulation are separate evidence.
4. Complete the remaining custom-control/state and full-family motion reviews.
   The shader works in the study; physical GPU/battery/thermal and slow-network
   costs still need evidence before any production adoption.
5. Review the refined system with the user before production migration. Then
   migrate one bounded piece at a time, remove replaced legacy code/references,
   verify all applicable features, record evidence and commit only on a pass.

Resume's latest full feature baseline remains 286/288 (Modern Minimal/Letter and
Prism/Letter entry timeouts). Do not claim it passed or commit that app until the
required gate is resolved. Other synchronized sibling files retain their own
validation/commit gates; synchronization is not a product migration.

The task's CloakDrop preview server was stopped and its browser tab closed.
Temporary Air audit tabs/viewport/touch/media/font overrides were restored or
closed. Existing user/reference/editor servers and the user's Air tab remain.
