"use client"

import { useState } from 'react';

const ApiInput = ({ onSubmit }) => {
  const [apiUrl, setApiUrl] = useState('');

  const handleInputChange = (e) => {
    setApiUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(apiUrl);
  };

  const handleExampleDataClick = () => {
    const exampleApiUrl = 'https://jsonplaceholder.typicode.com/users';
    setApiUrl(exampleApiUrl);
    onSubmit(exampleApiUrl);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 p-4 border rounded-md shadow-md">
      <label htmlFor="apiUrl" className="flex-shrink-0 block text-sm font-bold text-gray-700">
        API URL:
      </label>
      <input
        id="apiUrl"
        className="flex-grow p-2 border rounded-md focus:outline-none focus:shadow-outline-blue"
        type="text"
        value={apiUrl}
        onChange={handleInputChange}
        placeholder="Enter API URL"
      />
      <button
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
        type="submit"
      >
        Fetch Data
      </button>
      <button
        className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline-green"
        type="button"
        onClick={handleExampleDataClick}
      >
        Example Data
      </button>
    </form>
  );
};

export default ApiInput;
