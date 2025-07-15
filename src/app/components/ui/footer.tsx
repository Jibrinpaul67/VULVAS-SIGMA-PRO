const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-6 sm:py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg sm:text-xl font-semibold">VULAS Business Security Solutions</h2>
          <p className="text-gray-400 mt-1 sm:mt-2 text-sm sm:text-base">Your trusted cybersecurity partner.</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <a href="#" className="text-gray-300 hover:text-white text-sm sm:text-base">Privacy Policy</a>
          <a href="#" className="text-gray-300 hover:text-white text-sm sm:text-base">Terms of Service</a>
          <a href="/support" className="text-gray-300 hover:text-white text-sm sm:text-base">Support</a>
          <a href="#" className="text-gray-300 hover:text-white text-sm sm:text-base">Contact Us</a>
        </nav>
      </div>
      <div className="border-t border-gray-700 mt-4 sm:mt-6 pt-3 sm:pt-4 text-center text-gray-400 text-xs sm:text-sm">
        &copy; {new Date().getFullYear()} VULAS Security. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
