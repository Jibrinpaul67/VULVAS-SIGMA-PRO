// import Image from 'next/image';
// import Button from '@/app/components/ui/button';

// const HeroSection = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-12">
//       <div className="md:w-1/2">
//         <h1 className="text-3xl md:text-4xl font-bold mb-4">
//           Collaborating With <span className="text-[#0500FF]">Partners</span>
//         </h1>
//         <p className="text-xl text-gray-600 mb-6">
//           Join forces with VULAS Security and unlock new opportunities to grow your business while securing the digital world.
//         </p>
//         <Button className="bg-[#00003B] text-white px-6 py-3 rounded-full hover:bg-[#00002A]">
//           Become a Partner
//         </Button>
//       </div>
//       <div className="md:w-1/2">
//         <Image 
//           src="/information/images/partners-hero.png" 
//           alt="VULAS Partners" 
//           width={600} 
//           height={400}
//           className="rounded-lg"
//         />
//       </div>
//     </div>
//   );
// };

//export default HeroSection;

import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-12">
      <div className="md:w-1/2 text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
      Collaborating <br />
          <span className="text-white">With Partners</span>
        </h1>
        <p className="text-xl text-white/90 mb-6">
        Join forces with VULAS Security 
and unlock new opportunities to grow 
your business while securing the digital world.
        </p>
      </div>
      <div className="md:w-1/2">
        <Image 
          src="/partner.svg" 
          alt="Institution Security" 
          width={600} 
          height={400}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;