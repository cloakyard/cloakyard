# Cloakyard brand-coloured Air deployment — 2026-10-19

The user explicitly authorized deployment. The validated candidate `0f290bc`
was fast-forwarded into dev, then merged through [PR #11](https://github.com/cloakyard/cloakyard/pull/11)
to main `4e860f3`. The production tree matches the validated candidate.
Cloudflare build `f960b3c2-39f4-4688-a2df-d7088263b74b` succeeded; active version
`eaecf313` serves 100% traffic at [Cloakyard](https://cloakyard.com).

Fresh local checks and production builds pass. All PR and main CI checks pass.
Every deployed build file matches local SHA-256, with no-transform headers:
13 files plus the expected missing-route response (SPA 200). This includes the
OG artwork and lazy shader. Twelve production viewport/theme cases cover desktop,
laptop, tablet, narrow phones and landscape; both real GPU themes render and
stop at rest. Desktop/laptop/phone light/dark captures were visually inspected.
No browser script errors were observed.

The dashboard shows production branch main, with the existing non-production
version command also set to `npx wrangler deploy`. A dev push can therefore affect
production before the main build. This setting was not changed in this task;
account for it before future branch pushes. The final active version is the main
build recorded above.

Evidence: [deployment record](evidence/brand-deployment-2026-10-19/deployment.json),
[asset hashes](evidence/brand-deployment-2026-10-19/live-assets.json),
[responsive/GPU checks](evidence/brand-deployment-2026-10-19/brand-horizons.json)
and adjacent review/deployment images. Full captures/logs remain at
`/tmp/air-brand-deploy-2026-10-19/cloakyard/`.

Resume and IMG remain local; full-family migration and physical GPU/battery/thermal
and assistive-device acceptance remain open. No credentials or deployment settings
were changed.
