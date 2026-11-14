# Family maintenance audit — 14 November 2026

Status: full-view software audit and dependency checks pass; website promotion is in progress. Air 1.7.3 adds privacy-source consistency; the
shared visual components, notice geometry and motion implementation are unchanged.

## Changes

- PDF and Resume now distinguish personal details in local documents from data
  collected by the project. Resume's public page and editor dialog share the
  policy body, revision date and lead; browser caches are not described as cookies.
- Drop adds an explicit website-hosting/external-service disclosure, distinct from
  its native network behavior. Drop and Roll derive native policy dates from their
  maintained Markdown. Roll renders that policy directly instead of maintaining a
  second hand-copied body. Existing section anchors remain intact.
- All six sites use the current compatible direct dependencies and refreshed
  lockfiles. Remove expired release-age exceptions and Yard's obsolete Undici
  override. Keep the demonstrated Astro TypeScript compatibility exception below.
- IMG matches its MediaPipe JavaScript and WASM versions and rebuilds its existing
  HEIC codec using Emscripten 7.0.0. No new library or native UI is introduced.
- The reduced-motion audit now observes the actual preference-change event and
  requires settled state in that event turn, replacing a flaky fixed 40ms sleep.

## PWA notices and motion

PDF, IMG and Resume use the identical pinned `update-notice.tsx` and `air-update`
styles. The popup is fixed at the bottom right, 384px wide with at least 16px plus
safe-area clearance; on phones it fits the available width at the bottom. It does
not reduce canvas height. The same X target, wording, states, corners and reload
action apply. Pending work still blocks reload where required. Yard, Drop's website
and Roll's website do not have service workers or fabricated update notices.

Actual waiting service workers exercise update, busy and offline states. Separate
feature tests verify work preservation and activation. The dialog matrix uses
visible classic scrollbars, checks dragging/wheeling the thumb, keeps title/action
regions reachable and covers both themes and enlarged text.

| Before                                                        | After                                                                        | Why                                                                                                                |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Reduced-motion test assumed a media event arrived within 40ms | Observe the event, then assert one completed exit and zero active animations | Tests synchronous settlement after the actual event without a scheduler race (`scripts/test-air-presence.mjs:135`) |
| Existing Air motion and six app-specific landing motifs       | Retained after fresh browser/layout/lifecycle checks                         | Shared timing and interaction semantics already conform; each app keeps its approved identity                      |

**Motion verdict: Approve for the tested software scope.** The shared presence
controller uses current transforms for interruption, transform/opacity only and
the Air curves; reduced-motion changes settle pending exits. See
`design/air/presence.mjs:27`, `:56`, `:94`, `design/air/air.css:78` and the portable
motion results. Marketing artwork retains finite completion, completion-only
replay, stylesheet-ready startup, offscreen suspension and static fallbacks.
Physical-device feel and assistive acceptance remain separate.

## Dependencies and native checks

The registry snapshot covers all 100 direct web declarations, resolving the Vite+
catalog aliases to their actual packages. Ninety-eight use current stable upstream
versions. Both Astro sites retain TypeScript 6.0.3 because current
`@astrojs/check` 0.9.12 declares `^5.0.0 || ^6.0.0`; TypeScript 7 is not within its
supported peer range. All six package-manager security audits report zero findings.

Key upgrades: Vite+ 1.6.0; Astro 7.4.12; Wrangler 4.162.0; Lucide 1.73.0; PDF's
LangChain Core 1.4.1, LangGraph 1.7.4, LiteParse 2.19.0 and Motion 14.14.0; IMG's
MediaPipe 1.2.3; Resume's Harper 3.2.0 and html2canvas-pro 2.6.4. The snapshot and
lockfiles, rather than this abbreviated list, own the complete versions.

IMG's libheif 1.23.7, libde265 1.1.3, Kvazaar 2.3.2 and libwebp 1.6.0 remain
current stable pins. The official Emscripten 7.0.0 SDK rebuild passes an actual HEIC
decode and nine export round trips: decoded RGBA and encoded round-trip bytes match
the previous compiler's output. PDF's real-model short and 33-page fixtures pass on Quality, including grounded answers, warm return, tier swap to Compact and memory release/reload. These cached runs do not establish cold-download behavior. A real portrait is detected and anonymized with
the updated MediaPipe runtime; no page/worker errors occur.

Roll's core and PerformanceProbe both upgrade GRDB from 7.11.1 to 7.12.0, pinned to
`92a554cd0d5e8d67cb18993c6054e73fe42c066c`. Its 418 core and 246 hosted tests pass;
strict lint, normal and clean arm64 Debug builds, Release PerformanceProbe and the
10,000-item generated-data run pass. Compiler-backed unused-import analysis checks
167 first-party files with no violations. Its current build-only DMG dependencies
remain dmgbuild 1.6.7, ds_store 1.3.3 and mac_alias 2.2.3.

Drop already has GRDB 7.12.0, FFmpeg 9.0.2 and official yt-dlp 2026.10.26. Its 673
core tests, strict lint, localization check and bundled-tool startup checks pass.
The user's existing official yt-dlp frozen-runtime exception remains documented;
this does not claim its embedded Python/OpenSSL are independently latest. No custom
runtime is introduced. Native dependency commits are `8d8ddfb` (Roll) and `00cdde6`
(Drop verification); both original local dev branches include them. No native
release, installation, hardware acceptance or unrelated native feature publication
is part of these commits. KERR remains unchanged under the contributor instruction.

