# Public header/footer content audit — 2026-10-26

Status: Air 1.2.2 deployed through four passing dev → main PRs; public-shell checks pass locally and in production.

Scope is Cloakyard, CloakPDF, CloakDrop's website and CloakResume. The user's
request covers content and behavior as well as Air geometry. Editor task bars,
document output, native apps and IMG's parked redesign are outside this piece.

## Findings and corrections

- Footer wording, missing Source/License links, order and credits differed across
  products and again on recovery pages. Air 1.2.2 now owns the explicit recipe:
  product/version identity, Built by Sumit Sahoo, then Privacy policy, Source,
  MIT license and Cloakyard. Existing Drop Download precedes that shared sequence.
- The directory keeps copyright, its product-links row and Privacy pointing to
  actual principles; it does not invent a policy or link to itself. Corrected its
  intrinsic grid track so the lower row spans the same content width as the header.
- Clean cropped captures exposed Resume's broad paragraph rule leaking a 24px
  bottom margin and prose ink into the footer. Scoped it to main content with
  unchanged selector specificity; footer identity now inherits Air's zero margins
  and shared neutral ink. Removed its redundant footer SVG sizing selector too.
  The family audit now asserts identity margins/ink so this cannot recur silently.
- macOS render comparison exposed different inherited font smoothing: Yard/Drop
  used browser-default rendering while PDF/Resume used antialiasing. Canonical
  public header/footer styles now normalize it, without touching document/editor
  typography. Computed rendering is asserted where the engine supports it.
- Phone render comparison exposed a PDF override shrinking footer link gaps to
  16px; removed it so every viewport keeps Air's 8px/24px wrapping cadence. The
  browser audit now checks these computed gaps explicitly.
- Header Source is last and points to the exact product repository. Compact and
  desktop labels/order/destinations/opening behavior match. Landmarks have the same
  Primary navigation / Footer navigation names. Task destinations stay useful to
  each product rather than being renamed into generic identical content.
- PDF's render-recovery and normal shells share PublicFooter. Removed the duplicate
  recovery markup, obsolete author/family constants, PDF version styling, Drop's
  display-contents wrapper and superseded per-product footer alignment rules.
- PDF/Resume static 404 pages retain static, no-script recovery and derive versions
  from package metadata. Their policy links open the actual policy (PDF ?view=privacy,
  Resume #privacy-policy) and clear that entry state when returning home. Broken-link
  reporting remains available with recovery actions. Resume's footer uses text
  identity rather than a second brand mark.
- Resume's compact section-focus behavior already worked. Keep it unchanged and
  add browser coverage; the initial suspicion about focus restoration was not a
  reproduced application defect.

## Verification record

The family audit now asserts content/label order, exact Source/License/credit
URLs, versions, semantic landmarks, desktop/compact parity, directory-row width,
recovery-policy journeys and compact destination focus in addition to existing
geometry, typography, responsive, enlarged-text, keyboard and theme checks.

An initial Chrome matrix passed 552 layouts before the final directory-width and
recovery-policy assertions were added. A test runner invocation first used an
incorrect Puppeteer module path; it performed no browser checks. The corrected
module is resolved from Resume's installed package.

The initial Resume full run passed 371/373. The brand test still expected two
recovery marks, which conflicts with the new shared text-footer recipe; updated
that assertion to one header mark. A template-ready timeout coincided with a
production rebuild during testing. No template code changed. Retain that failure
record and rerun the complete suite against an unchanged build, with other browser
jobs queued until completion. No timeout or functional assertion was relaxed.

The font-rendering assertion initially expected Firefox's WebKit alias to serialize
as `antialiased`; inspection showed its native `grayscale` serialization. The audit
now checks each engine's native property/keyword. No application failure, skipped
check or relaxed rendering requirement was involved.

Final local verification: 1,152 Chrome/Firefox family layouts, zero deviations or
browser errors; 768 link-state checks and 262 keyboard checks; PDF 461 units, all
16 production smoke suites and 66 real-host recovery layouts; Resume 373 tests in
ten files with no skips plus 349 entry/recovery layouts and 14 journeys; Drop 432
website layouts and 34 journeys. Applicable formatting/lint/types, builds, dead-code,
contract synchronization and 20 portability checks per bundle pass. IMG's isolated
maintenance snapshot passes 470 units/check/build/portability, with its draft intact.

The final capture set contains 48 actual header/footer crops: phone 390px, laptop
1280px and desktop 1440px, light/dark. For these clean comparison crops alone,
service-worker registration is suppressed to prevent a first-install toast covering
the footer; real PWA, offline and recovery tests run separately with registration.
Full matrices additionally cover 320–1920px, breakpoint neighbors, short landscape,
coarse input and 200% root text. Recovery and privacy screenshots and structured
results are saved in each product's `docs/air/evidence/public-shell-2026-10-26/`.
Existing PWA/README/OG assets remain current: their artwork/first-view composition
and document output do not change in this footer/navigation piece.

Existing PDF Compact beta/node-forge and Drop official-bundle exceptions,
plus physical/assistive/device and broader product acceptance, stay explicitly open.
IMG's 15 parked draft files remain byte-identical; only portable maintenance is local.

## Production verification

All four main checks and Cloudflare builds pass. All 260 public assets match the
tested candidates, with `no-transform`, no injected scripts and correct recovery
responses. Live verification passes 576 family layouts, 432 Drop website layouts /
34 journeys, six actual PDF workflows, and 768 hyperlink states / 262 keyboard
checks. All 58 local/live screenshots match exactly (24 UI and 34 template/paper).
See [the deployment ledger](evidence/public-shell-2026-10-26/deployment.json).

| App         | Merge                                                     | Commit    | Verified public assets |
| ----------- | --------------------------------------------------------- | --------- | ---------------------- |
| cloakyard   | [PR 22](https://github.com/cloakyard/cloakyard/pull/22)   | `a79f6aa` | 13                     |
| cloakdrop   | [PR 47](https://github.com/cloakyard/cloakdrop/pull/47)   | `f8f08ce` | 16                     |
| cloakresume | [PR 44](https://github.com/cloakyard/cloakresume/pull/44) | `71f8ab4` | 101                    |
| cloakpdf    | [PR 211](https://github.com/cloakyard/cloakpdf/pull/211)  | `822a2f5` | 130                    |

PDF's initial PR contract job detected a stale generated PublicFooter inventory row
in Markdown; surfaces.json was already correct. Regenerated it in e1854f6 and all
required CI then passed. No application change or check bypass was needed.

The first live Resume export comparison matched 3/4 PDF rasters. Linked Letter
output intermittently used blue solid-underlined links instead of the template's
neutral dotted treatment; extracted text, link destinations/rectangles and page
geometry still matched. Both synthetic rasters and the failed comparison are kept
in the evidence. Four fresh-context exports after stable preview capture match
pixels, text, links and geometry exactly. This is a passing final verification,
not a fix or closure of the previously documented export intermittency. Export and
template source is unchanged; the unresolved output follow-up remains explicit.

The four dev branches were fast-forwarded to these released main revisions.
Cloudflare deploys main only; dev uploads versions. The documentation-only closeout
follows the same PR/check/merge/fast-forward flow, verifies identical application
bytes, and includes this ledger and handoff. IMG remains local and parked.
