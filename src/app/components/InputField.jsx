import React from 'react'

export default function InputField({ label, name, type, placeholder }) {
  return (
    <div>
    <label className="block text-sm font-normal mb-1">{label}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full p-2 h-10 border border-gray-300 rounded-lg"
    />
  </div>
  )
}
