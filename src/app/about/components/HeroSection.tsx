import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-8">
      <div className="md:w-1/2 flex flex-col gap-4">
        {/* Line 1: About us with blue background and white text in rounded circle */}
        <span className="bg-[#0052B4] text-white w-fit px-4 py-2 rounded-full text-lg font-medium">
          About us
        </span>
        
        {/* Line 2: Welcome to in black text - larger size */}
        <h2 className="text-3xl md:text-4xl text-black">
          Welcome to,
        </h2>
        
        {/* Line 3: VULAS Security in black bold text - largest size */}
        <h1 className="text-5xl md:text-6xl font-bold text-black">
          VULAS Security
        </h1>
        
        {/* Combined Line 4-5: At VULAS Security... - larger size */}
        <p className="text-3xl md:text-4xl text-black">
          At VULAS Security, innovation<br />
          meets protection
        </p>
      </div>
      
      <div className="md:w-1/2">
        <Image 
          src="aboutus.svg" 
          alt="VULAS Security About" 
          width={800}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;