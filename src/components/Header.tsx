import { GitBranch, Menu, X } from "lucide-react";
import { Brand } from "./Brand";

const nav = [
  { label: "Tools", href: "#tools" },
  { label: "Experiments", href: "#experiments" },
  { label: "Principles", href: "#principles" },
];

export function Header() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <header className="site-header">
        <div className="site-frame header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <a
              className="source-link"
              href="https://github.com/cloakyard"
              target="_blank"
              rel="noreferrer"
              aria-label="View Cloakyard on GitHub"
            >
              <GitBranch size={15} aria-hidden="true" />
              <span>Source</span>
            </a>
            <div
              className="mobile-menu"
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  event.currentTarget.querySelector<HTMLElement>("[popover]")?.hidePopover();
                }
              }}
            >
              <button
                type="button"
                popoverTarget="mobile-navigation"
                aria-label="Toggle navigation"
              >
                <Menu className="menu-open" size={20} aria-hidden="true" />
                <X className="menu-close" size={20} aria-hidden="true" />
              </button>
              <div
                className="mobile-menu-panel"
                id="mobile-navigation"
                popover="auto"
                aria-label="Navigation menu"
              >
                <p>Navigate</p>
                <nav aria-label="Mobile navigation">
                  {nav.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(event) => {
                        event.currentTarget.closest<HTMLElement>("[popover]")?.hidePopover();
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                <small>Open source · Privacy first</small>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
