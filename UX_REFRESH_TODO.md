# Cloakyard Air — full UX refresh

Status: **active — resumed 2026-10-12; refining the design system before product implementation** · Direction: **Air** · Started: **2026-10-11**

Resume from [the saved handoff](docs/air/RESUME.md). Detailed design review and
production migration remain open; no deployment or push has occurred.

Goal: refresh the complete web family, preserve all features, enforce one portable
design language, and commit each bounded piece only after its validation passes.
KERR's app and native macOS UI are outside this redesign. No deployment or push is
part of the current work. All repositories use branch `codex/air-refresh`.

## Working rules

- `[ ]` pending, `[-]` in progress, `[x]` complete with evidence. A new document or
  token file does not mean the app is migrated. Do not check off untested states.
- Every UI source is tracked in [the surface inventory](docs/air/surface-inventory.md).
  Add newly discovered routes, custom components and states before implementing.
- Every code piece follows implement → inspect → feature-test → record → commit.
  Test failures and unavailable tests stop that piece's commit. Keep unrelated
  user changes out. Never substitute a screenshot for functional verification.
- Per-app migrations may need several commits. Complete shared foundations first;
  carry any shared corrections back to all migrated apps before advancing.
- After the initial Air refinements land, include a legacy-design cleanup pass in
  each migrated piece before its validation and commit. Track remaining findings
  in Phase 7; replacing a screen does not finish its migration while obsolete
  design code or authoritative references remain.
- Evidence belongs in `docs/air/validation.md`; large screenshots may stay in
  task-owned output with exact paths recorded. Record actual viewport/theme/state.

## Current priority — keep refining Air before rollout (2026-10-12)

The user explicitly reaffirmed further refinement before rollout on 2026-10-12.
Product UI migration has not started. The first component reference was judged too
generic; Air's detailed system is still under review. Preserve existing validation
as foundation evidence, not visual approval. Do not implement product screens until
the refined system is defined and reviewed as requested by the user.

- [x] Define a recognisable family composition/material/selection language beyond a generic card grid.
- [x] Tighten optical spacing, typography, icon alignment, radii, fields and elevation rules.
- [x] Define light and dark as equally deliberate themes, including every interactive state.
- [x] Build reviewable landing/editor/custom-control examples across desktop, tablet and phone.
- [x] Specify purposeful playful motion with exact timing, interruption, keyboard and reduced-motion rules.
- [x] Validate the representative refined reference and synchronize the portable contract and bundle; [coverage and remaining gates](docs/air/validation.md).
- [x] Refine landing text enlargement, compact navigation and short-landscape composition;
      validate container/text bounds, native no-JS navigation and preserve single-contour fields.
- [ ] Extend relative typography and enlarged-text validation through shared fields,
      custom controls, editor chrome, dialogs and the reference documentation controls.
      Preserve document/canvas output dimensions; do not mistake root-font stress for browser zoom.
- [ ] Add explicit privacy/long-reading and recovery-page compositions to the reference,
      using the same navigation, reading measure, action hierarchy and both themes.
- [ ] Review and lock the detailed system before product migration.
- [x] Build the actual Shaders-based Air light treatment: custom overlapping
      planes, deliberate pointer response, finite arrival and local assets.
      Light/dark and all seven viewport classes pass the reference checks.
      Reduced motion, still artwork and simulated unsupported/constrained graphics
      retain the fallback. See the recorded motion evidence.
- [ ] Review and approve the working light treatment before locking the system.
      Measure physical-device GPU/battery/thermal behaviour, Safari/Firefox and
      slower-network startup; the 369 kB gzip study payload is not yet a production
      budget approval.
- [x] Validate shared-reference press/hover, sheet/dialog interruption, completion
      feedback, keyboard immediacy, focus and live reduced-motion changes. All 42
      PDF/IMG/Resume dialog viewport/theme cases pass. See [motion review](docs/air/motion-review.md).
- [ ] Repeat motion validation on production adapters and real touch devices;
      cover actual tooltips/popovers and Safari/Firefox. Shader local startup,
      idle and visibility checks pass; physical-device costs remain open.
- [x] Refine Resume's study from the full section audit: rich writing, repeated
      entries and partial dates; replace speculative formatting controls with
      actual template/primary-colour/paper choices and preserve direct export/save.
      Representative study validated; full product templates, nested bullets and
      import/export remain product migration gates. See the validation record.
- [x] Remove superseded cues and unused code from the current Air reference:
      obsolete light geometry, unused rail spacer, old workspace class naming,
      duplicate inline motion handlers and timing literals. Record the search scope.
- [ ] Repeat legacy-design searches and cleanup throughout each app as it migrates,
      including custom components, styles, assets, dependencies and documentation.

## Phase 0 — scope, baseline, and full-surface audit

- [x] Confirm Air direction and create the persistent refresh goal.
- [x] Inspect clean git state and create isolated feature branches in all five repos.
- [x] Read existing design contracts and repository instructions.
- [x] Inventory UI files and existing test/build commands.
- [x] Baseline format/lint/type checks: Cloakyard, PDF, IMG, Resume.
- [x] Baseline Drop site check/build.
- [ ] Baseline all existing unit/logic suites; record failures before changing UI.
- [ ] Diagnose Resume's intermittent browser-entry/focus/export timing failures
      without weakening assertions. Latest isolated full run: 286/288; Modern
      Minimal/Letter and Prism/Letter timed out entering Resume editing at
      `tests/template-layouts.spec.ts:125`. Capture the failing UI before rerunning.
- [x] Inspect representative real Resume/PDF/IMG editors before further design; [audit and limits](docs/air/existing-editor-audit.md).
- [-] Inspect PDF desktop/laptop/mobile editor, every tool panel, standalone utilities and overlays. All 22 default panels inspected at desktop/light and phone/dark; date picker and conditional signature/annotation states inspected. Remaining states/utilities are tracked in PDF’s `docs/air/editor-audit.md`.
- [-] Inspect IMG desktop/laptop/mobile editor, every tool panel, custom colour/curve controls and AI states. All 26 default desktop/light panels and 25 phone/dark tools inspected; selected layer, colour DOM and AI consent audited. Remaining states and the Cancel/re-entry finding are tracked in IMG’s `docs/air/editor-audit.md`.
- [-] Inspect Resume desktop/laptop/mobile editor, every section, template/ATS/format/export overlays. All 13 populated sections measured at desktop/laptop/tablet/phone in both themes; date/year, logo, colour, options, template search and all four review tabs inspected. Tablet touch targets and small contact typography need migration fixes; remaining states/exports are tracked in Resume's `docs/air/editor-audit.md`.
- [-] Inspect Drop website, download flow, privacy page and 404 at every layout class.
  Saved 90 initial DOM measurements across 15 sizes, both themes and three routes;
  no measured horizontal overflow, broken images or foreign resource requests.
  Coarse-pointer target gaps remain. Visual/interaction/flow audit is unfinished;
  see Drop's `docs/air/website-audit.md` and the saved handoff.
- [ ] Inspect narrow/landscape phone handling, software keyboard and 200% zoom.
- [ ] Audit focus/keyboard/touch, reduced motion, dark mode and long-content cases.
- [ ] Record findings with source locations and concrete validation coverage.

## Phase 1 — portable Air contract and enforcement

- [x] Write the complete family contract: foundations, custom controls, states, layouts, accessibility, motion and exceptions.
- [x] Replace/create each repository's DESIGN.md, including Drop's website specification.
- [x] Preserve domain invariants and output-format exceptions in product appendices.
- [x] Add exact-copy contract synchronization and drift checks; no sibling dependency at runtime.
- [x] Add canonical versioned tokens and shared CSS component primitives (opt-in; product migration pending).
- [ ] Map existing token/Tailwind aliases to Air; eliminate competing palettes/type/radius scales.
- [-] Add a portable component reference covering controls and all applicable states. Representative editors are reviewable; full custom-widget/state coverage remains.
- [x] Enforce adoption instructions for current and future apps through repository guidance.
- [x] Add static conformance checks with a narrow documented content/visual-data exception list.
- [-] Add CI/local validation entry points and screenshot baseline policy. Contract/inventory CI is installed; runtime style and screenshot gates follow with the shared bundle.
- [x] Validate the opt-in bundle in isolated directories: all five products pass
      contract/token/HTML/module integrity plus negative drift checks (25/25).
      Flat and nested-site references load their own CSS, motion and shader assets
      in the browser. No app dependencies or sibling checkouts are needed.
- [ ] Validate portable production integration as each app adopts the bundle.
- [ ] Commit the verified contract/foundation as bounded pieces.

## Phase 2 — Cloakyard family home

- [ ] Apply shared typography, surfaces, controls, navigation, focus and spacing.
- [ ] Replace the technical hero/pipeline with the Air promise and restrained light treatment.
- [ ] Refresh product cards; retain correct destinations, platform, status and privacy truth.
- [ ] Replace KERR's entire illustrated preview with a concise exploration link.
- [ ] Refresh principles, footer, mobile navigation and long-link handling.
- [ ] Keep source, author, licence, privacy and family links correct.
- [ ] Update metadata/theme colour, social artwork and README where affected.
- [ ] Inspect every specified viewport plus dark/reduced-motion/no-effect fallbacks.
- [ ] Validate all links/anchors, keyboard focus, initial/return hash navigation and no runtime errors.
- [ ] Run check/build, inspect diff and commit only after all checks pass.

## Phase 3 — CloakPDF reference product

- [ ] Landing, file input, searchable toolkit, tool cards, policy, footer and loading/error boundary.
- [ ] Standalone utility shell, file lists, sorting/reorder, progress and result/download states.
- [ ] Editor header, tool rail/search, properties panel, page navigation, overview grid and thumbnails.
- [ ] Canvas surround, document shadow, selection handles, text selection, zoom/pan and context overlays.
- [ ] Shared actions, fields, selects, segments, colour picker, date/time, signature and callouts.
- [ ] Every editor panel listed in the surface inventory, including advanced/disclosed controls.
- [ ] Export modal: PDF/images/contact-sheet/split, options, busy/error and result flows.
- [ ] Command palette, all modal shells, AI consent/model choice/details, notifications and PWA prompt.
- [ ] Mobile tool picker, canvas/panel split, expanded preview, short-height and landscape behaviour.
- [ ] Feature sweep: annotate, signatures, stamps, crop/rotate/resize, organise/reorder/duplicate/delete.
- [ ] Feature sweep: redaction/smart erase, metadata/scrub, forms/autofill, links/bookmarks/attachments, OCR.
- [ ] Standalone sweep: merge, images→PDF, extract images, compare, password, digital signature, Ask PDF.
- [ ] Verify undo/redo, cancellation, replacement/close, file errors, encrypted PDFs and long documents.
- [ ] Verify exported PDF/image content and document fidelity; retain destructive-operation disclosures.
- [ ] Run check, dead-code, all units, build, applicable smoke/extended/AI browser suites.
- [ ] Inspect desktop/laptop/tablet/phone light/dark, touch/keyboard/reduced motion, 200% zoom.
- [ ] Update PWA/social screenshots and product documentation.
- [ ] Record full evidence and commit each verified piece.

## Phase 4 — CloakIMG

