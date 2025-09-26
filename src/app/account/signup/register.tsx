"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // ✅

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      setSuccessMessage(""); // clear old success
      return;
    } else {
      setEmailError("");
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setSuccessMessage(""); // clear old success
      return;
    }
    setError("");

    console.log("Form submitted:", { email, password });

    // ✅ success text
    setSuccessMessage("Account successfully created!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full">
      <h2 className="text-2xl font-bold text-gray-900">Create Account</h2>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          placeholder="johndoe@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`mt-2 block w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 ${
            emailError
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-indigo-500"
          }`}
        />
        {emailError && (
          <p className="mt-2 text-sm text-red-600">{emailError}</p>
        )}
      </div>

      {/* Password */}
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute top-9 right-3 text-gray-500 hover:text-gray-700"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      {/* Confirm Password */}
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <input
          type={showConfirmPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={`mt-2 block w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 ${
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-indigo-500"
          }`}
        />
        <button
          type="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="absolute top-9 right-3 text-gray-500 hover:text-gray-700"
        >
          {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      </div>

      {/* ✅ Success message before button */}
      {successMessage && (
        <p className="text-sm text-green-600 font-medium">
          {successMessage}
        </p>
      )}

      {/* Submit button */}
      <button
        type="submit"
        className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-700 transition"
      >
        Continue
      </button>
    </form>
  );
};

export default Register;
