# Air component refinement matrix

The main Cloakyard repository owns these patterns. The portable contract is
normative; this matrix records coverage, not separate appearance rules. A reference
pass does not mean product adoption, cross-engine approval or user visual sign-off.
Component coverage must include custom implementations inside every editor.

For every component, define: anatomy and tokens; meaning/semantics; default,
hover, focus, active/selected, disabled, empty, error, busy and overflow states as
applicable; keyboard/touch and announcements; desktop/tablet/mobile/short-screen
behavior; both themes, enlarged text, forced colours and reduced motion; output
and feature invariants. Mark inapplicable states with a reason, not silence.

| Component                        | Current reference                                                                                                            | Next required refinement/validation                                                            |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Buttons / icon actions           | Shared hierarchy/press; working busy/success/error/retry/cancel and named icon/tooltip studies                               | Production async lifecycle, stale-result/cancellation guards and every real icon action        |
| Text / multiline fields          | Working required/invalid/corrected, empty, populated, read-only, disabled, focus and textarea specimens                      | Production IME/undo/autofill/software keyboard; all real product field adapters                |
| Select                           | Shared trigger and native custom picker; keyboard, disabled, scrolling and modal use                                         | Accessible adapter and visual parity in unsupported engines                                    |
| Checkbox / radio                 | Native semantics, shared custom glyphs, mixed parent/children, disabled, grouped arrows                                      | Actual screen readers and platform forced-colour settings                                      |
| Segmented choices                | Native radio group specimen with neutral plane/blue marker                                                                   | Audit every existing button adapter; distinguish tabs from toggles/actions                     |
| Switch                           | Native checkbox with switch role, on/off/disabled; 44px target                                                               | Real commit/failure/rollback behavior for asynchronous settings                                |
| Slider / numeric entry           | Signed ranges, precise value, neutral midpoint; bounded unit-field validation and retained applied value                     | Real slider touch dragging, all product units/modes and disabled extremes                      |
| Navigation / tool rail           | Shared landing and representative editor rails                                                                               | Complete route/back/focus states and long translated labels                                    |
| Dialog / sheet                   | Export/date examples; long/invalid rename, safe remove/restore, menu handoff and origin focus                                | Stacked overlays, production forms/unsaved work, real software keyboard                        |
| Popover / context menu / tooltip | Working anchored settings, equivalent More/context menus, delayed hover and named keyboard tooltip; 56 size/theme/text cases | Nested submenu/overlay dismissal, actual assistive technology, cross-engine and physical touch |
| Notices / toast / progress       | Semantic messages; real byte progress, unknown-total phase, cancellation and interruption/retry                              | Timed/retry/undo, actual product processing and assistive-technology announcements             |
| Lists / layers / history         | Representative Resume repeated entries                                                                                       | Large lists, rename/reorder/undo, multi-selection, empty/error and mobile row actions          |
| Upload / drop zone               | Real text browse/drop/paste, retained selection, byte progress, abort/retry and stale-result tests                           | Real image/PDF/JSON adapters, encrypted files, device/engine and permission parity             |
| Rich writing                     | Resume writing, repeated entries and partial dates                                                                           | Nested formatting, IME/paste/undo/selection, every template/output invariant                   |
| Signature / drawing              | PDF draw/choose and toggles                                                                                                  | Real pen/touch/undo, import failure, rollback, placement and export                            |
| Colour / curves / levels         | Representative IMG custom widgets                                                                                            | Remaining modes, keyboard reachability, clipping, touch and processing fidelity                |
| Canvas / document chrome         | Three editor compositions and compact expanded controls                                                                      | Real zoom/pan/selection handles/context controls and all object states                         |
| Search / template / icon library | Local filtering/clear/no-results, composition boundary and focus return                                                      | Real loading/error/results navigation/selection; large libraries and long names                |
| AI / privacy / recovery          | Long-reading privacy and recovery studies; retained note, real session save/restore/download and unload guard                | Model consent/download/cache/retry, actual product persistence/failures and policy review      |
| PWA / install / update           | Contract defined                                                                                                             | Offline/update/unsaved-work prompts and interruption behavior                                  |
| Landing / reading / footer       | Landing plus standalone reading/recovery compositions; shared navigation/footer, 136 layout/theme/text cases                 | Complete production routes, browser/device/assistive-technology parity                         |

## Current bounded pass

File intake uses one matte plane, a ruled selected-file row and a separate text
preview. Browse/drop/paste share validation; invalid acquisition keeps the previous
file. Real UTF-8 reads report measured bytes, retain partial work on cancel/error,
and reject stale results after replacement/removal. Busy actions preserve geometry
and focus, while phase changes are announced independently of busy content.

The standalone file study covers known/unknown totals, manual inspection pause,
interruption and retry. The latter modes are labelled study controls; it does not
validate product formats. The reference is checked across 68 size/theme/text
configurations and 27 interaction observations, plus nine lifecycle tests.

Validation and screenshots are recorded in the dated **file intake and measured
progress reference** section of `../../docs/air/validation.md`. Earlier reading,
recovery, floating-control and compound-field evidence remains valid. Next: long
lists/layers/history, nested overlays, remaining editor typography and specialised
controls. Browser/device parity and real product lifecycles remain explicit gates
before adoption.
