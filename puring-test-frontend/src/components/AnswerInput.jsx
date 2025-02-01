import React from "react";

const AnswerInput = ({ value, onChange }) => {
  return (
    <div className="w-64 mt-4">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Type your answer..."
        className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-md 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 
                 transition-colors text-black placeholder-gray-400"
      />
    </div>
  );
};

export default AnswerInput;