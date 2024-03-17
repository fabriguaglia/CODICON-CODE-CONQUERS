import React from 'react';

const SelectorComponent = ({ options, selectedOption, onChange }) => {
  return (
    <select
      value={selectedOption}
      onChange={(e) => onChange(e.target.value)}
      className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectorComponent;