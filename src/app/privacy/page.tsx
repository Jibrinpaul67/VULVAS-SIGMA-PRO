import HeroSection from './components/HeroSection';
import Footer from '@/app/components/ui/footer';
import Menu from '@/app/components/ui/menu';
import Privacytalk from './components/Privacytalk';


const VulasPlusSigmaPage = () => {
  return (
    <div className="bg-white pt-[80px] sm:pt-[100px]">
      <Menu />
      {/* Hero section with full-width blue background */}
      <div className="w-full bg-[#ffffff]">
        <div className="container mx-auto px-4">
          <HeroSection />
        </div>
      </div>
      
      {/* Rest of the content */}
      <div className="container mx-auto px-4">
        <div className="my-12 md:my-16">
       <Privacytalk />
        </div>
        <div className="my-12 md:my-16">
      
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default VulasPlusSigmaPage;