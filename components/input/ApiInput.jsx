"use client";

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
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-between p-4 bg-white border rounded-md shadow-md md:gap-2 dark:bg-gray-800 md:flex-row dark:border-gray-600 dark:shadow-gray-700">
      <label htmlFor="apiUrl" className="block mb-2 font-bold text-gray-700 dark:text-gray-300 md:flex-shrink-0 md:mb-0">
        API URL
      </label>
      <input
        id="apiUrl"
        className="w-full p-2 mb-2 bg-gray-200 border rounded-md md:mb-0 focus:outline-none focus:shadow-outline-blue dark:bg-gray-700 dark:border-gray-500 dark:text-white md:w-fit md:flex-grow"
        type="text"
        value={apiUrl}
        onChange={handleInputChange}
        placeholder="Enter API URL"
      />
      <div className="flex w-full gap-2 md:w-fit">
        <button
          className="w-1/2 px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue dark:bg-blue-700 dark:hover:bg-blue-500 md:w-fit"
          type="submit"
        >
          Fetch Data
        </button>
        <button
          className="w-1/2 px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline-green dark:bg-green-700 dark:hover:bg-green-500 md:w-fit"
          type="button"
          onClick={handleExampleDataClick}
        >
          Example Data
        </button>
      </div>
    </form>
  );
};

export default ApiInput;
