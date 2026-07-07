import { Link, NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Brain,
  Map,
  Mic,
  User,
  LogOut,
} from "lucide-react";

function Sidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard",
    },
    {
      name: "Resume Analyzer",
      icon: <FileText size={20} />,
      path: "/resume-analyzer",
    },
    {
      name: "Career Guidance",
      icon: <Brain size={20} />,
      path: "/career-guidance",
    },
    {
      name: "Roadmap",
      icon: <Map size={20} />,
      path: "/roadmap",
    },
    {
      name: "Interview Prep",
      icon: <Mic size={20} />,
      path: "/interview-prep",
    },
    {
      name: "Profile",
      icon: <User size={20} />,
      path: "/profile",
    },
  ];

  return (
    <aside className="w-72 min-h-screen bg-slate-900 border-r border-slate-700 flex flex-col">

      {/* Logo */}
      <div className="p-8 border-b border-slate-700">

        <Link
          to="/"
          className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 hover:scale-105 transition inline-block"
        >
          CareerPilot AI 🚀
        </Link>

        <p className="text-slate-400 text-sm mt-2">
          AI Career Assistant
        </p>

      </div>

      {/* Navigation */}
      <nav className="flex-1 p-5 space-y-3">

        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                isActive
                  ? "bg-cyan-500 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-cyan-400"
              }`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}

      </nav>

      {/* Logout */}
      <div className="p-5 border-t border-slate-700">

        <NavLink
          to="/login"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500 hover:text-white transition"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </NavLink>

      </div>

    </aside>
  );
}

export default Sidebar;