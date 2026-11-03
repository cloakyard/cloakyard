# Six-app layout consistency follow-up — 2026-11-03

Scope: Cloakyard, CloakPDF, CloakIMG, CloakResume, CloakDrop website and CloakRoll
website, against Air 1.5.0. Native applications and KERR are outside this pass.
The contract and all eight portable bundles remain synchronized.

**Verdict: PASS for the audited web states.** The device/assistive gates below remain open.

## Findings and corrections

- PDF's inspector Cancel button could shrink until its word broke into two lines
  at 768px. Preserve the button's intrinsic width while the adjacent description
  wraps. The responsive browser suite now asserts an unbroken, contained label at
  ordinary and 200% root-font size. The change is three CSS lines; transactions,
  history and output logic are unchanged.
- Roll used numbered feature eyebrows and said its first beta was still being
  prepared. Remove the numbered prefixes and describe the published public beta,
  retaining the real requirements, signing caveat and USB/iCloud limitations.
- Resume's Options layout harness clicked the dialog during its entrance. Wait
  for the real entrance before measuring resting geometry or starting export;
  normal-motion behavior remains covered separately.
- The shared presence matrix omitted 375, 1366 and 1920 widths. Add them and wait
  for a recorded paint-frame observation instead of assuming that the first
  protocol reply contains the animation. Entry/exit assertions still require
  actual running animations with exactly 240/160ms durations.

Before/after PDF tablet captures and representative family/editor captures are in
[the evidence directory](evidence/all-layouts-2026-11-03). No new runtime dependency,
animation framework, component variant or global visual rule is introduced.

## Coverage and results

The required sizes are 320×568, 375×812, 390×844, 430×932, 844×390, 768×1024,
1024×768, 1280×720, 1366×768, 1440×900 and 1920×1080. Public-page matrices also
cover breakpoint neighbors. Light/dark, coarse/fine pointers, enlarged text,
keyboard/focus and motion preferences are included where applicable.

| Surface                                                                 | Result                                                                                                                                             |
| ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Live family home, privacy/recovery shell, links and navigation          | 648 home + 288 secondary layouts, 390 interactions; no deviations or browser errors.                                                               |
| Live privacy reading pages                                              | 408 layouts, 22 back/home/contents/focus journeys; no deviations or browser errors. Includes forced colours and 200% root-font text.               |
| PWA notices on identical production builds with disposable real workers | 396 offline/update/updating layouts, 162 captures; PDF/Resume/IMG match, no browser errors.                                                        |
| IMG all 26 tools, both engines                                          | 780 observations per engine, including all eleven sizes and four enlarged-text profiles; no failures, browser errors or model requests.            |
| PDF all 22 tool panels, both engines                                    | 616 corrected observations per engine, all eleven sizes plus three enlarged-text profiles; no failures or browser errors.                          |
| Resume editor and Options                                               | 324 editor layouts, ten section/zoom/paper journeys; 192 ready/busy/failure Options layouts; four contrast comparisons pass, no browser errors.    |
| Six landing artworks, WebKit                                            | 132 moving layouts, 24 reduced/constrained/unsupported fallbacks, six lifecycle journeys and six delayed-stylesheet startups; no errors.           |
| Shared real-motion dialogs/disclosures                                  | 228 passing Chrome/WebKit observations with all required keys present; exact entry/exit timing, keyboard/focus and reduced-motion assertions pass. |
| Final Roll home/privacy/404 links                                       | 312 layout/state observations, 108 keyboard interactions; neutral link states and no browser errors.                                               |

The artwork suite observes actual moving composites and replay gating at every
size. Natural full-timeline completion is exercised at 390 and 1440; the remaining
profiles advance Web Animations time after observing motion to test the settled
composition and replay. This is automated WebKit, not a physical Safari claim.

Review covered the rendered header/footer, neutral resting/hovered hyperlinks,
privacy format/back links, phone menus, update notices, inspector/working-panel
actions, scroll reachability, persistent photo/document context and modal shells.
Output documents retain their own typography and colours.

## Verification provenance and limits

Initial public/privacy/editor runs used deployed pages. Several long remote runs
hit connection/font-loading timeouts; incomplete runs are not reported as whole-suite passes.
They were replaced by local production-build runs. The initial PDF/Resume/IMG
builds matched all 320 files in the preceding verified live receipts; the PDF
matrix is repeated after its small CSS correction. Roll uses the isolated final
website build. The complete reports, source revisions and representative images
are retained here; scratch captures/logs are in `/tmp/air-all-layouts-2026-11-03`.

The first PDF geometry audit missed the split word, which was found by visual
inspection. Its superseding run waits for document-property loading and checks
the action label. WebKit frame sampling initially used an overly short deadline.
The diagnostic timeout still contained recorded running 240ms animations with
reduced motion off and the page visible. Twenty isolated pointer/keyboard openings
also recorded the actual entrance. The harness now polls those real observations
using its normal bounded page timeout; it retains the exact duration, focus and
exit assertions. No application animation was disabled, shortened or replaced.
Completed observations are consolidated with the focused remaining profiles;
all 228 required engine/surface/app/size/theme keys are present, with no errors.

Enlarged-text results mean a 32px root font, not actual browser 200% zoom. Physical
iPhone/software-keyboard, OS IME and spoken-assistive acceptance remain open in
`UX_REFRESH_TODO.md`. The pre-existing approved Compact beta long-document
limitation and separate native/product/output backlog are unchanged.

PDF passes 461 unit tests, dead-code/format/lint/type checks, production build,
Air/portability gates, responsive motion and 88 collection/edit/output checks.
Resume passes all 373 tests with no skips, format/lint/types and dead-code checks.
Roll passes website verification, worker dry-run and portability. The canonical
bundle check verifies all eight targets; nine file-workflow reference tests pass.

## Rollout

Each changed repository uses the authorized dev → main PR flow. Roll's website
piece is isolated from concurrent native work in the original checkout. Drop's
previously unpublished local history and Resume's other worktrees are untouched.
Product promotions are merged and production-verified:

| Repository        | PR                                                      | Main commit | Live files                                                       |
| ----------------- | ------------------------------------------------------- | ----------- | ---------------------------------------------------------------- |
| CloakPDF          | [#228](https://github.com/cloakyard/cloakpdf/pull/228)  | `9b08d12`   | 130 exact                                                        |
| CloakResume       | [#56](https://github.com/cloakyard/cloakresume/pull/56) | `d99191c`   | 101 exact; runtime unchanged                                     |
| CloakRoll website | [#12](https://github.com/cloakyard/cloakroll/pull/12)   | `4bd7ace`   | Eight exact, three existing Cloudflare HTML injection exceptions |

Exact-main checks pass for all three; their remote dev/main branches are
synchronized. Eight live PDF tablet/desktop cancellation journeys pass in both
themes and at ordinary/enlarged text, including restoring the original metadata.
The unchanged Yard, IMG and Drop builds also match all 12, 89 and 16 live files.
The consolidated receipt verifies 356 raw asset matches plus Roll's three HTML
files, each identical after removing exactly one existing challenge-platform
script. Initial reads while Cloudflare was building still served the preceding
PDF/Roll release; they are superseded by the passing final comparisons.

The canonical Cloakyard dev → main PR carries this audit and test-only change.
Its description records its own exact-main/deployment checks. Do not advance
Drop's unpublished local work or Roll's concurrently edited native dev history;
remote web promotion is complete without including those commits.
