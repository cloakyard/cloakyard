## CloakIMG product requirements

- Scope: landing/start/import, full editor/canvas, every tool and panel, layers,
  history/scrubber/compare, batch, file properties/privacy audit, AI flows, export,
  custom colour/curve/slider/select controls, mobile UI, policy and PWA updates.
- Photo editing is the domain; document/OCR workflows belong in CloakPDF.
- Actual image pixels, alpha checkerboard, colour fields, histograms, masks,
  handles and effect previews are functional visual content. Their shells, labels,
  controls, menus, progress and errors use the shared Air system.
- Preserve history, preview/apply/cancel semantics, tool switching, selection,
  imported metadata, crop geometry, exact ID-photo dimensions and export fidelity.
- Never release pooled canvases inside React state updaters; retain the existing
  published-canvas reference lifecycle and StrictMode safety.
- All model downloads remain behind the existing capability consent/state system:
  show size, requirements, progress, cancellation, cached/ready/error/retry states.
  A disabled AI control must explain how to make it available.
- Preserve local HEIC/HEIF import and JPEG/PNG/WebP/AVIF/HEIC export capabilities,
  print/PDF output, metadata removal, and the deploy asset-size gate.
- Use shared `SelectControl`, `ModalFrame` and field/atom shells; custom widgets
  obey identical focus, target-size, radius, colour and responsive contracts.
- Adjust has eleven signed values: exposure −2…+2 EV (0.1 steps), and contrast,
  highlights, shadows, whites, blacks, saturation, vibrance, temperature, vignette
  and sharpen −100…+100. Neutral is zero, not 50%. Preserve the production math.
- Selective colour has eight named bands; hue −60…+60°, saturation −100…+100,
  luminance −50…+50. Levels preserve 0–255 endpoints, ordered input bounds and
  the existing gamma mapping. Scope is Whole / Subject / Background with explicit
  readiness and consent; unavailable scope must not silently edit the whole image.
- Tone curves need keyboard and numeric point editing in addition to the existing
  pointer gesture. Baked adjustments belong in history; Layers lists the actual
  Fabric objects and their existing visibility, filters, deletion and ordering.
- Required gates: `vp check`, `vp test run`, `pnpm run build`, `pnpm test:tools`,
  applicable `test:audit`/PWA scripts and feature probes for export/history, AI,
  mobile apply/cancel, crop, masks and all changed tools. Record actual coverage;
  unchanged or unavailable model paths are never described as exercised.
- Keep a per-component/state inventory and evidence in `docs/air/`. Local tokens
  and this complete contract travel with the repository.
