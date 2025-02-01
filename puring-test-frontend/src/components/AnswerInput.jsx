import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { Edit3 } from 'lucide-react'

/**
 * A highly-stylized input field with framer-motion animations,
 * icons from lucide-react, and functionality to submit/clear.
 *
 * Props:
 *   - value: current text value
 *   - onChange: function to handle input changes
 *   - onSubmit: function to handle the submit action
 *   - onClear: function to handle clearing the input
 */
const AnswerInput = ({ value, onChange, onSubmit, onClear }) => {
  return (
      <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="flex flex-col items-center w-full max-w-sm mt-8 mx-auto gap-4"
      >
        {/* Label + Icon */}
        <div className="flex items-center space-x-2">
          <Edit3 className="text-gray-600 w-5 h-5" />
          <label htmlFor="answer" className="text-gray-800 font-semibold text-lg">
            Your Answer
          </label>
        </div>

        {/* Animated Input */}
        <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            id="answer"
            value={value}
            onChange={onChange}
            placeholder="Type your answer..."
            className="
          w-full px-4 py-3
          rounded-lg border border-gray-300
          bg-white shadow-sm
          focus:outline-none focus:ring-2 focus:ring-purple-500
          transition-all duration-200
          text-gray-800 placeholder-gray-400
        "
        />

        {/* Submit / Clear Buttons */}
        <div className="flex gap-4">
          <button
              onClick={onSubmit}
              className="
            px-6 py-2 bg-purple-500 text-white font-semibold rounded-lg
            shadow-md hover:bg-purple-600 transition-colors
          "
          >
            Submit
          </button>
          <button
              onClick={onClear}
              className="
            px-6 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg
            shadow-md hover:bg-gray-300 transition-colors
          "
          >
            Clear
          </button>
        </div>
      </motion.div>
  )
}

AnswerInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired
}

export default AnswerInput
