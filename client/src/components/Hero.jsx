function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6">

      <h1 className="text-6xl font-extrabold text-white leading-tight">
        Your AI Career
        <span className="text-cyan-400"> Mentor</span>
      </h1>

      <p className="text-slate-400 text-xl mt-6 max-w-3xl">
        CareerPilot AI helps students analyze resumes,
        generate personalized roadmaps, prepare for interviews,
        and discover the right career path using Artificial Intelligence.
      </p>

      <div className="mt-10 flex gap-5">
        <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl text-white font-semibold">
          Get Started
        </button>

        <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl hover:bg-cyan-500 hover:text-white transition">
          Learn More
        </button>
      </div>

    </section>
  );
}

export default Hero;