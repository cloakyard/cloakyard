/** Export the settled landing artwork inside the family's roundel. Run against a built preview. */
import assert from "node:assert/strict";
import { readFile, writeFile } from "node:fs/promises";

const { default: puppeteer } = await import(process.env.PUPPETEER_MODULE || "puppeteer-core");
const browser = await puppeteer.launch({
  executablePath:
    process.env.CHROME_PATH || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});
const origin = process.env.SITE_URL || "http://127.0.0.1:4173";

async function settledScene(theme) {
  const page = await browser.newPage();
  try {
    await page.emulateMediaFeatures([
      { name: "prefers-reduced-motion", value: "reduce" },
      { name: "prefers-color-scheme", value: theme },
    ]);
    await page.goto(origin);
    await page.waitForSelector(".yard-growth-next svg");
    return await page.evaluate(() => {
      const scene = document.querySelector(".yard-growth-scene");
      const { width, height } = scene.getBoundingClientRect();
      // Use layout percentages before device-pixel rounding. These are the settled positions.
      const cells = [...scene.children]
        .map((cube) => ({
          x: (parseFloat(cube.style.left) * width) / 100,
          y: (parseFloat(cube.style.top) * height) / 100,
          width: (parseFloat(cube.style.width) * width) / 100,
          height: (parseFloat(cube.style.height) * height) / 100,
          depth: Number(cube.style.zIndex),
          open: cube.classList.contains("yard-growth-next"),
        }))
        .sort((a, b) => a.depth - b.depth);
      // Resolve the hero's CSS colour mixes to portable sRGB paints.
      const context = document.createElement("canvas").getContext("2d");
      function colour(value) {
        context.fillStyle = value;
        context.fillRect(0, 0, 1, 1);
        const [r, g, b] = context.getImageData(0, 0, 1, 1).data;
        return "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("");
      }
      const faces = (svg) =>
        [...svg.querySelectorAll("path")].map((face) => ({
          d: face.getAttribute("d"),
          fill: colour(getComputedStyle(face).fill),
          stroke: colour(getComputedStyle(face).stroke),
        }));
      const open = scene.querySelector(".yard-growth-next svg");
      const solid = scene.querySelector("[data-app-cube] svg") ?? open;
      return {
        cells,
        viewBox: solid.getAttribute("viewBox"),
        solid: faces(solid),
        open: faces(open),
      };
    });
  } finally {
    await page.close();
  }
}

function render(light, dark, size) {
  const tab = size === 16;
  const left = Math.min(...light.cells.map((c) => c.x));
  const top = Math.min(...light.cells.map((c) => c.y));
  const width = Math.max(...light.cells.map((c) => c.x + c.width)) - left;
  const height = Math.max(...light.cells.map((c) => c.y + c.height)) - top;
  const scale = (tab ? 11 : 39) / Math.max(width, height);
  const fmt = (n) => Number(n.toFixed(3));
  const symbols = [],
    darkPaint = [];
  for (const kind of ["solid", "open"]) {
    const paths = light[kind].map((face, i) => {
      const id = kind + "-" + i;
      const night = dark[kind][i];
      darkPaint.push(`        #${id} { fill: ${night.fill}; stroke: ${night.stroke} }`);
      return `      <path id="${id}" d="${face.d}" fill="${face.fill}" stroke="${face.stroke}"/>`;
    });
    // The tab needs a visible edge around its open cell at one device pixel per CSS pixel.
    const stroke = tab && kind === "open" ? 6 : 1;
    symbols.push(
      `    <symbol id="${kind}" viewBox="${light.viewBox}" overflow="visible" stroke-linejoin="round" stroke-width="${stroke}">\n${paths.join("\n")}\n    </symbol>`,
    );
  }
  const cells = light.cells.map((c) => {
    const x = fmt(size / 2 + (c.x - left - width / 2) * scale);
    const y = fmt(size / 2 + (c.y - top - height / 2) * scale);
    return `    <use href="#${c.open ? "open" : "solid"}" x="${x}" y="${y}" width="${fmt(c.width * scale)}" height="${fmt(c.height * scale)}"/>`;
  });
  const rim = tab
    ? ""
    : `
    <linearGradient id="rim" x1=".24" y1="0" x2=".76" y2="1">
      <stop stop-color="#fff" stop-opacity=".88"/>
      <stop offset=".39" stop-color="#fff" stop-opacity=".08"/>
      <stop offset=".7" stop-color="#0a1540" stop-opacity=".24"/>
      <stop offset="1" stop-color="#fff" stop-opacity=".46"/>
    </linearGradient>
    <radialGradient id="bloom" cx=".24" cy=".16" r=".8">
      <stop stop-color="#fff" stop-opacity=".27"/>
      <stop offset=".68" stop-color="#fff" stop-opacity="0"/>
    </radialGradient>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" role="img" aria-labelledby="title description" data-logo-spec="cloakyard-mark-v2">
  <title id="title">Cloakyard</title>
  <desc id="description">The landing animation’s settled blue cubes and open next cell on an indigo disc.</desc>
  <defs>
    <linearGradient id="enamel" x1=".19" y1="0" x2=".75" y2="1">
      <stop id="enamel-light" stop-color="#96baff"/>
      <stop id="enamel-mid" offset=".47" stop-color="#4569d6"/>
      <stop id="enamel-deep" offset="1" stop-color="#263fa4"/>
    </linearGradient>${rim}
${symbols.join("\n")}
    <style>
      @media (prefers-color-scheme: dark) {
        #enamel-light { stop-color: #6b89cd }
        #enamel-mid { stop-color: #364c91 }
        #enamel-deep { stop-color: #23316b }
${darkPaint.join("\n")}
      }
    </style>
  </defs>
  <g id="disc">
    <circle cx="${size / 2}" cy="${size / 2}" r="${(size * 30) / 64}" fill="url(#enamel)"/>${tab ? "" : '\n    <circle cx="32" cy="32" r="29.5" fill="url(#bloom)" stroke="url(#rim)" stroke-width="1"/>'}
  </g>
  <g id="artwork">
${cells.join("\n")}
  </g>
</svg>
`;
}

try {
  const light = await settledScene("light");
  const dark = await settledScene("dark");
  assert.deepEqual(light.cells, dark.cells);
  for (const [size, path] of [
    [64, "cloakyard-mark.svg"],
    [16, "favicon.svg"],
  ]) {
    const file = new URL("../public/" + path, import.meta.url);
    const svg = render(light, dark, size);
    if (process.argv.includes("--check")) assert.equal(await readFile(file, "utf8"), svg, path);
    else await writeFile(file, svg);
  }
} finally {
  await browser.close();
}
