import { ArrowUpRight, Code2, EyeOff, Shapes } from "lucide-react";

const principles = [
  {
    title: "Open source",
    description: "The code is part of the product. Read it, audit it, improve it, or build on it.",
    icon: Code2,
  },
  {
    title: "Privacy, structurally",
    description:
      "Local processing and minimal network surfaces are architecture decisions—not a marketing toggle.",
    icon: EyeOff,
  },
  {
    title: "Design with intent",
    description: "Privacy tools should feel considered, legible, and genuinely pleasant to use.",
    icon: Shapes,
  },
];

export function Principles() {
  return (
    <section className="section principles-section" id="principles">
      <div className="site-frame">
        <p className="section-kicker">The standard</p>
        <div className="section-heading principles-heading">
          <h2>Built around a small set of stubborn ideas.</h2>
          <p>A shared standard keeps a growing family coherent.</p>
        </div>
        <div className="principles-list">
          {principles.map((principle) => {
            const Icon = principle.icon;
            return (
              <article key={principle.title}>
                <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            );
          })}
        </div>
        <div className="open-invite">
          <div>
            <p className="kicker kicker--on-dark">The gate is open</p>
            <h2>
              Use the tools.
              <span>Help shape the yard.</span>
            </h2>
          </div>
          <div>
            <p>
              Found a rough edge or have an idea? Issues, discussions, and pull requests are
              welcome.
            </p>
            <a
              className="button button--light"
              href="https://github.com/cloakyard"
              target="_blank"
              rel="noreferrer"
            >
              Visit Cloakyard on GitHub
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
