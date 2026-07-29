import { useState } from "react";
import { ArrowUpRight, GitBranch } from "lucide-react";
import type { ProductivityTool } from "../data/tools";

export function ToolCard({ tool }: { tool: ProductivityTool }) {
  const [markUnavailable, setMarkUnavailable] = useState(false);
  const FallbackIcon = tool.icon;

  return (
    <article className={`tool-card tool-card--${tool.slug}`}>
      <div className="tool-card-top">
        <span className="tool-status">
          <i aria-hidden="true" />
          {tool.status}
        </span>
      </div>
      <div
        className={`tool-icon${markUnavailable ? " tool-icon--fallback" : ""}`}
        aria-hidden="true"
      >
        {markUnavailable ? (
          <FallbackIcon size={25} strokeWidth={1.6} />
        ) : (
          <img
            src={tool.mark}
            alt=""
            width="60"
            height="60"
            onError={() => setMarkUnavailable(true)}
          />
        )}
      </div>
      <div className="tool-copy">
        <h3>
          Cloak<span>{tool.shortName}</span>
        </h3>
        <p>{tool.description}</p>
      </div>
      <dl className="tool-meta">
        <div>
          <dt>Platform</dt>
          <dd>{tool.platform}</dd>
        </div>
        <div>
          <dt>Privacy</dt>
          <dd>{tool.privacy}</dd>
        </div>
      </dl>
      <div className="tool-links">
        <a className="tool-launch" href={tool.href}>
          Open {tool.name}
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <a
          className="tool-source"
          href={tool.repo}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${tool.name} source on GitHub`}
        >
          <GitBranch size={16} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
