## CloakRoll website requirements

- Scope is the static Astro website under `apps/site`: landing, privacy, recovery,
  header/footer, release links and local artwork. Native SwiftUI stays unchanged.
- Preserve the product's Apple silicon/macOS 26+ requirements, actual beta status,
  USB/local-originals behavior, no-overwrite guarantees and pending hardware gates.
- The privacy document preserves `docs/PRIVACY.md` and separately describes website
  hosting. Keep native policy wording and its 28 October 2026 revision unchanged.
- The approved five-scene filmstrip is decorative, finite (2.66 seconds) and static
  under reduced motion/forced colours/constrained conditions. Preserve its existing
  local lifecycle; no new shader, React runtime or network request is needed.
- Keep the 36px web mark, real synthetic-library screenshots and actual release-index
  destination. Never imply that a website deployment publishes the native app.
- Required website gates: `npm run verify`, `npm run check:worker`, portable Air
  validation, responsive light/dark/keyboard/coarse/enlarged-text and no-JS checks.
  Record scope and evidence in `docs/air/`; native/hardware acceptance stays separate.
