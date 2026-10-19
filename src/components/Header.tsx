import { useRef } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Brand } from "./Brand";

const navigation = [
  { href: "#tools", label: "The tools" },
  { href: "#experiments", label: "Curiosity" },
  { href: "#principles", label: "Our approach" },
];

export function Header() {
  const disclosure = useRef<HTMLDetailsElement>(null);
  return (
    <>
      <a className="skip-link air-button" href="#main">
        Skip to content
      </a>
      <header className="site-header site-frame">
        <Brand />
        <nav className="desktop-navigation" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="desktop-source text-link"
          href="https://github.com/cloakyard"
          target="_blank"
          rel="noreferrer"
        >
          Source <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <details
          className="mobile-navigation"
          ref={disclosure}
          onKeyDown={(event) => {
            if (event.key === "Escape" && disclosure.current?.open) {
              disclosure.current.open = false;
              disclosure.current.querySelector("summary")?.focus();
              event.preventDefault();
            }
          }}
        >
          <summary className="air-button air-button--quiet">
            Menu <ChevronDown size={16} aria-hidden="true" />
          </summary>
          <nav
            aria-label="Main navigation"
            onClick={(event) => {
              if ((event.target as Element).closest("a") && disclosure.current) {
                disclosure.current.open = false;
                // A new-tab link must not leave focus in the closed disclosure.
                // Same-page navigation then moves focus to its destination.
                disclosure.current.querySelector("summary")?.focus({ preventScroll: true });
              }
            }}
          >
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a href="https://github.com/cloakyard" target="_blank" rel="noreferrer">
              Source <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </nav>
        </details>
      </header>
    </>
  );
}
