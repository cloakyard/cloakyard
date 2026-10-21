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
  dock use Air with `air-editor.css` composition. All 13 content sections and their
  writing widgets and template library use Air; review sheets and PWA notices retain the legacy
  bridge until their slices.
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
- `node scripts/test-air-writing-fields.mjs` checks shared field consumers across
  all viewport classes and text sizes; native IME/touch and assistive speech remain
  separate acceptance gates. Writing-hint acceptance is recorded separately below.

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
  writing-hint/review widgets remain separate migration gates.

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

- Month/year fields use the canonical field contour, a separate clear target and
  the Air popup/selection surfaces. Month+year, year-only, empty and Present stay
  distinct; imported legacy strings are never normalized merely by opening a
  picker. The year grid includes an imported year outside the ordinary range.
- Experience Current job keeps its 44px checkbox row and prior-end restoration;
  Education keeps its Present choice. Date pairs reflow by available content width.
  Narrow/enlarged grids reflow without shrinking targets; short viewports use the
  available popup height and internal scrolling. The popup retains the 16px safe
  edge, 8px anchor gap where space permits, and visual-viewport repositioning.
- Opening focuses the non-editable surface. Year choice and clear actions restore
  surviving focus, Escape closes the year view before the popup, Tab can leave the
  non-modal surface, and closing controls are inert. Safari pointer openers focus
  explicitly. Legacy popup skin/focus rules exclude Air popovers.
- `node scripts/test-air-dates.mjs` checks four date states and Current job across
  all viewport classes/themes/text sizes. Native software-keyboard, physical touch
  and spoken assistive acceptance remain separate; emulation does not close them.

- Profile/Skills logo pickers use Air fields, search and a neutral selection grid;
  retain stable icon names, the 80-result cap and every existing icon. Unknown
  imported names remain visible and unchanged until an explicit choice or clear.
  Search retains a stable-height result area so filtering cannot move a tap target.
- Logo opening/closing is immediate. Mouse/keyboard opening focuses search;
  touch opening focuses the surface without summoning a software keyboard.
  Escape/clear/selection restore the trigger; Tab can leave the non-modal popup.
  The logo and date portals share viewport placement, safe edges and short-screen
  fallback. Native focus and emulated touch do not certify physical input devices.
- Profile photo actions use Air, keeping the exact image bytes, JPG/PNG and 2 MB
  validation, decode errors and stale-read guards. Cancellation preserves the
  portrait; removal returns focus to Add photo. No template/output typography,
  geometry or image pixels change. `node scripts/test-air-logo-photo.mjs` covers
  portrait/initials, selected/search/empty icons, all viewport classes and themes.

- Primary colour uses the pinned Air hue/saturation mapping, full-brightness wheel,
  Brightness, exact hex and optional independent native hue/saturation ranges.
  Preserve all ten presets and the exact saved colour until an explicit edit;
  no HSL lightness clamp or implicit RGB rounding on opening. Achromatic edits
  retain hue (and saturation at black); pointer cancellation restores the exact
  pre-drag value. Invalid hex remains editable with an associated blur error.
- The colour body and portal are shared by both toolbar paths. Desktop is a
  non-modal popover with Tab exit; compact mode is modal with background inertness,
  contained focus and return to More options. Phone drag-handle dismissal and
  cancellation remain available without intercepting wheel gestures. Reuse date/logo
  viewport placement,
  16px safe edges and internal scrolling. Fine input starts at Brightness; coarse
  input focuses the surface. Hidden fine-tuning ranges never enter the Tab order.
  Wheel arrow/Shift/Home/End shortcuts remain available alongside native ranges.
- Colour pixels are functional data; surrounding controls remain neutral Air.
  Preserve normalizePrimaryColor, derivePalette and every template/export path.
  `node scripts/test-air-colour.mjs` covers responsive/theme/text/forced-colour
  states and offset visual viewports. Physical touch, software keyboards, IME and
  spoken assistive acceptance remain separate gates.

