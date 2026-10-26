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

Retained at the Options checkpoint (superseded by the PWA cleanup below):

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

## 2026-10-21 — PWA and static recovery

- Retired the legacy `cr-toast` and `.tb` selectors, toolbar/toast presence rules,
  Hallmark notice header, spinning icons and timed reload fallback. ReloadPrompt
  now uses shared Air actions in normal flow and real worker activation.
- Removed `public/404.html` (527 legacy lines). Root `404.html` is a Vite HTML
  input importing the pinned Air CSS and one small recovery stylesheet; requested
  path enhancement has no React dependency. Updated active test references.
- Stopped using the Workbox message helper that discards its asynchronous result;
  direct waiting-worker delivery catches synchronous failure. Registration listeners
  remain active after failed/later installs and are removed on unmount.
- `useAnimatedPresence` and `.cr-popover` remain live in MonthYearField. They are
  not dead code. Existing lazy exporter, templates, fonts and file schema are unchanged.
- Remaining asset work: `build-pwa-screenshots.mjs` still uses the retired `.cr-input`
  selector. Replace it with actual editor captures in the next asset piece, and
  trace Archivo/JetBrains registrations, legacy tokens and all image/metadata consumers
  before removing anything. Do not infer unused assets from the initial bundle.
- Ignore the local `.wrangler/` development cache. No new dependency was added.

Evidence: `docs/air/evidence/pwa-recovery-2026-10-21.json` in CloakResume.
Next: actual OG/PWA/README assets and metadata, then full-product cleanup and
acceptance. Physical/assistive gates remain open; CloakIMG stays parked and last.

Asset-piece cleanup follow-up: `.cr-input` styles have no current TSX consumer;
the remaining script selector is stale. Remove that obsolete selector and its
unused skin together when replacing the screenshot generator.

## 2026-10-21 — Preview assets and metadata

- Replaced `iPhone.png` / `iPad.png` with four content/theme-named production
  captures. Updated every active manifest, README, artwork, generator and test
  reference together. Historical evidence retains its original asset names.
- Removed 58 lines of obsolete `.cr-input` field/invalid/disabled/hover/focus skin
  and superseded comments. Searches of TSX, scripts, tests and generated markup
  found no remaining consumer; actual capture readiness now uses Air fields.
- Reduced the two generators from 293 to 178 lines (including comments/formatting).
  OG renders local artwork directly; the screenshot generator owns one production
  preview. Independent contexts, seeded/fixed-date synthetic content, decoded
  images/fonts and failure propagation replace shared session/dev-server assumptions.
  No new package, runtime abstraction or application feature was added.
- README, CONTRIBUTING and brand-assets documentation now point to Air rather than
  the retired Workbench palette, typography, frame and tablet screenshot. The
  historical design audit remains clearly marked history, with a current follow-up.
- Preserved the canonical mark, launcher/maskable assets and `favicon.svg` /
  `logo.svg` compatibility copies for older saved URLs. The existing brand tests
  verify their glyph, RGB output and safe-zone geometry.

Retained after consumer tracing:

| Code/assets                                                 | Live consumer and follow-up                                                                                                                                                                  |
| ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Archivo registration/file and `--font-body` / `--font-sans` | Base/body/form bridge in `index.css` and `cloak-family.css`; audit inherited and transitional states in final cleanup before replacing.                                                      |
| JetBrains registration/file and legacy font tokens          | Remaining typography bridge; `Preview` has a `font-mono` loading state. Audit actual computed resolution and unused token exports in final cleanup, then remove proven unused registrations. |
| Geist, Instrument Serif, Lora and document font preparation | Named template styles and PDF rendering; protected output, not obsolete application decoration.                                                                                              |
| `.cr-field`, `.cr-field-row`, `.cr-stack`                   | Shared fields, Profile/Projects/BulletList formatting and section layout.                                                                                                                    |
| `.cr-popover` and `useAnimatedPresence`                     | MonthYearField’s live positioning/presence adapter.                                                                                                                                          |
| Toolbar bridge, Editor, GithubIcon and lazy export          | ToolbarOverflow, SectionPanel, ErrorBoundary and explicit export respectively.                                                                                                               |

No dependency, template, exporter or file-schema changes. Evidence:
Resume `docs/air/evidence/preview-assets-2026-10-21.json`. Next: full-product cleanup/acceptance,
including token/font consumer resolution, remaining inventory gates and the
44px target sweep. Physical touch/software keyboard, OS IME, assistive speech and
GPU/battery acceptance remain separate. CloakIMG stays last and untouched.

The asset pass also updates the README audit assertion to verify actual Air
inventory coverage for every live TSX file. Historical source coverage and output
exemptions remain enforced. `cleanup-followup.json` in the asset evidence lists
conservative token candidates after checking source, token chains and compiled
Tailwind references; these are candidates, not blanket deletion permission.
DragList’s `.cr-drag-item` is explicitly live. Review only its earlier transform
override and the non-Air-only date-popup skin during the next bounded cleanup.

## 2026-10-21 — Resume unused foundations

Removed 61 unused token names / 62 declarations after source/script/compiled CSS
consumer tracing, the 241-line unused JSON mirror and two unreachable non-Air
popup skin rules. README/historical links and source tests now identify pinned
Air as normative. No font, template, export, schema or package change.

