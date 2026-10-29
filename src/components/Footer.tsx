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
      </nav>
    </footer>
  );
}
