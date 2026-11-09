/** Optional browser-suite observer. Run with NODE_OPTIONS=--import=<this file>
 * and AIR_RADIUS_EVIDENCE=<directory>. It records geometry without styling the app.
 * Supply the suite's actual PLAYWRIGHT_MODULE and/or PUPPETEER_MODULE entry paths.
 * Review semantic roles: a valid token alone does not prove the right component.
 */
import { mkdirSync, appendFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

function observeRadii() {
  if (window.__airRadiusAudit) return;
  const observations = new Map();
  let frame = 0;
  function capture() {
    frame = 0;
    const view = [...document.querySelectorAll("h1,h2,.editor-properties__title")]
      .filter((e) => e.getClientRects().length)
      .map((e) => e.textContent.trim().slice(0, 70))
      .join(" / ");
    for (const e of document.querySelectorAll("body *")) {
      if (!(e instanceof HTMLElement) || e.closest("[hidden],[inert],.sr-only")) continue;
      const r = e.getBoundingClientRect();
      if (r.width < 1 || r.height < 1) continue;
      const s = getComputedStyle(e);
      if (s.visibility === "hidden" || s.opacity === "0" || s.display === "none") continue;
      const radii = [
        s.borderTopLeftRadius,
        s.borderTopRightRadius,
        s.borderBottomRightRadius,
        s.borderBottomLeftRadius,
      ];
      const control = e.matches(
        "button,input,select,textarea,summary,[role=button],[role=tab],[role=option],[role=menuitem],[role=dialog]",
      );
      if (!control && radii.every((v) => v === "0px")) continue;
      const row = {
        origin: location.origin,
        route: location.pathname + location.search,
        view,
        tag: e.tagName.toLowerCase(),
        id: e.id,
        class: e.className,
        role: e.getAttribute("role"),
        type: e.getAttribute("type"),
        name: e.getAttribute("aria-label") || e.getAttribute("name") || "",
        output:
          !!e.closest(".resume-page,.react-pdf__Page,[data-air-output]") ||
          (!!e.closest(".resume-template-paper") && !e.matches(".resume-template-paper")),
        parent: e.parentElement?.className || "",
        radii,
        width: Math.round(r.width),
        height: Math.round(r.height),
        viewport: [innerWidth, innerHeight],
        rootFont: getComputedStyle(document.documentElement).fontSize,
        theme: matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
        paint: { background: s.backgroundColor, border: s.borderTopWidth, style: s.borderTopStyle },
      };
      const key = JSON.stringify([
        row.route,
        view,
        row.tag,
        row.id,
        row.class,
        row.role,
        row.type,
        row.parent,
        radii,
        row.viewport,
        row.rootFont,
        row.theme,
      ]);
      observations.set(key, row);
    }
  }
  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(capture);
  };
  const observer = new MutationObserver(schedule);
  const start = () => {
    observer.observe(document.documentElement, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ["class", "style", "hidden", "open", "aria-expanded", "data-state"],
    });
    schedule();
  };
  if (document.documentElement) start();
  else document.addEventListener("DOMContentLoaded", start, { once: true });
  addEventListener("resize", schedule);
  window.__airRadiusAudit = () => {
    capture();
    const rows = [...observations.values()];
    observations.clear();
    return rows;
  };
}

const out = process.env.AIR_RADIUS_EVIDENCE;
if (out) {
  mkdirSync(out, { recursive: true });
  const attached = new WeakMap();
  async function attach(page, engine) {
    if (attached.has(page)) {
      await attached.get(page);
      return page;
    }
    const initialize = (async () => {
      const evaluate = page.evaluate.bind(page);
      const drain = async () => {
        if (page.isClosed()) return;
        const rows = await evaluate(() => window.__airRadiusAudit?.() || []).catch(() => []);
        if (rows.length)
          appendFileSync(
            resolve(out, `${engine}-${process.pid}.ndjson`),
            rows.map((row) => JSON.stringify({ engine, ...row })).join("\n") + "\n",
          );
      };
      if (page.addInitScript) await page.addInitScript(observeRadii);
      else await page.evaluateOnNewDocument(observeRadii);
      for (const method of ["goto", "reload", "close", "screenshot"]) {
        const original = page[method].bind(page);
        page[method] = async (...args) => {
          await drain();
          return original(...args);
        };
      }
      page.__drainAirRadii = drain;
    })();
    attached.set(page, initialize);
    await initialize;
    return page;
  }
  function context(ctx, engine) {
    const newPage = ctx.newPage.bind(ctx);
    ctx.newPage = async (...args) => attach(await newPage(...args), engine);
    const close = ctx.close.bind(ctx);
    ctx.close = async (...args) => {
      const pages = await ctx.pages();
      for (const p of pages) await p.__drainAirRadii?.();
      return close(...args);
    };
    return ctx;
  }
  function browser(b, engine) {
    const newPage = b.newPage.bind(b);
    b.newPage = async (...args) => attach(await newPage(...args), engine);
    for (const method of ["newContext", "createBrowserContext"])
      if (b[method]) {
        const original = b[method].bind(b);
        b[method] = async (...args) => context(await original(...args), engine);
      }
    const close = b.close.bind(b);
    b.close = async (...args) => {
      const pages = b.pages ? await b.pages() : b.contexts().flatMap((ctx) => ctx.pages());
      for (const p of pages) await p.__drainAirRadii?.();
      return close(...args);
    };
    return b;
  }
  if (process.env.PLAYWRIGHT_MODULE) {
    const engines = await import(process.env.PLAYWRIGHT_MODULE);
    for (const name of ["chromium", "webkit", "firefox"]) {
      const launch = engines[name].launch.bind(engines[name]);
      engines[name].launch = async (...args) => browser(await launch(...args), name);
    }
  }
  if (process.env.PUPPETEER_MODULE) {
    const { default: puppeteer } = await import(process.env.PUPPETEER_MODULE);
    // Named `launch` exports are already bound. Observe their CDP context too.
    const entry = pathToFileURL(resolve(process.env.PUPPETEER_MODULE));
    const { CdpBrowserContext } = await import(new URL("./cdp/BrowserContext.js", entry));
    const { CdpBrowser } = await import(new URL("./cdp/Browser.js", entry));
    const newPage = CdpBrowserContext.prototype.newPage;
    CdpBrowserContext.prototype.newPage = async function (...args) {
      return attach(await newPage.apply(this, args), "puppeteer");
    };
    for (const proto of [CdpBrowserContext.prototype, CdpBrowser.prototype]) {
      const close = proto.close;
      proto.close = async function (...args) {
        for (const page of await this.pages()) await page.__drainAirRadii?.();
        return close.apply(this, args);
      };
    }

    const launch = puppeteer.launch.bind(puppeteer);
    puppeteer.launch = async (...args) => browser(await launch(...args), "puppeteer");
  }
}
