"use client";

import { useState, useEffect } from "react";
import { BadgePercent } from "lucide-react";

const Banner = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex items-center justify-center p-1 sm:p-2 
        ${isScrolled ? "bg-white text-black shadow-md" : "bg-[#0052B4] text-white"}
      `}
    >
      <BadgePercent size={16} className={`${isScrolled ? "text-black" : "text-white"} mr-1 sm:mr-2`} />
      <span className="underline text-xs sm:text-sm font-semibold">
        Save 30% on Premium Security
      </span>
    </div>
  );
};

export default Banner;