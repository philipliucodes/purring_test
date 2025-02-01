// App.js
import React from "react";
import BlueBox from "./components/BlueBox";

const App = () => {
  const challenges = [
    {
      prompt: "Write a riddle with this thing as the answer.",
      buttonText: "GENERATE [FREE]"
    },
    {
      prompt: "Imagine a steampunk version of this thing.",
      buttonText: "GENERATE [+6]"
    },
    {
      prompt: "Draw this thing as a cat.",
      buttonText: "GENERATE [+8]"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header Section */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-2xl font-bold text-gray-800">MORE TED GAMES</h1>
          <div className="bg-blue-100 px-3 py-1 rounded-md">
            <span className="text-sm font-semibold text-blue-800">REWARD: 35</span>
          </div>
        </div>
        <div className="bg-gray-200 px-3 py-1 rounded-md inline-block">
          <span className="text-sm font-medium text-gray-700">Category: Thing</span>
        </div>
      </div>

      {/* Challenges Grid */}
      <div className="max-w-2xl mx-auto space-y-6">
        {challenges.map((challenge, index) => (
          <BlueBox
            key={index}
            prompt={challenge.prompt}
            buttonText={challenge.buttonText}
            onGenerate={() => console.log("Generating:", challenge.buttonText)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;