# Air motion review — refinement 03

Scope: the shared reference, its CSS controls, native export dialogs and completion
feedback. Production components and physical-device behaviour are separate gates.

| Before                                                                                         | After                                                                                                      | Why                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Generic `:active` compression also applied to keyboard presses; release took the same 120ms.   | Pointer-only compression excludes `:focus-visible`; release is immediate. See `design/air/air.css:137`.    | Keyboard work stays immediate; deliberate pointer press and release have different timing. |
| Closing cancelled the entrance and started from the fully open pose.                           | The current composited transform/opacity become the exit's first keyframe. See `design/air/motion.mjs:42`. | A quick dismissal no longer jumps to a different position.                                 |
| Repeated close clicks restarted the exit.                                                      | The active exit is retained; Escape remains immediate. See `design/air/motion.mjs:80`.                     | Repetition cannot extend or queue dismissal.                                               |
| Completion replay cancelled progress and started again at 4px/.96.                             | Replay samples the current pose and uses the remaining duration. See `design/air/motion.mjs:96`.           | Repeated acknowledgement stays continuous and does not accumulate animations.              |
| Motion values lived in several inline handlers; colour transitions also tweened theme changes. | One portable module reads shared timing tokens; control colours and theme changes are immediate.           | All apps can adopt one behaviour, and appearance changes do not animate every control.     |
| Reduced motion was checked only when an action began.                                          | A live preference change settles an open dialog, finishes an exit or cancels completion motion.            | Accessibility preferences also apply to motion already in progress.                        |

## Earlier refinement verdict

**Feel-breaking regressions:** the keyboard and interrupted-dialog findings were
blocking before correction. Genuine Enter/Space activation now produces no
completion animation or button compression; keyboard dialog entry and Escape are
immediate. The field receives focus while a pointer entrance is still moving.

**Interruptibility and timing:** inspected native animation keyframes preserve the
sampled desktop and phone-sheet pose exactly on exit. A repeated close keeps the
same animation at the same progress. Completion replay retained one animation and
used approximately 51ms remaining, rather than restarting the full 240ms.
Pointer press is 120ms; release is immediate; hover arrows use 160ms only for fine
pointers. Dialog/sheet entrance is 240ms and exit is 160ms, using the shared curves.

**Accessibility and cohesion:** 42/42 PDF/IMG/Resume export-dialog cases pass across
seven viewport classes and both themes. Measured buttons/text fields meet their
40px fine / 44px coarse targets; the existing numeric-slider exception is 32px on
fine pointers. Native focus restoration and focus wrapping pass. Reduced-motion
changes during an entrance and exit settle immediately. Keyboard-focused and
coarse-pointer controls do not acquire hover movement. Theme colour transitions
are absent. Final desktop and phone captures were visually inspected.

**Approve — for the tested shared-reference motion.** This is a code/interaction
review verdict, not the user's visual sign-off or full product-migration approval.
At that checkpoint, actual tooltip/popover implementations, production adapters,
real touch devices, Safari/Firefox and the shader's real-device GPU/battery budget
remained open. The floating-reference follow-up below closes only its stated scope.

Evidence: `evidence/air-03-motion-checks.json`,
`evidence/air-03-motion-dialog-desktop-light.png`, and
`evidence/air-03-motion-dialog-phone-dark.jpg`.

## Adoption and cleanup

`design/air/motion.mjs` is the canonical module, synchronized into every standalone
reference. Call `enter(event)` after `dialog.showModal()`; call `close(event, value)`
for explicit dismissal. Pass the initiating click event so keyboard activation
stays immediate; programmatic work can pass `{ detail: 0 }`. Native dialog semantics
own focus and modality. Call `destroy()` when a component unmounts to remove the
preference and dialog listeners. The completion controller has the same cleanup
contract. No animation dependency is needed for these controls.

The reference's unused `rail-space` rules were removed. Its old `workbench` class
was renamed to `editor-workspace` consistently in CSS, markup and dynamic code.
The obsolete inline motion implementations and duplicate timing literals were
removed. The inline module passes a separate lint check. A class-consumer search
finds no remaining orphan inline-style classes. Historical Workbench mentions in
the contract/dated audits explain migration and remain intentional; legacy product
UI still awaits its own migration and cleanup.

