# Consistent landing navigation arrows — 2026-10-19

Superseded by [the user-confirmed angled hyperlink treatment](hyperlinks-2026-10-19.md).
This is historical evidence; the straight-link rule is no longer authoritative.

The user identified diagonal link arrows in Cloakyard and CloakPDF. Air 1.0.4
(`0f6ea38f83a9`) now requires a straight right arrow for forward landing links,
including outbound header/content/footer links. Back, download and disclosure
icons retain their meaning; plain text links need no extra decoration.

Header (including compact menu), product/experiment links, invitation and family footer use ArrowRight. Hover follows translateX(2px); keyboard focus and reduced motion stay still. The shared gallery reuses its existing right-arrow glyph; the obsolete diagonal glyph is removed. Check/types/build, 13-source integrity and 18 portability checks pass.

Each family landing passes 22 required viewport/theme cases (11 sizes, both
appearances), plus 320px at 200% text in both themes. Compact menus open and
close with Escape/focus restoration. Decorative arrows remain hidden from
assistive technology; no diagonal navigation glyph or horizontal overflow remains.
Desktop/laptop/phone light/dark navigation captures were visually inspected.
The generated gallery, horizontal-only hover, static keyboard focus and reduced
motion pass separately. This does not close full product or physical-device gates.

Evidence: `evidence/link-arrows-2026-10-19/`. Full captures and verification
commands are retained in `/tmp/air-link-arrows-2026-10-19/`. Root/PDF publication is a
follow-up to the authorized website release; Resume/IMG remain local.

## Production verification

[PR #12](https://github.com/cloakyard/cloakyard/pull/12) merged the tested
`f69472a` candidate to main `41a8f4b`. Cloudflare build
`2f2916ad-d35e-4a91-9ffe-2c09c68198a6` deployed version `b442b862` at 100% traffic.
All remote checks pass. All 13 production files match local SHA-256, retain
no-transform and preserve missing-route behavior. The 24 live layout/text cases
pass, and live desktop/laptop/phone light/dark navigation captures were inspected.
Evidence: `evidence/link-arrows-2026-10-19/production/`. Release tags are unchanged.
