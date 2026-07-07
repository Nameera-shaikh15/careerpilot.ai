import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-slate-900 border-b border-slate-700">

      <Link
        to="/"
        className="text-2xl font-bold text-cyan-400"
      >
        CareerPilot AI 🚀
      </Link>

      <div className="flex items-center gap-6 text-white">

        <a
          href="#home"
          className="hover:text-cyan-400 transition"
        >
          Home
        </a>

        <a
          href="#features"
          className="hover:text-cyan-400 transition"
        >
          Features
        </a>

        <a
          href="#about"
          className="hover:text-cyan-400 transition"
        >
          About
        </a>

        <Link
          to="/login"
          className="hover:text-cyan-400 transition"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="bg-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-600 transition"
        >
          Get Started
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;