# Cloakyard Air bundle

Refinement 02 is a **design-review candidate**. Review and lock the detailed system
before importing it into product UI. The copied bundle is a reference only.

`contract.md` is the visual and interaction contract. Product appendices preserve
domain requirements. `air.css` contains the shared tokens and opt-in component
shells. `components.html` is a working reference, not a product UI or exhaustive
replacement for each app's specialised widgets.

## Existing app adoption

1. Change canonical files here, format them, then run
   `node scripts/sync-air-design.mjs --bundle` from Cloakyard.
2. Check exact copies with `node scripts/sync-air-design.mjs --bundle --check`.
3. In each app run `node scripts/air-inventory.mjs` and
   `node scripts/check-air-design.mjs`. Local package aliases are `design:inventory`
   and `design:check`; Drop's aliases run from `apps/site`.
4. Import that app's local `src/styles/air.css` from its UI entry stylesheet.
   Migrate legacy aliases to `var(--air-...)`, remove competing palette literals,
   and use shared component classes or a product wrapper with the same tokens.
5. Keep document output outside UI selectors. Audit every custom control and state;
   record evidence in `docs/air/surfaces.json` before marking it validated.

A copied bundle is intentionally inert until imported. Its presence never claims
that a product has been migrated. The gallery is available at
`docs/air/components.html` when serving the repository root with a local static
server; it uses the exact local production bundle.

## A new independent app

Copy the complete family contract into DESIGN.md, retain the contract markers and
hash, and add a product appendix with routes, surfaces, output exceptions and gates.
Copy `air.css`, the inventory/check scripts, the component reference, bundle hash
manifest and Air CI workflow. Adjust the stylesheet path in the manifest/reference
for the app's layout; root `src` and Drop's `apps/site/src` layouts are supported.
Generate the app's own inventory. There is no sibling import, hosted font, private
package, or runtime service requirement. Register the app in the family sync script
when it joins the maintained product roster.

## Enforcement and visual evidence

The local/CI checker validates the full contract hash, the CSS bundle hash, version
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
paper surround, representative PDF/IMG/Resume editor panels, and a responsive dialog.
Data-entry fields use one continuous border and one replacement focus contour; no
separate bottom accent, inset shadow, or stacked focus ring is permitted. Product-specific galleries must extend
that coverage to real editor, layer, colour/curve, AI and export states.

The editor compositions are grounded in the live Resume/PDF/IMG inspection recorded
in `docs/air/existing-editor-audit.md`. Writing uses a left entry panel; media and
document manipulation use a right inspector. Mobile uses a persistent tool selector
and a working panel with a scrolling body. The study is representative; it does not
replace the full feature and custom-control audit before migration.
