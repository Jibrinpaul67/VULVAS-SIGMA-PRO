"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 bg-white shadow-2xl rounded-2xl p-8 border border-gray-200 mx-auto">
      {/* Title + create account link */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-black">Sign In</h2>
        <p className="mt-2 text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="/account/signup" className="text-blue-600 hover:underline font-medium">
            Create account
          </a>
        </p>
      </div>

      <form className="space-y-4">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="johndoe@example.com"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <div className="mt-2 text-right">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-[#0052B4] text-white py-3 rounded-lg font-bold hover:bg-[#00002A] transition-colors"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Signin;
