import { useState } from "react";
import {
  Brain,
  Mic,
  Timer,
  CheckCircle,
  Star,
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Button from "../components/Button";

function InterviewPrep() {
  const [role, setRole] = useState("");
  const [difficulty, setDifficulty] = useState("");

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <div className="flex-1 p-10">

        <h1 className="text-5xl font-bold">
          AI Interview Preparation
        </h1>

        <p className="text-slate-400 mt-3">
          Practice interviews with AI, receive instant feedback,
          and improve your confidence.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          {/* Left */}

          <Card>

            <h2 className="text-2xl font-semibold mb-6">
              Interview Setup
            </h2>

            <label className="block mb-2">
              Desired Job Role
            </label>

            <input
              type="text"
              placeholder="Example: AI Engineer"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 mb-6"
            />

            <label className="block mb-2">
              Difficulty Level
            </label>

            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 mb-6"
            >
              <option value="">Select Difficulty</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>

            <label className="block mb-2">
              Number of Questions
            </label>

            <input
              type="number"
              placeholder="10"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 mb-8"
            />

            <Button text="Start AI Interview" />

          </Card>

          {/* Right */}

          <Card>

            <div className="flex items-center gap-3 mb-6">
              <Brain className="text-cyan-400" />
              <h2 className="text-2xl font-semibold">
                AI Interview Preview
              </h2>
            </div>

            <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">

              <div className="flex items-center gap-2 mb-5">
                <Timer className="text-yellow-400" />
                <span>Question 1 of 10</span>
              </div>

              <h3 className="text-xl font-semibold">
                Explain the difference between Machine Learning and Deep Learning.
              </h3>

              <textarea
                rows="6"
                placeholder="Type your answer here..."
                className="w-full bg-slate-800 rounded-xl border border-slate-700 mt-6 p-4"
              />

              <div className="mt-6">
                <Button text="Submit Answer" />
              </div>

            </div>

          </Card>

        </div>

        {/* Feedback */}

        <div className="mt-10">

          <Card>

            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="text-green-400" />
              <h2 className="text-2xl font-semibold">
                AI Feedback
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-slate-900 rounded-xl p-6">

                <Mic className="text-cyan-400 mb-3" />

                <h3 className="font-bold">
                  Communication
                </h3>

                <p className="text-slate-400 mt-2">
                  8 / 10
                </p>

              </div>

              <div className="bg-slate-900 rounded-xl p-6">

                <Brain className="text-green-400 mb-3" />

                <h3 className="font-bold">
                  Technical Knowledge
                </h3>

                <p className="text-slate-400 mt-2">
                  9 / 10
                </p>

              </div>

              <div className="bg-slate-900 rounded-xl p-6">

                <Star className="text-yellow-400 mb-3" />

                <h3 className="font-bold">
                  Confidence
                </h3>

                <p className="text-slate-400 mt-2">
                  8.5 / 10
                </p>

              </div>

            </div>

            <div className="mt-8">

              <h3 className="text-xl font-bold mb-4">
                AI Suggestions
              </h3>

              <ul className="space-y-3 text-slate-300">

                <li>✔ Speak with more confidence.</li>

                <li>✔ Use real-world examples while answering.</li>

                <li>✔ Explain concepts step-by-step.</li>

                <li>✔ Improve technical terminology.</li>

              </ul>

            </div>

          </Card>

        </div>

      </div>

    </div>
  );
}

export default InterviewPrep;