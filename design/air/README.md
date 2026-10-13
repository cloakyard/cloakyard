# Air — the Cloakyard family design system

Refinement 03 is a **design-review candidate**. Review and lock the detailed system
before importing it into product UI. The copied bundle is a reference only.

This directory in **cloakyard/cloakyard is the canonical source** for every Air web
app and landing page. Other repositories derive pinned, standalone copies from it.
They may add domain rules; they may not maintain alternate component designs.

| Source                                                                               | Owns                                                                                                     |
| ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| [contract.md](contract.md)                                                           | Normative foundations, component anatomy/states, behavior, responsiveness, themes, motion and exceptions |
| [air.css](air.css)                                                                   | Semantic tokens and shared component shells                                                              |
| [components.html](components.html)                                                   | Working specimens and representative editor/overlay compositions                                         |
| [reading.html](reading.html), [recovery.html](recovery.html), [pages.mjs](pages.mjs) | Shared long-reading navigation, privacy layout, interruption and preserved-work studies                  |
| [overlays.tsx](overlays.tsx), [overlays-loader.mjs](overlays-loader.mjs)             | Unstyled accessible floating-control adapters, local sample operations and lazy loading                  |
| [motion.mjs](motion.mjs), [LIGHT.md](LIGHT.md)                                       | Shared motion behavior and the optional Shaders light study                                              |
| [products/](products/)                                                               | Product-specific routes, feature invariants and output exceptions                                        |
| [COMPONENTS.md](COMPONENTS.md)                                                       | Component refinement coverage and remaining review gates                                                 |
| [../../docs/air/validation.md](../../docs/air/validation.md)                         | Actual checks, visual evidence and limitations                                                           |

`contract.md` is the visual and interaction contract. Product appendices preserve
domain requirements. `air.css` contains the shared tokens and opt-in component
shells. `components.html` is a working reference, not a product UI or exhaustive
replacement for each app's specialised widgets.

## How apps derive from the source

Change shared decisions here first. The sync command composes each product's
`DESIGN.md` from the exact family contract plus its own appendix, then copies the
shared reference and assets. Do not edit the generated copies independently.
Framework wrappers translate APIs, never invent a visual variant. A new widget
must define its family anatomy and state examples here before product adoption.

`DESIGN.md` and `docs/air/bundle.json` identify this repository and directory.
The manifest pins the contract and every asset by SHA-256; the checker rejects a
bundle paired with a different contract. The preview stylesheet URL includes its
content revision so a cached earlier skin cannot masquerade as the current one.
No live upstream fetch, sibling checkout or runtime network dependency is needed.

During review, exact content hashes and the source commit identify a candidate.
The version `1.0.0` is the target contract interface, not approval to ship. After
visual approval, changes follow major (breaking), minor (additive) and patch
(compatible corrections) versions. Record the affected components and adoption
steps in the validation/change record, sync the candidate, then let each app pass
its own feature/visual gates before committing its runtime adoption.

## Existing app adoption

1. Change canonical files here and format them. When changing `overlays.tsx`, run
   `node scripts/build-air-overlays.mjs`; its `--check` mode verifies deterministic
   output and bundled licenses. Then run
   `node scripts/sync-air-design.mjs --bundle` from Cloakyard.
2. Check exact copies with `node scripts/sync-air-design.mjs --bundle --check`.
3. In each app run `node scripts/air-inventory.mjs` and
   `node scripts/check-air-design.mjs`. Local package aliases are `design:inventory`
   and `design:check`; `design:portability` checks an isolated copy and negative
   drift cases. Drop's aliases run from `apps/site`.
4. Import that app's local `src/styles/air.css` from its UI entry stylesheet.
   Migrate legacy aliases to `var(--air-...)`, remove competing palette literals,
   and use shared component classes or a product wrapper with the same tokens.
5. Keep document output outside UI selectors. Audit every custom control and state;
   record evidence in `docs/air/surfaces.json` before marking it validated.