Evidence: Resume `docs/air/evidence/unused-foundations-2026-10-21.json`. The
remaining 63 token names have recorded consumers. Three transitive orphan
candidates (`--color-ink-2`, `--color-overlay`, `--color-rule`) and the live
Archivo/JetBrains base/loading bridges belong to the next deliberate migration.
Preserve explicit rich-text code typography, all template families and PDF font
preparation. Keep DragList and the MonthYearField placement/presence adapter.
This slice does not close full-product or physical/assistive acceptance.

The user additionally authorized final family dependency updates and dev → PR →
main integration once remaining work passes. Initial direct-dependency discovery
is saved in `evidence/dependency-preflight-2026-10-21.json`; upgrades, transitive/
native/security audits and integration remain pending. Keep the explicitly
approved official yt-dlp bundle exception.

Committed as Resume `f05f97e`: 372/372 production tests, zero skips, 537.78s;
88 responsive comparisons, 256 date layouts, neutral links and exact template/PDF
output pass. All 283 recorded source/build files remain unchanged after the hook.
Detailed date/link measurements are retained losslessly as compressed JSON beside
compact summaries, avoiding repeated expanded evidence in the source tree.

## 2026-10-21 — Dependency rollout preparation

[The rollout ledger](ROLLOUT.md) records versions, checks and gates. Removed
obsolete release-age exclusions and root's Miniflare/sharp override; compatible
resolution supplies current versions. Resume no longer needs fast-uri/sharp
overrides, and Workbox uses scoped glob 13.0.6 instead of deprecated glob 11.
Active security overrides remain. No new runtime abstraction or package was added
for the dependency update. CI action versions are pinned to current release SHAs.

PDF's released reduced-motion fix removes mirrored provider media-query state and
listeners; each dialog reads a current browser snapshot. Its delayed-notification
regression passes. The user explicitly accepted the separate pre-existing Compact
long-document answer limitation for this release; the failed diagnostic retrieval
experiment was removed. No extra prompt, model or retrieval abstraction ships.

IMG's face-probe default pointed to an old product graphic while claiming a
portrait. It now uses the actual local portrait and retains FACE_FIXTURE override.
The existing service assertion checks exact JS/WASM version agreement. The HEIF
codec was rebuilt from maintained upstream tags; output pixel comparisons pass.
All 15 parked draft files retain their original hashes. The committed baseline
still has live legacy font/palette/controls; remove them during the actual Air
migration, not as speculative dependency cleanup. Resume's named live fonts,
templates, output adapters and date presence remain protected for its next slice.

Drop native source/RC artifact and KERR are unchanged. This is a bounded cleanup
record, not a claim that every product is migrated or every remaining source is used.

## 2026-10-21 — Production rollout closure

Four included sites are deployed through individual dev → main PRs. Removed the
unsuccessful PDF retrieval experiment and its diagnostic unit test before release.
Kept the existing standalone test assertions and added a bounded card-readiness
wait for real remote loading. Resume adds only a static no-transform response rule
to prevent edge injection. Runtime/output hashes are preserved in both follow-ups.
IMG's 15 draft hashes and remote branches are unchanged; its redesign remains last.
The dependency/security constraints and Compact limitation are explicit in ROLLOUT.md.

## CloakResume privacy/dialog alignment — 2026-10-21

The inherited UI font/palette bridge is retired in the current Resume correction:
53 old token names, 33 unused Tailwind aliases and two UI font files (75,332 bytes)
are removed. Privacy consumes canonical `air-prose`; duplicate prose/link/list
skins are gone. Template loading uses ordinary Air UI type. The 17 actual template
families and exporter are retained, with exact paper/PDF comparisons.

Remaining consumers are explicit: date presence/placement and its motion values,
the drag transform, and protected document/thumbnail colours. Broad Tailwind
source scanning still emits two unused utility names from historical tests/evidence;
restricting that scan is a later bounded cleanup, not a hidden runtime consumer.
Do not call full-product physical/assistive/target/motion acceptance complete.
Product evidence: Resume `docs/air/evidence/privacy-dialogs-2026-10-21.json`,
commit `9d14555`. All 373 production tests pass with zero skips, as do the
responsive matrices, 34 exact paper captures and four real PDF comparisons.
The deployed verification is recorded separately in the current rollout ledger.

## 2026-10-26 — Storyline and shared public chrome

Removed Resume's production `mountAirLight` effect/ref/markup, horizon CSS and
obsolete shader precache exclusion. Canonical shader references remain live in the
family gallery/Yard; no speculative asset deletion. The family horizon test now
lists only surviving horizon consumers. New Storyline is native transform/opacity
motion with shared lifecycle cleanup; no runtime package or draft-data coupling.
Removed duplicate brand/header/footer link/type/padding rules in favor of the
portable Air shell. Fixed the reduced-motion reset to zero duration instead of
creating tiny transitions on previously unanimated layout properties. Kept all
editor/template/export, update, source/download and native features.

Validation and evidence: `storyline-family-2026-10-26` in current validation records.
This is a bounded source cleanup; broader migration and physical gates remain open.
