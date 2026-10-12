# Air implementation plan

Prepared 2026-10-12 after the request to commit the current work and plan rollout.
This document defines execution order and commit boundaries. The exhaustive scope
remains in [UX_REFRESH_TODO.md](../../UX_REFRESH_TODO.md); the component matrix is
[design/air/COMPONENTS.md](../../design/air/COMPONENTS.md). A checked reference study
is not a migrated product. This planning checkpoint starts no production redesign.

## Starting point and decisions

- **Direction:** Air. Canonical source: `cloakyard/design/air/`. Reference checkpoint
  `340aee8`; contract SHA-256 prefix `dc6032235f40`. `1.0.0` remains a design-review
  candidate until the remaining base patterns and detailed review gate are closed.
- **Scope:** Cloakyard home, all CloakPDF/CloakIMG/CloakResume web surfaces, and the
  entire CloakDrop website. KERR's app and native macOS UI retain their appearance.
  Cloakyard shows KERR as an exploration link with no screenshot or simulated preview.
- **Order:** finish the base → establish production adapters → Cloakyard → CloakPDF
  → CloakIMG → CloakResume → CloakDrop website → complete family validation.
  PDF establishes the production editor patterns; IMG and Resume reuse them while
  retaining their different canvas and writing workflows. Phases match the family TODO.
- **Preserve:** all features, local-data boundaries, undo/history, cancellation,
  document/image fidelity, existing URLs and truthful download/model disclosures.
  No document/template font, colour or geometry changes are part of the UI refresh.
- **Delivery:** small commits on `codex/air-refresh`, each after its own passing
  checks. Local commits are authorized; pushing, merging and deployment are separate.

## 0. Close the base before product screens

Each item below is a separate reference/spec commit with evidence. Reuse the
existing studies and completed checks; do not restart the visual direction.

| Piece                       | Deliverable                                                                                                                     | Exit condition                                                                                                                    |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Reading and recovery        | Long privacy page, shared navigation/footer, not-found, load failure and preserved-work recovery                                | Reading measure, links, focus and long content pass both themes and every layout class                                            |
| Remaining control states    | Upload/drop, progress/cancel/retry, long lists/layers/history, toast/undo, nested popovers/submenus and confirmation stacks     | Real interactions defined, no inaccessible hover-only action, correct Escape order and focus return                               |
| Editor-specific base        | Complete relative UI typography; colour/curves/levels, rich-writing and date/signature states from the existing audits          | Narrow/tablet/coarse controls remain usable; output surfaces are unaffected                                                       |
| Browser and device behavior | Custom-select adapter where native `base-select` is absent, real zoom, software keyboard, touch and assistive-technology checks | Chromium, Safari/WebKit and Firefox behavior recorded; unavailable checks remain open                                             |
| Motion and Shaders          | Production-suitable locally bundled light, static/reduced-motion fallback, nested-dialog interruption                           | Finite motion, offscreen disposal and measured payload/startup/GPU costs meet recorded budgets; no decorative GPU work in editors |
| Review and freeze           | Updated contract, component matrix, reference and dated approval/revision record                                                | Detailed Air review closes before runtime adoption; subsequent shared corrections return to this source                           |

Readiness is component-specific: an unresolved AI state blocks that state, not an
unrelated finished privacy specimen. Never label the whole system complete while
one of these required patterns remains undefined or untested.

## 1. Build the production foundation once

1. Promote reusable behavior from the study into canonical production adapters
   under `design/air/`, with clearly separated sample data and domain actions.
   React adapters use the existing app React runtime and direct primitive imports.
   Never import the standalone study bundle into an app: it includes its own React
   runtime and demonstration-only remove/restore behavior.
2. Extend the existing sync/manifest/check tooling to pin adapter sources as well
   as tokens/CSS. Copy self-contained modules into each React app's `src/ui/air/`;
   imports remain local. No live upstream fetch or sibling checkout requirement.
   Astro uses the same tokens, classes and interaction contract with native markup
   and minimal scripts; it does not need React merely to look consistent.
3. Provide buttons/icon actions, fields and compound fields, selection controls,
   menus/popovers/tooltips, dialogs/sheets, notices and progress. Define public
   states, labels, announcements, keyboard behavior and focus responsibility.
   Product wrappers supply values/actions; they cannot supply alternate skins.
