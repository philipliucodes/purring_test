import React from 'react'
import { motion } from 'framer-motion'
import { Edit3 } from 'lucide-react'

/**
 * A highly-stylized input field with framer-motion animations and icon from lucide-react.
 *
 * Props:
 *   - value: current text value
 *   - onChange: function to handle input changes
 */
const AnswerInput = ({ value, onChange }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="flex flex-col items-center w-full max-w-sm mt-8 mx-auto"
        >
            <div className="flex items-center space-x-2 mb-2">
                <Edit3 className="text-gray-600 w-5 h-5" />
                <label htmlFor="answer" className="text-gray-800 font-semibold text-lg">
                    Your Answer
                </label>
            </div>

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
        </motion.div>
    )
}

export default AnswerInput