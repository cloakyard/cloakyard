## CloakTools product requirements

Air 1.8.3 is pinned in `docs/air/bundle.json`, including the exact contract, CSS, artwork lifecycle and social-card tools. This complete contract travels with a standalone checkout. Product composition never overrides `--air-*` values. Native SwiftUI windows follow `NATIVE_DESIGN.md`, not web skins.

The seven public surfaces are Home, Install, Privacy, Support, Source, License and 404. Header, mobile disclosure, footer, primary/quiet actions, reading layout, contents links, skip link and replay use the family recipes. README navigation follows the family README standard. Source and license links use the maintainer-supplied repository and `main/LICENSE`; no placeholder release download is shown.

The distinct artwork fans three folded documents into a tray using transform and opacity for 2.46 seconds. The shared lifecycle handles replay and static fallbacks. Its illustrations, fixed white paper, folded corners and tray geometry are decorative content, not alternate control skins. Actual app captures retain native window corners (2% / 3%) and native system colors. Owner: maintainer; review these content exceptions whenever artwork changes.

The social card uses the unchanged Air template and settled landing artwork; configuration is `artwork/social.json`. Exact source and public PNGs are identical, 1200 × 630, with matching OG/Twitter metadata on every route. It is a designed preview, not an app screenshot.

The surface ledger and dated acceptance evidence are `docs/air/surfaces.json` and `docs/air/AUDIT-2026-11-17.md`. Static checking complements browser inspection; neither certifies native accessibility or signed runtime behavior.

Long contents lists (more than eight sections) start collapsed below 60rem, before article parsing, to put the first useful section on screen. The same native Air disclosure remains available; with JavaScript disabled the full list is open and usable. Resizing never resets a user’s disclosure choice. This is content-driven initial state, not a new control treatment. Legal copy uses flowing paragraphs, and horizontally scrollable command examples are keyboard-focusable regions.
