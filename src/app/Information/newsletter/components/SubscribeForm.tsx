"use client";

import { useState } from 'react';
import Button from '@/app/components/ui/button';

const SubscribeForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const [showToast, setShowToast] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //log fprm submission.
    console.log(formData);
    setShowToast(true);
    // Auto-hide after 5 seconds
    setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <div className="relative max-w-2xl mx-auto p-8 rounded-lg">
      {/* ✅ Toast Notification */}
      {showToast && (
        <div className="fixed top-[15%] right-5 bg-[#0052B4] text-white px-4 py-2 rounded-lg shadow-lg animate-slide-in">
          You’ve Subscribed!
        </div>
      )}

      <h2 className="text-3xl font-bold mb-6 text-center text-black">Subscribe Now</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="firstName" className="block text-gray-700 mb-2 font-medium">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0052B4] focus:border-transparent text-black"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-gray-700 mb-2 font-medium">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0052B4] focus:border-transparent text-black"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0052B4] focus:border-transparent text-black"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <Button 
          type="submit"
          className="bg-[#0052B4] text-white px-6 py-3 rounded-lg hover:bg-[#003D82] w-full text-lg font-medium transition-colors"
        >
          Subscribe
        </Button>
      </form>

      <p className="text-center text-gray-600 mt-6">
        Stay connected with VULAS for the latest news, updates, and thought leadership on cybersecurity.
      </p>
    </div>
  );
};

export default SubscribeForm;
