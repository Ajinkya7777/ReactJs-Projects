import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import { toast } from "react-toastify";
import loginImage from "../assets/login-bg.png";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await login(formData.email, formData.password);
      const token = res.data.token;

      localStorage.setItem("token", token);
      toast.success("✅ Login successful");
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("❌ Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Image Side */}
      <div className="w-1/2 hidden md:block">
        <img
          src={loginImage}
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Login Form Side */}
      <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-900 text-white px-6">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-10 rounded-lg shadow-xl w-full max-w-sm space-y-6"
        >
          <h2 className="text-3xl font-bold mb-2 text-center">Welcome Back</h2>
          <p className="text-sm text-gray-400 text-center mb-4">
            Sign in to continue
          </p>

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded font-bold transition-colors ${
              loading
                ? "bg-pink-300 cursor-not-allowed"
                : "bg-pink-600 hover:bg-pink-700"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
