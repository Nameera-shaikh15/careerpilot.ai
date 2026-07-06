function Stats() {
  const stats = [
    { number: "50K+", label: "Students Guided" },
    { number: "95%", label: "Resume Success Rate" },
    { number: "200+", label: "Career Roadmaps" },
    { number: "24/7", label: "AI Assistance" },
  ];

  return (
    <section className="bg-slate-950 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

        {stats.map((stat, index) => (
          <div key={index}>
            <h2 className="text-5xl font-bold text-cyan-400">
              {stat.number}
            </h2>

            <p className="text-slate-400 mt-3">
              {stat.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Stats;