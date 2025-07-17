import Image from 'next/image';
import Button from './button';
import Link from "next/link";

const HomePage4 = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center p-4 sm:p-8 gap-8 md:gap-12">
      {/* Image on right */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image 
          src="/installapp.svg" 
          alt="AI Security" 
          width={500} 
          height={400} 
          className="w-full max-w-[400px] h-auto object-contain"
        />
      </div>
      
      {/* Text on left */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center md:text-left">
          <span className="text-blue-700">VULAS Sigma Plus- </span>Elite security for digital battlefields
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mt-4 text-center md:text-left">
        Arm your device with next-gen defenses-From ransomware to CEO fraud and lots more.
        </p>
        <div className="flex justify-center md:justify-start">
          <Link  href="/plans/vulas-plus" >
          <Button className="bg-[#0052B4] text-white px-6 py-3 mt-4 rounded-lg shadow-md hover:bg-[#003D8F] transition-colors">
            View Plan
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage4;