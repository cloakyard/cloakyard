# Cloakyard Air — full UX refresh

Status: **active — four-app Air 1.2 artwork/chrome implemented locally; web cleanup software-validated locally; remaining acceptance and rollout open; CloakIMG last** · Direction: **Air** · Started: **2026-10-11**

Resume from [the saved handoff](docs/air/RESUME.md), starting with its **Start here in a new conversation** section. It records current commits, the exact next piece and the remaining rollout. Earlier dated “Next” suggestions below are historical; reconcile them with the newest checkpoint before repeating work. The
[implementation plan](docs/air/IMPLEMENTATION_PLAN.md) defines rollout order,
commit slices and acceptance gates. Detailed design review is complete. AIR-04 is committed as `39c08f9`; CloakPDF entry
is committed as `dc20fe6` after local verification. Remaining device acceptance and deeper product
surfaces stay open. Cloakyard v1.0.1 and CloakPDF v2.0.0 are released and production-verified.

Goal: refresh the complete web family, preserve all features, enforce one portable
design language, and commit each bounded piece only after its validation passes.
KERR's app and native macOS UI are outside this redesign. The user authorized
Cloakyard/PDF dev integration, main PRs and releases, followed by CloakDrop RC1
publication, its Air website deployment, and the app-colour deployment. Cloakyard,
PDF and Drop are live with their logo-coloured horizons; main/dev integration is
complete. Continue Resume/IMG locally until their remaining migrations pass; IMG
remains last. On 2026-10-21 the user authorized final dependency updates, dev
integration and dev → main PR merges after all remaining work is complete, with
deployment preparation. This supersedes older local-only notes for that final
sequence, without closing any unresolved acceptance gate.
The separately requested Drop installer now uses Air.

## Four-app web cleanup audit — 2026-10-26

- [x] Trace current modules/exports, dependencies, custom CSS and asset/build/test consumers.
- [x] Restrict PDF/Resume Tailwind scans; remove Resume's dead grid rule, orphaned
      data attributes and unused exports. Preserve live preflight font mappings.
- [x] Record zero-issue Knip graphs and explicit entry points without a new dependency.
- [x] Complete final feature/output verification: 834 tests, 16 PDF smoke suites,
      552 family layouts, 58 exact render pairs and four exact PDF export pairs.
- [x] Record passing local commits (PDF `63781c3`, Resume `a4f7b95`, Drop `678bf2a`)
      and stop all six task-owned previews. Yard is this checkpoint. See [audit](docs/air/code-cleanup-2026-10-26.md).
- [ ] Preserve remaining product/device/export acceptance before rollout; keep IMG parked/last.

## Resume Storyline and four-app chrome — 2026-10-26

- [x] User approved implementation; ship the finite Storyline with immediate entry,
      pause/replay, static/hidden/offscreen/resize/unmount handling and no draft access.
- [x] Air 1.2.0 owns shared header/footer geometry, type, marks and neutral links.
      Correct Yard/PDF/Drop/Resume and privacy/recovery routes; remove obsolete skins.
- [x] Pass 1,104 Chrome/Firefox layouts, 824 link states / 256 keyboard checks,
      rendered desktop/laptop/phone light/dark and native Safari spot review.
- [x] Pass Resume 373 tests, 349 entry layouts / 14 journeys, 68 artwork layouts
      and eight animated arrivals; PDF 461 units / 16 smoke suites / 68 artwork;
      Drop 432 site layouts / 34 journeys / 68 artwork; Yard/shared checks.
- [x] Refresh Resume PWA/README/OG captures; record cleanup/evidence and local commits.
      Preserve IMG's parked draft; validate portable maintenance in isolation.
- [ ] Complete remaining physical/assistive/hardware and prior full-product/export
      acceptance. Rollout remains a separate stage; no push/deploy in this piece.

[Audit and evidence](docs/air/storyline-family-2026-10-26.md). The prior audit's
32px mark exception was mistaken and is superseded by this correction.

## Family public-page comparison — 2026-10-25

- [x] Compare Cloakyard/PDF/Drop against Air 1.1.0; correct typography, gutters,
      compact headers, focus contours, neutral links and policy cadence.
- [x] Verify 480 Chrome/Firefox layouts, 596 link states / 202 keyboard checks,
      rendered desktop/laptop/mobile light/dark and native Safari spot review.
- [x] Recheck applicable features: PDF 461 units, 16 smoke suites, 66 recovery
      and 68 artwork layouts; Drop 432 site layouts / 34 journeys and 68 artwork
      layouts; Yard horizon/runtime/portable checks. All pass.
- [x] Remove superseded CSS, add reusable family regression, record independent
      product evidence and passing local commits (see latest handoff).
- [x] Prepare a separate animated Resume “storyline” study for visual review.
- [x] Approve Resume's new motif before production implementation (2026-10-26). Preserve its
      remaining full-product/export follow-ups; IMG remains last.

[Findings, evidence and scope](docs/air/family-comparison-2026-10-25.md).
Physical/assistive/hardware acceptance stays open. No push/deployment in this piece.

## Product landing artwork — 2026-10-25

The user approved the PDF page unveiling and Drop falling file pixels after
interactive visual review. Implement PDF first, then Drop; other product artwork
remains exploratory. Local commits are authorized. This piece does not deploy.

- [x] Add the approved material/motion rules to Air 1.1.0 and
      synchronize the portable specifications without changing other app UIs.
- [x] PDF: anchored front page, rear-sheet unveiling, immediate existing PDF
      input/editor handoff, finite/reduced/hidden lifecycle and shader cleanup.
- [x] Drop: falling square pixels, distinct file/package/disc/archive forms,
      visible pause/resume, static/no-JS fallback and shader cleanup. Preserve
      factual copy/download/install links; move the real screenshot below the hero.
- [x] Validate desktop/laptop/tablet/mobile light/dark, enlarged text, keyboard,
      coarse input, reduced/forced colours, visibility and all applicable features.
- [x] Record evidence, cleanup and passing local app commits: PDF `f6a2503`,
      Drop `3755dcc`. Each app has `docs/air/evidence/product-artwork-2026-10-25/`
      and a validation record. PDF: 461 units, 16 smoke suites, 68 artwork layouts;
      Drop: 432 site layouts/34 journeys, 68 artwork layouts/four forms. Both pass
      link conformance, fallbacks, lifecycle and native Chrome 200% zoom. Physical,
      assistive and final family cross-browser acceptance remain open.
- [x] Update 29 CLI-managed global/project skill installations with `npx`.
      Remove unavailable IMG `docs-react`, as explicitly requested; retain
      repository-owned custom skills and the parked IMG UI draft. See
      [skill maintenance](docs/air/skills-2026-10-25.md).
- [x] Finish the shared contract, evidence and handoff. Commit consumer maintenance:
      Resume `89a2ba3` (373 tests), IMG `6e5a974` (470 tests in an isolated staged
      snapshot). Both pass lint/build; IMG's parked design draft remains uncommitted.

The two production horizons, shader build emitters, obsolete GPU tests and current
website references are removed. Canonical shader studies remain for other apps.
Drop's pixel script is 1.94 kB gzip; neither app gains a runtime dependency.
Other landing motifs still need their own visual approval. No push/deploy here.

## Neutral content links and hover — 2026-10-19

- [x] Audit all links, including content/installation/privacy links, and remove
      blue text from resting and hover states in Cloakyard/Drop.
- [x] Air 1.0.6 defines neutral text, inline underlines, angled cues and blue focus
      outlines; shared reading/reference styles and all portable copies agree.
- [x] Add a portable all-link colour/hover/focus browser check and extend Drop's
      full website matrix to catch content-link drift.
- [x] Visual/feature gates, bounded commits and production verification pass.
      Root/PDF/Drop are live: 162 matching assets, 580 live link-state checks and
      202 keyboard checks. Resume/IMG stay local; the parked IMG draft is preserved.

Evidence: `docs/air/neutral-links-2026-10-19.md`.

## Approved hyperlink treatment — 2026-10-19

- [x] Restore the approved angled hyperlink cue throughout the family, including
      lower source links; preserve forward action/download/back/disclosure semantics.
- [x] Correct Drop's blue Source cascade and footer-credit drift. Check compact
      menus; apply neutral navigation/credits in IMG's parked draft too.
- [x] Air 1.0.5 records the user's explicit preference and supersedes 1.0.4.
- [x] All checks and bounded commits pass. Root/PDF/Drop corrections are live
      through PRs #13/#205/#41; 162 matching files and 72 live layout/link cases
      pass. Resume/IMG remain local; parked IMG draft is preserved.

Evidence: each repository's `docs/air/hyperlinks-2026-10-19.md`.

## Landing navigation arrow consistency — 2026-10-19 (superseded)

- [x] Standardize forward arrows across header/content/footer links: straight right,
      including outbound links. Keep meaningful back/download/disclosure icons.
- [x] Fix Cloakyard and PDF shared/recovery headers, Resume header/footer and the
      parked IMG header draft. Drop already complies. Preserve destinations/targets.
- [x] Air 1.0.4 owns the rule; remove the shared gallery's diagonal glyph and hover.
- [x] All five pass 110 required viewport/theme cases plus ten enlarged-text cases;
      compact menu/Escape, focus and reduced motion pass. Navigation captures reviewed.
- [x] Required checks pass; bounded commits saved. Root/PDF correction deployed
      through PRs #12/#204, with 145 matching live files and 48 live layout/text
      cases. Resume remains local;
      IMG contract committed, header integration preserved in the parked draft.

Evidence: each repository's `docs/air/link-arrows-2026-10-19.md`.

## App-coloured landing horizons — 2026-10-19

- [x] Apply the user-selected scope of all five landings: Cloakyard/PDF blue,
      Drop teal, Resume green and IMG coral, using their original logo stops.
- [x] Air 1.0.3 owns artwork-only theme tokens; shader and static SVG share colour.
      Preserve neutral UI, shared focus, finite motion and output data.
- [x] Validate 60 responsive/theme cases and ten real GPU theme checks; inspect
      desktop/laptop/phone in both themes. Root runtime/type/build, PDF 461 units /
      68 horizon layouts / 16 smoke suites, Drop 432 layouts / 34 journeys / six
      fallbacks, Resume 303 production tests and IMG 470 tests / GPU fallbacks /
      exact PNG RGBA export pass. Exact sync and standalone portability pass.
- [x] Add IMG's missing horizon as a bounded piece, preserving its parked refresh
      draft. Full IMG migration remains pending and last; Resume wheel is next.
- [x] Deploy Cloakyard/PDF/Drop colours after explicit authorization: dev → main PRs
      #11/#203/#40, all CI/builds pass; 162 matching live files, 36 responsive/theme
      cases, six GPU themes and PDF six actual output workflows pass. Evidence in
      each deployed repo: `docs/air/brand-deployment-2026-10-19.md`. RC artifact unchanged.
- [ ] Publish Resume/IMG colours with their completed migrations; both remain local.
- [ ] Physical GPU/battery/thermal and spoken assistive acceptance remain open.

Evidence: each repository's `docs/air/brand-horizons-2026-10-19.md` and adjacent
`evidence/brand-horizons-2026-10-19/`.

## Working rules

- `[ ]` pending, `[-]` in progress, `[x]` complete with evidence. A new document or
  token file does not mean the app is migrated. Do not check off untested states.
- Every UI source is tracked in [the surface inventory](docs/air/surface-inventory.md).
  Add newly discovered routes, custom components and states before implementing.
- Every code piece follows implement → inspect → feature-test → record → commit.
  Test failures and unavailable tests stop that piece's commit. Keep unrelated
  user changes out. Never substitute a screenshot for functional verification.
- Per-app migrations may need several commits. Complete shared foundations first;
  carry any shared corrections back to all migrated apps before advancing.
- After the initial Air refinements land, include a legacy-design cleanup pass in
  each migrated piece before its validation and commit. Track remaining findings
  in Phase 7; replacing a screen does not finish its migration while obsolete
  design code or authoritative references remain.
- Evidence belongs in `docs/air/validation.md`; large screenshots may stay in
  task-owned output with exact paths recorded. Record actual viewport/theme/state.

## CloakDrop RC and Air installer checkpoint (2026-10-19)

- [x] Review September 6/10 release naming, artifact and verification conventions.
- [x] Latest compatible website dependencies and CI actions (`27953ff`); clean install/tree,
      zero audit findings, asset sync/check/build/dry run and no-transform local responses.
- [x] User explicitly retains the official yt-dlp bundle and documented frozen-runtime
      exception; TypeScript6 remains supported. No custom runtime dependency added.
- [x] 626 optimized core tests / 87 suites; fresh arm64 Debug/Release, strict lint and
      localization pass. Website 432 layouts / 34 journeys and horizon GPU/six fallbacks pass.
- [x] User-requested Air installer (`df413b2`): regular typography, canonical light
      palette, open composition, finite-artwork horizon and native drag targets preserved.
      Normal Finder layout, 20 inventory records, 18 portability checks and exact sync pass.
- [x] Prepare local `CloakDrop-v1.0.0-rc.1.dmg`, build20261019: 48,181,551 bytes,
      SHA-256 `c363dc38e9cd48ade60b74458f0f3f83c5dd666f60332af274134086556c9471`.
      RC documentation `a870941`. Direct DMG launch/About, actual checksum transfer, helper loading, 295 file/link
      comparisons, strict signatures and filesystem verification pass. Exact FFmpeg9.0.2
      source/licenses included; release draft, manifest and checksums saved.
- [x] Explicitly authorized RC publication: tag `v1.0.0-rc.1`, release notes and both assets
      published with matching SHA-256 digests; publication evidence `6ac533f`.
- [x] Explicitly authorized Air website deployment: pushed `codex/air-refresh` at `6ac533f`,
      successful Cloudflare build, version `f99e2602` promoted to 100% traffic. Live
      18 byte-matched responses/no-transform, 432 layouts/34 journeys, GPU/six fallbacks
      and desktop/laptop/phone light/dark review pass. Evidence commit `8ce17f9`.
- [x] Integrate Drop Air source into dev and main through PR #40 (`5ee9a01`);
      production colour version `38ca8179` verified at 100% traffic.
- [ ] Candidate remains ad-hoc and unnotarized; Developer ID/App Group/device/assistive gates remain open.

Evidence: Drop `docs/audits/2026-10-19-{dependencies,installer,rc.1}.md` and
`docs/releases/v1.0.0-rc.1.md`, plus the website deployment audit and
`docs/air/evidence/deployment-2026-10-19/`. Resume wheel is next; IMG remains parked last.

## Release checkpoint and landing follow-up (2026-10-19)

