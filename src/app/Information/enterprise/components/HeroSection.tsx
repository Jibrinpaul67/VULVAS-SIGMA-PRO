import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-12">
      <div className="md:w-1/2 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Enterprise-Grade Cybersecurity, <br />
          <span className="text-white">Powered by AI</span>
        </h1>
        <p className="text-xl text-white/90 mb-6">
          Experience next-level protection with VULAS Plans
        </p>
        <button
          className="bg-white text-[#0052B4] px-6 py-3 rounded-full hover:bg-gray-100 
                     transition-colors duration-300 font-medium text-lg
                     focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0052B4]"
        >
          Explore Enterprise
        </button>
      </div>
      <div className="md:w-1/2">
        <Image 
          src="/enterprise.svg" 
          alt="Enterprise Security" 
          width={600} 
          height={400}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;