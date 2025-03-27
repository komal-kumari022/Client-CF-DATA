import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button 
      className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
