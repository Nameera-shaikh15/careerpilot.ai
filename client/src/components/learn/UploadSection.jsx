import { useState } from "react";
import { Upload, FileText } from "lucide-react";
import Card from "../Card";
import Button from "../Button";

function UploadSection() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <Card>

      <div className="flex items-center gap-3 mb-8">

        <Upload
          className="text-cyan-400"
          size={34}
        />

        <h2 className="text-3xl font-bold">
          Upload Study Material
        </h2>

      </div>

      <div className="border-2 border-dashed border-slate-700 rounded-3xl p-12 text-center hover:border-cyan-400 transition">

        <Upload
          size={70}
          className="mx-auto text-cyan-400"
        />

        <h3 className="text-3xl font-bold mt-6">
          Drag & Drop Files
        </h3>

        <p className="text-slate-400 mt-4">
          Upload PDFs, PPTs, DOCX, Images or Handwritten Notes
        </p>

        <input
          id="studyFile"
          type="file"
          className="hidden"
          accept=".pdf,.ppt,.pptx,.doc,.docx,image/*"
          onChange={handleFileChange}
        />

        <label htmlFor="studyFile">

          <div className="mt-8 inline-block">

            <Button text="Choose Files" />

          </div>

        </label>

      </div>

      {selectedFile && (

        <div className="mt-8 bg-slate-900 rounded-2xl border border-green-500 p-6">

          <div className="flex items-center gap-4">

            <FileText
              className="text-green-400"
              size={40}
            />

            <div>

              <h3 className="text-xl font-bold">

                {selectedFile.name}

              </h3>

              <p className="text-slate-400">

                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB

              </p>

            </div>

          </div>

          <div className="mt-8">

            <Button text="Analyze with AI" />

          </div>

        </div>

      )}

    </Card>
  );
}

export default UploadSection;