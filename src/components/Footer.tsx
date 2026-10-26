import { ArrowUpRight } from "lucide-react";
import { productivityTools } from "../data/tools";

export function Footer() {
  return (
    <footer className="air-page-footer site-footer site-frame">
      <nav className="air-page-nav footer-products" aria-label="Cloakyard products">
        {productivityTools.map((tool) => (
          <a key={tool.slug} href={tool.href} translate="no">
            {tool.name}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        ))}
      </nav>
      <div className="air-page-footer-row">
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
          <a href="#principles">Privacy</a>
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
        </nav>
      </div>
    </footer>
  );
}
