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
- Resume: 373 final production tests/10 files (zero skips) and 324 editor
  layouts plus ten section/zoom/paper journeys pass. The labelled Close refinement also passes
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
runners complete without removing feature assertions. Resume contact removal now
re-resolves its button after a responsive remount; its final full 373-test run passes.

Physical iPhone/software keyboard, OS IME and spoken assistive acceptance remain
open. Automated WebKit is not physical Safari acceptance. PDF's existing Compact
beta limitation retains the user's documented exception. Other native/model/output
acceptance backlog remains separately tracked.

## PDF security correction during promotion

Required PR checks found newly published dependency advisories plus a predictable
temporary directory in the new runner. The runner now uses `mkdtemp`; PDF adopts
node-forge 1.4.2, glob 14.0.3, minimatch 11.0.4 and the compatible filelist 2.0.2.
The former node-forge exception is removed. OSV reports no issues without ignored
advisories; CodeQL passes. The upgraded graph passes 461 units, all six standalone
workflows (including independently verified generated/imported signatures), twelve
phone/output journeys and 44 real-worker update layouts with two-tab work/export
preservation. See PDF's audit for versions, advisory links and detailed evidence.

## Rollout

Each product uses its own dev → main PR, with passing checks before merge.

| Product      | PR                                                     | Exact main revision                        | Production verification                                                                                             |
| ------------ | ------------------------------------------------------ | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| IMG          | [26](https://github.com/cloakyard/cloakimg/pull/26)    | `e0c5f6ccd0c5ca772ed421cda32beaba247f4772` | 89 raw asset matches; 192 retained-edit transitions, eight compact journeys and twelve exact PNG output comparisons |
| PDF          | [220](https://github.com/cloakyard/cloakpdf/pull/220)  | `753e554046e7101a63cf7dd9b41c26fb9cda7fdc` | 130 raw asset matches; twelve phone action/output journeys                                                          |
| Resume       | [53](https://github.com/cloakyard/cloakresume/pull/53) | `c23780e443d69c847841431896114365ddb5e1d0` | 101 raw asset matches; sixteen Close/reopen/autosave/reload journeys                                                |
| Drop website | [55](https://github.com/cloakyard/cloakdrop/pull/55)   | `aa167a96fac21b96bd1dfabace0e9ffbe25f7dcf` | Sixteen raw asset matches                                                                                           |
| Roll website | [9](https://github.com/cloakyard/cloakroll/pull/9)     | `bd73be2b0cb242cef7533509ff96d75255e0787c` | Eight raw asset matches plus three existing HTML edge-injection exceptions                                          |

Roll's three HTML files differ only by one injected Cloudflare challenge-platform
script before the closing body; removal of that exact injection leaves identical
bytes. This is recorded separately from raw parity.

The canonical contract and this closeout are in Yard
[42](https://github.com/cloakyard/cloakyard/pull/42); that PR's description records
its final main checks and production verification. Product exact-main check reports,
asset hashes and live journeys are retained in the evidence directory.

Remote dev branches are kept synchronized with main. Drop's original local dev
retains its three unpublished native/release commits; only the isolated web branch
was pushed, then merged back locally. The isolated checkout is removed. Resume's
separate main audit and detached stats worktrees are untouched. Task preview ports
8460–8468 are stopped. Physical/device/assistive and separate product/output
acceptance remain open; this action pass does not close those gates.
