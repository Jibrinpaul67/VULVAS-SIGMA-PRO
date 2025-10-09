"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu as MenuIcon, Globe, User, Headphones, X, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountDropdownOpen, setAccountDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAccountDropdown = () => {
    setAccountDropdownOpen(!isAccountDropdownOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 h-20 transition-all duration-300 
      ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-white"}
      `}
    >
      <div className="flex items-center justify-between h-full p-2 sm:p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Link href="/" className="flex items-center">
            <Image 
              src="/vulas_logo.svg" 
              alt="VULAS Logo" 
              width={150} 
              height={100} 
              // style= add the two curly braces 
              // marginTop: '-20px'}}
            
              priority
            /> 
          </Link>
        </div>

        {/* Right Side: Icons & Links */}
        <div className="flex items-center space-x-2 sm:space-x-6 font-medium">
          {/* Worldwide - Hidden on smaller screens */}
          <div className="hidden md:flex items-center space-x-1 sm:space-x-2 text-gray-900 hover:text-[#0052B4]">
            <Globe size={16} className="sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">English</span>
          </div>  

          {/* Support - Hidden on smaller screens */}
          <Link href="/support" className="hidden md:flex items-center space-x-1 sm:space-x-2 text-gray-900 hover:underline hover:text-[#0052B4]">
            <Headphones size={16} className="sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">Support</span>
          </Link>

          {/* Account with Full Sky Blue Bar */}
          <div className="relative h-20 flex items-center bg-sky-500 px-4">
            <button 
              onClick={toggleAccountDropdown}
              className="hidden md:flex items-center space-x-1 sm:space-x-2 text-white"
            >
              <User size={16} className="sm:w-5 sm:h-5 text-white" />
              Account
              {isAccountDropdownOpen ? <ChevronUp size={16} className="ml-1 text-white" /> : <ChevronDown size={16} className="ml-1 text-white" />}
            </button>
            
            {isAccountDropdownOpen && (
              <div className="absolute left-0 top-full w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
                <Link 
                  href="/account/login"
                  className="block py-2 px-3 text-sm hover:bg-gray-100 rounded-md hover:text-[#0052B4]"
                >
                  Log In
                </Link>
                <Link 
                  href="/account/signup"
                  className="block py-2 px-3 text-sm hover:bg-gray-100 rounded-md hover:text-[#0052B4]"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-1 rounded-md hover:bg-gray-100 text-gray-900" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="flex flex-col p-4 space-y-3">
            {/* Mobile-only menu items */}
            <div className="md:hidden flex items-center space-x-2 py-2 px-3 text-black hover:text-[#0052B4]">
              <Globe size={18} />
              <span>English</span>
            </div> 
            
            <Link href="/support" className="md:hidden flex items-center space-x-2 py-2 px-3 text-black hover:text-[#0052B4]">
              <Headphones size={18} />
              <span>Support</span>
            </Link>

            <Link href="/account" className="md:hidden flex items-center space-x-2 py-2 px-3 text-black hover:text-[#0052B4]">
              <User size={18} />
              <span>Account</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
