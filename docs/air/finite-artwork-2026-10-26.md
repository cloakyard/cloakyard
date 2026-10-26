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
those deployment records are under `evidence/rollout-2026-10-26/`. This follow-up
will use individual dev → main PRs, then repeat live verification and sync dev.

## Scope and remaining acceptance

IMG receives local portable maintenance only: 262 committed runtime files match
its isolated validation snapshot; its 15 parked draft files remain byte-identical.
The isolated build and portability checks pass. IMG is neither pushed nor deployed.
Native Drop, RC, installer and KERR remain unchanged. The previously approved PDF
Compact limitation, node-forge exception through 2026-11-06, Drop official-bundle
exception and physical/assistive/device acceptance remain explicitly open.

The prior local-versus-live export comparison encountered a detached DOM handle
in its local capture half. The scratch harness now reacquires the element for each
stable screenshot. No remote export pass is claimed until its new run completes.
