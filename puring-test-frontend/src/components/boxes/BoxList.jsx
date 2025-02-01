import PropTypes from 'prop-types';
import BlueBox from './BlueBox';

const BoxList = ({ onDecrease }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      <BlueBox 
        prompt="Write a riddle with this thing as the answer."
        buttonText="[FREE]"
        onGenerate={() => onDecrease(0)}
      />
      <BlueBox 
        prompt="Imagine a steampunk version of this thing."
        buttonText="GENERATE [-4 🧶]"
        onGenerate={() => onDecrease(4)}
      />
      <BlueBox 
        prompt="Draw this thing as a cat."
        buttonText="GENERATE [-6 🧶]"
        onGenerate={() => onDecrease(6)}
      />
    </div>
  );
};

BoxList.propTypes = {
  onDecrease: PropTypes.func.isRequired
};

export default BoxList; 