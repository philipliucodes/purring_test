import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { Sparkle } from 'lucide-react'

/**
 * A dynamic card with a bold prompt and a stylized button for generating content.
 *
 * Props:
 *   - prompt: string
 *   - buttonText: string
 *   - onGenerate: function
 */
const BlueBox = ({ prompt, buttonText, onGenerate }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            whileHover={{ scale: 1.03 }}
            className="
        flex flex-col items-center justify-between 
        p-6 w-full 
        rounded-xl 
        shadow-xl 
        bg-gradient-to-br from-blue-500 to-blue-700 
        text-white text-center 
        overflow-hidden
      "
        >
            <motion.div
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
            >
                <p className="text-md font-semibold mb-4 leading-tight">
                    {prompt}
                </p>
            </motion.div>

            <motion.button
                onClick={onGenerate}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className={`
          flex items-center justify-center 
          w-full py-3 mt-2 
          text-sm font-bold uppercase 
          rounded-lg 
          shadow-md 
          transition-colors duration-200 
          ${
                    buttonText.includes('[FREE]')
                        ? 'bg-blue-200 hover:bg-blue-300 text-blue-200'
                        : 'bg-amber-400 hover:bg-amber-300 text-white'
                }
        `}
            >
                <Sparkle className="w-5 h-5 mr-2" />
                {buttonText}
            </motion.button>
        </motion.div>
    )
}

BlueBox.propTypes = {
    prompt: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    onGenerate: PropTypes.func.isRequired,
}

export default BlueBox
