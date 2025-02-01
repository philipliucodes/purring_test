import PropTypes from 'prop-types';

const GreyBox = ({ 
  prompt, 
  generatedText,
  imageUrl,
}) => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-col items-center justify-between p-6 w-full aspect-square rounded-xl bg-gray-200 text-gray-900 text-center shadow-xl">
        <div className="flex-grow flex items-center w-full">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt="Generated content"
              className="w-full h-full object-contain rounded-lg"
            />
          ) : (
            <p className="text-md whitespace-pre-line w-full">
              {generatedText || "And blood-black nothingness began to spin... A system of cells interlinked within cells interlinked within cells interlinked within one stem... And dreadfully distinct against the dark, a tall white fountain played."}
            </p>
          )}
        </div>
      </div>
      <div className="h-8 flex items-center justify-center">
        <p className="text-sm text-gray-600">{prompt}</p>
      </div>
    </div>
  );
};

GreyBox.propTypes = {
  prompt: PropTypes.string.isRequired,
  generatedText: PropTypes.string,
  imageUrl: PropTypes.string
};

export default GreyBox; 