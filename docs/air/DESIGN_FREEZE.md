# Air — implementation baseline

2026-10-13 · Version 1.0.0 · **Locked for implementation**

The user authorized one final agent review followed by implementation. That review
is complete: the expanded gallery navigation needed wrapping at phone widths;
the correction passes 320/390/768/1440px in both themes
([review evidence](evidence/air-final-glance-2026-10-13.json)). The desktop landing,
IMG inspector, Resume phone writing panel and PDF tablet composition were reviewed.
Proceed with the locked Air direction and existing implementation sequence.
Do not start another general redesign or create another specimen for a pattern
already covered. Fix a concrete failure in the canonical source, then propagate
that correction to affected apps.

## Review the system once

| Review surface                                      | What is ready to decide                                                                                 |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [Components](components.html#experience)            | Open compositions, restrained blue, matte surfaces, type, single-contour fields and both themes         |
| [Workspace](components.html#workspace)              | Resume writing and PDF/IMG inspector compositions, real output boundaries, compact custom controls      |
| [Motion](components.html#motion)                    | Finite light arrival, purposeful response, immediate keyboard behavior, static/reduced-motion treatment |
| [Reading](reading.html) / [recovery](recovery.html) | Navigation, long content, privacy layout, failure, backup and preserved work                            |
| [Files](files.html)                                 | Selection, validation, measured progress, cancel, retry and stale-result protection                     |
| [Collections](collections.html)                     | Open rows, long names, selection, custom picker, reorder, history, nested dismissal and focus           |

The complete portable rules are in `DESIGN.md`; ownership remains
`cloakyard/design/air/contract.md`. Each product receives that exact contract and
its own feature appendix. `bundle.json` pins the source and assets. Local copies
work without this repository, external fonts, a private service or a sibling path.

## The decisions to freeze

- One shared palette, type scale, spacing scale, geometry and control anatomy.
  No per-app variants of fields, buttons, menus, dialogs or selection colours.
- Open, ruled grouping with calm matte planes. Blue identifies an action or a
  meaningful state; it does not outline every surface. Fields have one contour.
- Content-aware desktop/tablet/phone reflow and deliberate light/dark states.
  Coarse controls keep 44px targets, including tablets. Long names wrap.
- Base UI primitives own complex React focus/navigation behavior. Air owns all
  visible parts. Select uses custom options in every supported product browser;
  native progressive enhancement remains suitable for minimal-script contexts.
- Frequent editor actions are immediate. Occasional motion is finite and
  interruptible; keyboard and reduced-motion paths do not require animation.
  Shaders remain a planned landing enhancement, with a complete still treatment.
- Product transactions, document/template geometry, image colour and native macOS
  UI retain their existing semantics. KERR gets an exploration link on the home
  page, with no screenshot or simulated preview.

## What remains, and what it blocks

These checks are still open; moving them to the responsible implementation does
not count them as passed. A missing result blocks that affected piece's commit.

| Gate                                                                                         | Owning implementation                                                                            |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Detailed visual lock                                                                         | Closed 2026-10-13 after the user-authorized final review                                         |
| Safari/WebKit, Firefox, real browser zoom, screen readers, physical touch/software keyboards | Each adopted adapter and its real route; reference Chromium emulation is not equivalent evidence |
| Every specialised control state, IME, rich text, colour/curves, AI and export                | The owning PDF/IMG/Resume panel, against the existing complete surface inventory                 |
| PDF/HEIC/JSON processing, races, cancellation, output fidelity and saved work                | Each real file/processing adapter; the sample studies cannot certify those formats               |
| Shader startup, payload, offscreen disposal and physical GPU/thermal/battery behavior        | The live light enhancement; the home can adopt the designed still treatment first                |
| Legacy code, obsolete tokens/assets/references, dead components/dependencies                 | Cleanup in every migrated piece before its checks and commit                                     |

## First production piece after lock

**AIR-04 — shared foundation and Cloakyard home.** Use the existing registry and
hash destinations. Import the pinned local Air CSS; replace the competing legacy
UI token/type/radius rules. Apply the approved navigation, hero, product rows,
principles and footer together so the directory does not ship a mixed design.
Replace KERR's illustrated section with its exploration link. Preserve privacy,
platform/status, source/licence/author links, metadata and truthful product copy.

Extract only the production primitives this piece needs. Keep sample reducers,
demo state and the standalone React bundles out of `src`. Later React apps import
the same canonical adapters with their existing React runtime; Astro uses the
same CSS and semantics without adding React for appearance.

Validate light/dark, all contract viewports and breakpoint edges, keyboard/hash
navigation, enlarged text, reduced/no-motion and every destination. Check the
inventory and legacy search, run `vp check` and `vp build`, inspect the actual
production result, record evidence, then commit. Live shader activation is a
separate bounded enhancement with its own measured gate.

Then proceed in the saved order: **PDF → IMG → Resume → Drop website → family
comparison**. Complete each interior and its feature checks, not just its landing
page. A shared correction returns here first and is propagated before continuing.

## Review record

- Candidate assembled: 2026-10-13; collection evidence and current repository
  gates are recorded in `validation.md`.
- User authorization: “One final glance over on design then after that let's start”
  on 2026-10-13. The agent completed that delegated review; this does not claim the
  user personally inspected every state. No additional design approval is needed.
- Runtime adoption: **AIR-04 implemented locally**. Validation evidence and any
  remaining device checks are recorded separately. No push or deployment is included.
