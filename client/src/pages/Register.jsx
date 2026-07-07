import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // Check if user already exists
    const existingUser = JSON.parse(localStorage.getItem("careerpilotUser"));

    if (existingUser && existingUser.email === user.email) {
      alert("An account with this email already exists.");
      return;
    }

    // Save user
    localStorage.setItem("careerpilotUser", JSON.stringify(user));

    // Automatically log in
    localStorage.setItem("isLoggedIn", "true");

    alert(`Welcome to CareerPilot AI, ${user.name}!`);

    // Go directly to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-slate-900 rounded-2xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-white mb-2">
          Create Account 🚀
        </h1>

        <p className="text-slate-400 mb-8">
          Join CareerPilot AI and start your career journey.
        </p>

        <form onSubmit={handleRegister} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={user.name}
            onChange={handleChange}
            className="w-full bg-slate-800 text-white p-4 rounded-xl border border-slate-700 outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={user.email}
            onChange={handleChange}
            className="w-full bg-slate-800 text-white p-4 rounded-xl border border-slate-700 outline-none"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            className="w-full bg-slate-800 text-white p-4 rounded-xl border border-slate-700 outline-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-4 rounded-xl font-semibold transition"
          >
            Create Account
          </button>

        </form>

        <p className="text-center text-slate-400 mt-8">
          Already have an account?

          <Link
            to="/login"
            className="text-cyan-400 ml-2 hover:underline"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;