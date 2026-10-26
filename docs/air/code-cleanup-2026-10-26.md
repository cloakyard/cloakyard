# Four-app cleanup audit — 2026-10-26

Scope: all current Cloakyard, CloakPDF, CloakDrop website and CloakResume web
source, imports/exports, runtime/development dependencies, custom CSS, public
assets, build/generator references and supported CLI/test entry points. CloakIMG's
parked 15-file redesign is unchanged by SHA-256. Native Drop and KERR, generated
release bundles and historical evidence are outside this web cleanup.

## Removed

- PDF and Resume no longer scan the whole checkout for Tailwind utilities.
  `source(none)` plus explicit `src/` and root HTML sources prevents skill examples,
  tests and historical evidence from shipping obsolete colours, gradients,
  animations, spacing and control utilities. Every lazy template/tool stays in scope.
- Resume's retired `[data-panel-root] .grid-cols-2` responsive override and both
  now-unused `data-panel-root` attributes are gone. Current Air section grids have
  their own live layout rules.
- `ReloadPromptView`, `assertExportFits` and `ProjectItem` are private to their
  modules. Only their unused exports were removed; update behavior, the clipping
  safety guard and the project data shape remain intact.

| Production CSS, all emitted stylesheets |    Before |     After |  Removed |
| --------------------------------------- | --------: | --------: | -------: |
| CloakPDF                                | 149,302 B | 131,309 B | 17,993 B |
| CloakResume                             | 125,333 B | 106,517 B | 18,816 B |

Total: **36,809 bytes**, or **5,817 bytes with gzip level 9**. No dependency was
added or removed. Yard and Drop have no proven unused application modules or
custom CSS to delete; they receive the audit/evidence rather than speculative edits.

## Consumer tracing and repeatability

Knip 6.42.1 reports zero issues in all four scoped web graphs. PDF retains its
existing `pnpm check:dead`. Yard and Resume now declare their real entry points in
`knip.json`; run `npx --yes knip@6.42.1` in either checkout. Drop's default Astro
analysis works from `apps/site/` with the same pinned command. This audit reused
PDF's installed CLI; no tool was added to the application dependency graphs.

Manual CLI scripts are entry points, not unused modules. Yard's canonical Air
modules are a public portable library with gallery/build and family consumers.
Resume's recovery CSS is imported by its static `404.html`; Knip needs that CSS
entry explicitly. No blanket runtime-source ignore was introduced. Historical
proof scripts, generated Air bundles and upstream skills are not application code.

All 91 audited tracked image/font assets have source, manifest, generator or
supported documentation consumers. Preserve launcher/favicon aliases, native
source artwork, fallback screenshot formats, the portable gallery, lazy PDF fonts
and Resume's document fonts. No asset deletion was justified.

The custom CSS scan's two original candidates were resolved: the obsolete grid
rule was removed; `resume-section-nav--rail` is a live interpolated class. Custom
keyframes have consumers. The `--font-sans` and `--font-mono` theme mappings are
also live through Tailwind's reset, including `code`, `kbd`, `pre` and `samp`;
source-only searches do not establish that they are unused. They are retained.
The date adapter, drag marker, toolbar event bridge, lazy exporters and all 17
résumé templates likewise remain live. PDF’s older encryption formats, saved
point annotations and legacy token syntax are live compatibility paths; they are
not obsolete redesign code. Sample résumé prose is document content, not dead code.

## Verification

- All four Knip graphs, builds, applicable lint/type checks, design checks, shared
  synchronization and 20 isolated portability checks per audited app pass.
- PDF: **461 unit tests and all 16 production smoke suites pass** in the final
  complete command. This covers actual document operations/exports and responsive
  tool, dialog, model-recovery, navigation, collection, canvas and motion states.
- Resume: **373 tests in 10 files pass with zero skips** using
  `CLOAKRESUME_BROWSER_BUILD=production pnpm exec vp test --no-file-parallelism`.
- **552 Chrome layouts** (432 home / 120 secondary) pass with no deviations or
  browser errors. Desktop/laptop/phone light/dark pages and editors were inspected.
- **58 exact before/after capture pairs** pass: 24 landing/editor states plus all
  17 résumé templates in A4 and Letter. The four real PDF export pairs also retain
  identical pixels, text, links and page boxes. Synthetic fixtures only.
- The full Chrome/Firefox/Safari artwork/chrome baseline remains in the previous
  checkpoint. This cleanup's new rendered matrix is Chrome, not a fresh Safari or
  physical-device acceptance claim.

Evidence lives in each app's `docs/air/evidence/code-cleanup-2026-10-26/`.
The family matrix and detailed before/after evidence live in this repository.

Initial attempts are recorded honestly: Python's temporary static server reset
some PDF requests; Vite production preview replaced it. Concurrent Resume runs
hit two different browser failures (blocked-document storage and a detached
contact control). Use the documented `--no-file-parallelism` mode for the final
run. A PDF mobile canvas click missed on one run and its unchanged test passed
individually. Capture-only GPU/subpixel variation disappeared with software
rendering and stable-frame readiness; no product assertion or tolerance was loosened.

This cleanup does not close prior physical/assistive/hardware acceptance, Resume's
previous export follow-ups or the accepted PDF Compact long-document limitation.
Air remains 1.2.0. Local commits only; no push, PR, merge, release or deployment.

## Local checkpoints

PDF `63781c3`; Resume `a4f7b95`; Drop audit `678bf2a`. Yard's graph configuration
and family record are committed with this report. Each passing piece is local.
All six task-owned preview ports are closed and the 15 parked IMG files retain
their original hashes. PDF/Resume rebuilds after all documentation and formatting
changes are byte-identical to the tested builds.
