function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-slate-900 border-b border-slate-700">
      <h1 className="text-2xl font-bold text-cyan-400">
        CareerPilot AI 🚀
      </h1>

      <div className="flex items-center gap-6 text-white">
        <button className="hover:text-cyan-400">Home</button>
        <button className="hover:text-cyan-400">Features</button>
        <button className="hover:text-cyan-400">About</button>

        <button className="bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600 transition">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;