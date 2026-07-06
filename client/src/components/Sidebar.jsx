import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Map,
  Brain,
  Briefcase,
  User,
} from "lucide-react";

function Sidebar() {
  const menu = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard",
    },
    {
      title: "Resume Analyzer",
      icon: <FileText size={20} />,
      path: "/resume-analyzer",
    },
    {
      title: "Roadmap",
      icon: <Map size={20} />,
      path: "/roadmap",
    },
    {
      title: "Career Guidance",
      icon: <Brain size={20} />,
      path: "/career-guidance",
    },
    {
      title: "Interview Prep",
      icon: <Briefcase size={20} />,
      path: "/interview-prep",
    },
    {
      title: "Profile",
      icon: <User size={20} />,
      path: "/profile",
    },
  ];

  return (
    <div className="w-72 bg-slate-900 min-h-screen p-6 border-r border-slate-800">

      <h1 className="text-3xl font-bold text-cyan-400 mb-10">
        CareerPilot
      </h1>

      <div className="space-y-4">

        {menu.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex items-center gap-4 p-4 rounded-xl text-slate-300 hover:bg-cyan-500 hover:text-white transition"
          >
            {item.icon}
            {item.title}
          </Link>
        ))}

      </div>

    </div>
  );
}

export default Sidebar;