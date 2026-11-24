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

Cloakyard’s 64 px header and social mark and its 16 px favicon use the settled landing animation. The export reads the face paths, light and dark paints, cell positions and stacking order from the rendered hero. Both icons retain the family’s circular enamel field. The small drawing strengthens the open cell’s outline. [Compare the animation and logo](air/evidence/web-logos-2026-11-24/settled-cubes.png)

After changing the registry or the hero, run `vp run build` and `vp preview`. With the preview running, run `node scripts/render-yard-logo.mjs`. Set `SITE_URL` if the preview uses a port other than 4173 and `PUPPETEER_MODULE` if Puppeteer is installed externally. Use `--check` to verify the checked-in SVGs. Copy the full mark to CloakIMG’s `public/icons/cloakyard.svg`, regenerate the Cloakyard social card with `vp run generate:og` and rebuild.

When a product mark changes, copy its canonical SVG here and verify both themes and
all directory layouts. Local copies avoid runtime cross-origin dependencies. KERR
retains its requested text exploration link; no screenshot or simulated preview.
