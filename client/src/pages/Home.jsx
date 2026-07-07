import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import About from "../components/About";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950">

      <Navbar />

      <Hero />

      <Stats />

      <Features />

      <HowItWorks />

      <About />

    </div>
  );
}

export default Home;