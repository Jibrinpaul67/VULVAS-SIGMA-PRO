import Image from 'next/image';
import Button from '@/app/components/ui/button';

const HomePage_1 = () => {
  return (
    <div className="flex flex-col md:flex-row items-stretch justify-between gap-0 w-full max-w-none mt-8 md:mt-12 pb-4 md:pb-6">
      <div className="text-center md:text-left w-full md:w-[45%] md:pl-0">
        {/* Heading with "cyber threats" in blue */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-black">
          Protect your devices <br />
          from <span className="text-[#0500FF]">cyber threats</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-base sm:text-lg mt-3 sm:mt-4">Stay secure, surf with confidence</p>

        {/* Bigger, rounder button with spacing below */}
        <Button className="bg-[#00003B] text-white px-6 sm:px-8 py-3 sm:py-4 mt-4 sm:mt-6 rounded-full text-base sm:text-lg shadow-md hover:bg-[#00002A] w-full sm:w-auto">
          Download Free Trial
        </Button>

        {/* Spacing added before this text */}
        <p className="text-gray-500 text-xs sm:text-sm mt-3 sm:mt-4">
          Install on popular browsers like Chrome, Mozilla Firefox and others.
        </p>
      </div>

      {/* Image pushed to far right */}
      <div className="w-full md:w-[45%] flex justify-end">
        <Image 
          src="/security.svg" 
          alt="Home" 
          width={450} 
          height={350} 
          className="w-full max-w-[350px] md:max-w-[450px] h-auto md:mr-0"
        />
      </div>
    </div>
  );
};

export default HomePage_1;