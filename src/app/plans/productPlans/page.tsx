 import HeroSection from '../components/HeroSection';
import Footer from '@/app/components/ui/footer';
import Menu from '@/app/components/ui/menu';
import HomePage4 from './homepage_4';
import HomePage3 from './homepage_3';
import HomePage2 from './homepage_2';


const VulasSigmaPage = () => {
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
        <HomePage2 />
        </div>
         <div className="my-12 md:my-16">
        <HomePage4/>
        </div>
        <div className="my-12 md:my-16">
        <HomePage3/>
        </div>
        <div className="my-12 md:my-16">
      
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default VulasSigmaPage;