- Writing hints use the Air popover, readable kind/phrase/reason rows, neutral
  replacement actions and a visible close control. They are optional suggestions,
  separate from invalid-field errors. Text and targets grow at enlarged text;
  long phrases and replacements wrap, and long lists scroll within safe edges.
- Preserve the local Harper report, ordering, category names and exact first-match
  replacement callbacks. Opening or dismissing cannot change content. The six
  consumers are summary, experience bullets, project description/roles, award
  detail and custom bullets. Target JD stays outside the existing grammar scan.
- Opening focuses the readable surface, with no editor animation or software
  keyboard request. Escape/close returns to the trigger, non-modal Tab can leave,
  and outside pointer/focus dismisses. Applying returns to the writing field as
  report invalidation removes its hint trigger; a refreshed report stays closed.
  Review jumps focus the named field with the single Air contour, replacing the
  obsolete decorative glow. Loading/error/no-report states show no stale badges.
- Hints reuse date/logo/colour viewport placement. `node scripts/test-air-hints.mjs`
  covers all six real production consumers plus explicitly labelled long-copy
  stress, short screens, both themes, enlarged text and coarse/forced-colour modes.
  Native Safari and Firefox zoom are separate from physical touch/software keyboard,
  OS IME and spoken assistive acceptance. The full review sheet remains a later slice.

- All 13 content sections use the shared writing, repeated-entry and picker shells.
  Awards/Certifications year fields and Quick stats/Extras pairs reflow by available
  width and relative text size. Year values remain free-form strings; opening,
  editing another field and reordering never normalize imported values.
- Quick stats and Extras retain independent arrays, IDs, add/move/remove actions
  and output behavior. Their headings use ordinary Air text and open grouping.
  Profile formatting help is associated with the summary field. The unused legacy
  uppercase/mono field-label skin is retired after tracing its final consumers.
- Target JD uses a neutral local-processing note and the shared primary action.
  Coarse targets stay at least 44px at desktop widths. Analyze keeps its review
  behavior, focuses its trigger before opening (including Safari pointer use) and
  restores that focus on dismissal. JD persistence and exclusion from Harper stay
  intact; only résumé prose participates in the existing grammar scan.
- `node scripts/test-air-sections.mjs` checks every section empty/populated, imported
  custom values, both themes, text enlargement, breakpoint edges, coarse/fine input
  and forced colours. Complete source review plus existing field/date/logo/hint and
  entry tests establish software acceptance; physical touch/software keyboard, OS
  IME and spoken assistive gates remain separate. Review/overflow/export,
  PWA/static recovery and real preview assets are still later slices.

- The template library uses the shared wide Air dialog, compound search field,
  neutral selection and readable category/name/description/level metadata. Names
  precede their live paper previews, so choices remain identifiable on short screens.
  The header and close action stay reachable while the body scrolls; gallery height
  stays stable when filtering. The grid reflows with available width and text size.
- Preserve all 17 actual templates, category ordering, badge labels, name/description/
  level/category matching, selected state and immediate selection. Search defers
  filtering during composition, announces counts/no results, and clearing restores
  input focus. Sample previews appear only for untouched drafts; identity, stats,
  extras, custom, interests and tools-only drafts retain their own content.
- Template previews remain inert, use the author's primary colour and retain real
  lazy template modules, fonts, A4 scaling and document geometry. No gallery style
  may alter document typography, symbols, images or JSON/PDF output.
- The library reuses the established modal lifecycle, background inertness and
  compact swipe handling. Frequent library opening/dismissal is immediate. Native
  Safari opener focus, keyboard wrap/return, nested save-error notices and drag
  cancellation remain supported. The toolbar stays mounted across responsive
  changes; dismissal returns to the surviving Template or More options control.
- `node scripts/test-air-library.mjs` checks gallery, filtered and no-results states,
  blank/populated drafts, every viewport class, both themes, text enlargement,
  coarse/fine targets and forced colours. Native Safari and actual Firefox zoom
  are separate from physical touch/software keyboard, OS IME and spoken assistive
  acceptance. Review, overflow/export, PWA/static recovery and real assets remain.
