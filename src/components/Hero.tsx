import {
  ArrowDownRight,
  ArrowRight,
  Check,
  FileCheck2,
  FileInput,
  GitBranch,
  Laptop,
  X,
} from "lucide-react";

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

        <div className="hero-proof" aria-label="How Cloakyard keeps work private">
          <div className="hero-proof-head">
            <span>Cloakyard / Privacy model</span>
            <span className="hero-proof-state">
              <i aria-hidden="true" />
              Local by default
            </span>
          </div>

          <div className="hero-proof-body">
            <div className="hero-flow">
              <p className="hero-proof-label">A quieter path through everyday work</p>
              <div className="hero-flow-track">
                <article className="hero-flow-node">
                  <span className="hero-flow-node-top">
                    <b>01 / Bring</b>
                    <FileInput size={20} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <strong>Your work</strong>
                  <small>Files · drafts · ideas</small>
                </article>

                <span className="hero-flow-arrow" aria-hidden="true">
                  <ArrowRight size={18} />
                </span>

                <article className="hero-flow-node hero-flow-node--local">
                  <span className="hero-flow-node-top">
                    <b>02 / Work</b>
                    <Laptop size={20} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <div className="hero-flow-mark" aria-hidden="true">
                    <img src="/cloakyard-mark.svg" alt="" width="52" height="52" />
                  </div>
                  <strong>Handled locally</strong>
                  <small>In your browser or on your Mac</small>
                </article>

                <span className="hero-flow-arrow" aria-hidden="true">
                  <ArrowRight size={18} />
                </span>

                <article className="hero-flow-node">
                  <span className="hero-flow-node-top">
                    <b>03 / Keep</b>
                    <FileCheck2 size={20} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <strong>Your result</strong>
                  <small>Exported on your terms</small>
                </article>
              </div>
              <p className="hero-flow-caption">
                <Check size={15} strokeWidth={2} aria-hidden="true" />
                The interface changes. The boundary stays deliberate.
              </p>
            </div>

            <aside className="hero-boundary" aria-label="Routes Cloakyard products avoid">
              <div className="hero-boundary-head">
                <span>Routes that don&apos;t exist</span>
                <b>Outbound / ∅</b>
              </div>
              <ul>
                <li>
                  <X size={15} strokeWidth={2} aria-hidden="true" />
                  <span>
                    <strong>Required account</strong>
                    <small>No identity gate</small>
                  </span>
                  <b>No route</b>
                </li>
                <li>
                  <X size={15} strokeWidth={2} aria-hidden="true" />
                  <span>
                    <strong>Usage telemetry</strong>
                    <small>No behaviour profile</small>
                  </span>
                  <b>No route</b>
                </li>
                <li>
                  <X size={15} strokeWidth={2} aria-hidden="true" />
                  <span>
                    <strong>Default upload</strong>
                    <small>No remote work queue</small>
                  </span>
                  <b>No route</b>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
