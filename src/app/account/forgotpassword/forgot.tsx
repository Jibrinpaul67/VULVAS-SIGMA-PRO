"use client";
import Link from "next/link";

const Forgot = () => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 bg-white shadow-2xl rounded-2xl p-8 border border-gray-200 mx-auto">
      {/* Title + create account link */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-black">Forgot Password</h2>
        <p className="mt-2 text-sm text-gray-600">
          A verification code would be sent to your email
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
 <div>
          <label className="block text-sm font-medium text-gray-700"></label>
          <div className="relative">
           
           
          </div>
          <div className="mt-2 text-right">
           
          </div>
        </div>
        {/* Submit button */}
       <button
  className="w-full bg-[#0052B4] text-white py-3 rounded-lg font-bold hover:bg-[#00002A] transition-colors"
>
  <Link href="#" className="block w-full h-full text-center">
    Send Code
  </Link>
</button>
 <div className="mt-2 text-right">
            <a href="./login" className="text-sm text-blue-600 hover:underline">
             Return to Login
            </a>
          </div>
      </form>
    </div>
  );
};

export default Forgot;
