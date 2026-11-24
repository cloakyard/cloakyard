/** Run against Workers previews or deployed origins to verify real navigation responses. */
import assert from "node:assert/strict";

const origins = process.env.AIR_FAMILY_URLS?.split(",").map((url) => new URL(url).origin);
assert(origins?.length, "Set AIR_FAMILY_URLS to the comma-separated origins to test.");
const playwright = await import(process.env.PLAYWRIGHT_MODULE || "playwright");
const browser = await playwright[process.env.AIR_BROWSER || "chromium"].launch();
try {
  for (const origin of origins) {
    const page = await browser.newPage({ javaScriptEnabled: false, serviceWorkers: "block" });
    try {
      for (const path of ["/missing-air-recovery-check", "/nested/missing-air-recovery-check"]) {
        const response = await page.goto(origin + path);
        assert.equal(response?.status(), 404, origin + path);
        const main = page.getByRole("main");
        await main.getByRole("heading", { level: 1 }).waitFor();
        const home = main.locator('a[href="/"], a[href="/#tools"], a[href="./"]').first();
        await home.click();
        assert.equal(new URL(page.url()).origin, origin);
        assert.equal(new URL(page.url()).pathname, "/");
      }
      console.log(origin, "served a 404 and a working return link at both depths.");
    } finally {
      await page.close();
    }
  }
} finally {
  await browser.close();
}
