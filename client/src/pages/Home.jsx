import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";


function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
    </div>
  );
}

export default Home;