const Features = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          <span className="text-[#0052B4]">VULAS</span>
          <span className="text-black"> SIGMA PRO</span>
        </h1>
        <h2 className="text-lg sm:text-xl text-black">VULAS Enterprise Endpoint Security offers the following solutions:</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
        {[
          {
            title: "Data Security",
            description: "Protect and manage data against unauthorized access and breaches."
          },
          {
            title: "Threat Management",
            description: "Identify, assess, and mitigate potential security threats."
          },
          {
            title: "Link Shielding",
            description: "Block deceptive links and protect users from malicious redirects."

          },
          {
            title: "CEO Fraud Defense",
            description: "Prevent impersonation scams that target executives and employees."

          },
          {
            title: "Fake Wi-Fi Detection",
            description: "Identify and block rogue access points posing as trusted networks."

          },
          {
            title: "DNS Integrity Protection",
            description: "Stop attackers from rerouting traffic to fake, data-stealing sites."

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