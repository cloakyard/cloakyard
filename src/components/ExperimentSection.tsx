import { ArrowRight } from "lucide-react";
import type { YardProject } from "../data/tools";

export function ExperimentSection({ experiments }: { experiments: YardProject[] }) {
  return (
    <section
      id="experiments"
      className="curiosity site-frame"
      tabIndex={-1}
      aria-labelledby="curiosity-title"
    >
      <div className="curiosity-inner">
        <h2 id="curiosity-title">A little room for curiosity, too.</h2>
        {experiments.map((experiment) => (
          <div className="experiment-link" key={experiment.slug}>
            <p>{experiment.description}</p>
            <div className="experiment-actions">
              <a className="text-link" href={experiment.href}>
                Explore {experiment.name}
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a
                className="text-link secondary-link"
                href={experiment.repo}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${experiment.name} source on GitHub`}
              >
                Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
