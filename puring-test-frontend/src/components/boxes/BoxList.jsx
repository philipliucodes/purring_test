import { useState , useEffect } from 'react';
import PropTypes from 'prop-types';
import BlueBox from './BlueBox';
import GreyBox from './GreyBox';

const BoxList = ({ onDecrease }) => {
  const [generatedContent, setGeneratedContent] = useState({
    0: null,
    1: null,
    2: null
  });

  useEffect(() => {
    const getGameData = async () => {
      const game_data = await fetch('http://localhost:5000/new_game')
      const game_data_json = await game_data.json()
      console.log(game_data_json)
      return game_data_json;
    }
    const game_data = getGameData();
    console.log(game_data);
  }, []);

  const handleGenerate = (index, deduction) => {
    // Simulated content - replace with actual API response later
    const content = index === 2 ? {
      imageUrl: 'https://example.com/image.jpg'  // Example image URL
    } : {
      generatedText: "And blood-black nothingness began to spin... A system of cells interlinked within cells interlinked within cells interlinked within one stem... And dreadfully distinct against the dark, a tall white fountain played."
    };

    setGeneratedContent(prev => ({
      ...prev,
      [index]: content
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
        generatedContent[index] ? (
          <GreyBox 
            key={index}
            prompt={box.prompt}
            {...generatedContent[index]}
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