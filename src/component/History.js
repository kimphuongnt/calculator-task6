import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const History = () => {
  //useSelector get history from state
  const history = useSelector((state) => state.calculator.history);

  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-100 rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Calculation History</h2>
      <ul className="space-y-2">
        {history.map((item, index) => (
          <li key={index} className="bg-white p-2 rounded shadow">
            {item}
          </li>
        ))}
      </ul>
      <Link to="/" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
        Back to Calculator
      </Link>
    </div>
  );
};

export default History;