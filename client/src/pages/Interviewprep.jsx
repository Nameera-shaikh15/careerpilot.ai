import { useState, useRef } from "react";
import { Mic, Square, Briefcase, BookOpen } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Button from "../components/Button";

function InterviewPrep() {
  const [jobRole, setJobRole] = useState("");
  const [company, setCompany] = useState("");
  const [topic, setTopic] = useState("");
  const [answer, setAnswer] = useState("");
  const [listening, setListening] = useState(false);

  const recognitionRef = useRef(null);

  const startRecording = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in your browser.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.interimResults = true;
    recognition.continuous = true;

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onresult = (event) => {
      let transcript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }

      setAnswer(transcript);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.start();

    recognitionRef.current = recognition;
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <div className="flex-1 p-10">

        <h1 className="text-5xl font-bold mb-3">
          AI Interview Preparation
        </h1>

        <p className="text-slate-400 mb-10">
          Select a job role, company, or topic. Practice answering
          interview questions using voice or text.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Left */}

          <Card>

            <h2 className="text-2xl font-semibold mb-6">
              Interview Setup
            </h2>

            <label className="block mb-2">
              Job Role
            </label>

            <input
              type="text"
              placeholder="Frontend Developer"
              value={jobRole}
              onChange={(e) => setJobRole(e.target.value)}
              className="w-full bg-slate-900 p-4 rounded-xl mb-5"
            />

            <label className="block mb-2">
              Company
            </label>

            <input
              type="text"
              placeholder="Google / Amazon / Microsoft"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full bg-slate-900 p-4 rounded-xl mb-5"
            />

            <label className="block mb-2">
              Topic
            </label>

            <input
              type="text"
              placeholder="Stacks"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full bg-slate-900 p-4 rounded-xl mb-8"
            />

            <Button text="Generate Interview Questions" />

          </Card>

          {/* Right */}

          <Card>

            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="text-cyan-400" />
              <h2 className="text-2xl font-semibold">
                Sample Question
              </h2>
            </div>

            <div className="bg-slate-900 rounded-xl p-6 mb-6">

              <p className="text-lg">
                Explain the difference between a Stack and a Queue.
              </p>

            </div>

            <textarea
              rows="8"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your answer or use Voice Recording..."
              className="w-full bg-slate-900 rounded-xl p-5 resize-none mb-6"
            />

            <div className="flex gap-4">

              {!listening ? (
                <button
                  onClick={startRecording}
                  className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl"
                >
                  <Mic size={20} />
                  Start Recording
                </button>
              ) : (
                <button
                  onClick={stopRecording}
                  className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl"
                >
                  <Square size={20} />
                  Stop Recording
                </button>
              )}

              <Button text="Submit Answer" />

            </div>

          </Card>

        </div>

      </div>

    </div>
  );
}

export default InterviewPrep;