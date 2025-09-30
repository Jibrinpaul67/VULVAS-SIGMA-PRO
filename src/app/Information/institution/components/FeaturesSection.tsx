const FeaturesSection = () => {
  return (
    <div  id="features" className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
          Key Features and Solutions
        </h2>
        <p className="text-xl text-gray-500">
          Enjoy Unified Security Solutions for Institutions Against Evolving Cyber Threats
          <br />
          <span className="text-gray-500">with VULAS Plans</span>
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Endpoint security",
            description: "Safeguard student and staff devices with real-time protection."
          },
          {
            title: "Network security",
            description: "Shield against external threats with robust intrusion detection and prevention"
          },
          {
            title: "Passwords and Encryption Security",
            description: "Prevent unauthorized access to and sharing of sensitive institutional data"
          },
          {
            title: "Identity and Access Management (IAM)",
            description: "Secure access for staff, students, and administrators with role-based access controls"
          },
          {
            title: "Cloud Security",
            description: "Protect data stored in and accessed from cloud services"
          },
          {
            title: "Pharming Prevention",
            description: "Secure learning management systems (LMS) and student records"
          }
        ].map((feature, index) => (
          <div 
            key={index} 
            className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all"
          >
            <h3 className="text-xl font-bold mb-3 text-[#0052B4]">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;