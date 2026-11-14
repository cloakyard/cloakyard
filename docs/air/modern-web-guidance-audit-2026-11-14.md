# Modern Web Guidance audit — 14 November 2026

Status: implementation and software verification pass; all five product PRs are merged.
IMG, Resume and Drop are production-verified; PDF and Roll production are pending.
The canonical PR records its own final rollout receipts. This is an additional
platform-guidance pass over the published Air 1.7.3 baseline, not a new redesign.
Air 1.7.4 records composition-safe actions, increased-contrast scrollbars and the
rules for applying modern platform guidance without changing approved behavior.

## Installation and provenance

All six web repositories install Google's `modern-web-guidance` through
`DISABLE_TELEMETRY=1 npx --yes skills@latest add GoogleChrome/modern-web-guidance --skill modern-web-guidance --agent codex claude-code --yes`.

- Upstream: `GoogleChrome/modern-web-guidance`, commit
  `4dd968349e54ca45a05dd5c818fb035c9054b022`.
- Skill version: `2026_11_09-5bcc021b`; installer: `skills@1.8.1`.
- Each unmodified 210-file skill folder has v2 hash
  `9e69ce00dc314b64f6664031b70295ea46c7de93ac682c624808df6e48e08b66`.
- `.agents/skills/modern-web-guidance` is canonical; `.claude/skills/modern-web-guidance`
  is a relative symlink. `.agents/MODERN_WEB_GUIDANCE.md` preserves source,
  update instructions, attribution and licenses. The root install also applies
  to Drop/Roll's `apps/site` descendants. Nothing is added to app dependencies or
  published assets.
- The installer migrates skill locks from v1 to v2. Blank hashes on existing
  modified Vercel skills deliberately retain its `modified` state; their source
  files are unchanged. This is not evidence that those skills disappeared.
- All guidance commands used the upstream telemetry opt-out. No analytics or
  reporting endpoint was added to any app.

## Findings and changes

The broad scanner has 35 active rules across 33 guides, approximately 20% of the
corpus. Its initial eight matches were reviewed against their supplied rubrics;
manual source and browser review found additional keyboard issues.

| Finding                                        | Decision and evidence                                                                                                                                                                                                                                                                                                         |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IMG hex colour and custom emoji Enter handlers | Fixed: native composition and Safari `keyCode === 229` cannot apply or clear the draft; ordinary Enter and explicit controls remain available.                                                                                                                                                                                |
| IMG tool-search and numeric-field shortcuts    | Manual finding outside the scanner's initial matches. Guard composition before command selection, stepping, validation or blur.                                                                                                                                                                                               |
| IMG new-canvas window shortcut                 | Ignore composition, handled events and native controls; Enter on Cancel cannot create a canvas or double-activate Create. Footer Cancel now uses the existing animated dismiss component.                                                                                                                                     |
| IMG Pen shortcut                               | Ignore composition and editable fields before committing/cancelling a path; canvas shortcuts retain their normal behavior.                                                                                                                                                                                                    |
| Canonical Air date-year Enter                  | Same composition guard; validated in Chromium/WebKit, then regenerated into all six portable studies.                                                                                                                                                                                                                         |
| IMG 404 source                                 | The old public asset was still shipped, not dead code. Replace its bespoke gradient/glass styling with prerendered shared Air Header/Footer/recovery layout, using the same build-time version and static navigation as privacy. Remove the obsolete public file. The host's existing SPA fallback routing remains unchanged. |
| Shared increased-contrast scroll thumb         | Keep the ink-coloured thumb visible when `prefers-contrast: more`; forced-colour system styles and the default quiet inset thumb remain. No scrollbar colour animation.                                                                                                                                                       |
| Two IMG checkbox matches                       | Dropped: these are native radio-backed segmented selections, including forced-colour indication, not replacement checkbox boxes.                                                                                                                                                                                              |
| IMG Crop Enter                                 | Kept: the global handler already excludes editable fields, native controls, overlays and handled events; it is not a text submit path.                                                                                                                                                                                        |
| Resume dotted document links                   | Retained output-compatibility exception: `.resume-root a.tpl-link` styles the exported résumé document and its raster/PDF pipeline, not app hyperlinks. Changing it requires output-specific comparison, not a generic app-link rewrite.                                                                                      |

