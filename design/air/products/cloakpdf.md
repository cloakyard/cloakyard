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

- Preview failure must not discard readable PDF bytes or represent missing content
  as a blank page. Name unavailable previews across the canvas and page collections;
  keep a reachable Air retry action outside the scaled document. Disable direct
  canvas editing until the page preview is available.
- Retry only failed previews from the current bytes. Preserve tool drafts, OCR
  results, pending marks, page plans, geometry and undo/redo. Preview cache repair
  is not a document edit. Discard late repairs after replacement or byte changes,
  release retired URLs/canvases, and bound preview memory independently of export
  resolution. A failed image export must fail explicitly, never emit blank output.

- Redact and Smart Erase use open Air groups, labelled choices and one shared
  pending-mark collection. Reviewing, removing and clearing marks preserves the
  persistent Undo path and moves focus to a surviving control. Appearance settings
  affect new marks; keep existing mark colours and erase methods intact.
- Detection and text search own one cancellable request tied to the source byte
  revision, not only the document ID. Ignore abandoned work after a transform,
  replacement or tool exit; prevent duplicate dispatch and retain valid inputs on
  failure. A processing error does not make the search phrase invalid.
- Colour presets have separate 40/44px targets and explicit selected state. The
  custom picker keeps the actual colour field, labelled saturation/brightness/hue
  axes and direct hex entry inside the Air popover. Preserve invalid drafts and
  the last valid output colour; Escape returns focus. Keep the popup reachable
  after scrolling, resizing or zooming, even when its anchor moves offscreen.
- Redaction/erase remain deferred until export or a byte operation. Explain the
  permanent removal, loss of selectable text on marked pages and possible file
  growth. Pixelation can retain recognisable details; it is not a substitute for
  redaction of sensitive information.

- Find & Act stages review matches against their exact byte revision. Keep the query,
  previous valid results and individual selections when search fails or is cancelled;
  never apply stale coordinates after another edit. Match-case/whole-word choices,
  removable terms, per-match inclusion and page navigation use shared Air controls.
  Appearance colours belong to document marks; result snippets use readable UI tokens.
- Search and analysis have explicit pending, no-match, failed and retry states. IME
  composition owns Enter. Scrub counts describe the supported categories, never a
  blanket claim that a PDF is safe. Only selected removal categories enable Apply.
  Explain loss of bookmarks/form registration and the limits of keeping annotations.
- Mobile Done waits for a promised operation to finish before closing the tool.
  Failures retain the tool, input and choices for retry; repeat activation must not
  apply twice. Desktop primary actions consume reported failures without an unhandled
  rejection. Undo remains the recovery path for successfully applied byte changes.

- Metadata uses an open document report, persistent field labels and the family
  date/time picker. Read errors must never become blank editable properties;
  expose retry and disable Apply until the current revision has been read.
  Preserve drafts through tool/viewport changes and failures, scope them to exact
  bytes, discard them on Cancel and retire them after a successful save so Undo
  cannot resurrect an applied draft. Clearing the standard fields does not remove
  XMP; explain that limit without claiming the PDF has been sanitised.
- Calendar days have seven 44px columns even on the smallest phone. The 320px
  composition uses a full-width surface and 4px grid inset; other controls keep
  their normal gutter. Date restrictions, local time, year selection, hour/minute
  menus, AM/PM, Clear and Now remain available. Give Created and Modified distinct
  accessible names, focus the day before paint, dismiss nested menus first and
  return focus to the actual field. Scrolling/zoom must keep completion reachable.
- True modals suspend the actual Air popover/menu/tooltip portals. Remove retired
  legacy skins and selectors together; stale class names cannot own focus behavior.

- Bookmarks use open, named rows with persistent title, target-page and nesting
  labels; the shared select owns keyboard selection. Reorder controls retain row
  identity and focus; removal and heading replacement offer draft-list recovery.
  Invalid targets remain editable with nearby feedback, never silently clamp.
- Bookmark drafts belong to exact source bytes, survive ordinary tool/viewport
  navigation and retire after Apply or Cancel. Heading scans cancel or ignore
  abandoned results after tool exit, document changes or mark changes. Failed or
  empty detection preserves manual input. Explain first-use resource downloads.
- Applying an outline replaces the previous one and remains undoable. Contents
  pages preserve original page references and adjust link targets; unapplied
  overlays must be resolved in their owning tools before pages are inserted.
  Explain printed-title shortening/unsupported-glyph limits without changing
  complete Unicode outline titles. Do not silently discard pending objects.
- Pending Apply remains registered when validation rejects before processing.
  Concurrent flush callers wait for the same operation; failed mobile Done keeps
  the tool and its draft available for correction and retry.

- Attach uses open file rows, complete wrapping filenames, decoded sizes and
  named 40/44px remove controls. Duplicate names remain distinct files. Show read
  errors and retry explicitly; never substitute an empty list for a failed read.
