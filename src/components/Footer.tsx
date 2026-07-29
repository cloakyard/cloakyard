import { ArrowUpRight, GitBranch, Scale } from "lucide-react";
import { allTools } from "../data/tools";
import { Brand } from "./Brand";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-frame footer-top">
        <div className="footer-brand">
          <Brand inverse />
          <p>Independent software from Sumit Sahoo.</p>
        </div>
        <nav aria-label="Cloakyard products">
          <p>Explore the yard</p>
          {allTools.map((tool) => (
            <a key={tool.slug} href={tool.href}>
              {tool.name}
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          ))}
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