- [x] Cloakyard dev → main [PR #9](https://github.com/cloakyard/cloakyard/pull/9), production build and [v1.0.0 release](https://github.com/cloakyard/cloakyard/releases/tag/v1.0.0). Exact live asset hashes, 12 production responsive/theme cases, menu/Escape and no-JS pass.
- [x] PDF dev integration and [PR #201](https://github.com/cloakyard/cloakpdf/pull/201); 459 initial units, 16 production browser suites and real PWA update integration pass.
- [x] Fix the 79 high CodeQL findings locally: private test evidence directories and escaped portable-reference values. Fresh 461 units, reference logic/browser, canvas/AI modal/PWA and portability checks pass; no security gates weakened.
- [x] Remote CodeQL passes after `cab22ba`; all 79 high findings cleared without exceptions.
- [x] PDF’s canonical landing horizon (`62161d9`): 68 layouts, real GPU/fallbacks, 461 units, 16 smoke suites, 44-layout PWA integration and Safari rendered/navigation review pass.
- [x] PDF #201 CI and main merge `41273ae`; live built-asset hashes and true 404 pass.
- [x] Production payload integrity: root PR #10/main `6bd318f`, PDF #202/main `4277829`, all CI/deploy checks pass. Both live sites serve `no-transform` without injected analytics/challenge scripts. Live asset hashes, home 12 layouts, PDF six output workflows/68 horizon layouts/GPU lifecycle and four editor captures pass. Published Cloakyard v1.0.1 and CloakPDF v2.0.0.
- [x] CloakDrop page horizon `0cdd8fd`: 432 layouts, 34 journeys, real GPU lifecycle/six fallbacks, Safari, Astro build/check and portability pass. Subsequently deployed and production-verified in `8ce17f9`.
- [x] Resume CloakResume logo/photo controls (`9cc74df`).
- [x] CloakResume colour wheel software acceptance complete; local checkpoint recorded in the handoff. IMG remains last.

Evidence: `docs/air/evidence/releases-2026-10-19/`. Physical/device gates remain open.

## Latest bounded piece — CloakResume résumé review (2026-10-21)

- [x] Air persistent frame/loading, neutral four-tab report, full captions/findings/labels and semantic data colours. Close stays reachable; tab anchors are stable across report lengths.
- [x] Preserve numeric scoring, keyword counts, report ordering, the 25-finding cap/remaining count and complete Parse text. Retire obsolete shells, scan decoration/delay, ignored props and wide-dialog aliases.
- [x] Actual known/unknown/compressed progress, completion-only timestamps, duplicate scan guard, retry and stale-edit handling. Keyboard/resize focus, JD/field handoffs, nested save failure and swipe/cancel pass.
- [x] 1,154 layouts and 14 contrast pairs across required sizes/themes/text/input modes. Native Safari and Firefox actual 200% reviewed; own tabs closed and zoom restored.
- [x] 349/349 production tests in 9 files, zero skips; 165 editor cases and all 34 template/paper cases × five fixtures. Check/build, 80-source inventory, 18 portability and exact sync pass. Runtime/dist frozen during suite.
- [x] All 34 before/after output images/geometry and actual A4/Letter PDF rasters match. Evidence: Resume `docs/air/evidence/resume-review-2026-10-21.json`; local checkpoint `ed2a25d`.
- [ ] Next: compact Options sheet and export controls, then PWA/static recovery and actual assets. Physical/assistive gates remain open. No push/deploy; IMG stays last and parked.

## Previous bounded piece — CloakResume template library (2026-10-21)

- [x] Shared Air wide dialog/sheet, labelled search and neutral selection; readable metadata precedes all 17 actual previews. Filtering preserves stable dialog geometry.
- [x] Name/description/level/category matching, composition, clear/no-results, selected state, untouched sample fallback and content-only drafts preserved.
- [x] Background inertness, keyboard wrap/return, nested save-error and emulated swipe/cancel pass. Fixed responsive toolbar remount and focus return after losing a compact opener.
- [x] 386 distinct layouts and eight contrast pairs, desktop/laptop/tablet/phone, themes, enlarged text, coarse/fine and forced colours. Native Safari and Firefox actual 200% reviewed.
- [x] 338/338 production tests in eight files, zero skips; 158 editor cases and all 34 template/paper cases × five fixtures. Check/build, 79-source inventory, 18 portability and exact family sync pass. Runtime/dist stayed frozen during the serial suite.
- [x] All 34 before/after template images/geometry and actual A4/Letter PDF rasters match; document colour, JSON and output retained.
- [x] Local checkpoint `5a001e5`; evidence in Resume `docs/air/evidence/template-library-2026-10-21.json`; appendix, inventory and validation updated.
- [ ] Next: all four review panes, then overflow/export/PWA/static recovery and actual assets. Physical/assistive gates remain open. No push/deploy; IMG stays last and parked.

## Previous bounded piece — CloakResume content sections (2026-10-21)

- [x] Complete source/empty/populated acceptance for all 13 sections. Award/Certification year fields and Stats/Extras pairs use content-aware reflow; imported strings and separate arrays/IDs remain intact.
- [x] Neutral Target JD notice and Air Analyze action, including native Safari opener focus return; associated Profile help. Removed the unused legacy uppercase/mono label skin.
- [x] 1,666 distinct layouts, 16 contrast pairs; 130 JD rechecks after final icon correction. Desktop/laptop/tablet/phone, short landscape, themes, enlarged text, coarse/fine, forced colours, Safari and actual Firefox 200% reviewed.
- [x] 323/323 production tests in eight files, zero skips (443.4s); 143 editor cases and all 34 template/paper cases × five fixtures. Check/build, 79-source inventory, 18 portability and exact family sync pass. Runtime/dist stayed fixed during the serial suite.
- [x] All 34 before/after template captures/geometry and both actual A4/Letter PDF rasters match. Existing JSON, rich text, dates, photo/logo, CSV, hints, reorder/removal and restore workflows preserved.
- [x] Local checkpoint `b75eb76`; inventory, product appendix, validation, proof captures and handoff current. Evidence: Resume `docs/air/evidence/content-sections-2026-10-21.json`.
- [ ] Next: template library, then review/overflow/export/PWA/static recovery and actual assets. Physical input/IME/assistive gates remain open. No push/deploy; IMG last and parked.

## Previous bounded piece — CloakResume writing hints (2026-10-21)

Local implementation/evidence commit: Resume `f334b66`. No push or deployment.

- [x] Air hint trigger/popover, full phrase/reason, neutral explicit replacements and visible close. Shared viewport positioning, immediate opening and responsive touch targets.
- [x] Six real grammar-field consumers preserve exact first-match replacement, rich text, later occurrences and saved data. Escape/close/Tab/outside dismissal and disappearing-trigger focus pass. Review jumps now focus the named field; Target JD stays outside the grammar scan.
- [x] Retired duplicate placement/animated presence, tiny mono/uppercase chips, tinted actions, unused .popover skin and decorative field-glow animation.
- [x] 452 responsive/theme/text/edge cases, 26 contrast pairs; Safari and Firefox actual 200%. All 34 template/paper captures and both exported PDF render comparisons match exactly.
- [x] Full 318/318 production tests in eight files, zero skips, stable build; 138 editor cases and all 34 template/paper cases. Check/build/79-source design/18 portability/exact sync pass. Evidence: Resume `docs/air/evidence/writing-hints-2026-10-21.json`.
- [ ] Next: remaining content-section interiors and complete section acceptance, then template/library/review/overflow/export/PWA/static recovery and actual assets. Full Resume and physical/assistive acceptance remain open. IMG last.

## Previous bounded piece — CloakResume primary colour (2026-10-21)

Local implementation/evidence commit: Resume `a31e681`. No push or deployment.

- [x] Canonical Air HSV wheel, Brightness, exact hex and optional native precision ranges; all ten presets and original stored colours preserved.
- [x] Shared desktop/compact portal, short/visual viewport handling, keyboard/focus, pointer rollback and independent phone swipe/cancellation. Removed duplicate HSL/lightness code and unused colour event bridge.
- [x] 195 responsive/theme/text/edge cases, 14 contrast pairs; Safari and Firefox actual 200%. All 34 template/paper captures and both Poppler-rendered PDF exports match the baseline exactly.
- [x] Full 310/310 production tests in eight files, zero skips; 130 editor cases and all 34 template/paper cases. Check/build/79-source design/18 portability/exact sync pass. Evidence: Resume `docs/air/evidence/colour-controls-2026-10-21.json`.
- [x] Writing-hint follow-up completed as `f334b66`; remaining scope is tracked in the latest checkpoint.

## Previous bounded piece — CloakResume logo/photo (2026-10-19)

- [x] Air Profile/Skills logo search and photo controls, unknown imported values, exact bytes, existing validation/race/cancellation and focus. Commit `9cc74df`.
- [x] Stable touch target geometry, shared date/logo viewport placement, forced-colour selection and obsolete cr-control removal.
- [x] Full 303/303 in eight files, 372.83s, zero skips; 123 editor and 34 template/paper cases. 320 layouts, 20 contrast pairs and 256 date regressions; Safari/Firefox 200%, forced/reduced and emulated touch pass.
- [x] Check/build/78-source design/18 portability/exact sync; eleven PNGs and compact evidence/checks in Resume `docs/air/evidence/logo-photo-2026-10-19.json`.
- [ ] Next: shared colour wheel, remaining sections/hints/review/library/export/PWA/static recovery and actual preview assets. Human/device gates remain open. IMG last.

## Previous bounded piece — CloakResume partial dates (2026-10-19)

Resume `648842d` completes MonthYearField, Experience Current job and Education
Present. The full product remains in progress.

- [x] Air date fields, separate clear targets, popup and neutral selection grid; responsive date/role pairs and a 44px Current job row. Remove old date skins and exclude Air popups from legacy skin/focus rules.
- [x] Preserve imported raw strings, month/year/year-only/empty/Present, prior-end restoration and output. Include out-of-range imported years in the picker.
- [x] Restore focus after disappearing clear/year controls, support nested Escape and non-modal Tab exit, keep closing controls inert and popup content reachable on short/enlarged screens.
- [x] 256 layouts, 20 selection/clear journeys, 52 contrast pairs, emulated touch cancel, forced colours/reduced motion, native Safari and Firefox actual 200%. Full 300/300 tests in eight files, zero skips; 120 editor and all 34 template/paper cases.
- [x] Check/build/78-source design/18 portability/exact sync pass. Six proof PNGs and compact evidence/log: Resume `docs/air/evidence/date-controls-2026-10-19.json`; full local records `/tmp/cloakresume-air-dates/`. No dependency, template, output or schema changes.
- [ ] Next: logo search/profile photo, then wheel, remaining sections/hints/review/library/export/PWA/static recovery and preview assets. Physical/device gates remain open. IMG stays last.

## Previous bounded piece — CloakResume contact and native selects (2026-10-19)

Resume `9d4e7f9` completes contact fields and the shared native select. The full
product remains in progress.

- [x] Air labels, fields, validation and entry headings; preserve all nine contact kinds, exact values, input/autofill semantics and imported custom proficiency.
- [x] Use canonical native selects and content-sized field pairs. Remove the legacy nested contact skin, uppercase labels and duplicate select arrow. Preserve browser/OS fallback menus.
- [x] 128 responsive/theme/text layouts, 20 keyboard/popup journeys, 28 contrast pairs, forced colours, native Safari and Firefox actual 200%. Full 298/298 production tests in eight files, zero skips; 118 editor and all 34 template/paper cases.
- [x] Check/build/78-source design/18 portability/exact sync pass. Six proof PNGs and compact evidence/log in Resume `docs/air/evidence/contact-selects-2026-10-19.json`; full records in `/tmp/cloakresume-air-selects/`. No dependency, template, output or schema changes.
- [ ] Next: month/year dates, Experience Current job and Education Present; then logo/wheel, remaining sections, hints/review/library/export/PWA/static recovery and preview assets. Physical/device gates remain open. IMG stays last.

## Previous bounded piece — CloakResume repeated entries (2026-10-19)

Resume `bcbf8ff` implements open repeated-entry headings/actions, empty/Add guidance
and full-width nested bullets. The complete product remains in progress.

- [x] Consolidate three bullet editors and duplicate removal state; remove obsolete sub-card skins and compact/stack flags. Saved schema/output remains unchanged.
- [x] Stable UI-only keys preserve duplicate bullets, selection and formatting through moves. Guarded boundary actions, contextual names, announcements, Escape and survivor/Add recovery retain predictable focus, including Safari pointer activation.
- [x] Contain live announcements in their list; enlarged phone panes cannot scroll their hidden parent blank. Confirm remains visible at the action.
- [x] 640 populated/confirmation layouts, 240 empty layouts, 37 contrast pairs, forced colours/reduced motion, native Safari and Firefox actual 200%. Full 297/297 production tests in eight files, zero skips; 117 editor and all 34 template/paper cases.
- [x] Check/build/design/18 portability/exact sync pass. Six proof PNGs and compact evidence are in Resume `docs/air/evidence/repeated-entries-2026-10-19.json`; full local records in `/tmp/cloakresume-air-entries/`.
- [ ] Next: contact fields/native selects and custom proficiency values, then remaining date/logo/wheel/section, hint/review/library/export/PWA/static recovery and preview assets. Physical/device gates remain open. IMG stays last.

## Previous bounded piece — CloakResume writing fields (2026-10-19)

Resume `4ba267c` migrates shared text/CSV/textarea and rich formatting. The full product remains in progress.

- [x] Air labels/help/validation, single field contour, readable touch input and 44px formatting/hint targets. Remove empty hint reserves, compact size flags and superseded CSS.
- [x] Preserve rich text, selection/caret, auto-grow/scroll, raw CSV, title limits and saved/output data. Retire stale field handlers so deleted bullet text cannot be resurrected by formatting.
- [x] 384 layouts, 32 contrast pairs, invalid/selected/forced-colour states, native Safari and Firefox actual 200%. All 290 production tests pass in eight files with no skips, including 110 editor cases and all 34 template/paper cases.
- [x] Check/build/design/18 portability/exact sync; no dependency or output-source change. Preserve legacy contact's independent clipping/validation assertions while asserting Air's field contour directly.
- [ ] Repeated-entry and bullet chrome, reorder/removal identity/focus, select/contact/date/logo/wheel, hint popups/review/templates/export/PWA/static recovery and actual preview assets remain open.
- [ ] Physical keyboard/touch/IME, spoken assistive and hardware gates remain open. IMG stays parked and last.

## Previous bounded piece — CloakResume editor shell (2026-10-19)

Resume `30696b5` implements the editor frame and navigation; the complete product remains in progress.

- [x] Air header/actions, original 32px mark with 44px link, 72px rail, 360/420px writing-panel frame, section picker and paper/view choices.
- [x] Keep preview zoom/scroll/pinch/100%/Fit available in a separate dock. Preserve compact equal panes, expanded preview and skip navigation; support short landscape side by side and remove the rotation blocker.
- [x] Retain keyboard focus across compact section handoffs. Fix genuine 320px formatting/bullet containment by wrapping the three action rows, preserving original feature assertions and 44px targets.
- [x] 324 layouts, ten complete 13-section/zoom/paper journeys, 60 contrast pairs, native Safari and Firefox actual 200%, forced colours and emulated pinch. All 287 tests in eight files pass with no skips; all 107 editor and 34 template/paper cases still run.
- [x] Remove retired shell styles, rotation code and unused shell/brand tokens. No new dependency or template/PDF/font/data source change; check/build/design/18 portability/exact sync pass.
- [ ] Shared writing fields are implemented above; continue repeated entries, every section, widgets/wheel, library/review/export, PWA/static recovery and OG/PWA/README assets. Ready Offline remains oversized at enlarged text and belongs to the pending PWA slice.
- [ ] Physical touch/software keyboards, OS IME, spoken assistive and shader hardware gates remain open. CloakIMG stays parked and last.

## Previous bounded piece — CloakResume entry and recovery (2026-10-19)

Resume `eda6df6` adopts Air on the start page, privacy, confirmations and render recovery.

- [x] Preserve blank/sample/import/browser-restore; validate files before guarded replacement, retain drafts on cancellation/error, disable duplicate pending reads.
- [x] In-flow compact menu, short-landscape entry, Safari opener focus, keyboard/inert recovery, privacy swipe/cancel and honest saved-draft error recovery.
- [x] 341 layout cases, 14 journeys, 124 measured contrast pairs; native Safari and Firefox actual 200% zoom; finite horizon/reduced/offscreen/unmount checks.
- [x] Full 288-test production pass, including 107 editor cases and all 17 templates × A4/Letter × five fixtures; check/build/design/18 portability/exact sync pass.
- [x] Remove retired entry/privacy/proof/reveal CSS and correct historical audit authority. Keep the optional shader out of the offline shell. No template/output/font source or dependency change.
- [x] Editor shell and section navigation followed in the checkpoint above; interiors, widgets/review/PWA/preview assets remain open.
- [ ] Physical touch/software keyboard, OS IME, spoken assistive and physical GPU/battery acceptance remain open. IMG stays last and parked.

## Previous bounded piece — Complete CloakDrop website (2026-10-19)

Drop `e5f2bac` implements all three static routes and the 1200×630 OG card.

- [x] Shared Air home/header/footer, in-flow compact navigation, product/privacy/install groups, source-derived policy contents and true 404 recovery.
- [x] Preserve download/release/platform/signing guidance, policy meaning/revision and every native screenshot/logo byte. Swift/native UI is unchanged.
- [x] Remove legacy palette/fonts, overlay menu, repeated stats, unused components/icons and reveal/scroll-progress code. No production dependency added.
- [x] Pass 432 layout observations, 34 journey records, 374 contrast pairs, 18 active-policy destinations, no-JS/reduced-motion/forced-colour/history checks, asset sync/Astro check/build/design/18 portability/exact sync.
- [x] Inspect desktop/laptop/tablet/phone light/dark, enlarged text and OG; native Safari and Firefox actual 200% zoom/keyboard/recovery pass. Fix the native Firefox anchor focus issue before commit.
- [ ] Physical touch and spoken assistive acceptance remain open. This earlier website-only checkpoint did not certify native delivery; later RC and production edge evidence are recorded above.
- [x] Resume entry/recovery followed in the checkpoint above; its full editor is next. CloakIMG remains last and parked.

## Previous bounded piece — PDF software acceptance and revised rollout (2026-10-19)

PDF `b9d67a9` closes the final software acceptance matrix. The user revised the
remaining order: **CloakDrop website → CloakResume → CloakIMG last**.

- [x] Both shipped AI tiers × both verified original fixtures; real initial/warm loading, grounded facts, keyboard tier swap/cancel, generated summary and memory release/reload.
- [x] 256 model-picker layout cases and 192 synthetic modal cases; 459 units/47 files, code/dead/build/131 assets/design/18 portability gates pass.
- [x] Correct stale model/backend/cache-size references and harness consent/cleanup; no production behavior, styling or dependency change.
- [x] Reconcile Phase 3 software/output checks against PDF `docs/air/acceptance.md`; preserve dated evidence and distinguish cached runs from fresh downloads.
- [ ] Physical touch/software keyboard, OS IME, spoken assistive, physical QR scanning and shader hardware acceptance remain open. Other inference hardware/engines are unverified.
- [x] Finish Drop website (`e5f2bac`).
- [ ] Finish Resume, then IMG. A small IMG landing/import draft is parked uncommitted; it is not a completed slice and must be fully revalidated when resumed.

## Previous bounded piece — PWA active-work safety (2026-10-19)

PDF `c3d3264` fixes reproduced loss of a pending editor draft on Update now.

- [x] Defer updates in editor/standalone work, explain save/download/home, preserve Later and return-home availability.
- [x] Guard other-tab activation and editor handoffs racing the delayed reload; preserve future notices after initial cache feedback.
- [x] Real waiting-worker, pointer/keyboard, metadata Save/export, two-tab, standalone queue and race checks; 44 responsive/theme/text cases.
- [x] 459 units/47 files, sixteen production smoke suites, code/dead/build/design/18 portability, root checks and exact sync.
- [x] Inspect desktop/laptop/tablet/phone light/dark, 320px enlarged text and forced-colour/reduced-motion captures; save evidence and update acceptance map.
- [x] Final supported AI tier/device matrix and real-model runs completed in `b9d67a9`; Drop website is next. Human/device acceptance remains open.

## Latest bounded piece — Static recovery and acceptance map (2026-10-19)

PDF `82762c4` replaces the retired static Workbench page with a build-owned Air
entry and preserves true 404 responses after installation.

- [x] Shared pinned CSS, original mark, useful safe path text, skip/home links and no-JS recovery.
- [x] 66 responsive/theme/text cases, installed routes, valid offline entry, all required checks, 458 units, sixteen smoke and seven extended suites.
- [x] Inspect desktop/laptop/tablet/phone light/dark, Safari light/home and Firefox actual 200%/home.
- [x] Map broad Phase 3 to dated evidence in PDF `docs/air/acceptance.md`; retain human/device gates.
- [x] Reproduce and protect real PWA update with active editor/standalone work (`c3d3264`); remaining AI software acceptance and IMG stay next.

## Latest bounded piece — Install previews and OG design (2026-10-19)

PDF **`02552f1`** replaces legacy PWA/README images with real Air editor captures
in both themes. A composed OG card uses the actual editor, original mark and local
Air CSS; metadata/alternatives and the default manifest surface now agree.

- [x] Publish four synthetic-document captures; inspect desktop/laptop/tablet/phone light/dark and the 1200×630 OG card.
- [x] Remove old device-named assets/references; simplify the OG generator and document reproducible capture.
- [x] Pass 458 units, six standalone output workflows, routing/search, 176 tool selections and 176 responsive layouts; built manifest, 9 PNG paths/bytes and Chromium installability pass.
- [x] Pass required code/dead/build/asset/design/portability/root/six-document sync checks and save evidence.
- [x] Static recovery and broad Phase 3 evidence mapping completed in `82762c4`; PWA active-work integration remains next.

## Previous bounded piece — Tool registries and session lifecycle (2026-10-19)

PDF **`00bdee0`** removes redundant standalone flags/filter/lazy aliases,
derives complete route maps and rejects unknown/inherited tool ids. Session ownership
prevents queued work after exit and retires late transform previews. No dependency added.

- [x] Pass 456 units, 25 browser suites, 176 tool selections, 176 navigation layouts, 141 recovery captures and 70 N-up layouts/23 real output sheets.
- [x] Review desktop/laptop/tablet/phone light/dark and production Stamp→Metadata Save/Undo. Preserve device/assistive acceptance gates.
- [x] Update canonical/portable PDF rules, authoritative contributor references and the 91-source inventory; record cleanup and test evidence.
- [x] PWA/README screenshots, OG design and metadata completed in the newer preview checkpoint. Full-PDF acceptance and family rollout remain open.

## Previous bounded piece — Air foundation and Select (2026-10-19)

PDF **`7bed615`** removes the old token/palette layer and two unused UI fonts.
Root surfaces, typography and layering now use Air directly. Select retains full
labels and immediate interaction; document fonts and real output remain preserved.
Details and remaining gates are in the final AIR-07 checkpoint and handoff.

- [x] Pass 453 units, 25 browser suites, 70 N-up layouts/23 real output sheets and 141 recovery captures.
- [x] Inspect desktop/laptop/tablet/phone light/dark, enlarged text, Safari and Firefox actual 200%; retain device/assistive acceptance gates.
- [x] Update portable PDF requirements and the 91-surface inventory; remove obsolete runtime style references without new dependencies.
- [x] Non-visible registry/lifecycle consumers audited in the latest checkpoint. Full-PDF acceptance and IMG/Resume wheel adoption remain open.

## Previous bounded piece — Editor wrappers/history (2026-10-19)

PDF **`b9738c0`** retains history focus and protects busy history actions. N-up uses
PrimaryAction directly; unused provider/history APIs and WholeDocPanel are removed.
The canonical disabled-icon fix is synchronized across the family. Details and
remaining gates are in the final AIR-07 checkpoint and [handoff](docs/air/RESUME.md).

- [x] Pass 453 units, 25 distinct browser suites, required code/dead/build/design/portability and responsive/native-browser review.
- [x] Preserve earlier inventory evidence, record the 91 current surfaces and commit the bounded PDF piece.
- [x] Shared bundle commits after required checks: IMG `aa9f6f8`, Drop `0a3a5b5`, Resume `286f57b`.
- [x] Legacy CSS and output-font exceptions audited in the foundation checkpoint below; registry/lifecycle consumers remain next.
- [ ] Physical touch/software keyboard, actual OS IME and spoken assistive acceptance remain open; full PDF/family migration is unfinished.

## Previous bounded piece — Annotate inspector (2026-10-15)

PDF **`0c30b05`** adopts Air tool/style groups, full-width font selection, colour,
switch and precise numeric controls. Selected text/shapes/icons expose their actual
settings through a custom cross-page selector. Deferred style/nudge commits are
owned by the live payload; mobile Apply waits and failed work remains recoverable.

- [x] Preserve all drawing modes, repeat icon stamping, inline text, geometry, keyboard nudging and embedded fonts; verify vector output, selectable text, metadata and attachments.
- [x] Validate per-object fill/glyph editing, raw invalid drafts, cross-page selection, deletion focus, coalesced Undo/Cancel, Apply failure/wait/retry/dedup and Undo/Redo.
- [x] Inspect 110 responsive/theme captures, 18 enlarged-text states and forced colours/reduced motion; no horizontal overflow or undersized coarse-pointer controls.
- [x] Native Safari font-menu/inline-text/validation/Apply/Undo and Firefox actual 200% pointer placement/custom selection/glyph editing/Done/Undo pass. Review tabs closed and zoom reset.
- [x] Remove retired RangeField, StyleToggle/FontControls skins and selected-card styling; retain verified live form/N-up adapters. No new dependency.
- [x] Pass 429 units, 24 browser suites, check/dead/build/design/17 portability/exact sync. Update legacy smoke selectors and wait for export-modal exit in rotation test; full reruns pass without weakening output assertions.
- [x] Subsequent Fill form (`7c8723d`), Auto-fill (`58ac944`) and N-up (2026-10-14 checkpoint; revalidated in `b9738c0`) are recorded below.
- [ ] Physical touch/software keyboard, actual OS IME and assistive speech acceptance remain open.

Editor 96.56 kB gzip (+0.19); CSS 24.78 (-0.43). Canonical PDF appendix and portable
DESIGN synced; Air 1.0.1 unchanged. Evidence: PDF `docs/air/evidence/annotate-2026-10-15*`.
The full PDF/family migration remains unfinished. Local commits only.

## Previous bounded piece — QR / barcode (2026-10-15)

PDF `2c3b901` adopts Air type/content/colour/caption controls, associated encoding
errors and neutral preview surfaces. Keyboard Place/select/move/resize/remove shares
PlacementActions with signatures. Edge placement retains quiet zones; mixed-page
copy preserves proportions. Awaited Apply/mobile Done keeps failed work recoverable.

- [x] Verify QR module/quiet-zone pixels on three actual mixed-page vector exports, barcode captions and original text/catalog preservation.
- [x] Validate Unicode/invalid/over-capacity/long payloads, settings retention, cross-page selection, removal, copy, Apply failure/retry/dedup, Undo/Redo and Cancel.
- [x] Inspect 88 responsive/theme captures, 12 enlarged-text views and forced-colours/reduced-motion; coarse/fine targets and no horizontal overflow pass.
- [x] Native Safari placement/Apply/Undo; Firefox custom selection and Done at actual 200% zoom pass. Reset zoom and close temporary review tabs.
- [x] Remove retired Segmented measurement/observer/animation code and QR skins; deduplicate signature adjustment buttons. No dependency added.
- [x] Pass 429 units, 24 browser suites and check/dead/build/design/17 portability/sync gates. An initial modal timing sample failed; unchanged isolated retry and the full clean smoke run pass.
- [x] Subsequent Annotate, Fill form, Auto-fill and N-up pieces are recorded below. Remaining legacy cleanup is tracked in the latest checkpoint.
- [ ] Physical touch/software keyboard, OS IME, assistive speech and final-size real-device scan acceptance remain open.

Editor 96.37 kB gzip (+0.47), CSS 25.21 (-0.04). Canonical PDF appendix and portable
DESIGN synced; Air 1.0.1 unchanged. Evidence: PDF `docs/air/evidence/codes-2026-10-15*`.
Full PDF/family migration remains unfinished. Local commits only.

## Previous bounded piece — Editor loading and saved-session recovery (2026-10-15)

PDF `8b181bf` unifies file intake, loading, measured preview progress,
errors, saved sessions and processing with Air. Failed restores retain the original
and retry action; stale reads/draft lookups and results after exit cannot replace
newer work or leak thumbnails. Reused status/progress controls; removed old spinners,
coloured banners, intake skins and the one-use restore wrapper. No dependencies.

- [x] Validate corrupt-file retry/tool intent, measured progress, restore failure/retry/dedup/focus, discard isolation, late file/hash results, StrictMode and exit during open/restore.
- [x] Review 141 captures across eleven sizes, light/dark, verified coarse/fine pointers and enlarged text; keyboard scroll access, forced colours and reduced motion pass.
- [x] Pass 429 units, 26 browser suites, check/dead/build/design/17 portability checks and exact sync; record evidence.
- [x] Rerun native Safari/Firefox file selection/loading; recovery retry passes in both, Firefox at actual 200% zoom.
- [x] Diagnose one Safari stall: visibility hidden, one waiting animation frame, file reads complete, preview encoding not started. Visible runs finish; no speculative rendering change.
- [ ] Physical touch/software keyboard, OS IME and assistive speech acceptance remain open.
- [ ] Next: QR/barcode payload/type/caption/placement/Apply controls, then annotation/form interiors and remaining legacy cleanup.

Editor 95.90 kB gzip (-0.37), CSS 25.25 (-0.25). Canonical product appendix and
portable DESIGN synced; Air 1.0.1 unchanged. Evidence is in PDF's dated validation
and `docs/air/evidence/editor-recovery-2026-10-15.json`. Full migration is unfinished.

## Previous bounded piece — Bates numbering (2026-10-15)

PDF `9a4b56a` implements Air affixes/minimum-digit segments, shared position/colour
controls, nine-digit sequence entry and Size/Margin precision. Shared formatting
and Courier geometry protect complete, selectable identifiers; byte-owned previews,
awaited Apply/mobile Done, failure retry, Undo/Redo, re-arm and Cancel pass.

- [x] Replace the legacy panel/stage and remove StampTools, ColorRow and duplicate position types after checking consumers.
- [x] Validate real output, digit growth, fit/encoding/sequence errors, raw-draft retention and recovery.
- [x] Inspect 44 size/theme regions, twelve enlarged-text cases, forced colours/reduced motion and Firefox actual 200% workflow.
- [x] Pass 429 units, 25 browser suites, check/dead/build/design/17 portability assertions/exact sync; record evidence and commit.
- [x] Follow-up in shell checkpoint: native opening and visible Bates Apply pass. One reproduced stall reports a hidden document and suspended animation frames; earlier stalls have no complete trace.
- [x] Follow-up in shell checkpoint: native chooser opens the synthetic PDF and reaches the editor; the disabled state is no longer reproduced.
- [ ] Physical touch/software keyboard, OS IME and assistive speech acceptance remain open.

No dependencies added; Editor +0.33 kB gzip, CSS +0.03. Canonical product appendix
and portable DESIGN synced; Air 1.0.1 unchanged. Full PDF/family migration remains
unfinished. Next: **shell loading/error/restored-draft states**, starting with native
loading diagnostics, then QR/barcode and remaining annotation/form interiors.
Evidence: PDF `docs/air/evidence/bates-2026-10-15.json` and dated validation record.

## Previous bounded piece — Header & footer (2026-10-15)

PDF `f467a87` completes Air grouped text fields, explicit token insertion, shared
Stamp field/clock controls, precise Size/Margin and validated output. All 420 units
and 26 browser suites pass; 44 size/theme regions, twelve enlarged-text cases and
native Safari/Firefox (actual 200% zoom) reviewed. Old panel/token paths removed;
no dependencies added. Required checks/build/dead/design/portability pass. See the
dated AIR-07 checklist and PDF evidence. Next: Bates and remaining editor/shell
states. Physical device/assistive acceptance and full PDF/family migration stay open.

## Previous bounded piece — Page numbers (2026-10-15)

PDF `b7e0c69` completes the Air Page numbers interior, shared precision controls and
position picker. All 412 units and 26 browser suites pass; 44 size/theme regions,
twelve enlarged-text cases and native Safari/Firefox reviewed. Dead-code checks,
build and portable spec checks pass. Details and remaining gates are in the dated
AIR-07 checklist below and PDF's validation record. Next: Header & footer, then
Bates and remaining shell states. Full PDF/family migration remains open.

## Previous bounded piece — Bookmarks (2026-10-15)

- [x] Finish Air rows, persistent title/page/nesting labels, reorder/remove recovery and responsive controls.
- [x] Validate targets without clamping, retain drafts through failure/tool/viewport changes and retire applied drafts.
- [x] Own/cancel heading detection by exact bytes; preserve manual work on error/no result/cancellation.
- [x] Protect unapplied overlays before contents insertion; verify nested outlines, multiple contents pages, links and Undo.
- [x] Inspect required sizes/themes, keyboard, enlarged text and native browsers; run required checks, output tests and dead-code audit before commit.
- [ ] Next separate piece: Attach. Read failure must differ from empty; retain failed file selections. Audit Unicode/duplicate display names, name-tree identity, nested Kids and safe removal of embedded bytes.

Committed as CloakPDF `3163a35`. Evidence: `docs/air/evidence/bookmarks-2026-10-15.json` and dated validation record.
390 units, 25 browser suites, all required layouts/themes, boundary neighbors and native
Safari/Firefox (actual 200% zoom) pass. Replaced skins/control imports, target clamping
and unused outline properties removed; no dependencies. Physical/assistive gates remain open.

## Previous bounded piece — Metadata and date/time (2026-10-15)

PDF commit: `76b2d42`.

- [x] Migrate the document report, editable properties and complete custom calendar/time picker.
- [x] Verify read failure/retry, byte ownership, draft retention, clear/save/undo and mobile Done.
- [x] Inspect required sizes/themes, calendar targets, keyboard/nested menus, enlarged text and native engines.
- [x] Remove replaced skins/dead references; lint/types, dead-code, 384 units, build, 16 smoke suites,
      seven extended suites and focused metadata/date acceptance pass. Evidence is recorded in CloakPDF.
- [ ] Physical touch/software keyboards, actual OS IME and assistive speech remain pending.
- [ ] Next: Bookmarks and Attach. Replace silent page clamping with explicit validation; retain
      drafts through detection/apply failures; ignore stale scans; inspect nested outline and contents-page
      output/undo. Attach must distinguish failed reads from empty lists, retain chosen files on failure,
      verify name-tree removal/duplicate names and attachment bytes, and test every viewport/theme.
- [ ] Continue auditing remaining tool callbacks that return before asynchronous Apply settles,
      shell loading/error/draft banners, legacy controls, unused styles and dangling selectors.

## Initial implementation checkpoint (2026-10-13)

The user authorized one final glance followed by implementation. The delegated
review is complete and Air 1.0.0 is locked. The gallery navigation correction
passes phone/tablet/desktop in both themes. AIR-04 now imports the canonical
bundle and implements the complete Cloakyard directory. See the dated validation
record for passing checks and the two outstanding device/assistive checks; do not
claim those passed. The user subsequently authorized committing this local piece
with the device checks recorded, then continuing the rollout.

- [x] Define a recognisable family composition/material/selection language beyond a generic card grid.
- [x] Tighten optical spacing, typography, icon alignment, radii, fields and elevation rules.
- [x] Define light and dark as equally deliberate themes, including every interactive state.
- [x] Build reviewable landing/editor/custom-control examples across desktop, tablet and phone.
- [x] Specify purposeful playful motion with exact timing, interruption, keyboard and reduced-motion rules.
- [x] Validate the representative refined reference and synchronize the portable contract and bundle; [coverage and remaining gates](docs/air/validation.md).
- [x] Refine landing text enlargement, compact navigation and short-landscape composition;
      validate container/text bounds, native no-JS navigation and preserve single-contour fields.
- [x] Refine dropdown anatomy and the actual open picker: inset chevron, shared
      option surfaces/checkmark/focus, disabled rows, keyboard behavior, viewport
      scrolling and enlarged select text. Validate reference, tool, paper and export
      selects. See the 2026-10-12 select/motion evidence.
- [ ] Validate the custom select in target browser engines; where native
      `base-select` is unavailable, adopt an established accessible adapter and
      verify the same Air appearance before any production rollout.
- [x] Strengthen the finite light arrival and completion acknowledgement; verify
      both themes, responsive rendering, interruption, keyboard immediacy, idle
      behavior and reduced motion. User visual review remains open.
- [x] Establish Cloakyard as the explicit canonical source; document inheritance,
      pin bundle provenance to the exact contract, and reject mismatched revisions.
      Synchronize both standalone validators and use a content-versioned stylesheet URL.
- [x] Refine field/choice anatomy and working states, including validation recovery,
      read-only/disabled/multiline, mixed checkbox groups and native radio segments.
      Shared component typography is relative; single-contour focus is preserved.
      See [component refinement matrix](design/air/COMPONENTS.md) and validation evidence.
- [x] Add compound search/clear/unit fields and an explicitly simulated action-state
      study for busy/success/error/retry/cancel. Validate stable geometry, keyboard
      focus, single contours, invalid drafts, retained applied values and long labels.
      See the 2026-10-12 compound-fields/action-states evidence.
- [ ] Validate real production async adapters: duplicate submission, cancellation,
      stale results/races, truthful progress and preserved work on failure. The
      manual state study defines appearance and interaction, not real file processing.
- [x] Build real popover, tooltip and action/context-menu specimens with Air
      surfaces and accessible primitive behavior. Validate 56 size/theme/text
      configurations, invalid rename, safe confirmation, focus handoffs and recovery.
      See the 2026-10-12 floating-controls evidence; sample actions are local only.
- [x] Define and validate collection rows, long names, filtered selection, custom
      Select, explicit reorder, rename, reversible removal and history; 76 layout
      cases, 16 nested-dialog cases and six model tests. Submenu Escape and stacked
      dirty-draft confirmations preserve focus and work.
- [ ] Repeat nested overlays/Select on real product operations, physical touch,
      software keyboards, assistive technology and Safari/Firefox.
- [x] Package floating and collection references as independent lazy modules with licenses,
      content revisions, failure/retry handling and standalone integrity guards.
- [-] Extend relative typography and enlarged-text validation through shared fields,
  custom controls, editor chrome, dialogs and the reference documentation controls.
  Shared primitive specimens and enlarged export traversal now pass; custom
  editor chrome/controls remain. Preserve document/canvas output dimensions;
  do not mistake root-font stress for browser zoom.
- [x] Add explicit privacy/long-reading and recovery-page compositions to the reference,
      using the same navigation, reading measure, action hierarchy and both themes.
      Validate 136 viewport/theme/text combinations, keyboard/no-JS navigation,
      retained work, save/restore, exact text download and unsaved navigation.
      See the 2026-10-13 reading/recovery evidence; product policies and real
      persistence/processing adapters still require their own validation.
- [x] Define and exercise shared file intake/progress in a standalone reference:
      real browse/text reading, drop/paste handler parity, same-file reselection,
      invalid selection preservation, known/unknown progress, cancellation/retry,
      late-result guards and focus recovery. Validate 68 viewport/theme/text cases,
      27 interaction observations and nine lifecycle tests. Study interruptions
      are labelled; actual product formats and engines remain rollout gates.
- [ ] Validate file adapters in real products: encrypted/corrupt PDF, HEIC/HEIF
      including empty MIME types, batch images, résumé JSON/schema/draft protection,
      clipboard permissions, resource disposal, export and processing failures.
- [x] Consolidate the final base candidate and map every remaining check to its
      owning implementation in [DESIGN_FREEZE.md](docs/air/DESIGN_FREEZE.md).
- [x] Review and lock the detailed system before product migration; user-authorized final review 2026-10-13.
- [x] Start AIR-04 immediately after lock: shared runtime foundation and the complete
      Cloakyard home, including KERR link-only treatment, legacy cleanup and all gates.
      No further broad specimen pass is planned.
- [x] Build the actual Shaders-based Air light treatment: custom overlapping
      planes, deliberate pointer response, finite arrival and local assets.
      Light/dark and all seven viewport classes pass the reference checks.
      Reduced motion, still artwork and simulated unsupported/constrained graphics
      retain the fallback. See the recorded motion evidence.
- [ ] Review and approve the working light treatment before locking the system.
      Measure physical-device GPU/battery/thermal behaviour, Safari/Firefox and
      slower-network startup; the 369 kB gzip study payload is not yet a production
      budget approval.
- [x] Validate shared-reference press/hover, sheet/dialog interruption, completion
      feedback, keyboard immediacy, focus and live reduced-motion changes. All 42
      PDF/IMG/Resume dialog viewport/theme cases pass. See [motion review](docs/air/motion-review.md).
- [ ] Repeat motion validation on production adapters and real touch devices;
      cover Safari/Firefox and layered overlays. Reference tooltips/popovers now
      have keyboard/hover/reduced-motion checks. Shader local startup,
      idle and visibility checks pass; physical-device costs remain open.
- [x] Refine Resume's study from the full section audit: rich writing, repeated
      entries and partial dates; replace speculative formatting controls with
      actual template/primary-colour/paper choices and preserve direct export/save.
      Representative study validated; full product templates, nested bullets and
      import/export remain product migration gates. See the validation record.
- [x] Remove superseded cues and unused code from the current Air reference:
      obsolete light geometry, unused rail spacer, old workspace class naming,
      duplicate inline motion handlers and timing literals. Record the search scope.
- [ ] Repeat legacy-design searches and cleanup throughout each app as it migrates,
      including custom components, styles, assets, dependencies and documentation.

## Phase 0 — scope, baseline, and full-surface audit

- [x] Confirm Air direction and create the persistent refresh goal.
- [x] Inspect clean git state and create isolated feature branches in all five repos.
- [x] Read existing design contracts and repository instructions.
- [x] Inventory UI files and existing test/build commands.
- [x] Baseline format/lint/type checks: Cloakyard, PDF, IMG, Resume.
- [x] Baseline Drop site check/build.
- [x] Baseline required unit/logic suites: PDF 355/355, IMG 470/470 and Resume
      288/288 including browser/template tests. See the 2026-10-12 checkpoint.
- [ ] Investigate any recurrence of Resume's historical entry/focus/export timing
      failures without weakening assertions. Latest serial suite passes 288/288
      in 386.58s; the earlier 286/288 result is superseded. Entry failure capture
      now saves UI state/screenshots before rethrowing; no root-cause fix is claimed.
- [x] Inspect representative real Resume/PDF/IMG editors before further design; [audit and limits](docs/air/existing-editor-audit.md).
- [-] Inspect PDF desktop/laptop/mobile editor, every tool panel, standalone utilities and overlays. All 22 default panels inspected at desktop/light and phone/dark; date picker and conditional signature/annotation states inspected. Remaining states/utilities are tracked in PDF’s `docs/air/editor-audit.md`.
- [-] Inspect IMG desktop/laptop/mobile editor, every tool panel, custom colour/curve controls and AI states. All 26 default desktop/light panels and 25 phone/dark tools inspected; selected layer, colour DOM and AI consent audited. Remaining states and the Cancel/re-entry finding are tracked in IMG’s `docs/air/editor-audit.md`.
- [-] Inspect Resume desktop/laptop/mobile editor, every section, template/ATS/format/export overlays. All 13 populated sections measured at desktop/laptop/tablet/phone in both themes; date/year, logo, colour, options, template search and all four review tabs inspected. Tablet touch targets and small contact typography need migration fixes; remaining states/exports are tracked in Resume's `docs/air/editor-audit.md`.
- [x] Inspect Drop website, download flow, privacy page and 404 at every layout
      class. Completed baseline: 90 layouts, 24 header journeys, 370 text pairs,
      12 enlarged-text cases and source review of all 18 production files. Findings
      remain migration work; see Phase 6 and Drop's `docs/air/website-audit.md`.
- [ ] Inspect narrow/landscape phone handling, software keyboard and 200% zoom.
- [ ] Audit focus/keyboard/touch, reduced motion, dark mode and long-content cases.
- [ ] Record findings with source locations and concrete validation coverage.

## Phase 1 — portable Air contract and enforcement

- [x] Write the complete family contract: foundations, custom controls, states, layouts, accessibility, motion and exceptions.
- [x] Replace/create each repository's DESIGN.md, including Drop's website specification.
- [x] Preserve domain invariants and output-format exceptions in product appendices.
- [x] Add exact-copy contract synchronization and drift checks; no sibling dependency at runtime.
- [x] Add canonical versioned tokens and shared CSS component primitives (opt-in; product migration pending).
- [ ] Map existing token/Tailwind aliases to Air; eliminate competing palettes/type/radius scales.
- [-] Add a portable component reference covering controls and all applicable states. Representative editors are reviewable; full custom-widget/state coverage remains.
- [x] Enforce adoption instructions for current and future apps through repository guidance.
- [x] Add static conformance checks with a narrow documented content/visual-data exception list.
- [-] Add CI/local validation entry points and screenshot baseline policy. Contract/inventory CI is installed; runtime style and screenshot gates follow with the shared bundle.
- [x] Validate the opt-in bundle in isolated directories: all five products pass
      contract/token/HTML/module integrity plus negative drift checks. The latest
      checkpoint adds overlay-bundle cases; counts are in the validation record.
      Flat and nested-site references load their own CSS, motion and shader assets
      in the browser. No app dependencies or sibling checkouts are needed.
- [ ] Validate portable production integration as each app adopts the bundle.
- [x] Commit the verified contract/reference foundation in all five repositories; see ledger.

## Phase 2 — Cloakyard family home

- [x] Apply shared typography, surfaces, controls, navigation, focus and spacing.
- [x] Replace the technical hero/pipeline with the Air promise and restrained light treatment.
- [x] Refresh product rows; retain correct destinations, platform, status and privacy truth.
- [x] Use each product’s real local SVG mark at a consistent 36px; verify eleven dimensions in both themes.
- [x] Replace KERR's entire illustrated preview with a concise exploration link.
- [x] Refresh principles, footer, mobile navigation and long-link handling.
- [x] Keep source, author, licence, privacy and family links correct.
- [x] Update metadata/theme colour, social artwork and README where affected.
- [x] Inspect every specified viewport plus dark/reduced-motion/no-effect fallbacks.
- [x] Validate all links/anchors, keyboard focus, initial/return hash navigation and no runtime errors.
- [x] Check/type/build, 76 layouts, Chromium journeys, Safari/Firefox and 13 destination checks pass.
      Physical touch and screen-reader interaction remain open; user authorized the local commit with those gaps recorded.
- [x] Recheck the actual Shaders reference: six size/theme cases, finite arrival/pointer response,
      idle rest, reduced-motion no-download, offscreen disposal and unavailable-GPU fallback.
      Production SVG arrival passes desktop/phone with and without reduced motion.
- [x] Activate the real shader in the homepage hero following the user's explicit request.
      Production checks: 22 size/theme cases, idle/device cleanup, native Safari,
      294.3 kB gzip lazy chunk, 350 kB enforced ceiling; local graphics timing recorded.
- [ ] Complete physical mobile GPU/battery/thermal acceptance for the live shader.
      Viewport emulation and queue-fence timings do not complete this device gate.
- [ ] Complete physical touch and screen-reader navigation and record results.

## Phase 3 — CloakPDF reference product

Reconciled 2026-10-19 against PDF `docs/air/acceptance.md`. Checked implementation
items retain their documented human/device gates; they do not imply full acceptance.

- [x] Landing, file input, searchable toolkit rows, policy, common navigation/footer and encrypted-file recovery.
      88 layout cases, search/routing, synthetic standalone workflows and mobile editor checks pass.
- [x] Update/offline notices use shared Air states; twelve layout/theme/text cases and busy focus verified.
- [x] Global error boundary, route loading and standalone utility header/recovery adapters.
      132 utility header + 88 recovery/loading cases, keyboard recovery and all six
      synthetic standalone output workflows pass; physical/assistive checks remain.
- [x] Standalone utility outer shell and requirement/eligibility headings.
- [x] Merge/Images constructors: shared queue, sorting/manual order, explicit/keyboard moves,
      removal/Undo, busy/error/result states and guarded editor/download delivery.
      112 layouts and actual reordered outputs pass; physical/assistive gates remain.
- [x] Shared utility actions, segments, errors/progress and responsive landscape entry.
      All six non-AI workflows, desktop/mobile editor and interaction checks pass.
- [x] Extract Images and shared selected-file identity: native selection, thumbnails,
      PNG/ZIP output, empty/recovery, measured scan cancellation and guarded downloads.
      176 geometry cases, real output/lifecycle regressions and native 200% zoom pass.
- [x] Password options/results: Air fields, explicit permissions, detection/recovery,
      guarded work, true output feedback and immediate mismatch correction.
      264 state layouts + 44 final field geometry checks, native 200% zoom and
      encrypted/decrypted output fidelity pass; physical/assistive gates remain.
- [x] Digital Signature options/results: shared Air certificate controls, metadata,
      trust disclosures, cancellation/recovery and independently verified output.
      484 geometry observations, native 200% zoom, Unicode/CMS/source fidelity and
      dead-code checks pass; physical/assistive gates remain.
- [x] Compare inputs/results: Air file context, modes, page navigation and recovery;
      cancellable rendering and complete resource cleanup. Committed `f1d99d5`.
- [x] AI setup and model tiers: native Air choices, bundle estimates and one loading owner (`74e32ed`).
- [x] AI consent/progress/error, details, cache actions, model switching and shared
      modal frame implemented (`747aa44`); 268 layouts, real model lifecycle and
      cross-browser keyboard/zoom reviewed. Physical/assistive gates remain open.
- [x] Ask PDF chat, measured indexing, source-page links and recoverable errors;
      448 layouts, real model lifecycle and native browser zoom pass.
      Physical/assistive acceptance remains open; see the completed slice below.
- [x] Editor compact toolbar, tool rail/search, mobile picker and shared page stepper.
- [x] Properties panel, page context, overview grid and thumbnails; physical/assistive gates remain open.
- [x] Canvas surround, document shadow, selection handles, text selection, zoom/pan and context overlays.
- [x] Shared actions, fields, selects, segments, colour picker, date/time, signature and callouts.
- [x] Every editor panel listed in the surface inventory, including advanced/disclosed controls.
- [x] Export modal: all six formats, native choices, PDF modifiers and busy/error/retry
      implemented (PDF `5f8ab8c`); 320 layouts, real outputs/redaction and
      keyboard/zoom pass. Physical/assistive acceptance remains open.
- [x] Modal coverage: shared frame and AI consent/model choice/details implemented.
      Export and command-palette interiors are implemented (PDF `5f8ab8c`, `343bc00`);
      editor recovery/toasts and active-work PWA safety are implemented (`c3d3264`).
      Physical/assistive acceptance remains open.
      Entry and editor/standalone PWA integration are covered by real waiting-worker tests.
- [x] Mobile tool picker, canvas/panel split, expanded preview, short-height and landscape behaviour.
- [x] Feature sweep: annotate, signatures, stamps, crop/rotate/resize, organise/reorder/duplicate/delete.
- [x] Feature sweep: redaction/smart erase, metadata/scrub, forms/autofill, links/bookmarks/attachments, OCR.
- [x] Standalone sweep: merge, images→PDF, extract images, compare, password, digital signature, Ask PDF.
- [x] Verify undo/redo, cancellation, replacement/close, file errors, encrypted PDFs and long documents.
- [x] Verify exported PDF/image content and document fidelity; retain destructive-operation disclosures.
- [x] Run check, dead-code, all units, build, applicable smoke/extended/AI browser suites.
- [x] Inspect desktop/laptop/tablet/phone light/dark, keyboard, emulated coarse input/reduced motion and native 200% zoom; dated scope is in the PDF acceptance map.
- [ ] Physical touch/software keyboard, OS IME, spoken assistive, physical QR scanning and shader hardware acceptance.
- [x] Update PWA/social screenshots and preview documentation (`02552f1`), static recovery and installed routing (`82762c4`).
- [x] Record software evidence and commit each verified piece through `b9d67a9`.
- [ ] Complete remaining human/device acceptance; software checks do not certify these gates.

## Phase 4 — CloakDrop website

- [x] Complete the existing-site baseline source/visual/functional audit: 18 production
      sources plus the opt-in Air stylesheet, 90 normal layout cases, 24 header journeys,
      370 opaque-background text pairs and 12 enlarged-root-font cases. Evidence in
      `cloakdrop/docs/air/website-audit.md`; this does not mark production as migrated.
- [x] Resolve the baseline dark skip-link contrast, enlarged-text home/404 clipping,
      40px touch targets, tablet hero spacing, keyboard motion and no-JS menu findings.
- [x] Replace/remove the recorded unused style tokens/classes, old band artwork and
      maintained editorial-design references as each surface migrates.

- [x] Refresh shared header, hero, product/craft/privacy sections, download/install guidance and footer.
- [x] Preserve native app screenshots as product evidence; apply Air only to surrounding website UI.
- [x] Privacy and 404 use the same Air reading and navigation patterns.
- [x] Preserve accurate supported OS, architecture, signing/release status and download links.
- [x] Remove obsolete motion/hero geometry only when unused; preserve accessibility and anchors.
- [x] Inspect all required viewport classes, light/dark, keyboard/emulated coarse input/reduced motion and native 200% zoom.
- [x] Run asset sync, Astro check and production build; verify links and policy content.
- [x] Verify no Swift/native changes; record evidence and commit.
- [x] Deploy and verify the Air website/OG/horizon at the existing production domain; Drop evidence `8ce17f9`.

- [ ] Physical touch and spoken assistive acceptance; browser emulation does not certify these gates.

## Completed bounded piece — Resume PWA and static recovery (2026-10-21)

Product checkpoint: `24c89e6` (local only).

- [x] Neutral in-flow offline/update/error notices; guarded busy actions, no focus
      stealing, dismissal focus return, paused offline timer and reachable enlarged-text controls.
- [x] Save the last edit before activation and reload; retain drafts on storage or
      delivery failure and another tab's activation. Later valid installs remain discoverable.
- [x] Replace the legacy 527-line static 404 with a standalone Vite Air entry;
      no-JavaScript recovery, safe requested-path text, noindex and real installed-route 404.
- [x] Remove obsolete `.tb`/toast skins, spinner and timed reload. Keep the live
      MonthYearField presence/popover adapter. Evidence: Resume
      `docs/air/evidence/pwa-recovery-2026-10-21.json`.
- [x] 372/372 production tests in 10 files, zero skips; 384 layouts, 12 forced-colour
      cases, native Safari/Firefox updates, 34 preserved template/paper captures
      and four exact PDF output comparisons. All 138 recorded source/config/assets
      and 103 build files stayed frozen. Inventory covers 83 sources.
- [x] Handed off actual OG/PWA/README captures, metadata and generator references
      to the following asset piece. Final product/physical acceptance remains open.
      Local commits only; CloakIMG stays last with its parked draft untouched.

## CloakResume preview assets and metadata — 2026-10-21

- [x] Replace legacy OG/PWA/README imagery with the Air social card and real
      production landing/editor captures in both themes. Update screenshot
      dimensions, content labels, install colours, social copy/alt text and the
      README picture sources. Keep launcher marks and document output unchanged.
- [x] Retire the old device-named captures, stale `.cr-input` generator selector
      and unused field skin. Simplify generators and update active README,
      contributor and asset guidance. Track live font/token/popup consumers.
- [x] Check production assets, repeatability, built manifest/README theme selection,
      responsive light/dark/enlarged layouts, neutral links and exact résumé/PDF
      output. Run required checks and the full serial production suite, freeze the
      tested source/build, record evidence, then commit locally.
- [ ] Next: full-product cleanup and acceptance, starting with exact token/font/
      selector consumers and remaining inventory/44px target gates. Physical
      touch/software keyboard, OS IME, spoken assistive and GPU/battery acceptance
      remain open. CloakIMG remains parked and last. Final integration follows
      the user-authorized Phase 9 after the remaining gates pass.

## CloakResume unused foundation cleanup — 2026-10-21

- [x] Trace source, scripts, token chains and compiled Tailwind consumers; remove
      61 unused token names (62 declarations), the unused 241-line JSON mirror
      and both unreachable non-Air popup skin rules. Update current references
      and test Air ownership; retain every live font/output/date/drag adapter.
- [x] 88 responsive geometry/style comparisons, 256 date layouts, 124 neutral
      link states / 32 keyboard checks and exact 34 template/paper plus four real
      PDF output comparisons. Rendered desktop/laptop/tablet/phone themes inspected.
- [x] **372/372 production tests, 10 files, zero skips, 537.78s**; check/build,
      86-source inventory, 18 portability checks and exact sync pass. All 283
      recorded source/build files stayed frozen through testing and commit hook.
      Product commit: `f05f97e`. Evidence: Resume
      `docs/air/evidence/unused-foundations-2026-10-21.json`.
- [x] The later privacy/dialog correction retires the live UI font/palette bridge
      and its three transitive token orphans; see the current entry below.
- [ ] Continue the full inventory/44px-target, date-motion and journey acceptance.
      Physical/assistive gates remain open. IMG stays last.

## CloakResume privacy, dialogs and update alignment — 2026-10-21

The user reported remaining privacy/modal/update inconsistencies after deployment
and explicitly asked for close adherence to the approved Air system.

- [x] Use the existing Air reading styles inside the standard 576px dialog;
      keep the heading/close control above the scroll body and preserve policy text.
- [x] Align the update/offline/error notice with Air's opaque neutral panel,
      shared actions and semantic error icon; preserve draft-saving/activation.
- [x] Retire the remaining legacy UI fonts, palette/geometry aliases and their
      orphaned assets. Keep template fonts, actual output colours and the live
      date-presence adapter. Protect destructive confirmation from backdrop taps.
- [x] Validate privacy/confirm, Options, library, review, PWA states and inherited
      UI typography across desktop/laptop/tablet/phone light/dark, coarse input,
      enlarged text and forced colours. Pass 341 entry layouts / 14 journeys,
      384 PWA, 192 Options, 960 review and 386 library cases; links stay neutral.
- [x] Preserve all 34 paper captures and four exported PDFs exactly. Pass all
      **373/373 production tests, 10 files, zero skips**, check/build, 86-source
      inventory, 18 portability checks and six-copy contract synchronization.
- [x] Product commit `9d14555`, dev → main [Resume #41](https://github.com/cloakyard/cloakresume/pull/41),
      merged `a957b2e`; dev synchronized. All 102 live files match the fresh build,
      with no-transform and no injected scripts. Live privacy/entry passes 341
      layouts / 14 journeys and 48 link states / 6 keyboard checks. Evidence:
      `docs/air/evidence/resume-alignment-2026-10-21/ledger.json`.
- [ ] Investigate the initial live export raster intermittency: three first-batch
      PDFs differed only in raster; text/geometry/links matched. The final four
      fresh exports are exact, as is the pre-change latency baseline. Retain all
      attempts in `export-attempts.json`; the cause is not yet established. A later
      instrumented Letter export reproduces the raster-only difference despite
      reported font readiness; no speculative output-code change ships.
- [ ] Restrict Tailwind scanning to application sources in a bounded follow-up.
      The new evidence strings add two unused shadow declarations; the exact
      build delta is recorded and no active style or application logic differs.

This does not close physical keyboard/IME/assistive/hardware gates or the remaining
whole-product target sweep. IMG remains excluded and last.

## Phase 5 — CloakResume

Maintain [the cleanup record](docs/air/CODE_CLEANUP.md) with each piece: remove proven
unused code, trace retained consumers, and keep current inventories/references accurate.

- [x] Landing/start blank/sample/load/restore, capabilities, privacy and footer. Software evidence: Resume `docs/air/evidence/entry-recovery-2026-10-19.json`; physical gates remain open.
- [x] Editor header, section rail/picker/panel frame, preview surround and zoom, paper/view choices. Software evidence: Resume `docs/air/evidence/editor-shell-2026-10-19.json`.
- [x] Shared text/CSV/textarea fields, labels/help/validation and scoped formatting. Software evidence: Resume `docs/air/evidence/writing-fields-2026-10-19.json`; preserve preview pagination/output throughout.
- [x] Shared repeated-entry headings/Add/empty, full-width nested bullets, stable identity and reorder/removal focus. Software evidence: Resume `docs/air/evidence/repeated-entries-2026-10-19.json`.
- [x] Content-editor interiors and custom writing widgets software-validated; physical/assistive and final product gates below remain open.
- [x] Every content section: profile/contact, experience, education, skills, projects, certifications,
      languages, interests, awards, custom, stats and job description. Software evidence: Resume `docs/air/evidence/content-sections-2026-10-21.json`; physical/assistive gates remain open.
- [x] Contact/native selects and custom proficiency; evidence in Resume `docs/air/evidence/contact-selects-2026-10-19.json`.
- [x] Month/year fields, Experience Current job and Education Present; evidence in Resume `docs/air/evidence/date-controls-2026-10-19.json`.
- [x] Profile/Skills logo search and photo controls; evidence in Resume `docs/air/evidence/logo-photo-2026-10-19.json`.
- [x] Primary-colour controls; evidence in Resume `docs/air/evidence/colour-controls-2026-10-21.json`.
- [x] Writing-hint popup interiors and review field focus; evidence in Resume `docs/air/evidence/writing-hints-2026-10-21.json`.
- [ ] Correct tablet touch sizing and 10px desktop contact selectors; include calendar,
      rich-text, clear/reorder and review actions in the 44px target sweep.
- [x] Template library and actual previews; evidence in Resume `docs/air/evidence/template-library-2026-10-21.json`. Search, draft-only content, focus, resize and nested recovery pass.
- [x] Options and export controls software-validated; Resume `docs/air/evidence/options-export-2026-10-21.json`. Immediate handoffs, native JSON cancel/replacement, busy/error/retry, visible focus and responsive state are covered; physical gates remain open.
- [x] ATS overview/keywords/insights/parse preview, writing review, field jumps and issue states; evidence in Resume `docs/air/evidence/resume-review-2026-10-21.json`. Physical/assistive gates remain open.
- [x] Confirm, privacy, notices, error boundary, Options and PWA/static recovery software-validated. PWA evidence: Resume `docs/air/evidence/pwa-recovery-2026-10-21.json`; actual activation, last-edit/storage safety, failed-install recovery and true installed 404 are covered. Physical/assistive gates remain open.
- [-] Mobile split/expanded preview, section navigation and short landscape implemented and software-validated; physical software-keyboard/IME and assistive acceptance remain open.
- [ ] Test all 17 templates, A4/Letter, pagination, long content and image/logo boundaries.
- [ ] Preserve template-specific colours/fonts/layout and printable/exported document geometry.
- [ ] Verify new/load/save/restore/JSON and PDF export, cancellation, unsaved edits and malformed input.
- [ ] Run check, all logic/browser/template suites and production build.
- [x] Update actual PWA/social/README assets in light/dark; evidence in Resume `docs/air/evidence/preview-assets-2026-10-21.json`.
- [ ] Final inspection of all required layouts/themes/input/motion modes and remaining physical/assistive gates.
- [ ] Record full-product acceptance evidence after every required gate passes.

## Phase 6 — CloakIMG (last)

A landing/import draft is parked uncommitted at the user’s request. It has partial
checks only; resume after Drop and Resume, then rerun the complete slice gates.

- [ ] Landing/header/footer, drop/start flows, features/privacy and error/reload states.
- [ ] Editor top bar/rail/search/properties, image canvas, stage host and mobile more menu.
- [ ] Layers, history list/scrubber, compare, file properties, batch view and privacy audit.
- [ ] All fields/buttons/selects/segments, colour picker, histogram/levels/HSL/curves and numeric units.
- [ ] All tool panels/stages in the inventory, including preview/apply/cancel and empty/invalid states.
- [ ] AI scope/consent/download/cached/ready/error/cancel/retry for segmentation, face and depth.
- [ ] Export formats/options/metadata/privacy/progress and error/recovery flows.
- [ ] Mobile full tool access, canvas/panel split, short screens, landscape and software keyboard.
- [ ] Feature sweep: adjust, filters, levels/HSL, time-of-day, relight, blur, background removal.
- [ ] Feature sweep: crop/resize/perspective, frames/borders, passport/visa layouts and print/PDF.
- [ ] Feature sweep: retouch/spot heal, masks/faces/redaction, text/shapes/draw/pen, emoji/watermark/images.
- [ ] Validate layers, reorder, undo/redo, compare, apply/cancel, batch, import HEIC and all export formats.
- [ ] Keep pixel colours/alpha/output fidelity and AI consent/canvas-pool invariants intact.
- [ ] Run check, all tests, build/asset limits, tool sweep and applicable audit/probe scripts.
- [ ] Inspect all required layout classes, themes and input/motion modes; update PWA/social assets.
- [ ] Record full evidence and commit each verified piece.

## Phase 7 — legacy design cleanup after redesign

Begin after the initial refinements land, repeat within each app's migration, and
finish with a family-wide search after all redesigned surfaces are in place. Cover
Cloakyard, CloakPDF, CloakIMG, CloakResume and CloakDrop's website, including editor
interiors, custom controls, canvas chrome and less-visible states.

- [ ] Inventory legacy design findings by repository and source location; record
      replacement/removal, remaining work and verified exceptions in the audit evidence.
- [ ] Search for obsolete tokens, palettes, fonts, spacing/radius/shadow scales,
      breakpoint/theme overrides, hardcoded styles and compatibility aliases.
      Replace live UI uses with Air primitives and remove unused definitions.
- [ ] Find duplicate or abandoned components, stylesheets/selectors, imports,
      hooks, feature flags, conditional branches and commented-out UI experiments.
      Check routes, dynamic imports and generated class names before deleting.
- [ ] Remove superseded animation/keyframe/shader code and dependencies that are
      unused after migration; keep motion aligned with Air and reduced-motion rules.
- [ ] Audit old icons, illustrations, fonts, screenshots, social/PWA artwork and
      asset-generation scripts. Replace active product imagery and remove orphaned
      assets only after checking their runtime, metadata and documentation consumers.
- [ ] Remove stale design directions and references from contributor instructions,
      README files, comments, examples, component studies and other maintained docs.
      Keep DESIGN.md authoritative and synchronize any portable-contract corrections.
- [ ] Update tests, fixtures and visual baselines that encode superseded UI only
      after validating the replacement; preserve feature and accessibility assertions.
- [ ] Remove obsolete packages/configuration and refresh lockfiles, build inputs
      and PWA/precache references where affected; verify no broken imports or asset URLs.
- [ ] Preserve document/template styling, user content colours, exported output,
      KERR and native macOS exceptions. Retain useful historical audit evidence as
      clearly labelled history, never as current design guidance.
- [ ] Run available dead-code checks and repository-required format/lint/type,
      feature tests and builds for each cleanup piece. Inspect affected controls
      and states at desktop/laptop/tablet/mobile sizes in light and dark themes,
      including keyboard, touch and reduced motion; commit only after passing.
- [ ] Repeat legacy-name/style/reference searches across all five repositories.
      Record search coverage and explain remaining matches; no unexplained obsolete
      design code or conflicting instructions may remain at final sign-off.

## Phase 8 — family-wide regression and completion

- [ ] Compare all landing pages together at the same widths/themes.
- [ ] Compare controls, editors/canvases, tool panels and overlays across the three web apps.
- [ ] Review every surface inventory entry; none may remain unreviewed without a named reason.
- [ ] Re-run affected feature suites after shared corrections and inspect generated outputs.
- [ ] Check all contract/token hashes and eliminate stale authoritative Workbench instructions.
- [ ] Validate new-app adoption from the portable bundle in an independent directory.
- [ ] Check fonts/assets/privacy requests, startup/build budgets and shader fallbacks.
- [ ] Confirm KERR is unchanged and its main-site listing has no preview.
- [ ] Final per-app checks/builds, visual evidence, clean git state and commit ledger.
- [ ] Mark the persistent goal complete only after every required item is verified.

## Phase 9 — current dependencies and authorized release integration

The latest explicit authorization deploys Cloakyard, PDF, Drop and Resume through
individual dev → main PRs, while excluding IMG. The four sites are production-
verified; remaining migration/device gates stay open. See docs/air/ROLLOUT.md.

- [x] Initial direct-dependency discovery: 38 outdated entries across the five
      repositories, with fresh npm registry metadata saved in
      `docs/air/evidence/dependency-preflight-2026-10-21.json`. No dependencies
      changed in this preflight. Latest Astro Check 0.9.11 still declares only
      TypeScript 5/6 support; reassess that constraint during the upgrade phase.
- [x] Upgrade and validate Cloakyard and regenerate the portable Air bundles with
      current React/Vite+; remove obsolete exceptions/override. All applicable checks
      pass; evidence: `docs/air/evidence/dependencies-2026-10-21.json`.
- [x] Upgrade Drop's compatible direct and transitive website dependencies;
      reverify unchanged native upstream versions and retain the official yt-dlp
      runtime/TS6 exceptions. Commits `4e03208`, `575d430`; all website gates pass.
- [x] Upgrade Resume's compatible direct/transitive packages and CI pins (`5c3bc0d`):
      372 production tests, 88 responsive comparisons, 34 template/paper captures
      and four exact PDF comparisons pass. Full migration remains open.
- [x] Upgrade IMG's committed baseline last (`2718284`), including MediaPipe 1.1.1
      and rebuilt libheif 1.23.6/libde265 1.1.3/Emscripten 6.0.13. 470 tests,
      actual face detection, 26 panels, history/output and responsive checks pass.
      Preserve the 15-file parked draft; this is not completed Air conformance.
- [x] PDF upgrade committed and deployed through PR #207. The user explicitly
      accepted its pre-existing Compact/multipage limitation for this release;
      other checks pass. Keep the separate missing-facts fix open, not relabeled a pass.
- [x] Audit current stable upstream versions across all five repositories: direct
      and transitive web dependencies, build tools, package managers, native packages
      and vendored runtimes. Fresh 63-package metadata and native release checks
      are recorded. Compatible upgrades are committed, with the explicit PDF release limitation recorded.
- [x] Record exact resolved versions, audit date, upstream evidence and security
      results. State any supported-version constraint rather than claiming everything
      is latest. Retain the explicitly approved official yt-dlp frozen-runtime
      exception; do not replace it with a custom bundle. See [rollout readiness](docs/air/ROLLOUT.md)
      for the supported TS6 constraint and existing PDF advisory expiry.
- [x] Recheck dependency currentness immediately before integration; complete
      feature/output, responsive light/dark, build/dead-code and security gates.
- [x] Fetch current branch state, preserve all local work, integrate passing pieces
      into each repository's `dev`, and validate the combined result.
- [x] Create and attach `dev` → `main` PRs with reviewed final descriptions and
      evidence; wait for required CI, resolve conflicts/regressions, then merge.
- [x] Prepare exact production builds, release notes/artifacts and deployment
      settings from merged main; record release readiness and any unresolved device
      or signing constraints. Verify live bytes and essential journeys for deployments
      performed under the user's existing deployment authorization.
- [x] Record this upgrade checkpoint in TODO, handoff, cleanup and rollout ledger.
      Four-site PRs/deployment are complete; IMG, incomplete migration and physical
      gates remain open. Proof: docs/air/evidence/deployment-2026-10-21/ledger.json.

### PDF modal and chat checkpoints

- [x] Export: six native format choices, all PDF options/compression levels, full
      filenames, busy/error/retry, focus return and exact real output validation.
      All six formats burn pending redaction; working source/history unchanged.
      Existing processors do not support cancellation: protect preparation with
      explicit status until settlement. No invented page-range or rename controls.
      PDF `5f8ab8c`; compact evidence in its `docs/air/evidence/export-2026-10-14.json`.
- [x] Command palette: shared compound search, readable category/result rows,
      active indicator, hints, empty recovery, IME guard and responsive focus return.
      Real tool and Undo/Redo/Reset handoffs, 192 layouts, short/enlarged recovery,
      forced colours and native Safari/Firefox 200% zoom pass. No dependencies.
      PDF `343bc00`; evidence in `docs/air/evidence/palette-2026-10-14.json`.
      Palette has no dialog-opening commands; no invented actions were added.
- [-] Export keyboard and trigger return pass in Chromium/Safari/Firefox, including
  200% browser zoom. Global editor shortcuts cannot mutate work behind dialogs.
  Command-palette interior and tool/history handoffs also pass (`343bc00`).
  Physical touch/software-keyboard, real OS IME and assistive speech gates stay open.
- [ ] Review all required sizes/themes, enlarged text, touch targets, short
      landscape, reduced motion/forced colours and actual browser zoom per slice.
- [ ] Remove each replaced interior's obsolete selectors, helpers and imports;
      run dead-code, required checks and applicable feature/output tests, save
      compact evidence, then commit. Do not add dependencies without a real need.
- [x] Ask PDF conversation, indexing, citations and recovery implemented and
      validated locally; physical/assistive acceptance remains open.
- [x] Editor header and tool navigation, including compact phone/tablet toolbar,
      mobile picker, keyboard paths, short-height layouts and preserved state.
- [x] Properties/page context, overview/thumbnails and Organize page actions, including real history/output tests.
- [ ] Next bounded piece: canvas surround, selection/zoom/pan chrome and context overlays,
      then every remaining editor panel with the same commit gates.

### Completed PDF slices — AI setup and model dialogs

- [x] Setup/tier selection and bundle estimates, one return-visitor loader,
      partial-cache guard, native radios and real cold/warm/swap paths (`74e32ed`).
- [x] Shared Air frame and phone sheet; consent/loading/error/retry/cancel; model
      metadata; memory release; confirmed cache/index deletion and recovery;
      loaded-model actions and pending tier selection (`747aa44`).
- [x] Preserve modal ownership through exit; immediate keyboard/reduced motion;
      native radio single Tab stop; Safari link traversal and trigger return.
- [x] Inspect 268 layout cases in both themes at 16/32px root text, all Air sizes
      and dialog breakpoint neighbors. Native Safari/Firefox 200% zoom inspected.
- [x] Validate real model loads, warm return, PDF questions/extraction, tier swap,
      cancel/reopen, explicit RAM release/reload and existing document recovery.
      CacheStorage denial and IDB transaction abort remain retryable; successful
      deletion removes real disposable test records and readiness flags.
- [x] Remove old modal skin, unused animation presets, estimated-percentage helper,
      unused single-model API and duplicate details owners. Net production change:
      **791 lines removed**, zero dependencies; Ask PDF 596.20/179.08 kB raw/gzip
      versus 611.72/181.88 kB before the modal slice.
- [x] Format/lint/types, dead-code, 366 units, production build/127-asset limits,
      design/portability and applicable editor/modal/AI browser suites pass.
      Compact evidence is in PDF `docs/air/evidence/ai-modals-2026-10-14.json`.
- [ ] Physical touch/software-keyboard and assistive speech acceptance remain open.
      These checkpoints do not complete Ask PDF, the editor or the family refresh.

### Completed PDF slice — Compare inputs and results

CloakPDF `f1d99d5`; evidence: `docs/air/evidence/compare-2026-10-14.json`.

- [x] Migrate both inputs, persistent file names, both views, diff visibility,
      page/thumbnail navigation, summary and every recovery state to Air.
- [x] Preserve source bytes and page geometry; verify real pixel changes,
      transparent identical overlays and unequal page counts/sizes.
- [x] Cancel and release reads/tasks/renders/encoders and every partial URL;
      prevent late results, preserve input on failure and restore focus.
- [x] Inspect 484 layout observations plus representative screenshots, coarse
      targets, native Safari/Firefox 200%, reduced motion and forced colours.
- [x] Remove old pipeline/skins, unused average and stepper variants; pass dead-code,
      366 units, six standalone workflows, both editor smoke suites and build/design
      checks. Keep larger local screenshot sets outside Git to limit evidence growth.

Physical touch/software keyboard and screen-reader acceptance remain open.

## Commit ledger

### Completed PDF slice — Digital Signature options and results

Committed in CloakPDF `109baea`; evidence and passing output are in that repository's
`docs/air/evidence/signature-2026-10-14.json` and companion checks log.

- [x] Migrate certificate import/generation, single-contour fields, password
      visibility, existing/loaded identity, disclosures, metadata and recovery.
- [x] Preserve and independently verify generated/imported signatures, Unicode
      names, certificate chains, empty passwords, ByteRange and exact source streams.
- [x] Guard duplicate/late signing; terminate cancelled certificate workers and
      allow replacement imports before obsolete file reads resolve. Preserve focus.
- [x] Review 484 geometry observations in all contract sizes/themes/enlarged text,
      representative screenshots, native Safari/Firefox 200% zoom and forced colours.
- [x] Remove replaced visual code and redundant async state/imports; prevent a
      cancelled import leaving a dangling action guard. Dead-code scan passes.
- [x] Pass check/type, 359 units, six production standalone flows, build/PWA/129-asset
      limits, inventory, design integrity, 17 portability assertions and canonical sync.

Physical touch/software keyboard and screen-reader acceptance remain open.
AI and every editor surface remain in scope; this is not a completed PDF migration.

### Completed PDF slice — Password options and results

Committed in CloakPDF `5770f7b`; evidence and passing output are in that repository's
`docs/air/evidence/password-2026-10-14.json` and companion checks log.

- [x] Audit and migrate add/remove fields, visibility, permission choices,
      detection, selected-file states, success and retry to pinned Air controls.
- [x] Preserve AES-256/permission bits and source streams through protection and
      unlocking; verify wrong/empty-password handling and real editor handoff.
- [x] Guard duplicate/late delivery, ignore obsolete detection after cancellation,
      preserve drafts during errors and restore intake/field focus.
- [x] Review all contract sizes in both themes/enlarged text, native Safari/Firefox
      200% zoom, forced colours and reduced motion. Correct page fallback focus
      overriding the canonical field action; no shared contract change was needed.
- [x] Remove replaced skins/mono headings/tinted icons/disclosure code, update
      inventory and evidence; pass 355 units, six standalone production workflows,
      check/dead-code/build/PWA/135-asset limits, design integrity and portability.

Physical touch/software keyboard and screen-reader acceptance remain open. The
complete PDF migration, including every editor surface, is still in progress.

### Completed PDF slice — Extract Images

Committed in CloakPDF `b25ae2c`; evidence and passing output are in that repository's
`docs/air/evidence/extract-2026-10-14.json` and companion checks log.

- [x] Migrate selected-file summary, native image selection/previews, bulk controls,
      selected count, PNG/ZIP actions and success/error/empty states to Air.
- [x] Preserve image bytes/order and selection on download failure; guard duplicate
      or late delivery, cancel obsolete scans and restore meaningful focus.
- [x] Inspect light/dark across the full viewport/text matrix, keyboard selection,
      native zoom, long names, no-images/corrupt/encrypted input and busy states.
- [x] Verify individual PNG and partial/all ZIP contents, cancellation/replacement,
      shared non-AI file-summary consumers and all six standalone regressions.
- [x] Remove replaced styles/references, update inventory/evidence, run required
      checks and commit the bounded piece.

Physical touch/software keyboard, screen-reader speech and loaded-model AskPDF
integration remain on their explicit gates; this is not a completed PDF migration.

### Completed PDF slice — constructors and shared utility controls

Committed in CloakPDF `aba5643`; evidence and passing test output are in that
repository’s `docs/air/evidence/constructors-2026-10-13.json` and companion log.

- [x] Merge and Images to PDF: one Air file queue; wrapped names, optional previews,
      sorting, drag/keyboard/visible moves, focus-safe removal and persistent Undo.
- [x] Shared utility actions, segmented choices, errors and measured progress use
      the pinned Air skins; preserve processing, output and secondary editor hand-offs.
- [x] Preserve inputs on failure; guard duplicate processing and late delivery
      after navigation. Show truthful completion without resetting it on a timer.
- [x] Remove the standalone-only orientation gate after landscape checks; editor
      already supports landscape. Verify all six non-AI utilities remain reachable.
- [x] Validate both constructors' populated/error/result states at all contract
      sizes/themes plus enlarged text, keyboard/coarse input, sorting/reorder/undo,
      output page counts/order and editor hand-offs. Run required checks before commit.
- [x] Audit replaced classes/motion and record evidence. Other utility-specific
      option/result bodies and AI states remain separate upcoming pieces.

Governance commits (no product runtime changes): Cloakyard `8d5dcea`, CloakPDF
`5a1755f`, CloakIMG `9cd1200`, CloakDrop `5133124`. Each passed its applicable
checks. Resume had an earlier serial 288/288 pass followed by focus/export/entry
timing failures; its gate stayed closed until the fresh full pass recorded below.
The Air refinement
03 design checkpoint is recorded in Cloakyard's git history after reference checks.
No product implementation commits. Native code and KERR are unchanged.

Design/audit checkpoints: Cloakyard `721911c` established refinement 03;
CloakPDF `4830570` records the complete default-panel audit and synchronized opt-in
reference after format/lint/type, dead-code, 355 units and production build passed.
The family signature/dense-control follow-up is recorded in Cloakyard git history.
These commits do not migrate production UI or waive remaining feature gates.

CloakDrop `4124a5b` saves its complete website baseline audit and opt-in refinement
03 bundle. Astro check/build, asset sync, integrity, isolated portability and
inventory idempotence pass. Baseline UX failures remain migration requirements;
no production website or native code was changed.

The 2026-10-12 commit-all checkpoint saves the refined reference after fresh gates:

| Repository  | Commit                                                      | Validation                                                                           |
| ----------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Cloakyard   | `340aee8` reference; implementation plan in this checkpoint | Check/build, exact sync, 50 family portability assertions; reference visual evidence |
| CloakPDF    | `f960092`                                                   | Check, dead-code, 355 units, TypeScript/build/PWA, asset limit                       |
| CloakIMG    | `2a639c4`                                                   | Check, 470 tests, TypeScript/build/PWA, asset limit                                  |
| CloakResume | `5367f46`                                                   | Check, full serial 288/288, TypeScript/build/PWA, failure capture                    |
| CloakDrop   | `9340c6d`                                                   | Asset sync, Astro check and three-route build                                        |

All local reference/contract checks pass. These are reference/audit/tooling commits,
not product migrations; no push or deployment. The implementation plan defines
shared-adapter adoption and small product slices with the same per-commit gates.

The 2026-10-13 file-reference checkpoint defines portable intake, actual byte
progress, cancellation/retry and stale-result handling, with 68 layout cases,
27 interaction observations and nine lifecycle tests. All required product gates
and 70 isolated portability assertions pass. Sibling final checkpoints: PDF
`fe090e8`, IMG `d514ae6`, Resume `60947b9`, Drop `de00cb2`. Detailed evidence,
limitations and the Resume log are in `docs/air/validation.md`. Production
adoption and detailed visual sign-off remain open.

### Final base candidate — 2026-10-13

- Cloakyard: this checkpoint contains collections, nested overlays, custom Select,
  shared rules, verified evidence and `DESIGN_FREEZE.md`.
- Portable copies: PDF `dea80e8`, IMG `68b0828`, Resume `4fb514c`, Drop `f44a492`.
- Contract `c6ec55c0fe59`, CSS `80fb336bb4eb`, collections `0bbea11f0a18`.
- All required checks pass; 355 PDF, 470 IMG and 288 Resume tests pass. Six model
  tests, 75 portability assertions and the reference interaction/layout checks pass.
- Detailed visual approval is pending. Next after lock: AIR-04 shared foundation
  and Cloakyard home. No product runtime adoption, push or deployment in this checkpoint.

### 2026-10-13 design lock checkpoint

- Cloakyard `ea26823`, PDF `e59bcd5`, IMG `0182ec0`, Resume `b91e39e`, Drop `f507724`: reviewed Air baseline and gallery navigation correction, all synchronized.
- AIR-04 home implementation, cleanup and evidence are included in the user-authorized local commit; physical-touch and screen-reader acceptance remain open. Production preview: `http://127.0.0.1:8131/`.
- Root check/type/build, sibling format/lint/type and Drop Astro checks pass; bundle checks and the preceding unchanged-runtime suite evidence are recorded in validation.md.

### Completed PDF slice — Ask PDF conversation

Committed in CloakPDF `12b11b5`; evidence and passing logs are recorded in that
repository. Cloakyard check/type/build, six-repository exact sync, design integrity
and portability checks also pass.

- [x] Air transcript, single-contour labelled composer, normal author/status labels,
      readable markdown and locally scrolling code/tables; real source-page links.
- [x] Actual page/passage progress, explicit retry/no-text recovery, partial answer
      retention, protected next drafts, IME-aware sending and focus return.
- [x] Stable model readiness, per-attempt/session ownership, late-result isolation
      after replacement/navigation, source URL cleanup and reader-owned scrolling.
- [x] 448 viewport/theme/text layouts; native Safari/Firefox keyboard and actual
      200% zoom; real model initial/warm answers, extraction, tier swap and memory
      release/reload; AI modal storage/download/recovery regression.
- [x] Remove unused InfoCallout and orphan selector, weighted-progress helper,
      obsolete comments and replaced skins. Net 216 production lines removed; no
      dependencies. Check/dead-code, 366 units, build/PWA/assets, design and
      portability pass. Evidence: PDF `docs/air/evidence/chat-2026-10-14.json`.

Physical touch/software keyboard, real OS IME and assistive speech remain open.
Underlying indexing is not abortable; obsolete results are discarded on replacement.
This completes the bounded chat implementation, not the full PDF/family migration.
Next: editor header and tool navigation, then every remaining editor interior.

### Completed PDF slice — Compact toolbar and editor navigation

CloakPDF commit: `38dbc8b`. Evidence is in that repository's
`docs/air/evidence/navigation-2026-10-14.json`.

- [x] One 64px toolbar at normal text size, with no filename/page-count subtitle.
      Tablet/phone disclose the filename and home action from the document mark;
      paging, undo/redo and export stay available. Pending marks use a small badge.
- [x] Air labelled rail, neutral selection, full-name mobile tool list, labelled
      search and clear/empty states; expand/split retains the document and tool.
- [x] Correct laptop/short-landscape breakpoints; immediate tool navigation and
      focus return; palette commands wait for modal cleanup; busy/modal history guards.
- [x] 176 layout cases plus four long-filename cases, both themes and 200% text;
      native Safari/Firefox keyboard and actual 200% zoom; nine browser suites,
      366 units, check/dead-code, build/PWA/asset limits and portability checks.
- [x] Remove replaced header/mobile/rail styling, duplicate page stepper and
      orphan motion selectors. No dependencies; portable product appendix updated.

Physical touch/software keyboard, OS IME and assistive speech acceptance stay open.
Inspector, overview/thumbnails, canvas chrome and tool interiors remain pending.
Next: properties/page context and page collections; retain the same per-piece gates.

### Completed PDF slice — Inspector and page collections (2026-10-14)

Committed in CloakPDF as `4343432`.

- [x] Air inspector headers/empty state/Cancel, immediate tool navigation and shared
      primary action skin. Omit the repeated page count; retain the compact toolbar.
- [x] One responsive grid for browsing and organizing, neutral selected page marker,
      readable removed state, 40/44px actions and explicit keyboard reorder controls.
- [x] Saved/pending rotation fits the complete thumbnail; labelled preview fallback;
      blank-scan failure/retry and obsolete-result guard.
- [x] Real tests found and fixed restored page counts after Undo/Reset, stale pending
      plans after geometry changes, and explicit Cancel draft cleanup. Preserve
      ordinary tool reselection, staged Apply, exports and history.
- [x] 88 collection layouts, real PDF output, single-page density, 60-page keyboard
      focus; desktop/laptop/tablet/mobile light/dark renders and native Safari/Firefox
      200% zoom. Existing editor/navigation/export/modal suites and required checks pass.
- [x] Remove replaced skins, unused entrance animation/thumbnail class option and
      obsolete milestone references. No dependency added. Portable PDF appendix synced.

Evidence is in `cloakpdf/docs/air/validation.md` and
`cloakpdf/docs/air/evidence/collections-2026-10-14.json`. Physical touch/software
keyboard, OS IME and assistive speech gates remain open. Canvas chrome and remaining
panel/overlay interiors are next; the full PDF and family migration remain incomplete.

### Completed PDF slice — Canvas chrome and brand consistency (2026-10-14)

PDF implementation `7743488`; final portable reference `f40842a`.

- [x] Replace canvas surround, paper focus and inline text contours with Air; keep
      paper/author content accurate and preserve the persistent gesture surface.
- [x] Share the 36px landing/editor identity at all viewport sizes; remove smaller
      overrides and update the portable family rule/reference.
- [x] Verify composition, focus return, direct editing/zoom/pan, touch handle
      selection, exports and required responsive/theme matrix before committing.
- [x] Remove obsolete canvas palette fields, redundant accent overrides and skins;
      run dead-code checks and inspect the final diff.
- [x] Visible-page geometry follow-up: saved /Rotate, CropBox/MediaBox offsets and
      UserUnit now map consistently through the focus stage and vector overlays.
      PDF.js pixel comparisons cover annotations/signatures/codes, crop/stamps/flat
      forms and destructive marks; native field metadata remains intact.
- [x] Follow the visible-page geometry through N-up/booklet output, including
      cropped/rotated/mixed/blank pages, physical units and native form appearances.
- [x] Follow the geometry matrix through searchable OCR output (OCR checkpoint below).
- [ ] Broader native
      annotation appearance/assistive acceptance remains part of its panel audit.

Canvas evidence: `cloakpdf/docs/air/evidence/canvas-2026-10-14.json` and validation.md.
68 canvas layouts, 15 browser suites, 367 units, dead-code and build gates pass.
Native Safari/Firefox 200% browser zoom inspected. Air 1.0.1 carries the common
36px brand rule and white-paper selection accent in every portable contract.
Physical touch, OS IME and assistive speech remain open. Next: coherent page
geometry/output mapping, preview recovery, then remaining panel interiors/overlays.

Portable checkpoint: IMG `88253d7`, Resume `a09ef58`, Drop `f073a51`.
All required checks pass, including 470 IMG and 288 Resume tests; exact six-document
sync and all five independent bundles pass. No push or deployment.

### AIR-07 PDF visible-page geometry — 2026-10-14

- [x] Use one visible-page coordinate helper for editor dimensions and vector writes;
      preserve source content, saved rotation, crop offsets and physical units.
- [x] Remove raw-rotation metadata, duplicate thumbnail rotation adjustment, old crop/
      font-suggestion skip branches, stale UI copy and the unused crop barrel export.
- [x] Share Crop/Strip-furniture conversion and remap pending shapes, strokes, text,
      signatures and codes so cropping does not move or resize their document content.
- [x] Compare real PDF.js output for 12 geometry configurations and 10 overlay writers,
      crop pixels, pending annotation equivalence, erasure/redaction then vector output.
- [x] Check 48 rotated-page layouts in six size classes and both themes; inspect
      desktop/laptop/tablet/phone renders and direct rotated crop/undo behavior.
- [x] Pass 376 unit tests, 16 smoke + seven extended browser suites, final production
      canvas/collection/rotation regressions, dead-code, types/lint/build and portability.
- [ ] Next: N-up/booklet and searchable OCR geometry, preview failure recovery, then
      remaining tool and overlay interiors. Full PDF/family conformance remains open.

Evidence: `cloakpdf/docs/air/evidence/geometry-2026-10-14.json` and validation.md.
Air 1.0.1 is unchanged; this slice implements its existing output-preservation rule.
No dependency added, push or deployment. Physical touch/software keyboard, real OS
IME and assistive speech are still acceptance gates, not inferred from emulation.

PDF implementation checkpoint: `c7124a6`. Main-repo format/lint/types/build and
exact portable specification/bundle sync pass.

### AIR-07 PDF N-up/booklet and shared select — 2026-10-14

- [x] Air N-up panel, shared custom field/menu anatomy and native switch; gapless
      sheet preview uses real booklet padding and optional fold/trim marks.
- [x] Visible-page embedding preserves crop bounds, saved rotation, physical units,
      vector text and native form appearances; truly blank pages no longer fail.
- [x] Protect pending annotations/signatures/codes with review links to their tools;
      preserve the chosen layout on return. Verify real Apply/Undo page counts.
- [x] Fix Safari pointer-opened select keyboard ownership, menu anchoring and
      inspector reflow. Remove replaced dropdown skins, duplicated placement loops
      and the obsolete SimpleTools filename. No dependency added.
- [x] Compare 23 exported sheets independently with PDF.js source renders; audit
      all five layouts across seven viewports in both themes (70 cases), 200% text,
      forced colours and reduced motion. Native Safari/Firefox keyboard/zoom reviewed.
- [x] Searchable OCR geometry and stale-result recovery (OCR checkpoint below).
- [ ] Preview failure recovery and the remaining panel/overlay interiors.

Evidence is recorded in `cloakpdf/docs/air/validation.md` and
`cloakpdf/docs/air/evidence/nup-2026-10-14.json`. Full product/family migration,
physical touch/software keyboard, OS IME and assistive speech remain open.

PDF checkpoint: `a820e66`. All gates pass: 381 unit tests, 16 smoke + seven
extended browser suites + the N-up integration (24 suites), lint/types/format,
dead-code, build/PWA/asset limits, design inventory and portability. Main-repo
lint/types/build and exact six-document/five-bundle sync also pass. No push or
deployment. The full refresh remains in progress.

### AIR-07 PDF searchable OCR and review — 2026-10-14

- [x] Replace OCR panel/preview skins with Air select, actions, notices and reading
      surfaces. Use side-by-side panes when space allows; Text/Source switching
      retains useful canvas height on narrow displays. Keep toolbar page navigation.
- [x] Request real word boxes from Tesseract; use visible cropped/rotated physical
      dimensions and fit the invisible output to recognised bounds. Preserve native
      text once and retain original page pixels.
- [x] Bind extraction to the current document revision; discard abandoned results,
      retain failures for retry, verify apply/undo, and require pending marks to be
      applied before recognition so redacted content cannot be resurrected.
- [x] Remove unused OCR/fallback writers, raster/preprocessing helpers, old styles
      and dangling references. No new dependency. Update the portable PDF appendix.
- [x] Validate real OCR and output across eight rotation/UserUnit combinations,
      crop offsets, native/blank pages, 20 responsive/theme preview states, 200%
      text, keyboard menus, forced colours and reduced motion. Native Safari and
      Firefox extraction/apply pass. Regression gates and evidence recorded.
- [ ] Next: thumbnail/preview failure recovery, then remaining panel/overlay interiors.
- [ ] OCR follow-up: embed wider Unicode scripts, preserving correct glyph mapping
      and selection. Until then, unsupported OCR output fails explicitly and leaves
      the preview available for copying; it must never silently omit words.
- [ ] OCR follow-up: safely recognise scanned regions on pages that also contain
      native text, without duplication. Current OCR preserves any existing text layer.

Evidence: `cloakpdf/docs/air/validation.md` and `evidence/ocr-2026-10-14.json`.
381 units, 16 production smoke + seven extended + OCR/geometry integrations (25
browser suites) pass, including stale-result and redaction privacy checks.
Air 1.0.1 is unchanged. Full product/family migration, physical touch/software
keyboard, OS IME and assistive speech remain open. No push or deployment.

PDF checkpoint: `a5efb95`. Format/lint/types, dead-code, build/PWA/128 asset limits,
inventory and isolated/adversarial portability pass. Main-repo lint/types/build,
design checks and exact six-document/five-bundle sync pass. Runtime source is
98 lines smaller after removing the replaced OCR paths; tests and evidence are
kept separately.

### AIR-07 PDF preview recovery — 2026-10-14

- [x] Retain valid PDFs and successful page previews after partial render failure;
      replace blank/broken canvas output with a named fallback and Air retry.
- [x] Rebuild only missing previews without resetting forms, pending marks, OCR,
      page plans or undo/redo; guard stale completion and release preview resources.
- [x] Bound preview raster memory; remove redundant encodes from blank-page scans
      and obsolete rendering APIs/comments. Keep image exports fail-closed.
- [x] Validate all Air viewport classes in light/dark, enlarged text, keyboard,
      failure/retry/decode/cancellation/history and real feature/output regressions.
- [x] Record evidence and commit this bounded piece after required checks pass.

384 units pass. Preview recovery covers 44 canvas/grid layouts in light/dark,
200% root text, real render/decode failure, retained drafts/OCR/history and stale
retry disposal. Native Safari/Firefox restore the source page. The broader gates
also found and fixed an AI preparation-cancellation race; deterministic regression,
modal retry and real multipage AI loading/questions/tier swap/reload pass. See
CloakPDF's dated validation/evidence for commands and scope. Physical-device and
assistive acceptance remain open. Next bounded piece: **Redact and Smart Erase
panel interiors**, their custom controls and destructive-output validation.

PDF commits: `cf2cbed` (AI preparation ownership) and `a2935ac` (preview recovery).
All 16 production smoke suites, seven extended suites, preview/geometry/N-up/OCR
integrations and the real multipage AI suite pass: 28 browser suites in total.
Final image-ownership changes also pass focused recovery/canvas regressions.
General shell loading/error/restored-draft banners remain separately pending;
this recovery strip does not complete their migration. No push or deployment.

### AIR-07 PDF Redact and Smart Erase — 2026-10-15

- [x] Adopt Air choices, search, colour controls, mark lists and pending/export disclosures.
- [x] Guard repeated, cancelled and stale detection/search; retain valid marks and retry inputs.
- [x] Remove replaced panel skins and redundant control paths; no new dependency.
- [x] Inspect all required viewport classes/light/dark, enlarged text, keyboard/coarse targets,
      custom colour states, failure/cancel/retry, mark history and actual destructive output.
- [x] Record evidence and commit only after the applicable checks pass.

44 panel and 22 colour-popover layouts pass in light/dark. Real detection/search,
failure/cancel/retry, stale byte/tool ownership, mark undo, all three erase-output
methods and rotated/cropped physical geometry pass. Native Safari and Firefox
checks include Firefox 200% zoom; this exposed and fixed open-popup positioning.
384 units, 16 production smoke suites, seven extended suites and the two focused
privacy/geometry integrations pass. The last spacing cleanup passes a focused
responsive rerun. PDF commit: `c0ac5c0`. No dependency was added; replaced panel skins, duplicate scan
logic and duplicate mark rows are removed. Product evidence and portable appendix
are updated. Physical-device/OS IME/assistive acceptance remains open.

Next bounded slice: **Find & Act and Scrub panel interiors**. Continue with the
remaining tool interiors and shell loading/error/draft banners afterward. This
does not complete PDF or the family migration. No push or deployment.

### AIR-07 PDF Find & Act and Scrub — 2026-10-15

- [x] Replace remaining panel skins with Air fields, choices, colour controls and open reports.
- [x] Preserve search drafts/selections across failure; invalidate stale byte/tool results.
- [x] Add Scrub analysis retry, selected-category readiness and explicit rebuild consequences.
- [x] Make mobile Done await apply and retain the panel on failure.
- [x] Audit removed consumers and delete unused legacy selectors, animation rules and imports.
- [x] Finish responsive/native/output regressions, record evidence and commit this slice.

Next: remaining tool interiors (Metadata, Bookmarks and Attach), then shared control
adapters and shell loading/error/draft banners. Physical-device and assistive gates
remain open; no full-product migration claim.

44 required layouts, 16 error/busy/long-term states, enlarged text, native Safari
and Firefox (actual 200% zoom), real highlight/box/scrub outputs and mobile failure/
retry pass. All 384 units, 16 production smoke + seven extended + two focused
browser suites pass. Required build/dead-code/portability gates pass. Removed
127 lines of unused legacy CSS and dangling motion variants; no dependency added.
PDF checkpoint: `fcd913a`.
Physical-device/OS IME/assistive acceptance remains open. Other tool callbacks
returning void still need their asynchronous completion/error lifecycle reviewed.

### AIR-07 PDF document properties and Attach — 2026-10-15

- [x] Metadata/date-time controls, read/retry, byte-scoped drafts, safe mobile Done,
      complete calendar and real output/Undo (`76b2d42`; evidence in PDF validation).
- [x] Bookmarks, shared nesting menu, reorder/remove/restore, target validation,
      heading ownership, safe contents insertion and promised retry (`3163a35`).
- [x] Attach Air rows, complete filenames, sizes and distinct 40/44px remove controls.
- [x] Explicit attachment reading/failure/retry; retain failed selections across
      tool/viewport navigation and retire them after success or Cancel.
- [x] Unicode/nested-tree/duplicate identity, unique sorted add keys, safe standard
      reference cleanup, shared-stream preservation and physical unshared-byte removal.
- [x] Guard immediate operations; preserve source/Undo and pending privacy marks;
      restore focus to the initiating or surviving action after busy states.
- [x] Remove replaced skins, name-only identity, dead barrel exports and redundant
      traversal; verify no dependencies, dead symbols or dangling imports added.
- [x] Validate required size/theme matrix, edge states, keyboard/enlarged text,
      native browsers and real output; record evidence and commit (`8fcdbe8`).
- [x] Crop and Strip furniture interiors, numeric drafts, promised mobile
      failure/retry, shared Air scope controls and real crop output/Undo (`9f64243`).
- [ ] Continue remaining panel interiors and shell loading/error/restored-draft
      banners. Keep live legacy shared adapters until every consumer migrates.

Attach: 400 units, 16 production smoke, seven extended and focused Attach/Bookmarks
pass (25 browser suites), plus check/build/dead-code/design/portability. All 22
required layouts/themes, 16 edge examples, enlarged text, forced colours/reduced
motion and native Safari/Firefox (actual Firefox 200% zoom) reviewed. The production
preview also passes add/remove/Undo. No dependency added; editor +0.05 kB gzip,
CSS +0.05 kB gzip. Canonical PDF appendix and generated DESIGN are synchronized.
Evidence lives in PDF's dated validation and `attachments-2026-10-15.json`.
Physical-device, OS IME and assistive-speech gates remain open. Full PDF/family
migration remains unfinished; no push or deployment.

### AIR-07 PDF Crop and Strip furniture — 2026-10-15

- [x] Air scope segments, persistent percentage fields, keyboard/pointer parity,
      invalid-draft feedback and primary action beside the fields.
- [x] Cancellable/owned content suggestions; preserve manual input after failure,
      cancellation and superseded reads.
- [x] Open furniture rows, full samples, explicit empty/unsupported/read/retry
      states and byte-scoped selections across tool/viewport navigation.
- [x] Promised mobile Done, retained failure/retry and retired applied drafts.
- [x] Preserve actual rotated/CropBox/UserUnit crop output and pending-mark mapping.
- [x] Fix Straighten's full-document rebuild and duplicate rotation; preserve
      metadata, attachments, untouched forms/text and exact no-op bytes. Guard
      pending marks and native annotations before rasterising affected pages.
- [x] Remove legacy skins, duplicate preview state/effects, void async chains,
      unused imports and obsolete cross-tool comments; no dependencies added.
- [x] 404 units, 25 browser suites, all 44 layout/theme cases, 12 enlarged-text
      cases, native Safari/Firefox (actual 200% zoom), build/dead/design/portability.
- [x] Signature interior, image source/background controls and promised
      apply/failure lifecycle — completed in the checkpoint below.
- [ ] Then Stamp/numbering interiors and shell loading/error/restored-draft banners.

PDF commit: `9f64243`. Evidence is in PDF's dated validation and
`crop-furniture-2026-10-15.json`.
Physical-device, real OS IME and assistive speech gates remain open. PDF and the
full family refresh are not complete. Local commits only; no push/deployment.

### AIR-07 PDF Signature interior — 2026-10-15

- [x] Air Draw/Choose, colour/background controls, one pad focus contour and preview.
- [x] Persistent editable strokes, separate upload source, decode/size errors and
      same-file retry, aborted abandoned reads and retained previous ready image.
- [x] Keyboard placement/selection/movement/resize/removal; scoped page shortcuts.
- [x] Preserve physical aspect on mixed-page copies and contain initial placement.
- [x] Promised mobile Done, failure retention/retry, actual output, Undo and Cancel.
- [x] Audit/remove legacy skins, unused Switch/focusRing, stale payload/standalone
      references, global Delete listener, silent decode and void Apply paths.
- [x] 405 units, 25 browser suites, 44 layout/theme cases, twelve enlarged-text
      cases, short-landscape/forced-colours/reduced-motion and native Safari/Firefox
      including 200% zoom. Build/dead/design/portability pass; no dependencies added.
- [x] Stamp interior completed in PDF `3a9eef1`; detailed evidence is recorded below.
- [x] Page numbers completed in the checkpoint below.
- [x] Header & footer completed in the checkpoint below.
- [ ] Next: Bates interior.
      Retain WholeDocPanel/Segmented until all live consumers migrate.
- [ ] Remaining custom controls/panels, shell loading/error/restored-draft banners,
      and physical-device/real OS IME/assistive speech acceptance.

PDF commit `24a1965`. Evidence: PDF `docs/air/evidence/signature-panel-2026-10-15.json`
and dated validation. Air 1.0.1 unchanged; portable appendix updated. PDF and the
full family refresh remain unfinished. Local commits only; no push/deployment.

### AIR-07 PDF Stamp interior — 2026-10-15

- [x] Extract Stamp from the still-pending numbering panels; use Air text, tokens,
      segments, colour and precise number/slider controls with single field contours.
- [x] Preserve invalid drafts, token selection/caret and settings across view/tool
      changes; actual title plus one captured preview timestamp reach saved output.
- [x] Await Apply/mobile Done, preserve failed drafts, retire saved previews before
      Undo and offer explicit Start another stamp. Keep busy focus within the panel.
- [x] Reuse output raster for ink previews; bound/clear caches and release temporary
      canvases. Remove old Stamp UI, preview painter, void Apply and unused branches.
- [x] Validate actual PDF text/catalog/attachments, page geometry, retry/cancellation,
      all required size/theme classes, enlarged text and forced-colour controls.
- [x] Page numbers completed in the checkpoint below.
- [x] Header & footer completed in the checkpoint below.
- [ ] Next bounded slice: Bates. Keep shared
      WholeDocPanel/Segmented/controls while those live consumers remain.
- [ ] Continue remaining custom panels and shell loading/error/restored-draft banners;
      physical touch/software keyboards, real OS IME and assistive speech stay open.

### AIR-07 PDF Page numbers — 2026-10-15

- [x] Replace the legacy panel with Air position, format, colour and precision controls;
      share the numeric adapter with Stamp and the six-cell position picker with Bates.
- [x] Expose first-page/start-label settings; preserve invalid drafts, validate integer
      bounds and reject text that does not fit any visible page.
- [x] Share preview/output formatting, await Apply/mobile Done, preserve failed drafts,
      retire successful previews before Undo and explicitly re-arm another numbering.
- [x] Verify actual PDF text, skipped cover, mixed sizes, rotation/CropBox/UserUnit,
      metadata/attachments, Cancel and exact Undo restoration.
- [x] Inspect 44 layout regions and twelve enlarged-text cases, both themes, forced
      colours/reduced motion; validate native Safari and Firefox at actual 200% zoom.
- [x] Remove old panel/painter/formatter paths and old numeric skins. Keep only shared
      controls with live consumers. No dependency added; CSS bundle slightly smaller.
- [x] Complete all 26 browser suites, 412 units and required checks; save evidence and
      commit PDF `b7e0c69`.
- [x] Header & footer completed below: grouped fields, shared tokens/clock, validation,
      promised saves and failed-draft recovery.
- [ ] Next: Bates and remaining shell/loading/error/restored-draft surfaces. Reuse the
      shared precision adapter and position grid. Physical touch/software keyboards,
      real OS IME and assistive speech stay open; full PDF/family work is unfinished.

### AIR-07 PDF Header & footer — 2026-10-15

- [x] Replace cramped triple rows with Header/Footer segments and full-width labelled
      fields; preserve all six values and make token selection/target/caret explicit.
- [x] Share TextTokens and the byte-owned title/clock reader with Stamp; capture one
      time for preview/output, expose read retry and ignore abandoned async results.
- [x] Reuse precision fields for Size/Margin and Air Skip first page; retain invalid
      drafts, last valid preview, associated errors and long-text wrapping.
- [x] Share slot geometry; check actual text fit/overlap on every visible page and
      report unsupported/multiline/empty fields without changing the source.
- [x] Await Apply/mobile Done; preserve failures and focus, retire previews before
      Undo, explicitly re-arm and restore Cancel's checkpoint.
- [x] Verify real text/title/time, mixed pages, rotation/CropBox/UserUnit, metadata,
      attachments and exact Undo; remove old panel/stage/reader/token setter paths.
- [x] Inspect 44 responsive/theme regions, 12 enlarged-text states, forced colours,
      reduced motion, native Safari and Firefox actual 200% zoom.
- [x] Pass 420 units, 26 browser suites and required check/dead/build/design/sync/
      portability gates. No dependencies; CSS gzip unchanged. PDF commit `f467a87`.
- [ ] Next: Bates sequence/prefix/suffix/precision and output/state ownership. Remove
      obsolete adapters only after checking live consumers; keep the code lean.
- [ ] Remaining custom panels and shell feedback; physical touch/software keyboard,
      actual OS IME and assistive speech. Full PDF/family refresh remains unfinished.

### AIR-07 — Editor shell loading/recovery checkpoint (2026-10-15)

- [x] Shared Air status/progress, plain file-error intake, neutral error/saved-session notices and busy surface.
- [x] Retained failed restoration, guarded retry, discard isolation, focus handoffs and request ownership/cleanup through exit and StrictMode.
- [x] 141 responsive/theme/text captures, keyboard scroll access, coarse-pointer emulation, forced colours/reduced motion; 429 units and 26 browser suites pass.
- [x] Native Safari and Firefox recovery reviewed, including Firefox actual 200% zoom; hidden-page Safari scheduling documented without a speculative fix.
- [x] Remove replaced visual paths and unused private adapter; bundle sizes decrease and dead-code check passes.
- [x] QR/barcode completed in `2c3b901`; annotation/form interiors remain next. Retain shared adapters with live consumers.
- [ ] Full physical touch/software keyboard, OS IME and assistive speech acceptance remain open.

### AIR-07 — QR / barcode checkpoint (2026-10-15)

- [x] Replace legacy payload/type/caption/all-pages controls with Air; add keyboard placement/adjustment/removal and custom cross-page selection.
- [x] Preserve quiet zones at page edges, aspect across mixed pages and preview/output caption geometry; bound long barcode preview memory.
- [x] Await Apply/mobile Done and verify failure/retry/dedup, Undo/Redo, Cancel, actual vector modules/caption and catalog preservation.
- [x] Inspect 101 captures; pass 429 units, 24 browser suites, native Safari and Firefox 200%, required checks and record PDF `2c3b901`.
- [x] Remove unused Segmented control and QR legacy imports/skins; share signature/code adjustment buttons. No dependencies; CSS shrinks.
- [x] Annotate, Fill form, Auto-fill and N-up pieces landed in later checkpoints; remaining consumer-aware cleanup is tracked in the latest checkpoint.
- [ ] Complete physical-device, assistive speech, OS IME and final-size scan acceptance; full product/family refresh is unfinished.

### AIR-07 — Shared colour wheel (2026-10-15)

- [x] Replace the PDF colour square with a hue/saturation wheel, brightness track,
      exact hex and optional independent native ranges in all nine consumer tools.
- [x] Match displayed spectrum/cursor math; preserve exact RGB, black/grey continuity,
      valid output during invalid hex, external values, pointer capture/cancellation
      and primary-pointer ownership. Preserve presets and focus return.
- [x] Add Air 1.0.2 upstream rules, opt-in CSS, shared math/types, a live reference,
      math regression tests and portable drift checks; synchronize all six DESIGNs.
- [x] Inspect eleven sizes in light/dark, enlarged text, emulated touch/cancel,
      forced colours and reduced motion. Safari reviewed; Firefox at actual 200% reviewed.
- [x] Remove replaced square/point styles and redundant callbacks; no dependency added.
- [ ] Adopt the same wheel in CloakIMG's shared picker, preserving RGB, recent colours
      and eye-dropper access; validate every tool consumer and actual image output.
- [x] Align CloakResume's existing wheel mapping, controls and gesture/hex recovery
      with the family pattern; preserve primary colour and every template/export.
- [x] PDF Fill form, Auto-fill and N-up pieces are implemented and tested in later checkpoints.
- [ ] Retain physical touch/software keyboard, OS IME and spoken assistive acceptance gates. Full refresh is ongoing.

### AIR-07 — PDF Auto-fill (2026-10-15)

- [x] Migrate detection, saved profile, detected-answer rows, page links and apply/recovery to Air; keep original field-name casing and complete input values.
- [x] Bind scans/answers to exact source bytes, cancel abandoned detection, preserve answers after failed/empty rescans and show truthful local-profile storage failures.
- [x] Await Apply/mobile Done; retain failed drafts, guard duplicate work and verify Undo/Redo/Cancel. Prevent stale use around pending privacy marks.
- [x] Share preview/output text positioning and fitting; disclose existing long-answer shortening. Preserve original PDF text, rotated/cropped physical geometry and catalog data.
- [x] Inspect desktop/laptop/tablet/phone, light/dark, enlarged text, forced colours and native browser interaction; record remaining physical/assistive gates.
- [x] Remove the unused legacy TextField adapter and retired Auto-fill styling; pass required code, 432 unit tests, 24 browser suites, output and portable-design checks. PDF commit `58ac944`.
- [x] FillFormTool (`7c8723d`) and NupTool (2026-10-14 checkpoint; revalidated in `b9738c0`) are implemented and tested.
- [ ] Complete physical touch/software keyboard, actual OS IME and spoken assistive acceptance. Full PDF/family refresh remains unfinished.

### AIR-07 — PDF Fill form (2026-10-19)

- [x] Replace legacy text/multiline/choice/check/flatten controls with Air; preserve full field names and display read-only/unsupported fields truthfully.
- [x] Read each byte revision once; keep drafts through tool/layout changes, reject stale reads and distinguish loading, failure/retry and empty forms.
- [x] Preserve native field flags/options/geometry; clear choices correctly, report field-level save failures and retain partial work without silent omission.
- [x] Await Apply/mobile Done, prevent duplicates, preserve failures, and validate actual editable/flattened PDF output, Undo/Redo/Cancel and privacy-mark handling.
- [x] Inspect all eleven viewport classes in light/dark, enlarged text, keyboard, forced colours and native browsers; retain physical-device/assistive gates.
- [x] Remove final Labeled/Toggle and obsolete switch styles, verify live consumers, pass required checks and record evidence. PDF commit `7c8723d`.
- [x] Reconcile N-up: implemented/validated on 2026-10-14 (docs/air/validation.md); do not repeat its migration based on stale handoff prose.

- [x] Select text — shared Air actions/excerpt, reading/retry/no-text recovery,
      clipboard feedback/manual fallback, keyboard access and actual mark output.
      See the 2026-10-19 checkpoint below.
- [x] Stage/provider/wrapper inventory audited in `b9738c0`; N-up dependencies revalidated.
- [ ] Obsolete-style consumers and physical touch/software keyboard, OS IME and spoken
      assistive acceptance remain open. Full PDF/family refresh is unfinished.

### AIR-07 — PDF Select text (2026-10-19)

- [x] Replace the private legacy button skin and selection card with shared Air controls; use the paper accent for the canvas overlay.
- [x] Bind geometry/ranges to exact bytes/page, retain valid tool/layout selections, ignore abandoned reads, and expose read failure/retry versus no-text/OCR.
- [x] Add page-scoped Left/Right/Shift/Home/End/Escape selection plus Select page text; keep ordinary field and viewport shortcuts intact.
- [x] Report clipboard refusal/unavailability with manual-copy recovery; preserve selection after failed marks and keep committed-action/Undo/Redo/Cancel semantics.
- [x] Correct descender/rotation/shear selection bounds; exclude fully cropped-out runs, preserve page geometry and verify real highlight/box/redaction output.
- [x] Remove old ActionButton/HILITE/readSlice/duplicated selection payload/timer and palette classes; keep shared primitives and utilities with verified consumers.
- [x] Inspect required sizes/themes, breakpoint neighbors, enlarged text, forced colours and reduced motion; review Safari and Firefox actual 200%.
- [x] Final serial regression, compact evidence and local commit: PDF `eacefdd`.
- [x] Audit EditorContext, EditorToolStage, EditorView, OverviewMode and stage registration; retire WholeDocPanel. History boundary and responsive remount focus are covered in the checkpoint below.
- [ ] Physical touch/software keyboard, actual OS IME and spoken assistive acceptance remain open. Full PDF/family migration is not complete; IMG/Resume wheel adoption remains separate.

### AIR-07 — PDF editor wrappers and history (2026-10-19)

- [x] Review the remaining provider/entry/stage/overview seams and their real consumers.
- [x] Remove unused provider commit/jumpTo actions, history base/size/jumpTo/labels helpers and the single-consumer WholeDocPanel composition. N-up calls PrimaryAction directly.
- [x] Keep Undo/Redo/Reset focus at boundaries; guard disabled pointer/keyboard actions and provider calls while busy. Preserve toolbar focus through responsive panel mounts.
- [x] Supply a N-up settings focus fallback after processing; retain tool selection heading focus and existing mobile Done/Cancel semantics.
- [x] Fix aria-disabled icon styling in the canonical Air CSS and synchronize all five bundles. Keep disabled hover/press inert; add no local skin or dependency.
- [x] Review 176 navigation and 70 N-up layout cases, both themes and enlarged text; Safari history/apply and Firefox actual 200% zoom.
- [x] Replace the AI modal test's late animation snapshot with a recorder of real animation creation; keep the 240ms assertion and real execution unchanged.
- [x] Finish required regression, evidence and local commits: PDF `b9738c0`; shared bundle IMG `aa9f6f8`, Drop `0a3a5b5`, Resume `286f57b`. All required product gates pass.
- [x] Foundation checkpoint below completes src/index.css/tokens.css, Select motion and output-font audit. Non-visible registry/lifecycle consumers and full-PDF closure remain next.
- [ ] Physical touch/software keyboard, actual OS IME and spoken assistive acceptance remain open. IMG/Resume wheel adoption and full product migrations remain separate.

### AIR-07 — PDF legacy foundation removal (2026-10-19)

- [x] Trace every old palette/layer/font/motion consumer; migrate the editor shell, processing scrim and modal stack to canonical Air properties.
- [x] Remove tokens.css, obsolete theme utilities, label/disclosure/selection/no-scrollbar/pulse styles and the two unused UI font assets. Preserve 42 annotation font files and the preview/export roster.
- [x] Make frequent Select opening, closing and arrow feedback immediate; remove animation/placement-only state. Let full labels wrap and preserve a readable viewport-bounded menu width.
- [x] Inspect desktop/laptop/tablet/phone in light/dark, enlarged text and native browsers. Validate pointer/keyboard dropdowns, real N-up output, recovery/processing and all affected features.
- [x] Pass required code/dead/unit/build/design/portability checks, update portable PDF requirements and inventory, record evidence and commit: PDF `7bed615`.
- [x] Registry/lifecycle audit completed in the following checkpoint. Remaining full-PDF/device acceptance and IMG/Resume wheel adoption stay open.

### AIR-07 — PDF tool registry and session lifecycle (2026-10-19)

- [x] Trace both tool rosters, lazy boundaries, editor dispatch, stage/inline cleanup, preview resources, timers and event subscriptions.
- [x] Remove redundant standaloneOnly flags/filter and duplicate lazy aliases; derive standalone identities and require a complete implementation map. Reject inherited/unknown tool lookups and invalid active-tool requests.
- [x] Narrow the existing navigation helper to standalone routes; preserve editor entry and constructor handoff. Remove obsolete authoritative routing references.
- [x] Reproduce queued work running after editor departure. Guard queued tasks, late transform results and late preview installation with session ownership; release abandoned previews.
- [x] Validate 22 editor tools through the command surface on desktop/laptop/tablet/phone in both themes; preserve page source, history and heading focus.
- [x] Pass lifecycle regressions for task departure during queueing, transformation and preview generation, plus live stage cleanup and StrictMode replay.
- [x] Finish feature regression, code/dead/unit/build/design/portability checks, portable specification/inventory and evidence; commit after green gates: PDF `00bdee0`.
- [x] Replace legacy PWA/README screenshots and audit manifest/theme metadata, labels/dimensions and OG design (`02552f1`). Static 404 was exposed by the expanded inventory and completed in `82762c4`.
- [ ] Continue full-PDF acceptance, then IMG/Resume wheel adoption and family rollout. Physical touch/software keyboard, OS IME and spoken assistive acceptance remain open.

### Four-site rollout authorization — 2026-10-21

- [x] Create individual dev → main PRs, merge passing candidates and verify live
      Cloakyard, CloakPDF, CloakDrop and CloakResume; synchronize each dev with main.
- [x] Record the explicit user exception authorizing the existing Compact limitation
      for this deployment; retain the unchanged assertion and original fixtures.
- [ ] Resolve PDF's existing Compact long-document missing-facts limitation separately.
- [x] Explicitly exclude IMG from this deployment; preserve its pending redesign.
- [x] Retire Resume's remaining legacy UI font/palette bridge in the later privacy/
      dialog correction; keep document typography and live date/drag adapters.
- [ ] Retain final target/motion and untested physical acceptance gates; deployment
      is not a claim of complete family migration.
