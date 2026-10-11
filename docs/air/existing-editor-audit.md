# Existing editor audit — inputs to Air refinement

2026-10-11. This inspection precedes further editor design. No product UI has been
migrated. These are representative workflow findings, not an exhaustive feature
pass for the 289-source inventory.

## Inspected live applications

| App         | Local source and sample                                                       | Inspected surfaces                                                                                                                 |
| ----------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| CloakResume | Current checkout; built-in generated sample                                   | Profile, Contact, live paginated preview, template library, ATS review, mobile edit/preview split                                  |
| CloakPDF    | Current checkout; `tests/fixtures/demo/multipage.pdf` (synthetic, four pages) | Canvas/page/zoom chrome, Annotate, colour picker, tool discovery, six-format export options, mobile tool panel                     |
| CloakIMG    | Current checkout; `test-fixtures/00554.jpg` (product graphic fixture)         | Canvas, Adjust/tone curve, numerical slider entries, Levels, scope selection, tool discovery, export preview/privacy/size controls |

Layout dimensions were checked at 1440×900, 1024×768, 768×1024 and 390×844 in
light/dark media, plus a separate 844×390 coarse-pointer inspection. The 24 main
DOM measurements had no document-width overflow. That result does not establish
control visibility, output correctness or feature parity. Browser emulation does
not replace physical-device/software-keyboard testing. Captures use reduced motion
for stable state inspection; motion quality remains a separate review.

## What Air must preserve and improve

| Area                | Existing evidence                                                                                                                                                                                                    | Design consequence                                                                                                                                                                                                          |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Resume composition  | Rail → substantial writing panel → full document. Profile contains a multiline title, logo/photo and rich text. Contact combines type, value, reorder and delete.                                                    | Keep writing on the left and give it 400–560px when space allows. Do not force the short 328px photo inspector onto a writing workflow. Replace repeated nested boxes with clear row grouping and the single-contour field. |
| PDF composition     | Rail → persistent page stage → 328px inspector (288px compact). Annotation has nine modes, colour controls and an Apply state. Page/grid/zoom controls stay in the top bar.                                          | Retain persistent stage and task actions. Make the reference show actual annotation density, precise fields, page controls and mobile Apply/Cancel. Four example tools are not a full tool-navigation design.               |
| IMG composition     | Similar rail/stage/inspector shell; scope segments, editable numeric values, histogram/curve and many sliders. Export includes image preview, privacy review, format, quality, ratio-locked dimensions and metadata. | Share the shell with PDF, retain functional colour/histogram data, and design compact numeric controls separately from prose fields. The export reference needs structured options, not only a file-name field.             |
| Family visual drift | Resume uses green, PDF blue, IMG coral/cream. Labels mix monospace capitals and sans. Headers, control rounding, selected states and emphasis vary.                                                                  | Common semantic palette, label typography, input contour, selection marker, density, focus, overlays and motion; preserve product marks and output colours.                                                                 |
| Mobile work         | Resume and PDF expose preview plus a lower working region. IMG uses a tool picker and then an in-flow control sheet with Cancel/Done. Content needs to remain usable while controls scroll.                          | Preserve a live preview, pinned panel actions and a reachable tool picker. Do not place an additional permanent dock between preview and controls if it consumes the working area without providing useful navigation.      |
| Short landscape     | 844×390 coarse pointer: Resume and IMG present a blocking rotation dialog. PDF remains in its mobile workflow.                                                                                                       | A shared short-height layout is mandatory. No rotation gate as the responsive solution. Test keyboard-open height separately.                                                                                               |
| Breakpoint drift    | PDF resolves the short edge below 760px; IMG uses width below 760px; both compact below 1180px. Resume uses its split workbench below 1024px.                                                                        | Specify layout by available space and minimum usable canvas/writing width. Align visual tokens and shared thresholds without remounting the document or losing draft/tool state.                                            |
| Output preservation | Actual résumé templates are long, styled documents; PDF has four rendered pages; IMG retains the imported graphic.                                                                                                   | Air styles chrome only. Revalidate all 17 résumé templates, pagination, PDF marks/redaction and pixel/export behaviour during migration.                                                                                    |

## Source anchors

- Resume: `src/components/Layout.tsx`, `SectionPanel.tsx`, `PaginatedCanvas.tsx`,
  `RichTextArea.tsx`, `editor/ContactSection.tsx`, `TemplateModal.tsx`,
  `AtsReviewModal.tsx`, `OrientationLock.tsx`.
- PDF: `src/editor/EditorShell.tsx`, `PdfStage.tsx`, `PropertiesPanel.tsx`,
  `MobileEditorSurface.tsx`, `breakpoints.ts`, `panels/AnnotateTool.tsx`,
  `panels/controls.tsx` and the export/colour-picker components.
- IMG: `src/editor/UnifiedEditor.tsx`, `ImageCanvas.tsx`, `PropertiesPanel.tsx`,
  `MobileEditorSurface.tsx`, `breakpoints.ts`, `tools/AdjustPanel.tsx`,
  `tools/LevelsPanel.tsx`, `ColorPicker.tsx`, `ExportModal.tsx`,
  `src/components/OrientationLock.tsx`.

## Evidence and limits

Verified captures in `evidence/`: `existing-resume-templates-light.jpg`,
`existing-resume-landscape-block.jpg`, `existing-pdf-export-light.jpg`,
`existing-pdf-phone-dark.jpg`, `existing-img-export-light.jpg`,
`existing-img-phone-dark.jpg`, `existing-img-landscape-block.jpg`.
`existing-editor-layout-checks.json` records the layout measurements.

A resize sequence exposed an IMG picker case: after moving an active Adjust tool
from desktop to mobile, tapping that already-selected tool did not leave the
picker; choosing Levels did. Record this for a reproducible migration regression
case rather than asserting a complete diagnosis here.

Still pending: all 22 PDF/26 IMG tool states, every résumé section, destructive and
AI consent/progress/error flows, real export and template fidelity, keyboard-only
full journeys, Safari/Firefox, physical touch/software keyboards, 200% zoom,
long-content/translation stress and performance. No existing source is marked
fully validated by this initial inspection.

## Follow-up — PDF tool coverage

The next sweep opened all 22 actual PDF panels at 1440×900/light and 390×844/dark
with coarse pointer. None had measured horizontal overflow, offscreen Cancel/Done,
or inspected text fields below 16px on the phone. This does not certify feature
outputs. The per-tool requirements and remaining states now live in CloakPDF's
`docs/air/editor-audit.md`, with accessible panel snapshots and mobile measurements.

Metadata's touch calendar has ~37.4px-wide day targets despite 44px height. The Air
contract now specifies a wider touch calendar/sheet. Actual annotation choices are
Select/Pen/Highlight/Line/Arrow/Rectangle/Oval/Text/Icons; the study is corrected to
match. Signature is Draw/Choose with independent ink/background switches; its
reference now shows those controls instead of a typed-name generator. The writing
width table is also corrected to agree with the 420px/360px editor composition.
