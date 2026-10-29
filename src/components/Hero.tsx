import { ArrowRight, LockKeyhole } from "lucide-react";
import { ToolGathering } from "./ToolGathering";

export function Hero() {
  return (
    <section className="hero site-frame" aria-labelledby="home-title">
      <p className="hero-note">
        <LockKeyhole size={15} aria-hidden="true" /> Private by nature. Open by choice.
      </p>
      <h1 id="home-title">
        Your work.<span>A little lighter.</span>
      </h1>
      <p className="hero-description">
        Thoughtful tools for the things you need to do. With a little more space, and a lot less
        noise.
      </p>
      <div className="hero-actions">
        <a className="air-button air-button--primary" href="#tools">
          Find your flow <ArrowRight size={18} aria-hidden="true" />
        </a>
        <a className="air-button air-button--quiet" href="#principles">
          Our approach
        </a>
      </div>
      <ToolGathering />
    </section>
  );
}
