# Family rollout preparation — 2026-10-21

**Held before integration. No push, dev/main merge, PR or deployment was made in
this upgrade pass.** Four dependency pieces are committed; PDF's candidate remains
uncommitted because a required real-model check fails. Resume and IMG still need
their remaining full-product Air work.

| Product     | Validated source                            | Upgrade and evidence                                                                                                                                                                                                                                                |
| ----------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cloakyard   | `dffebab` (after `78516f5`)                 | React 19.3.1, Lucide 1.61.0, Vite+ 1.3.0, Wrangler 4.151.3, pnpm 12.14.0; direct/transitive updates, portable bundle regeneration, 25 tests, responsive/GPU/neutral-link checks pass.                                                                               |
| CloakPDF    | Candidate over `1ce863a`, **not committed** | Current packages and a reduced-motion snapshot fix; 461 units, 16 smoke and seven extended suites, actual PWA/output/GPU checks pass. Compact/multipage fails; hold this piece.                                                                                     |
| CloakDrop   | `575d430` (after `4e03208`)                 | Astro 7.4.1, Astro Check 0.9.11, Wrangler 4.151.3, npm 12.2.0 and compatible transitives. 432 layouts/34 journeys, neutral links and GPU/fallbacks pass. Native RC artifact unchanged.                                                                              |
| CloakResume | `5c3bc0d`                                   | Harper 2.13.0, React 19.3.1, Lucide 1.61.0, Vite+ 1.3.0 and pnpm 12.14.0. All 372 production tests, 34 template/paper captures and four PDF comparisons pass.                                                                                                       |
| CloakIMG    | `2718284`                                   | MediaPipe JS/WASM 1.1.1, React 19.3.1, current toolchain and rebuilt libheif 1.23.6/libde265 1.1.3 with Emscripten 6.0.13. All 470 tests, actual portrait detection, 26 panels, history/export, codec and 88 responsive comparisons pass on the committed baseline. |

The [machine-readable ledger](evidence/rollout-2026-10-21/ledger.json) records
exact source/fetched dev/main refs, resolved direct versions, build-file hashes,
dry-run logs and pending work. Each product has
`docs/air/evidence/dependencies-2026-10-21.json`. All five Wrangler 4.151.3 dry runs
pass; a dry run does not establish deployment or release readiness. The ten
committed-head dev/main merge projections are conflict-free at the recorded refs.
PDF's uncommitted candidate and IMG's parked draft are excluded from those projections.

## Dependency currentness and exceptions

Fresh primary npm metadata verifies 63 package releases. Direct-package outdated
checks are empty except Drop's TypeScript compatibility constraint. Compatible
transitive ranges were refreshed; upstream exact pins remain upstream-owned.
This is not a claim that every embedded library inside every upstream artifact is
the newest independent release.

- Drop retains TypeScript **6.0.3**: Astro Check 0.9.11 supports only `^5 || ^6`,
  while latest TypeScript is 7.0.2. Reassess when the peer range supports 7.
- Drop's GRDB **7.11.1**, FFmpeg **9.0.2** and yt-dlp **2026.08.19** match current
  upstream releases. The user's official-bundle exception for frozen Python/
  OpenSSL libraries remains. Native 626-test/build proof is the prior RC evidence,
  not a new native run. RC1 remains ad-hoc signed and not notarized.
- PDF has the existing high **GHSA-86w9-cpqp-85rv** advisory in node-forge 1.4.0,
  with no patched upstream release. Its approved exception expires **2026-11-06**;
  `osv-scanner.toml` is unchanged and no new advisory is accepted. Other projects'
  fresh audits report zero findings.

## Gates and next work

1. Resolve PDF's Compact-tier long-document answer failure before committing its
   upgrade. The unchanged test requires three facts from the real guide; current
   source fails twice and the pre-upgrade build fails once. Quality passes both
   fixtures, Compact passes the short fixture, and tier switching/cache/memory
   flows pass in those successful runs. These results do not override the failure.
   Do not weaken the assertion or tune a model solely for this fixture. Private
   document logs remain outside Git; sanitized results and hashes are in PDF evidence.
2. Finish Resume's live font/token bridge and final product target/acceptance
   audit. Preserve all 17 template families and exact document output. Then finish
   IMG last, including its parked 15-file entry draft and every deeper surface.
   IMG's dependency commit deliberately retains its old UI; neutral Air hyperlinks
   and the coarse-landscape rotation screen still need migration. Its draft hashes
   are recorded and unchanged.
3. Resolve the remaining physical/software-keyboard, OS IME, spoken assistive and
   hardware acceptance gates tracked in the TODO. Do not relabel untested gates as passes.
4. Recheck upstream versions, audits and remote refs immediately before the
   authorized integration. Merge completed source into each `dev`, validate the
   combined build, open and attach `dev` → `main` PRs, then merge after required CI.
   Build production candidates from merged main and record their new hashes.
5. Preserve previous release artifacts and Cloudflare versions for rollback.
   For an authorized deployment, verify live bytes, no-transform headers, neutral
   resting/hover links, app-coloured shaders and essential output journeys.

All task-owned preview/test servers are stopped. The clean IMG worktree is retained
for exact candidate review.

Scratch evidence is in `/tmp/cloakyard-rollout-2026-10-21/`. The tested IMG checkout
is `cloakimg-clean` there; the main IMG checkout includes the preserved draft and
must not be treated as the tested production build. PDF's held changes and evidence
remain in its normal checkout. KERR and native application UI are unchanged.
