import React from 'react';

export default function CheckboxGroup({ options }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {options.map((option, index) => (
        <label key={index} className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            name={option.value}
            className="flex-shrink-0 w-5 h-5 border border-gray-300 rounded-md bg-white cursor-pointer checked:bg-black checked:border-black"
          />
          <span className="select-none text-sm">{option.label}</span>
        </label>
      ))}
    </div>
  );
}
