import Footer from '@/app/components/ui/footer';
import Menu from '@/app/account/firstmenu';
import Register from '@/app/account/signup/register';
import Image from 'next/image';

const VulasSigmaPage = () => {
  return (
    <div className="bg-white pt-[80px] sm:pt-[100px] min-h-screen flex flex-col">
      <Menu />

      <div className="w-full bg-[#ffffff]">
        <div className="container mx-auto px-4"></div>
      </div>

      {/* Main content */}
      <div className="flex-grow flex justify-start items-center container mx-auto px-10">
        <div className="w-full sm:w-1/2 lg:w-1/3 bg-white shadow-2xl rounded-2xl p-8 border border-gray-200">
         <Register />
        </div>
         <div className="hidden lg:flex justify-end flex-grow">
            <Image 
              src="/signup.svg" 
              alt="Registration illustration"
              width={500}
              height={500}
              className="rounded-2xl object-cover"
            />
          </div>
      </div>

      <Footer />
    </div>
  );
};

export default VulasSigmaPage;
