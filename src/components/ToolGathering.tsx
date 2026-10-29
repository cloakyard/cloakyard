import { useEffect, useRef } from "react";
import { mountAirArtwork } from "../../docs/air/artwork.mjs";

/** Five familiar materials open out from one family. All markup is a complete still. */
export function ToolGathering() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const artwork = mountAirArtwork(element, {
      settle() {},
      async run(animate) {
        const home = element.querySelector(".gathering-home")!.getBoundingClientRect();
        const ease = getComputedStyle(element).getPropertyValue("--air-ease-out").trim();
        const forms = [...element.querySelectorAll<HTMLElement>(".gathering-object")];
        const arrivals = forms.map((form, index) => {
          const rect = form.getBoundingClientRect();
          const x = home.x + home.width / 2 - rect.x - rect.width / 2;
          const y = home.y + home.height / 2 - rect.y - rect.height / 2;
          return {
            element: form,
            keyframes: [
              {
                transform: `translate(${x * 0.64}px, ${y * 0.64}px) rotate(${(index - 2) * -8}deg) scale(.92)`,
                opacity: 0.08,
              },
              { transform: "translate(0,0) rotate(0deg) scale(1)", opacity: 1 },
            ],
            options: { duration: 1800, delay: index * 60, easing: ease },
          };
        });
        const details = [...element.querySelectorAll<SVGElement>("[data-unfold]")].map(
          (part, index) => ({
            element: part,
            keyframes: [
              { transform: part.dataset.unfold!, opacity: 0.15 },
              { transform: "translate(0,0) rotate(0deg) scale(1)", opacity: 1 },
            ],
            options: { duration: 1800, delay: 640 + index * 45, easing: ease },
          }),
        );
        await animate([...arrivals, ...details]);
      },
    });
    return () => artwork.destroy();
  }, []);
  return (
    <div ref={root} className="tool-gathering" aria-hidden="true">
      <div className="gathering-objects">
        <div className="gathering-object gathering-paper">
          <svg viewBox="0 0 144 144" focusable="false">
            <g data-unfold="translate(20px, 9px) rotate(12deg)">
              <rect
                className="gathering-sheet"
                x="20"
                y="22"
                width="70"
                height="96"
                rx="4"
                transform="rotate(-16 55 70)"
              />
            </g>
            <g data-unfold="translate(-19px, 5px) rotate(-14deg)">
              <rect
                className="gathering-sheet"
                x="55"
                y="22"
                width="70"
                height="96"
                rx="4"
                transform="rotate(14 90 70)"
              />
            </g>
            <rect className="gathering-sheet" x="37" y="20" width="70" height="100" rx="4" />
            <path d="M52 43h20M52 57h40M52 68h40M52 79h30" className="gathering-ink" />
            <path d="M52 101h18" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>
        <div className="gathering-object gathering-story">
          <svg viewBox="0 0 144 144" focusable="false">
            <rect className="gathering-sheet" x="32" y="18" width="80" height="110" rx="4" />
            <path d="M49 39h29M49 48h43" className="gathering-ink" />
            {[66, 86, 106].map((y, i) => (
              <g key={y} data-unfold={`translate(${-28 + i * 8}px, ${12 - i * 4}px)`}>
                <circle cx="49" cy={y} r="3" fill="currentColor" />
                <path d={`M60 ${y}h30M60 ${y + 7}h22`} className="gathering-ink" />
              </g>
            ))}
            <path d="M49 69v14m0 6v14" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="gathering-object gathering-image">
          <svg viewBox="0 0 144 144" focusable="false">
            <rect
              className="gathering-sheet"
              x="23"
              y="29"
              width="100"
              height="84"
              rx="4"
              transform="rotate(-7 73 71)"
            />
            <g data-unfold="translate(0, 14px) rotate(7deg)">
              <rect className="gathering-sheet" x="24" y="26" width="100" height="84" rx="4" />
              <path d="M34 99V67l25-18 23 23 14-11 18 14v24Z" fill="var(--air-surface-soft)" />
              <path d="m34 92 28-24 22 19 15-11 15 15v8H34Z" fill="currentColor" opacity=".6" />
              <circle cx="97" cy="47" r="8" fill="currentColor" />
            </g>
          </svg>
        </div>
        <div className="gathering-object gathering-pixels">
          <svg viewBox="0 0 144 144" focusable="false">
            {[0, 1, 2, 3, 4, 5].flatMap((row) =>
              [0, 1, 2, 3, 4]
                .filter((col) => row > 1 || col < 3)
                .map((col) => (
                  <rect
                    key={`${row}-${col}`}
                    x={34 + col * 15}
                    y={26 + row * 15}
                    width="12"
                    height="12"
                    rx="1"
                    fill="currentColor"
                    data-unfold={`translate(${(col - 2) * 5}px, ${-40 - (5 - row) * 8}px)`}
                  />
                )),
            )}
          </svg>
        </div>
        <div className="gathering-object gathering-roll">
          <svg viewBox="0 0 144 144" focusable="false">
            {[0, 1, 2].map((i) => (
              <g
                key={i}
                data-unfold={`translate(${(1 - i) * 28}px, ${(1 - i) * 8}px) rotate(${(1 - i) * 9}deg)`}
              >
                <rect
                  x={8 + i * 43}
                  y={36 + i * 4}
                  width="42"
                  height="70"
                  rx="3"
                  fill="var(--air-ink)"
                />
                <rect
                  x={12 + i * 43}
                  y={46 + i * 4}
                  width="34"
                  height="48"
                  rx="1"
                  fill="var(--air-surface-soft)"
                />
                <circle cx={35 + i * 43} cy={58 + i * 4} r="5" fill="var(--air-light-cloakimg)" />
                <path
                  d={`M${12 + i * 43} ${87 + i * 4}l13-18 21 25H${12 + i * 43}Z`}
                  fill="var(--air-light-cloakresume)"
                  opacity=".7"
                />
                <path
                  d={`M${16 + i * 43} ${41 + i * 4}h4m8 0h4m8 0h2M${16 + i * 43} ${100 + i * 4}h4m8 0h4m8 0h2`}
                  stroke="var(--air-page)"
                  strokeWidth="2"
                />
              </g>
            ))}
          </svg>
        </div>
      </div>
      <img className="gathering-home" src="/cloakyard-mark.svg" width="40" height="40" alt="" />
    </div>
  );
}
