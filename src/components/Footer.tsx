import { ArrowUpRight, GitBranch, Scale } from "lucide-react";
import { Brand } from "./Brand";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-frame footer-top">
        <div className="footer-brand">
          <Brand inverse />
          <p>Independent software from Sumit Sahoo.</p>
        </div>
        <nav aria-label="Page navigation">
          <p>On this page</p>
          <a href="#tools">Tools</a>
          <a href="#experiments">Experiments</a>
          <a href="#principles">Principles</a>
        </nav>
        <nav aria-label="Cloakyard links">
          <p>Elsewhere</p>
          <a href="https://github.com/cloakyard" target="_blank" rel="noreferrer">
            <GitBranch size={13} aria-hidden="true" />
            Organisation
          </a>
          <a href="https://github.com/cloakyard/cloakyard" target="_blank" rel="noreferrer">
            Site source
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </nav>
      </div>
      <div className="site-frame footer-bottom">
        <p>© {new Date().getFullYear()} Sumit Sahoo · Cloakyard</p>
        <p>
          <Scale size={13} aria-hidden="true" />
          MIT licensed
        </p>
      </div>
    </footer>
  );
}