4. Map existing CSS/Tailwind aliases to `--air-*`; migrate one coherent surface at
   a time. Keep temporary legacy bridges named and tracked with removal criteria.
   Do not apply broad font/colour/reset rules to document or image output trees.
5. Integrate the shared theme policy and input/motion preferences. System is the
   default; preserve any explicit user choice. Test portals and nested overlays,
   including stacking, not just controls rendered inside their normal container.
6. Add runtime conformance evidence to the inventory only when a surface is
   implemented. Extend checks for copied-adapter drift and output-style leakage.
   Establish matched visual fixtures and baseline bundle sizes before adoption.

**Gate:** isolated adapters pass behavior tests, all copied sources match their
revision, representative real product integrations pass without changing output,
and production dependency/bundle costs are recorded. The reference's lazy payload
ceilings are not production budget approvals.

## 2. Cloakyard home — first production expression

- **Commit A:** page/theme/type foundations and shared header, navigation, focus,
  footer and complete product links. Preserve hash navigation and narrow no-JS use.
- **Commit B:** hero, product presentation and principles. Replace KERR's preview
  with the exploration link. Add the reviewed finite Air light with its fallback.
- **Commit C:** metadata/social image and maintained docs; remove replaced CSS,
  old hero/pipeline artwork, fonts and unused motion/assets after consumer checks.

**Gate per commit:** `vp check`, `vp build`, links/anchors/return navigation, all
responsive/theme/input checks, no console failures, no unexpected runtime requests,
and a recorded bundle comparison. A shell-only commit is not home completion.

## 3. CloakPDF — establish the complete editor pattern

| Commit slice                | Surfaces and preserved features                                                                                 | Feature evidence                                                                               |
| --------------------------- | --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Entry and reading           | Home, upload/drop, toolkit search, privacy, loading/error and recovery                                          | Existing routing/search/standalone entry checks; keyboard and malformed/encrypted inputs       |
| Editor shell                | Header, rail/search, inspector, page list/overview, canvas surround, zoom and selection chrome                  | Desktop/mobile editor smoke; tool changes preserve the stage, document and selection           |
| Shared and custom controls  | All 22 panels, including advanced states; date/time, colour, signatures, drawing and command palette            | Applicable interaction, signature, font, placement and resize suites; pointer cancel/undo/redo |
| Output and standalone tools | Export PDF/images/contact sheet/split; merge, images-to-PDF, compare, extract, passwords, signatures, inspector | Corresponding standalone/extended tests; inspect exported bytes/content and failure recovery   |
| AI, overlays and PWA        | Consent/model/cache/progress/cancel/retry, Ask PDF, modal stacks, update/offline prompts                        | AI suites when these surfaces change; real lifecycle and interruption checks                   |
| Closure                     | Remaining inventory states, screenshots, metadata, docs and legacy removal                                      | Full product gate and source-by-source inventory review                                        |

Run `vp check`, `pnpm check:dead`, `pnpm test` and `vp run build` on each piece,
plus applicable E2E tests. Before product completion run the full smoke, extended
and AI coverage. Preserve real redaction consequences, output quality and model
privacy disclosures. A model download test must use the documented supported path.

## 4. CloakIMG — reuse the shell, preserve the canvas lifecycle

- **Commit A:** landing, import/drop, privacy, errors and recovery.
- **Commit B:** editor shell, rail, inspector, mobile picker, canvas surround,
  layers/history and compare. Keep canvas identity and pool ownership intact.
- **Commit C:** tool families in separate commits: adjustment/colour/curves/levels;
  crop/resize/perspective/print; text/shapes/drawing/overlays; retouch/masks/redaction.
  Cover every one of the 26 desktop panels and every mobile tool, including modes
  hidden behind disclosures. Histograms/colour data remain functional visual data.
- **Commit D:** AI consent/download/cache/error/retry/cancel and export/batch flows.
- **Commit E:** remaining state coverage, PWA/social assets and obsolete design cleanup.

Before migrating commit/cancel controls, reproduce the recorded +0.4 Adjust
Cancel/re-entry finding on a fresh session. Resolve it in a focused behavior commit
if confirmed; changing the appearance must not obscure a rollback defect.

**Gate:** `vp check`, `vp test run`, `vp run build` including asset limits, relevant
`test:tools`/audit/probe scripts, pixel/output checks and real apply/cancel/undo/redo.
Validate alpha, HEIC/import errors, all supported export formats, layer reordering,
AI lifecycle and repeated previews. No screenshot substitutes for processing tests.

