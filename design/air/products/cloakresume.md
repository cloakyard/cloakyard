## CloakResume product requirements

- Scope: landing/start/load/restore, editor shell and all content sections, section
  picker/rail, paginated canvas, formatting, template gallery, ATS/writing review,
  date/colour/logo/rich-text controls, overlays, privacy, export and PWA notices.
- Air applies to application chrome. All 17 résumé templates retain their selected
  fonts, colours, paper, spacing, images and output geometry in both app themes.
  Do not use a global CSS rule that leaks interface typography into a résumé.
- Preserve A4/Letter pagination, natural word wrapping, links/symbols and multi-page
  PDF fidelity. Long entries, custom sections, statistics and images must survive
  preview, JSON save/load, browser restore and export.
- Desktop uses the common rail with a writing panel and preview. Narrow screens
  keep one active section/picker and a persistent preview with an expanded mode.
  Keyboard/short-height/landscape handling must keep input and actions accessible.
- Keep keyboard reorder alternatives, stable focus on section changes, issue jumps,
  focus return, rich-text selection and unsaved-work protection.
- ATS scores are heuristic review aids, not a guarantee of hiring-system success.
  Résumé/job-description content stays local; language assets may be downloaded.
- Local CSS/Tailwind bridges alias the common tokens. The output template system
  is the only typography/colour exception; custom app widgets are not exempt.
- Required gates: `vp check`, `vp test run` (including editor browser and complete
  template matrix, with no missing-browser skip), `pnpm run build`, production
  browser/template tests where affected, exported-document inspection and the
  complete family responsive/theme/input matrix.
- Keep a per-component/state inventory and evidence in `docs/air/`. Local tokens
  and this complete contract travel with the repository.
