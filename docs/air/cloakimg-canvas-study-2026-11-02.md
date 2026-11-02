# CloakIMG canvas-first study — 2026-11-02

Status: interactive mock for user review. Application source, the Air 1.3.3
contract and deployments are unchanged. The latest user instruction supersedes
the preceding More controls / Larger photo proposal.

## Direction

Reserve at least 40% of the depicted screen height for the photo viewport. Keep
undo/redo/view options in a small floating group on the same surface as the canvas,
without a full-width toolbar strip. Place one X / tick pair beside the tool title
inside the fixed tool-panel header. The control body scrolls independently; there
is no additional Done button or expansion toggle. Touch actions are 48px.

Tablet places the same inspector beside the canvas. Phone keeps it underneath.
Air's neutral surfaces, monochrome primary action, restrained borders and selected
markers remain. The icon-only completion pair is the user's requested exploration,
not a silent change to the approved labelled-action contract. Accessible names and
supplementary tooltips identify Cancel edit / Apply edit.

The mock supports Crop ratios, dimensions, rotation/grid, Adjust previews,
Apply/Cancel, Undo/Redo and original-image viewing. Other tool dock entries retain
context but do not implement the full editor. It uses the existing orange fixture,
brand asset and host Lucide icons, without adding an app dependency.

## Verification

Twelve completed states: Chrome/WebKit × light/dark × depicted 320 × 568,
390 × 844 and 736 × 640 screens. Automated checks confirm photo viewports of
227.19px, 337.59px and 498px respectively, with no horizontal overflow. Scrolling
the controls leaves the photo and action header stationary. Both actions meet the
44px minimum. Crop/Adjust Apply/Cancel and Undo/Redo pass with no runtime errors.
Phone and tablet captures were visually inspected in both themes.

The initial preview harness included its 16px outer padding in the requested
width, producing smaller depicted screens. The final run corrects the wrapper
width and measures the actual screen dimensions above. These are mock checks;
production image-processing/output, keyboard/IME and physical iPhone acceptance
are not covered. All-tool and applicable sibling consistency checks belong to an
implementation after user review.

![Phone light](evidence/img-canvas-study-2026-11-02/chrome-390-light.png)
![Phone dark](evidence/img-canvas-study-2026-11-02/webkit-390-dark.png)
![Tablet light](evidence/img-canvas-study-2026-11-02/chrome-736-light.png)

## Handoff

The inline source is:
`/Users/sumitsahoo/.codex/visualizations/2026/10/19/01a152cf-d189-72d1-a5a6-f8b6c6d4555a/cloakimg-canvas-first.html`.
It contains optional host controls for phone/tablet, minimum photo area 40–55% and
appearance. The standalone inspection wrapper is
`/tmp/cloakimg-canvas-first-preview.html`; reproduce it with the visualization
skill's renderer. The verification runner, measurements and selected captures are
under `evidence/img-canvas-study-2026-11-02/`. No production release is part of this
mock request.
