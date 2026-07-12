import Sidebar from "../components/Sidebar";

function Progress() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1 p-10">
        <h1 className="text-5xl font-bold">📊 Progress</h1>

        <p className="text-slate-400 mt-4">
          Progress tracking will be available soon.
        </p>
      </div>
    </div>
  );
}

export default Progress;