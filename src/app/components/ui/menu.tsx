"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu as MenuIcon, Globe, User, Headphones, X, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServiceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [isPlansDropdownOpen, setIsPlansDropdownOpen] = useState(false);

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

  const togglePlansDropdown = () => {
    setIsPlansDropdownOpen(!isPlansDropdownOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
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
              width={80} 
              height={80} 
              className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] hover:opacity-80 transition-opacity"
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
                  <Link 
                   href="/Information/institution"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0052B4]"
                  >
                    FOR INSTITUTION
                  </Link>
                  <Link 
                    href="/Information/enterprise"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0052B4]"
                  >
                   FOR ENTERPRISE
                  </Link>
                  <Link 
                   href="/Information/corporate"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0052B4]"
                  >
                    FOR CORPORATE
                  </Link>
                </div>
              )}
            </div>
            
            {/* Plans Dropdown */}
            <div className="relative">
              <button 
                onClick={togglePlansDropdown}
                className="flex items-center hover:underline hover:text-[#0052B4]"
              >
                Check Plans
                {isPlansDropdownOpen ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
              </button>
              
              {isPlansDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
                  <Link 
                    href="/plans/vulas" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0052B4]"
                  >
                    VULAS SIGMA
                  </Link>
                  <Link 
                    href="/plans/vulas-plus" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0052B4]"
                  >
                    VULAS SIGMA PLUS
                  </Link>
                  <Link 
                    href="/plans/vulas-plus-pro" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0052B4]"
                  >
                    VULAS SIGMA PLUS PRO
                  </Link>
                </div>
              )}
            </div>

            <Link href="/privacy" className="hover:underline hover:text-[#0052B4]">Privacy</Link>
            <Link href="/Information/partners" className="hover:underline hover:text-[#0052B4]">Partners</Link>
            <Link href="/store" className="hover:underline hover:text-[#0052B4]">Store</Link>
            <Link href="/about" className="hover:underline hover:text-[#0052B4]">About Us</Link>
            <Link href="/Information/newsletter" className="hover:underline hover:text-[#0052B4]">Newsletter</Link>
          </nav>
        </div>

        {/* Right Side: Icons & Links */}
        <div className="flex items-center space-x-2 sm:space-x-6 text-gray-900 font-medium">
          {/* Worldwide - Hidden on smaller screens */}
          <div className="hidden md:flex items-center space-x-1 sm:space-x-2 hover:text-[#0052B4]">
            <Globe size={16} className="sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">English</span>
          </div>

          {/* Support - Hidden on smaller screens */}
          <Link href="/support" className="hidden md:flex items-center space-x-1 sm:space-x-2 hover:underline hover:text-[#0052B4]">
            <Headphones size={16} className="sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">Support</span>
          </Link>

          {/* Account - Hidden on smaller screens */}
          <Link href="/account" className="hidden md:flex items-center space-x-1 sm:space-x-2 hover:underline hover:text-[#0052B4]">
            <User size={16} className="sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">Account</span>
          </Link>

          {/* Mobile Menu Button */}
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
                        {/* Mobile Service Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setServiceDropdownOpen(!isServiceDropdownOpen)}
                className="flex items-center justify-between w-full py-2 hover:bg-gray-100 px-3 rounded-md hover:text-[#0052B4] text-black"
              >
                Service Tiers
                {isServiceDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              
              {isServiceDropdownOpen && (
                <div className="pl-4 mt-1 space-y-2">
                  <Link 
                   href="/Information/institution" 
                    className="block py-2 px-3 text-sm hover:bg-gray-100 rounded-md hover:text-[#0052B4] text-black"
                  >
                    FOR INSTITUTION
                  </Link>
                  <Link 
                   href="/Information/enterprise"
                    className="block py-2 px-3 text-sm hover:bg-gray-100 rounded-md hover:text-[#0052B4] text-black"
                  >
                    FOR ENTERPRISE
                  </Link>
                  <Link 
                     href="/Information/corporate"
                    className="block py-2 px-3 text-sm hover:bg-gray-100 rounded-md hover:text-[#0052B4] text-black"
                  >
                    FOR CORPORATE
                  </Link>
                </div>
              )}
            </div>
            
            {/* Mobile Plans Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsPlansDropdownOpen(!isPlansDropdownOpen)}
                className="flex items-center justify-between w-full py-2 hover:bg-gray-100 px-3 rounded-md hover:text-[#0052B4] text-black"
              >
                Check Plans
                {isPlansDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              
              {isPlansDropdownOpen && (
                <div className="pl-4 mt-1 space-y-2">
                  <Link 
                    href="/plans/vulas" 
                    className="block py-2 px-3 text-sm hover:bg-gray-100 rounded-md hover:text-[#0052B4] text-black"
                  >
                    VULAS SIGMA
                  </Link>
                  <Link 
                    href="/plans/vulas-plus" 
                    className="block py-2 px-3 text-sm hover:bg-gray-100 rounded-md hover:text-[#0052B4] text-black"
                  >
                    VULAS SIGMA PLUS
                  </Link>
                  <Link 
                    href="/plans/vulas-plus-pro" 
                    className="block py-2 px-3 text-sm hover:bg-gray-100 rounded-md hover:text-[#0052B4] text-black"
                  >
                    VULAS SIGMA PLUS PRO
                  </Link>
                </div>
              )}
            </div>

            <Link href="/privacy" className="py-2 hover:bg-gray-100 px-3 rounded-md hover:text-[#0052B4] text-black">Privacy</Link>
            <Link href="/Information/partners" className="py-2 hover:bg-gray-100 px-3 rounded-md hover:text-[#0052B4] text-black">Partners</Link>
            <Link href="/store" className="py-2 hover:bg-gray-100 px-3 rounded-md hover:text-[#0052B4] text-black">Store</Link>
            <Link href="/about" className="py-2 hover:bg-gray-100 px-3 rounded-md hover:text-[#0052B4] text-black">About Us</Link>
            <Link href="/Information/newsletter" className="py-2 hover:bg-gray-100 px-3 rounded-md hover:text-[#0052B4] text-black">Newsletter</Link>
            
            {/* Mobile-only menu items */}
            <div className="md:hidden flex items-center space-x-2 py-2 px-3 hover:text-[#0052B4] text-black">
              <Globe size={18} />
              <span>English</span>
            </div>
            <Link href="/support" className="md:hidden flex items-center space-x-2 py-2 px-3 hover:text-[#0052B4] text-black">
              <Headphones size={18} />
              <span>Support</span>
            </Link>
            <Link href="/account" className="md:hidden flex items-center space-x-2 py-2 px-3 hover:text-[#0052B4] text-black">
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