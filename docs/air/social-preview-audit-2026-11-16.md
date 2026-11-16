# Family social preview audit — 2026-11-16

Air 1.7.5 gives all six websites one 1200×630 social composition: the same mark
size, header/domain alignment, headline scale, text/artwork grid, neutral colours
and footer. Each product keeps its approved landing artwork at rest. The old
fixed logo row, screenshot-led PDF/Resume/Drop cards and unbranded Roll screenshot
are replaced. Product screenshots used by README/PWA/native features are preserved.

The portable template and renderer use `artwork/social.json` and the local built
landing. No runtime library or application behavior changes. Five bespoke HTML
compositions and four old JS renderers are removed; Drop's existing shell command
is a small compatibility entry point. Social generation does not depend on editor
screenshots or a sibling checkout. See [the workflow](social-previews.md).

## Coverage ledger

| Website           | Crawler-visible HTML checked          | Product artwork             | Other views                                                         |
| ----------------- | ------------------------------------- | --------------------------- | ------------------------------------------------------------------- |
| Cloakyard         | Home; privacy inherits SPA entry      | Growing cube grid           | No editor                                                           |
| CloakPDF          | Home; static recovery                 | Unveiled page stack         | Privacy, editor and tools inherit the generic entry card            |
| CloakIMG          | Home, static privacy, static recovery | Sun and mountain landscape  | Editor, batch and tools inherit the generic entry card              |
| CloakResume       | Home; static recovery                 | Résumé with career timeline | Privacy, editor/templates and review inherit the generic entry card |
| CloakDrop website | Home, privacy, recovery               | Pixel file                  | Native app outside this web-only pass                               |
| CloakRoll website | Home, privacy, recovery               | Illustrated filmstrip       | Native app outside this web-only pass                               |

All 14 emitted HTML documents contain crawler-readable OG and Twitter metadata
before JavaScript runs. Image URLs are absolute HTTPS with an artwork revision;
PNG type, 1200×630 dimensions and matching descriptive alternatives are present.
Static recovery preserves `noindex`. No card reads document contents, filenames,
photos or personal drafts. Existing SPA routing is preserved.

The social-card review harness covers 48 cases: six cards × phone (390×844),
tablet (820×1180), laptop (1280×800), desktop (1440×1000) × light/dark surroundings.
The PNG intentionally stays light. Reviewed native/contact-sheet and reduced
previews for clipping, contrast, repeated spacing, image sharpness and artwork
identity. Each card reproduces byte-for-byte on a second run from the rebuilt site.
28 local HTTP requests with Facebook/Twitter crawler user agents return the
metadata; all six image responses are PNG and match the source bytes.

This is a social-preview audit, not a fresh all-tool or physical-device audit.
Editor controls, export output, overlay/motion behavior and native UI are unchanged;
the previous full-view evidence and open physical/assistive gates remain separate.
Third-party sharing services were not signed into or asked to clear cached previews.

## Validation and guidance

The `check:og` gate is part of every production build. It rejects missing/duplicate
metadata, wrong dimensions/URLs/alternatives, oversized images and stale built PNGs.
All cards are below 70 KiB. Format/lint/types, production builds, Air provenance,
portable-bundle checks and family README validation are required for this piece.
PDF passes 461 unit tests; IMG passes 501. Resume passes all 373 tests in ten
files, including browser checks, plus its eight targeted asset tests. PDF/Resume
dead-code checks pass. Roll website verify and worker dry-run pass. All eight
READMEs retain their standard structure and 120 local references resolve after Roll’s native-preserving dev sync. Native
source and dependencies are unchanged.

Modern Web Guidance was queried with telemetry disabled. It has no dedicated OG
guide; its HTML guidance informed explicit image dimensions and accessible artwork
names. The [Open Graph protocol](https://ogp.me/) supplies the structured image
metadata contract. No speculative new web API or major design change was introduced.

Initial formatting findings and Resume's obsolete inventory/template test reference
were corrected. The first review-harness run used an unsupported Puppeteer locator
screenshot call; it was corrected to an element handle before the complete pass.
Raw diagnostics are retained rather than represented as passing runs.

Portable evidence: [social-preview evidence](evidence/social-previews-2026-11-16/receipt.json).
Rollout follows dev → main PRs, with the standing website-only Roll exception and
main → dev synchronization. The canonical PR records its own final production receipt.

## Product rollout verified

All five product PRs are merged. Their production HTML (including privacy/recovery)
and PNG bytes match the tested builds; all main checks pass. Remote dev includes
main, with Roll preserving its separate native commits. The canonical PR records
Cloakyard's own final main checks, public metadata/image verification and dev sync.

| Product     | PR                                                      | Main      | Dev       |
| ----------- | ------------------------------------------------------- | --------- | --------- |
| cloakpdf    | [#239](https://github.com/cloakyard/cloakpdf/pull/239)  | `ec9d473` | `ec9d473` |
| cloakimg    | [#39](https://github.com/cloakyard/cloakimg/pull/39)    | `c378464` | `c378464` |
| cloakresume | [#66](https://github.com/cloakyard/cloakresume/pull/66) | `896801c` | `896801c` |
| cloakdrop   | [#65](https://github.com/cloakyard/cloakdrop/pull/65)   | `d952080` | `d952080` |
| cloakroll   | [#21](https://github.com/cloakyard/cloakroll/pull/21)   | `bbfe03b` | `6a59d40` |

The original PDF still has exactly 54 unrelated status entries and the same diff hash. No native source changed in this pass.
