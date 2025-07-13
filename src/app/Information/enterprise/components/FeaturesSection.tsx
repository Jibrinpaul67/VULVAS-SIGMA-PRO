const FeaturesSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
          Key Features and Solutions
        </h2>
        <p className="text-xl text-gray-500">
          Enjoy Unified Security Solutions Against Evolving Cyber Threats
          <br />
          <span className="text-gray-500">with VULAS Sigma Pro</span>
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Endpoint security",
            description: "Protect employee devices with real-time threat detection and response."
          },
          {
            title: "Network security",
           description: "Defend business infrastructure with advanced intrusion detection and prevention."
            },
          {
             title: "End to end Protection",
             description: "Defend company devices from malware, ransomware, and unauthorized access,whether in-office or remote"
          },
          {
            title: "Identity and Access Management",
           description: "Ensure secure access for employees, managers, and contractors with role-based controls and multi-factor authentication"
          },
          {
            title: "Cloud Security",
           description: "Protect sensitive business data across cloud platforms with encryption and threat monitoring"
          },
          {
            title: "Pharming Prevention",
              description: "Safeguard internal systems, customer data, and business portals from redirection attacks and DNS hijacking"
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