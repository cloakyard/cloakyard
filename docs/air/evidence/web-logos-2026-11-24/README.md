# Web app logos

The [four production marks](marks.png) use the circular field from the CloakIMG study. Each site has an independent 16 px browser-tab drawing. Cloakyard displays byte-identical copies of the three app marks in its [Web apps directory](directory.png).

| Site        | Approved drawing                                                             | Social card                 |
| ----------- | ---------------------------------------------------------------------------- | --------------------------- |
| Cloakyard   | Six cubes and the open seventh cell from the landing animation               | `public/og.png`             |
| CloakPDF    | A folded white report with printed lines and a two-column table              | `public/icons/og-image.png` |
| CloakResume | A white index card with three tabs that reuse one outline at equal intervals | `public/icons/og-image.png` |
| CloakIMG    | A raised frame, overlapping coral ridges and a sun                           | `public/icons/og-image.png` |

The [four 1200×630 social cards](social-cards.png) use the full mark. Each app also ships a separate opaque launcher master and regenerated install screenshots.

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
