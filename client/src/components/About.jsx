function About() {
  return (
    <section id="about" className="py-24 bg-slate-950 text-white">

      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center">
          About CareerPilot AI
        </h2>

        <p className="text-slate-400 text-center mt-6 max-w-3xl mx-auto leading-8">
          CareerPilot AI is an AI-powered career companion designed to help
          students and professionals prepare for placements with intelligent
          resume analysis, personalized career guidance, learning roadmaps,
          and AI interview preparation.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-slate-900 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-cyan-400">
              🎯 Our Mission
            </h3>

            <p className="text-slate-400 mt-4">
              Make career preparation smarter using Artificial Intelligence.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-cyan-400">
              🚀 Our Vision
            </h3>

            <p className="text-slate-400 mt-4">
              Help every student discover the right career path and prepare with confidence.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-cyan-400">
              💡 Why CareerPilot AI?
            </h3>

            <p className="text-slate-400 mt-4">
              One platform for resume analysis, career guidance,
              roadmaps, interview practice, and progress tracking.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;