# CloakIMG touch workspace — 2026-10-31

The approved photo-first touch direction is implemented under Air 1.3.2. Phones
have a persistent labelled tool dock and one precise adjustment at a time. Tablets
use a compact labelled rail and the standard Air inspector. Short landscape phones
place controls beside the image. All 26 tools remain in the shared grouped catalogue.

Cancel now restores the tool-entry settings as well as history; Done applies once.
Catalogue browsing, select/dialog dismissal and responsive changes preserve edits.
The duplicate mobile picker/rollback, obsolete tool-tab metadata and superseded grid
styles were removed. Image processing, codecs, model tiers, shared Air materials and
other family applications are unchanged. The canonical IMG product appendix was
updated and the standalone design document regenerated.

README and PWA previews now show the real phone dock and tablet inspector. The
capture generator, manifest dimensions and descriptions use the current layouts;
the old picker references and desktop-width tablet preview are removed.

The [product audit](https://github.com/cloakyard/cloakimg/blob/main/docs/air/touch-workspace-2026-10-31.md)
and [verification record](https://github.com/cloakyard/cloakimg/blob/main/docs/air/evidence/touch-workspace-2026-10-31/verification.json)
contain the detailed scope, selected captures, reproduction commands and limits.

Local gates pass: 486 units/50 files, format/lint/types, production build, design,
22 portability checks/28 assets, 105-source inventory and Knip with no issues. Both
engines pass 780 initial tool/layout observations, 180 final header observations and
360 alternate-state observations each. Feature evidence includes 192 retained-value/
canvas breakpoint transitions, 20 transaction journeys plus eight final expanded
phone checks, 12 native field/file recovery and eight control/target journeys, eight
compact menu/consent/batch journeys, all 26 tool probes and export/history recovery.
Twelve real candidate PNG downloads match preceding production exactly, including
transparency. History checks preserve the existing Display-P3/WebP representation.

[IMG PR #25](https://github.com/cloakyard/cloakimg/pull/25) is merged and deployed.
Main and dev are `abc65b2677a203d9ecabdcae163d945cecce8236`. Exact main contract and
Cloudflare checks pass; all 89 served files match raw local bytes. Live Chrome/WebKit
checks pass 192 retained-value/canvas transitions, eight compact menu/consent/batch
journeys and 12 real PNG downloads with exact preceding-production pixel/alpha parity.
The [release record](evidence/cloakimg-touch-workspace-2026-10-31/release.json)
contains the checks, asset hashes and live evidence. Central documentation follows
its own dev → main PR with unchanged homepage bytes. Task previews are stopped.

Physical iPhone/software-keyboard, OS IME and spoken assistive acceptance remain
open. This work does not repeat every model tier, native codec or high-resolution
workload. Scratch: `/tmp/air-img-touch-2026-10-31/`.
