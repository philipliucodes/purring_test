import React from "react";
import catImage from "../assets/images/purrfessor.png"; // Adjust path as needed

const CatButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="Cat button"
    >
      <img 
        src={catImage} 
        alt="Custom cat button"
        className="w-12 h-12 rounded-full object-cover"
      />
    </button>
  );
};

export default CatButton;