import {
  User,
  FileText,
  Target,
  Briefcase,
  TrendingUp,
} from "lucide-react";

import Sidebar from "../components/Sidebar";

function Dashboard() {
  const cards = [
    {
      title: "Resume Score",
      value: "88%",
      icon: <FileText size={32} />,
      color: "text-cyan-400",
    },
    {
      title: "Career Match",
      value: "AI Engineer",
      icon: <Target size={32} />,
      color: "text-green-400",
    },
    {
      title: "Roadmap Progress",
      value: "72%",
      icon: <TrendingUp size={32} />,
      color: "text-yellow-400",
    },
    {
      title: "Mock Interview",
      value: "81%",
      icon: <Briefcase size={32} />,
      color: "text-pink-400",
    },
  ];

  return (
    <div className="flex bg-slate-950 text-white min-h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">

        {/* Header */}
        <div className="border-b border-slate-800 px-8 py-6 flex justify-between items-center">

          <div>
            <h1 className="text-3xl font-bold">
              Dashboard
            </h1>

            <p className="text-slate-400 mt-2">
              Welcome back, Nameera 👋
            </p>
          </div>

          <div className="bg-slate-800 p-3 rounded-full">
            <User size={28} />
          </div>

        </div>

        {/* Dashboard Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 p-8">

          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl p-6 hover:scale-105 transition duration-300 shadow-lg"
            >

              <div className={`${card.color} mb-5`}>
                {card.icon}
              </div>

              <h2 className="text-slate-400">
                {card.title}
              </h2>

              <p className="text-3xl font-bold mt-2">
                {card.value}
              </p>

            </div>
          ))}

        </div>

        {/* Recent Activity */}
        <div className="px-8 pb-8">

          <div className="bg-slate-900 rounded-2xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Recent Activity
            </h2>

            <div className="space-y-5">

              <div className="flex justify-between border-b border-slate-800 pb-3">
                <span>Resume uploaded</span>
                <span className="text-green-400">
                  Completed
                </span>
              </div>

              <div className="flex justify-between border-b border-slate-800 pb-3">
                <span>Career roadmap generated</span>
                <span className="text-cyan-400">
                  Ready
                </span>
              </div>

              <div className="flex justify-between border-b border-slate-800 pb-3">
                <span>Mock interview</span>
                <span className="text-yellow-400">
                  Pending
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;