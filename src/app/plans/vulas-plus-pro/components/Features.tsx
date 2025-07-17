const Features = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          <span className="text-[#0052B4]">VULAS</span>
          <span className="text-black"> SIGMA PRO</span>
        </h1>
        <h2 className="text-lg sm:text-xl text-black">VULAS Security Business Solution offers the following solutions:</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
            title: "APT Threat Hunting",
            description: "Track, isolate, and neutralize stealthy long-term intrusions."
          },
          {
            title: "Remote Monitoring and Control",
            description: "Monitor, manage, and secure endpoints from anywhere in real time."
          },
          {
            title: "Smart Asset Tracking",
            description: "Identify and manage all connected devices across your environment."
          },
          {
            title: "DDoS Shielding",
            description: "Block traffic floods and keep services running without interruption."
          },
          {
            title: "Centralized Security Control",
            description: "Simplify operations with one dashboard for all threat vectors."
          },
          {
            title: "Packet Sniffing Defense",
            description: "Encrypt data in transit to block unauthorized network snooping."
          },
          {
            title: "Enterprise-Grade Protection",
            description: "Comprehensive security tailored for business operations and growth."
          },
          {
            title: "SIEM Intelligence",
            description: "Aggregate logs, detect anomalies, and respond to threats faster."
          }
        ].map((feature, index) => (
          <div 
            key={index} 
            className="p-4 bg-gray-100 rounded-lg aspect-square flex flex-col justify-center"
          >
            <h3 className="font-semibold text-[#0052B4] mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;