import HeroSection from './components/HeroSection';
import Footer from '@/app/components/ui/footer';
import Menu from '@/app/components/ui/menu';
import SupportChannels from './components/SupportChannels';
import ContactForm from './components/Contact';

const SupportPage = () => {
  return (
    <div className="bg-white pt-[80px] sm:pt-[100px]">
      <Menu />
      <div className="container mx-auto px-4">
        <HeroSection />
        <div className="my-12 md:my-16">
          <SupportChannels />
        </div>
        <div className="my-12 md:my-16">
          <ContactForm />
        </div>
      </div>
        <Footer/>
    </div>
  );
};

export default SupportPage;