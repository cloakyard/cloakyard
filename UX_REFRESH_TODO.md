# Cloakyard Air — full UX refresh

Status: **active** · Direction approved: **Air** · Started: **2026-10-11**

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
- Evidence belongs in `docs/air/validation.md`; large screenshots may stay in
  task-owned output with exact paths recorded. Record actual viewport/theme/state.

## Phase 0 — scope, baseline, and full-surface audit

- [x] Confirm Air direction and create the persistent refresh goal.
- [x] Inspect clean git state and create isolated feature branches in all five repos.
- [x] Read existing design contracts and repository instructions.
- [x] Inventory UI files and existing test/build commands.
- [x] Baseline format/lint/type checks: Cloakyard, PDF, IMG, Resume.
- [x] Baseline Drop site check/build.
- [ ] Baseline all existing unit/logic suites; record failures before changing UI.
- [ ] Inspect PDF desktop/laptop/mobile editor, every tool panel, standalone utilities and overlays.
- [ ] Inspect IMG desktop/laptop/mobile editor, every tool panel, custom colour/curve controls and AI states.
- [ ] Inspect Resume desktop/laptop/mobile editor, every section, template/ATS/format/export overlays.
- [ ] Inspect Drop website, download flow, privacy page and 404 at every layout class.
- [ ] Inspect narrow/landscape phone handling, software keyboard and 200% zoom.
- [ ] Audit focus/keyboard/touch, reduced motion, dark mode and long-content cases.
- [ ] Record findings with source locations and concrete validation coverage.

## Phase 1 — portable Air contract and enforcement

- [x] Write the complete family contract: foundations, custom controls, states, layouts, accessibility, motion and exceptions.
- [x] Replace/create each repository's DESIGN.md, including Drop's website specification.
- [x] Preserve domain invariants and output-format exceptions in product appendices.
- [x] Add exact-copy contract synchronization and drift checks; no sibling dependency at runtime.
- [ ] Add canonical versioned tokens and shared CSS component primitives.
- [ ] Map existing token/Tailwind aliases to Air; eliminate competing palettes/type/radius scales.
- [ ] Add a portable component reference covering controls and all applicable states.
- [x] Enforce adoption instructions for current and future apps through repository guidance.
- [ ] Add static conformance checks with a narrow documented content/visual-data exception list.
- [-] Add CI/local validation entry points and screenshot baseline policy. Contract/inventory CI is installed; runtime style and screenshot gates follow with the shared bundle.
- [-] Validate standalone checkout portability and token/contract equality. All five standalone contract bundles pass; runtime tokens are next.
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

- [ ] Refresh shared header, hero, product/craft/privacy sections, download/install guidance and footer.
- [ ] Preserve native app screenshots as product evidence; apply Air only to surrounding website UI.
- [ ] Privacy and 404 use the same Air reading and navigation patterns.
- [ ] Preserve accurate supported OS, architecture, signing/release status and download links.
- [ ] Remove obsolete motion/hero geometry only when unused; preserve accessibility and anchors.
- [ ] Inspect all required viewport classes, dark mode, keyboard/touch/reduced motion and zoom.
- [ ] Run asset sync, Astro check and production build; verify links and policy content.
- [ ] Verify no Swift/native changes; record evidence and commit.

## Phase 7 — family-wide regression and completion

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

No implementation commits yet. Record repository, commit, scope, checks and evidence
here after each passing piece. Native application code and KERR remain out of scope.
