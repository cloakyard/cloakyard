import { useEffect, useRef } from "react";
import { mountAirArtwork } from "../../docs/air/artwork.mjs";
import { productivityTools } from "../data/tools";
import { yardGrowth } from "./yard-growth";

const composition = yardGrowth(productivityTools.length);

/** One building block per app. The final open cell makes growth part of the mark. */
export function YardGrowth() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const artwork = mountAirArtwork(element, {
      settle() {},
      async run(animate) {
        const ease = getComputedStyle(element).getPropertyValue("--air-ease-out").trim();
        const cubes = [...element.querySelectorAll<HTMLElement>("[data-app-cube]")];
        await animate([
          ...cubes.map((cube, index) => ({
            element: cube,
            keyframes: [
              { transform: `translate(${index % 2 ? 24 : -24}%, -54%)`, opacity: 0 },
              { transform: "translate(0, 0)", opacity: 1 },
            ],
            options: {
              duration: composition.duration,
              delay: 160 + index * composition.step,
              easing: ease,
            },
          })),
          {
            element: element.querySelector(".yard-growth-next")!,
            keyframes: [
              { transform: "translateY(-12%)", opacity: 0 },
              { transform: "translateY(0)", opacity: 1 },
            ],
            options: { duration: 480, delay: composition.nextDelay, easing: ease },
          },
        ]);
      },
    });
    return () => artwork.destroy();
  }, []);
  return (
    <div ref={root} className="yard-growth air-artwork">
      <div className="yard-growth-scene" aria-hidden="true">
        {composition.cells.map((cell, index) => (
          <div
            key={productivityTools[index]?.slug ?? "next"}
            className={`yard-growth-cube${index === productivityTools.length ? " yard-growth-next" : ""}`}
            data-app-cube={productivityTools[index]?.slug}
            style={{
              left: `${cell.left}%`,
              top: `${cell.top}%`,
              width: `${cell.width}%`,
              height: `${cell.height}%`,
              zIndex: cell.depth,
            }}
          >
            <svg viewBox="-49 -1 98 106" focusable="false">
              <path className="yard-growth-left" d="M-48 24 0 48V104L-48 80Z" />
              <path className="yard-growth-right" d="M0 48 48 24V80L0 104Z" />
              <path className="yard-growth-top" d="M0 0 48 24 0 48-48 24Z" />
            </svg>
          </div>
        ))}
      </div>
      <button
        className="air-artwork-replay"
        type="button"
        aria-label="Replay Cloakyard animation"
        hidden
      />
    </div>
  );
}
