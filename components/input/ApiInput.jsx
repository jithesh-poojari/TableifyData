"use client";

import { useState } from "react";
import ActionButton from "./ActionBtn";

const ApiInput = ({ onSubmit }) => {
  const [apiType, setApiType] = useState("api url"); // Default to API URL
  const [apiUrl, setApiUrl] = useState("");

  const handleInputChange = (e) => {
    setApiUrl(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(apiType, apiUrl);
  };

  const handleExampleDataClick = () => {
    const exampleApiUrl = "https://jsonplaceholder.typicode.com/users";
    setApiType("api url");
    setApiUrl(exampleApiUrl);
    onSubmit("api url", exampleApiUrl);
  };

  return (
    <form className="flex flex-col items-center justify-between p-2 bg-white border rounded-md shadow-md md:p-4 md:gap-2 dark:bg-gray-800 md:flex-row dark:border-gray-600 dark:shadow-gray-700">
      <div className="relative w-full mb-2 text-sm font-semibold md: md:max-w-min md:text-base md:mb-0 dark:bg-gray-700 dark:border-gray-500 dark:text-white md:w-fit md:flex-grow ">
        <div className="w-full p-2 text-center bg-white border-2 rounded-md cursor-pointer peer whitespace-nowrap">
          {apiType.toUpperCase()}
        </div>
        <div className="absolute left-0 hidden peer-hover:block hover:block">
          <div className="mt-2 bg-white divide-y-2 rounded-md shadow-md ">
            <div
              className="px-4 py-2 text-gray-800 cursor-pointer dark:text-white hover:bg-gray-100 hover:text-gray-900 whitespace-nowrap"
              onClick={() => setApiType("api url")}
            >
              API URL
            </div>
            <div
              className="px-4 py-2 text-gray-800 cursor-pointer dark:text-white hover:bg-gray-100 hover:text-gray-900 whitespace-nowrap"
              onClick={() => setApiType("json text")}
            >
              JSON Text
            </div>
            <div
              className="px-4 py-2 text-gray-800 cursor-pointer dark:text-white hover:bg-gray-100 hover:text-gray-900 whitespace-nowrap"
              onClick={() => setApiType("json file")}
            >
              JSON File
            </div>
          </div>
        </div>
      </div>

      {apiType === "api url" && (
        <input
          id="apiUrl"
          className="w-full p-2 text-sm bg-gray-200 border rounded-md md:text-base focus:outline-none focus:shadow-outline-blue dark:bg-gray-700 dark:border-gray-500 dark:text-white md:w-fit md:flex-grow focus:border-blue-500"
          type="text"
          value={apiUrl}
          onChange={handleInputChange}
          placeholder="Enter API URL"
        />
      )}
      {apiType === "json text" && (
        <textarea
          id="apiText"
          className="w-full h-[42px] p-2 text-sm bg-gray-200 border rounded-md max-h-64 min-h-[42px] md:text-base focus:outline-none focus:shadow-outline-blue dark:bg-gray-700 dark:border-gray-500 dark:text-white md:w-fit md:flex-grow focus:border-blue-500"
          value={apiUrl}
          onChange={handleInputChange}
          placeholder="Enter JSON Text"
        />
      )}
      {apiType === "json file" && (
        <input
          id="apiFile"
          className="w-full h-[42px] p-2 text-sm bg-gray-200 border rounded-md md:text-base focus:outline-none focus:shadow-outline-blue dark:bg-gray-700 dark:border-gray-500 dark:text-white md:w-fit md:flex-grow focus:border-blue-500"
          type="file"
          onChange={(e) => setApiUrl(e.target.files[0])}
        />
      )}
      <div className="flex w-full gap-2 mt-2 md:w-fit md:mt-0">
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
