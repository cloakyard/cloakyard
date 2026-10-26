# Resume Storyline and family chrome — 2026-10-26

CloakResume now implements the approved Storyline: three green milestones gather
into the spine of one résumé. It runs once over 3400ms, offers Pause/Play/Replay,
and leaves Start blank, restored drafts and file entry available immediately.
Air **1.2.0** records the motif and owns the common public header/footer styles.
No new dependency, remote service, document-writing behavior or output change.

## Corrections against the contract

| Before                                                                                     | After                                                                                                                         | Reason                                                                                                  |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Yard/Drop marks were 32px; Resume also used a different lockup weight/gap.                 | 36px marks, 12px gap, 18px-relative/500 wordmarks and 44px home targets.                                                      | The contract already required 36px. The earlier audit incorrectly described PDF's size as an exception. |
| Local header/footer skins duplicated typography, spacing and link rules.                   | All four public shells use the portable `air-page-*` primitives; local CSS arranges content.                                  | One owner for neutral navigation, 14px-relative/500 type, 16px icons and 44px targets.                  |
| Footer gutters, padding and text cadence differed; PDF diverged at enlarged text.          | Matching content bounds/gutters, 32px footer padding and one top rule; consistent neutral copy and underlined inline credits. | Enlarged text and narrow screens must preserve the same geometry.                                       |
| Resume's recovery stylesheet overrode navigation icons; PDF recovery lacked matching cues. | Shared 16px navigation icons and angled destination cues; narrow recovery lockups remain usable.                              | Reading/recovery routes follow the same contract. Plain links may stay unadorned.                       |
| Resume used a generic horizon and tiny global reduced-motion durations.                    | Finite native Storyline, static paper fallbacks and truly immediate reduced-motion changes.                                   | Product-specific meaning, no entry delay or unintended transitions on text resizing.                    |
| Animated captions could intersect the path.                                                | Fixed decorative caption geometry clears the path at 320–1440px and enlarged text.                                            | Verify the moving arrival as well as the final paper.                                                   |

The illustration never reads a draft. It animates transform/opacity, pauses
hidden/offscreen, preserves manual pause, cancels on unmount and settles on resize;
Replay measures the new width. Reduced motion, forced colours, Save-Data,
constrained and unsupported devices receive the complete static paper. A shared
`finish()` lifecycle operation handles resize without replaying unexpectedly.
The fixed paper typesetting and 14px decorative captions are illustration details,
not app typography. Controls and all functional text continue to use Air.

Removed Resume's production horizon wrapper/styles and stale PWA shader exclusion,
duplicate family chrome rules and obsolete PDF/Drop/Resume entries in the generic
horizon test. Shared reference shader assets still have gallery/Yard consumers.
Resume PWA/README screenshots and OG were regenerated from the production build.
No package or native Drop/KERR code changed. IMG only receives the required portable
bundle maintenance; its 15-file parked draft is byte-for-byte preserved.

## Verification

- **1,104 layouts, zero deviations/errors:** Chrome 432 landing + 120 secondary;
  Firefox light and dark each 216 + 60. Twenty-seven home sizes, 320–1920px,
  breakpoint neighbours, both themes, 16/32px root text. Secondary coverage is PDF
  privacy/404, Drop privacy/404 and Resume 404. Resume privacy is a shared dialog,
  checked separately in its entry matrix. Compact opening/Escape/focus return pass.
- **824 link states / 256 keyboard checks:** every visible link on the four homes,
  privacy surfaces and recovery routes, including nested text, hover and focus.
  Text stays neutral. The blue keyboard outline remains the approved Air focus cue.
- **Resume:** lint/types/build, **373 tests in ten files**, including the production
  editor/template sweep; **349 entry/recovery layouts and 14 journeys**; **68 artwork
  layouts, eight animated-arrival layouts**, lifecycle and four static profiles.
  Existing blank/sample/file/restore, privacy, replacement and editor handoff pass.
- **PDF:** lint/types/dead-code/build/asset limits, **461 units, all 16 smoke suites**,
  and **68 artwork layouts** including actual file entry and finite unveiling.
- **Drop:** Astro check/build, **432 website layouts / 34 journeys / 35 captures**,
  and **68 artwork layouts / four file forms**, pause and static/lifecycle checks.
- **Yard/shared:** lint/types/build, **12 horizon layouts**, both GPU themes and idle;
  five shared motion tests; synchronized specs and **20 isolated portability checks
  in each of five repositories**. IMG's isolated maintenance snapshot passes lint,
  **470 tests**, production build and asset limits; the parked draft is excluded.
- **Rendered review:** desktop/laptop/phone light/dark comparisons, plus native
  Safari light-theme spot review, Resume replay and enlarged in-flow navigation.
  Safari is not a full matrix. Its PDF capture includes a real update notice that
  partially overlays the footer; unobscured Chrome/Firefox captures cover it.

The entry harness now applies 44px navigation assertions to footer navigation,
not inline prose credits, which retain Air's explicit inline-link treatment.
The final inventory check also rejected a hard-coded decorative paper radius;
the paper now uses square corners and the affected build/artwork checks pass.
No product failure was waived. The prior reduced-motion transition bug and
animated-caption collision were fixed and the affected suites rerun.

[Machine-readable summary](evidence/storyline-family-2026-10-26/summary.json),
[desktop comparison](evidence/storyline-family-2026-10-26/comparison-1440.png),
[laptop comparison](evidence/storyline-family-2026-10-26/comparison-1280.png),
[phone comparison](evidence/storyline-family-2026-10-26/comparison-390.png).
Each app carries independent filtered matrices, captures and passing logs.

Motion verdict: **approve in this scope**. Review used the canonical contract,
`animate`, `review-animations`, `vercel-react-best-practices` and
[Web Interface Guidelines](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md).
Physical touch/software keyboard, assistive speech and power/thermal acceptance
remain open, as do earlier full-product/export follow-ups and the accepted PDF
Compact long-document limitation. This is a local implementation/audit, not a claim
that every editor state or device has been re-audited. No push or deployment.
