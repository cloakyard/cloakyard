# Air code cleanup record

Keep this record current with each bounded piece. Trace imports, JSX, event
listeners, CSS selectors, asset references and test consumers before removal.
Record the replacement, tests and any live consumer that prevents deletion.
An unused-looking filename or legacy token is not proof of dead code. Do not add
new abstractions or dependencies solely to tidy a surface. Historical evidence
keeps its original filenames; current source inventories and handoffs must agree.

## 2026-10-21 — CloakResume Options and export

Product details: `../cloakresume/docs/air/code-cleanup.md` (relative to the family
repository root; documentation only). Evidence lives in Resume
`docs/air/evidence/options-export-2026-10-21.json`.

Removed the single-consumer legacy BottomSheet component and unused configurable
props, its eyebrow/old heading/footer/close skin, overlay/sheet CSS and six dead
keyframes, the overflow-item CSS and the delayed handoff. The replacement uses
the shared Air frame and existing modal/swipe lifecycle. Export and document
output code stays in place. Current documentation no longer refers to the
nonexistent `Toolbar.tsx`; the real header is composed in `App.tsx` and `Layout.tsx`.

Retained with traced consumers:

| Code                                                | Active consumer / next removal condition                                                             |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `useAnimatedPresence`, `.cr-popover`, `.cr-toast`   | MonthYearField and ReloadPrompt; audit PWA before removing its styles, keep the date adapter intact. |
| `.tb` and its compatibility tokens                  | ReloadPrompt's current update actions; migrate in the next PWA piece.                                |
| Toolbar event bridge                                | ToolbarOverflow opens Template and Scan through ToolbarCenter; it is live behavior, not unused code. |
| `Editor.tsx`, `GithubIcon.tsx`                      | SectionPanel and ErrorBoundary respectively; both still render.                                      |
| `pdfExport.ts`, `pdfFonts.ts`, template/font assets | Lazy export and output preservation; no removal inferred from initial-bundle absence.                |

Also removed unused `BP.narrow` / `BP.tiny` exports after source, test, script and
config searches found only `BP.mobile` consumers. The legacy focus selector now
excludes Air dialogs, allowing the portable blue focus rule to own those controls.

Replaced mirrored media-query state/effect with the browser’s current external-store
snapshot. This removes stale responsive state during modal dismissal; a delayed
notification regression covers focus restoration after resize.

Next cleanup: audit the PWA prompt, registration/update lifecycle, static 404 and
asset generators. Check obsolete loader/HTML/icon/screenshot references as each
replacement lands. Do not sweep CloakIMG's parked dirty draft or KERR native UI.
This is a scoped record, not a claim that every repository is free of dead code.
