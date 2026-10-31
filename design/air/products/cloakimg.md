## CloakIMG product requirements

- Scope: landing/start/import, full editor/canvas, every tool and panel, layers,
  history/scrubber/compare, batch, file properties/privacy audit, AI flows, export,
  custom colour/curve/slider/select controls, mobile UI, policy and PWA updates.
- Photo editing is the domain; document/OCR workflows belong in CloakPDF.
- Actual image pixels, alpha checkerboard, colour fields, histograms, masks,
  and effect previews are functional visual content. Their shells, labels,
  controls, menus, progress and errors use the shared Air system. Selection, crop,
  perspective, pen anchors, alignment guides and brush targeting use Air
  `paper-accent` blue with a contrasting rim. Canvas paint uses its fixed RGB
  equivalent; author colours and exported pixels stay unchanged. The Relight
  sun is an effect-position preview, so its warm light material remains functional.
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
- Compact photo editing uses labelled Adjust / Crop / Retouch / Protect / Add /
  Tools shortcuts: a persistent phone dock and a 64px tablet rail. Tools opens
  the shared grouped, searchable catalogue without unmounting pending controls.
  Phone Adjust puts its group selector in the fixed header and presents one
  named parameter with its exact value and slider; tablet shows related values
  together in the 288px inspector. Curves and all adjustments remain explicit
  expanded views, with the preview and return action retained. At 768px, use the
  tablet split; wide phones at 640px and above with at most 500px height place
  controls beside the photo and the dock below both. Enlarged text may grow the
  compact rail; horizontal dock/parameter scrolling stays inside its own region.
  Cancel restores the tool-entry settings and history; Done bakes once. Reopening
  the same tool or browsing the catalogue must not silently commit a preview.
- Landing artwork is a local vector landscape: a coral sun rises behind layered
  mountains while the foreground settles and the crop corners find the composition.
  The sun uses a 2000ms Air arrival curve after 360ms; mountain/foreground spatial
  transforms run 2100ms with 60ms staggering; the frame settles in 1800ms after
  1400ms. The full sequence ends at 3200ms. Use only transform animation, the
  canonical product artwork colour and neutral planes; no remote image or renderer.
  Static SVG markup is the completed landscape. Keep completed-only replay and all
  shared accessibility/resource/visibility/stylesheet-ready fallbacks. The real
  upload target remains separate and immediately usable. OG reuses the same SVG;
  photographic editor screenshots remain truthful sample content, not hero artwork.
