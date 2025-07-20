const Pricing = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {[
          {
            name: "Individual",
            price: "₦30,000",
            devices: "1-5 Devices per year"
          },
          {
            name: "Enterprise",
            price: "₦55,000",
            devices: "6-20 Devices per year"
          },
          {
            name: "Institutional",
            price: "₦80,000",
            devices: "21-50 Devices per year"
          },
          {
            name: "Corporate",
            price: "₦160,000",
            devices: "51-100 Devices per year"
          },
          {
            name: "Custom",
            price: "₦120,000",
            devices: ">100 Devices per year"
          }
        ].map((plan, index) => (
          <div key={index} className="flex flex-col h-full rounded-lg p-6 text-center">
            <div className="flex-grow">
              <h3 className="font-bold text-xl mb-2 text-black">{plan.name}</h3>
              <p className="text-2xl font-semibold mb-2 text-black">{plan.price}</p>
              <p className="text-gray-600 mb-4 font-bold">{plan.devices}</p>
            </div>
            <button className="bg-[#0052B4] text-white font-bold px-6 py-3 rounded-full hover:bg-[#00002A] transition-colors mt-auto">
              Buy now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;