# CloakDrop and CloakRoll native Liquid Glass audit

**Implementation follow-up:** CloakDrop local source commit `35147a3` replaces
the three custom regular-material treatments with plain sheet headings and
Liquid Glass floating chrome, and shares glass actions across seven dialogs.
Light/dark, compact-window and representative accessibility checks are recorded
in CloakDrop's `docs/audits/2026-11-17-modern-materials.md`. Browser authentication
still needs a live visual check. This follow-up has not published a native
release; the findings and ledger below preserve the original pre-change audit.

November 17, 2026. **Both apps adopt the modern macOS system appearance.
CloakRoll also explicitly applies Liquid Glass to floating backup controls and
date-group chrome. CloakDrop retains three custom regular-material surfaces.**
Neither app duplicates CloakTools' large glass action-footer style everywhere.
That is a consistency choice to resolve by control role, not evidence that every
rectangular button is obsolete.

This is a native design audit and coverage ledger, separate from the Air website
migration. No Drop/Roll native source or user data was changed. No native release
was published. Hardware-dependent and unrendered cases below remain open; this
is not a claim that every state passed a complete light/dark/accessibility matrix.

## Baseline and method

- macOS 27.2.1, Apple M2 Max, Xcode 27 toolchain; fresh warning-free Debug builds.
- Drop 1.0.0 (1), source `4ff6b4627adf7d5b21e52f47f833780e61a6cb77`.
- Roll 0.1.0 (15), source `6a59d40a6d0e534732cd587ad84b3237d4e36784`.
- Tools 0.6.0 (26), source `b9123aab4c58eb215e3572b1a605f28c0ce4a56a`,
  is the comparison baseline. `DialogComponents.swift:35` explicitly uses large
  `.glass`/`.glassProminent` capsule actions, with bordered accessibility fallbacks.
- Inventoried SwiftUI view declarations, scene entry points, sheets, popovers,
  alerts, confirmation dialogs, menus, AppKit panels and custom material/style
  sites. [Drop source inventory](drop-surfaces-2026-11-17.txt) and
  [Roll source inventory](roll-surfaces-2026-11-17.txt) preserve the matches.
  Reviewed presentation/layout code; this is not a whole-program reachability proof.
- Inspected live apps through native accessibility and screenshots. Roll's
  illustrated library, progress commands, 205-session history and generated
  backup fixture supplied safe states. Drop's media picker used a localhost HLS
  manifest; browser prompts used localhost pages. No real download was added,
  backup started, history rebuilt, stats reset or browser data cleared.
- Standard and compact Mac windows were inspected: Drop main about 1097×679pt,
  Settings 640×600pt; Roll main 1100×740pt and compact about 860×612pt including
  chrome. Sheets retain their native sizes. Phone/tablet classes apply to the
  websites, not these macOS-only apps.