Final scanner counts: Yard 0, PDF 0, IMG 3 (two radio matches and the guarded Crop
shortcut), Resume 1 (document-output exception), Drop 0, Roll 0. Safe exceptions
were not rewritten to force a zero count.

## Wider guidance review

Retrieved and reviewed `html`, `css`, `accessibility`, `privacy`, `security`,
`performance`, `ime-safe-enter-submit`, `dialog`, `animate-to-from-top-layer`,
`dark-mode`, `customize-scrollbar-color-and-thickness`,
`adapt-scrollbar-to-contrast-preferences`, `motion` and `responsive-design`.

- **Semantics and input:** native labels, accessible names, headings, landmarks,
  keyboard/focus behavior, validation and composition were checked in source and
  the listed browser journeys. PDF already guards its custom text-submission
  handlers; Resume uses native edit/form paths. Recovery retains a named home
  action, logical heading, skip link and complete shared footer.
- **Appearance and responsive behavior:** preserve Air tokens, fixed component
  roles, both themes, target sizes, focus contours, safe-area clearances and
  dynamic canvas sizing. Do not introduce experimental corner shapes, CSS resets
  or an unrelated component library to follow generic styling suggestions.
- **Overlays and motion:** retain tested Base UI/native/custom modal ownership
  and the shared interruptible presence controller. A wholesale native-dialog
  migration would be architectural work requiring user review. Existing WAAPI
  settlement is retained for Safari/Firefox exit behavior. Automatic artwork is
  finite, reduced-motion safe and replayable only after completion; no persistent
  animation or extra playback control is introduced.
- **Scrollbars:** standard properties remain the fallback. Air deliberately uses
  the tested WebKit pseudo-element path where supported to remove Windows arrow
  buttons and keep the specified inset track geometry. This is a documented Air
  compatibility choice rather than blindly applying the guide's fallback-only
  selector. Increased contrast now overrides hover fading.
- **Performance:** preserve module scripts, local fonts, lazy editor/model/codec
  loading, workers, bounded caches and deliberate PWA update gating. The new
  recovery page is static HTML with a small navigation module, not another editor
  or React runtime. No speculative preloads, CDN dependencies or new runtime
  packages are added.
- **Privacy/security:** retained project boundaries and existing model-download
  consent. Policy text distinguishes local user documents, optional asset
  downloads, external services and host logs. Existing exported HTML escaping,
  local storage ownership, worker/WASM requirements and configured CSPs must not
  be replaced by generic blanket policies. Global Trusted Types/strict-CSP
  migration would need a separate sink/worker/export compatibility plan and user
  review; it was not introduced in this bounded pass. This is not a penetration
  test or a claim that no security defect exists.

## Per-view coverage ledger

The same-day [full maintenance audit](maintenance-audit-2026-11-14.md) is the
baseline for every applicable tool, standalone/batch/library flow and edge state.
The six baseline revisions are retained in the portable evidence. This pass adds
fresh guidance-specific coverage below; inherited rows are not relabelled as new
whole-app testing.

| View / app                                 | Fresh verification in this pass                                                                                                                                                        | Retained baseline / limits                                                                                                                                                       |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| All six landing and reading/recovery pages | 648 home-layout states and 288 secondary-layout states, light/dark, responsive sizes and enlarged text; source reviewed for modern platform guidance                                   | Public tests alone do not establish editor conformance.                                                                                                                          |
| PDF, IMG and Resume editors                | 66 Chromium and 24 WebKit real editor/control/dialog comparisons, phone/tablet/laptop/desktop and both themes                                                                          | Full per-tool/standalone/batch/library matrices remain in the baseline ledger; unchanged features are not claimed as newly retested.                                             |
| IMG changed inputs, recovery and contrast  | 16 Chromium/WebKit journeys across 390×844, 768×1024, 1280×720, 1440×900, both themes; synthetic IME signals plus ordinary key actions; recovery/home navigation; Cancel keyboard path | Physical IME and software-keyboard sessions still need device acceptance.                                                                                                        |
| IMG Text, Emoji, Crop and Pen panels       | Targeted four-layout, light/dark, Chromium/WebKit tool-state journeys                                                                                                                  | Tool-state checks are distinguished from exported-pixel checks.                                                                                                                  |
| IMG exported output                        | Real unchanged/adjusted PNG downloads in both engines                                                                                                                                  | Preserve existing export/AI/model acceptance; no inference of universal model quality.                                                                                           |
| Shared Air date study                      | Four real-browser date-apply journeys, both engines and themes                                                                                                                         | Reference behavior is not product feature coverage.                                                                                                                              |
| Shared motion and dialogs                  | Presence/interruption/reduced-motion and real editor workflows in both engines across the responsive matrix                                                                            | Physical feel, assistive speech and device gestures remain open.                                                                                                                 |
| PWA notices                                | Same pinned notice/controller code; contrast was tested on actual IMG scrollers; identical shared CSS selectors also cover `.air-update`                                               | Same-day 396 actual-worker and 264 dialog/classic-scrollbar baseline checks remain applicable; no worker lifecycle change. Yard, Drop site and Roll site have no service worker. |
| Native mac apps                            | No native source or package changes in this skill pass                                                                                                                                 | Same-day native dependency/build/test receipts remain in the maintenance audit.                                                                                                  |

