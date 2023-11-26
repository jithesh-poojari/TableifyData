"use client";

import { useState } from "react";
import ActionButton from "./ActionBtn";

const ApiInput = ({ onSubmit }) => {
  const [apiUrl, setApiUrl] = useState("");

  const handleInputChange = (e) => {
    setApiUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    onSubmit(apiUrl);
  };

  const handleExampleDataClick = () => {
    const exampleApiUrl = "https://jsonplaceholder.typicode.com/users";
    setApiUrl(exampleApiUrl);
    onSubmit(exampleApiUrl);
  };

  return (
    <form className="flex flex-col items-center justify-between p-2 bg-white border rounded-md shadow-md md:p-4 md:gap-2 dark:bg-gray-800 md:flex-row dark:border-gray-600 dark:shadow-gray-700">
      <label
        htmlFor="apiUrl"
        className="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300 md:flex-shrink-0 md:mb-0 md:text-base"
      >
        API URL
      </label>
      <input
        id="apiUrl"
        className="w-full p-2 mb-2 text-sm bg-gray-200 border rounded-md md:text-base md:mb-0 focus:outline-none focus:shadow-outline-blue dark:bg-gray-700 dark:border-gray-500 dark:text-white md:w-fit md:flex-grow focus:border-blue-500"
        type="text"
        value={apiUrl}
        onChange={handleInputChange}
        placeholder="Enter API URL"
      />
      <div className="flex w-full gap-2 md:w-fit">
        <ActionButton label="Fetch Data" color="blue" onClick={handleSubmit} />
        <ActionButton
          label="Example Data"
          color="green"
          onClick={handleExampleDataClick}
        />
      </div>
    </form>
  );
};

export default ApiInput;
