import Image from 'next/image';

const MissionVision = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Mission Row */}
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <Image 
            src="/aboutmission.png" 
            alt="Our Mission" 
            width={500}
            height={350}
            className="rounded-lg shadow-lg object-cover w-full"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0052B4]">Our Mission</h2>
          <p className="text-gray-700 text-xl leading-relaxed">
            We are committed to democratizing cybersecurity by transforming advanced academic research into accessible, practical, and affordable solutions. At VULAS Security, we strive to protect individuals and organizations from cyber threats through innovative technology, fostering confidence and resilience in the digital age.
            <br /><br />
            Our team of experts works tirelessly to bridge the gap between complex security concepts and real-world applications, ensuring everyone can benefit from cutting-edge protection regardless of their technical expertise.
          </p>
        </div>
      </div>

      {/* Vision Row */}
      <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
        <div className="md:w-1/2">
          <Image 
            src="/aboutvission.png" 
            alt="Our Vision" 
            width={500}
            height={350}
            className="rounded-lg shadow-lg object-cover w-full"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0052B4]">Our Vision</h2>
          <p className="text-gray-700 text-xl leading-relaxed">
            We envision a future where businesses and individuals navigate the digital world without fear of cyber threats. By combining artificial intelligence with adaptive cybersecurity measures, we lead the industry in creating a safer digital ecosystem for everyone.
            <br /><br />
            Our forward-thinking approach anticipates emerging threats and develops proactive solutions, setting new standards for digital security worldwide while maintaining accessibility for all users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;