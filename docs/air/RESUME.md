# Air refresh — current handoff

## Start here in a new conversation — saved 2026-10-19

This section is the current entry point. The dated checkpoints below preserve the
implementation history and evidence. Older “Next” suggestions are historical;
resolve them against the latest checkpoint and source before repeating work.
`UX_REFRESH_TODO.md` remains the exhaustive scope, including acceptance still open.
Current priority: release Cloakyard and CloakPDF, then address CloakDrop's page
before resuming CloakResume. Cloakyard [PR #9](https://github.com/cloakyard/cloakyard/pull/9)
is merged at `4f91993`; [v1.0.0](https://github.com/cloakyard/cloakyard/releases/tag/v1.0.0)
is live and verified. PDF [PR #201](https://github.com/cloakyard/cloakpdf/pull/201)
merged as `41273ae`; candidate asset hashes match production. Final live acceptance
exposed Cloudflare-injected analytics/challenge scripts blocked by CSP. Header-only
follow-up [PR #202](https://github.com/cloakyard/cloakpdf/pull/202), dev `21f37de`,
requests `no-transform` while preserving cache lifetimes and the CSP. Actual Wrangler
headers, six PDF output workflows, 461 units and real 44-layout PWA checks pass.
Await #202 CI, merge, verify production again and publish v2.0.0. Horizon `62161d9`
passes 68 layouts, real GPU lifecycle/fallbacks and all 16 smoke suites. CloakDrop's
page follows, then Resume logo/photo controls. Full release proof is in
`docs/air/evidence/releases-2026-10-19/`.

Latest completed product implementation: Resume dates/current-job (`648842d`), after contact/native
selects (`9d4e7f9`), repeated
entries (`bcbf8ff`), writing fields
(`4ba267c`), editor shell (`30696b5`) and entry/recovery
(`eda6df6`), Drop website/OG (`e5f2bac`) and PDF software acceptance (`b9d67a9`).
Human/device gates remain open. Order: **PDF → Drop → Resume → CloakIMG last**.
Resume's next editor piece is logo search/profile photo, after the release/landing
follow-ups above. IMG stays parked.

### Objective and settled decisions

Refresh the complete Cloakyard web family with **Air**, preserving features and
output fidelity. The user approved the refined design and authorized implementation
and local commits. Do not reopen the design-lock question. Priorities are consistency,
quality, minimalism, a distinctive modern appearance and purposeful playful motion.
Every custom control, editor, canvas surround, overlay and edge state belongs to the
same family; landing-only or token-only work is not a completed migration.

- Canonical source is this repo's `design/air/`; current Air **1.0.2**, contract
  **bb90f52e0b0a**. Read root/product AGENTS.md, CLAUDE.md and DESIGN.md before changes.
  Product appendices live in `design/air/products/`. Regenerate with
  `node scripts/sync-air-design.mjs --bundle`, then verify `--bundle --check`.
  Standalone products must work without a sibling checkout or upstream runtime fetch.
- Preserve light/dark, desktop/laptop/tablet/phone, landscape and short screens,
  enlarged text, keyboard/focus, coarse input, reduced motion and forced colours.
  Inputs have one graceful focus contour; custom menus include their popup items.
- PDF uses compact one-row editor chrome, no duplicate page count, compact filename
  disclosure on small screens, and the family logo size. Do not undo those explicit
  user refinements. Use actual product logos on the family homepage.
- The user prefers a **colour wheel**. PDF and the canonical reference use the Air
  hue/saturation wheel, brightness and exact hex. IMG and Resume adoption remains open.
- Shaders are implemented in the landing artwork with visible finite motion and
  static/reduced-motion fallbacks. No decorative shader inside an editor. Real-device
  GPU/battery/thermal acceptance is still open; do not claim it from emulation.
- KERR's app and native macOS interfaces stay unchanged. The family home shows KERR
  as an exploration link with no screenshot. Preserve document/template fonts,
  colours, geometry, image pixels/alpha and all actual exported output.
- Keep the code lean: trace consumers, remove superseded skins, flags, helpers,
  assets and references, and retain live seams. No speculative abstraction or extra
  dependency merely for this refresh. Audit dead/dangling code in every piece.
- Work in bounded pieces: implement → inspect rendered states → feature/output
  tests → required checks → evidence/TODO → local commit. Never commit failed gates.
  The user subsequently authorized dev integration, main PRs and release for
  Cloakyard and CloakPDF. Update CloakDrop’s page next; keep Drop, Resume and IMG
  commits local until separately authorized for release. No subagent delegation was requested.

### Repository state at handoff

Root uses `codex/air-refresh`, fast-forwarded through released main `4f91993`.
PDF is on `dev` for PR #201; Drop/Resume/IMG remain on `codex/air-refresh`.
The reference security patch updates only generated gallery/bundle files in those
three siblings. IMG also has the parked runtime draft below. Recheck
before editing; preserve any new user changes. Paths are siblings under
`/Users/sumitsahoo/Developer/`:

| Repository  | Last implementation/checkpoint commit | Current scope                                                                                                    |
| ----------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| cloakyard   | `4f91993`                             | Air source, implemented home, family TODO and this handoff; a documentation-only handoff commit follows          |
| cloakpdf    | `cab22ba`                             | Software acceptance complete; human/device and additional inference combinations remain open                     |
| cloakimg    | `aa9f6f8`                             | Parked uncommitted landing/import draft; full product migration and wheel adoption pending                       |
| cloakresume | `648842d`                             | Entry/recovery/shell/fields/entries/contact/select/dates implemented; logo/photo/wheel/review/PWA/assets pending |
| cloakdrop   | `e5f2bac`                             | Complete website/OG software migration; physical/assistive gates open, native app excluded                       |

The preceding PDF foundation commit is `7bed615`; wrappers/history is `b9738c0`.
Fill form, Auto-fill, Select text, N-up, modals and the other editor interiors already
have dated implementation/evidence below. Do not restart those from stale early lists.
The inventory now covers 95 PDF surfaces including static/artwork/root HTML. The
91 prior sources remain implemented; the new OG/metadata entries are validated as
static artifacts. Root `404.html` now replaces the retired public entry and is implemented.
Interactive final `validated` flags remain false pending device/assistive acceptance.

### Exact next bounded piece: CloakResume logo search and profile photo

1. Read Resume AGENTS/CLAUDE/DESIGN, `docs/air/editor-audit.md` and the inventory.
   Entry/privacy/recovery/shell, shared fields/entries, contact/select and dates are implemented.
2. Migrate shared LogoPicker and both Profile/Skills consumers, plus profile photo
   controls. Preserve stable icon names/artwork, query/result cap, selected/clear/
   no-results, unknown imported values, JPG/PNG/2MB decode validation, request
   cancellation and exact photo bytes. Replace unconditional search autofocus with
   an intentional touch/keyboard focus policy; cover inert closing, clear focus,
   short viewports, enlarged text and coarse targets. The date popup is a working
   reference, not authority to duplicate or invent controls. Read-only notes:
   `/tmp/cloakresume-air-dates/next-logo-notes.md`; no next-slice code yet.
3. Continue all remaining section interiors, wheel, hint popups, template/
   library, four review tabs, overflow/export busy/recovery, PWA safety and true
   static404. Actual Resume OG/PWA/README captures remain legacy; regenerate after
   the editor is complete. Ready Offline is still oversized at enlarged text.
4. Run `vp check`, `vp run build`, and the complete serial suite with
   `CLOAKRESUME_BROWSER_BUILD=production vp test run --no-file-parallelism`.
   Do not edit runtime/build files while the production suite is running. No missing
   browser/template skips, weakened feature assertions or inflated timeout budgets.
5. IMG remains last. Physical touch/keyboard/IME, assistive speech and shader
   hardware gates stay open. Its parked last background fix is not validated.

Completed Resume dates/current-job (`648842d`): Air trigger/clear actions, popup,
month/year grid and checkbox row; reflowed date and role/company pairs. Keep raw
imported dates, month/year/year-only/empty/Present and previous-end restoration.
Year choice and clear return to surviving focus; Escape closes years before popup,
Tab leaves the non-modal surface, and closing content is inert. Imported years
outside the usual range stay available. Short screens use more viewport space.

**300/300 in eight files, 381.21s, zero skips**; 120 editor and 34 template/paper
cases (17 × two papers × five fixtures). 256 layouts, 20 selection/clear journeys,
52 contrast pairs, emulated touch cancellation, forced/reduced states, Safari and
Firefox actual 200% pass. Check/build/78-source design/18 portability/exact sync
pass. Six PNGs and compact proof/log in Resume
`docs/air/evidence/date-controls-2026-10-19.json`; full local records and next prep
in `/tmp/cloakresume-air-dates/`. Native review tabs closed and Firefox zoom reset.
Latest preview 8154; earlier task ports 8145–8153 also remain. Local commits only.

Pixel review exposed legacy 6px corners and 4px focus extent overriding the new
popup; legacy selectors now exclude Air popovers, retaining other live consumers.
The final grid reflows into two columns at 320px/32px text, and short viewports
scroll the surface. A forced-colour probe now waits for actual popup focus before
Tab. No feature assertions removed, timeout budgets raised or output sources changed.
Safari's existing preference skips buttons with ordinary Tab; Option-Tab/Space
verified full-control navigation without changing browser preferences.

Completed Resume contact/native selects (`9d4e7f9`): labelled Air kind/value fields,
all nine kinds and original validation/autofill/type semantics; shared native select
with custom imported proficiency and responsive field pairs. Removed the nested
contact skin, tiny uppercase labels and duplicate arrow. Native menus keep their
browser/OS appearance when customizable selects are unsupported. No output change.

**298/298 in eight files, 374.85s, zero skips**; 118 editor and 34 template/paper
cases (17 × two papers × five fixtures). 128 layouts, 20 keyboard/popup journeys,
28 contrast pairs, forced colours, Safari and Firefox actual 200% pass. Check/build/
78-source design/18 portability/exact sync pass. Six PNGs and compact proof/log in
Resume `docs/air/evidence/contact-selects-2026-10-19.json`; full local records in
`/tmp/cloakresume-air-selects/`. Native review tabs closed and Firefox zoom reset.
Latest preview 8153; earlier task ports 8145–8152 also remain. Local commits only.

The first focused run caught test timing before committed focus styles and a
helper that expects Profile first; both were corrected without weakening assertions.
Native single-line inputs legitimately scroll long text; their bounding boxes must
remain contained. Pixel inspection caught a two-line select arrow caused by the
writing-field display rule; final selects use only canonical `air-field` styling.
The final 128-layout matrix and full suite were rerun after that correction.

Completed Resume repeated entries (`bcbf8ff`): open headings, Air Add/empty and
44px contextual move/remove actions; one removal owner and three consolidated
nested bullet editors. Stable UI-only keys preserve duplicate strings, selection
and formatting. Saved schema/output is unchanged. Guarded `aria-disabled` boundaries
retain focus; Safari pointer activation explicitly focuses its action. Escape,
survivor/Add recovery, nested internal drag and native external text drops pass.

Off-screen announcements initially escaped their scrolling list and created a
blank enlarged-phone pane. Positioning the list contains them; a focused regression
and the final matrix verify the parent cannot scroll. Confirm is visible at its
action. Screenshot centering previously moved the root by 32px; captures now scroll
only the writing pane. Old sub-card CSS, compact/stack flags, duplicate removal
state and nested bullet markup are removed. No dependency/template/PDF/font change.

**297/297 in eight files, 361.26s, zero skips**; 117 editor cases and 34
complete template/paper cases (17 × two papers × five fixtures). 640 populated/
confirmation and 240 empty layouts, 37 contrast pairs, forced colours/reduced motion,
Safari and Firefox actual 200% pass. Check/build/78-source design/18 portability/
exact sync pass. Six PNGs and compact evidence/log: Resume
`docs/air/evidence/repeated-entries-2026-10-19.json`; full local proof and pre-fix
diagnostics `/tmp/cloakresume-air-entries/`. Native tabs closed; Firefox zoom reset.
Latest native preview 8151; earlier task preview ports 8145–8150 also remain.
Individual section widgets are still partial. Local commits only; no push/deploy.

Completed Resume writing fields (`4ba267c`): Air text/CSV/textarea, labels/help,
validation and scoped formatting. Removed invisible hint rows, compact APIs and
retired CSS. Handler cleanup prevents stale formatting from resurrecting a removed
bullet. No template/PDF/font/schema/data/dependency source change. `SelectField`,
contact and custom widgets and hint popup interiors remain partial. Repeated-entry
chrome has since been completed in the checkpoint above.

384 layouts across six consumers × 16 sizes × themes × 16/32px text; 32 contrast pairs;
invalid/selected/forced colours; native Safari pointer and Firefox actual 200%
keyboard formatting pass. All **290/290 in eight files**, no skips, including 110
editor and 34 template/paper cases. First complete run had four obsolete focus-
baseline failures; tests now explicitly assert Air's field contour and retain the
legacy contact clipping/validation gate. Focus measurements wait for committed
render; new tablet tests assert coarse capability. No assertions/timeouts weakened.
Durable proof: Resume `docs/air/evidence/writing-fields-2026-10-19.json`, checks log
and five PNGs; larger captures/diagnostics `/tmp/cloakresume-air-fields/`. Current
native preview is 8148; review tabs closed, Firefox zoom restored. Local commits only.

Completed Resume shell (`30696b5`): Air header/rail/section frame/picker, 360/420px
writing panel, paper/view segments, and dock outside document scrolling. The original
mark is 32px within a 44px link. Short compact landscape uses side-by-side panes;
portrait preserves equal panes and expanded preview. Rotation blocker/keyframes,
old shell skins and unused geometry tokens are removed. No template/PDF/font/data
source change or dependency. Three rich-format/bullet rows now wrap after the full
suite caught a genuine 320px containment regression; original assertions are intact.

324 layout observations, ten full 13-section/zoom/paper journeys, 60 contrast pairs,
emulated pinch, forced colours, native Firefox actual 200% keyboard and Safari
section/paper/privacy return pass. Full **287/287 in eight files**, zero skips,
including unchanged 107 editor and 34 template/paper cases (17 × two papers × five
fixtures). Two obsolete static geometry checks were consolidated into one Air check;
feature tests were not removed. Evidence: Resume `docs/air/evidence/editor-shell-2026-10-19.json`
and log/five PNGs; larger captures and pre-fix failure log `/tmp/cloakresume-air-shell/`.

The legacy Ready Offline notice is oversized at 32px root text. It remains a pending
PWA defect, explicitly excluded from shell geometry certification. Preview ports
8145/8146/8147 serve the task's production build; 8147 was the latest native review.
Native tabs are closed and Firefox zoom restored. No browser data was cleared.

Completed Resume entry (`eda6df6`): 341 layout cases (home/menu/privacy/confirmation/
real render error), 14 journeys, 124 contrast pairs, native Safari and Firefox actual
200% zoom. Blank/sample/import/restore, malformed/pending/duplicate file handling,
replacement cancel/confirm, background inertness, privacy swipe/cancel and denied
clipboard recovery pass. Full 288 production tests pass, including 107 editor cases
and 17 templates × two paper sizes × five fixtures. No output/template/font source
change; no dependency added. Five sources are Air-implemented, not fully physically
validated. Durable record: Resume `docs/air/evidence/entry-recovery-2026-10-19.json`
and checks log; full captures in `/tmp/cloakresume-air-entry/`.

The test harness fixes are substantive synchronization fixes: responsive remounts
returned detached-node focus styles, and font-driven auto-grow changed field height
after the original scroll baseline. Wait for those committed states, retain all
assertions/timeouts. The screenshot harness also reopens dialogs after capability
emulation reloads and explicitly requires each measured modal. Native Safari
pointer-openers now focus explicitly so Escape returns to their real button.

Resume preview ports: 8145 (automation), 8146 (latest native-browser review).
The optional shader uses the shared finite runtime, is excluded from precache and
retains SVG fallback. Local idle/reduced/offscreen/unmount checks pass; physical
GPU/battery/thermal acceptance remains open. Editor/PWA legacy styling is deliberately
still visible beyond the completed entry boundary; this is not a whole-product claim.

Completed Drop website (`e5f2bac`): all home/policy/404/header/footer/install/download
surfaces use Air; native in-flow menu and policy contents preserve keyboard/no-JS
navigation. Native Firefox anchor continuation was reproduced and fixed, then
verified in Firefox at 200% and Safari. 432 layouts, 34 journeys, 374 contrast pairs,
18 policy active links, sync/Astro/build/design/18 portability pass. OG is a new
1200×630 Air composition with the unchanged actual Mac screenshot. Old fonts,
palette, stats/Kicker/unused icons, overlay menu and scroll/reveal code are removed.
Policy, logos, native screenshot bytes and Swift source are unchanged. Durable
proof: Drop `docs/air/evidence/website-air-2026-10-19.json`, log and four PNGs; full
captures `/tmp/cloakdrop-air/`. Physical touch/spoken assistive and native install/
runtime checks are not claimed. Preview is `http://127.0.0.1:8144/`; avoid reused
8134, where native Firefox has an earlier PDF service worker. Do not clear user data.

Completed PDF AI checkpoint (`b9d67a9`): Compact/Quality × sample/multipage all
pass initial/warm loads, grounded facts, keyboard tier swap/cancel, a generated
summary and memory release/reload. 256 picker layouts, 192 synthetic modal layouts,
459 units, code/dead/build/131 assets/design/18 portability pass. Exact host:
M2 Max/32 GiB/macOS 27.0.1/Chrome 155, available Apple Metal 3 WebGPU. This is not
fresh-download, mobile inference or other-engine/hardware certification. Imperfect
generated phrasing and one interrupted run are recorded without overstating quality.
Evidence: PDF `docs/air/evidence/ai-acceptance-2026-10-19.json` and checks log.

Parked IMG draft (HEAD `aa9f6f8`): landing Header/Footer/Features/Landing, DropZone
and tests, new `src/styles/air-entry.css`, `scripts/test-air-entry.mjs`, index/no-JS,
landing orientation allowance, old landing CSS removal and DropZone prop consumers.
It has 475 passing units, build and 203 browser observations from before a final
background-height fix. That fix and its new assertion are **not revalidated**.
Privacy/editor/OG and broader tool/HEIC/output/native checks remain unfinished. Do
not label or commit this as a passed slice. Local evidence `/tmp/cloakimg-air-entry/`;
logs `/tmp/cloakimg-air-{check-edit,unit,build,entry}.log`. Reproduce the saved Adjust
Cancel/re-entry finding before touching editor commit controls when IMG resumes.

Completed PWA safety (`c3d3264`): reproduced pending metadata lost on Update now;
updates now defer throughout editor/standalone views, explain save/download/home,
retain Later and return-home availability, and guard other-tab activation plus
route-handoff races. Real waiting workers, output download and 44 responsive/theme/
text cases pass. All sixteen production smoke suites and 459 units pass; build/
code/dead/design/portability are green. Evidence: PDF
`docs/air/evidence/pwa-update-2026-10-19.json`. No new stylesheet/dependency.

Completed static recovery (`82762c4`): build-owned shared Air CSS, real host 404
before/after install, no-JS keyboard/home recovery and valid offline root/index
navigation. All 66 layout/theme/text cases, 458 units, sixteen production smoke
and seven extended suites pass. Safari light/home and Firefox actual 200%/home
reviewed. Evidence: PDF `docs/air/evidence/recovery-page-2026-10-19.json`.

Completed preview piece (`02552f1`): four actual Annotate captures with synthetic
Studio notes content, theme-aware README, Air manifest colours, truthful dimensions/
labels, composed 1200×630 OG card and matching metadata. Do not regenerate unchanged
logos. Reproduction instructions: PDF `docs/og-image.md`; evidence:
`docs/air/evidence/previews-2026-10-19.json` and matching log/PNGs. Required checks,
458 units/47 files, six standalone output workflows, routing/search and 176 tool
selections + 176 navigation layouts pass. Built manifest/nine PNG responses and
Chromium installability pass. No native/physical-install acceptance claimed.

### What follows, in order

1. **CloakResume:** full landing/editor/sections/templates/ATS/format/export migration;
   align its existing wheel, correct tablet targets/contact typography, preserve all
   17 templates, pagination, printable fonts/colours and exports.
2. **CloakIMG last:** resume and fully validate the parked entry draft, then complete
   editor/canvas/layers/history/tool/AI/export migration. Adopt the wheel while preserving
   RGB, recents, eyedropper, preview/apply/cancel, undo, pixels/alpha and output formats.
3. **Family closure:** matched widths/themes, remaining legacy/dependency/reference
   searches, portable adoption/drift, feature/output regression, budgets/privacy/shader
   fallbacks, evidence and final commit ledger. Complete remaining PDF/Drop/device gates.

Remaining human/device acceptance includes physical touch/software keyboards,
actual OS IME, spoken assistive technology, final-size QR scanning and physical
shader GPU/battery/thermal checks. Keep them explicit; emulation is not a pass.
Existing OCR limitations are separately tracked: wider Unicode font embedding and
scanned regions mixed with existing native text. Unsupported output fails explicitly;
do not silently omit words or treat these as already implemented redesign work.

### Verification and durable evidence

Latest PDF AI slice: **459 unit tests / 47 files**, four real-model combinations,
256 picker and 192 synthetic modal observations;
all required code/dead/build/asset/design/portability/root/sync gates pass.
Previous registry baseline: **456 unit tests / 47 files**, **25 distinct browser suites** (16
production smoke, seven extended, focused recovery/N-up), 176 tool selections
(22 × four device classes × light/dark), 176 navigation layouts, 141 recovery
captures, 70 N-up layouts and 23 real output sheets. All required code/dead/build/
asset/design/18 portability and exact six-document sync gates passed.

The registry/lifecycle fix prevents queued work from starting after editor exit,
discards late transform output and retires previews already generating. It does not
interrupt computation already running. Seven standalone components remain lazy;
unknown/inherited ids are rejected and live stage/provider seams remain intact.
Editor bundle **327.18 / 98.80 kB raw/gzip**, CSS **132.38 / 22.81 kB**;
126 assets / 75 PWA entries. Latest build hashes match the browser-tested build.

- PDF durable evidence: `docs/air/evidence/registry-lifecycle-2026-10-19.json`,
  `registry-lifecycle-checks-2026-10-19.log`, `registry-desktop-2026-10-19.png` and
  `registry-phone-dark-2026-10-19.png`; summary in `docs/air/validation.md`.
- Root: `docs/air/validation.md`, `UX_REFRESH_TODO.md`,
  `docs/air/IMPLEMENTATION_PLAN.md`, `design/air/COMPONENTS.md`, and per-app
  `docs/air/surfaces.json` / `surface-inventory.md`. Preserve earlier evidence.
- Large temporary fixtures/captures/logs: `/tmp/cloakpdf-air-review/registry-*`.
  These may disappear; committed evidence is the durable source.
- The latest IAB review covered Stamp overlay cleanup, Metadata Save/Undo and
  retained Page 2. Native Safari/Firefox review belongs to the preceding foundation
  slice, not a new run for the registry slice. Harness failures/interrupted attempts
  and the final passing serial runs are recorded honestly in the evidence.

PDF required commands: `pnpm exec vp check`, `pnpm check:dead`, `pnpm test:unit`,
`pnpm build`, `pnpm design:check`, `pnpm design:portability`, plus applicable browser
and real-output suites. Full regression commands are `pnpm test:e2e:smoke` and
`pnpm test:e2e:extended`; focused tests live in `tests/e2e/`. Run heavy suites
serially. Production smoke used `E2E_URL=http://127.0.0.1:8132`; source-importing
harnesses used a fresh dev server on 8133. Use synthetic fixtures and isolated browser
profiles; do not clear the user's real app storage. Inspect package scripts first.

Root checks: `pnpm exec vp check`, `pnpm exec tsc --noEmit`, `pnpm build`,
`pnpm design:check`, `pnpm design:portability`, and
`node scripts/sync-air-design.mjs --bundle --check`. Read each sibling's commands
before working there. Re-run affected checks after actual changes; do not repeat
already-passing broad suites merely to fill time. Evidence logs are ignored by git;
force-add only the exact intentional log file when committing.

### Session state and resuming

Last known servers: Air reference8120, family home8131, PDF dev8122 and production8132.
Test-only PDF dev8133 was stopped. Recheck availability; tool session IDs and browser
bindings are not portable to another conversation. Preserve existing browser tabs
and user work. Last IAB tab2 showed a synthetic three-page PDF in Metadata on8132;
tab1 was an older form review. These ids are historical hints, not future selectors.

The original conversation `01a12abe-1cfd-7980-bf8e-f585aee286a5` owns the full-family
goal. Its stored status is `blocked` from an older checkpoint; the exposed API cannot
resume it. The user repeatedly authorized continuation, and implementation is not
currently blocked on a new design approval. Use the saved objective and files to
continue; never mark the entire family complete because one slice is finished.
This handoff does not create a new chat or schedule any automatic work.

Suggested prompt for the new conversation:

> Continue the Cloakyard Air refresh from `/Users/sumitsahoo/Developer/cloakyard/docs/air/RESUME.md`.
> Read its “Start here in a new conversation” section first, then AGENTS.md, CLAUDE.md,
> DESIGN.md and UX_REFRESH_TODO.md. The design is approved; implementation and local
> commits are authorized. Start with CloakPDF's static 404 and
> closure reconciliation, then follow the saved rollout order. Keep the code lean, remove
> obsolete references, preserve features/output, validate responsive light/dark
> states and applicable tests, and commit each passing bounded piece. Do not push
> or deploy. Keep the TODO, evidence and handoff current.

---

## Latest checkpoint — 2026-10-19 (tool registries/session lifecycle)

PDF **`00bdee0`** completes the bounded dispatch/lifecycle audit. Both rosters
derive route identities and require complete implementation maps; inherited/unknown
ids are rejected. Removed standaloneOnly flags/filter, redundant lazy aliases and
obsolete contributor references. All seven standalone components stay lazy. The
navigation event accepts only the standalone routes it handles; editor search and
constructor handoff remain intact. Live stage/provider/entry seams remain.

Reproduced abandoned queued work running after unmount. The existing session revision
now guards queued work, status and transform output; late preview URLs are retired.
Already-running computation may finish, but its result cannot install after departure.
No dependencies added. Editor 327.18/98.80 kB raw/gzip (-0.53 gzip); CSS 132.38/22.81
unchanged. 126 assets/75 PWA entries. Air remains 1.0.2 / bb90f52e0b0a; only PDF's
product appendix and portable DESIGN changed, with no shared bundle change.

456 units/47 files; 176 tool selections (22 tools × desktop/laptop/tablet/phone ×
light/dark), 176 navigation layouts, 141 recovery captures, 70 N-up layouts/23 real
output sheets pass. Complete 16 production smoke + seven extended + recovery/N-up
= 25 distinct browser suites. Baseline queued-task bug reproduced; harness context/
responsive heading errors fixed, route exit waits for layout, interrupted concurrent
recovery replaced by a passing fresh serial run. No weakened output assertions.
Required PDF code/dead/build/assets/design/18 portability and root code/types/build/
design/portability/six-document sync pass. All 91 inventory sources are now reviewed/
implemented; final validation remains false pending device/assistive acceptance.

Inspected responsive/theme screenshots. Production IAB confirms Stamp overlay cleanup,
Metadata Save/Undo and retained Page 2. Safari/Firefox were covered by the preceding
foundation piece, not rerun here. Physical touch/software keyboard, actual OS IME
and spoken assistive acceptance remain open. Full PDF/family migration is unfinished.

**Next bounded piece:** replace legacy `public/screenshots/iPhone.png` and `iPad.png`,
which still show Workbench. Both feed the PWA install preview; iPad also appears in
README. Audit manifest colours, dimensions, labels and old design references. Use
real Air app captures; keep existing output fonts and native/KERR unchanged. Then
finish full-PDF acceptance and IMG/Resume wheel adoption/family rollout.

Evidence: PDF `docs/air/evidence/registry-lifecycle-2026-10-19.json`, desktop/phone
PNGs and `registry-lifecycle-checks-2026-10-19.log`; full logs/captures under
`/tmp/cloakpdf-air-review/registry-*`. Existing PDF dev8122/production8132 remain;
test-only dev8133 stopped. IAB tab2 is on production Metadata with the synthetic
three-page PDF; tab1 is the older form review. Stored family goal remains blocked
from the old checkpoint and the API cannot resume it; human continuation authorizes
work. Do not duplicate or complete the full-family goal. Local commits only.

## Previous checkpoint — 2026-10-19 (PDF foundation and Select)

PDF **`7bed615`** completes the bounded legacy foundation cleanup. The root,
editor shell, processing scrim and modal stack now consume Air directly. Deleted
tokens.css, retired Workbench/Ocean Blue aliases and unused label/selection/pulse/
scrollbar/motion rules. Select opens immediately for pointer and keyboard, retains
complete wrapping labels and a readable viewport-bounded popup. Removed animation
and placement-only state; no dependency added. Frequent select feedback follows
the existing Air rule; landing shader/artwork motion is unchanged.

Removed two unused UI fonts (75,332 bytes). All 42 document TTF faces for eleven
embedded families are unchanged and exactly match CSS/registry variants; real
annotation export still embeds Roboto. fonts.css is an output-preservation surface.
Air remains 1.0.2 / bb90f52e0b0a. Only PDF's product appendix/standalone DESIGN
changed; canonical shared assets and other product repositories are unchanged.

453 units/46 files, 70 N-up layouts/23 real output sheets, 141 recovery captures,
complete 16 production smoke and seven extended suites pass (25 distinct browser
suites). No failed/retried validation run for this piece. Desktop/laptop/tablet/
phone light/dark, enlarged text, forced colours/reduced motion reviewed. Safari
production select/Escape/Apply/Undo and Firefox actual 200% selection/lower action
access pass. Native review tabs closed and Firefox zoom restored. Physical touch/
software keyboards, actual OS IME and spoken assistive acceptance remain open.

Required PDF code/dead/build/assets/design/18 portability and root code/types/
build/design/portability/six-document sync pass. Final rebuild preserves the exact
tested editor/CSS hashes. Editor 326.91/99.33 kB raw/gzip, CSS 132.38/22.81;
126 assets/75 PWA entries. PDF inventory retains 91 surfaces and earlier evidence;
registry.tsx is the only remaining source marked not Air-implemented, as a
non-visible dispatch map whose consumers still need the final audit.

**Next bounded piece:** audit src/editor/registry.tsx with editor/tools.ts,
config/tool-registry.ts and live stage/lifecycle consumers. Confirm every tool is
reachable, dispatch/cleanup ownership is valid and no obsolete registrations or
dangling references remain. Do not restyle output fonts or delete live seams just
to reduce file count. Continue remaining full-PDF feature/device acceptance, then
IMG/Resume colour wheel adoption and family rollout. Full migration is unfinished.

Evidence: PDF `docs/air/evidence/foundation-2026-10-19.json`, desktop/phone PNGs and
`foundation-checks-2026-10-19.log`; full logs, fixtures, native proofs and captures
in `/tmp/cloakpdf-air-review/foundation-*`. PDF dev8122 and production8132 remain;
fresh test-only dev8133 is stopped. IAB tab2 shows the current production N-up
dropdown with the synthetic study; tab1 is the older form review. Stored family
goal remains blocked from the earlier checkpoint; API cannot resume it. Human
continuation authorizes work; do not duplicate or complete the full-family goal.
Local commits only, no push/deployment.

## Previous checkpoint — 2026-10-19 (editor wrappers/history)

PDF **`b9738c0`** commits the bounded provider/entry/stage/overview audit. Undo/Redo/
Reset retain focus at history boundaries; pointer/keyboard activation is guarded
and provider history calls reject synchronously while busy. Responsive panel mounts
retain surviving toolbar focus. N-up composes PrimaryAction directly and supplies
a settings focus fallback for Safari. Canonical Air aria-disabled icon styling now
keeps hover/press inert and the keyboard focus contour at full strength; all five
standalone bundles are synchronized. Air stays 1.0.2 / bb90f52e0b0a.

Removed unused provider commit/jumpTo, history base/size/jumpTo/labels and
WholeDocPanel/danger. Live dispatch/provider/stage seams remain. No dependencies.
PDF editor 327.04/99.39 kB raw/gzip, CSS 138.43/24.05; 128 assets/77 PWA entries.
The PDF appendix/standalone DESIGN and 91-surface inventory reflect the changes.

453 units/46 files, 176 navigation states and 70 N-up layouts/23 real output sheets
pass. Select text's provider harness covers same-frame/already-busy history guards.
The full 16-suite production smoke and seven extended suites pass (25 distinct
suites including N-up and Select text). Shared bundle commits: IMG `aa9f6f8`,
Drop `0a3a5b5`, Resume `286f57b`. IMG's 470 tests, Drop's Astro/asset checks and
Resume's full serial production suite (288 tests/eight files, 361.10s) pass, along
with each product's build/design/18 portability gates. Resume's initial dev run
reached 287/288; its unchanged timeout case passed alone before the complete
production pass. Native Safari apply/history and Firefox actual 200% review pass;
the final IAB proof on dev8122
shows the full-strength disabled Undo focus ring. Physical touch/software keyboard,
actual OS IME and spoken assistive acceptance remain open.

Validation caught responsive focus stealing, Safari pointer focus and the dimmed
focus contour. The AI modal test now records real native animation creation before
clicking, avoiding a late snapshot after its 240ms entrance. The timing assertion
and animation execution are unchanged. Extended runs on the long-lived dev8122
failed with a destroyed compression context and a rotation fixture that did not
open. The unchanged complete seven-suite command passes on fresh dev8133; that
temporary server is stopped.

**Next bounded piece:** src/index.css and tokens.css legacy aliases/selectors, then
font/output exceptions and non-visible registry/lifecycle consumers. Ocean Blue
utility aliases and cloak-mono-label appear unused; Select still uses
cloak-popover-motion, so migrate it deliberately before removal. fonts.css is live
annotation output data tied to FONT_FAMILIES; preserve preview/export parity.
Continue full PDF closure before family rollout; IMG/Resume wheel adoption is
separate. Evidence/log/proofs: PDF `docs/air/evidence/editor-wrappers-2026-10-19*`
and `editor-wrappers-checks-2026-10-19.log`. PDF dev8122 and production8132 remain
running. IAB tab2 shows the synthetic N-up study with focused unavailable Undo on
8122; tab1 is the older form review. Native review tabs are closed and Firefox zoom
is restored. Stored family goal remains blocked from an earlier checkpoint; the API
cannot resume it. Human continuation authorizes work; do not duplicate or complete
the full-family goal. Local work only, no push/deployment.

## Previous checkpoint — 2026-10-19 (Select text)

PDF **`eacefdd`** completes the bounded Select text pass. Shared Air actions,
read-only excerpt, loading/retry/no-text/OCR, clipboard feedback/manual copy and
focus-scoped keyboard selection replace the legacy panel. Exact-byte/page ownership
retains valid selections across tools/layouts and rejects stale reads/results.
Failed writes retain selection. Marks apply explicitly; Cancel clears pending
selection, Undo/Redo reverses committed PDF changes. Pending privacy marks pause
source-text selection. Deferred redaction/export semantics stay explicit.

Independent Poppler review found baseline-only boxes leaving descenders exposed.
Selection geometry now uses font ascent/descent, transformed corners (including
shear), visible crop and page rotation. The correction is opt-in; other geometry
consumers retain their bounds. Rotated/cropped/UserUnit real outputs preserve
geometry/title; redacted text is absent from extraction and rendered pixels.

453 units/46 files, focused selection plus Auto-fill/search-scrub, 16 production
smoke and seven extended suites pass (26 distinct suites). The initial parallel
smoke missed an AI modal's brief entrance; unchanged isolated and final serial
assertions pass. 52 required/breakpoint theme regions, six text200, forced colours,
reduced motion and 44px coarse targets inspected. Safari apply/focus/Undo and
Firefox actual 200% reviewed; physical touch/software keyboard, actual OS IME and
spoken assistive acceptance remain open. Complex multi-column logical order remains
an existing spatial heuristic. This is not full PDF/family completion.

Removed private button/palette/readSlice/HILITE, duplicate selection payload and
unowned copy timer. No dependency. Editor 327.17/99.50 kB raw/gzip, CSS 138.20/24.02
(previous gzip 98.39/24.64); 128 assets/77 PWA entries. Required code/dead/build/
asset/design/portability and six-document sync pass. Air 1.0.2 / bb90f52e0b0a unchanged;
canonical PDF appendix and standalone DESIGN updated. Source table regenerated to
reconcile completed Auto-fill/Fill form/controls entries.

Evidence/log/proofs: PDF `docs/air/evidence/select-text-2026-10-19*`. Full captures,
source and outputs in `/tmp/cloakpdf-air-review/`. PDF dev8122 and production8132
remain running. IAB tab2 shows the final selected synthetic text study; tab1 is the
older synthetic form review. Native review tabs closed and Firefox zoom restored.
Local commits only; no push/deployment.

**Next bounded audit:** EditorContext, EditorToolStage, EditorView, OverviewMode,
WholeDocPanel and stage.tsx, followed by remaining legacy-style consumers. Check
focus when Undo disables its initiating button. N-up already migrated on 2026-10-14;
do not repeat stale handoff next steps. IMG/Resume wheel adoption and remaining
family rollout are separate. Stored family goal remains blocked from an earlier
checkpoint; API has no active/resume mutation. Human continuation authorizes work;
do not create a duplicate or mark the whole goal complete.

## Previous checkpoint — 2026-10-19 (Fill form)

PDF **`7c8723d`** completes the bounded native Fill form pass. Air text/multiline,
custom choices, native multi-select/check rows and flatten switch share Auto-fill's
layout. Required/max-length/read-only/unsupported values are truthful. Existing
custom dropdown answers and all selections survive. XFA refuses explicitly.

Exact-byte drafts survive tool/page/layout changes. Read errors retry separately
from empty forms; abandoned reads are ignored. Save writes changed writable values,
clears choices and reports field-specific failures without losing work. Apply/mobile
Done awaits output and deduplicates; Undo/Redo/Cancel and privacy gating pass. Native
review caught success feedback bound to temporary writer bytes: both form tools now
bind to the committed render, hide it on Undo and preserve form focus after Save.

444 units/46 files, 25 distinct browser suites (Fill form + Auto-fill + 16 production
smoke + seven extended), required check/dead/build/asset/design/18 portability and
sync pass. Final affected-focused and production editor smoke reruns cover the
feedback/focus fix. Eleven sizes × two themes × three regions (66 captures), six
text200 cases, forced colours/reduced motion and >=44px emulated coarse targets.
Safari and Firefox (actual 200%) native review complete; final Save/Undo at normal
Firefox zoom confirms the fix. Editable/flattened PDFs preserve values/flags,
geometry/catalog; independent two-page Poppler renders match pixel for pixel.

Removed final Labeled/Toggle/SwitchTrack, retired switch CSS, duplicate form parser
and dead export bridges. PositionGrid, Rgb and transparency checker remain live.
No dependency or family contract change: Air 1.0.2 / `bb90f52e0b0a`. The PDF appendix
and standalone DESIGN include the new form rules. Evidence/log/two proof PNGs:
PDF `docs/air/evidence/fill-form-2026-10-19*`. Full captures/source/output:
`/tmp/cloakpdf-air-review/`. Final bundle sizes are in the evidence JSON.

N-up was already implemented/validated on 2026-10-14. The previous handoff's next
N-up entry was stale. **Next: Select text**, then remaining wrapper/stage/provider
and legacy-style consumer audits. IMG/Resume wheel adoption remains separate.
Physical touch/software keyboards, OS IME and spoken assistive acceptance stay open;
this is not full PDF/family completion. The stored family goal remains blocked from
an earlier checkpoint; the goal API has no active/resume mutation. User continuation
has authorized the work here. Do not create a duplicate or mark it complete.

PDF dev8122 and production8132 remain available. IAB tab1 shows Fill form with a
synthetic two-page PDF; native review tabs closed and zoom restored. The older
IAB tabs described below no longer exist. Local commits only; no push/deployment.

## Previous checkpoint — 2026-10-15 (Auto-fill)

PDF **`58ac944`** migrates the printed-form Auto-fill interior to Air:
open detection/profile/answer groups, complete labelled fields, page actions and
one scrolling inspector. Profile values are validated on load; failed storage
retains the draft and shows retry guidance. Profile fill changes only empty answers
and keeps focus when complete. Re-detection preserves manual/empty matching values.

Scans/answers belong to exact document bytes; cancellation, exit and newer edits
reject stale results. Failed/empty scans preserve valid answers. No-text/no-blanks
states explain OCR/manual alternatives; pending privacy marks block detection and
filling. Promised Apply/mobile Done preserves failed drafts and deduplicates output.
Successful previews retire, Undo/Redo restore exact bytes, stale success feedback
clears after Undo and Cancel restores the checkpoint. Preview/writer share physical
layout and explicit shrink/ellipsis semantics. Unsupported text fails atomically.

432 units in 45 files, focused Auto-fill lifecycle/output suite, all 16 production
smoke suites, seven extended suites, check/dead/build/asset/design/18 portability
and exact design sync pass. Native Safari and Firefox actual 200% review found two
small feedback/focus defects; focused regressions pass after fixing them. 44
required size/theme regions, six enlarged-text cases and forced colours/reduced
motion reviewed. Physical touch/software keyboard, actual OS IME and assistive
speech remain open; inventory stays validated:false.

Removed the final TextField adapter/useId, unused FieldFill export bridge and
retired Auto-fill styles. Keep Labeled/Toggle for FillForm, PositionGrid for Bates/
PageNumbers and Rgb for FindAct/Redact. No dependencies. Editor 317.04/96.88 kB
raw/gzip (+0.09); CSS 142.66/24.92 (-0.10); 128 assets/77 PWA entries. Air remains
1.0.2 (`bb90f52e0b0a`); only the PDF product appendix/standalone DESIGN changes.

Evidence/log/two proofs: PDF `docs/air/evidence/autofill-2026-10-15*`; full captures,
synthetic source and output in `/tmp/cloakpdf-air-review`. IAB tab19 on 8132 now
shows Auto-fill with three synthetic answers, profile untouched. Old tab12 draft
preserved. Native review tabs closed, Firefox zoom restored and synthetic profile
name cleared. Existing servers remain available. Local commits only; no deploy.

Next bounded PDF piece: **FillFormTool**, then **NupTool**. Migrate remaining custom
controls, empty/errors, raw values, output and awaited mobile completion, validating
all sizes/themes and actual PDFs. IMG/Resume wheel adoption remains separately
tracked; do not expand this completed Auto-fill slice into a full-family claim.

## Previous checkpoint — 2026-10-15 (shared colour wheel)

PDF **`917ae41`** replaces the colour square in every direct picker consumer with
one Air hue/saturation wheel, brightness track, hex field and optional native
precise axes. All nine tools share it. Pointer cancellation restores the starting
colour; secondary pointers cannot cancel the active drag. External values update
the cursor; black/grey retain useful hue through brightness edits. A wheel choice
from pure black becomes visible. Invalid hex never changes output. Near-red hue
rounding stays inside the native range. Removed obsolete square/point CSS and
per-axis callbacks; no dependency added.

Family **Air 1.0.2**, contract `bb90f52e0b0a`: upstream anatomy/rules, opt-in CSS,
shared `colour.mjs` + types and inline `components.html#colour-study`. All six
portable DESIGNs and five bundles/inventory versions synchronized. The colour
math is shared by the PDF adapter and reference. IMG/Resume runtime pickers remain
pending; preserve their RGB/recents/eyedropper and document output during adoption.
Drop receives the bundle only; native/KERR unchanged.

PDF checks: 429 units, all 25 distinct browser suites (wheel, 16 production smoke,
7 extended, privacy panels), check/dead/build/asset limits/design/18 portability
pass. The final red-seam refinement and revised keyboard order also pass focused
wheel + production interactions. 22 required size/theme, six text200, forced
colours/reduced motion reviewed; actual coarse input and touch/cancel emulated.
Safari wheel/black/brightness/reopen/focus and Firefox precise keyboard/error/
focus at actual 200% pass. Physical touch/software keyboards and spoken assistive
acceptance remain open. Root math checks cover cardinal mapping, inverse cursor
geometry and 4096 byte-exact RGB round trips. Editor 315.68/96.79 kB raw/gzip
(+0.23 gzip); CSS 143.18/25.02 (+0.24); 128 assets/77 PWA entries.

Bundle commits: IMG `d8a3259`, Drop `a42e8b1`, Resume `76d311c`.

Sibling gates: IMG check/470 tests/build, Drop Astro check/build, Resume
check/build/288 production tests pass. Resume development runs had isolated prism
timeout and contact-focus timing failures; isolated retry, four production focus
cases and full production suite pass without changing code/assertions.

Evidence and checks: PDF `docs/air/evidence/colour-wheel-2026-10-15*`; all captures
`/tmp/cloakpdf-air-review/colour-wheel-*`. New IAB review tab19 on 8132 has the
synthetic document and wheel open; old tab12 draft was preserved. Native temporary
tabs closed, Firefox zoom restored. All existing servers remain available.

Next PDF piece remains **FillFormTool**, then AutoFillTool and NupTool. Track the
new family wheel requirement in IMG/Resume migrations; do not mark those pickers
implemented merely because their portable bundle changed. Continue feature/output,
size/theme checks, consumer-aware cleanup and local commits. Full family refresh
is unfinished; no push/deploy.

## Previous checkpoint — 2026-10-15 (Annotate inspector)

PDF **`0c30b05`**: Air tool/style groups, full-width font selector, named colours,
switches and precise size/opacity entry. A custom placed-annotation selector reaches
marks across pages. Selected text/shapes/icons show their own settings; fill/glyph
controls stay accessible in Select mode. Raw invalid drafts survive tool/layout
changes. Drawing/text remain arm-once; icons preserve repeated stamping. Output
keeps vector marks, selectable text, embedded fonts and original catalog data.

Apply/mobile Done awaits output, retains failure selection/objects, deduplicates
retry and removes overlays only on success. Undo restores them, Redo reapplies.
Style/nudge timers use moveObject's optional expectedPayload guard: stale callbacks
after Undo/Cancel/removal/Apply cannot create history. Style edits no longer advance
the tool Cancel checkpoint. Existing immediate moveObject callers are unchanged.

Removed final RangeField export/consumer, private StyleToggle/FontControls skins,
redundant colour labels and old selected-card markup. No dependencies. Editor
315.12/96.56 kB raw/gzip (+0.19 gzip), CSS 142.03/24.78 (-0.43); 128 assets, 77 PWA
entries, inventory 92. Contract 1.0.1 unchanged; canonical PDF appendix/portable DESIGN
synced. Verified remaining controls.tsx consumers: Labeled/Toggle in FillForm,
Labeled/TextField in AutoFill, PositionGrid in Bates/PageNumbers, Rgb in FindAct/
Redact; WholeDocPanel remains live in N-up. Do not delete them prematurely.

429 units / 45 files, **24 distinct browser suites** (focused annotation, 16
production smoke, seven extended), check/dead/build/design/17 portability/exact sync
pass. Updated old smoke assumptions (Pen before colour picker; selector instead of
removed “Mark selected” card). Rotation test now waits for the export dialog to
close before rotating again and respects the configured profile; both 90°/180°
assertions and the complete extended rerun pass. No output assertion weakened.
110 region/size/theme captures, 18 text200 cases and forced-colours/reduced-motion
inspected. Coarse/fine input actually emulated; no overflow or uncaught errors.

Safari native chooser, font menu typeahead, underlined inline text, invalid-size
recovery, Apply/focus, Undo and restored font/size pass. Firefox native chooser at
actual **200%** browser zoom, pointer icon placement, Down/Return selection, glyph
editing in Select mode, Done/focus and Undo pass. Reset zoom and closed native review
tabs. Physical touch/software keyboard, OS IME and assistive speech remain open.

**Next bounded piece: FillFormTool** (`src/editor/panels/FillFormTool.tsx`). Migrate
field types, custom selectors/switches, empty/unsupported states and fill/flatten
options. Preserve field geometry, values, raw drafts across reflow, existing form
semantics and actual PDF output. Apply currently voids applyTransform; fix awaited
mobile completion/failure/retry, Undo/Cancel. Then AutoFillTool and NupTool. Continue
source/dead-code audits and all required size/theme/feature gates before each commit.
Full PDF/family migration remains unfinished. Local commits only; no push/deploy.

Evidence: PDF `docs/air/evidence/annotate-2026-10-15*`; full captures/contact sheets
and synthetic PDF `/tmp/cloakpdf-air-review/annotate-*` / `Air annotations.pdf`.
Servers unchanged: 8122/8132 PDF, 8120 Air reference, 8131 family homepage. IAB tab12
was already on the homepage at first read (the prior code draft absent); updated
to current production build and now holds Air annotations.pdf, one selected pending
Helvetica text “A little clarity.” on page1, Annotate active, no viewport override.
Other product repos unchanged. Preserve this review draft when continuing.

## Previous checkpoint — 2026-10-15 (QR / barcode)

PDF **`2c3b901`**: Air type/payload/colour/caption controls, associated errors and
neutral preview surround. Keyboard placement/selection/move/resize/remove shares
`PlacementActions.tsx` with signatures. Complete quiet zones stay inside the page;
all-pages copy preserves physical proportions on mixed sizes and skips occupied
pages. Barcode caption baseline/raster rounding matches vector output; long preview
width caps at 4096px. Settings affect new placements. Apply returns its promise;
mobile Done waits, failed reads retain objects, retry deduplicates, Undo restores
pending objects and Redo reapplies. Cancel restores the checkpoint.

Removed the old WholeDocPanel Segmented implementation, its measurements/observer/
thumb animation, CodeStampTool legacy imports/skins and duplicated signature buttons
and CSS selector. No new dependencies. Editor 315.07/96.37 kB raw/gzip (+0.47 gzip),
CSS 144.17/25.21 (-0.04); 128 deployment assets, 77 PWA entries. Inventory now 92.

429 units / 45 files and **24 browser suites** pass: focused codes, 16 production
smoke and 7 extended. First smoke stopped on AI modal pointer timing with no active
animation sampled. The unchanged isolated retry and subsequent complete clean smoke
both pass; no assertion weakened or modal runtime change. All required check/dead/
build/design/17 portability assertions/exact sync pass. 101 focused captures include
88 state/region/size/theme views, 12 text200 and forced-colours/reduced-motion.
Coarse/fine input is actually emulated and asserted. Real PDF module/quiet-zone
pixels, vector operators, caption, original text/catalog, draft/error/retry/Undo/
Redo/Cancel checked. No uncaught errors.

Safari native chooser, barcode validation/recovery, place/resize/copy/Apply/focus/
Undo pass. Firefox native chooser, QR place/resize/copy, custom selection with
Down/Return and mobile Done pass at actual **200% browser zoom**. Review tabs closed;
Firefox zoom reset. Physical touch/software keyboard, actual OS IME, assistive
speech and final-size real-device scan acceptance remain open.

**Next bounded piece: Annotate inspector** (`src/editor/panels/AnnotateTool.tsx`):
text/font/weight/style, drawing and shape controls, stroke/fill/opacity precision,
selected-object editing and empty/disabled states. Preserve canvas geometry,
keyboard editing, per-object settings, font embedding, Apply/export fidelity and
Undo/Cancel. Audit all sizes/themes before commit; then FillFormTool, AutoFillTool,
NupTool and remaining legacy consumers. `controls.tsx` still serves Labeled/Toggle/
TextField/RangeField/PositionGrid/Rgb consumers; WholeDocPanel remains live in N-up.
Do not delete live adapters or claim full PDF/family completion.

Canonical PDF appendix and portable DESIGN synced; family contract stays Air 1.0.1.
Evidence: PDF `docs/air/evidence/codes-2026-10-15*`; full captures `/tmp/cloakpdf-air-review/codes-*`.
Servers remain 8122/8132, reference 8120, homepage 8131. IAB tab12 now holds synthetic
Air codes.pdf, QR payload https://cloakyard.com, one pending code on page1; no viewport
override. User's former Bates draft was already absent at the first read this turn
(the tab showed the homepage). Other product repositories unchanged. Local commits
only; no push/deploy. Keep testing and removing replaced code in each bounded piece.

## Previous checkpoint — 2026-10-15 (Editor loading / saved-session recovery)

PDF `8b181bf`: shared Air file intake, reading/preview progress, error and
saved-session notices, and processing surface. Failed restore retains source bytes,
saved draft and retry; success/discard hands focus to Export. Latest file request
owns progress, install, security recheck and draft lookup. Exit during read/restore
releases late previews; StrictMode succeeds. Removed Spinner, one-off coloured
banners, legacy intake skins and applyDraft wrapper; no dependencies added.
Editor 313.87/95.90 kB raw/gzip (-0.37 gzip), CSS 144.28/25.25 (-0.25).

429 units / 45 files and 26 distinct browser suites pass (16 production smoke,
7 extended, focused editor recovery, preview recovery and Bates). Full smoke rerun
after restore-exit guard; final presentation adjustments checked by focused recovery,
production entry/motion and build as recorded in evidence. 141 captures cover eleven
sizes, both themes, real coarse-pointer emulation, 30 enlarged-text states and one
measured-progress state. Keyboard scrolling at 320px/200%, forced colours/reduced
motion, no uncaught errors and zero leaked thumbnail URLs pass. Required check/dead/
build/design/17 portability assertions/exact sync pass; 128 assets, 77 PWA entries.
Canonical PDF appendix and portable DESIGN synced; family contract stays Air 1.0.1.

**Native diagnosis:** Both Safari and Firefox now open PDFs through native file
selection. The disabled Firefox chooser is no longer reproduced. Safari's real-editor
failure/retry/focus and Bates Apply pass when visible; one instrumented stalled reload
reported visibility hidden, 0/1 delivered frames, 2/2 reads complete and no PNG encoding.
Initial load does NOT use runBusy, contrary to the prior hypothesis; PDF.js also uses
animation frames for display rendering. No renderer/scheduler workaround was added.
Do not attribute every earlier stall to this without its own trace. Firefox recovery,
Return activation, success focus and discard pass at actual 200% zoom. Native review
tabs closed and zoom reset; temporary diagnostic files removed. Physical touch/software
keyboard, real OS IME and assistive speech remain open.

**Next bounded piece: QR / barcode** in `src/editor/panels/CodeStampTool.tsx`.
Replace Labeled/TextField/Toggle and legacy WholeDocPanel Segmented use with Air
payload/type/caption controls. Preserve scannability, QR quiet zones, Code128 caption
geometry, vector output, placement/move/resize/all-pages, draft persistence, Apply/
mobile Done/failure/Undo/Cancel ownership. Audit error/empty/long payload and every
size/theme. Then annotation/form interiors and remaining dead-code cleanup. Keep
controls.tsx and WholeDocPanel adapters with live consumers until their migrations.
Do not claim full PDF/family completion. Local commits only; no push/deploy.

Evidence: PDF `docs/air/evidence/editor-recovery-2026-10-15*`; full screenshots
`/tmp/cloakpdf-air-review/shell-*.png`. Development/preview servers remain 8122/8132,
Air reference 8120, homepage 8131. Existing in-app tab 12 (8132) was preserved with
its synthetic Air Bates.pdf, CASE- / -A, six digits, start 1, size 9, margin 36,
bottom-right, pending preview; no viewport override. Other product repos unchanged.

## Previous checkpoint — 2026-10-15 (Bates numbering)

PDF commit `9a4b56a`: Air full-width affixes, minimum-digit segments, shared
position/colour/precision controls and nine-digit Start at entry. One formatter
and Courier geometry keep identifiers complete/selectable across digit boundaries.
Writer checks exact fit on every visible page, encoding, single-line affixes and
safe sequence precision. Raw invalid numeric drafts persist; Apply/mobile Done
awaits output and keeps failed drafts, success retires the byte-scoped preview,
Undo/Redo do not resurrect it, restart is explicit and Cancel restores checkpoint.
Removed StampTools.tsx, ColorRow and duplicate/unused position type; other shared
controls still have live consumers. No dependencies. Editor 314.55/96.27 kB raw/gzip
(+0.33 gzip), CSS 146.06/25.50 (+0.03). 128 assets, 77 PWA entries.

429 units in 45 files, 25 browser suites (16 production smoke, seven extended,
Bates and page geometry), check/dead/build/design/portability/exact sync pass.
Reviewed 44 regions across eleven sizes/both themes, twelve enlarged-text cases,
forced colours and reduced motion. Firefox actual 200% keyboard/affixes/nine-digit
entry, validation, slider recovery, Apply/focus/Undo/re-arm pass using an in-memory
synthetic File in the real production app.

**Open native checks:** Safari remained at Opening PDF before Bates opened, even
with reload, a clean origin and an in-memory synthetic fixture. Window Raise and
Bring All to Front did not resolve it; inspector did not yield actionable diagnostics.
Cause is not established. Inspect runBusy's double-rAF scheduling as a hypothesis,
then document creation/preview loading; do not assume or claim a root cause. Firefox's
native file chooser kept Open disabled for both new and older synthetic PDFs, even
with its All Files filter; its in-memory workflow passed. Rerun native file selection.
Unavailable engine/device checks remain open per the rollout plan, not marked passed.

Next bounded piece: **shell loading/error/restored-draft states**, starting with
these native loading diagnostics and recovery. Then QR/barcode controls and remaining
annotation/form interiors. Keep required checks green before every local commit;
remove replaced code without deleting live adapters. Physical touch/software keyboard,
actual OS IME and assistive speech acceptance remain open. No full migration claim.

Canonical product appendix and standalone DESIGN synced; Air 1.0.1 unchanged.
Evidence/log/two proofs: PDF `docs/air/evidence/bates-2026-10-15*`. Full captures in
`/tmp/cloakpdf-air-review/bates-*.png`. Temporary in-memory fixture harness removed
from dist, 8133 server stopped, native temporary tabs closed, Firefox zoom reset.
Servers remain PDF dev 8122/preview 8132, Air 8120, homepage 8131. In-app tab 12 at
8132 holds synthetic Air Bates.pdf with CASE- prefix/-A suffix, six digits/start 1,
size 10/margin 36, bottom-right, pending on page 1; default split, no viewport override.
Other three product repos unchanged. Local commits only; no push/deployment.

## Previous checkpoint — 2026-10-15 (Header & footer)

PDF commit `f467a87`: Header & footer now uses Air Header/Footer segments, three
full-width alignment fields per group, explicit token target/expanded preview,
shared colour/precision controls and the Air cover switch. All six fields and raw
invalid numeric drafts persist across tool/layout changes. Output uses the actual
PDF title and one captured preview clock. Shared geometry checks every visible
page with exact embedded-font widths; overlap, clipping, multiline/unsupported
text, empty expansion and an excluded only page fail without changing the source.

Apply/mobile Done awaits output, retains failed drafts and panel focus, retires
successful previews before Undo and explicitly re-arms another header/footer.
Cancel restores the checkpoint. Stamp shares TextTokens and the title/clock reader;
removed old TripleRow, HeaderFooter UI/stage/default reader, duplicate layout and
native-setter token insertion. No dependencies. Editor 95.94 kB gzip (+1.02); CSS
25.47 (unchanged). Air 1.0.1 remains locked; product appendix/portable DESIGN synced.

420 units in 44 files, 26 browser suites (16 production smoke, 7 extended, focused
Header/footer/Stamp/geometry), check/dead/build/design/portability/exact sync pass.
All 44 region captures + 12 enlarged-text states reviewed, both themes, forced
colours/reduced motion. Safari insertion/keyboard/Apply/focus/Undo/re-arm and Firefox
actual 200% zoom/error recovery/Apply pass. Temporary native tabs closed; zoom reset.
Compression smoke's timestamp-dependent byte comparison now fixes/restores the
creation clock while preserving explicit date parsing; strict comparisons pass.
Compact evidence, log and two proof PNGs are in PDF's dated validation/evidence.

Next bounded piece: **Bates numbering** (the only remaining consumer in
StampTools.tsx). Migrate prefix/suffix, sequence/digit width, colour and precision
controls; preserve raw drafts, exact output geometry and selectable identifiers.
Audit sequence overflow, fit/encoding, Apply/mobile Done/failure retention, preview
ownership, Undo/re-arm and Cancel. Reuse existing Air adapters and rename/remove
obsolete StampTools/WholeDocPanel/Segmented/controls only after checking all live
consumers. Then continue remaining custom panels and shell loading/error/restored-
draft states. Keep validation before each local commit. No push/deployment.

Physical touch/software keyboard, actual OS IME and assistive speech remain open;
full PDF/family migration is unfinished. Servers unchanged: PDF dev 8122, preview
8132, Air reference 8120 and homepage 8131. In-app tab 12 at 8132 holds synthetic
Air header-footer.pdf, Header & footer active with `{title}` in Header left and
`Page {page} of {total}` in Footer center, size 10/margin 36, unsaved preview.
Default split, no viewport override. Other three product repositories unchanged.

## Previous checkpoint — 2026-10-15 (Page numbers)

PDF commit `b7e0c69`: Page numbers now has Air position, format, colour and precise
sequence/size/margin controls. First page and Start at expose existing writer
settings; raw invalid values survive tool/layout changes. Preview/output share one
formatter. The writer rejects invalid values and text that cannot fit a mixed-size
visible page. Apply/mobile Done awaits output, retains failed drafts and panel
focus, and retires the byte-scoped preview before Undo. Explicit Start another
numbering re-arms settings; Cancel restores the tool checkpoint.

Stamp and Page numbers share PrecisionField and its styling. Both numeric groups
now have real 16px separation (a missing nested flex layout was caught visually).
Bates shares the revised Air 3×2 position picker. Removed old PageNumbers UI/stage,
default reader, duplicate formatter and Stamp-specific numeric skins. No dependency
added. Editor 94.92 kB gzip (+1.87), CSS 25.47 (-0.03); 128 deployment assets/77 PWA
entries. Air 1.0.1 stays locked; canonical PDF appendix and portable DESIGN synced.

412 units in 43 files, sixteen production smoke + seven extended + focused Page
numbers/Stamp/geometry pass (26 distinct browser suites). Smoke now waits for a
ready Apply button and actual completion instead of racing initial disabled state
and a brief spinner. Reviewed 44 size/theme regions, twelve enlarged-text cases,
forced colours/reduced motion and Stamp precision regressions. Native Safari and
Firefox pass; Firefox tested production at actual 200% zoom. Temporary native tabs
closed and zoom reset. Check/dead/build/design/portability/exact sync pass. Evidence
is in PDF's validation record and `docs/air/evidence/page-numbers-2026-10-15.json`.

Next bounded piece: **Header & footer** in StampTools.tsx. Replace cramped TripleRow
and legacy TokenBar/RangeField/Toggle controls. Its preview currently uses an empty
title and a fresh clock while output uses metadata; own one context for both. Audit
text overlap/fit and encoding errors, raw numeric drafts, awaited Apply/mobile Done,
failed-draft recovery, preview retirement, Cancel and Undo. Reuse PrecisionField;
keep WholeDocPanel/Segmented and remaining controls until their live consumers move.
Then Bates and remaining shell loading/error/restored-draft states. Physical touch/
software keyboard, actual OS IME and assistive speech stay open. Full PDF/family
migration is unfinished. Local commits authorized; no push/deployment.

Servers unchanged: 8122 PDF dev, 8132 PDF preview, 8120 Air reference, 8131 homepage.
In-app tab 12 at 8132 holds synthetic `Air numbers.pdf`, Page numbers open, pending
Page 1 of N / first page 1 / start 1 / size 12 / margin 36, default split, no viewport
override. Native review tabs closed; no new server. Other product repos unchanged.

## Previous checkpoint — 2026-10-15 (Stamp interior)

PDF commit `3a9eef1`: Stamp now has a dedicated WatermarkTool adapter with Air text,
field insertion, shape/finish segments, colour and precise numeric/slider controls.
Invalid drafts persist through layout/tool changes; actual PDF title and a captured
preview time reach output. Token insertion retains the caret without stealing focus
from a later field. Applied previews retire before Undo; Start another stamp re-arms
settings. Mobile Done waits, failed saves retain the draft and busy focus stays in
Stamp text (verified in native Safari/Firefox).

Ink previews now share the exact supersampled output buffer. Fractional cache keys
remain distinct; caches have a 16-million-pixel total/12-entry/8192px-side bound and
release buffers on eviction/tool exit. Oversized text gets a recoverable error.
Removed the old Stamp UI/painter, void Apply, obsolete imports/comments and unused
null branch. Numbering still uses live WholeDocPanel/Segmented/controls: keep them
until their remaining consumers migrate. No dependencies added. Editor 93.05 kB
gzip (+1.92), CSS 25.50 (+0.36); Air 1.0.1 remains locked and portable.

405 units in 42 files, 16 production smoke + seven extended + focused Stamp and
page geometry suites pass (25 distinct browser suites). Final focus/caret/visual
refinements reran focused Stamp and production motion, with a final production
Stamp preview check. Inspected 44 size/theme region captures, twelve enlarged-text
cases, forced colours and reduced motion. Native Firefox passed at actual 200%
zoom; Safari's discovered focus issue was fixed and rechecked. Native tabs closed
and Firefox zoom reset. Check/dead/build/design/portability pass. Product validation,
JSON, three proof images and complete check logs record evidence. The evidence PDF
contains an applied APPROVED plus a pending CONFIDENTIAL stamp deliberately.

Next bounded piece: **Page numbers** in StampTools.tsx, then Header & footer and
Bates. Audit precise values, live preview/token metadata, draft ownership, awaited
Apply/mobile Done, failure/retry, output and Undo. Then remaining custom panels and
shell loading/error/restored-draft banners. Continue dead-code checks each slice.
Physical touch/software keyboard, real OS IME and assistive speech stay open; full
PDF/family migration is unfinished. Local commits authorized; no push/deployment.

Servers 8122 (PDF dev), 8132 (PDF preview), 8120 (Air reference) and 8131 (home)
remain. In-app tab 12 on 8132 is the production Stamp review with a synthetic PDF.
No server was added. The other three product repositories remain unchanged.

## Previous checkpoint — 2026-10-15 (Signature interior)

PDF commit `24a1965`: Signature now uses Air source segments, labelled switches,
colour controls, an object selector and keyboard placement/move/resize/remove.
Drawing has one focus contour, preserves completed strokes through tool/layout
changes, handles single taps/final segments and ignores cancellation from another
pointer. The pad caps its display size without stretching ink, including short
landscape. Draw and Choose keep separate drafts. Image preparation reports errors,
retains the previous image for retry, supports same-file retry and aborts abandoned
reads. Existing transparency/white ink survives; opaque paper becomes transparent.

Copy to remaining pages preserves aspect on mixed sizes. Apply awaits PDF embedding;
failed mobile Done retains the tool/placements for retry, and Undo restores exact
prior bytes/objects. PDF.js confirms raster ink, selectable text, metadata and
attachments. Removed old skins, unused Switch/focusRing, ignored payload property,
global Delete handling, silent decode fallbacks, void Apply and stale standalone
references. No dependencies added; editor 91.13 kB gzip (+1.43), CSS 25.14 (-0.09).

405 units in 42 files, 16 production smoke + seven extended + focused Signature and
page-geometry suites pass (25 distinct browser suites). Inspected 44 source/size/
theme cases, twelve enlarged-text cases, expanded short-landscape, forced colours
and reduced motion. Native Safari and Firefox pass, including actual Firefox 200%
zoom. Final display refinements were rerun through focused Signature and production
motion. Check/dead/build/design/portability pass. Evidence is in PDF's validation
and `docs/air/evidence/signature-panel-2026-10-15.json`. Air 1.0.1 remains locked;
canonical PDF appendix and standalone DESIGN are synchronized.

Native review tabs are closed; Firefox zoom restored. In-app tab 12 at 8132 holds
synthetic `Air signature.pdf` with Signature open for review. Servers 8122 (PDF dev),
8132 (PDF preview), 8120 (reference), 8131 (homepage) remain; no new server was added.

Next bounded piece: **Stamp/numbering interiors** in `StampTools.tsx` — start with
Stamp (WatermarkPanel), then page numbers/header-footer/Bates. All four still use
legacy WholeDocPanel/Segmented and void `applyTransform` callbacks. Migrate controls,
draft/Apply/failure ownership and actual output; keep those adapters until their
last consumers migrate. Then remaining custom controls/panels and shell loading/
error/restored-draft banners. Keep the source/dead-code audit and green-check commit
gate. Physical pen/touch/software keyboards, real OS IME and assistive speech remain
open. PDF/family migration is unfinished. Local commits authorized; no push/deploy.

## Previous checkpoint — 2026-10-15 (Crop and Strip furniture)

PDF commit `9f64243`: Crop and Strip furniture interiors use Air fields, scope
segments, full sample rows and explicit feedback. Crop now has keyboard percentage
entry, shared pointer geometry and cancellable/owned content suggestions. Furniture
selections survive tool/layout changes; preview bands derive from the selected
result without duplicate state. Both tools await mobile Done and retain failed
drafts for retry. Applied drafts retire before Undo. Busy focus stays in the panel.

Straighten preserves the catalog/page references and original rotated/CropBox/
UserUnit geometry instead of rebuilding everything and applying rotation twice.
Changed native annotated/widget pages are rejected before writing; pending marks
block automatic adjustments. Actual raster rows, untouched text/forms, metadata,
attachments and exact no-op bytes are tested. Crop's data-retention limits remain
explicit. Old skins, void apply chains, duplicate state and obsolete comments are
removed. No dependencies added; editor 89.70 kB gzip (+1.36), CSS 25.23 (-0.06).

404 units in 41 files, all 16 production smoke + seven extended + focused crop/
furniture and geometry suites pass (25 browser suites). All 44 tool/size/theme
combinations and 12 enlarged-text cases were inspected. Forced colours/reduced
motion and native Safari/Firefox pass, including actual Firefox 200% zoom. Check,
dead-code, build, design and portability pass. Evidence is in PDF's dated validation
and `docs/air/evidence/crop-furniture-2026-10-15.json`. The smoke now waits for actual
scan/apply completion instead of rail labels/static help. Canonical PDF appendix
and standalone DESIGN are synchronized; Air 1.0.1 remains locked.

Native review tabs are closed and Firefox zoom restored. In-app tab 12 at 8132
holds synthetic `Air crop.pdf`, Crop controls expanded, Top = 8% as an unapplied
review draft. No new server was started; 8122 dev and 8132 production remain.

Next bounded piece: **Signature interior** — its shared legacy source toggle,
image upload/background controls, canvas input, promised apply/failure/retry and
output/Undo. `WholeDocPanel.Segmented` still has live Signature/Stamp consumers;
do not delete it until each migrates. Then Stamp/numbering interiors, remaining
panels and shell loading/error/restored-draft banners. Keep dead-code audit in every
slice and commit only after all applicable checks. Physical touch/software keyboards,
real OS IME and assistive speech remain open. Full PDF/family migration is unfinished.
Local commits authorized; no push/deployment. Do not mark the family goal complete.

## Previous checkpoint — 2026-10-15 (Attach)

PDF commit `8fcdbe8`: Attach now uses Air open rows, complete filenames, sizes and
40/44px actions, explicit read failure/retry, retained byte-scoped selections,
discard/Cancel and immediate undoable changes. Duplicate Unicode names have
separate identities. Nested trees, unique sorted keys, standard AF/annotation
cleanup, shared streams and physical removal of unshared bytes are tested.
Malformed trees and unsupported surviving references fail without changing the PDF.
Shared busy focus now returns to the initiating control or surviving Attach action;
closed dialogs keep their Export fallback. Pending privacy marks are protected.

400 units in 40 files, 16 production smoke + seven extended + focused Attach and
Bookmarks pass (25 browser suites). All 22 required layouts/themes, 16 empty/read/
failure/retry examples, enlarged text, forced colours/reduced motion and Safari/
Firefox native checks pass, including actual Firefox 200% zoom. Final production
add/remove/Undo reviewed. Check, dead-code, build, design and portability pass.
Evidence: PDF `docs/air/evidence/attachments-2026-10-15.json` and dated validation.

Old panel skins, name-only removal, unused exports and a redundant graph traversal
are removed. No dependencies added; editor 88.34 kB gzip (+0.05), CSS 25.29 kB gzip
(+0.05). Canonical PDF appendix and portable DESIGN are synchronized. Temporary
native tabs are closed, Firefox zoom reset and server 8138 stopped. Preview 8132
contains a synthetic PDF with two attachments and expanded Attach controls.

Next bounded slice: **Crop and Strip furniture interiors**. Their callbacks still
return void before `applyTransform` finishes; review mobile Done/failure retention,
invalid numeric drafts, shared WholeDocPanel/Segmented controls, safe crop geometry
and output/Undo. Keep shared controls with live Signature/Stamp consumers until
migrated. Then remaining tool interiors and shell loading/error/restored-draft
banners. Continue source/dead-code audit and commit only after applicable checks.

Air 1.0.1 remains locked. Full PDF/family migration, physical touch/software keyboards,
real OS IME and assistive speech remain open. Local commits are authorized; no push
or deployment. Do not call the family goal complete.

## Previous checkpoint — 2026-10-15 (Bookmarks)

PDF commit `3163a35`: Bookmarks is implemented and validated with Air fields,
shared nesting menus, keyboard reorder and remove/restore, explicit target
validation, retained drafts, cancellable/owned heading detection and safe contents
insertion. Pending overlays are protected. Applied drafts retire; Cancel discards.
A shared pending-apply bug is fixed: validation failure keeps Done ready for retry,
and concurrent flushes await one operation. No silent target clamping remains.

390 units, all 16 production smoke suites, seven extended suites and focused
Bookmarks/Metadata pass (25 browser suites). All 22 required layouts/themes,
six container-boundary cases, 12 empty/pending/failure states, enlarged text,
forced colours and native Safari/Firefox (actual 200% zoom) reviewed. Check,
build, dead-code, design and portability pass. Evidence is in PDF's dated
validation record and `docs/air/evidence/bookmarks-2026-10-15.json`.

Removed legacy panel skins/cycling controls, unused imports/global row counter,
obsolete target helper and unused outline-node properties. No dependencies added;
editor +1.32 kB gzip, CSS +0.03 kB gzip. Keep live legacy shared controls until their
remaining consumers migrate. The in-app production preview on 8132 is updated,
with the synthetic Air review PDF and expanded Bookmarks controls. Native review
tabs are closed and Firefox zoom restored; temporary server 8138 is stopped.

Next bounded slice: **Attach**. Audit found failed reads masquerading as empty
lists, void asynchronous actions, loss of failed file selections, Unicode display
name/name-tree key mismatches, unsupported nested Kids and duplicate-name identity.
Verify add/remove/retry, retained bytes, safe embedded-stream removal, output and
Undo before committing. Then remaining custom tool interiors and shell loading/
error/draft banners. Use the exhaustive TODO and keep cleanup in each slice.

Air 1.0.1 remains locked. Other products and physical touch/software keyboards,
real OS IME and assistive speech gates remain open. Full PDF/family refresh is
unfinished. Local commits remain authorized; no push or deployment.

## Previous checkpoint — 2026-10-15 (Metadata and date/time)

PDF commit `76b2d42`: the Metadata/date-time slice is implemented and validated. Metadata has Air fields
and an open report, explicit read/retry, byte-scoped drafts, safe failure recovery,
clear/save/undo/Cancel and promised mobile Done. Saving retires the applied draft.
The full calendar/year/hour/minute/AM-PM control uses Air with seven 44px columns,
320px full-width layout, immediate keyboard focus and nested-menu dismissal.

384 units, 16 production smoke suites, seven extended suites and focused acceptance
pass, alongside check/build/dead-code/design/portability. Required layouts/themes,
narrow-calendar breakpoint neighbors, long filenames, error/loading, 200% root text,
Safari and Firefox actual 200% zoom reviewed. No dependency added; date code is
76 lines shorter, the unused old popover skin is gone and modal suspension now
recognises actual Air surfaces. Evidence is in CloakPDF's dated validation record.

Next bounded slice: **Bookmarks and Attach**. Audit already found silent page clamping,
void asynchronous callbacks and failed attachment reads shown as empty lists. Keep
output/undo, nested outlines/contents pages, duplicate filenames, retained retry input,
stale detection and code cleanup in scope. Then remaining tool interiors and shell
loading/error/draft banners. Other products and physical touch/software keyboards,
OS IME and assistive speech remain open. Air 1.0.1 is unchanged. Local commits are
authorized; no push/deployment. Do not mark PDF or the full family complete.

## Previous checkpoint — 2026-10-15 (search and scrub)

PDF commit `fcd913a`: Find & Act and Scrub now use Air throughout their panel interiors. Search retains
query/results/inclusions after failure, cancels safely and ties matches to exact
bytes. Scrub reports failure/retry and selected-category readiness, with explicit
bookmark/form loss and annotation limitations. Mobile Done waits for promised
apply completion; failure keeps the tool open and repeat activation cannot apply
twice. Desktop primary actions consume reported failures.

384 units, all 16 production smoke suites, seven extended suites and two focused
search/privacy suites pass. 44 required layouts, 16 error/busy/long-term states,
200% root text and native Safari/Firefox including actual Firefox 200% zoom reviewed.
Real highlight/box/scrub outputs and undo/retry pass. Required checks, build,
dead-code, provenance and isolated portability pass. Removed 127 unused legacy
CSS lines and stale motion references; no dependency added. Air 1.0.1 is unchanged.

Next bounded slice: **Metadata, Bookmarks and Attach panel interiors**. Continue
checking the remaining tool callbacks that return void before their asynchronous
apply completes, shared controls and shell loading/error/draft banners. Keep source
and output cleanup in each piece. Physical touch/software keyboards, OS IME and
assistive speech remain open; full PDF/family migration is unfinished. Local commits
are authorized; no push or deployment. Product evidence lives in the dated PDF
validation record and `evidence/search-scrub-2026-10-15.json`.

## Previous checkpoint — 2026-10-15 (privacy marks)

Air 1.0.1 remains locked. PDF commit `c0ac5c0` gives Redact and Smart Erase Air choices, search,
colour controls and a shared pending-mark list. Cancelled/stale scans cannot add
boxes to another byte revision. The shared colour picker keeps invalid drafts,
keyboard axes, touch targets and focus; its popup stays reachable during zoom.
No dependency was added. Replaced skins and duplicate lifecycle/list code are gone.

384 units, 16 production smoke suites, seven extended suites and privacy/geometry
integrations pass. The focused privacy suite covers 44 panel/theme states, 22
picker states, enlarged text, failure/cancel/retry, mark undo and real erase output.
Native Safari/Firefox pass, including actual Firefox 200% zoom. Evidence and the
portable PDF appendix are recorded in CloakPDF and the main refresh TODO.

Next bounded slice: **Find & Act and Scrub panel interiors**, including real output
and cleanup. Other interiors, shell loading/error/draft banners and other products
remain pending. Physical touch/software keyboards, OS IME and assistive speech
remain open. Continue one validated piece per local commit; no new design approval
is needed. No push or deployment is authorized.

## Previous checkpoint — 2026-10-14

Air 1.0.1 remains the locked baseline. PDF preview recovery is committed as
`a2935ac`; the separately tested AI preparation-cancellation fix is `cf2cbed`.
Retry keeps valid bytes, forms, page plans, OCR review, marks and undo/redo; missing
pages are named, preview memory is bounded, and obsolete render/encode paths are
removed. 384 units, 28 browser suites, 44 new layout/theme states and native
Safari/Firefox recovery pass, including Firefox 200% zoom. Evidence lives in
CloakPDF's dated validation record and `preview-recovery-2026-10-14.json`.

Next bounded slice: **Redact and Smart Erase panel interiors**, including custom
controls and destructive-output checks. General shell loading/error/draft banners,
other tool interiors and the other products remain tracked in `UX_REFRESH_TODO.md`.
Physical touch/software keyboards, OS IME and assistive speech remain open. Continue
one validated, cleaned-up piece per commit; no new design approval is needed.
No push or deployment has occurred.

## Earlier checkpoints

2026-10-13: the user authorized one final agent review followed by implementation.
The review is complete; **Air 1.0.0 is locked**. Do not restart broad design studies
or ask for another design approval. `DESIGN_FREEZE.md` records the decision.

**AIR-04 is committed as `39c08f9`**: the complete Cloakyard homepage imports the
canonical CSS, with open product rows, system typography/themes, in-flow mobile
navigation, focus-safe anchors, KERR exploration links, principles/footer and a
new social image. Legacy font assets, old cards/pipeline/KERR artwork and competing
CSS are removed. The live Shaders renderer is now a separate lazy production
chunk with a finite 900ms arrival, pointer response and complete static fallback.
The design gallery and overlay demo bundles do not enter production.

The local preview is `http://127.0.0.1:8131/` (production build); the development server on port 8130 was stopped after verification.
Existing reference/product servers are untouched. Evidence is in
`evidence/home-2026-10-13.json` and the dated section of `validation.md`.

Passing: check/type/build, 76 layout/theme/text cases, keyboard/menu/Escape/hash/
back-forward/malformed hash/skip-link/coarse target checks, reduced motion/forced
colours, no-JS links, production local-only requests, 13 remote destinations, native
Safari 27.0.1 and Firefox 157.0.1 checks (including real 200% zoom), all five bundles
and 75 portability assertions. See the entry checkpoint below for subsequent PDF
runtime adoption; IMG, Resume and Drop product UI remains unchanged.

The user subsequently instructed **“commit then continue”** after the two remaining
checks were explicitly reported. This authorizes the current local commit with
those gaps documented. Physical-touch and screen-reader speech/navigation remain
unverified; `validated: false` is retained rather than claiming they passed.
Design lock commits: Cloakyard `ea26823`, PDF `e59bcd5`, IMG `0182ec0`, Resume
`b91e39e`, Drop `f507724`. Homepage implementation: `39c08f9`.

Cloakyard now uses the four real local product marks at a consistent 36px. All
22 size/theme cases pass; KERR remains a text exploration link. Sources and update
rules are in `../brand-assets.md`. The user's subsequent shader activation request is implemented in the homepage
hero. Reference and production share `light-runtime.mjs`; the actual renderer is
lazy, finite and capped. Evidence: `evidence/live-shader-2026-10-13.json` and the
recorded pointer-response GIF. Production payload is 294.3 kB gzip with a 350 kB
build ceiling. Physical battery/thermal acceptance remains open.

**CloakPDF entry is committed as `dc20fe6`**: homepage/search, shared navigation/footer, privacy,
file intake, encrypted-file recovery and PWA notices. Check/dead-code, 355 units,
build, 88 layout cases, dev/production search and routing, six synthetic standalone
workflows, mobile editor smoke and serial responsive-motion checks pass. Native
Safari and Firefox 200% checks pass. The original standalone scanned/guide fixtures
are absent; generated demo fixtures were used explicitly. Physical touch/software
keyboard and screen-reader speech remain open. Full evidence is in CloakPDF's
`docs/air/validation.md`; production preview is `http://127.0.0.1:8132/`.

The first migrated product exposed an isolated portability-fixture bug: the fixture
retained product inventory entries without their source files. The canonical test
now selects its bundled CSS entry only; real repository inventory checks remain
complete. All five bundles pass all 75 assertions. Synchronized fix commits: IMG `d6f4cdb`,
Resume `f361733`, Drop `5d79ab9`; PDF includes it in `dc20fe6`. Fresh IMG checks and
470 tests, Resume checks and 288 tests, and Drop asset/Astro check/build all pass.

CloakPDF utility headers, global error boundary and route loading are committed
as `70e0b70`. Recovery copy failure, retry focus, reload, 132 utility header cases
and 88 recovery/loading cases pass. All six synthetic standalone output workflows
and home-to-editor hand-offs pass again. The later constructor checkpoint below
removes the phone orientation overlay; deeper utility/editor surfaces remain pending.

The reusable light lifecycle and its TypeScript declarations are synchronized in
IMG `a894c1d`, Resume `e22f441` and Drop `bb02e6f`; PDF includes them in `70e0b70`.
All 85 portability assertions and each product's applicable checks pass. This
handoff's Cloakyard commit contains the production shader and recorded evidence.
Temporary audit tabs and emulation are cleared; the existing homepage preview
was refreshed to the live shader. Product editor tabs and preview servers remain.

Next: **CloakPDF remaining utility-specific options/results**, then editor chrome, every
panel, canvas and overlays. Continue IMG → Resume → Drop website →
family comparison using `IMPLEMENTATION_PLAN.md`. No further general design
approval is needed. Shared adapters/corrections return to Cloakyard first. KERR
and native macOS UI remain unchanged. No push or deployment is included.

## Latest bounded implementation — PDF constructors

CloakPDF `aba5643`: Merge and Images to PDF share one Air queue with
natural sorting, preserved manual order, explicit/keyboard moves, persistent Undo,
wrapped names and image previews. Shared action/segment/error/progress controls use
the pinned skins; busy actions retain focus/geometry and guard repeated dispatch.
File intake and queue changes are locked during work; late results cannot download
or open an editor after navigation. Obsolete queue skins, motion and the standalone
orientation gate are removed. A crop tool-switch registration defect found during
regression testing is fixed and covered by the existing editor workflows.

Passing: 112 final layout/theme/text cases, six landscape entries, reordered output
page dimensions, sorting/Undo focus, real held-work lifecycle, native Safari/Firefox
200% shared-component checks, 355 units, all six standalone outputs, desktop/mobile
editor smokes, three-fixture placement/preview, extended interactions, routing/motion, build/dead-code/design and
17 portability assertions. Physical touch/software keyboard and screen-reader
speech remain open. Full evidence: PDF `docs/air/validation.md` and
`docs/air/evidence/constructors-2026-10-13.json`.

This constructor checkpoint was followed by the Extract Images slice below. Preview
remains `http://127.0.0.1:8132/`. No user editor tab was reloaded; no push/deployment.

## Prior bounded implementation — Extract Images (2026-10-14)

CloakPDF `b25ae2c`: image selection/results, shared selected-file identity,
full-resolution PNG/ZIP delivery and complete empty/error/busy/recovery states use
Air. Cancel scan aborts obsolete work and releases PDF.js/canvas resources; replacement
survives late callbacks. Busy downloads guard repeated dispatch, preserve geometry
and focus, retain selection on failure and suppress delivery after navigation.
Unused spinner/file-info styles and references are removed. Canonical tokens and
control skins are unchanged; no sibling runtime change is required.

Passing: 176 DOM size/theme/text cases plus representative reviewed screenshots;
Safari/Firefox actual 200% zoom with real extracted images; keyboard, forced colours,
reduced motion, encrypted/corrupt recovery; PNG resolution, full/partial ZIP
names/counts and sampled byte equality, retry and cancellation lifecycle checks.
355 units, all six standalone production flows, check/type, dead-code, production
build/PWA/139-file limits, design inventory/integrity and 17 PDF portability assertions
pass. Explicit synthetic fixtures substitute for absent original scanned/guide PDFs.
PDF evidence is in `docs/air/validation.md` and `evidence/extract-2026-10-14.json`.
Physical touch/software keyboard, screen-reader speech and loaded-model AskPDF
integration remain open. Inventory `validated` remains false.

This checkpoint was followed by Password below. The active checklist is in
`UX_REFRESH_TODO.md`.
PDF preview 8132 and dev 8122 are running. Earlier home/reference servers were not
restarted or verified during this checkpoint. Own test tabs/emulation were cleaned
up; no user tab was reloaded. No push or deployment.

## Previous bounded implementation — Password (2026-10-14)

CloakPDF `5770f7b` completes the Password option/result slice: single-contour Air
fields, inset visibility focus, explicit permissions, detection/corrupt recovery,
one wrong-password error and truthful completion. Busy work preserves drafts,
blocks duplicate dispatch and prevents late output after leaving. Cancelled
security detection cannot replace a newer file. A corrected mismatch clears while
typing; the old input/disclosure/mono/tint code is removed.

Passing: 264 state/size/theme/text geometry observations and 44 final icon geometry
rechecks, reviewed representative screenshots, native Safari/Firefox 200% zoom,
forced colours and reduced motion. Production feature tests verify permission bits,
AES-256, source-stream equality through protection/unlocking, wrong/empty-password
handling, editor handoff and cancellation/replacement. Check/dead-code, 355 units,
all six standalone flows, build/PWA/135-asset limits, inventory, design integrity,
17 portability assertions and canonical synchronization pass. PDF evidence:
`docs/air/validation.md` and `evidence/password-2026-10-14.json`.

This checkpoint was followed by Digital Signature below. Air 1.0.0 remains
unchanged. Physical touch/software keyboard and screen-reader acceptance stay open;
inventory `validated` stays false. PDF preview 8132 and dev 8122 are running.
Own tabs/zoom/emulation and synthetic download were cleaned up, without reloading
user tabs. No push or deployment.

## Previous bounded implementation — Digital Signature (2026-10-14)

CloakPDF `109baea` adopts Air for certificate import/generation, password visibility,
existing/loaded metadata, optional details and result/recovery. It removes replaced
skins, mono/uppercase/tinted presentation, obsolete imports and redundant async state.
Cancellation terminates the crypto worker; new imports complete before an obsolete
read resolves, without a dangling shared-action guard. File replacement, focus,
error-input retention, duplicate dispatch and late output are covered.

Validation exposed and fixed padded signature parsing and Unicode certificate/CMS
issuer encoding. Generated and imported signatures, certificate chains and empty
passwords pass independent OpenSSL CMS verification plus ByteRange, page count and
exact source-stream checks. All six standalone production workflows pass alongside
359 unit tests, format/lint/type, dead-code, build/PWA/129-asset limits, design checks,
17 isolated-portability assertions and canonical synchronization.

484 geometry observations cover every contract size, both themes and 16/32px text
across eleven states. Representative screenshots, forced colours/reduced motion
and native Safari/Firefox 200% zoom are recorded in the PDF validation/evidence files.
Physical touch/software keyboard and screen-reader acceptance remain open;
`validated` stays false. Own test tabs/emulation/downloads were cleaned up.
No user tab reload, push or deployment.

The Compare slice is now complete; see the latest checkpoint below.

## Saved checkpoints

- Cloakyard `0f32115`: shared motion and portable bundle integrity; `b2fbee4`:
  locally bundled Shaders light study. Current reference is served at
  `http://127.0.0.1:8120/docs/air/components.html` while the existing server runs.
- CloakDrop `4124a5b`: complete website baseline source/visual/functional audit and
  opt-in Air bundle. All 18 production source files reviewed; 19 inventory entries
  include the shared CSS. Evidence records 90 layouts, 24 header journeys,
  370 computed text pairs, 12 text-stress cases and 16 reviewed screenshots.
  Dark skip-link contrast and narrow enlarged-text home/404 layouts fail; the
  source-linked audit tracks these as migration requirements. Astro gates pass.
- The 2026-10-12 Cloakyard landing refinement adds native compact navigation,
  relative landing typography, short-landscape composition and a static family
  mark. The validation record contains 96 layout + 96 text-bound cases, keyboard,
  no-JS, touch emulation, field contours and 12 editor-dialog smoke checks.

- The 2026-10-12 dropdown/motion refinement gives all reference selects a shared
  native custom picker, inset arrow, neutral selected row/blue checkmark and
  viewport-constrained scrolling. The light has a stronger finite 900ms sweep;
  completion settles from 8px/.90 over 240ms. Evidence and remaining browser
  support gates are in the select/motion section of `validation.md`. No product
  migration or sibling commit is included in this checkpoint.

- The component-foundations checkpoint makes main-repo ownership explicit in
  `design/air/README.md`, the portable contract and bundle provenance. Both local
  validators are synchronized. Expanded fields/choices have working validation,
  read-only/disabled/multiline states, mixed checkboxes and native radio segments.
  `design/air/COMPONENTS.md` is the component coverage/next-work map. Production
  adoption and user visual sign-off remain open.

- The compound-fields/action-states checkpoint adds clearable template filtering,
  a bounded numeric unit field with visible retained applied value, and explicit
  busy/success/failure/retry/cancel controls. Shared shells preserve one field
  contour, a 44px clear target and stable translated action dimensions. The
  outcomes are simulated; no product file is processed. Evidence is in the dated
  validation section and `air-03-compound-actions-2026-10-12.json`.

- The floating-controls checkpoint adds settings popovers, named/hoverable
  tooltips, equivalent action/context menus, invalid rename and safe remove/restore
  dialogs. 56 viewport/theme/text configurations cover four surfaces each, with
  keyboard/focus journeys, text-stress traversal and lazy-load recovery. Canonical
  React adapters use unstyled Base UI 1.9.0; their generated local reference module
  and licenses are portable. Product runtime imports remain unchanged.

## Next bounded pieces

1. Finish Export and command-palette interiors, then Ask PDF chat/indexing/citations. AI setup/model dialogs, entry, constructors, shared utility controls,
   landscape handling, policy/encrypted/PWA, utility headers and recovery are implemented.
2. Proceed through PDF editor chrome, every tool panel, overlays and exported
   output checks. Then IMG → Resume → Drop website → full-family comparison.
3. Shared corrections return to Cloakyard first and propagate as a pinned revision.
   Run available required feature/build/design checks before each local commit;
   record physical-device/assistive follow-ups without reporting them as passed.

The commit-all checkpoint is saved: PDF `f960092`, IMG `2a639c4`, Resume `5367f46`
and Drop `9340c6d`; Cloakyard's reference is `340aee8`, followed by the implementation
plan checkpoint. Each repository passed its applicable gates before commit.
Resume's fresh full serial suite passes **288/288 in eight files, 386.58s**, with
zero skips or weakened assertions/timeouts. This supersedes the previous failing
latest-run gate. Historical intermittent failures are not claimed fixed; entry
failure capture now preserves UI state/screenshots before rethrowing. The complete
log is committed in Resume's `docs/air/evidence/precommit-suite-2026-10-12.log`.
All runtime Air adoption and product-specific migration gates remain open.

The task's CloakDrop preview server was stopped and its browser tab closed.
Temporary Air audit tabs/viewport/touch/media/font overrides were restored or
closed. Existing user/reference/editor servers and the user's Air tab remain.

Final base portable checkpoints (2026-10-13): PDF `dea80e8`, IMG `68b0828`, Resume
`4fb514c`, Drop `f44a492`; the Cloakyard commit containing this handoff owns the
canonical change. Contract `c6ec55c0fe59`, CSS `80fb336bb4eb`, collection module
`0bbea11f0a18`. All checks pass; Resume's complete serial gate is 288/288 in
386.12s. Evidence and five reviewed screenshots are in the collection section of
`validation.md`. Next: close the candidate's visual review, then AIR-04.

## Latest bounded implementation — Compare (2026-10-14)

CloakPDF `f1d99d5`: both input regions, persistent file identities, comparison modes,
page/difference controls, thumbnail navigation and recovery now use Air. Different
page sizes retain their geometry. Cancellation closes both PDF.js tasks; partial
failures, replacement and unmount release canvases and every temporary URL. The
shared mobile-editor page stepper adopts Air and drops obsolete size/variant props.

Passing: 366 units, six expanded standalone production workflows, desktop/mobile
editor smoke, format/lint/type/dead-code, build/PWA/128-asset limits, design integrity,
17 isolated portability assertions and canonical sync. 484 layout observations,
representative pixel review, 44px coarse controls, forced colours/reduced motion
and native Safari/Firefox 200% zoom pass. Two proof screenshots are committed;
the larger local set is referenced by the compact evidence record. No dependencies
or shared contract changes. Physical/assistive gates remain open. No push/deploy.

Next: AI setup/model-management components and consent, followed by Ask PDF chat
and then the editor. The user explicitly asked to continue after Compare and keep
the codebase lean: remove replaced code and unused APIs, inspect actual consumers,
run dead-code checks, avoid unnecessary abstractions/dependencies and record bundle
cost per piece. Use the central TODO; do not count setup-only work as full AI migration.

## Latest bounded implementation — AI setup and dialogs (2026-10-14)

PDF `74e32ed` implements setup/tier selection and one complete-bundle loader.
PDF `747aa44` implements the shared Air modal frame, consent/progress/error,
model details/storage actions, tier picker and loaded-model bar. Pointer dialogs
retain focus/inertness through exit; keyboard/reduced motion is immediate. Safari
Tab traversal and trigger return, explicit memory release/reload, cancelled warm
loading, IDB transaction failure and pending tier reset are corrected.

268 layout cases, both themes, enlarged text, coarse targets, forced colours and
native Safari/Firefox 200% zoom reviewed. Required checks, 366 units, real AI
questions/extraction/warm-return/switch/reload, storage failure/retry, modal stacks,
command palette, responsive motion and three-fixture editor features pass. No new
dependencies; 791 net production lines removed. Ask PDF is 596.20/179.08 kB raw/gzip.
Only two proof PNGs and compact evidence/log enter Git. Larger local captures live
in the task's `air-ai-modals` visualization directory; model-picker captures include
private fixture replies and must not be published. No push or deployment.

Next: **Export dialog interior**, then **command palette interior**, followed by
Ask PDF chat/indexing/citations and every remaining editor surface. The user called
out modals explicitly; finish those interiors before returning to chat. Their shared
frame is implemented, not their full migration. Physical-device/assistive speech
acceptance stays open. Preserve the lean-code and validate-before-commit workflow.

## 2026-10-14 — Export interior checkpoint

PDF `5f8ab8c` migrates all six Export formats, PDF modifiers, compression
segments, progress/error/retry and the compact trigger. Native Air choices replace
numbered ledgers and accent strips. Export retains settings and focus on failure;
duplicate work is guarded. Existing processing is not cancellable, so dismissal
is protected with explicit status until settlement. Global document shortcuts
cannot escape a modal; the command palette keeps its toggle shortcut.

320 layout cases pass across all Air sizes, 640/1024px neighbors, light/dark and
16/32px root text. Safari/Firefox native keyboard and actual 200% zoom inspected.
Real outputs cover all formats/modifiers and combinations, exact source/history
preservation, grayscale pixels, form flattening, metadata removal and redaction
across every format. Required checks, 366 units, build/PWA, dead-code and applicable
modal/editor/output suites pass. No dependencies or contract changes. Obsolete
Export styles, helper and imports removed. Compact evidence plus two synthetic
proof PNGs live in PDF's `docs/air/evidence/`; larger captures stay local.

Next bounded slice: **command palette interior** — search, grouped/selected/empty
results, key hints, scrolling and safe handoffs. Then Ask PDF chat/indexing/citations,
followed by remaining editor chrome/canvas/panels. Physical touch/software-keyboard
and assistive speech acceptance remain open. Commit only after the same validation
and cleanup gates; no push or deployment is authorized.

## 2026-10-14 — Command palette checkpoint

PDF `343bc00` completes the next modal interior: Air compound search, neutral
result rows, readable category labels/hints, phone sheet and empty recovery. IME
filtering/confirmation, fresh reopen and focus return across replaced desktop/mobile
triggers are covered. Old numbered/mono/tinted styling and reset effects are removed.
No dependency or portable-contract change. Editor JS decreases 0.19 kB gzip; CSS
adds 0.23 kB gzip. Compact evidence and two synthetic-document screenshots are saved
in PDF's `docs/air/evidence/palette-2026-10-14.json` and adjacent proof files.

192 palette layouts, 366 units, required checks/build/dead-code/portability and real
command/history actions pass. Export outputs (320 layouts), AI states (192 layouts),
modal stack and responsive motion regressions pass. Native Safari/Firefox keyboard
and actual 200% zoom inspected. Physical touch, software keyboard, real OS IME and
assistive speech acceptance remain open; no full-product migration claim.

Next bounded slice: **Ask PDF chat, indexing, citations and recovery**, then remaining
editor chrome/canvas/panels/overlays. Continue removing replaced code, validate real
features and all required sizes/themes before each local commit. No push/deployment.

## 2026-10-19 — Active-work PWA safety checkpoint

PDF `c3d3264` completes the integration gap found during acceptance reconciliation.
The local Workers server started for the 404 checks has been stopped; pre-existing
PDF preview 8132 and dev 8122 were preserved. Native Safari/Firefox review tabs were
closed and Firefox zoom restored. All new evidence uses disposable local content.
This session also committed previews/OG (`02552f1`) and recovery (`82762c4`), with
root checkpoints `c5660e5` and `d67c503` plus this handoff save. No push/deployment.
