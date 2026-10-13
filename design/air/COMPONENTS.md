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
| Notices / toast / progress       | Static semantic messages; live completion status                                                                             | Timed/retry/undo/long content, actual loading progress and focus-safe placement                |
| Lists / layers / history         | Representative Resume repeated entries                                                                                       | Large lists, rename/reorder/undo, multi-selection, empty/error and mobile row actions          |
| Upload / drop zone               | Contract defined                                                                                                             | Browse/drop parity, wrong type, corrupt/encrypted/large-file, progress/cancel/retry            |
| Rich writing                     | Resume writing, repeated entries and partial dates                                                                           | Nested formatting, IME/paste/undo/selection, every template/output invariant                   |
| Signature / drawing              | PDF draw/choose and toggles                                                                                                  | Real pen/touch/undo, import failure, rollback, placement and export                            |
| Colour / curves / levels         | Representative IMG custom widgets                                                                                            | Remaining modes, keyboard reachability, clipping, touch and processing fidelity                |
| Canvas / document chrome         | Three editor compositions and compact expanded controls                                                                      | Real zoom/pan/selection handles/context controls and all object states                         |
| Search / template / icon library | Local filtering/clear/no-results, composition boundary and focus return                                                      | Real loading/error/results navigation/selection; large libraries and long names                |
| AI / privacy / recovery          | Long-reading privacy and recovery studies; retained note, real session save/restore/download and unload guard                | Model consent/download/cache/retry, actual product persistence/failures and policy review      |
| PWA / install / update           | Contract defined                                                                                                             | Offline/update/unsaved-work prompts and interruption behavior                                  |
| Landing / reading / footer       | Landing plus standalone reading/recovery compositions; shared navigation/footer, 136 layout/theme/text cases                 | Complete production routes, browser/device/assistive-technology parity                         |

## Current bounded pass

Floating surfaces share opaque Air planes, restrained elevation and inset rows.
Menus and precision popovers open immediately; tooltips have a deliberate hover
delay and immediate keyboard access. Rename validation retains the previous name;
confirmation starts on the safe action. Removal and restoration move focus to a
surviving, meaningful control. All operations affect only the local study sample.

The next checkpoint extends that language into long reading and recovery pages:
65ch prose, open composition, responsive contents navigation, explicit routes and
single-contour fields. Failed save/retry keeps the local sample intact; downloads
preserve exact UTF-8 text and unsaved navigation warns before leaving.

Validation and screenshots are recorded in the dated **reading and recovery
reference** section of `../../docs/air/validation.md`; earlier floating-control and
compound-field evidence remains valid. Next: upload/drop and progress/cancel/retry,
long lists/layers/history, nested overlays, remaining editor typography and
specialised controls. Browser/device parity and real product lifecycles remain
explicit gates before adoption.
