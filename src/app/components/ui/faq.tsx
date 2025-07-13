"use client";

import { useState } from 'react';

const faqs = [
  {
    question: "What is Vulvas VPN?",
    answer: "Vulvas VPN is a secure and private virtual private network that encrypts your internet connection, protecting your data and ensuring online anonymity."
  },
  {
    question: "How does Vulvas VPN protect my privacy?",
    answer: "Our VPN masks your IP address and encrypts your internet traffic, preventing hackers, ISPs, and third parties from tracking your online activities."
  },
  {
    question: "Can I use Vulvas VPN on multiple devices?",
    answer: "Yes! Vulvas VPN supports multiple devices, including Windows, macOS, iOS, and Android. You can secure all your devices with a single subscription."
  },
  {
    question: "Does Vulvas VPN slow down my internet speed?",
    answer: "While encryption can slightly impact speed, we use high-speed servers worldwide to ensure a smooth and fast browsing experience."
  },
  {
    question: "Do you keep logs of my online activities?",
    answer: "No, we follow a strict no-logs policy. Your online activity remains completely private and untraceable."
  }
];

const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">Frequently Asked Questions</h2>
      <div className="space-y-3 sm:space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-100 p-3 sm:p-4 rounded-lg shadow-md">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left font-semibold text-base sm:text-lg text-gray-800 flex justify-between items-center"
            >
              <span className="pr-2">{faq.question}</span>
              <span className="text-xl">{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && <p className="mt-2 text-sm sm:text-base text-gray-600">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;