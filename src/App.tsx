import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { StartSection } from "./components/StartSection";
import { FeaturesChess } from "./components/FeaturesChess";
import { FeaturesGrid } from "./components/FeaturesGrid";
import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { CtaFooter } from "./components/CtaFooter";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="font-body antialiased bg-black text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <StartSection />
        <FeaturesChess />
        <FeaturesGrid />
        <Stats />
        <Testimonials />
        <Pricing />
        <CtaFooter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
