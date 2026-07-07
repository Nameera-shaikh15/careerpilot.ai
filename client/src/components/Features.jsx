import { Link } from "react-router-dom";
import { Brain, FileText, Target, Briefcase } from "lucide-react";

function Features() {
  const features = [
    {
      icon: <Brain size={40} />,
      title: "AI Career Guidance",
      description:
        "Get personalized career recommendations powered by AI.",
      link: "/career-guidance",
    },
    {
      icon: <FileText size={40} />,
      title: "Resume Analyzer",
      description:
        "Analyze your resume and receive professional suggestions.",
      link: "/resume-analyzer",
    },
    {
      icon: <Target size={40} />,
      title: "Skill Roadmaps",
      description:
        "Follow a step-by-step roadmap to your dream career.",
      link: "/roadmap",
    },
    {
      icon: <Briefcase size={40} />,
      title: "Interview Prep",
      description:
        "Practice topic-wise, role-based, and company-specific interviews.",
      link: "/interview-prep",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 bg-slate-900"
    >
      <h2 className="text-5xl font-bold text-center text-white">
        Everything You Need
      </h2>

      <p className="text-center text-slate-400 mt-4 max-w-2xl mx-auto">
        Explore our AI-powered tools designed to help you prepare for your dream career.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-16 px-8">

        {features.map((item, index) => (

          <Link key={index} to={item.link}>

            <div className="bg-slate-800 rounded-2xl p-8 h-full hover:scale-105 hover:bg-slate-700 transition duration-300 cursor-pointer shadow-lg">

              <div className="text-cyan-400 mb-5">
                {item.icon}
              </div>

              <h3 className="text-white text-xl font-bold">
                {item.title}
              </h3>

              <p className="text-slate-400 mt-3">
                {item.description}
              </p>

            </div>

          </Link>

        ))}

      </div>
    </section>
  );
}

export default Features;