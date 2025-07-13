import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-16 px-4">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#0052B4]">
          Subscribe to<br />
          <span className="text-[#0052B4]">our Newsletter</span>
        </h1>
        <p className="text-2xl text-gray-700 mb-8">
          Stay Updated with the Latest News<br />
          and Exclusive Offers
        </p>
      </div>
      <div className="md:w-1/2">
        <Image 
          src="/news.svg" 
          alt="Newsletter subscription" 
          width={600} 
          height={400}
          className="rounded-lg"
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;