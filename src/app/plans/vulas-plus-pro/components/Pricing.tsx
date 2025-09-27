"use client";

import { useCurrency } from "@/app/plans/CurrencyContext";

const exchangeRates: Record<string, number> = {
  NGN: 1,
  USD: 0.00065,
  GBP: 0.00052,
  EUR: 0.00060,
  ZAR:  0.012 ,
};

const currencySymbols: Record<string, string> = {
  NGN: "₦",
  USD: "$",
  GBP: "£",
  EUR: "€",
  ZAR: "R"
};

const formatCurrency = (amount: number, currency: string) => {
  const converted = amount * exchangeRates[currency];
  return `${currencySymbols[currency]}${converted.toLocaleString(undefined, {
    maximumFractionDigits: 0,
  })}`;
};


const Pricing = () => {
  const { currency } = useCurrency();

  const plans = [
    { name: "Individual", price: 45000, devices: "1-5 Devices per year", isCustom: false },
    { name: "Enterprise", price: 96000, devices: "6-20 Devices per year", isCustom: false },
    { name: "Institutional", price: 200000, devices: "21-50 Devices per year", isCustom: false },
    { name: "Corporate", price: 350000, devices: "51-100 Devices per year", isCustom: false },
    { name: "Custom", price: 0, devices: ">100 Devices per year", isCustom: true },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col h-full rounded-lg border border-gray-200 shadow-sm p-6 text-center hover:shadow-lg transition-shadow"
          >
            <div className="flex-grow">
              <h3 className="font-bold text-xl mb-2 text-black">{plan.name}</h3>

              {plan.isCustom ? (
                <a
                  href="mailto:support@vulas.com"
                  className="text-sm font-medium text-blue-600 underline"
                >
                  Contact Support
                </a>
              ) : (
                <p className="text-2xl font-semibold mb-2 text-black">
                  {formatCurrency(plan.price, currency)}
                </p>
              )}

              <p className="text-gray-600 mb-4 font-bold">{plan.devices}</p>
            </div>
            <button className="bg-[#0052B4] text-white font-bold px-6 py-3 rounded-full hover:bg-[#00002A] transition-colors mt-auto">
              {plan.isCustom ? "Request Plan" : "Buy now"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;


