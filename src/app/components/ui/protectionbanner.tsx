import Image from 'next/image';
import Button from './button';

const ProtectionBanner = () => {
  return (
    <div className="bg-[#0052B4] text-white rounded-lg p-4 sm:p-8 flex flex-col md:flex-row items-center justify-between shadow-lg">
      <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">
        <div className="flex items-center space-x-3 mb-4 justify-center md:justify-start">
          <Image src="/logo.png" alt="Vulvas Logo" width={40} height={40} className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]" />
          <h2 className="text-lg sm:text-xl font-semibold">VULAS Business Security Solutions</h2>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          Guarding your devices<br />against threat
        </h1>
        <p className="text-base sm:text-lg mt-4 max-w-md mx-auto md:mx-0">
          Our most advanced protection is your toughest defense against viruses, ransomware, zero-day threats, Wi-Fi vulnerabilities, and more.
        </p>
        <Button className="border border-white text-white px-4 sm:px-6 py-2 sm:py-3 mt-4 sm:mt-6 rounded-lg shadow-md hover:bg-white hover:text-[#0052B4]">
          Get Protected
        </Button>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <Image src="/image.png" alt="Protection" width={400} height={300} className="rounded-lg shadow-md w-full max-w-[300px] md:max-w-[400px] h-auto" />
      </div>
    </div>
  );
};

export default ProtectionBanner;