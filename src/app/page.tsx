"use client";
import DiscountBanner from '@/app/components/ui/discountbanner';
import Menu from '@/app/components/ui/menu';
import HomePage1 from '@/app/components/ui/homepage_1';
import HomePage2 from '@/app/components/ui/homepage_2';
import HomePage3 from '@/app/components/ui/homepage_3';
import ReviewComponent from '@/app/components/ui/reviews';
import Footer from '@/app/components/ui/footer';
import HomePage4 from './components/ui/homepage_4';

const Page = () => {
  return (
    <div className="bg-white pt-[112px]"> {/* Adjusted padding to account for navbar height */}
<div className="container mx-auto px-2 sm:px-4"> 
        <DiscountBanner />
        <Menu />
        <HomePage1 />
        <div >
          <HomePage2 />
        </div>
        <div className="my-8 md:my-6">
          <HomePage3 />
        </div>
        <div className="my-8 md:my-6">
        <HomePage4 />
        </div>
        <div className="my-8 md:my-6">
          <ReviewComponent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;