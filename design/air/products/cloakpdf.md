## CloakPDF product requirements

- Scope: landing, all standalone utilities, persistent editor, every tool panel,
  overview/thumbnails, canvas overlays, command palette, export, privacy, AI model
  flows, loading/error boundary, encrypted-file notices and PWA updates.
- Document content remains local. Static code, OCR language data and optional AI
  models may require downloads. Do not promise cold-cache offline availability.
- Keep the stage mounted when tools change; preserve zoom, selection, history,
  document bytes, cancellation, progress and export behaviour. Mobile retains a
  reachable preview and working panel; short/landscape layouts need real reflow.
- PDF content, annotation colour, redaction masks and signature strokes are user
  content. The canvas surround, selection controls and every custom widget use Air.
- Redaction must permanently remove selected content using the existing verified
  export path. Preserve rasterisation/file-size/selectable-text disclosures.
- Keep standalone multi-input/security/read-only tools distinct from single-document
  editor operations. Registries own tool identity and availability.
- Preserve model consent, hardware requirements, download size/progress/cancel,
  cache/error/retry states, and source-grounded Ask PDF behaviour.
- Required gates before a code commit: `vp check`, `pnpm check:dead`, `pnpm test`,
  `pnpm run build`, and applicable `pnpm test:e2e:smoke`, `pnpm test:e2e:extended`
  and `pnpm test:e2e` suites. Inspect exported results and run the family visual
  matrix; never infer all-feature coverage from the home page.
- Keep a per-component/state inventory and evidence in `docs/air/`. Local tokens
  and this complete contract travel with the repository.
- Editor navigation uses the 72px labelled rail and neutral selected tile with a
  2×16px blue marker. Labels enlarge with text settings; a 4.5rem minimum lets
  the rail grow rather than squeezing enlarged words. Search retains the full
  tool names and descriptions. The filename, page controls, view controls and
  document actions share one 64px toolbar at normal text size, retaining real
  40/44px targets. Tablet/phone chrome hides the filename and back action in a
  document-mark popover, available by hover or keyboard/touch activation; the
  full filename remains accessible. Enlarged text may reflow without clipping.
  Keep the desktop filename alone beside the mark; the page selector owns the count.
- Editor widths follow 768/1024px. Below 1024px, a height under 500px uses the
  working sheet to avoid a shallow three-pane layout. A 1280×720 laptop keeps
  its desktop rail. The phone picker uses full-name rows and persistent search.
- The mobile working sheet starts at half height, reserving at least 18rem for
  controls when possible while keeping 64px of preview. Expand controls uses
  the available editor region; Return to split view preserves tool values and
  the mounted document. Cancel/Done return focus to the tool selector.
- Tool navigation is immediate, including active-rail scrolling. Global history
  shortcuts cannot change the document behind a modal or during a busy operation.
- Inspector headers use sentence case and secondary descriptions; omit the repeated
  document page-count subtitle. Use the shared primary/secondary action skins and
  immediate tool changes. Keep Cancel reachable for pending desktop work too.
- Browse and Organize share one responsive page grid. The density is a maximum:
  fewer columns preserve readable text and 40/44px actions; a single page keeps
  the requested thumbnail size. Keep page identity separate from output position.
  Selected browse tiles use a neutral surface and one blue marker. Deleted pages
  keep readable Restore controls and an explicit state label. Named reorder actions
  retain visible focus at boundaries and in long lists; announce the new position.
- Thumbnail geometry includes saved and pending rotation without cropping the
  bitmap. An unavailable preview has a labelled fallback. Apply/Undo/Redo/Reset
  must keep bytes, page count, thumbnails and pending plans in agreement; explicit
  Cancel discards the tool draft while ordinary tool navigation preserves it.

- The canvas surround inherits Air surface-soft, with 16/24/32px space according
  to the available viewport. Keep navigation in the compact toolbar, not another
  canvas row. Page focus has one visible contour; direct manipulation is immediate.
- On white PDF paper, selection chrome uses Air's light accent in both themes for
  contrast. Author content retains its own colours and fonts. Inline document text
  editing is an output-aligned exception to ordinary field height/radius: its box
  follows the placed text, uses 4px corners and one focus contour, and remains
  opaque. Touch editing has a 16px visible floor even when the page is zoomed out.
  Composition owns Enter/Escape; explicit completion/cancellation returns canvas
  focus, while blur follows the user's new target. Touch resize targets are 44px
  with nearest-handle resolution when targets overlap.

- N-up previews use one gapless paper sheet at the first visible page's physical
  size. Share booklet imposition order with output, including blank leaves; show
  fold/trim marks only when enabled. Retain page crop, rotation, physical units,
  vector text and native form appearances. Explain the print-layout tradeoff.
  Pending annotation/signature/code drafts must be applied in their owning tools
  before rearranging pages; preserve the selected layout while reviewing them.
- Custom selects use the local Air field/menu anatomy, 40/44px targets and an inset
  icon. Keep keyboard ownership on the trigger even after a Safari pointer click;
  anchor the menu through inspector reflow, scrolling, zoom and short viewports.

- OCR uses the shared Air language select and actions. Wide preview areas show
  text beside unmodified paper; narrow areas switch between Text and Source so
  neither pane loses half its working height. Recognised text is selectable,
  keyboard-scrollable and wraps at enlarged text sizes. Use the toolbar's page
  navigation, without duplicating its count in the preview.
- OCR results belong to one immutable document revision, including pending marks.
  Discard late extraction results after navigation or document changes. Apply
  destructive marks before recognition, and review other drafts in their owning
  tools. Never reuse pre-redaction text or duplicate an existing native text layer.
- Fit invisible OCR text to word boxes in the cropped, rotated physical page frame.
  Missing positions or unencodable characters must fail explicitly and retain the
  preview for copy/retry; never report success after silently dropping words.
