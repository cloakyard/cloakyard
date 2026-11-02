# Air 1.3.3 — clear editor actions

The user requested a straightforward mobile workflow instead of CloakIMG's mixed
tick, X and Done controls. Air now specifies one labelled Cancel / Apply pair for
transactional tools, separate Expand / Split view controls, and truthful Close or
output verbs. The shared action region uses existing Air materials, wraps at
larger text and stays outside scrolling controls. The portable reference includes
real apply/cancel/invalid-draft behavior. All eight specifications are synchronized.

IMG uses one completion component on phone/tablet/desktop, removes duplicate Crop,
Resize and Perspective commits and removes swipe-to-commit. Invalid drafts and
missing masks remain open. Apply is single-flight; failed work can retry; Cancel
restores entry settings/history. PDF uses the same labelled mobile row, keeps its
real staged/deferred/multi-action semantics and labels desktop Cancel. Resume's
section dismissal now says Close: its drafts remain autosaved. Native Drop/Roll
applications and KERR remain outside this web change.

## Verified behavior and comparison

- IMG: 487 units/50 files; 780 all-tool observations in each of Chromium and WebKit,
  covering 26 tools, 11 required viewports, four enlarged-text profiles and both
  themes. Twenty real action journeys cover cancel/re-entry, invalid input,
  rapid/keyboard Apply, crop/resize, undo/redo, consent and 20 real PNG downloads.
  Another 20 math/navigation/history journeys, 192 breakpoint transitions, 12
  native-field/recovery journeys and eight compact menu/consent/batch journeys
  pass. Twelve output downloads have exact preceding-production pixel/alpha parity.
- PDF: 461 units/48 files; all 16 production smoke suites pass with documented
  demo fixtures where required. Twelve Chromium/WebKit phone journeys validate
  Cancel, repeated Apply/conflicting Cancel, Undo/Redo, Close and real PDF metadata/
  page output. Metadata failure/retry and 28 panel/calendar layouts pass.
- Resume: 373 production tests/10 files (zero skips) and the initial 324 editor
  layouts plus ten section/zoom/paper journeys pass. The final labelled Close refinement passes all 324 layouts/ten journeys again and
  16 actual Close/reopen/autosave/reload journeys in Chrome/WebKit.
- Six-app public comparison: 648 home layouts, 288 secondary layouts, 390 navigation/
  link interactions, zero deviations/errors. Phone light/dark captures for all six
  were visually compared; editor phone/tablet/laptop/enlarged states were inspected.
  Focus contours intentionally appear in captures taken after keyboard navigation.
- Actual disposable service workers: 396 PWA notice layouts and 162 exact matching
  captures across PDF, Resume and IMG. The reference passes 16 Chrome/WebKit action
  journeys. Product format/type/build, independent design/portability and dead-code
  gates pass as recorded in each product's dated audit.

The [verification record](evidence/simple-actions-2026-11-02/verification.json) and
[comparison counts](evidence/simple-actions-2026-11-02/comparison.json) accompany
selected captures. Full scratch: `/tmp/air-simple-actions-2026-11-02/`. Use existing
`test-air-family.mjs`, `test-air-notices.mjs` and product action/layout runners with
local builds, disposable profiles and external Playwright/Puppeteer modules.

## Corrections and limits

The new sweep exposed duplicate sibling keys retaining old IMG panels; action keys
now differ from scroll-body keys. A colour sampling case exposed duplicate swatches;
the panel shows each unique extracted colour once. Crop ignores Enter owned by
native fields/buttons. Obsolete handlers, icon imports, commit buttons, styles and
current mobile Done references were removed. Real IMG/PDF install/README captures
were regenerated and their manifest dimensions checked.

WebKit may rasterize a fractional-scale preview differently after the batch canvas
is recreated. Investigation confirmed identical source pixels, transform, source/
destination rectangles and smoothing settings. The compact regression now observes
those exact inputs while recording display-raster parity separately; it still asserts
retained controls and scene content. Actual downloaded output has its own exact
pixel/alpha comparison. This is not a claim of pixel-identical browser rasterization.

Earlier failed attempts are excluded: initial duplicate-key layout failures, the
old Resize probe's render race, an inset-Crop fixture assumption, a dev HMR reload,
new harness label/container assumptions and absent optional PDF fixtures. Corrected
runners complete without removing feature assertions.

Physical iPhone/software keyboard, OS IME and spoken assistive acceptance remain
open. Automated WebKit is not physical Safari acceptance. PDF's existing Compact
beta limitation retains the user's documented exception. Other native/model/output
acceptance backlog remains separately tracked.

## Rollout

Local verification and bounded commits precede the authorized individual dev → main
PRs. Exact main checks, production asset parity and live action checks are recorded
here at closeout. Drop's three unpublished native/release commits must stay local;
its web promotion uses an isolated checkout. Resume's separate worktrees are preserved.
