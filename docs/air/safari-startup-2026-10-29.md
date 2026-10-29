# Air 1.2.7 — Safari artwork startup, 29 October 2026

WebKit rounds the reported CPU count to four on devices with fewer than eight
cores. The shared artwork lifecycle incorrectly treated that value as a reason
to disable finite transform/opacity animations. A WebKit reproduction against
all five live sites produced `constrained`, zero animations and no console errors.

The canonical lifecycle now ignores CPU count for this lightweight artwork.
Reduced motion, forced colours, Save-Data, reported memory at or below 4 GiB,
missing animation APIs, offscreen/hidden suspension and finite cleanup remain.
No user-agent detection, new dependency, timing, artwork, CSS, task UI or output
change. The heavier reference shader keeps its existing resource policy.

[WebKit implementation](https://github.com/WebKit/WebKit/blob/main/Source/WebCore/page/NavigatorBase.cpp#L172-L182)
explains why CPU count cannot serve as this device-performance test.

## Verification

- WebKit and Chrome each pass 110 actual moving layouts across all eleven required
  sizes and both appearances, 20 static fallback visits and five lifecycle journeys.
  Every animated visit reports four CPU threads and no memory API. Tests require
  progressing timelines and changing computed transform/opacity, not just `playing`.
  Forty combined phone/desktop runs reach finite completion, release effects and
  remain complete after pagehide/pageshow. Offscreen times freeze; changing Reduce
  Motion settles immediately without replay.
- Visual review: ten WebKit comparison sheets cover phone, landscape, tablet,
  laptop and desktop in light/dark. Reviewed settled phone PDF and Resume paper too.
  Original layout, typography, colours, content and artwork are unchanged.
- Yard: 44 still layouts, 22 complete arrivals, four lifecycle/directory journeys;
  lint/types/build/dead-code; 76.03 kB gzip entry.
- PDF: 461 units, check/dead-code/types/build/asset validation, 68 artwork layouts,
  static/visibility/real-file-entry journeys and home upload/merge editor handoffs.
- Drop: 68 artwork layouts, all four forms, finite/lifecycle/static/no-JS checks;
  Astro diagnostics and asset sync/build pass. Native code is unchanged.
- Resume: 68 artwork layouts, eight real arrivals and lifecycle/editor cleanup;
  check/types/build/dead-code pass. All 373 production tests pass in the complete rerun, with zero skips.
- Roll: Astro diagnostics, generated routes/anchors/assets/provenance and Worker
  dry-run pass; the shared WebKit/Chrome matrix covers its filmstrip.
- All five portable bundles and 22 checks per app pass. IMG's parked work is retained.

The first new browser test observed only 180ms, inside Resume's approved opening
hold. It now waits up to two seconds for actual composited movement, retaining both
movement assertions and all original animation timing. Initial failures remain in
[evidence](evidence/safari-startup-2026-10-29/). PDF's older geometry test also raced
the first-cache notice, which shifted the entire page by 104px. That artwork-only
context now omits service-worker registration, like Resume's existing artwork
suite; real PWA behavior remains covered by its dedicated tests and was not changed.
The first Resume full production run passed 372/373; its previously recorded stale
contact-node click recurred. No application/assertion change is made for that race.
The complete production rerun passed 373/373 with zero skips. Initial Roll verification ran before
inventory regeneration; the refreshed inventory and final verify/Worker dry-run pass.
External browser module paths were corrected before final browser runs; no runtime
or repository dependency was added.

## Motion review

| Before                                                                                    | After                                                                                                                          | Why                                                                                                            |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| `design/air/artwork.mjs:20`: four reported CPU threads forced a still on capable iPhones. | The lightweight lifecycle ignores CPU count while retaining explicit preferences, memory/data restrictions and feature checks. | WebKit rounds six-core devices to four; this is not a rendering capability test.                               |
| Existing motion suites normalized normal profiles to eight threads.                       | A shared WebKit/Chrome regression exercises the production pages with four threads and no memory API.                          | Detect the actual cross-browser failure and verify visual progression, finite completion and resource cleanup. |

Accessibility and lifecycle: reduced/forced colours, save-data, memory, unsupported,
offscreen and departure behavior remain covered. Timings, curves and materials stay
at their approved values; no new continuous effect or rendering dependency.
**Verdict: Approve** for this bounded startup correction.

## Rollout

All five application PRs are merged and deployed; dev is synchronized with main.
All 270 public files match the tested builds: 267 raw hashes and three Roll HTML
files after removing only Cloudflare's injected detection script. Raw and normalized
hashes are retained. Live WebKit passes ten moving phone layouts, 20 fallback visits
and five lifecycle journeys, with four reported threads and no memory API.

The live harness starts observation at navigation commit so network load milestones
do not hide a short entry animation. Its initial DOMContentLoaded-based run missed
Drop's playing window; an early diagnostic and the revised live run show progression.
A subsequent run timed out finding Resume's artwork on its desktop lifecycle visit,
after both phone themes and all fallbacks had passed. The unchanged Resume/Roll rerun
passes completely. Final combined evidence uses the first three completed apps and
the complete Resume/Roll rerun; partial results and logs remain archived.
No application change was needed for those live-test retries.

Cloudflare main builds deployed the verified bytes. The later dev synchronization
triggered preview-only builds on the same merge SHAs. Drop's preview initially
failed during environment/dependency setup before building; its command is
`wrangler versions upload`, so that failure did not affect production. The identical
preview was retried without modifying settings or code and passed. Roll's separate
dev preview built successfully but failed because `wrangler preview` requires a
`previews` block. A dashboard-only attempt to use `versions upload` did not change
the next build's command and was reverted; there is no net dashboard change.
Roll's [PR #5](https://github.com/cloakyard/cloakroll/pull/5) adds the required empty
repository block for this static site, following
[Cloudflare's configuration](https://developers.cloudflare.com/workers/previews/configuration/).
Production remains `main`/`wrangler deploy`, preview URLs stay disabled, and no
production routes or data bindings are added to previews. Application bytes are
unchanged. A redundant old-build retry was cancelled; initial failed runs are
retained in the build history.

The canonical documentation closeout uses a separate dev → main PR and preserves
all 12 Yard application files byte for byte.

| Site        | PR                                                      | Application merge                          |
| ----------- | ------------------------------------------------------- | ------------------------------------------ |
| cloakyard   | [#30](https://github.com/cloakyard/cloakyard/pull/30)   | `afb3ef695914731fc753605df6559bf3a09c29b3` |
| cloakpdf    | [#215](https://github.com/cloakyard/cloakpdf/pull/215)  | `386e29fd2010003222258c5faeb06d22fb9d8774` |
| cloakdrop   | [#51](https://github.com/cloakyard/cloakdrop/pull/51)   | `f72b5b1d193c96a84590dd179fdb3c935c50fde6` |
| cloakresume | [#49](https://github.com/cloakyard/cloakresume/pull/49) | `2b204785502c394fda47eb59d72797d916c4e89a` |
| cloakroll   | [#4](https://github.com/cloakyard/cloakroll/pull/4)     | `caa5d16dfae0744f45c33668c330c25d328a0b06` |

Roll's existing dev PR also contained the already-published beta's documentation
commit `3e1c862`. That diff and its original audit were reviewed, and the published
release's asset sizes/digests were checked against GitHub. No native code, release
tag or binary changed in this website promotion. The existing PR was updated to
describe its full final scope. GitHub CLI handled writes because the connected
GitHub integration's write permission was unavailable in this session's prior rollout.

Desktop WebKit with a mobile viewport
and four-thread/no-memory hints is browser-engine evidence, not a physical iPhone
or Low Power Mode acceptance result. CloakIMG remains parked; native apps and
KERR are unchanged. Existing full-product and device gates remain open.
