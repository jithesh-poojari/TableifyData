import React from "react";

const ActionButton = ({ label, color, onClick }) => {
  const btnStyle = color === "blue" ? " bg-blue-600  hover:bg-blue-700 focus:shadow-outline-blue dark:bg-blue-700 dark:hover:bg-blue-500 " : "bg-green-500 hover:bg-green-700  focus:shadow-outline-green dark:bg-green-700 dark:hover:bg-green-500"
  return (
    <button
      className={`w-1/2 px-4 py-2  font-bold text-sm md:text-base text-white  rounded  focus:outline-none md:w-fit ${btnStyle}`}
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ActionButton;
