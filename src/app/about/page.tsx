import Footer from '@/app/components/ui/footer';
import Menu from '@/app/components/ui/menu';
 import HeroSection from './components/HeroSection';
 import MissionVision from './components/MissionVision';
 import WhyChooseUs from './components/WhyChooseUs';
import TeamSection from './components/TeamSection';
const AboutPage = () => {
  return (
    <div className="bg-white pt-[80px] sm:pt-[100px]">
      <Menu />
      {/* Hero section with full-width blue background */}
      <div className="w-full bg-[#EBECEE]">
        <div className="container mx-auto px-4">
          <HeroSection />
        </div>
      </div>
      
      {/* Rest of the content */}
      <div className="container mx-auto px-4">
        <div className="my-12 md:my-16">
        <MissionVision />
        </div>
        <div className="my-12 md:my-16">
        <WhyChooseUs />
        </div>
        <div className="my-12 md:my-16">
        <TeamSection />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutPage;