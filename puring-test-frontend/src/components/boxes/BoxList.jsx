import { useState } from 'react';
import PropTypes from 'prop-types';
import BlueBox from './BlueBox';
import GreyBox from './GreyBox';

const BoxList = ({ onDecrease }) => {
  const [generatedBoxes, setGeneratedBoxes] = useState({
    0: false,
    1: false,
    2: false
  });

  const handleGenerate = (index, deduction) => {
    setGeneratedBoxes(prev => ({
      ...prev,
      [index]: true
    }));
    onDecrease(deduction);
  };

  const boxes = [
    {
      prompt: "Write a riddle with this thing as the answer.",
      buttonText: "[FREE]",
      deduction: 0
    },
    {
      prompt: "Imagine a steampunk version of this thing.",
      buttonText: "GENERATE [-4 🧶]",
      deduction: 4
    },
    {
      prompt: "Draw this thing as a cat.",
      buttonText: "GENERATE [-6 🧶]",
      deduction: 6
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      {boxes.map((box, index) => (
        generatedBoxes[index] ? (
          <GreyBox 
            key={index}
            prompt={box.prompt}
          />
        ) : (
          <BlueBox 
            key={index}
            prompt={box.prompt}
            buttonText={box.buttonText}
            onGenerate={() => handleGenerate(index, box.deduction)}
          />
        )
      ))}
    </div>
  );
};

BoxList.propTypes = {
  onDecrease: PropTypes.func.isRequired
};

export default BoxList; 