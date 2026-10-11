## CloakDrop website requirements

- This specification governs **`apps/site` only**: landing, product/craft/privacy,
  download/install content, privacy document, 404, navigation, footer and artwork.
  It does not restyle the SwiftUI application or its native controls.
- Keep the native app's real screenshots accurate. Air styles their surrounding
  website, without drawing fake native chrome or presenting speculative features.
- Preserve actual architecture/OS requirements, release availability, signing and
  notarisation status, checksums, download links and installation guidance.
- Privacy copy continues to reflect the actual product, including deliberate
  download/browser/model requests and zero telemetry. Do not infer zero networking
  from local-first operation.
- The website remains static Astro and uses the portable family CSS directly;
  adopting Air does not require adding a React runtime to this site.
- Root `PRIVACY.md` remains the website policy source. Keep the displayed policy
  revision accurate. No Swift/native policy edits unless independently required.
- Required gates in `apps/site`: `npm run sync:assets`, `npm run check`,
  `npm run build`, anchor/download/privacy/404 checks, and the full responsive,
  light/dark, keyboard/touch/reduced-motion and long-content matrix.
- Confirm the change has no native-app or KERR diff. Record evidence in `docs/air/`.
