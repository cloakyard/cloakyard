# Air refresh — current handoff

2026-10-13: the user authorized one final agent review followed by implementation.
The review is complete; **Air 1.0.0 is locked**. Do not restart broad design studies
or ask for another design approval. `DESIGN_FREEZE.md` records the decision.

**AIR-04 is committed as `39c08f9`**: the complete Cloakyard homepage imports the
canonical CSS, with open product rows, system typography/themes, in-flow mobile
navigation, focus-safe anchors, KERR exploration links, principles/footer and a
new social image. Legacy font assets, old cards/pipeline/KERR artwork and competing
CSS are removed. The live Shaders renderer is now a separate lazy production
chunk with a finite 900ms arrival, pointer response and complete static fallback.
The design gallery and overlay demo bundles do not enter production.

The local preview is `http://127.0.0.1:8131/` (production build); the development server on port 8130 was stopped after verification.
Existing reference/product servers are untouched. Evidence is in
`evidence/home-2026-10-13.json` and the dated section of `validation.md`.

Passing: check/type/build, 76 layout/theme/text cases, keyboard/menu/Escape/hash/
back-forward/malformed hash/skip-link/coarse target checks, reduced motion/forced
colours, no-JS links, production local-only requests, 13 remote destinations, native
Safari 27.0.1 and Firefox 157.0.1 checks (including real 200% zoom), all five bundles
and 75 portability assertions. See the entry checkpoint below for subsequent PDF
runtime adoption; IMG, Resume and Drop product UI remains unchanged.

The user subsequently instructed **“commit then continue”** after the two remaining
checks were explicitly reported. This authorizes the current local commit with
those gaps documented. Physical-touch and screen-reader speech/navigation remain
unverified; `validated: false` is retained rather than claiming they passed.
Design lock commits: Cloakyard `ea26823`, PDF `e59bcd5`, IMG `0182ec0`, Resume
`b91e39e`, Drop `f507724`. Homepage implementation: `39c08f9`.

Cloakyard now uses the four real local product marks at a consistent 36px. All
22 size/theme cases pass; KERR remains a text exploration link. Sources and update
rules are in `../brand-assets.md`. The user's subsequent shader activation request is implemented in the homepage
hero. Reference and production share `light-runtime.mjs`; the actual renderer is
lazy, finite and capped. Evidence: `evidence/live-shader-2026-10-13.json` and the
recorded pointer-response GIF. Production payload is 294.3 kB gzip with a 350 kB
build ceiling. Physical battery/thermal acceptance remains open.

**CloakPDF entry is committed as `dc20fe6`**: homepage/search, shared navigation/footer, privacy,
file intake, encrypted-file recovery and PWA notices. Check/dead-code, 355 units,
build, 88 layout cases, dev/production search and routing, six synthetic standalone
workflows, mobile editor smoke and serial responsive-motion checks pass. Native
Safari and Firefox 200% checks pass. The original standalone scanned/guide fixtures
are absent; generated demo fixtures were used explicitly. Physical touch/software
keyboard and screen-reader speech remain open. Full evidence is in CloakPDF's
`docs/air/validation.md`; production preview is `http://127.0.0.1:8132/`.

The first migrated product exposed an isolated portability-fixture bug: the fixture
retained product inventory entries without their source files. The canonical test
now selects its bundled CSS entry only; real repository inventory checks remain
complete. All five bundles pass all 75 assertions. Synchronized fix commits: IMG `d6f4cdb`,
Resume `f361733`, Drop `5d79ab9`; PDF includes it in `dc20fe6`. Fresh IMG checks and
470 tests, Resume checks and 288 tests, and Drop asset/Astro check/build all pass.

CloakPDF utility headers, global error boundary and route loading are committed
as `70e0b70`. Recovery copy failure, retry focus, reload, 132 utility header cases
and 88 recovery/loading cases pass. All six synthetic standalone output workflows
and home-to-editor hand-offs pass again. The later constructor checkpoint below
removes the phone orientation overlay; deeper utility/editor surfaces remain pending.

The reusable light lifecycle and its TypeScript declarations are synchronized in
IMG `a894c1d`, Resume `e22f441` and Drop `bb02e6f`; PDF includes them in `70e0b70`.
All 85 portability assertions and each product's applicable checks pass. This
handoff's Cloakyard commit contains the production shader and recorded evidence.
Temporary audit tabs and emulation are cleared; the existing homepage preview
was refreshed to the live shader. Product editor tabs and preview servers remain.

Next: **CloakPDF remaining utility-specific options/results**, then editor chrome, every
panel, canvas and overlays. Continue IMG → Resume → Drop website →
family comparison using `IMPLEMENTATION_PLAN.md`. No further general design
approval is needed. Shared adapters/corrections return to Cloakyard first. KERR
and native macOS UI remain unchanged. No push or deployment is included.

