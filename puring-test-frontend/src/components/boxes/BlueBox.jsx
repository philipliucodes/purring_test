// components/BlueBox.js
//import React from "react";
import PropTypes from 'prop-types';

const BlueBox = ({ prompt, buttonText, onGenerate }) => {
  return (
    <div className="flex flex-col items-center justify-between p-6 w-full aspect-square rounded-xl bg-blue-600 text-white text-center shadow-xl">
      <div className="flex-grow flex items-center">
        <p className="text-lg font-semibold overflow-hidden text-ellipsis leading-tight">
          {prompt}
        </p>
      </div>
      <button
        onClick={onGenerate}
        className={`w-full py-3 text-sm font-bold rounded-lg shadow-md uppercase transition-colors text-black ${
          buttonText.includes("[FREE]") 
            ? "bg-blue-500 hover:bg-blue-400" 
            : "bg-amber-500 hover:bg-amber-400"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};

BlueBox.propTypes = {
  prompt: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onGenerate: PropTypes.func.isRequired
};

export default BlueBox;