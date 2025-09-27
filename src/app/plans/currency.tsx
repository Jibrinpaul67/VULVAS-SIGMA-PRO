const currencyData = {
  NGN: { symbol: "₦", rate: 1 },    
  USD: { symbol: "$", rate: 0.00065 },
  GBP: { symbol: "£", rate: 0.00052 },
  EUR: { symbol: "€", rate: 0.00061 },
  ZAR: { symbol: "R", rate: 0.012 },
};

export type CurrencyCode = keyof typeof currencyData;
export default currencyData;
