// components/HeroSection.tsx
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4 sm:p-8 space-y-6 md:space-y-0 md:space-x-4">
      <div className="text-center md:text-left w-full md:w-[45%]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          <span className="text-[#071D2B]">VULAS Security</span> <br />
          <span className="text-black">Terms of Service for on-demand Solutions</span>
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mt-3 sm:mt-9">
         THIS IS AN AGREEMENT BETWEEN YOU OR THE ENTITY THAT YOU REPRESENT (HEREINAFTER “YOU” or “YOUR”)
          AND THE APPLICABLE VULAS CONTRACTING ENTITY LISTED HERE (HEREINAFTER VULAS) GOVERNING YOUR USE OF VULAS Security 
          SUITE OF ON-DEMAND SOFTWARE (HEREINAFTER “Service(s)”. PLEASE READ THE FOLLOWING TERMS OF SERVICE (the “Agreement”) 
          CAREFULLY BEFORE USING THE SERVICE.
        </p>
      </div>
      <div className="w-full md:w-[40%] flex justify-center">
        <Image 
          src="/price.svg" 
          alt="Security illustration" 
          width={450} 
          height={350} 
          className="w-full max-w-[350px] md:max-w-[450px] h-auto" 
        />
      </div>
    </div>
  );
};

export default HeroSection;