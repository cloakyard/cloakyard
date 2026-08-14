import { ArrowUpRight, GitBranch, Scale } from "lucide-react";
import { productivityTools } from "../data/tools";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-frame footer-inner">
        <div className="footer-statement-row">
          <div>
            <p className="footer-kicker" translate="no">
              Cloakyard / Independent software
            </p>
            <p className="footer-statement">
              Useful tools. <span>Your data stays yours.</span>
            </p>
          </div>
          <nav className="footer-index" aria-label="Cloakyard products">
            {productivityTools.map((tool) => (
              <a key={tool.slug} href={tool.href} translate="no">
                {tool.name}
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-meta">
          <div className="footer-meta-identity">
            <span translate="no">© {new Date().getFullYear()} Cloakyard</span>
            <span aria-hidden="true">/</span>
            <span>
              Built by{" "}
              <a href="https://github.com/sumitsahoo" target="_blank" rel="noreferrer">
                Sumit Sahoo
              </a>
            </span>
          </div>
          <div className="footer-meta-links">
            <a href="https://github.com/cloakyard" target="_blank" rel="noreferrer">
              <GitBranch size={13} aria-hidden="true" />
              Source
            </a>
            <a
              href="https://github.com/cloakyard/cloakyard/blob/main/LICENSE"
              target="_blank"
              rel="noreferrer"
            >
              <Scale size={13} aria-hidden="true" />
              MIT licensed
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
