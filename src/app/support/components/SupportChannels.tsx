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
        // ].map((channel, index) => (
        //   <div key={index} className="bg-gray-50 p-6 rounded-lg">
        //     <div className="flex items-center mb-4">
        //       <Image 
        //         src={channel.icon}
        //         alt={channel.title}
        //         width={40}
        //         height={40}
        //         className="mr-4"
        //       />
        //       <h3 className="font-bold text-xl">{channel.title}</h3>
        //     </div>
        //     <p className="text-lg font-semibold mb-2">{channel.method}</p>
        //     {channel.description && <p className="text-gray-600 mb-4">{channel.description}</p>}
        //     <a 
        //       href={channel.action} 
        //       className="text-[#0500FF] font-medium hover:underline"
        //     >
        //       {channel.method}
        //     </a>
        //   </div>
        // ))}
          ].map(({ icon, title, method, description, action }, index) => (
    <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
      <img src={icon} alt="" className="w-10 h-10 mt-1" />
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