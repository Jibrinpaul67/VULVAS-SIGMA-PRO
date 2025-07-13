import Image from 'next/image';
import Button from './button';

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
          <span className="text-blue-700">It&apos;s so easy to install — </span>switching to VULAS takes seconds
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mt-4 text-center md:text-left">
        It&apos;s quick and easy to install, and gives you all the protection you need to live your online life securely. And it&apos;s totally AI-driven — so give it a try right now.
        </p>
        <div className="flex justify-center md:justify-start">
          <Button className="bg-[#0052B4] text-white px-6 py-3 mt-4 rounded-lg shadow-md hover:bg-[#003D8F] transition-colors">
            Download Free Trial
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage4;