import React from 'react';

export default function InputField({ label }: {
    label: string;
  }) {
  return (
    <div>
        <label className="block text-sm font-normal mb-1">{label}</label>
        <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
        <select className="p-2 h-10 border border-gray-300 rounded-lg">
            <option>US</option>
            <option>UK</option>
            <option>CA</option>
        </select>
            <input type="text" placeholder="+1 (555) 000-0000" className="flex-1 p-2 h-10 border border-gray-300 rounded-lg" />
        </div>
    </div>
    </div>
  )
}
