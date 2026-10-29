import { ArrowUpRight } from "lucide-react";
export function Footer() {
  return (
    <footer className="air-page-footer site-footer site-frame">
      <p className="air-page-identity">
        <span translate="no">© {new Date().getFullYear()} Cloakyard</span>
        <span>
          Built by{" "}
          <a href="https://github.com/sumitsahoo" target="_blank" rel="noreferrer">
            Sumit Sahoo
          </a>
        </span>
      </p>
      <nav aria-label="Footer navigation">
        <a
          href="/?view=privacy"
          aria-current={
            new URLSearchParams(location.search).get("view") === "privacy" ? "page" : undefined
          }
        >
          Privacy
        </a>
        <a href="https://github.com/cloakyard/cloakyard" target="_blank" rel="noreferrer">
          Source
        </a>
        <a
          href="https://github.com/cloakyard/cloakyard/blob/main/LICENSE"
          target="_blank"
          rel="noreferrer"
        >
          MIT license
        </a>
        <a href="/#tools">All apps</a>
        <a href="https://ko-fi.com/sumitsahoo21" target="_blank" rel="noopener noreferrer">
          Buy me a coffee <ArrowUpRight aria-hidden="true" />
        </a>
      </nav>
    </footer>
  );
}
