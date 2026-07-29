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
    if (!window.location.hash) {
      return;
    }

    void document.fonts.ready.then(() => {
      document.querySelector(window.location.hash)?.scrollIntoView();
    });
  }, []);

  return (
    <div className="site-shell">
      <Header />
      <main id="main">
        <Hero />
        <ToolSection tools={productivityTools} />
        <ExperimentSection experiment={experiments[0]} />
        <Principles />
      </main>
      <Footer />
    </div>
  );
}
