import { ArrowUpRight, GitBranch } from "lucide-react";
import type { ProductivityTool } from "../data/tools";

export function ToolEntry({ tool }: { tool: ProductivityTool }) {
  return (
    <article className="tool-entry">
      <div className="tool-heading">
        <img className="tool-logo" src={tool.logo} alt="" width="36" height="36" />
        {tool.status === "Beta" && <span className="tool-status">Beta</span>}
      </div>
      <h3 translate="no">{tool.name}</h3>
      <p className="tool-description">{tool.description}</p>
      <p className="tool-platform">
        {tool.platform}
        <span>{tool.privacy}</span>
      </p>
      <div className="tool-actions">
        <a className="text-link" href={tool.href}>
          Open {tool.name}
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <a
          className="air-icon-button air-button--quiet"
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
