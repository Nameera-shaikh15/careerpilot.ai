import {
  Target,
  Calendar,
  BookOpen,
  CheckCircle,
  Clock,
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

function Roadmap() {
  const roadmap = [
    {
      month: "Month 1",
      status: "Completed",
      icon: <CheckCircle className="text-green-400" />,
      topics: [
        "Python Programming",
        "Git & GitHub",
        "VS Code",
        "Mini Project",
      ],
    },
    {
      month: "Month 2",
      status: "In Progress",
      icon: <Clock className="text-yellow-400" />,
      topics: [
        "Data Structures",
        "Algorithms",
        "SQL Basics",
        "Problem Solving",
      ],
    },
    {
      month: "Month 3",
      status: "Upcoming",
      icon: <Clock className="text-cyan-400" />,
      topics: [
        "Machine Learning",
        "NumPy",
        "Pandas",
        "Scikit-Learn",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <div className="flex-1 p-10">

        <h1 className="text-5xl font-bold">
          AI Career Roadmap
        </h1>

        <p className="text-slate-400 mt-3">
          Follow your personalized learning journey step by step.
        </p>

        {/* Overview */}

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <Card>

            <Target className="text-cyan-400 mb-4" size={35} />

            <h2 className="text-xl font-semibold">
              Career Goal
            </h2>

            <p className="text-slate-400 mt-2">
              AI Engineer
            </p>

          </Card>

          <Card>

            <Calendar className="text-green-400 mb-4" size={35} />

            <h2 className="text-xl font-semibold">
              Duration
            </h2>

            <p className="text-slate-400 mt-2">
              6 Months
            </p>

          </Card>

          <Card>

            <BookOpen className="text-yellow-400 mb-4" size={35} />

            <h2 className="text-xl font-semibold">
              Progress
            </h2>

            <div className="w-full bg-slate-800 rounded-full h-3 mt-4">

              <div className="bg-cyan-400 h-3 rounded-full w-2/5"></div>

            </div>

            <p className="mt-3 text-cyan-400">
              40% Completed
            </p>

          </Card>

        </div>

        {/* Timeline */}

        <div className="mt-12 space-y-8">

          {roadmap.map((item, index) => (

            <Card key={index}>

              <div className="flex justify-between items-center">

                <div className="flex items-center gap-3">

                  {item.icon}

                  <h2 className="text-2xl font-bold">
                    {item.month}
                  </h2>

                </div>

                <span className="text-slate-400">
                  {item.status}
                </span>

              </div>

              <ul className="mt-6 space-y-3 text-slate-300">

                {item.topics.map((topic, i) => (
                  <li key={i}>• {topic}</li>
                ))}

              </ul>

            </Card>

          ))}

        </div>

        {/* Resources */}

        <Card>

          <h2 className="text-2xl font-bold mb-6">
            Recommended Resources
          </h2>

          <ul className="space-y-3 text-slate-300">

            <li>📘 freeCodeCamp</li>

            <li>🎥 Coursera</li>

            <li>📖 Kaggle Learn</li>

            <li>💻 LeetCode</li>

          </ul>

        </Card>

      </div>

    </div>
  );
}

export default Roadmap;