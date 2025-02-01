import PropTypes from 'prop-types';

const GreyBox = ({ prompt, generatedText = "And blood-black nothingness began to spin... A system of cells interlinked within cells interlinked within cells interlinked within one stem... And dreadfully distinct against the dark, a tall white fountain played." }) => {
  return (
    <div className="flex flex-col items-center justify-between p-6 w-full aspect-square rounded-xl bg-gray-200 text-gray-900 text-center shadow-xl">
      <div className="flex-grow flex items-center">
        <div className="w-full">
          <p className="text-lg font-semibold mb-4">{prompt}</p>
          <p className="text-md whitespace-pre-line">{generatedText}</p>
        </div>
      </div>
    </div>
  );
};

GreyBox.propTypes = {
  prompt: PropTypes.string.isRequired,
  generatedText: PropTypes.string
};

export default GreyBox; 