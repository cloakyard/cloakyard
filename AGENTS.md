# Cloakyard contributor instructions

Read `CLAUDE.md` for repository commands and architecture. Read `DESIGN.md` before
changing any visible UI. The approved family direction is **Air**; `DESIGN.md`
supersedes earlier visual rules in other documents.

The complete refresh is tracked in `UX_REFRESH_TODO.md`; do not call a landing-only
or token-only change a completed product migration. Audit custom controls, editor
interiors, canvas chrome, overlays, edge states and every required viewport class.

`design/air/contract.md` owns the portable family contract. Update it and regenerate
the per-app documents with `node scripts/sync-air-design.mjs`; check with
`node scripts/sync-air-design.mjs --check`. Standalone products include the complete
contract and must not require a sibling checkout at runtime.

Implement one bounded piece, inspect rendered desktop/laptop/mobile light/dark
states, run all applicable checks and feature tests, record evidence, then commit.
Never commit a piece with failing required checks. Keep KERR's app and native
macOS UI unchanged; the family homepage presents KERR only as an exploration link.
