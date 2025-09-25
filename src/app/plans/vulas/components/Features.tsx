const Features = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          <span className="text-[#0052B4]">VULAS</span>
          <span className="text-black"> SIGMA</span>
        </h1>
        <h2 className="text-lg sm:text-xl text-black">VULAS SOHO Protection offers the following solutions:</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
            title: "SQL Injection Prevention",
            description: "Safeguard databases from malicious SQL code insertion."
          },
          {
            title: "Code Injection Prevention",
            description: "Prevent unauthorized code execution in your applications."
          },
          {
            title: "Software Defense",
            description: "Detect and remove monitoring software."
          },
          {
            title: "Identity Protection",
            description: "Protect user identities from being stolen."
          }
          ,
          {
            title: "Link Shielding",
            description: "Block deceptive links and protect users from malicious redirects."

          },
          {
            title: "CEO Fraud Defense",
            description: "Prevent impersonation scams that target executives and employees."

          },
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