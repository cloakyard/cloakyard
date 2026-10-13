import type { ProductivityTool } from "../data/tools";
import { ToolEntry } from "./ToolEntry";

export function ToolSection({ tools }: { tools: ProductivityTool[] }) {
  return (
    <section
      id="tools"
      className="tools-section site-frame"
      tabIndex={-1}
      aria-labelledby="tools-title"
    >
      <h2 id="tools-title" className="visually-hidden">
        Meet the family
      </h2>
      <div className="tool-list">
        {tools.map((tool) => (
          <ToolEntry key={tool.slug} tool={tool} />
        ))}
      </div>
    </section>
  );
}
