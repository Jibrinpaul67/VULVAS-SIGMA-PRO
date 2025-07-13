"use client";

import { useState } from 'react';
import Button from '@/app/components/ui/button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    product: '',
    attachment: null,
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div id="contact-form" className="max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">Support Request Form</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              className="w-full p-3 border border-gray-300 rounded-md text-black"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-md text-black"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="product" className="block text-gray-700 mb-2">Product/Service in use</label>
            <input
              type="text"
              id="product"
              name="product"
              placeholder="Enter product/service name"
              className="w-full p-3 border border-gray-300 rounded-md text-black"
              value={formData.product}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="attachment" className="block text-gray-700 mb-2">Attachment</label>
            <input
              type="file"
              id="attachment"
              name="attachment"
              className="w-full p-3 border border-gray-300 rounded-md"
              onChange={handleFileChange}
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="description" className="block text-gray-700 mb-2">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter your issue"
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-md text-black"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        
        <Button 
          type="submit"
          className="bg-[#00003B] text-white px-6 py-3 rounded-full hover:bg-[#00002A]"
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;