## Verification and evidence

Portable receipts and inspected visual sheets are under
`evidence/modern-web-guidance-2026-11-14/`. Raw logs and screenshots are retained
outside the repos at
`/Users/sumitsahoo/Developer/.air-review-2026-11-14/evidence/modern-web`.

The check/build gate passed in all six web repositories. IMG's full suite passes
501 tests, with additional browser checks for changed controls and its static
recovery. Air source/bundle/portability and family README checks pass. Physical
Windows/iPhone/iPad, actual browser zoom, IME keyboards, spoken assistive technology,
printing and native distribution acceptance remain explicitly open. No drastic
visual or architectural change was made.

Final motion evidence combines 115 completed Chromium states from the initial run
and 115 states from a full WebKit rerun. The initial WebKit run timed out observing
a 240ms keyboard-entry frame in Resume at 1024×768 dark; its failure log is retained.
The unchanged full WebKit rerun passed after the other browser suites finished.
No product motion code, duration assertion or retry policy was weakened. The
observation was not reproduced; simultaneous audit load is a possible cause, not
a proven diagnosis.

The final targeted IMG matrix passes 64 states per engine (128 total), with no
browser errors or unsolicited model requests. Twelve real PNG downloads preserve
unchanged and adjusted outputs. Eight additional no-JavaScript recovery states
pass. The final 14 visual comparison sheets were inspected: recovery, colour
popovers, increased contrast, and PDF/IMG/Resume editors and dialogs at all four
viewport classes in both themes. Screenshots wait for popover entry to settle.

## Website promotion and local integration

| Website     | PR                                                      | Main commit | Production verification                                                                 |
| ----------- | ------------------------------------------------------- | ----------- | --------------------------------------------------------------------------------------- |
| CloakPDF    | [#238](https://github.com/cloakyard/cloakpdf/pull/238)  | `68869ba`   | Pending: the live CSS still lacks the new contrast rule.                                |
| CloakIMG    | [#38](https://github.com/cloakyard/cloakimg/pull/38)    | `0070469`   | All 89 published files match the tested build.                                          |
| CloakResume | [#65](https://github.com/cloakyard/cloakresume/pull/65) | `81e09bf`   | All 101 published files match the tested build.                                         |
| CloakDrop   | [#64](https://github.com/cloakyard/cloakdrop/pull/64)   | `d98a86e`   | All 14 published files match the tested build.                                          |
| CloakRoll   | [#20](https://github.com/cloakyard/cloakroll/pull/20)   | `d65e9d4`   | Pending: HTML still references the previous CSS, beyond its known Cloudflare injection. |

All five merged trees exactly match the tested PR trees. Remote dev includes main
for every product. Roll uses the already-approved website-only exception; its dev
merge preserves the exact native tree and matches main's website tree. Original
IMG/Resume/Roll checkouts are updated. Original Drop merges website main locally
without pushing its separate native history. Native source trees are unchanged.

The original dirty PDF checkout receives only the isolated skill-install commit
(`17b7a00`). Its unrelated diff hash and all 54 status entries are unchanged; no
work was stashed or staged. Its runtime update remains in the clean isolated tree
and remote main/dev.

Cloudflare's existing dashboard session currently requires authenticator
verification. The user explicitly deferred Cloudflare verification until later. PDF's
latest green Workers check describes a **dev preview**, so it does not establish
production deployment. Do not mark these two sites deployed until live bytes
match. The canonical PR owns subsequent production/dev-sync receipts and any
resolution of these pending deployments.
