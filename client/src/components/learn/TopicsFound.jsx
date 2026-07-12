import {
  Brain,
  BookOpen,
  ArrowRight,
} from "lucide-react";

import Card from "../Card";

function TopicsFound() {
  const topics = [
    "Arrays",
    "Linked Lists",
    "Stacks",
    "Queues",
    "Trees",
    "Graphs",
    "Hash Tables",
    "Recursion",
  ];

  return (
    <Card className="mt-10">

      <div className="flex items-center gap-3 mb-8">

        <Brain
          size={34}
          className="text-cyan-400"
        />

        <h2 className="text-3xl font-bold">
          AI Found These Topics
        </h2>

      </div>

      <p className="text-slate-400 mb-8">

        CareerPilot AI analyzed your study material and found
        these important concepts. Choose one to begin your
        learning mission.

      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {topics.map((topic) => (

          <div
            key={topic}
            className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-cyan-400 hover:scale-105 transition cursor-pointer"
          >

            <BookOpen
              size={40}
              className="text-cyan-400 mb-5"
            />

            <h3 className="text-xl font-bold">

              {topic}

            </h3>

            <p className="text-slate-400 mt-3">

              Start AI Learning Mission

            </p>

            <div className="mt-6 flex items-center text-cyan-400 font-semibold">

              Start Mission

              <ArrowRight
                size={18}
                className="ml-2"
              />

            </div>

          </div>

        ))}

      </div>

    </Card>
  );
}

export default TopicsFound;