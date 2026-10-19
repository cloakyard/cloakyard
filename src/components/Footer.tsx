import { ArrowRight } from "lucide-react";
import { productivityTools } from "../data/tools";

export function Footer() {
  return (
    <footer className="site-footer site-frame">
      <nav className="footer-products" aria-label="Cloakyard products">
        {productivityTools.map((tool) => (
          <a key={tool.slug} href={tool.href} translate="no">
            {tool.name}
            <ArrowRight size={14} aria-hidden="true" />
          </a>
        ))}
      </nav>
      <div className="footer-meta">
        <p>
          <span translate="no">© {new Date().getFullYear()} Cloakyard</span>
          <span>
            Built by{" "}
            <a href="https://github.com/sumitsahoo" target="_blank" rel="noreferrer">
              Sumit Sahoo
            </a>
          </span>
        </p>
        <nav aria-label="Project information">
          <a href="https://github.com/cloakyard" target="_blank" rel="noreferrer">
            Source
          </a>
          <a
            href="https://github.com/cloakyard/cloakyard/blob/main/LICENSE"
            target="_blank"
            rel="noreferrer"
          >
            MIT licensed
          </a>
        </nav>
      </div>
    </footer>
  );
}