- Failed attachment selections belong to exact source bytes, survive tool/viewport
  navigation and remain available for retry or discard. Cancel retires them;
  successful actions retire them before Undo. Immediate actions are guarded,
  promised and undoable; mobile Done closes without discarding a failed selection.
- Attachment handling preserves Unicode names and nested name trees. Remove by
  revision-scoped identity, clear standard associated-file/annotation references,
  delete unshared embedded bytes and preserve shared streams and unrelated content.
  Unsupported surviving references fail explicitly, without changing the source.
  Pending privacy marks must be resolved before attachment edits use listed identities.
- After a blocking operation, restore the initiating control when it survives.
  A removed row supplies a surviving action as its focus destination. Closed
  dialogs fall back to Export; failed tool operations must not jump there.

- Crop uses the shared Air scope segments and four persistent percentage fields.
  Dragging and keyboard entry describe the same visible page frame. Preserve
  incomplete/invalid drafts with nearby feedback; opposing margins must leave a
  positive area. Keep the primary crop action near its fields. A successful crop
  retires its draft; failure retains it. Scope drafts to exact source bytes.
- Trim to content is a cancellable suggestion. A result must still belong to the
  same bytes, page, scope, marks and draft before replacing margins. Blank and
  full-frame pages are legitimate no-result cases; read failures require retry.
- Straighten is an immediate undoable operation. Explain image-only text, possible
  file growth and clipped edges. Require pending marks to be applied first; reject
  changed pages with native annotations/widgets until flattened. Preserve the PDF
  catalog, page references, metadata, attachments, untouched forms and original
  rotated/CropBox/UserUnit geometry. A no-skew pass returns the original bytes.
- Strip furniture presents full wrapping text samples and named Air check rows.
  Distinguish too few pages, no selectable text, no matches, reading, cancellation
  and failure. Selection belongs to exact bytes and survives tool/viewport changes
  and failed Apply. Derive preview bands directly from the selected result; do not
  maintain a second copy of crop margins. Retire applied selections before Undo.
- Crop and Strip furniture await their byte operation before mobile Done closes.
  Failures keep the tool and draft ready for retry. Cropping hides content without
  deleting it; both tools must explain that it is not sensitive-data removal.

- Signature uses Air source segments, labelled ink/background controls and a single
  drawing-surface focus contour. White drawing paper and actual ink/alpha are output
  data in both themes. Draw and Choose retain separate sources through tool and
  viewport changes; completed strokes remain editable. Cancelling a pointer stroke
  discards only that unfinished stroke. Clear returns focus to the drawing surface.
- Image preparation exposes progress and recoverable decode/size errors. Choosing
  the same file can retry; failure preserves the previous ready image. Cancel reads
  on tool exit/document replacement and ignore superseded results. PNG/JPEG inputs
  are limited to 20 MB and 16 million pixels; preserve existing alpha, including
  white ink, and remove near-white paper only from opaque images.
- Offer a keyboard placement action, named placed-object selector, move/resize and
  remove controls alongside canvas gestures. Arrow/Delete keys act on a focused
  page, never globally while using panel controls. Keep images fully on the visible
  page and preserve their physical aspect when copying to mixed page sizes.
- Copying to remaining pages stages placements from the first signed page; it is
  distinct from Apply and leaves occupied pages unchanged. Apply awaits embedding,
  preserves unrelated marks and PDF content, and removes only successful signature
  drafts. Failed mobile Done keeps the tool and placements ready for retry. Undo
  restores the prior bytes/placements. Never silently omit an incomplete signature.

- Stamp owns a byte-scoped preview and Air text, field-insertion, shape/finish,
  colour and precision controls. Retain raw invalid numeric drafts through layout
  and tool changes; preview the last valid value and prevent invalid Apply. Numeric
  values stay at the trailing edge when enlarged text wraps. Keep native keyboard
  stepping while suppressing duplicate platform spinner chrome. Selected segments
  remain distinguishable in forced colours.
- Read the actual document title for field expansion and capture one preview time
  for both preview and saved date/time tokens. Field insertion replaces the current
  selection, restores the caret and never steals focus from a subsequent action.
  Failed/abandoned property reads preserve the PDF and cannot publish stale results.
- Ink and shaped previews reuse the supersampled output buffer, so zoom does not
  reshuffle texture. Bound cached canvases to 16 million pixels in total, twelve
  entries and an 8192px maximum side; release evicted buffers and clear on tool exit.
  Oversized stamps report a recoverable error. Plain digital text stays vector;
  unsupported encoding offers a shape/ink correction without changing the PDF.
- Stamp Apply awaits saving, retains a failed draft and retires a successful preview
  before Undo. Start another stamp explicitly re-arms the settings. Keep busy focus
  in the panel and mobile Done open until success. Preserve existing text, metadata,
  attachments and visible-page geometry. A watermark is not redaction.

