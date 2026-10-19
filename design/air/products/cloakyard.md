## Cloakyard product requirements

- Scope: the family directory and its complete responsive navigation, product
  listing, principles, experiment link, footer, metadata and social artwork.
- The product registry remains the source of destinations/platform/status/copy.
  Open product entries keep correct source links and distinguish web apps from native macOS.
- KERR appears as a text exploration link, without screenshots, simulated orbital
  artwork, embedded canvases, video or a preview. KERR itself is unchanged.
- Keep semantic landmarks, skip navigation, anchor targets, safe initial/return hash restoration, privacy truth, source/licence/author links, and zero analytics.
- CSS and optional effects are bundled locally; do not add remote font or runtime
  API requests. The site remains a small static directory, without accounts.
- Required gates: `vp check`, `vp build`, all links/anchors, and rendered responsive,
  light/dark, keyboard/touch/reduced-motion and long-copy inspection.
- Work tracking: `UX_REFRESH_TODO.md`; source inventory and validation evidence in
  `docs/air/`. A documentation-only phase is not a completed visual migration.

- The hero uses the canonical finite Shaders runtime with a static first paint. Lazy
  shader payload must remain below 350 kB gzip; page entry below 85 kB gzip. Preserve
  licenses, 30fps/pixel-ratio caps, no idle frames and complete effect cleanup.
  Record measured startup and queue completion separately from physical battery
  and thermal acceptance. Do not add the renderer to product editors.
