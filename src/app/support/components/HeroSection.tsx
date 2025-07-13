import Image from 'next/image';
import Button from '@/app/components/ui/button';

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-8">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Your Cybersecurity <br />
          <span className="text-[#0500FF]">Ally 24/7</span>
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          We&apos;re here to help anytime, anywhere.
        </p>
        <Button className="bg-[#00003B] text-white px-6 py-3 rounded-full hover:bg-[#00002A]">
          Contact us Today
        </Button>
      </div>
      <div className="md:w-1/2">
        <Image 
          src="/support/images/support-hero.png" 
          alt="24/7 Support" 
          width={500} 
          height={350}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;