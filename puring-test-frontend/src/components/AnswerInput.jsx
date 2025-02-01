import PropTypes from 'prop-types';

const AnswerInput = ({ value, onChange, onSubmit, onClear }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-64">
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
      <div className="flex gap-4">
        <button
          onClick={onSubmit}
          className="px-6 py-2 bg-blue-500 text-black font-semibold rounded-lg 
                   shadow-md hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
        <button
          onClick={onClear}
          className="px-6 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg 
                   shadow-md hover:bg-gray-300 transition-colors"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

AnswerInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired
};

export default AnswerInput;