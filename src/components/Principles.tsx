import { ArrowRight } from "lucide-react";

const principles = [
  {
    title: "Private by nature.",
    description:
      "Your documents and images are processed on your device. Each app explains its storage and network use.",
  },
  {
    title: "Open by choice.",
    description:
      "The code is yours to read, question and build on. No hidden machinery. Just tools you can look inside.",
  },
  {
    title: "Made with care.",
    description:
      "A clear place to work, useful details within reach, and room for your content to take the lead.",
  },
];

export function Principles() {
  return (
    <section
      id="principles"
      className="principles site-frame"
      tabIndex={-1}
      aria-labelledby="principles-title"
    >
      <h2 id="principles-title">
        A little less noise.
        <br />A little more trust.
      </h2>
      <div className="principle-list">
        {principles.map((principle) => (
          <div className="principle" key={principle.title}>
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
          </div>
        ))}
      </div>
      <div className="open-invitation">
        <p>A small family. An open invitation.</p>
        <a
          className="text-link"
          href="https://github.com/cloakyard"
          target="_blank"
          rel="noreferrer"
        >
          Build with us <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