Apple recommends system controls and reserves glass for the functional layer;
content should remain readable. See [Adopting Liquid Glass](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass)
and [Materials](https://developer.apple.com/design/human-interface-guidelines/materials).
Small and medium Mac controls can remain rounded rectangles; see
[Build a SwiftUI app with the new design](https://developer.apple.com/videos/play/wwdc2025/323/?time=1196).

## Findings and decisions

| Location                                                                          | Finding                                                                                                                                                                                                                              | Disposition                                                                                                                                                                     |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Drop `App/Shared/SheetHeader.swift:48`                                            | Shared custom `.regularMaterial` header band appears in Add Download, Grab Links, Playlist, Repair, Media Picker and Rule Editor. It differs from Tools' compact heading plus glass action footer and Roll's NavigationStack sheets. | A visible family difference, not a broken system sheet. If closer parity is desired, standardize heading/action roles in this shared component first; keep form content opaque. |
| Drop `App/Features/RootView.swift:111`                                            | Floating toast uses regular material, custom stroke and shadow.                                                                                                                                                                      | Candidate for a system glass treatment with Reduce Transparency/contrast fallbacks; render a real toast before changing it. Source-only state in this run.                      |
| Drop `App/Features/DownloadList/DownloadListView.swift:119`                       | Clipboard suggestion banner uses regular material.                                                                                                                                                                                   | Same follow-up as toast. Clipboard watching was not enabled for this audit.                                                                                                     |
| Drop `App/Shared/CircleActionButton.swift:27`                                     | Custom plain 30pt tinted row actions have their own hover/outline behavior.                                                                                                                                                          | Intentional content-row design; do not add glass per row. Compare focus/disabled contrast if consolidating controls later.                                                      |
| Drop browser toolbar, menus, media-shelf popover                                  | System glass appearance is visible in the running build.                                                                                                                                                                             | Keep native controls. The media shelf's content cards and custom grab glyphs do not require a second glass layer.                                                               |
| Roll `App/Features/RootView.swift:64` and `Library/LibrarySectionHeader.swift:12` | Floating backup bar and date labels explicitly use glass; menus and popovers use system presentation.                                                                                                                                | Existing modern treatment. Do not place glass behind thumbnails or metadata cards.                                                                                              |
| Roll sheets and both Settings windows                                             | Standard forms, segmented controls, toggles, menus, toolbar actions and readable content surfaces.                                                                                                                                   | Consistent native roles even when button shape differs from Tools' large operation actions.                                                                                     |
| Drop Grab Links                                                                   | An early light capture appeared to compress the instruction. A fresh populated dark capture displays the complete instruction and three expanded links.                                                                              | Not accepted as a reproducible defect. Keep localized/minimum-size reflow in the remaining gate.                                                                                |
| Roll generated Quick Look                                                         | Preview eventually displayed the generated image; native automation reads became slow around the preview window.                                                                                                                     | No confirmed app hang or established root cause. Do not report a speculative Quick Look defect or rewrite its lifecycle from this observation.                                  |

No blanket material replacement is warranted. A focused Drop overlay/action
comparison is the next design task if matching Tools' operation dialogs more
closely is the intended direction. Preserve native menus, readable content,
keyboard shortcuts and semantic system colors.

## CloakDrop per-view ledger

Legend: **L/D** = visually inspected in that appearance; **AX** = accessibility
state only; **S** = source reviewed, not visually exercised. A row's stated
variants are the coverage; it does not imply every dynamic state or scroll offset.

| View / popup                                                                  | Coverage                                              | Remaining variants                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Main sidebar, empty Failed list, no-selection inspector                       | L; shared toolbar also D                              | Every category, minimum-width split and loading/recovery states                          |
| Completed list, selected row and inspector                                    | D, existing records read-only                         | Active, queued, paused, scheduled, failed, integrity and receipt branches S              |
| Row context menu / sort / Add menu                                            | D; Add also L                                         | Other status-specific context actions S; destructive actions not invoked                 |
| Clipboard banner and transient toast                                          | S                                                     | Render with a disposable clipboard/download fixture                                      |
| New Download default                                                          | L/D                                                   | Long inline failures and minimum-size/localized content                                  |
| New Download schedule/date/repeat and authentication disclosure               | L                                                     | Referrer, cookies, checksum variants S; no credentials submitted                         |
| Grab Links empty and pattern-expanded three-item list                         | L/D                                                   | Fetch/loading/error, long lists and filter-empty S                                       |
| Import Playlist default                                                       | D                                                     | Fetch/loading/error, populated selection and unavailable qualities S                     |
| Repair Download                                                               | S                                                     | Requires a paused/failed resumable fixture; no real row altered                          |
| Media Picker quality and format                                               | D, two HLS qualities and format menu                  | Audio-only, alternate audio/subtitles, DRM/unavailable-helper branches S                 |
| Browser blank workspace and address toolbar                                   | L/D                                                   | Page loading/error and multiple-window layouts not fully exercised                       |
| Media Shelf                                                                   | L/D empty popover                                     | Populated candidates, DRM and extraction failures S                                      |
| Browser JavaScript alert, confirm, prompt                                     | D AX; dismissed/cancelled                             | Native screenshot tool returned blank alert captures, so visual appearance is unverified |
| Browser HTTP authentication sheet                                             | S                                                     | Local 401 challenge did not show it; no credentials entered                              |
| Browser offline screen / Cloak Runner                                         | Ready screen D; offline and game phase code S         | Running, paused, game-over and narrow-window layouts not rendered                        |
| Settings General                                                              | L/D top; D bottom                                     | Enabled speed/schedule and shortcut-name fields S; no persistent setting changed         |
| Settings Rules                                                                | L/D empty; New Rule L/D and condition menu L          | Existing-rule edit, all conditions, long lists and save validation S                     |
| Settings Network                                                              | L/D system proxy                                      | Manual proxy fields S; network settings not changed                                      |
| Settings Speed Test                                                           | L/D existing results                                  | Live measurement, cancellation and network failure S; no test traffic generated          |
| Settings Browser                                                              | L/D                                                   | Clear Website Data confirmation AX only, cancelled                                       |
| Settings Stats                                                                | L/D top, D footer                                     | Reset confirmation AX, cancelled; other tier values S                                    |
| Settings Privacy                                                              | L/D top, D lower policy and links                     | Full localized/reflow/accessibility matrix                                               |
| Settings About                                                                | L/D; support action visible                           | Five-tap Matrix animation S, not activated                                               |
| Menu-bar extra, Dock progress                                                 | S                                                     | Active/idle status presentation not visually certified                                   |
| Share extension                                                               | AppKit source reviewed                                | Host share sheet and extension errors not rendered                                       |
| File/folder panels: add, batch text, playlist, repair, rule, Metalink, export | Native NSOpenPanel/NSSavePanel call sites inventoried | Individual panels not visually certified                                                 |
| Change-download failure, initialization/recovery, remove/delete confirmations | Native alert/confirmation source reviewed             | Not induced against user data; destructive actions not performed                         |

## CloakRoll per-view ledger

| View / popup                                                | Coverage                                                           | Remaining variants                                                                             |
| ----------------------------------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| Main sidebar/library/grid, date-group chrome and backup bar | L/D illustrated 20-item sample                                     | Every type/status filter, large-library scrolling and real device lifecycle                    |
| View Options menu                                           | D                                                                  | Every sort/size/group combination not separately rendered                                      |
| Capture Date popover                                        | L/D, From/Through and quick dates                                  | Calendar nested picker and every date-bound error                                              |
| Grid selection and item actions                             | Selected item L/D; action source reviewed                          | Full keyboard/range-selection/context-menu interaction matrix                                  |
| No Device, Restricted Device, Disconnected Library          | D development fixtures                                             | Light counterparts, connecting/enumerating/partial enumeration S                               |
| Empty search/filter result and live-library notice          | S                                                                  | Render no-match, refresh and unavailable-library branches                                      |
| Media Info                                                  | L default; D long filename/many originals and missing metadata     | All original rows not scrolled; real camera EXIF loading/error S                               |
| Backup progress / details popover                           | D Copying, details; compact Preparing/Verifying/Stopping/Finishing | Real transfer/Stop, completion/failure and light compact matrix                                |
| Review Backup                                               | L generated fixture; long destination readable                     | Low space, unknown size, loading failure and stale-selection S                                 |
| Continue Backup                                             | L generated fixture, three matched items                           | Unmatched/disconnected/error branches S                                                        |
| Unavailable Originals sheet                                 | S                                                                  | Missing-device resource fixture not rendered                                                   |
| Backup Health                                               | L generated fixture, latest incomplete attempt                     | Empty/loading/error, many devices and inaccessible folders S                                   |
| Check Saved Files                                           | L initial and completed 2/2 match on generated files               | Stop, missing/changed files, failure and no-files S                                            |
| Saved Originals                                             | L generated list, filters and disclosure                           | Pagination, date/type no-results, inaccessible folder/error S                                  |
| Saved Original Preview                                      | L loading then generated image displayed                           | Other formats, failure alert, keyboard dismissal and dark counterpart not fully certified      |
| Backup History                                              | D 205-session sample, expanded incomplete entry and filter menu    | Empty/loading/error/no-match S; light expanded history AX only                                 |
| Rebuild Backup History                                      | D idle and USB-method explanation, cancelled                       | No recovery executed; preparing/checking/verifying/saving/completed/stopped/failed S           |
| Settings General                                            | L/D                                                                | Enlarged/localized text and exhaustive shortcut behavior                                       |
| Settings Backup                                             | L/D                                                                | Folder picker and alternate organization states                                                |
| Settings Notifications                                      | L/D                                                                | OS permission prompt not triggered                                                             |
| Settings Privacy                                            | L/D top                                                            | Entire lower policy/recovery prose not visually scrolled                                       |
| Settings About and Licenses sheet                           | L/D                                                                | Entire license scroll and five-tap Matrix animation not exercised                              |
| Help: Get Started, Interrupted Backup, USB Library          | D three sheets                                                     | Lower scroll sections, light and enlarged-text matrix                                          |
| Device/folder picker and system alerts                      | Source reviewed                                                    | Multiple real devices, expired folder grants, Backup Unavailable / Original Unavailable alerts |
| Dock status, development-only Dock examples                 | Source reviewed                                                    | Actual Dock overlay rendering not certified                                                    |

## Evidence, cleanup and remaining acceptance

Native evidence is retained locally in this chat's `native-glass-audit` directory,
not committed: some captures contain existing download names and backup paths.
The checked-in [capture manifest](capture-manifest-2026-11-17.json) records names,
hashes and exclusions. Blank alert captures and the misnamed Matrix capture do
not count as visual passes. The final Grab Links capture is readable despite its
early diagnostic filename. The loaded Quick Look capture was explicitly inspected.

Build receipts: `/tmp/cloakdrop-liquid-build.log` and
`/tmp/cloakroll-liquid-build.log`, both `BUILD SUCCEEDED` with no warnings. Runtime
fixtures used only localhost; generated backup checking used isolated sample
files. System appearance was restored to Auto and System Settings to Keyboard.
Drop was returned to All; Roll to its standard window and live-device mode.

Remaining acceptance requires a real unlocked iPhone, disposable download/error
fixtures and extension hosts, plus spoken VoiceOver, Reduce Transparency,
Increase Contrast, Reduce Motion, keyboard focus, localization and minimum window
sizes across every state. Standard system APIs do not by themselves prove those
tests pass. These gates are documented rather than silently treated as complete.

The screenshot task is independent: CloakTools' website and README now use clean
native New Files captures in both themes. Its web deployment does not publish
Drop/Roll binaries or complete the remaining native acceptance matrix.
