import {
  Upload,
  Brain,
  Trophy,
  BookOpen,
  Sparkles,
  Flame,
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Button from "../components/Button";
import { useState } from "react";

function Learn() {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

const handleFileChange = (event) => {
  const file = event.target.files[0];

  if (file) {
    setSelectedFile(file);
  }
};
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <div className="flex-1 p-10">

        {/* HERO */}

        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-5xl font-bold">
              📚 Learn with AI
            </h1>

            <p className="text-slate-400 mt-3 text-lg max-w-3xl">
              Upload your notes and let CareerPilot AI become your
              personal study companion. Learn through stories,
              real-world examples, quizzes, memory tricks and
              interactive missions.
            </p>

          </div>

          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl px-8 py-6 shadow-xl">

            <h2 className="text-2xl font-bold">
              Level 1
            </h2>

            <p className="mt-2">
              ⭐ XP
            </p>

            <div className="w-52 bg-slate-800 rounded-full h-3 mt-3">

              <div className="bg-yellow-400 h-3 rounded-full w-1/3"></div>

            </div>

            <p className="text-sm mt-2">
              320 / 1000 XP
            </p>

          </div>

        </div>

        {/* DAILY MISSION */}

        <div className="mt-10">

          <Card>

            <div className="flex items-center justify-between">

              <div>

                <div className="flex items-center gap-3">

                  <Flame className="text-orange-400" />

                  <h2 className="text-2xl font-bold">
                    Today's Mission
                  </h2>

                </div>

                <p className="text-slate-400 mt-4">

                  Master one topic today and continue your
                  learning streak.

                </p>

              </div>

              <div className="text-right">

                <p className="text-yellow-400 font-bold text-xl">
                  +100 XP
                </p>

                <p className="text-slate-400">
                  Reward
                </p>

              </div>

            </div>

          </Card>

        </div>

        {/* UPLOAD */}

        <div className="mt-10">

          <Card>

            <div className="flex items-center gap-3 mb-8">

              <Upload
                size={34}
                className="text-cyan-400"
              />

              <h2 className="text-3xl font-bold">

                Upload Study Material

              </h2>

            </div>

            <div className="border-2 border-dashed border-slate-700 rounded-3xl p-14 text-center hover:border-cyan-400 transition">

              <Upload
                size={70}
                className="mx-auto text-cyan-400"
              />

              <h3 className="text-3xl font-bold mt-6">

                Drag & Drop Files

              </h3>

              <p className="text-slate-400 mt-4 text-lg">

                PDFs, PPTs, DOCX, Images,
                Handwritten Notes and much more.

              </p>

              <div className="mt-8">

                <Button
                  text="Choose Files"
                />

              </div>

            </div>

          </Card>

        </div>

        {/* FILE TYPES */}

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-5 mt-10">

          {[
            "📄 PDF",
            "📚 PPT",
            "📝 DOCX",
            "🖼 Images",
            "✍ Notes",
            "🎤 Voice",
          ].map((item) => (

            <Card key={item}>

              <div className="text-center">

                <h3 className="text-xl font-semibold">

                  {item}

                </h3>

              </div>

            </Card>

          ))}

        </div>
            {/* AI SUPERPOWERS */}

        <div className="mt-14">

          <div className="flex items-center gap-3 mb-8">

            <Brain
              className="text-cyan-400"
              size={34}
            />

            <h2 className="text-3xl font-bold">
              What CareerPilot AI Can Do
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                icon: "😊",
                title: "Friend Mode",
                desc: "Learn exactly like your best friend or senior explains difficult concepts.",
              },
              {
                icon: "📖",
                title: "Story Mode",
                desc: "Every difficult concept becomes an interesting story.",
              },
              {
                icon: "🌍",
                title: "Any Language",
                desc: "Explain concepts in English, Hindi or your preferred language.",
              },
              {
                icon: "🧠",
                title: "Memory Tricks",
                desc: "AI creates mnemonics and smart tricks to remember concepts forever.",
              },
              {
                icon: "💼",
                title: "Interview Questions",
                desc: "Practice interview questions after finishing every topic.",
              },
              {
                icon: "📝",
                title: "Revision Notes",
                desc: "Generate one-page revision notes instantly.",
              },
              {
                icon: "❓",
                title: "Quiz Generator",
                desc: "Generate unlimited quizzes based on your uploaded notes.",
              },
              {
                icon: "⚔",
                title: "Boss Battles",
                desc: "Challenge yourself with timed AI-generated quizzes.",
              },
            ].map((item) => (

              <Card key={item.title}>

                <div className="text-center">

                  <div className="text-5xl mb-5">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 mt-4 leading-7">
                    {item.desc}
                  </p>

                </div>

              </Card>

            ))}

          </div>

        </div>

        {/* LEARNING JOURNEY */}

        <div className="mt-16">

          <div className="flex items-center gap-3 mb-8">

            <Sparkles
              className="text-yellow-400"
              size={34}
            />

            <h2 className="text-3xl font-bold">

              Your Learning Journey

            </h2>

          </div>

          <Card>

            <div className="space-y-8">

              {[
                "📤 Upload your study material",
                "🤖 CareerPilot AI understands your notes",
                "📚 AI finds important topics",
                "🎯 Choose a learning mission",
                "😊 Learn like a friend",
                "🧠 Get real-world examples",
                "❓ Take AI Quiz",
                "⚔ Beat the Boss Battle",
                "🏆 Earn XP & Badges",
                "💼 Unlock Interview Questions",
              ].map((step, index) => (

                <div
                  key={index}
                  className="flex items-center gap-5"
                >

                  <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center font-bold">

                    {index + 1}

                  </div>

                  <h3 className="text-lg">
                    {step}
                  </h3>

                </div>

              ))}

            </div>

          </Card>

        </div>

        {/* LEARNING MODES */}

        <div className="mt-16">

          <div className="flex items-center gap-3 mb-8">

            <BookOpen
              className="text-cyan-400"
              size={34}
            />

            <h2 className="text-3xl font-bold">

              Choose Your Learning Style

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              "😊 Friend Mode",
              "👨‍🏫 Professor Mode",
              "📖 Story Mode",
              "🎮 Game Mode",
              "🧠 Mnemonics",
              "🎤 Voice Learning",
              "🌍 Multi Language",
              "⚡ Quick Revision",
            ].map((mode) => (

              <Card key={mode}>

                <div className="text-center">

                  <h3 className="text-xl font-bold">

                    {mode}

                  </h3>

                </div>

              </Card>

            ))}

          </div>

        </div>
                {/* REWARDS */}

        <div className="mt-16">

          <div className="flex items-center gap-3 mb-8">

            <Trophy
              className="text-yellow-400"
              size={34}
            />

            <h2 className="text-3xl font-bold">
              Rewards & Achievements
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <Card>

              <div className="text-center">

                <h1 className="text-5xl">⭐</h1>

                <h3 className="text-2xl font-bold mt-5">
                  Earn XP
                </h3>

                <p className="text-slate-400 mt-3">
                  Complete learning missions to earn experience points.
                </p>

              </div>

            </Card>

            <Card>

              <div className="text-center">

                <h1 className="text-5xl">🏆</h1>

                <h3 className="text-2xl font-bold mt-5">
                  Unlock Badges
                </h3>

                <p className="text-slate-400 mt-3">
                  Become a master by collecting achievement badges.
                </p>

              </div>

            </Card>

            <Card>

              <div className="text-center">

                <h1 className="text-5xl">🔥</h1>

                <h3 className="text-2xl font-bold mt-5">
                  Daily Streak
                </h3>

                <p className="text-slate-400 mt-3">
                  Learn every day to maintain your learning streak.
                </p>

              </div>

            </Card>

          </div>

        </div>

        {/* LEARNING STATS */}

        <div className="mt-16">

          <h2 className="text-3xl font-bold mb-8">
            Your Learning Statistics
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <Card>

              <div className="text-center">

                <h2 className="text-4xl font-bold text-cyan-400">
                  0
                </h2>

                <p className="mt-3 text-slate-400">
                  Topics Completed
                </p>

              </div>

            </Card>

            <Card>

              <div className="text-center">

                <h2 className="text-4xl font-bold text-green-400">
                  0
                </h2>

                <p className="mt-3 text-slate-400">
                  Quizzes Solved
                </p>

              </div>

            </Card>

            <Card>

              <div className="text-center">

                <h2 className="text-4xl font-bold text-yellow-400">
                  0
                </h2>

                <p className="mt-3 text-slate-400">
                  XP Earned
                </p>

              </div>

            </Card>

            <Card>

              <div className="text-center">

                <h2 className="text-4xl font-bold text-red-400">
                  0
                </h2>

                <p className="mt-3 text-slate-400">
                  Boss Battles Won
                </p>

              </div>

            </Card>

          </div>

        </div>

        {/* RECENT LEARNING */}

        <div className="mt-16">

          <Card>

            <h2 className="text-3xl font-bold mb-6">
              Continue Learning
            </h2>

            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700">

              <h3 className="text-2xl font-semibold">
                No Recent Learning
              </h3>

              <p className="text-slate-400 mt-4 leading-7">
                Upload your first study material to start your AI learning
                journey. CareerPilot AI will automatically detect topics,
                generate quizzes, explain concepts like a friend, and create
                your personalized learning missions.
              </p>

              <div className="mt-8">

                <Button text="Start Learning" />

              </div>

            </div>

          </Card>

        </div>

        {/* COMING SOON */}

        <div className="mt-16">

          <Card>

            <h2 className="text-3xl font-bold mb-8">
              🚀 Coming Soon
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {[
                "🤖 AI Tutor",
                "🎤 Voice Conversation",
                "🧠 Mind Maps",
                "📑 Flashcards",
                "📚 Previous Year Questions",
                "📖 AI Whiteboard",
                "📝 AI Notes Generator",
                "💼 Company Interview Questions",
                "📊 Smart Progress Tracking",
              ].map((feature) => (

                <div
                  key={feature}
                  className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-cyan-400 transition"
                >

                  <h3 className="font-semibold text-lg">
                    {feature}
                  </h3>

                </div>

              ))}

            </div>

          </Card>

        </div>

      </div>

    </div>
  );
}

export default Learn;