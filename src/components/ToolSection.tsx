import type { ProductivityTool } from "../data/tools";
import { ToolCard } from "./ToolCard";

export function ToolSection({ tools }: { tools: ProductivityTool[] }) {
  return (
    <section className="section tools-section" id="tools">
      <div className="site-frame">
        <p className="section-kicker">Productivity</p>
        <div className="section-heading">
          <h2>Get the job done. Keep the data.</h2>
          <p>
            Focused tools for documents, images, résumés, and downloads. Each product stands on its
            own; all of them share the same privacy-first foundation.
          </p>
        </div>
        <div className="tool-grid">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
