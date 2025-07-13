import HeroSection from './components/HeroSection';
import SupportChannels from './components/SupportChannels';
import ContactForm from './components/Contact';

const SupportPage = () => {
  return (
    <div className="bg-white pt-[80px] sm:pt-[100px]">
      <div className="container mx-auto px-4">
        <HeroSection />
        <div className="my-12 md:my-16">
          <SupportChannels />
        </div>
        <div className="my-12 md:my-16">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default SupportPage;