All five bundle manifests now hash the actual reference HTML and every shared
module/license asset. The identical verifier rejects missing manifests, omitted
motion hashes and altered motion code. The portability command exercises these
negative cases in temporary copies, with no app dependencies or sibling files.
Five checks pass for each of five products (25/25). Browser checks of both flat
and nested-site layouts load CSS, motion and WebGPU assets from their own origin.
Generated vendor assets are excluded from formatting/lint in the web repositories;
source modules remain checked, and the integrity/rebuild gates cover generated
assets. The stricter app checkers also caught and resolved two floating startup
promises in the shared light controller.

## Visibility refinement — 2026-10-12

The earlier table and line references describe the previous checkpoint. This
bounded follow-up responds to the user's request for clearer motion.

| Before                                                  | After                                                                                                                                    | Reason                                                                            |
| ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Completion moved 4px from .96 scale.                    | 8px from .90 scale, .30 initial opacity; unchanged 240ms settle. The icon rests on `accent-soft`.                                        | The acknowledgement is easier to perceive without extending a work action.        |
| Light appeared over 600ms with 7px/3.6px plane offsets. | One 900ms arrival, 24px/12px offsets at the 200px artwork height, a sweep from 14% of its width, and stronger theme-specific edges/glow. | The movement reads as light crossing two planes rather than a nearly static fade. |
| Pointer input shifted illumination only.                | A small opposing displacement also separates the two planes.                                                                             | The response has a visible spatial cue while remaining confined below the copy.   |

Actual pointer completion invokes the new keyframes at 240ms. Enter invokes no
animation. An interrupted replay samples the current pose, keeps one animation
and completes with approximately 33ms remaining in the recorded case. Reduced
motion produces no completion animation; enabling it during the light arrival
cancels motion, releases the renderer and disables replay.

The final shader compiles and draws in light/dark on laptop/phone. It rests after
arrival and pointer response. The idle observation held at 36 submitted frames
for 1.1 seconds. Still mode and offscreen disposal remove readiness; a fresh
reduced-motion load makes zero shader requests. Only local HTTP assets load.
The increased strength does not add a continuous loop or a new rendering pass.

Select opening/selection stays immediate because these are frequent precision
controls. Native picker behavior owns focus, typeahead and dismissal. No new
menu animation, hand-written focus system or motion dependency was introduced.

**Pass for this bounded reference behavior.** User visual sign-off, cross-engine
select parity, actual touch/assistive technology and physical GPU/battery costs
remain open. Evidence: `evidence/air-03-select-motion-checks-2026-10-12.json` and
`air-03-light-refined-laptop-{light,dark}.png` in the evidence directory.

## Floating controls — 2026-10-12

Frequent action/context menus and settings popovers appear immediately. Tooltip
hover waits 400ms and keyboard focus reveals the hint immediately; pointer movement
into the hint keeps it visible, and Escape dismisses it. These surfaces need no
spatial animation. The obsolete blanket “Popover · 180ms” legend is replaced with
“Menus · immediate”; 180ms remains a ceiling for occasional popovers in the contract.

The new React dialog adapter shares Air's 240ms pointer entry / 160ms exit tokens,
4px/.98 desktop pose and phone sheet geometry. CSS transitions handle interruption;
Base UI owns presence/focus. Recorded pointer entrance uses two transitions only,
transform and opacity. Escape interrupts immediately, and keyboard reopening has
zero animations. Reduced-motion emulation also reports zero. The final CSSOM and
computed pose agree on 4 CSS pixels; the raw DPR-2 browser keyframe report gives 8,
so both readings are retained rather than normalizing the evidence silently.

The 56 responsive/theme/text cases validate immediate keyboard behavior and layout;
they do not certify physical phone animation feel. Menu-to-dialog focus handoff,
safe confirmation focus, recovery focus and tooltip naming all pass the recorded
journeys. Further nested overlays, actual touch, cross-engine behavior and product
adapters remain open. See `evidence/air-03-overlays-2026-10-12.json`.
