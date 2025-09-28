import HeroSection from './components/HeroSection';
import Footer from '@/app/components/ui/footer';
import Menu from '@/app/components/ui/menu';

const Dashboard = () => {
  return (
    <div className="bg-white pt-[80px] sm:pt-[100px]">
      <Menu />
      <div className="container mx-auto px-4">
        <HeroSection />
     
      </div>
        <Footer/>
    </div>
  );
};

export default Dashboard;