- [ ] Landing/header/footer, drop/start flows, features/privacy and error/reload states.
- [ ] Editor top bar/rail/search/properties, image canvas, stage host and mobile more menu.
- [ ] Layers, history list/scrubber, compare, file properties, batch view and privacy audit.
- [ ] All fields/buttons/selects/segments, colour picker, histogram/levels/HSL/curves and numeric units.
- [ ] All tool panels/stages in the inventory, including preview/apply/cancel and empty/invalid states.
- [ ] AI scope/consent/download/cached/ready/error/cancel/retry for segmentation, face and depth.
- [ ] Export formats/options/metadata/privacy/progress and error/recovery flows.
- [ ] Mobile full tool access, canvas/panel split, short screens, landscape and software keyboard.
- [ ] Feature sweep: adjust, filters, levels/HSL, time-of-day, relight, blur, background removal.
- [ ] Feature sweep: crop/resize/perspective, frames/borders, passport/visa layouts and print/PDF.
- [ ] Feature sweep: retouch/spot heal, masks/faces/redaction, text/shapes/draw/pen, emoji/watermark/images.
- [ ] Validate layers, reorder, undo/redo, compare, apply/cancel, batch, import HEIC and all export formats.
- [ ] Keep pixel colours/alpha/output fidelity and AI consent/canvas-pool invariants intact.
- [ ] Run check, all tests, build/asset limits, tool sweep and applicable audit/probe scripts.
- [ ] Inspect all required layout classes, themes and input/motion modes; update PWA/social assets.
- [ ] Record full evidence and commit each verified piece.

## Phase 5 — CloakResume

- [ ] Landing/start blank/sample/load/restore, capabilities, privacy and footer.
- [ ] Editor header, section rail/picker/panel, canvas/preview pagination, zoom and format scope.
- [ ] Every content section: profile/contact, experience, education, skills, projects, certifications,
      languages, interests, awards, custom, stats and job description.
- [ ] Repeated entry cards, drag/reorder controls, rich text, month/year fields, logo/colour pickers.
- [ ] Correct tablet touch sizing and 10px desktop contact selectors; include calendar,
      rich-text, clear/reorder and review actions in the 44px target sweep.
- [ ] Template gallery/preview, paper size, typography/formatting controls and overflow toolbar.
- [ ] ATS overview/keywords/insights/parse preview, writing review, field jumps and issue states.
- [ ] Confirm, privacy, bottom sheet, reload prompt, validation and error boundary.
- [ ] Mobile edit/preview split, section navigation, short-height/landscape and software keyboard.
- [ ] Test all 17 templates, A4/Letter, pagination, long content and image/logo boundaries.
- [ ] Preserve template-specific colours/fonts/layout and printable/exported document geometry.
- [ ] Verify new/load/save/restore/JSON and PDF export, cancellation, unsaved edits and malformed input.
- [ ] Run check, all logic/browser/template suites and production build.
- [ ] Inspect all required layouts/themes/input/motion modes; update PWA/social assets.
- [ ] Record full evidence and commit each verified piece.

## Phase 6 — CloakDrop website

- [x] Complete the existing-site baseline source/visual/functional audit: 18 production
      sources plus the opt-in Air stylesheet, 90 normal layout cases, 24 header journeys,
      370 opaque-background text pairs and 12 enlarged-root-font cases. Evidence in
      `cloakdrop/docs/air/website-audit.md`; this does not mark production as migrated.
- [ ] Resolve the baseline dark skip-link contrast, enlarged-text home/404 clipping,
      40px touch targets, tablet hero spacing, keyboard motion and no-JS menu findings.
- [ ] Replace/remove the recorded unused style tokens/classes, old band artwork and
      maintained editorial-design references as each surface migrates.

- [ ] Refresh shared header, hero, product/craft/privacy sections, download/install guidance and footer.
- [ ] Preserve native app screenshots as product evidence; apply Air only to surrounding website UI.
- [ ] Privacy and 404 use the same Air reading and navigation patterns.
- [ ] Preserve accurate supported OS, architecture, signing/release status and download links.
- [ ] Remove obsolete motion/hero geometry only when unused; preserve accessibility and anchors.
- [ ] Inspect all required viewport classes, dark mode, keyboard/touch/reduced motion and zoom.
- [ ] Run asset sync, Astro check and production build; verify links and policy content.
- [ ] Verify no Swift/native changes; record evidence and commit.

## Phase 7 — legacy design cleanup after redesign

Begin after the initial refinements land, repeat within each app's migration, and
finish with a family-wide search after all redesigned surfaces are in place. Cover
Cloakyard, CloakPDF, CloakIMG, CloakResume and CloakDrop's website, including editor
interiors, custom controls, canvas chrome and less-visible states.

