# Air family public-page comparison — 2026-10-25

> Correction, 2026-10-26: this audit missed the canonical 36px mark and several
> shared chrome metrics. The PDF-size “exception” below was incorrect. See
> [the superseding four-app audit](storyline-family-2026-10-26.md), which fixes
> those discrepancies and includes the now-approved Resume implementation.

Cloakyard, CloakPDF and CloakDrop now pass the inspected public-page contract.
The comparison uses **Air 1.1.0 as the baseline**, rather than treating a sibling
site's existing CSS as the specification. No outstanding deviation was found in
this scope after the corrections below. This is local build verification, not a
production deployment or complete device/assistive acceptance.

## Corrections

| Before                                                                                 | After                                                               | Why                                                                                                                 |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Yard hero used 1.08 leading / −.065em tracking.                                        | 1.05 / −.045em.                                                     | Canonical hero typography.                                                                                          |
| Marketing section headings used −.05em or −.045em tracking.                            | All three use −.03em.                                               | Canonical section-heading rhythm.                                                                                   |
| Yard/Drop fallback focus offset was 4px and changed summary radius to 4px.             | 2px outline / 3px offset; control retains its 10px radius.          | Focus must not alter control shape. Blue is confined to the approved focus outline, never link text/hover.          |
| Yard's icon-only home target was 32px; compact menu summary was absolutely positioned. | At least 44px; native disclosure expands in a shared header grid.   | Reliable touch target and enlarged-text flow.                                                                       |
| PDF kept a wrapping desktop nav in the compact shell; Source icon/gap were 14px/4px.   | Native in-flow Menu with Escape/focus return; 16px icon / 8px gap.  | Familiar Air navigation, independent of product content. Same Editor, Tools and Source destinations.                |
| Yard/Drop inline author credit lacked a persistent underline.                          | 1px underline / 3px offset; neutral ink in every state.             | Inline links remain recognizable without colour. Drop navigation hover also strengthens neutral ink and underlines. |
| PDF privacy prose used 1.7 leading and 32px section padding.                           | 16px / 1.6 and 48px sections.                                       | Air reading-page cadence; policy text is unchanged.                                                                 |
| Yard gutters switched at non-contract boundaries.                                      | 16px through 640px, 24px through 960px, 32px above; 1200px maximum. | Shared spacing at breakpoint neighbours. Compact navigation still follows actual content fit.                       |

Removed superseded absolute-menu positioning and focus-only radius rules. No
package, shared skin, token override or production motion dependency was added.
The shared contract remains 1.1.0; these fixes enforce it. Product artwork and
copy retain their approved differences. PDF's 36px mark remains an existing
product mark treatment; common controls, targets and spacing follow the contract.

## Verification

- **480 comparison layouts:** Chrome 156.0.8078.48 (240), Firefox 158.0.1
  (120 light + 120 dark). Twenty sizes, 320–1920px, including breakpoint neighbours,
  with 16px/32px root text. Zero deviations or browser errors in the final runs.
  Checks include typography, gutters, content overflow, controls, focus contours,
  inline links and compact-menu keyboard opening/Escape/focus return.
- **596 link-state / 202 keyboard checks:** home, PDF privacy, Drop privacy and
  recovery routes; neutral resting/hover/focus text and nested link content.
- **PDF:** lint/types/dead-code, 461 unit tests, production build/asset limits,
  all 16 smoke suites with synthetic demo fixtures, 66 recovery layouts including
  actual local Workers HTTP 404/offline/no-JS behavior, 68 artwork layouts with
  real file entry, finite unveiling and lifecycle/static fallbacks.
- **Drop:** asset sync, Astro check and build; 432 website layouts / 34 journeys,
  35 captures, no script errors or foreign runtime requests; 68 artwork layouts,
  all four file forms, pause/resume and lifecycle/static fallback checks.
- **Yard/shared:** lint/types/build, synchronized full portable specifications,
  design integrity, 20 isolated portability checks, five shared motion tests,
  12 horizon layouts, both GPU themes and idle behavior.
- **Visual review:** desktop (1440), laptop (1280), phone (390) in light/dark,
  policy pages and focus states. Native Safari dark-theme spot review covers all
  three landing pages, PDF/Drop privacy, enlarged compact headers and Drop's
  pause/resume action. Safari was not run through the entire automated matrix.

The comparison's initial overflow detector incorrectly counted hidden heading
boxes; it now excludes hidden/decorative content. Firefox's theme/reduced-motion
preferences use real launch preferences because its BiDi implementation does not
support Chrome's media emulation. The harness asserts that preferences apply.
PDF's temporary first-install notification is dismissed before clicking the
footer privacy action. These harness corrections do not waive product failures.
One Drop rerun initially used the wrong URL environment variable; it was corrected
to `SITE_URL` and the complete final run passed.

Large matrices and logs are stored as compressed JSON/text. The
[evidence summary](evidence/family-comparison-2026-10-25/summary.json) and
[desktop comparison](evidence/family-comparison-2026-10-25/comparison.png),
[phone comparison](evidence/family-comparison-2026-10-25/comparison-phone.png) and
[laptop comparison](evidence/family-comparison-2026-10-25/comparison-laptop.png)
are accompanied by individual full-page captures and Safari spot captures.
Each product also keeps its own matrices, logs and captures independently.

## Motion review — Approve within this scope

PDF's anchored front page and rear-sheet unveiling demonstrate pages without
reordering or delaying the real file input. Drop's falling pixels resolve into
FILE/PKG/ISO/ZIP with a visible neutral pause action. Transform/opacity motion,
finite PDF completion, offscreen/hidden suspension, cleanup, reduced/forced,
Save-Data and unsupported static profiles pass. Longer artwork timings belong to
occasional explanatory marketing motion; ordinary UI remains immediate or uses
Air's existing durations. Yard retains its approved blue horizon and idle behavior.

Physical touch/software keyboard, spoken assistive technology and power/thermal
acceptance remain open. Earlier full-product gates and PDF's accepted Compact
long-document AI limitation are unchanged. No claim is made that every possible
app/editor state was re-audited in this public-page comparison.

Review references: canonical `design/air/contract.md`, local `DESIGN.md`, the
`review-animations` skill and
[Vercel Web Interface Guidelines](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md).

## Next concept: CloakResume storyline

Exploratory, not approved or implemented in the app. A green path with three
milestones gathers into the vertical spine of one résumé; experience, projects
and education become a coherent document. The path supplies playfulness and a
product-specific identity while Air typography, navigation and controls stay
unchanged. Unlike PDF's multiple sheets or Drop's file pixels, its subject is the
continuity of a person's story. It makes no AI-writing or hiring-outcome claim.

The local interactive study is `resume-storyline.html` in the task's visualization
folder. It runs once, has Pause/Continue/Replay, suspends when hidden/offscreen,
and has a static reduced-motion state. This is a review sketch; it is not a new
portable production motif. Keep Resume production unchanged until visual approval.
