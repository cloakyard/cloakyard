# Automatic landing artwork — Air 1.2.1

The user requested removal of Play/Pause/Replay from landing pages. Removed the
shared control option, label state and listeners, plus Drop/Resume button markup,
refs and unused wrapper CSS. No replacement dependency or control was added.

Resume retains its 3,400ms arrival. Drop shows FILE, PKG, ISO and ZIP once in a
4,776ms maximum active timeline (4,858ms measured), then stays on ZIP. PDF keeps
its finite page unveiling. Hidden/offscreen suspension, live reduced-motion
settling, constrained/no-JS fallbacks and fixed primary actions remain. Yard's
production bytes are unchanged. Air 1.2.1 records this rule in all portable copies.

## Verification

- PDF: 461 unit tests, all 16 production smoke suites and 68 artwork layouts.
- Resume: 373 tests in ten files, zero skips, production serial mode; 68 artwork
  layouts, eight moving arrivals and complete lifecycle/static profiles.
- Drop: 68 artwork layouts, all four forms, finite completion, 432 website
  layouts and 34 journeys. The existing lazy-image readiness fix is retained.
- Family: 1,104 Chrome/Firefox layouts with zero deviations/browser errors.
- Applicable format/lint/types/dead-code/build, design integrity and all 20
  isolated portability checks per app pass. Shared source/bundles are synchronized.
- Reviewed Drop/Resume desktop, laptop and phone light/dark, file silhouettes and
  Resume arrival. Regenerated Resume PWA/README captures; its editor OG stays current.
  Corrected an existing capture timing fault that omitted dark-mode paper text;
  the generator waits for stable pixels, and all four repeat captures match.

Evidence is in each repository's `docs/air/evidence/finite-artwork-2026-10-26/`.
The initial Air 1.2.0 rollout passed live checks and all 260 asset hashes matched;
those deployment records are under `evidence/rollout-2026-10-26/`. This follow-up is now deployed through the individual dev → main PRs below.

## Scope and remaining acceptance

IMG receives local portable maintenance only: 262 committed runtime files match
its isolated validation snapshot; its 15 parked draft files remain byte-identical.
The isolated build and portability checks pass. IMG is neither pushed nor deployed.
Native Drop, RC, installer and KERR remain unchanged. The previously approved PDF
Compact limitation, node-forge exception through 2026-11-06, Drop official-bundle
exception and physical/assistive/device acceptance remain explicitly open.

The earlier capture harness failure is resolved by reacquiring DOM handles before
each stable capture. The new run matches all 58 local/live render pairs and four
actual Resume exports in pixels, text, links and page geometry. This closes that
specific rollout check; broader previously documented output fixtures stay open.

## Production verification

All four main builds/checks passed. All 260 served assets match tested candidates,
with `no-transform`, no injected scripts and correct recovery responses. Live
checks pass 552 family layouts, 68 artwork layouts per product, Drop 432 layouts /
34 journeys, and six actual PDF workflows. The controls are absent and completed
artwork stays still. See [deployment evidence](evidence/finite-artwork-2026-10-26/deployment.json).

| App         | Merge                                                     | Commit    | Verified public assets |
| ----------- | --------------------------------------------------------- | --------- | ---------------------- |
| cloakyard   | [PR 20](https://github.com/cloakyard/cloakyard/pull/20)   | `acc7505` | 13                     |
| cloakdrop   | [PR 46](https://github.com/cloakyard/cloakdrop/pull/46)   | `2c893d2` | 16                     |
| cloakpdf    | [PR 210](https://github.com/cloakyard/cloakpdf/pull/210)  | `844bee2` | 130                    |
| cloakresume | [PR 43](https://github.com/cloakyard/cloakresume/pull/43) | `852062c` | 101                    |

Cloudflare deploys main only; non-production branches upload versions. Final
closeout changes only this release ledger, evidence and handoff. The final branch
fast-forward includes that documentation merge and preserves these tested bytes.
