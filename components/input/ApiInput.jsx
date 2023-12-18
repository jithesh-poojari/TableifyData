"use client";

import { useState } from "react";
import ActionButton from "./ActionBtn";
import { FaChevronDown } from "react-icons/fa";

const ApiInput = ({ onSubmit }) => {
  const [inputType, setInputType] = useState("api url"); // Default to API URL
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    if (e.target.id == "apiText") {
      e.target.style.height = "auto";
      e.target.style.height = `${e.target.scrollHeight}px`;
      if (e.target.value == "") {
        e.target.style.height = "42px";
      }
    }
    setInput(e.target.value);
  };

  const handleInputTypeChange = (val) => {
    setInput("");
    setInputType(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputType, input);
  };

  const handleExampleDataClick = () => {
    const exampleInput = "https://jsonplaceholder.typicode.com/users";
    setInputType("api url");
    setInput(exampleInput);
    onSubmit("api url", exampleInput);
  };

  return (
    <form className="flex flex-col items-center justify-between p-2 bg-gray-100 border rounded-md md:p-4 md:gap-2 dark:bg-gray-800 md:flex-row dark:border-gray-600 ">
      <div className="relative w-full mb-2 text-sm font-semibold md: md:max-w-min md:text-base md:mb-0 dark:bg-gray-700 dark:border-gray-500 dark:text-white md:w-fit md:flex-grow">
        <div className="flex min-h-[42px] gap-2 p-2 justify-center items-center w-full text-center bg-white border-2 rounded-md cursor-pointer ite peer whitespace-nowrap dark:text-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 dark:border-gray-700">
          {inputType.toUpperCase()} <span><FaChevronDown /></span>
        </div>
        <div className="absolute left-0 hidden peer-hover:block hover:block">
          <div className="mt-2 overflow-hidden bg-white divide-y-2 rounded-md shadow-md dark:divide-gray-600">
            <div
              className="px-4 py-2 text-gray-800 cursor-pointer dark:text-white hover:bg-gray-100 whitespace-nowrap dark:bg-gray-800 dark:hover:bg-gray-700"
              onClick={() => handleInputTypeChange("api url")}
            >
              API URL
            </div>
            <div
              className="px-4 py-2 text-gray-800 cursor-pointer dark:text-white hover:bg-gray-100 whitespace-nowrap dark:bg-gray-800 dark:hover:bg-gray-700"
              onClick={() => handleInputTypeChange("json text")}
            >
              JSON Text
            </div>
            <div
              className="px-4 py-2 text-gray-800 cursor-pointer dark:text-white hover:bg-gray-100 whitespace-nowrap dark:bg-gray-800 dark:hover:bg-gray-700"
              onClick={() => handleInputTypeChange("json file")}
            >
              JSON File
            </div>
          </div>
        </div>
      </div>

      {inputType === "api url" && (
        <input
          id="input"
          className="w-full h-[42px] p-2 text-sm bg-gray-200 border rounded-md md:text-base dark:bg-gray-700 dark:text-white md:w-fit md:flex-grow hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-gray-300 dark:focus:outline-gray-600 dark:border-gray-600"
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter API URL"
        />
      )}
      {inputType === "json text" && (
        <textarea
          id="apiText"
          className="w-full h-[42px] p-2 text-sm bg-gray-200 border rounded-md max-h-64 min-h-[42px] md:text-base  dark:bg-gray-700  dark:text-white md:w-fit md:flex-grow hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-gray-300 dark:focus:outline-gray-600 dark:border-gray-600"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter JSON Text"
        />
      )}
      {inputType === "json file" && (
        <input
          id="apiFile"
          className="w-full h-[42px] p-2 text-sm bg-gray-200 border rounded-md md:text-base  dark:bg-gray-700  dark:text-white md:w-fit md:flex-grow hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-gray-300 dark:focus:outline-gray-600 dark:border-gray-600"
          type="file"
          onChange={(e) => setInput(e.target.files[0])}
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
