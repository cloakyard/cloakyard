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

| Component                        | Current reference                                                                                        | Next required refinement/validation                                                       |
| -------------------------------- | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Buttons / icon actions           | Shared hierarchy/press; working busy/success/error/retry/cancel state study with stable labels           | Production async lifecycle, stale-result/cancellation guards and icon-only tooltips       |
| Text / multiline fields          | Working required/invalid/corrected, empty, populated, read-only, disabled, focus and textarea specimens  | Production IME/undo/autofill/software keyboard; all real product field adapters           |
| Select                           | Shared trigger and native custom picker; keyboard, disabled, scrolling and modal use                     | Accessible adapter and visual parity in unsupported engines                               |
| Checkbox / radio                 | Native semantics, shared custom glyphs, mixed parent/children, disabled, grouped arrows                  | Actual screen readers and platform forced-colour settings                                 |
| Segmented choices                | Native radio group specimen with neutral plane/blue marker                                               | Audit every existing button adapter; distinguish tabs from toggles/actions                |
| Switch                           | Native checkbox with switch role, on/off/disabled; 44px target                                           | Real commit/failure/rollback behavior for asynchronous settings                           |
| Slider / numeric entry           | Signed ranges, precise value, neutral midpoint; bounded unit-field validation and retained applied value | Real slider touch dragging, all product units/modes and disabled extremes                 |
| Navigation / tool rail           | Shared landing and representative editor rails                                                           | Complete route/back/focus states and long translated labels                               |
| Dialog / sheet                   | Native export/date examples, nested selects and dismissal                                                | Destructive confirmation, stacked overlays, long/invalid forms and real software keyboard |
| Popover / context menu / tooltip | Contract defined                                                                                         | Build real trigger/anchor/keyboard/overflow examples; export dialogs are not substitutes  |
| Notices / toast / progress       | Static semantic messages; live completion status                                                         | Timed/retry/undo/long content, actual loading progress and focus-safe placement           |
| Lists / layers / history         | Representative Resume repeated entries                                                                   | Large lists, rename/reorder/undo, multi-selection, empty/error and mobile row actions     |
| Upload / drop zone               | Contract defined                                                                                         | Browse/drop parity, wrong type, corrupt/encrypted/large-file, progress/cancel/retry       |
| Rich writing                     | Resume writing, repeated entries and partial dates                                                       | Nested formatting, IME/paste/undo/selection, every template/output invariant              |
| Signature / drawing              | PDF draw/choose and toggles                                                                              | Real pen/touch/undo, import failure, rollback, placement and export                       |
| Colour / curves / levels         | Representative IMG custom widgets                                                                        | Remaining modes, keyboard reachability, clipping, touch and processing fidelity           |
| Canvas / document chrome         | Three editor compositions and compact expanded controls                                                  | Real zoom/pan/selection handles/context controls and all object states                    |
| Search / template / icon library | Local filtering/clear/no-results, composition boundary and focus return                                  | Real loading/error/results navigation/selection; large libraries and long names           |
| AI / privacy / recovery          | Contract and domain invariants defined                                                                   | Model consent/download/cache/retry, privacy review and recovery-page specimens            |
| PWA / install / update           | Contract defined                                                                                         | Offline/update/unsaved-work prompts and interruption behavior                             |
| Landing / reading / footer       | Landing family composition and compact navigation                                                        | Privacy/long-reading/recovery compositions; complete production routes                    |

## Current bounded pass

Compound search and numeric fields share the single-contour anatomy. Clear actions
reserve their space and return focus; units stay outside editable values. Action
labels reserve their largest translated dimensions through busy, success, error,
retry and cancellation. The study explicitly simulates outcomes with manual
resolution; real product async adapters still require their own lifecycle tests.

Validation and screenshots are recorded in the dated **compound fields and action
states** section of `../../docs/air/validation.md`. The family TODO keeps unresolved
work above open. Next: actual popovers/tooltips/context menus and long/invalid or
destructive overlays, then remaining editor typography and specialised controls.
