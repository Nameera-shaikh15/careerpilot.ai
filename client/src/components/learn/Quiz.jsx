import { useState } from "react";
import {
  Brain,
  Timer,
  Heart,
  Trophy,
  CheckCircle,
  XCircle,
} from "lucide-react";

import Card from "../Card";
import Button from "../Button";

function Quiz() {
  const questions = [
    {
      question: "Which principle does Stack follow?",
      options: [
        "FIFO",
        "LIFO",
        "Random Access",
        "Priority First",
      ],
      answer: "LIFO",
    },
  ];

  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const current = questions[0];

  return (
    <Card className="mt-10">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div className="flex items-center gap-3">

          <Brain
            size={34}
            className="text-cyan-400"
          />

          <h2 className="text-3xl font-bold">
            Quiz Challenge
          </h2>

        </div>

        <div className="flex gap-6">

          <div className="flex items-center gap-2 text-yellow-400">

            <Timer size={20} />

            <span>05:00</span>

          </div>

          <div className="flex items-center gap-2 text-red-400">

            <Heart size={20} />

            <span>3 Lives</span>

          </div>

        </div>

      </div>

      {/* Question */}

      <div className="mt-10">

        <h3 className="text-2xl font-semibold">

          {current.question}

        </h3>

      </div>

      {/* Options */}

      <div className="grid gap-5 mt-8">

        {current.options.map((option) => (

          <button
            key={option}
            onClick={() => setSelected(option)}
            className={`text-left p-5 rounded-xl border transition ${
              selected === option
                ? "border-cyan-400 bg-cyan-500/10"
                : "border-slate-700 bg-slate-900 hover:border-cyan-400"
            }`}
          >

            {option}

          </button>

        ))}

      </div>

      {/* Submit */}

      {!submitted ? (

        <div className="mt-10">

          <Button
            text="Submit Answer"
            onClick={() => setSubmitted(true)}
          />

        </div>

      ) : (

        <div className="mt-10">

          {selected === current.answer ? (

            <div className="bg-green-500/10 border border-green-500 rounded-2xl p-6">

              <div className="flex items-center gap-3">

                <CheckCircle className="text-green-400" />

                <h3 className="text-2xl font-bold text-green-400">

                  Correct!

                </h3>

              </div>

              <p className="mt-4">

                Awesome! 🎉

                You earned

                <span className="text-yellow-400 font-bold">
                  {" "}+20 XP
                </span>

              </p>

            </div>

          ) : (

            <div className="bg-red-500/10 border border-red-500 rounded-2xl p-6">

              <div className="flex items-center gap-3">

                <XCircle className="text-red-400" />

                <h3 className="text-2xl font-bold text-red-400">

                  Wrong Answer

                </h3>

              </div>

              <p className="mt-4">

                Correct Answer:

                <span className="text-cyan-400 font-bold">
                  {" "}{current.answer}
                </span>

              </p>

            </div>

          )}

        </div>

      )}

      {/* Reward */}

      <div className="mt-10 bg-slate-900 rounded-2xl p-6">

        <div className="flex items-center gap-3">

          <Trophy
            className="text-yellow-400"
            size={30}
          />

          <h3 className="text-xl font-bold">

            Quiz Reward

          </h3>

        </div>

        <p className="mt-4 text-slate-400">

          Finish quizzes to earn XP, badges and unlock Boss Battles.

        </p>

      </div>

    </Card>
  );
}

export default Quiz;