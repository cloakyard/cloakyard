# Product brand assets

The directory uses the actual product marks, copied byte-for-byte from each product
repository. These are brand artwork, not UI palette definitions. Render at 36×36px
with their native aspect ratio, no tint, filter, added frame or animation. The adjacent
product heading supplies the accessible name; the image has an empty alt attribute.

| Local asset                          | Canonical product source                             |
| ------------------------------------ | ---------------------------------------------------- |
| `public/brands/cloakpdf-mark.svg`    | `cloakyard/cloakpdf:public/cloakpdf-mark.svg`        |
| `public/brands/cloakresume-mark.svg` | `cloakyard/cloakresume:public/cloakresume-mark.svg`  |
| `public/brands/cloakimg-mark.svg`    | `cloakyard/cloakimg:public/cloakimg-mark.svg`        |
| `public/brands/cloakdrop-mark.svg`   | `cloakyard/cloakdrop:assets/logo/cloakdrop-mark.svg` |

Cloakyard uses `public/cloakyard-mark.svg` in its header and social card. Its six cubes and open seventh cell match the landing animation. Browser tabs use the separate 16×16 drawing in `public/favicon.svg`. The [approved web artwork](air/evidence/web-logos-2026-11-24/marks.png) shows the four production marks together.

When a product mark changes, copy its canonical SVG here and verify both themes and
all directory layouts. Local copies avoid runtime cross-origin dependencies. KERR
retains its requested text exploration link; no screenshot or simulated preview.