- Page numbers uses the shared six-position grid, custom Air format menu and colour
  picker. Keep the 3×2 spatial layout, named 44px cells and a neutral selected surface
  with a blue marker. Full format names remain visible in the menu. The same grid
  serves Bates; do not fork it for another numbering tool.
- Stamp and Page numbers share one precision-field adapter and its styling. Keep
  16px between numeric rows, including rows without sliders. First page and Start at
  use whole-number entry; Size and Margin pair entry with a slider. Preserve invalid
  drafts through tool/layout changes, show field-associated errors after blur and
  preview the last valid settings while preventing Apply. First page skips earlier
  PDF pages; Start at chooses the initial label. Totals show the last sequence label.
- Use one formatter for page-number preview and output. Validate the sequence,
  dimensions and actual text fit on every visible page, including mixed sizes,
  rotation, CropBox and UserUnit. Report the page that cannot fit; never silently
  clip numbers or change the working PDF on failure. Preserve text and catalog data.
- Scope the pending numbering preview to exact document bytes. Await Apply/mobile
  Done, retain failed drafts and prevent duplicate saves. Retire successful previews
  before Undo; Start another numbering explicitly re-arms them. Keep busy focus in
  Page number settings. Cancel restores the tool checkpoint.

- Header & footer uses shared Air Header/Footer segments and three full-width,
  persistently labelled alignment fields per group. Preserve all six values when
  switching groups, tools or viewport. Show the token insertion destination and
  its expanded preview; default to the left field of the selected group. Insertion
  replaces the selection, returns the caret and yields to subsequent focus changes.
- Share token controls and the byte-scoped document-title/clock reader with Stamp.
  Use one captured timestamp in preview and output; failed reads offer retry and
  abandoned reads cannot update a later visit. Long resolved text wraps in help.
- Reuse PrecisionField for Size (7–18 pt) and Margin (12–72 pt), keeping raw invalid
  drafts, associated errors and the last valid preview. Skip first page is the Air
  switch and must not leave a one-page PDF with no eligible pages.
- Share header/footer token expansion and alignment geometry between preview and
  output. Check exact embedded-font widths on every visible page; keep 4 pt clear
  between occupied fields. Reject clipped/overlapping text, multiline fields,
  unsupported characters and empty expanded output with an actionable message.
  Preserve catalog data, source text, rotation, CropBox and UserUnit on success.
- Await Apply/mobile Done, retain failed drafts, keep busy focus in settings, retire
  successful previews before Undo and explicitly re-arm Start another header & footer.
  Cancel restores the checkpoint. Replaced TripleRow and native-value token insertion
  paths must not remain; retain only shared controls with live consumers.

- Bates numbering uses full-width Air Prefix/Suffix fields, the shared minimum-digit
  segments, spatial position grid and colour picker. Minimum digits adds leading
  zeros; identifiers grow across digit boundaries without truncating or wrapping.
  Use precise Start at entry (1–999999999), with enough width for all nine digits,
  and the shared Size (8–24 pt) and Margin (12–72 pt) entry/slider controls.
- Retain invalid numeric drafts through tool/layout changes, associate errors after
  blur and preview the last valid numeric settings. Share one identifier formatter
  and Courier layout between preview/output. Check every visible page with exact
  embedded-font widths; report fit, multiline, unsupported-character and sequence
  precision errors without changing the PDF. Keep identifiers selectable and retain
  page geometry, text and catalog data.
- Scope the pending Bates preview to exact source bytes. Await Apply/mobile Done,
  keep failed settings ready for retry, retire successful previews before Undo and
  explicitly re-arm Start another Bates numbering. Keep busy focus in settings;
  Cancel restores the checkpoint. Remove replaced StampTools and unused adapters;
  retain shared controls only where live consumers remain.

- Editor loading uses the shared Air status and measured preview progress: unknown
  parsing work has no invented percentage; once page count is known, show completed
  previews out of that total. Name the local file with wrapping, retain an exit to
  the toolkit and keep short/enlarged layouts scrollable. Late reads, progress and
  saved-draft lookups cannot replace a newer file or a departed editor; release
  thumbnails created by ignored results. React effect replay must still finish.
- Error and saved-session notices use neutral Air surfaces, semantic icons, sans
  labels and shared buttons. Wrap text/actions; cap their combined scrolling area
  at 40% of the editor to retain canvas space. Keyboard must reach every action
  even with enlarged text. Discard names the saved edits it removes; it preserves
  the open original and other files' saved sessions.
- Restoring saved edits keeps the original bytes and the offered draft until it
  succeeds. Failed restoration keeps Restore available and exposes the error without
  an unhandled rejection. Retry is awaited and duplicate work is guarded. Processing
  status lives outside the inert/busy editor; keep a stable status surface with no
  decorative spinner or invented progress. Return focus to the initiator or Export
  when a successful restore/discard removes that initiator. Reuse LoadingState and
  ProgressBar; remove replaced loading spinners and one-off coloured banners.
