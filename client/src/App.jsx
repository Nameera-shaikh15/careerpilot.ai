import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import Dashboard from "./pages/Dashboard";
import Roadmap from "./pages/Roadmap";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import CareerGuidance from "./pages/CareerGuidance";
import InterviewPrep from "./pages/InterviewPrep";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/career-guidance" element={<CareerGuidance />} />
      <Route path="/interview-prep" element={<InterviewPrep />} />
    </Routes>
  );
}

export default App;