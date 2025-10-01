import Footer from '@/app/components/ui/footer';
import Menu from '@/app/account/firstmenu';
import Signin from '@/app/account/login/signin';


const VulasSigmaPage = () => {
  return (
    <div className="bg-white pt-[80px] sm:pt-[100px] min-h-screen flex flex-col">
      <Menu />

      <div className="w-full bg-[#ffffff]">
        <div className="container mx-auto px-4"></div>
      </div>

      <div className="flex-grow flex items-center justify-center container mx-auto px-4">
        <Signin />
      </div>
      

      <Footer />
    </div>
  );
};

export default VulasSigmaPage;
