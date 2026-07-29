import { ArrowDownRight, ArrowUpRight, GitBranch } from "lucide-react";
import { productivityTools } from "../data/tools";

export function Hero() {
  return (
    <section className="hero">
      <div className="site-frame">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="kicker">Open source · Privacy by default</p>
            <h1>
              Useful tools.
              <span>Your data stays yours.</span>
            </h1>
          </div>
          <div className="hero-aside">
            <p>
              A small, growing collection built to solve real problems without turning everyday work
              into a data pipeline.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#tools">
                Explore the tools
                <ArrowDownRight size={17} aria-hidden="true" />
              </a>
              <a
                className="button"
                href="https://github.com/cloakyard"
                target="_blank"
                rel="noreferrer"
              >
                <GitBranch size={16} aria-hidden="true" />
                GitHub organisation
              </a>
            </div>
            <p className="hero-note">Independent projects · One shared home</p>
          </div>
        </div>

        <div className="hero-system" aria-label="Cloakyard private toolkit">
          <div className="hero-system-head">
            <span>Cloakyard / Private toolkit</span>
            <span className="hero-system-state">
              <i aria-hidden="true" />
              04 focused tools
            </span>
          </div>

          <div className="hero-system-body">
            <div className="hero-system-intro">
              <div className="hero-system-mark" aria-hidden="true">
                <img src="/cloakyard-mark.svg" alt="" width="64" height="64" />
              </div>
              <p>One shared foundation</p>
              <strong>
                Bring the work.
                <span>Keep the data.</span>
              </strong>
              <small>Local-first · Open source · No accounts</small>
            </div>

            <div className="hero-tool-grid">
              {productivityTools.map((tool, index) => {
                const Icon = tool.icon;

                return (
                  <a
                    className={`hero-tool hero-tool--${tool.slug}`}
                    href={tool.href}
                    key={tool.slug}
                    aria-label={`Open ${tool.name}`}
                  >
                    <span className="hero-tool-top">
                      <span className="hero-tool-index">0{index + 1}</span>
                      <Icon size={20} strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <span className="hero-tool-name">
                      Cloak<b>{tool.shortName}</b>
                    </span>
                    <span className="hero-tool-bottom">
                      <span>{tool.privacy}</span>
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
