import {
  Target,
  Clock,
  Trophy,
  BookOpen,
  Brain,
  Sparkles,
} from "lucide-react";

import Card from "../Card";
import Button from "../Button";

function MissionCard() {
  return (
    <Card className="mt-10">

      <div className="flex justify-between items-center">

        <div>

          <div className="flex items-center gap-3">

            <Target
              size={34}
              className="text-cyan-400"
            />

            <h2 className="text-3xl font-bold">
              Mission: Master Stacks
            </h2>

          </div>

          <p className="text-slate-400 mt-3">
            Learn one of the most important Data Structures
            using stories, examples and AI guidance.
          </p>

        </div>

        <div className="bg-cyan-500 rounded-xl px-5 py-3">

          <h3 className="font-bold text-xl">
            ⭐ +120 XP
          </h3>

        </div>

      </div>

      {/* Mission Info */}

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="bg-slate-900 rounded-2xl p-6 text-center">

          <Clock
            size={40}
            className="mx-auto text-cyan-400"
          />

          <h3 className="text-xl font-bold mt-4">
            15 Minutes
          </h3>

          <p className="text-slate-400 mt-2">
            Estimated Time
          </p>

        </div>

        <div className="bg-slate-900 rounded-2xl p-6 text-center">

          <Brain
            size={40}
            className="mx-auto text-green-400"
          />

          <h3 className="text-xl font-bold mt-4">
            Medium
          </h3>

          <p className="text-slate-400 mt-2">
            Difficulty
          </p>

        </div>

        <div className="bg-slate-900 rounded-2xl p-6 text-center">

          <Trophy
            size={40}
            className="mx-auto text-yellow-400"
          />

          <h3 className="text-xl font-bold mt-4">
            Stack Master
          </h3>

          <p className="text-slate-400 mt-2">
            Badge Reward
          </p>

        </div>

      </div>

      {/* What You'll Learn */}

      <div className="mt-12">

        <div className="flex items-center gap-3 mb-6">

          <BookOpen
            size={28}
            className="text-cyan-400"
          />

          <h2 className="text-2xl font-bold">
            What You'll Learn
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-5">

          {[
            "What is a Stack?",
            "Real-world Examples",
            "Friend Mode Explanation",
            "Story Based Learning",
            "Memory Tricks",
            "Quiz Challenge",
            "Boss Battle",
            "Interview Questions",
          ].map((item) => (

            <div
              key={item}
              className="bg-slate-900 rounded-xl p-5 flex items-center gap-3"
            >

              <Sparkles
                className="text-yellow-400"
                size={20}
              />

              <span>{item}</span>

            </div>

          ))}

        </div>

      </div>

      {/* Start */}

      <div className="mt-12 text-center">

        <Button
          text="🚀 Start Learning Mission"
        />

      </div>

    </Card>
  );
}

export default MissionCard;