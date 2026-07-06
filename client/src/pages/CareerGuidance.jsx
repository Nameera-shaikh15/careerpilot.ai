import { Brain, Briefcase, Award, Sparkles } from "lucide-react";
import Button from "../components/Button";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";

function CareerGuidance() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <div className="flex-1 p-10">

        <h1 className="text-5xl font-bold">
          AI Career Guidance
        </h1>

        <p className="text-slate-400 mt-3">
          Tell our AI about yourself, your interests, skills, and goals.
          We'll recommend the most suitable career path with a personalized roadmap.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          {/* User Input */}
          <Card>

            <h2 className="text-2xl font-semibold mb-6">
              Tell Us About Yourself
            </h2>

            <label className="block mb-2 text-slate-300">
              Career Goal
            </label>

            <textarea
              rows="6"
              placeholder="Example:
• I love AI and Machine Learning.
• I enjoy solving coding problems.
• I want a high-paying software job.
• I don't know which career suits me."
              className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 mb-6 resize-none"
            />

            <label className="block mb-2 text-slate-300">
              Current Skills
            </label>

            <textarea
              rows="5"
              placeholder="Example:
Python
C Programming
HTML
CSS
Problem Solving"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 mb-6 resize-none"
            />

            <label className="block mb-2 text-slate-300">
              Education / Experience
            </label>

            <textarea
              rows="3"
              placeholder="Example:
2nd Year B.Tech CSE (AI & ML)
Completed basic Python
Built small frontend projects"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 mb-8 resize-none"
            />

            <Button text="Generate AI Career Plan" />

          </Card>

          {/* AI Result */}
          <Card>

            <div className="flex items-center gap-3 mb-6">
              <Brain size={34} className="text-cyan-400" />
              <h2 className="text-2xl font-semibold">
                AI Recommendation
              </h2>
            </div>

            <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">

              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="text-cyan-400" />
                <h3 className="text-xl font-semibold">
                  Waiting for AI Analysis
                </h3>
              </div>

              <p className="text-slate-400 leading-7">
                After you click
                <span className="text-cyan-400 font-semibold">
                  {" "}Generate AI Career Plan{" "}
                </span>
                our AI will analyze your goals, interests, skills,
                and education to recommend the best career path.
              </p>

            </div>

            <div className="mt-8 space-y-6">

              <div className="flex gap-3">

                <Briefcase className="text-green-400 mt-1" />

                <div>

                  <h3 className="font-semibold">
                    Career Recommendation
                  </h3>

                  <p className="text-slate-400">
                    AI will recommend the best career based on your profile.
                  </p>

                </div>

              </div>

              <div className="flex gap-3">

                <Brain className="text-cyan-400 mt-1" />

                <div>

                  <h3 className="font-semibold">
                    Personalized Roadmap
                  </h3>

                  <p className="text-slate-400">
                    A month-by-month learning roadmap will be generated.
                  </p>

                </div>

              </div>

              <div className="flex gap-3">

                <Award className="text-yellow-400 mt-1" />

                <div>

                  <h3 className="font-semibold">
                    Certifications & Projects
                  </h3>

                  <p className="text-slate-400">
                    AI will recommend certifications, projects,
                    salary expectations, and interview preparation.
                  </p>

                </div>

              </div>

            </div>

          </Card>

        </div>

      </div>

    </div>
  );
}

export default CareerGuidance;