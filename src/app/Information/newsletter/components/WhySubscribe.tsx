const WhySubscribe = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-black mb-4">
          Why subscribe to our newsletter?
        </h2>
        <p className="text-xl text-gray-600">
          We want to keep our users informed about updates, tips, and relevant content related to VULAS Security.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "Exclusive insights",
            description: "On cybersecurity trends and threats"
          },
          {
            title: "Updates on VULAS",
            description: "Innovative solutions and services"
          },
          {
            title: "Expert tips",
            description: "On protecting your organization from cyber attacks"
          },
          {
            title: "Invitations",
            description: "To webinars, workshops, and industry events"
          }
        ].map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-[#0052B4] transition-all h-full"
          >
            <div className="bg-[#0052B4] text-white rounded-full w-8 h-8 flex items-center justify-center mb-4 text-xl">
              ✓
            </div>
            <h3 className="text-xl font-bold mb-2 text-black">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhySubscribe;