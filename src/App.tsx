import { useEffect } from "react";
import { ExperimentSection } from "./components/ExperimentSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Principles } from "./components/Principles";
import { ToolSection } from "./components/ToolSection";
import { experiments, productivityTools } from "./data/tools";

export default function App() {
  useEffect(() => {
    const followHash = () => {
      if (!window.location.hash) return;
      try {
        const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
        if (!target) return;
        target.focus({ preventScroll: true });
        target.scrollIntoView();
      } catch {
        // A malformed URL fragment must not break the directory.
      }
    };
    followHash();
    window.addEventListener("hashchange", followHash);
    return () => window.removeEventListener("hashchange", followHash);
  }, []);

  return (
    <div className="site-shell">
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <ToolSection tools={productivityTools} />
        <ExperimentSection experiments={experiments} />
        <Principles />
      </main>
      <Footer />
    </div>
  );
}
