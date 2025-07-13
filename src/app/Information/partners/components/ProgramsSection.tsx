const ProgramsSection = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-black mb-4">
          Our Partnership Programs
        </h2>
        <p className="text-xl text-gray-600">
          Accelerate Growth and Cybersecurity Innovation with<br />
          VULAS Partnerships
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            type: "Technology Vendors",
            description: "Integrate VULAS security solutions with your tech offerings."
          },
          {
            type: "Managed Service Providers (MSPs)",
            description: "Bundle VULAS with your managed security services."
          },
          {
            type: "Industry Associations",
            description: "Educate and empower organizations with cutting-edge security solutions."
          },
          {
            type: "Consulting Firms",
            description: "Deliver expert security solutions to your clients with VULAS."
          }
        ].map((program, index) => (
          <div 
            key={index} 
            className="border-b-4 border-gray-200 p-6 hover:border-[#0052B4] transition-all"
          >
            <h3 className="text-xl font-bold mb-3 text-[#0052B4]">{program.type}</h3>
            <p className="text-gray-600">{program.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramsSection;