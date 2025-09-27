"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu as MenuIcon, Globe, User, Headphones, X, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useCurrency } from "@/app/plans/CurrencyContext";
type Currency = "NGN" | "USD" | "GBP" | "EUR" | "ZAR";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServiceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [isAccountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();
  const [isCurrencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

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

  const toggleServiceDropdown = () => {
    setServiceDropdownOpen(!isServiceDropdownOpen);
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
      <div className="flex items-center justify-between p-2 sm:p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Link href="/" className="flex items-center">
            <Image 
              src="/vulas_logo.svg" 
              alt="VULAS Logo" 
              width={100} 
              height={100} 
              className="w-[100px] h-[100px] sm:w-[100px] sm:h-[100px] hover:opacity-80 transition-opacity"
              priority
            />
          </Link>
          
          <nav className="hidden lg:flex space-x-3 xl:space-x-6 text-gray-900 font-medium text-sm xl:text-base">
            {/* Service Dropdown */}
            <div className="relative">
              <button 
                onClick={toggleServiceDropdown}
                className="flex items-center hover:underline hover:text-[#0052B4]"
              >
                Service Tiers
                {isServiceDropdownOpen ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
              </button>
              
              {isServiceDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
                  <Link href="/Information/individual" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0052B4]">Individual</Link>
                  <Link href="/Information/institution" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0052B4]">Institution</Link>
                  <Link href="/Information/enterprise" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0052B4]">Enterprise</Link>
                  <Link href="/Information/corporate" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0052B4]">Corporate</Link>
                  <Link href="/Information/custom" className="block py-2 px-3 text-sm hover:bg-gray-100 rounded-md hover:text-[#0052B4]">Custom</Link>
                </div>
              )}
            </div>
 
            <Link href="/plans/productPlans" className="hover:underline hover:text-[#0052B4]">Product Plans</Link>
            <Link href="/privacy" className="hover:underline hover:text-[#0052B4]">Privacy</Link>
            <Link href="/Information/partners" className="hover:underline hover:text-[#0052B4]">Partners</Link>
            <Link href="/about" className="hover:underline hover:text-[#0052B4]">About Us</Link>
            <Link href="/Information/newsletter" className="hover:underline hover:text-[#0052B4]">Newsletter</Link> 
          </nav>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-2 sm:space-x-6 text-gray-900 font-medium">
          {/* Currency Dropdown */}
          <div className="relative hidden md:flex items-center space-x-1 sm:space-x-2">
            <Globe size={18} />
            <button
              onClick={() => setCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
              className="flex items-center hover:text-[#0052B4]"
            >
              {currency}
              {isCurrencyDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {isCurrencyDropdownOpen && (
              <div className="absolute top-full mt-2 bg-white shadow-md rounded-md w-32 z-50">
                {["NGN", "USD", "GBP", "EUR", "ZAR"].map((cur) => (
                  <button
                    key={cur}
                    onClick={() => {
                      setCurrency(cur as Currency);
                      setCurrencyDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    {cur}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Support */}
          <Link href="/support" className=" hidden md:flex items-center space-x-1 sm:space-x-2 hover:underline hover:text-[#0052B4]">
            <Headphones size={16} className="sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">Support</span>
          </Link>

          {/* Account with sky-blue bar */}
           <div className=" relative -top-6 h-20 flex items-center bg-sky-500 px-4">
            <button 
              onClick={toggleAccountDropdown}
              className="hidden md:flex items-center space-x-1 sm:space-x-2 text-white"
            >
              <User size={16} className="sm:w-5 sm:h-5 text-white" />
              Account
              {isAccountDropdownOpen ? <ChevronUp size={16} className="ml-1 text-white" /> : <ChevronDown size={16} className="ml-1 text-white" />}
            </button>
            
            {isAccountDropdownOpen && (
              <div className="absolute left-0 mt-20 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
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

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-1 rounded-md hover:bg-gray-100" 
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
            {/* Service Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setServiceDropdownOpen(!isServiceDropdownOpen)}
                className="flex items-center justify-between w-full h-20 py-2 hover:bg-gray-100 px-3 rounded-md hover:text-[#0052B4] text-black"
              >
                Service Tiers
                {isServiceDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              
              {isServiceDropdownOpen && (
                <div className="pl-4 mt-1 space-y-2">
                  <Link href="/Information/individual" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0052B4]">Individual</Link>
                  <Link href="/Information/institution" className="block py-2 px-3 text-sm hover:bg-gray-100 rounded-md hover:text-[#0052B4] text-black">Institution</Link>
                  <Link href="/Information/enterprise" className="block py-2 px-3 text-sm hover:bg-gray-100 rounded-md hover:text-[#0052B4] text-black">Enterprise</Link>
                  <Link href="/Information/corporate" className="block py-2 px-3 text-sm hover:bg-gray-100 rounded-md hover:text-[#0052B4] text-black">Corporate</Link>
                  <Link href="/Information/custom" className="block py-2 px-3 text-sm hover:bg-gray-100 rounded-md hover:text-[#0052B4] text-black">Custom</Link>
                </div>
              )}
            </div>

            <Link href="/plans/productPlans" className="hover:underline hover:text-[#0052B4] text-black">Product Plans</Link>
            <Link href="/privacy" className="py-2 hover:bg-gray-100 px-3 rounded-md hover:text-[#0052B4] text-black">Privacy</Link>
            <Link href="/Information/partners" className="py-2 hover:bg-gray-100 px-3 rounded-md hover:text-[#0052B4] text-black">Partners</Link>
            <Link href="/about" className="py-2 hover:bg-gray-100 px-3 rounded-md hover:text-[#0052B4] text-black">About Us</Link>
            <Link href="/Information/newsletter" className="py-2 hover:bg-gray-100 px-3 rounded-md hover:text-[#0052B4] text-black">Newsletter</Link>
            
            {/* Mobile Account with sky-blue bar */}
            <Link href="/account" className="md:hidden flex items-center space-x-2 py-2 px-3 border-2 border-sky-400 rounded-md hover:text-[#0052B4] text-black">
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
