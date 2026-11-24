# Web app logos

The [four marks in the initial release](marks.png) use the circular field from the CloakIMG study. Each site has an independent 16 px browser-tab drawing. Cloakyard displays byte-identical copies of the three app marks in its [Web apps directory](directory.png).

| Site        | Approved drawing                                                             | Social card                 |
| ----------- | ---------------------------------------------------------------------------- | --------------------------- |
| Cloakyard   | Six cubes and the open seventh cell from the landing animation               | `public/og.png`             |
| CloakPDF    | A folded white report with printed lines and a two-column table              | `public/icons/og-image.png` |
| CloakResume | A white index card with three tabs that reuse one outline at equal intervals | `public/icons/og-image.png` |
| CloakIMG    | A raised frame, overlapping coral ridges and a sun                           | `public/icons/og-image.png` |

The [four initial 1200×630 social cards](social-cards.png) use the full mark. Each app also ships a separate opaque launcher master and regenerated install screenshots.

## Local production verification

| Surface                                 | Coverage                                                                                                                                                                                                           |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Landing headers and Cloakyard directory | Chrome and WebKit, light and dark, at 390×844, 768×1024, 1280×800 and 1600×1000. All 64 site, engine, viewport and theme combinations displayed the expected assets without horizontal overflow.                   |
| Logo and favicon artwork                | Compared browser pixels with the selected full and 16 px SVG studies at phone and desktop sizes in both engines and themes. Mean absolute channel error was below one on a 0–255 scale.                            |
| Social metadata                         | Fetched each built landing page and 404 page, plus CloakIMG’s privacy page. Verified Open Graph and Twitter images resolve to each site’s regenerated PNG and checked the header mark against the product artwork. |
| PWA assets                              | Fetched the icons and screenshots named by all three install manifests and checked each image against its declared dimensions. Verified the three maskable launcher glyphs fit inside their safe circles.          |
| Distribution                            | Built and served all four sites locally. Browser viewports were emulated.                                                                                                                                          |

All four repositories passed their production builds, formatting, lint, Air design and portability checks. The suites passed 16 tests in Cloakyard, 474 in CloakPDF, 375 in CloakResume and 501 in CloakIMG. Cloakyard’s landing-animation browser checks covered 44 layouts, 22 arrivals and four journeys. CloakPDF’s browser update checks covered 44 deferred-update layouts. CloakIMG’s mask audit found all 68,382 foreground pixels inside the safe circle.

The [logo size audit](sizes/README.md) covers the public screens, editor tools, secondary workspaces, overlays and recovery states.

## Cloakyard animation match

The [settled frame and current mark](settled-cubes.png) show the homepage artwork beside the 64-unit mark, the 36 px header and the separate 16 px tab in both themes. The export uses the same face paths, stacking order, colours and positions as the seven cells on the homepage. In 32 Chrome and WebKit comparisons across phone, tablet, laptop and desktop, cell placement differed by less than 0.002 SVG units and the sRGB paint values by at most one channel step. The homepage animation passed its 44 static layouts, 22 arrivals and four navigation journeys.

## Final logo corrections

The [light and dark comparison](refined-family.png) shows the four marks at header and browser-tab sizes, followed by the three installable apps’ standard and maskable launchers. CloakPDF retains the folded white sheet, three text lines and ruled table. Removing the small cell strokes makes the grid easier to distinguish at 36 px. CloakIMG’s browser tab uses the header’s dark coral gradient, and its standard launchers fill the canvas at 64, 192 and 512 px.

| Surface           | Verification                                                                                                                                                                                                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Directory         | The PDF, Resume and IMG marks match the corresponding apps’ public SVGs byte-for-byte. All three render at 36 × 36 CSS px.                                                                                                                                                     |
| Workspace headers | Chrome and WebKit in light and dark, at widths of 320, 390, 768, 1023, 1024, 1280, 1440 and 1920 px. Each mark measures 36 × 36 CSS px.                                                                                                                                        |
| PDF Home control  | The chevron and mark share one native button on desktop. The compact control retains its pending-mark badge. Checked pointer return, keyboard return and a single focus stop across the breakpoint. The PDF navigation suite also checked 176 layouts and 176 tool selections. |
| Social cards      | Regenerated all four 1200 × 630 cards from production builds. The PDF card reflects the new report. Cloakyard, IMG and Resume reproduced their existing PNGs byte-for-byte.                                                                                                    |
| Installable icons | All pixels in IMG’s three standard launchers are opaque. Its maskable foreground fits the safe circle. PDF’s install icons and all four editor screenshots were regenerated.                                                                                                   |

The comparisons used emulated viewports and browser-rendered favicons. OS launcher installation on physical devices was outside this pass.
