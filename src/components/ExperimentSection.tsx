import { ArrowUpRight, GitBranch } from "lucide-react";
import type { YardProject } from "../data/tools";

export function ExperimentSection({ experiment }: { experiment: YardProject }) {
  return (
    <section className="experiment-section" id="experiments">
      <div className="site-frame">
        <p className="section-kicker section-kicker--dark">Fun experiments</p>
        <div className="experiment-grid">
          <div className="experiment-copy">
            <p className="experiment-label">KERR</p>
            <h2>
              Some ideas are useful because they make you <span>look twice.</span>
            </h2>
            <p>{experiment.description}</p>
            <div className="experiment-actions">
              <a className="button button--light" href={experiment.href}>
                Enter KERR
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a className="text-link" href={experiment.repo} target="_blank" rel="noreferrer">
                <GitBranch size={15} aria-hidden="true" />
                Read the source
              </a>
            </div>
            <dl className="experiment-meta">
              <div>
                <dt>Rendering</dt>
                <dd>Relativistic WebGL</dd>
              </div>
              <div>
                <dt>Score</dt>
                <dd>Generative Web Audio</dd>
              </div>
            </dl>
          </div>
          <div className="kerr-instrument" aria-label="Abstract orbital preview of KERR">
            <div className="kerr-head">
              <span>KERR / LIVE SIMULATION</span>
              <span>
                <i aria-hidden="true" />
                Ready
              </span>
            </div>
            <div className="black-hole" aria-hidden="true">
              <div className="orbit orbit--one" />
              <div className="orbit orbit--two" />
              <div className="orbit orbit--three" />
              <div className="event-horizon" />
            </div>
            <div className="kerr-readout" aria-hidden="true">
              <span>SPIN / 0.94</span>
              <span>ISCO / 2.02 M</span>
              <span>FRAME / REALTIME</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
