const FeaturesSection = () => {
  return (
    <div  id="features" className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
          Key Features and Solutions
        </h2>
        <p className="text-xl text-gray-500">
          Enjoy Unified Security Solutions for Personal Use Against Evolving Cyber Threats
          <br />
          <span className="text-gray-500">with VULAS Plans</span>
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Data Security",
            description: "Protects personal and business data from leaks or theft. Critical for freelancers or home offices handling client details."
          },
          {
            title: "Sufficient Antivirus",
            description: "Blocks common viruses and malware so devices don’t crash in the middle of Zoom calls."
          },
          {
            title: "Adware Defense",
            description: "Stops annoying ads that slow down systems and compromise privacy."
          },
          {
            title: "Identity Theft Protection",
            description: "Prevents hackers from stealing online banking or personal details."
          },
          {
            title: "Spyware Defense",
            description: "Detects hidden programs silently tracking user activity."
          },
          {
            title: "SQL Injection Prevention",
            description: "Protects Database from being hijacked when running small online shops and websites."}

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