A copied bundle is intentionally inert until imported. Its presence never claims
that a product has been migrated. The gallery is available at
`docs/air/components.html` when serving the repository root with a local static
server; it uses the exact local production bundle.

The gallery links to `docs/air/reading.html` and `docs/air/recovery.html`. Their
appearance choice travels between reference pages in the URL; system remains the
default. Reading content and native contents navigation work without JavaScript.
Recovery uses a local sample note: session storage and text download are real,
while the preview and unavailable-storage controls are explicitly simulated.
Neither page replaces a product policy or its actual persistence/error lifecycle.

The floating-control study bundles pinned Base UI 1.9.0 and React into one local
module with its license inventory. Air CSS owns every visible part; the unstyled
library owns focus, navigation, dismissal and collision handling. The module loads
only near the study and provides a deliberate retry after a failed fetch. Both
loader and module URLs carry content revisions. This is a self-contained reference
asset, not a runtime import: production React apps should reuse their existing
React runtime and import only the primitives they need after passing their own
feature and bundle gates. The 150 kB gzip ceiling applies to this lazy study only.

## A new independent app

Copy the complete family contract into DESIGN.md, retain the contract markers and
hash, and add a product appendix with routes, surfaces, output exceptions and gates.
Copy `air.css`, the inventory/check scripts, the component reference, bundle hash
manifest (including canonical provenance) and Air CI workflow. Adjust the stylesheet path in the manifest/reference
for the app's layout; root `src` and Drop's `apps/site/src` layouts are supported.
Generate the app's own inventory. There is no sibling import, hosted font, private
package, or runtime service requirement. Register the app in the family sync script
when it joins the maintained product roster.

## Enforcement and visual evidence

The local/CI checker also verifies that canonical source edits in this repository
have been regenerated. Standalone copies need no source checkout. It validates
canonical provenance and the full contract hash, the CSS bundle hash, version
alignment, and forbids family token redefinitions in product UI sources. Sources
marked Air-implemented additionally reject heavy UI weights, uppercase labels,
legacy fonts, broad transitions, and (for CSS) literal colours/arbitrary radii.
Document-output templates are the named appearance exception. Colour gradients,
histograms and other functional data need explicit product review; they are not a
reason to exempt their surrounding controls.

The inventory is intentionally strict about evidence: an implementation flag is
not validation. Record actual routes/states, viewport sizes, light/dark, pointer,
keyboard, reduced motion, commands and relevant output checks. Reference images
must be reviewed visually; never automatically accept a new screenshot to make a
failure disappear. Compare at identical viewport/theme/input settings. Re-run the
affected functional suites after any shared correction. The canonical reference
currently covers buttons, fields, select, check/radio, segments, slider, notices,
paper surround, representative PDF/IMG/Resume editor panels, responsive dialogs,
settings popovers, delayed hover/keyboard tooltips, action/context menus, invalid
rename forms and safe remove/restore handoffs.
Standalone reading/recovery pages extend the same navigation, typography, field
and action rules to long content, not-found, retry and unsaved-work states.
Data-entry fields use one continuous border and one replacement focus contour; no
separate bottom accent, inset shadow, or stacked focus ring is permitted. Product-specific galleries must extend
that coverage to real editor, layer, colour/curve, AI and export states.

The editor compositions are grounded in the live Resume/PDF/IMG inspection recorded
in `docs/air/existing-editor-audit.md`. Writing uses a left entry panel; media and
document manipulation use a right inspector. Mobile uses a persistent tool selector
and a working panel with a scrolling body. The study is representative; it does not
replace the full feature and custom-control audit before migration.

The IMG follow-up defines real signed adjustment ranges, levels, colour bands and
a keyboard/pointer curve study. Compact curves open expanded controls with a
persistent preview. See the per-app editor audit for the remaining colour, layer,
AI and commit/rollback states; a reference interaction is not a feature migration.