Primary version sources: [npm registry](https://registry.npmjs.org/),
[GRDB 7.12.0](https://github.com/groue/GRDB.swift/releases/tag/v7.12.0),
[official yt-dlp](https://github.com/yt-dlp/yt-dlp/releases/tag/2026.10.26),
[FFmpeg](https://ffmpeg.org/download.html),
[Emscripten SDK](https://github.com/emscripten-core/emsdk/blob/main/emscripten-releases-tags.json),
[libwebp stable tags](https://chromium.googlesource.com/webm/libwebp/+refs).

## Coverage ledger

All 24 fresh view suites pass after the documented setup/test-harness corrections.
The base matrix spans 320/375/390/430px phones, short phone landscape, portrait and
landscape tablets, 1280/1366px laptops and 1440/1920px desktops. Both themes are
tested; individual suites include 16/32px text, touch/fine pointers, reduced motion
and forced colours as recorded in their receipts.

| View / state                                    | Fresh coverage and result                                                                                                                                                                      |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Six landing pages, headers, menus and footers   | 648 layouts, 390 interactions and 288 secondary shell observations; both themes and all four viewport classes visually compared                                                                |
| Privacy and return-home behavior                | 408 policy layouts, 22 return/contents journeys; final date-format rerun passes; preserved draft and section anchors                                                                           |
| PDF/IMG/Resume editors and shared control roles | 66 Chromium + 66 WebKit cases across eleven sizes, plus 24 final synthetic-document captures; actual editor, active control, export/Actions and focus states                                   |
| PWA notices                                     | 396 real-worker update/busy/offline states, 162 captures; cross-app geometry, wording and pixel comparisons; separate PDF/IMG work-preservation/activation checks                              |
| Dialogs and classic scrollbars                  | 264 Chromium/WebKit cases, both themes, all viewport classes and enlarged text; title/action reachability, close/focus behavior and actual scroll-thumb interaction                            |
| Motion                                          | 182 presence/workflow checks; each engine passes 132 moving layouts, 24 fallbacks, six lifecycle and six cold-stylesheet startups; Yard growth invariants and arrivals pass                    |
| IMG all 26 tools and alternate states           | 1,080 Chromium observations at nine profiles, both themes; zero errors/failures/unexpected requests; representative tools visually inspected across viewport classes                           |
| IMG entry, batch and output                     | 204 entry layouts, eight entry checks and decode fidelity; 176 batch states; eight Chromium/WebKit compact completion journeys; history/reset/cancel and 12 actual PNG downloads pass          |
| PDF all editor tools and collections            | 176 registered selections, 148 navigation layouts, 88 collection cases and 16 Chromium/WebKit apply/cancel/download journeys                                                                   |
| PDF standalone / Ask / export / recovery        | 260 empty/selected/loading states across seven tools and both engines; full 16-suite smoke and seven-suite extended feature checks pass, including AI dialog and mocked streaming edges        |
| Resume all 13 sections                          | 1,666 empty/populated layouts and 16 contrast pairs                                                                                                                                            |
| Resume library, review and custom controls      | 386 library, 960 review, 192 options, 256 date, 320 logo/photo and 128 contact/language observations; busy/failure/empty states and keyboard selection                                         |
| Neutral hyperlinks                              | 1,272 home/privacy layout/hover states and 444 keyboard checks; no blue hover text                                                                                                             |
| Source, dependencies and documentation          | All source/type/build/portable gates pass; 1,338 web unit/feature tests plus 1,337 native tests; six zero-finding package audits; six clean Knip scans; eight READMEs and 114 local references |

The automated matrices are broader than the sampled human visual review. Equivalent
roles share the Air presentation; document/photo output and task-specific workspaces
remain intentionally distinct. No additional PWA or motion styling change was
warranted. The final portable evidence manifest includes compressed receipts and
selected reviewed captures in [the manifest](evidence/maintenance-2026-11-14/manifest.json); the complete raw set remains in
`/Users/sumitsahoo/Developer/.air-review-2026-11-14/evidence`.

## Cleanup and limits

Knip 6.45.1 reports no unused application files, exports or dependencies in all six
websites. The CSS candidate scan's only unmatched name is Resume's dynamically
constructed `resume-section-nav--rail`; its use in `SectionRail.tsx` is verified,
so it is retained. Duplicate policy prose/dates and obsolete dependency overrides
are removed. These checks establish no detected dead code, not a proof that every
possible runtime path is useful. Eight README structures and 114 local references
remain aligned.

Initial failing diagnostics are retained separately from passing reruns: missing
fixture/env paths, production-only absence of dev debug hooks, newly required Node
types, stale source assertions, Air inventory versions and the media-event timing
assumption. No failing required check is waived. Original unrelated PDF AI changes
are untouched. The previously approved Compact AI quality limitation is unchanged;
this UI/dependency audit does not certify every model's inference quality.

Screenshots use synthetic documents and tracked sample images in the portable
evidence. Private fixture captures stay local. Physical Windows/iPhone/iPad,
software keyboards/IME, actual browser zoom, spoken assistive technology, physical
print/USB and native distribution acceptance remain explicitly open. WebKit and
32px root-font tests are not substitutes for those gates.
