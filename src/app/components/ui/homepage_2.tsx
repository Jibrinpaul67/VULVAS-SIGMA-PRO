import Image from 'next/image';
import SquareCard from './squarecard';
import Button from './button';

const HomePage2 = () => {
  return (
    <div className="flex flex-col items-center p-4 sm:p-8 space-y-6 text-center">
      <div className="flex flex-col items-center">
        <Image src="/cybertool.svg" alt="Vulvas Logo" width={200} height={200} className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]" />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">Unlock antivirus with advanced privacy</h1>
        <div className="w-32 sm:w-48 h-1 bg-[#0052B4] mt-2"></div>
      </div>

      {/* Paragraph aligned with the line */}
      <div className="text-gray-600 text-base sm:text-lg max-w-4xl px-4">
        <p>Vulvas Security goes beyond standard antivirus software, offering a suite of specialized tools:</p>
      </div>

      {/* Features with increased horizontal spacing */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 md:gap-12 px-4 w-full">
        {/* Card 1: Easy to install and use */}
        <SquareCard>
          <div className="flex flex-col items-center h-full p-4 min-w-[280px] max-w-[320px]">
            <Image src="/install.svg" alt="Easy to Install" width={60} height={60} className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]" />
            <h3 className="text-lg font-semibold mt-3 text-black">Easy to install and use</h3>
            <p className="text-gray-600 text-xs sm:text-sm mt-2">Set up in seconds and enjoy seamless security without any hassle.</p>
          </div>
        </SquareCard>

        {/* Card 2: Wi-Fi network security */}
        <SquareCard>
          <div className="flex flex-col items-center h-full p-4 min-w-[280px] max-w-[320px]">
            <Image src="/wifi.svg" alt="Wi-Fi Security" width={60} height={60} className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]" />
            <h3 className="text-lg font-semibold mt-3 text-black">Wi-Fi network security</h3>
            <p className="text-gray-600 text-xs sm:text-sm mt-2">
              Connect safely to any Wi-Fi network, even unsecured public networks. Plus, see who&apos;s using your home Wi-Fi and block any intruders with a click.
            </p>
          </div>
        </SquareCard>

        {/* Card 3: Protection against ransomware attacks */}
        <SquareCard>
          <div className="flex flex-col items-center h-full p-4 min-w-[280px] max-w-[320px]">
            <Image src="/shield.svg" alt="Ransomware Protection" width={60} height={60} className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]" />
            <h3 className="text-lg font-semibold mt-3 text-black">Protection against ransomware attacks</h3>
            <p className="text-gray-600 text-xs sm:text-sm mt-2">
              Protect your information. Don&apos;t let your personal photos, files, and documents fall victim to hackers using ransomware.
            </p>
          </div>
        </SquareCard>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto justify-center">
        <Button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#0052B4] hover:bg-[#003D8F]">
          Free Download
        </Button>
        <button
          className={`px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#0052B4] border-2 border-[#0052B4] rounded-md hover:bg-[#F5F9FF] transition-colors duration-200`}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HomePage2;