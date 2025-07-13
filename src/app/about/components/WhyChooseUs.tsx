const WhyChooseUs = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-black">Why Choose VULAS Security?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: "AI-Driven Solutions",
            description: "Ensure the power of artificial intelligence for proactive threat detection and response."
          },
          {
            title: "Cost-Effective",
            description: "Advocate pricing structures designed for diverse needs."
          },
          {
            title: "Scalable Protection",
            description: "Explore systems for individuals, small businesses, and large enterprises."
          },
           {
            title: "Seamless Patch Management",
            description: "Keep your app secure and up-to-date with hassle-free updates."
          },
           {
            title: "Integrated Mobile Security Stack",
            description: "Combine data loss prevention, adaptive policies, and remote wipe to secure every mobile endpoint."
          },
          {
            title: "User-Friendly",
            description: "Evaluate designers who wear ease of use in mind, making advanced cybersecurity accessible to all."
          }
        ].map((item, index) => (
          <div key={index} className="p-2">
            <h3 className="font-bold text-xl mb-2 text-black">{item.title}</h3>
            <p className="text-black">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;