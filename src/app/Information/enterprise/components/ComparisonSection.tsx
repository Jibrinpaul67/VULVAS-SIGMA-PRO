const ComparisonSection = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-black mb-4">
          Enterprise-level privacy, security
        </h2>
        <p className="text-xl text-gray-500">
          Enjoy Unified Security Solutions Against Evolving Cyber Threats with VULAS Plans
        </p>
      </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: "VULAS Sigma",
            for: "For small office home office environments",
            rev: "570 Reviews",
            system: "Windows | macOS | Android | IOS",
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
            rev: "431 Reviews",
            system: "Windows | macOS | Android | IOS",
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
            rev: "973 Reviews",
            system: "Windows | macOS | Android | IOS",
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
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-bold text-[#0052B4]">{product.name}</h3>
              <p className="text-gray-600">{product.for}</p>
                <div className="flex items-center justify-center mt-2">
    {Array(5).fill().map((_, i) => (
      <svg
        key={i}
        className="w-4 h-4 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.463a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.785.57-1.84-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
      </svg>
    ))}
    <span className="ml-2 text-sm text-gray-500">346 reviews</span>
  </div>
  <p className="text-gray-600">{product.system}</p>
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