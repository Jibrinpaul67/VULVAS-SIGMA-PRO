const ComparisonSection = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-black mb-4">
          Enterprise-level privacy, security
        </h2>
        <p className="text-xl text-gray-500">
          Enjoy Unified Security Solutions Against Evolving Cyber Threats with VULAS Sigma Pro
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: "VULAS Sigma",
            for: "For small office home office environments",
            features: [
              "Data security",
              "Threat Management",
              "SQL Injection Attack Prevention",
              "Code Injection Attacks Prevention",
              "Spyware Defense",
              "Identity theft Prevention",
              "Malware Defense",
              "Trojan Defense etc."
            ]
          },
          {
            name: "VULAS Sigma Plus",
            for: "For enterprise-level business security",
            features: [
              "Anti-Ransomware",
              "Email Security",
              "Antivirus",
              "Cloud Security Spear Phishing",
              "Link Manipulation Prevention",
              "CEO Fraud Prevention",
              "Smishing Prevention",
              "Evil Twin* Wi-Fi Prevention"
            ]
          },
          {
            name: "VULAS Sigma Pro",
            for: "For the pinnacle of endpoint security solutions",
            features: [
              "Vulnerability Scanning",
              "Application Control",
              "Device Control",
              "Business Security",
              "Endpoint security",
              "Sniffing Prevention",
              "DDoS Attack Prevention",
              "Man-in-the-middle Attack Prevention"
            ]
          }
        ].map((product, index) => (
          <div 
            key={index} 
            className="border-2 border-gray-200 rounded-lg p-6 h-full transition-all hover:border-black hover:shadow-lg"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#0052B4]">{product.name}</h3>
              <p className="text-gray-600">{product.for}</p>
            </div>
            <ul className="space-y-3">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonSection;