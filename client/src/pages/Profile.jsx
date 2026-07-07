import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Button from "../components/Button";
import {
  User,
  Mail,
  GraduationCap,
  BookOpen,
  Target,
  Globe,
} from "lucide-react";

function Profile() {
  const [editing, setEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    college: "",
    year: "",
    branch: "",
    goal: "",
    github: "",
    linkedin: "",
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("careerpilotUser"));

    if (storedUser) {
      setProfile({
        name: storedUser.name || "",
        email: storedUser.email || "",
        college: storedUser.college || "",
        year: storedUser.year || "",
        branch: storedUser.branch || "",
        goal: storedUser.goal || "",
        github: storedUser.github || "",
        linkedin: storedUser.linkedin || "",
      });
    }
  }, []);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    localStorage.setItem("careerpilotUser", JSON.stringify(profile));
    setEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1 p-10">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-5xl font-bold">My Profile</h1>

            <p className="text-slate-400 mt-2">
              Update your personal information and career preferences.
            </p>
          </div>

          {!editing ? (
            <Button
              text="Edit Profile"
              onClick={() => setEditing(true)}
            />
          ) : (
            <Button
              text="Save Changes"
              onClick={handleSave}
            />
          )}
        </div>

        <Card>

          <div className="grid md:grid-cols-2 gap-8">

            <div>
              <label className="flex items-center gap-2 mb-2">
                <User size={18} />
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                disabled={!editing}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 mb-2">
                <Mail size={18} />
                Email
              </label>

              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                disabled={!editing}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 mb-2">
                <GraduationCap size={18} />
                College
              </label>

              <input
                type="text"
                name="college"
                value={profile.college}
                onChange={handleChange}
                disabled={!editing}
                placeholder="College / University"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 mb-2">
                <BookOpen size={18} />
                Year
              </label>

              <select
                name="year"
                value={profile.year}
                onChange={handleChange}
                disabled={!editing}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4"
              >
                <option value="">Select Year</option>
                <option>1st Year</option>
                <option>2nd Year</option>
                <option>3rd Year</option>
                <option>4th Year</option>
              </select>
            </div>

            <div>
              <label className="flex items-center gap-2 mb-2">
                <BookOpen size={18} />
                Branch
              </label>

              <input
                type="text"
                name="branch"
                value={profile.branch}
                onChange={handleChange}
                disabled={!editing}
                placeholder="Branch"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 mb-2">
                <Target size={18} />
                Career Goal
              </label>

              <input
                type="text"
                name="goal"
                value={profile.goal}
                onChange={handleChange}
                disabled={!editing}
                placeholder="Software Engineer, AI Engineer..."
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 mb-2">
                <Globe size={18} />
                GitHub
              </label>

              <input
                type="text"
                name="github"
                value={profile.github}
                onChange={handleChange}
                disabled={!editing}
                placeholder="https://github.com/username"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 mb-2">
                <Globe size={18} />
                LinkedIn
              </label>

              <input
                type="text"
                name="linkedin"
                value={profile.linkedin}
                onChange={handleChange}
                disabled={!editing}
                placeholder="https://linkedin.com/in/username"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4"
              />
            </div>

          </div>

        </Card>
      </div>
    </div>
  );
}

export default Profile;