import {
  Brain,
  FileSearch,
  BookOpen,
  Sparkles,
  CheckCircle,
} from "lucide-react";

import Card from "../Card";

function AIThinking() {
  const steps = [
    {
      icon: <FileSearch size={24} />,
      text: "Reading your study material...",
    },
    {
      icon: <BookOpen size={24} />,
      text: "Understanding concepts...",
    },
    {
      icon: <Brain size={24} />,
      text: "Finding important topics...",
    },
    {
      icon: <Sparkles size={24} />,
      text: "Generating learning missions...",
    },
    {
      icon: <CheckCircle size={24} />,
      text: "Preparing quizzes & mnemonics...",
    },
  ];

  return (
    <Card className="mt-10">

      <div className="text-center">

        <Brain
          size={70}
          className="mx-auto text-cyan-400 animate-pulse"
        />

        <h2 className="text-3xl font-bold mt-6">
          CareerPilot AI is Analyzing...
        </h2>

        <p className="text-slate-400 mt-3">
          Please wait while AI understands your study material.
        </p>

      </div>

      {/* Progress Bar */}

      <div className="mt-10">

        <div className="w-full bg-slate-700 rounded-full h-4 overflow-hidden">

          <div className="bg-cyan-500 h-4 rounded-full w-3/4 animate-pulse"></div>

        </div>

      </div>

      {/* Steps */}

      <div className="mt-10 space-y-5">

        {steps.map((step, index) => (

          <div
            key={index}
            className="flex items-center gap-4 bg-slate-900 rounded-xl p-5"
          >

            <div className="text-cyan-400">

              {step.icon}

            </div>

            <p className="text-lg">

              {step.text}

            </p>

          </div>

        ))}

      </div>

    </Card>
  );
}

export default AIThinking;