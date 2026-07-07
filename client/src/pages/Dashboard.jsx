import MainLayout from "../layouts/MainLayout";
import Card from "../components/Card";
import Button from "../components/Button";
import {
  FileText,
  Brain,
  Map,
  Mic,
} from "lucide-react";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("careerpilotUser"));

  return (
    <MainLayout>

      <h1 className="text-5xl font-bold text-white">
        Welcome{user?.name ? `, ${user.name}` : ""} 👋
      </h1>

      <p className="text-slate-400 mt-3 mb-10">
        Ready to continue your AI-powered career journey?
      </p>

      {/* Quick Stats */}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

        <Card>

          <FileText className="text-cyan-400 mb-4" size={36} />

          <h2 className="text-xl font-semibold text-white">
            Resume
          </h2>

          <p className="text-slate-400 mt-2">
            Not Uploaded
          </p>

        </Card>

        <Card>

          <Brain className="text-cyan-400 mb-4" size={36} />

          <h2 className="text-xl font-semibold text-white">
            Career Guidance
          </h2>

          <p className="text-slate-400 mt-2">
            Not Generated
          </p>

        </Card>

        <Card>

          <Map className="text-cyan-400 mb-4" size={36} />

          <h2 className="text-xl font-semibold text-white">
            Roadmap
          </h2>

          <p className="text-slate-400 mt-2">
            Not Started
          </p>

        </Card>

        <Card>

          <Mic className="text-cyan-400 mb-4" size={36} />

          <h2 className="text-xl font-semibold text-white">
            Interview Prep
          </h2>

          <p className="text-slate-400 mt-2">
            0 Questions Completed
          </p>

        </Card>

      </div>

      {/* Profile Completion */}

      <Card>

        <h2 className="text-2xl font-semibold text-white mb-4">
          Complete Your Profile
        </h2>

        <p className="text-slate-400 mb-6">
          Add your college, branch, year, skills, and career goals to receive
          personalized AI recommendations.
        </p>

        <Button text="Complete Profile" />

      </Card>

    </MainLayout>
  );
}

export default Dashboard;