# CloakIMG canvas-first implementation — 3 November 2026

The approved mock is implemented and production-verified under Air 1.4.0.
All five product PRs are merged with passing exact-main checks. Yard carries the
canonical contract and this release record through its own dev → main PR.

## Design and implementation

IMG reserves at least 40% of visible editor height for the photo. Local Cancel /
Apply X / tick controls stay beside the title in a fixed tool header; controls
scroll independently. Targets are 48px with accessible names and associated
tooltips. Inspection/output panels retain Close; desktop retains labelled actions.
Tablet uses a full-height side inspector; short landscape has side-by-side controls.
Global actions sit in one opaque Air group on the canvas plane. The filename opens
file properties at every size; secondary toolbar details yield space at enlarged text.

The canonical contract, product appendix, interactive reference and optional compact
action CSS are synchronized into eight specifications and six independent bundles.
Other products retain their real completion/autosave semantics. Contract SHA-256:
`338c39fa591104adaf1354437013378e92ffa19189308f9da28e3d9bd83f2f1f`.

CSS grid replaces expansion state, panel-height measurement observers and heading
portal/callback plumbing. Keyboard completion restores focus to the persistent tool
shortcut. Validation errors stay in the scroll body. Processing, transactions,
codecs, models and history representation are preserved. Actual phone/tablet
PWA/README screenshots are refreshed. No dependency was added.

## Verification

IMG passes 487 units / 50 files, format/lint/types, build (90 assets within 25 MiB),
all-tool rail, design/inventory and portability checks. Dead-code inspection finds
no unused product code/dependencies; Knip's four configuration hints are recorded.

Chrome and WebKit each pass 780 initial and 720 alternate tool observations for
all 26 tools, including required sizes/themes and enlarged text. A final 60-state
matrix per browser covers the last toolbar text refinement. Feature checks pass
20 action/download and 20 touch/history journeys, 192 retained-edit/persistent-canvas
breakpoint transitions, eight compact and eight control/target journeys, twelve
native input/file recovery cases and twenty canvas/scroll/focus journeys. Twelve
downloaded PNGs exactly match preceding production's decoded pixels and alpha.
The real-worker suite passes 132 notice layouts and 54 captures, including
two-tab update deferral and active-edit preservation.

The six-site comparison passes 648 home layouts, 288 secondary layouts and 390
navigation/link interactions with zero deviations/errors. All six phone light/dark
headers, footers and neutral links were visually compared. Resume's section outline
in the capture is intentional keyboard destination focus. The shared reference
passes eight Chrome/WebKit journeys at 320px/1280px. Fifteen shared file/collection
tests and two reference tests pass.

PDF passes 461 units plus format/lint/types/dead-code/build. Resume passes all 373
production tests with zero skips plus format/lint/types/dead-code/build. Drop passes
asset sync/Astro check/build; Roll passes website verify and Wrangler dry-run.
Every app passes design and independent portability checks.

[Family evidence](evidence/canvas-first-2026-11-03/verification.json) and
[IMG's implementation record](https://github.com/cloakyard/cloakimg/blob/main/docs/air/canvas-first-2026-11-03.md)
contain counts, captures, source-result hashes and reproduction. Scratch:
`/tmp/air-img-canvas-2026-11-03/`. HMR-interrupted attempts are excluded. The audit
corrected a legacy 44px override, tooltip association, keyboard focus return and
enlarged-text filename crowding. Settled captures replace one capture preceding
its reopening resize paint. Final focused checks cover the last toolbar refinement.

Physical iPhone/software keyboard, OS IME and spoken assistive acceptance remain
open. WebKit automation is not physical Safari proof. This pass does not certify
every model tier, native codec or high-resolution workload. PDF's separately
approved Compact beta limitation remains. KERR/native UI are unchanged.

## Rollout

Individual dev → main PRs preserve branch history; dev is synchronized afterward.
Drop's website commit is isolated from unpublished native/release history. Resume's
separate worktrees remain untouched.

| Product      | PR                                                     | Exact main                                 | Production verification                                                                      |
| ------------ | ------------------------------------------------------ | ------------------------------------------ | -------------------------------------------------------------------------------------------- |
| IMG          | [27](https://github.com/cloakyard/cloakimg/pull/27)    | `2673df41119d7de03243194ad189e828a90a93c2` | 89 raw asset matches; 20 canvas/focus journeys, 192 transitions and 12 exact PNG comparisons |
| PDF          | [226](https://github.com/cloakyard/cloakpdf/pull/226)  | `4bb3c5429d63ba59c7c6a851b931fd887537d837` | 130 raw asset matches                                                                        |
| Resume       | [54](https://github.com/cloakyard/cloakresume/pull/54) | `68ac708cd1704368351b349a5f50ef6ddceb9f92` | 101 raw asset matches                                                                        |
| Drop website | [56](https://github.com/cloakyard/cloakdrop/pull/56)   | `651d05dfd407e44e59d2101d21bacfb903d9b133` | 16 raw asset matches                                                                         |
| Roll website | [10](https://github.com/cloakyard/cloakroll/pull/10)   | `69564edb19321f3e63ecd253a5a8b0a9464ea016` | Eight raw matches; three existing HTML injection exceptions                                  |
| Yard         | [43](https://github.com/cloakyard/cloakyard/pull/43)   | Recorded in PR                             | Canonical contract/evidence; final own-main CI and live checks in PR description             |

Roll's three HTML files differ only by one existing Cloudflare challenge-platform
script; removing that exact injection leaves identical bytes. This is separate
from raw parity. The GitHub connector lacks PR-write permissions, so the
authenticated CLI performs the authorized promotion with passing required checks.

Product dev/main are synchronized. Drop retains its unpublished native/release
commits locally; the isolated website checkout is removed. The central PR records
its own final main checks and homepage asset verification after merge.

The final production family comparison also passes 648 home and 288 secondary
layouts plus 390 navigation/link interactions with zero deviations/browser errors.

Task preview ports 8470–8477 are stopped. Physical/device/assistive and the separate
product/output acceptance backlog remain open.