## Latest bounded implementation — PDF constructors

CloakPDF `aba5643`: Merge and Images to PDF share one Air queue with
natural sorting, preserved manual order, explicit/keyboard moves, persistent Undo,
wrapped names and image previews. Shared action/segment/error/progress controls use
the pinned skins; busy actions retain focus/geometry and guard repeated dispatch.
File intake and queue changes are locked during work; late results cannot download
or open an editor after navigation. Obsolete queue skins, motion and the standalone
orientation gate are removed. A crop tool-switch registration defect found during
regression testing is fixed and covered by the existing editor workflows.

Passing: 112 final layout/theme/text cases, six landscape entries, reordered output
page dimensions, sorting/Undo focus, real held-work lifecycle, native Safari/Firefox
200% shared-component checks, 355 units, all six standalone outputs, desktop/mobile
editor smokes, three-fixture placement/preview, extended interactions, routing/motion, build/dead-code/design and
17 portability assertions. Physical touch/software keyboard and screen-reader
speech remain open. Full evidence: PDF `docs/air/validation.md` and
`docs/air/evidence/constructors-2026-10-13.json`.

This constructor checkpoint was followed by the Extract Images slice below. Preview
remains `http://127.0.0.1:8132/`. No user editor tab was reloaded; no push/deployment.

## Prior bounded implementation — Extract Images (2026-10-14)

CloakPDF `b25ae2c`: image selection/results, shared selected-file identity,
full-resolution PNG/ZIP delivery and complete empty/error/busy/recovery states use
Air. Cancel scan aborts obsolete work and releases PDF.js/canvas resources; replacement
survives late callbacks. Busy downloads guard repeated dispatch, preserve geometry
and focus, retain selection on failure and suppress delivery after navigation.
Unused spinner/file-info styles and references are removed. Canonical tokens and
control skins are unchanged; no sibling runtime change is required.

Passing: 176 DOM size/theme/text cases plus representative reviewed screenshots;
Safari/Firefox actual 200% zoom with real extracted images; keyboard, forced colours,
reduced motion, encrypted/corrupt recovery; PNG resolution, full/partial ZIP
names/counts and sampled byte equality, retry and cancellation lifecycle checks.
355 units, all six standalone production flows, check/type, dead-code, production
build/PWA/139-file limits, design inventory/integrity and 17 PDF portability assertions
pass. Explicit synthetic fixtures substitute for absent original scanned/guide PDFs.
PDF evidence is in `docs/air/validation.md` and `evidence/extract-2026-10-14.json`.
Physical touch/software keyboard, screen-reader speech and loaded-model AskPDF
integration remain open. Inventory `validated` remains false.

This checkpoint was followed by Password below. The active checklist is in
`UX_REFRESH_TODO.md`.
PDF preview 8132 and dev 8122 are running. Earlier home/reference servers were not
restarted or verified during this checkpoint. Own test tabs/emulation were cleaned
up; no user tab was reloaded. No push or deployment.

## Latest bounded implementation — Password (2026-10-14)

CloakPDF `5770f7b` completes the Password option/result slice: single-contour Air
fields, inset visibility focus, explicit permissions, detection/corrupt recovery,
one wrong-password error and truthful completion. Busy work preserves drafts,
blocks duplicate dispatch and prevents late output after leaving. Cancelled
security detection cannot replace a newer file. A corrected mismatch clears while
typing; the old input/disclosure/mono/tint code is removed.

Passing: 264 state/size/theme/text geometry observations and 44 final icon geometry
rechecks, reviewed representative screenshots, native Safari/Firefox 200% zoom,
forced colours and reduced motion. Production feature tests verify permission bits,
AES-256, source-stream equality through protection/unlocking, wrong/empty-password
handling, editor handoff and cancellation/replacement. Check/dead-code, 355 units,
all six standalone flows, build/PWA/135-asset limits, inventory, design integrity,
17 portability assertions and canonical synchronization pass. PDF evidence:
`docs/air/validation.md` and `evidence/password-2026-10-14.json`.

**Next: Digital Signature options/results**, then Compare, AI and all editor
surfaces. The central TODO has the next bounded checklist. Air 1.0.0 remains
unchanged. Physical touch/software keyboard and screen-reader acceptance stay open;
inventory `validated` stays false. PDF preview 8132 and dev 8122 are running.
Own tabs/zoom/emulation and synthetic download were cleaned up, without reloading
user tabs. No push or deployment.

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

1. Complete Digital Signature options and results,
   Compare results and on-device AI states. Entry, constructors, shared utility controls,
   landscape handling, policy/encrypted/PWA, utility headers and recovery are implemented.
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