## 5. CloakResume — reuse controls, protect every template

- **Commit A:** landing, blank/sample/load/restore, privacy and recovery.
- **Commit B:** writing shell/section navigation and paginated preview surround.
  Correct tablet/coarse targets and undersized contact selectors.
- **Commit C:** all 13 sections in small groups, including repeated/nested entries,
  rich text, reorder alternatives, partial dates and colour/logo selectors.
- **Commit D:** template gallery, paper and format controls, review tabs and field
  jumps, local language-engine progress, modal/sheet/update states.
- **Commit E:** JSON/PDF save/load/export, failure/unsaved-work handling, PWA/social
  imagery, remaining inventory and old UI styles/assets/references.

**Gate:** `vp check`, complete `vp test run --no-file-parallelism` with all browser
cases actually executed, and `vp run build`; production browser/template checks
where affected. Keep all 17 templates × A4/Letter, pagination, long fields, links,
symbols, images, export text and document geometry intact. No timeout increase,
skipped template or weakened assertion may turn a failing gate green. Preserve
failure artifacts before rerunning an intermittent browser case.

## 6. CloakDrop website — complete all routes

- **Commit A:** shared layout/navigation/theme, home/hero/product/download/footer.
  Keep the real native screenshot as product evidence; only the surrounding web
  design changes. Preserve accurate OS/architecture/signing/release/download copy.
- **Commit B:** privacy and 404 reading/recovery layouts using the shared patterns.
  Correct baseline dark skip-link contrast, narrow enlarged-text clipping, coarse
  targets, tablet spacing, keyboard motion and no-JS menu behavior.
- **Commit C:** remove unused tokens/classes/band artwork and outdated maintained
  design references; refresh website metadata/imagery only where affected.

**Gate:** asset sync, `npm run check`, `npm run build` in `apps/site`, all route and
anchor/download/policy checks, both themes, no-JS and reduced motion. Verify there
are no Swift/native edits. The policy's meaning does not change in a visual refresh.

## Per-piece acceptance checklist

1. List affected inventory entries, real states, feature/output invariants and
   baseline findings before edits. Include empty, populated, invalid, disabled,
   busy, error, recovery, long content and selected/focused states as applicable.
2. Implement with the canonical tokens/adapters. Any missing shared rule is fixed
   in Cloakyard first and copied as one revision to affected adopters.
3. Inspect desktop 1920×1080, laptop 1440×900 and 1280×800, tablet 1024×768 and
   768×1024, phone 390×844 and 320×568, plus 844×390 landscape. Test breakpoint
   neighbours for each changed layout; preserve the contract's full size matrix.
4. Inspect light/dark/system, mouse/keyboard/coarse touch, focus order/return,
   actual 200% zoom and enlarged text, reduced motion, forced colours, long labels,
   and open overlays. Check software keyboard/assistive technology on real devices.
5. Run mandatory checks and affected feature suites. Inspect generated PDFs/images
   independently of editor screenshots. Record failures and fix them before commit.
6. Search for obsolete design code in the changed area: literals/aliases, unused
   selectors/components/imports, old fonts/icons/artwork, duplicate motion, docs,
   generated/PWA references and dependencies. Confirm dynamic consumers before
   deleting. Keep a named exception for document output and genuine visual data.
7. Record exact revision, routes/states, sizes/themes, commands, results, screenshots,
   output comparisons and remaining limitations. Inspect the diff and commit the
   bounded piece only after its required gates pass; keep working copies reviewable.

## Family completion and rollback

The final comparison covers every route and every inventory source/state across
all five web products, including custom controls inside editors. Require no
unreviewed token/component variants, no unresolved required feature gate and no
obsolete authoritative design references. Rebuild social/PWA imagery from the real
finished product. Verify standalone copies and offline/local assets independently.

Keep old feature behavior during each visual slice and use local Git commits as
rollback boundaries. Revert a failed slice rather than introducing a competing
skin or hiding a feature. Shared changes carry migration notes and are revalidated
in every affected app. Do not perform a coordinated public release until the
family comparison and user-requested review are complete.

First implementation action after this planning checkpoint: finish and validate the
reading/privacy/recovery base, then close the remaining base gates above. Production
work starts with the shared adapters and Cloakyard home in the stated order.
