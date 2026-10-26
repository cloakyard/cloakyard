# Four-site Air deployment — 2026-10-21

Current 2026-10-26 rollout: [verified Air 1.2 candidates](rollout-2026-10-26.md).
Four individual dev → main releases are authorized; production results will be
recorded after merge. The earlier ledger below remains historical evidence.

**Cloakyard, CloakPDF, CloakDrop and CloakResume are deployed and production-verified.**
Each release used an individual `dev` → `main` PR followed by automatic Cloudflare
Workers Builds. The four `dev` branches were synchronized with their merged main.
**IMG was excluded**: its remote dev/main refs and all 15 parked draft hashes are
unchanged. KERR and Drop's native application/RC artifact are unchanged.

| Site                                        | Release PR                                                                                                              | Production proof                                                                                                                                                                                           |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Cloakyard](https://cloakyard.com)          | [#16](https://github.com/cloakyard/cloakyard/pull/16)                                                                   | 13 exact served files; 12 home journeys, 12 horizon layouts, real GPU themes, 136 neutral link states / 52 keyboard checks.                                                                                |
| [CloakPDF](https://pdf.cloakyard.com)       | [#207](https://github.com/cloakyard/cloakpdf/pull/207)                                                                  | 132 exact served files; six real PDF output workflows, 68 horizon layouts / GPU lifecycle and fallbacks, 60 neutral link states / 18 keyboard checks.                                                      |
| [CloakDrop](https://drop.cloakyard.com)     | [#44](https://github.com/cloakyard/cloakdrop/pull/44)                                                                   | 17 exact served files; 432 layouts / 34 journeys, GPU themes, 328 neutral link states / 116 keyboard checks.                                                                                               |
| [CloakResume](https://resume.cloakyard.com) | [#39](https://github.com/cloakyard/cloakresume/pull/39), header [#40](https://github.com/cloakyard/cloakresume/pull/40) | 104 exact served files; 34 template/paper captures, two linked captures and four exact real PDF comparisons; six editor theme/viewport cases, GPU themes and 124 neutral link states / 32 keyboard checks. |

All served assets have `no-transform`; HTML contains no injected analytics or
challenge scripts. Desktop/laptop/phone light/dark screenshots were reviewed.
Resume's first live response exposed Cloudflare script injection; PR #40 added
the existing family header rule without changing application, template or worker
bytes. `_headers` and ignored OS metadata are not public assets and are excluded
from served-file counts. A generated `.DS_Store` correctly returns 404.

[The deployment ledger](evidence/deployment-2026-10-21/ledger.json) records exact
merge/dev refs, PR checks, Cloudflare build links, per-file hashes, live checks and
rollback source refs. The earlier [preparation ledger](evidence/rollout-2026-10-21/ledger.json)
is historical. Native installers and earlier Cloudflare versions were not replaced
or deleted. Any rollback should restore the recorded prior source through dev and
an ordinary main PR, preserving these release records.

## CloakResume privacy and dialog follow-up

[Resume #41](https://github.com/cloakyard/cloakresume/pull/41) merges `9d14555` at
`a957b2e`; dev is synchronized. The later Cloudflare build is production-verified:
**102 exact served files**, all no-transform and no injected scripts. The count
falls by two because unused Archivo/JetBrains UI fonts are removed. This replaces
the Resume asset set in the original four-site table; the historical ledger stays intact.

Privacy now uses canonical Air reading styles and its standard dialog with a fixed
close control. PWA notices use the neutral Air panel/shared actions; update activation
and draft safety remain intact. The inherited UI font/palette bridge is retired.
Local regression passes **373/373**, zero skips, plus all responsive state matrices,
34 exact paper captures and four exact PDF comparisons. Live entry/privacy passes
341 layouts / 14 journeys and 48 neutral link states / 6 keyboard checks.
See [the follow-up ledger](evidence/resume-alignment-2026-10-21/ledger.json) for hashes,
CI, screenshots and the fully explained two-unused-variable build difference.
The 34 live paper captures and final four real PDFs match exactly. The first
remote export batch had three raster-only differences, with unchanged text,
geometry and links; retain this intermittent observation for investigation.
Fresh exports and the pre-change latency baseline match. `export-attempts.json`
preserves the initial results; it is not a claim that every export attempt matched.
Later instrumentation reproduces the raster-only difference; the scratch prototype
also fails one case. No export-code change ships and this follow-up remains open.

## Dependencies and explicit exceptions

All 63 checked npm latest-release versions were reverified against primary registry
metadata during rollout and are unchanged since preparation. Compatible direct and
transitive upgrades are committed; every app has dependency evidence under
`docs/air/evidence/dependencies-2026-10-21.json`. This does not claim independent
embedded libraries inside upstream bundles are all the latest release.

- Drop retains TypeScript **6.0.3** because Astro Check **0.9.11** supports only
  TypeScript 5/6. Its approved official yt-dlp frozen Python/OpenSSL bundle exception
  remains. GRDB **7.11.1**, FFmpeg **9.0.2** and yt-dlp **2026.08.19** match the checked
  upstream releases. Native RC1 remains ad-hoc signed and not notarized.
- PDF retains the existing **node-forge 1.4.0 / GHSA-86w9-cpqp-85rv** security
  exception, expiring **2026-11-06**. No patched release was available and the
  exception was not extended. All other fresh audits report no findings; PDF's
  policy audit and CodeQL passed.
- PDF's existing **Compact beta long-document answer limitation** is explicitly
  accepted for this deployment. The user said: “Deploy PDF with the documented
  existing limitation”. The unchanged check fails on old/upgraded builds and a
  fresh index despite retrieving the correct passage. Quality passes both original
  fixtures and Compact passes the short fixture. The failure is not relabeled a
  pass. A diagnostic relevance-order experiment was removed; no model, prompt or
  retrieval change ships. Raw private document logs stay outside Git.

## Remaining work

Resolve the Compact answer-quality limitation separately, preserving the original
fixture/assertion. Resume's later privacy/dialog correction retires the legacy
UI font/palette bridge. Finish its remaining target/date-motion audit and source-
scan cleanup, then complete IMG's pending redesign last. Retain all untested physical touch,
software-keyboard, OS IME, spoken assistive and hardware acceptance tasks.
Deployment of this validated stage does not establish full-family migration.

The production PDF output smoke test ([follow-up #208](https://github.com/cloakyard/cloakpdf/pull/208)) now waits for the requested home card before
clicking it: network-idle alone can occur while a remote entry module still loads.
All six workflows pass with the readiness correction; application bytes are unchanged.

Compact proof is stored in `docs/air/evidence/deployment-2026-10-21/`. Large scratch
captures and generated exports remain in `/tmp/cloakyard-release-2026-10-21/` and
`/tmp/cloakyard-rollout-2026-10-21/cloakresume/production/`. The clean IMG worktree is
retained for later redesign work. All task-owned preview servers are stopped at close.

Release records are integrated through [Cloakyard #17](https://github.com/cloakyard/cloakyard/pull/17); these documentation changes preserve the verified site bytes.
