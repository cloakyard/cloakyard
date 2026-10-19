## CloakResume product requirements

- Scope: landing/start/load/restore, editor shell and all content sections, section
  picker/rail, paginated canvas, formatting, template gallery, ATS/writing review,
  date/colour/logo/rich-text controls, overlays, privacy, export and PWA notices.
- Air applies to application chrome. All 17 résumé templates retain their selected
  fonts, colours, paper, spacing, images and output geometry in both app themes.
  Do not use a global CSS rule that leaks interface typography into a résumé.
- Preserve A4/Letter pagination, natural word wrapping, links/symbols and multi-page
  PDF fidelity. Long entries, custom sections, statistics and images must survive
  preview, JSON save/load, browser restore and export.
- Desktop uses rail → left writing panel → preview (420px reference, 360px compact). Narrow screens
  keep one active section/picker and a persistent preview with an expanded mode.
  Keyboard/short-height/landscape handling must keep input and actions accessible.
- Keep keyboard reorder alternatives, stable focus on section changes, issue jumps,
  focus return, rich-text selection and unsaved-work protection.
- Preserve all 13 section workflows, including nested role/project/custom bullets,
  comma-separated skill/tool fields, custom proficiency values, optional headings,
  quick stats and extra fields. Repeated entries use the shared writing patterns.
- Profile keeps multiline headlines with the existing four-rendered-line limit,
  local photo validation, optional logo search and rich summary formatting.
  Experience keeps month/year and year-only dates, Current job and end-date restore.
- Document controls are the template library, primary colour and A4/Letter size.
  Preserve direct PDF export and separate JSON save/load, plus busy/error/recovery
  states. Do not replace those flows with speculative text-size or pagination
  switches merely because a design study shows them.
- Review retains Overview, Keywords, Insights and Parse, local engine progress,
  missing-JD guidance, field-linked hints and explicit suggestion application.
  Test every overlay at tablet touch sizes as well as on phones; width-based
  compact utilities must not reduce their effective targets below 44px.
- ATS scores are heuristic review aids, not a guarantee of hiring-system success.
  Résumé/job-description content stays local; language assets may be downloaded.
- Local CSS/Tailwind bridges alias the common tokens. The output template system
  is the only typography/colour exception; custom app widgets are not exempt.
- Required gates: `vp check`, `vp test run` (including editor browser and complete
  template matrix, with no missing-browser skip), `pnpm run build`, production
  browser/template tests where affected, exported-document inspection and the
  complete family responsive/theme/input matrix.
- Keep a per-component/state inventory and evidence in `docs/air/`. Local tokens
  and this complete contract travel with the repository.

### Runtime adoption boundaries

- Entry, privacy, confirmations and render recovery consume the pinned
  `src/styles/air.css`; `air-entry.css` owns entry composition. The editor shell,
  header actions, section rail/picker/panel frame, paper/view segments and preview
  dock use Air with `air-editor.css` composition. Section interiors, custom widgets,
  library/review sheets and PWA notices retain the legacy bridge until their slices.
  Template fonts and output geometry remain independent of both bridges.
- Entry supports landscape and native in-flow compact navigation. Blank/sample
  and validated file replacement require confirmation when a current draft exists;
  cancellation and malformed files preserve it. Pending file reads disable entry
  actions and cannot start a duplicate read.
- Air recovery adapters opt into background inertness while retaining the shared
  focus/scroll lifecycle. Preserve native Safari opener focus, privacy swipe/cancel,
  keyboard wrap and nested notices. Recovery describes the last saved draft without
  guaranteeing that unsaved changes survived a render failure.
- The landing horizon uses the pinned finite light lifecycle and an SVG fallback.
  The optional shader is excluded from the PWA shell; reduced motion and unavailable
  graphics must not prevent entry. Physical GPU/battery acceptance remains separate.
- `node scripts/test-air-entry.mjs` checks the production entry and recovery matrix.
  Run full tests with `vp test run --no-file-parallelism`; use
  `CLOAKRESUME_BROWSER_BUILD=production` for the built browser/template sweep.
  Wait for committed responsive panels and font-driven textarea resizing before
  measuring focus/scroll; preserve assertions, templates and timeout budgets.

- The editor uses a 360px compact desktop writing panel and 420px from 1280px,
  beside the 72px section rail. The 32px mark retains a 44px link target. Header
  groups reflow at enlarged text; narrow headers retain the named mark link.
- Portrait compact editing keeps equal preview/editor panes. From 640–1023px on
  screens at most 600px high, the two panes sit side by side. Both remain scrollable;
  expanded Preview and the skip-to-editor action remain available. No rotation lock.
- The panel heading scrolls with its content on short screens. Picker handoffs move
  focus to the selected section or back to its selected row; resizing does not steal
  focus. The zoom dock is outside document scrolling and stays reachable at any zoom.
- `node scripts/test-air-editor-shell.mjs` checks shell geometry and all 13 navigation
  routes plus preview/paper operations. These checks do not certify the remaining
  editor interiors, review sheets, PWA notice, real touch/keyboard or assistive speech.

- Shared text/CSV/textarea fields and scoped rich-text formatting use Air labels,
  help, contours and capability-based editable text. Blank hint reserves and the
  compact font variants are removed. Auto-grow retains its mirror measurement;
  hint actions reserve 56px so text/caret stay clear of their 44px hit target.
- A format scope retires removed textarea handlers and clears its active field;
  stale toolbar actions cannot resurrect removed text. Pointer and keyboard
  formatting preserve the current selection. Selected formatting is neutral.
- Date/logo controls and writing-hint popup interiors remain partial. Do not
  infer their adoption from the shared field slice. `node scripts/test-air-writing-fields.mjs` checks six field
  consumers across all viewport classes and text sizes; native IME/touch and
  assistive speech remain separate acceptance gates.

- Repeated entries use open headings, contextual 44px reorder/remove controls,
  neutral Add actions and plain empty guidance. Nested bullets place their actions
  above the full-width writing field. Shared `BulletList` retains UI-only stable
  identities while saved bullets remain strings, including duplicates.
- Move boundaries use guarded `aria-disabled` actions so focus survives a move.
  Pointer activation explicitly focuses its action for Safari; keyboard alternatives
  and polite position announcements remain available. A single removal confirmation
  follows its entry through moves; Escape cancels, and removal focuses a surviving
  field or the appropriate Add action. External text drops remain native.
- `node scripts/test-air-repeated-entries.mjs` checks repeated controls and removal
  confirmation across all viewport classes/themes/text sizes. Individual section
  date/logo/select/contact/review widgets remain separate migration gates.

- Contact and Languages use labelled Air fields with content-aware paired columns.
  Contact retains all nine saved kind keys, values, browser input/autofill semantics
  and permissive validation. The value remains intact when its kind changes; an
  invalid field keeps its associated error when the blue focus contour appears.
- Native selects consume `select.air-field` directly, without the textarea layout
  helper or a duplicate arrow. The shared customizable picker supplies Air options
  where supported; native browser/OS fallback retains selection, typeahead and
  dismissal. Imported custom proficiency values remain selected options until the
  user chooses a replacement. No schema or output typography change.
- `node scripts/test-air-contact-selects.mjs` checks all contact kinds, custom/empty
  proficiency and opened pickers across all viewport classes/themes/text sizes.
  Real software-keyboard and spoken assistive acceptance remain separate.
