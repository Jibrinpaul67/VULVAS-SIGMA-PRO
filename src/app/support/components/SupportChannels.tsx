import Image from 'next/image';

const SupportChannels = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-black  mb-8">Support Channels</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            icon: "/support/images/email-icon.png",
            title: "Need Assistance?",
            method: "Send us an Email",
            description: "Watch it shows.",
            action: "mailto:support@vulas.com"
          },
          {
            icon: "/support/images/phone-icon.png",
            title: "Talk to an Expert",
            method: "Call Now",
            description: "Available during business hours",
            action: "tel:+1234567890"
          },
          {
            icon: "/support/images/phone-icon.png",
            title: "Find Answers Faster",
            method: "Call Now",
            description: "Available during business hours",
            action: "tel:+1234567890"
          },
          {
            icon: "/support/images/form-icon.png",
            title: "Support Request Form",
            method: "Submit a Request",
            description: "",
            action: "#contact-form"
          }
          ].map(({ icon, title, method, description, action }, index) => (
    <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
      {/* <img src={icon} alt="" className="w-10 h-10 mt-1" /> */}
      <Image src={icon} alt="Support" width={40} height={40} />
      <div>
        <h3 className="text-lg font-bold text-black">{title}</h3>
        <p className="text-black font-medium">{method}</p>
        <p className="text-gray-600 text-sm">{description}</p>
        <a href={action} className="text-blue-600 hover:underline text-sm">Go</a>
      </div>
    </div>
  ))}
      </div>
    </div>
  );
};

export default SupportChannels;