- [ ] Inventory legacy design findings by repository and source location; record
      replacement/removal, remaining work and verified exceptions in the audit evidence.
- [ ] Search for obsolete tokens, palettes, fonts, spacing/radius/shadow scales,
      breakpoint/theme overrides, hardcoded styles and compatibility aliases.
      Replace live UI uses with Air primitives and remove unused definitions.
- [ ] Find duplicate or abandoned components, stylesheets/selectors, imports,
      hooks, feature flags, conditional branches and commented-out UI experiments.
      Check routes, dynamic imports and generated class names before deleting.
- [ ] Remove superseded animation/keyframe/shader code and dependencies that are
      unused after migration; keep motion aligned with Air and reduced-motion rules.
- [ ] Audit old icons, illustrations, fonts, screenshots, social/PWA artwork and
      asset-generation scripts. Replace active product imagery and remove orphaned
      assets only after checking their runtime, metadata and documentation consumers.
- [ ] Remove stale design directions and references from contributor instructions,
      README files, comments, examples, component studies and other maintained docs.
      Keep DESIGN.md authoritative and synchronize any portable-contract corrections.
- [ ] Update tests, fixtures and visual baselines that encode superseded UI only
      after validating the replacement; preserve feature and accessibility assertions.
- [ ] Remove obsolete packages/configuration and refresh lockfiles, build inputs
      and PWA/precache references where affected; verify no broken imports or asset URLs.
- [ ] Preserve document/template styling, user content colours, exported output,
      KERR and native macOS exceptions. Retain useful historical audit evidence as
      clearly labelled history, never as current design guidance.
- [ ] Run available dead-code checks and repository-required format/lint/type,
      feature tests and builds for each cleanup piece. Inspect affected controls
      and states at desktop/laptop/tablet/mobile sizes in light and dark themes,
      including keyboard, touch and reduced motion; commit only after passing.
- [ ] Repeat legacy-name/style/reference searches across all five repositories.
      Record search coverage and explain remaining matches; no unexplained obsolete
      design code or conflicting instructions may remain at final sign-off.

## Phase 8 — family-wide regression and completion

- [ ] Compare all landing pages together at the same widths/themes.
- [ ] Compare controls, editors/canvases, tool panels and overlays across the three web apps.
- [ ] Review every surface inventory entry; none may remain unreviewed without a named reason.
- [ ] Re-run affected feature suites after shared corrections and inspect generated outputs.
- [ ] Check all contract/token hashes and eliminate stale authoritative Workbench instructions.
- [ ] Validate new-app adoption from the portable bundle in an independent directory.
- [ ] Check fonts/assets/privacy requests, startup/build budgets and shader fallbacks.
- [ ] Confirm KERR is unchanged and its main-site listing has no preview.
- [ ] Final per-app checks/builds, visual evidence, clean git state and commit ledger.
- [ ] Mark the persistent goal complete only after every required item is verified.

## Commit ledger

Governance commits (no product runtime changes): Cloakyard `8d5dcea`, CloakPDF
`5a1755f`, CloakIMG `9cd1200`, CloakDrop `5133124`. Each passed its applicable
checks. Resume had an earlier serial 288/288 pass, followed by focus/export/entry
timing failures. Its latest full run is 286/288; its commit gate remains closed.
The Air refinement
03 design checkpoint is recorded in Cloakyard's git history after reference checks.
No product implementation commits. Native code and KERR are unchanged.

Design/audit checkpoints: Cloakyard `721911c` established refinement 03;
CloakPDF `4830570` records the complete default-panel audit and synchronized opt-in
reference after format/lint/type, dead-code, 355 units and production build passed.
The family signature/dense-control follow-up is recorded in Cloakyard git history.
These commits do not migrate production UI or waive remaining feature gates.

CloakDrop `4124a5b` saves its complete website baseline audit and opt-in refinement
03 bundle. Astro check/build, asset sync, integrity, isolated portability and
inventory idempotence pass. Baseline UX failures remain migration requirements;
no production website or native code was changed.
