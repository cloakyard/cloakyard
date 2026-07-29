import { ArrowDownRight, GitBranch } from "lucide-react";

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

        <div className="hero-directory" aria-label="Cloakyard directory summary">
          <div>
            <strong>Productivity tools</strong>
            <p>PDFs · Résumés · Images · Downloads</p>
          </div>
          <div>
            <strong>Fun experiments</strong>
            <p>Physics · Sound · The curious web</p>
          </div>
        </div>
      </div>
    </section>
  );
}
