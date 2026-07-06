import { Upload, FileText, Sparkles } from "lucide-react";
import Button from "../components/Button";
import Card from "../components/Card";

function ResumeAnalyzer() {
  return (
    <div className="min-h-screen bg-slate-950 text-white py-16 px-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-center">
          AI Resume Analyzer
        </h1>

        <p className="text-slate-400 text-center mt-4">
          Upload your resume and let AI analyze it in seconds.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          {/* Upload Card */}
          <Card>

            <div className="flex items-center gap-3 mb-6">
              <Upload size={30} className="text-cyan-400" />
              <h2 className="text-2xl font-semibold">
                Upload Resume
              </h2>
            </div>

            <div className="border-2 border-dashed border-cyan-500 rounded-xl p-10 text-center">

              <FileText
                size={70}
                className="mx-auto text-cyan-400 mb-4"
              />

              <p className="text-slate-300">
                Drag & Drop your PDF here
              </p>

              <p className="text-slate-500 my-4">
                OR
              </p>

              <Button text="Choose Resume" />

            </div>

          </Card>

          {/* AI Analysis Card */}
          <Card>

            <div className="flex items-center gap-3 mb-6">
              <Sparkles size={30} className="text-cyan-400" />
              <h2 className="text-2xl font-semibold">
                AI Analysis
              </h2>
            </div>

            <div className="space-y-5">

              <div>
                <p className="text-slate-400">
                  Resume Score
                </p>

                <h3 className="text-4xl font-bold text-cyan-400">
                  88%
                </h3>
              </div>

              <div>
                <p className="font-semibold">
                  Missing Skills
                </p>

                <ul className="list-disc ml-6 text-slate-300">
                  <li>Docker</li>
                  <li>System Design</li>
                  <li>AWS</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold">
                  AI Suggestions
                </p>

                <ul className="list-disc ml-6 text-slate-300">
                  <li>Add quantified achievements.</li>
                  <li>Improve project descriptions.</li>
                  <li>Include more ATS keywords.</li>
                </ul>
              </div>

              <Button
                text="Analyze with AI"
                variant="secondary"
              />

            </div>

          </Card>

        </div>

      </div>

    </div>
  );
}

export default ResumeAnalyzer;