import type { ProductivityTool } from "../data/tools";
import { ToolEntry } from "./ToolEntry";

const platformGroups = [
  { type: "web", title: "Web apps", description: "Open in your browser." },
  { type: "macos", title: "macOS apps", description: "Native apps for your Mac." },
] as const;

export function ToolSection({ tools }: { tools: ProductivityTool[] }) {
  return (
    <div id="tools" className="tools-section site-frame" tabIndex={-1}>
      {platformGroups.map((group) => (
        <section className="tool-group" key={group.type} aria-labelledby={`${group.type}-title`}>
          <div className="tool-group-heading">
            <h2 id={`${group.type}-title`}>{group.title}</h2>
            <p>{group.description}</p>
          </div>
          <div className="tool-list">
            {tools
              .filter((tool) => tool.platformType === group.type)
              .map((tool) => (
                <ToolEntry key={tool.slug} tool={tool} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
