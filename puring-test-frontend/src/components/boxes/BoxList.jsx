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

  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    const getGameData = async () => {
      try {
        console.log("fetching game data");
        const response = await fetch('http://127.0.0.1:5000/api/new_game');
        const data = await response.json();
        console.log("Received game data:", data);
        setGameData(data);  // Set the actual data, not the Promise
      } catch (error) {
        console.error("Error fetching game data:", error);
      }
    };
    
    getGameData();  // Call the function directly
  }, []);

  useEffect(() => {
    console.log(gameData);
  }, [gameData]);

  const handleGenerate = (index, deduction) => {
    // Simulated content - replace with actual API response later
    const content = index === 2 ? {
      imageUrl: ''  // Example image URL
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
      {gameData.length>0 && gameData.map((game, index) => {
        const box = boxes[index]; 
        return generatedContent[index] ? (
          <GreyBox 
            key={index}
            prompt={game.prompt}
            imageUrl={game.clue_type === "image" ? game.clue : null}
            generatedText={game.clue_type === "text" ? game.clue : null}
          />
        ) : (
          <BlueBox 
            key={index}
            prompt={game.prompt}
            buttonText={box.buttonText}
            onGenerate={() => handleGenerate(index, box.deduction)}
          />
        )
      })}
    </div>
  );
};

BoxList.propTypes = {
  onDecrease: PropTypes.func.isRequired
};

export default BoxList; 