import React from 'react';
import { Pacifico, Roboto } from "next/font/google";

export default function CheckboxGroup({ options }) {
  return (
    <div className="grid grid-cols-2 gap-3">
    {options.map((option, index) => (
      <label key={index} className="flex items-center space-x-2 cursor-pointer">
        <input
          type="checkbox"
          name={option.value}
          className="appearance-none w-5 h-5 border border-gray-400 rounded-md checked:bg-black checked:border-black"
        />
        <span className="select-none">{option.label}</span>
      </label>
    ))}
  </div>
  )
}
