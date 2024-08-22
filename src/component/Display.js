import React from 'react';

//value is display from state
const Display = ({ value }) => {
  return (
    <div className="w-full p-4 text-right text-2xl sm:text-3xl md:text-4xl bg-gray-800 text-white rounded-t-lg overflow-x-auto whitespace-nowrap">
      {value}
    </div>
  );
};

export default Display;