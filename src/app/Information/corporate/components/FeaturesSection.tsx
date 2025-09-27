const FeaturesSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
          Key Features and Solutions
        </h2>
        <p className="text-xl text-gray-500">
          Enjoy Unified Security Solutions for Corporations Against Evolving Cyber Threats with VULAS Plans
          <br />
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
         {
    title: "Advanced Endpoint Detection and Response",
    description: "Real-time threat monitoring and automated response to secure employee devices across global operations."
  },
  {
    title: "Advanced Persistent Threat Management",
    description: "Defend against sophisticated cyber threats with layered firewall systems, intrusion detection, and network segmentation."
  },
  {
    title: "Cloud Security and Compliance",
    description: "Ensure secure cloud operations with data encryption, continuous monitoring, and adherence to global compliance standards."
  },
  {
    title: "Vulnerability Scanning",
    description: "Continuously checks systems for weaknesses before hackers find them."
  },
  {
    title: "Data Loss Prevention",
    description: "Protect sensitive corporate information from accidental leaks or intentional breaches with robust DLP policies and endpoint enforcement."
  },
  {
    title: "Security Information and Event Management",
    description: "Aggregate, analyze, and respond to security incidents in real-time using centralized dashboards and intelligent alerting."
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