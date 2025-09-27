const FeaturesSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
          Key Features and Solutions
        </h2>
        <p className="text-xl text-gray-500">
          Enjoy Customizable Unified Security Solutions Against Evolving Cyber Threats with VULAS Plans
          <br />
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
         {
    title: "Unified Management",
    description: "Centralized dashboard to control thousands of users and devices."
  },
  {
    title: "Dedicated Support",
    description: "On-call cybersecurity experts for rapid response."
  },
  {
    title: "Cloud Security and Compliance",
    description: "Ensure secure cloud operations with data encryption, continuous monitoring, and adherence to global compliance standards."
  },
  {
    title: "Custom Threat Intelligence Integration",
    description: "ersonalized monitoring for industry specific attacks."
  },
  {
    title: "Regulatory Compliance Management",
    description: "Built in checks for GDPR, HIPAA, regional and international data laws."
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