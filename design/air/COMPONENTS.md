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

| Component                        | Current reference                                                                                                            | Next required refinement/validation                                                                |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Buttons / icon actions           | Shared hierarchy/press; working busy/success/error/retry/cancel and named icon/tooltip studies                               | Production async lifecycle, stale-result/cancellation guards and every real icon action            |
| Text / multiline fields          | Working required/invalid/corrected, empty, populated, read-only, disabled, focus and textarea specimens                      | Production IME/undo/autofill/software keyboard; all real product field adapters                    |
| Select                           | Shared native picker plus library-backed custom trigger/options/typeahead in collections                                     | Product forms/states and target-engine/assistive-technology parity                                 |
| Checkbox / radio                 | Native semantics, shared custom glyphs, mixed parent/children, disabled, grouped arrows                                      | Actual screen readers and platform forced-colour settings                                          |
| Segmented choices                | Native radio group specimen with neutral plane/blue marker                                                                   | Audit every existing button adapter; distinguish tabs from toggles/actions                         |
| Switch                           | Native checkbox with switch role, on/off/disabled; 44px target                                                               | Real commit/failure/rollback behavior for asynchronous settings                                    |
| Slider / numeric entry           | Signed ranges, precise value, neutral midpoint; bounded unit-field validation and retained applied value                     | Real slider touch dragging, all product units/modes and disabled extremes                          |
| Navigation / tool rail           | Shared landing and representative editor rails                                                                               | Complete route/back/focus states and long translated labels                                        |
| Dialog / sheet                   | Export/date examples; long/invalid rename, safe remove/restore, menu handoff and origin focus                                | Nested discard/escape/focus now covered; production forms and real software keyboard               |
| Popover / context menu / tooltip | Working anchored settings, equivalent More/context menus, delayed hover and named keyboard tooltip; 56 size/theme/text cases | Submenu keyboard/Escape now covered; actual assistive technology, other engines and physical touch |
| Notices / toast / progress       | Semantic messages; real byte progress, unknown-total phase, cancellation and interruption/retry                              | Timed/retry/undo, actual product processing and assistive-technology announcements                 |
| Lists / layers / history         | Working 100-row collection, filter/selection, rename/reorder/visibility/undo and history                                     | Real domain transactions, async rollback and actual long-document performance                      |
| Upload / drop zone               | Real text browse/drop/paste, retained selection, byte progress, abort/retry and stale-result tests                           | Real image/PDF/JSON adapters, encrypted files, device/engine and permission parity                 |
| Rich writing                     | Resume writing, repeated entries and partial dates                                                                           | Nested formatting, IME/paste/undo/selection, every template/output invariant                       |
| Signature / drawing              | PDF draw/choose and toggles                                                                                                  | Real pen/touch/undo, import failure, rollback, placement and export                                |
| Colour / curves / levels         | Representative IMG custom widgets                                                                                            | Remaining modes, keyboard reachability, clipping, touch and processing fidelity                    |
| Canvas / document chrome         | Three editor compositions and compact expanded controls                                                                      | Real zoom/pan/selection handles/context controls and all object states                             |
| Search / template / icon library | Local filtering/clear/no-results, composition boundary and focus return                                                      | Real loading/error/results navigation/selection; large libraries and long names                    |
| AI / privacy / recovery          | Long-reading privacy and recovery studies; retained note, real session save/restore/download and unload guard                | Model consent/download/cache/retry, actual product persistence/failures and policy review          |
| PWA / install / update           | Contract defined                                                                                                             | Offline/update/unsaved-work prompts and interruption behavior                                      |
| Landing / reading / footer       | Landing plus standalone reading/recovery compositions; shared navigation/footer, 136 layout/theme/text cases                 | Complete production routes, browser/device/assistive-technology parity                             |

## Base candidate is ready for one final review

The final broad reference pass adds `collections.html`: ruled rows, wrapping names,
selection across filters, a custom Select, explicit stack actions, reversible removal,
history and nested dirty-draft confirmation. Source audits preserve PDF's staged Apply,
IMG's real object/snapshot semantics and Resume's existing structured-entry workflow.
The collection layout passes 76 viewport/theme/text cases; nested dialogs pass 16.
Six pure-model tests verify identity, undo/redo, branching, invalid operations,
selection reconciliation and the 100-row fixture.

The original studies remain the source for other patterns. See
[the design freeze candidate](../../docs/air/DESIGN_FREEZE.md) for the short final
review and first production piece. Remaining browser/device and domain-specific
checks are mapped to their adapters; they remain open and block affected commits.
Do not reopen broad exploration before AIR-04 unless the review finds a concrete
shared issue. A complete prototype is not user approval or product migration.
