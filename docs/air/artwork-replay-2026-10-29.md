# Air 1.3.1 — deliberate artwork replay, 29 October 2026

Cloakyard, PDF, Drop, Resume and Roll now accept click/tap on their completed
landing illustration to repeat the same finite sequence. A press begun while
running is ignored; repeated presses never interrupt, queue or loop. The native
button also supports explicit Enter/Space, rejects held keys and retains focus
while temporarily unavailable. It adds no visible playback control or runtime
dependency. IMG remains parked; task/editor/output/native behavior is unchanged.

Drop's pixel descent slows from 600 to 720ms, holds increase from 300 to 320ms,
and dispersal increases from 160 to 180ms. Tighter row/dispersal staggering keeps
the complete illustration bounded: 4,764ms maximum active timeline, 4,855ms in the
product timing test. The slower individual descent is deliberate; this is not a
claim that the entire sequence lasts 20% longer.

## Verification

- WebKit and Chrome each pass 110 responsive light/dark layouts with actual initial
  and replay movement, 20 static fallback visits and five lifecycle journeys.
  Tap is used through tablet widths; mouse at laptop/desktop. Phone 390 and desktop
  1440 runs complete naturally; other cases advance effects to test settled replay.
  Tests check moving transforms/opacity and timelines, no repeated/queued run,
  press-before-completion rejection, Enter/Space/held keys, focus retention,
  offscreen suspension and live preference settlement.
- Ten WebKit comparison sheets cover phone, landscape, tablet, laptop and desktop
  light/dark. Transparent targets preserve the existing composition and task links.
  Additional light/dark focus captures verify the inset Air outline across all five.
- Yard: check/types/build, dead-code, 44 static layouts, 22 complete arrivals and
  four lifecycle/directory journeys. Entry is 76.26kB gzip (budget 85kB).
- PDF: check/dead-code/build/assets, 461 unit tests, 68 artwork layouts and real
  upload/editor entry pass.
- Drop: Astro check/build/assets, 68 artwork layouts, four silhouettes, finite
  completion, lifecycle/static/no-JS checks pass. Native code is unchanged.
- Resume: check/build/dead-code, 68 artwork layouts and all 373 production tests
  (10 files, zero skips) pass. Existing separate export/device gates stay open.
- Roll: Astro/routes/assets/provenance verification and Worker dry-run pass.
- All five standalone bundles and portability checks pass. Contract hash begins
  `6d62642bad78`. Runtime cleanup removes replay listeners with the animation.

Final replay/focus checks pass in both engines: ten further phone layouts, 20
fallbacks and five lifecycle journeys each, including stationary pointer presses.
All ten light/dark keyboard focus captures show the same inset outline.
Full product, physical iPhone/Low Power Mode, assistive and native hardware
acceptance are not established by desktop WebKit mobile emulation.

## Initial failures and refinements

The first generated surface inventories needed formatting before Vite+ checks;
formatting and the complete affected checks then passed. A later scratch runner
tried Vite+ formatting at the two Astro repository roots; those roots are not
Vite+ packages. Their own documented npm verification commands pass.

The first slowed Drop timing measured 5,055ms, exceeding the retained five-second
assertion. Reducing stagger and hold overhead preserves the slower 720ms descent
and restores the bound; the assertion was not weakened.

The first full WebKit matrix tapped PDF after its first-cache notice reflowed the
320px page. Diagnostic hit-testing found the second tap at y=662, outside the 568px
viewport. The test now scrolls the actual target into view and verifies the hit
before every press. No service-worker or application behavior was changed for this.

Focus inspection found PDF/Resume's page rules replacing the new inset outline
with an outer one. The canonical child selector now takes precedence. This CSS-only refinement is rebuilt and checked with additional replay/focus profiles.
The rapid-tap check also exposed Resume's retained generic button-press transform
on the new transparent target. Its two legacy selectors now exclude the replay
button; the test requires no target transform or target animations while pressed.
Illustration identity checks remain intact. Keyboard checks enter keyboard modality
before inspecting focus and sample scroll immediately before Space, independently
of a first-cache notice arriving during the earlier Enter checks.

## Motion review

| Before                                          | After                                                                              | Why                                                                                              |
| ----------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Completed illustration had no deliberate replay | Shared completion-gated native overlay (`design/air/artwork.mjs`)                  | Lets the visitor inspect the illustration again without an unsolicited loop or separate controls |
| Drop descent 600ms, hold 300ms, dispersal 160ms | 720ms, 320ms, 180ms; tighter stagger (`apps/site/src/components/PixelFiles.astro`) | Slower pixel fall/readable rests while preserving finite sub-five-second motion                  |
| New focus offset lost to page rules             | Canonical `.air-artwork > .air-artwork-replay:focus-visible`                       | Same inset keyboard contour in every product                                                     |

**Approve.** This is occasional illustrative motion explicitly requested by the
visitor; Enter/Space directly request playback, not incidental keyboard animation.
Existing spatial/exit token curves and transform/opacity effects remain intact.
Busy presses are intentionally ignored per the request; offscreen/hidden work
pauses and departure cancels. Reduced motion, forced colours, Save-Data, low memory,
missing APIs and no-JS retain static artwork without a replay action. No layout
animation, hover movement or per-frame application state was introduced.

## Evidence and rollout

[Evidence folder](evidence/artwork-replay-2026-10-29/) contains compressed results,
build/test logs, ten family sheets, focus captures and diagnostics. Scratch:
`/tmp/air-replay-2026-10-29/`.

Deployment pending: verified pieces will be committed on dev, promoted through
individual dev → main PRs, live-verified and dev fast-forwarded to each merge.

## Air 1.3.1 — cold stylesheet correction

The first live Drop probes appeared to finish before inspection, but a diagnostic
caught a real WebKit exception: the 78% keyframe had `easing: ""`. A delayed CSS
response reproduced it deterministically. The module had sampled the Air tokens
before its stylesheet arrived; the subsequent error fallback hid replay. The
same delayed-stylesheet profile exposed the shared startup risk in Yard.

The canonical lifecycle now waits for applicable external stylesheets before
running, keeps replay hidden during loading and removes load/error listeners on
completion or departure. Drop reads its motion tokens inside each run after this
gate. This uses no timer, duplicated easing or new dependency. Air 1.3.1 pins the
portable correction (`8270df3eb883`); the approved compositions and replay behavior
are unchanged. The new regression holds CSS for two seconds and requires actual
initial movement, completion and replay in WebKit and Chrome.

The final local WebKit and Chrome runs each pass five delayed-CSS profiles,
ten normal phone light/dark initial/replay layouts, 20 fallbacks and five desktop
keyboard/lifecycle journeys, with zero browser errors. Original product artwork
suites and real PDF entry pass again; all builds/design/dead-code gates pass.
PDF again passes 461 units; Resume again passes all 373 production tests with
zero skips. The final Yard entry is 76.38kB gzip, within its 85kB budget.
The earlier 220-layout visual matrix retains the same styles and composition;
new phone captures are included. Follow-up deployment is pending; original live
failures and all previously passing replay/visual evidence remain retained.
