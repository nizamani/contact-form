'use client';
import React, { useState } from 'react';
import InputField from './InputField';
import PhoneField from './PhoneField';
import CheckboxGroup from './CheckboxGroup';

// FormSection component
// Form section with input fields and a submit button
export default function FormSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    // Get form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Send data to the server
    const response = await fetch('/api/match', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setSuccess(true);
    }
    setLoading(false);
  };

  return (
    // Left Side: Form
    <div className="w-full lg:w-[45%] px-6 py-6 flex flex-col justify-start" onSubmit={handleSubmit}>
        <div className="text-lg font-bold mb-8">🔳 Remote Devs</div>
        <div className="px-10 md:px-20 py-10">
        <h1 className="text-xl font-bold mb-9">
            Get matched with the perfect freelancer for your design project
        </h1>
        <form className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField label="First Name" name="firstname" type="text" placeholder="First name" />
              <InputField label="Last Name" name="lastname" type="text" placeholder="Last name" />
              </div>
              <InputField label="Email" type="email" name="email" placeholder="Your email address" />
              <PhoneField label="Phone Number" />
            <div>
            <label className="block text-sm font-normal mb-1">Comments</label>
            <textarea
                name="comments"
                placeholder="Additional details..."
                className="w-full p-2 h-20 border border-gray-300 rounded-lg"
            ></textarea>
            </div>
            <div>
            <label className="block text-sm font-normal mb-2">Services</label>
            <CheckboxGroup
                options={
                  [
                    {label: "Website design", value: "website_design"},
                    {label: "Content creation", value: "content_creation"},
                    {label: "UI/UX design", value: "ui_ux_design"},
                    {label: "Strategy & research", value: "strategy_research"},
                    {label: "App design", value: "app_design"},
                    {label: "Other", value: "other"},
                  ]
                }
            />
            </div>
            <button
            type="submit"
            className={`w-full mt-4 py-3 rounded-lg flex items-center justify-center gap-2 ${
              loading ? 'bg-gray-500' : success ? 'bg-green-800' : 'bg-black'
            } text-white`}
            disabled={loading}
          >
            {loading ? 'Loading...' : success ? 'Matched' : 'Get matched'}
          </button>
        </form>
        </div>
    </div>
  )
}
