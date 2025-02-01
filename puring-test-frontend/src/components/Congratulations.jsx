import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import PropTypes from 'prop-types';

const Congratulations = ({ onClose }) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={false}
        numberOfPieces={200}
      />
      <div className="bg-white rounded-xl p-8 text-center shadow-2xl">
        <h2 className="text-3xl font-bold mb-4">Congratulations! 🎉</h2>
        <p className="text-xl mb-6">You got the correct answer!</p>
        <button
          onClick={onClose}
          className="px-6 py-2 bg-blue-500 text-black font-semibold rounded-lg 
                   shadow-md hover:bg-blue-600 transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

Congratulations.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Congratulations; 