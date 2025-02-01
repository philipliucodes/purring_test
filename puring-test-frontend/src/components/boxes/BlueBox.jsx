// import React from 'react'
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
        <div className="h-[calc(100%+2rem)] flex flex-col">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                whileHover={{ scale: 1.03 }}
                className="flex-1 flex flex-col items-center justify-between p-6 w-full aspect-square rounded-xl bg-blue-600 text-white text-center shadow-xl"
            >
                <motion.div
                    initial={{ y: 10 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="flex-grow flex items-center justify-center w-full"
                >
                    <p className="text-lg font-semibold overflow-hidden text-ellipsis leading-tight">
                        {prompt}
                    </p>
                </motion.div>
                <div className="mt-4">
                    <motion.button
                        onClick={onGenerate}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        className={`flex items-center justify-center w-full py-3 text-sm font-bold rounded-lg shadow-md uppercase transition-colors text-black ${
                            buttonText.includes("[FREE]") 
                                ? "bg-blue-500 hover:bg-blue-400" 
                                : "bg-amber-500 hover:bg-amber-400"
                        }`}
                    >
                        <Sparkle className="w-5 h-5 mr-2" />
                        {buttonText}
                    </motion.button>
                </div>
            </motion.div>
            <div className="h-8"></div>
        </div>
    )
}

BlueBox.propTypes = {
    prompt: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    onGenerate: PropTypes.func.isRequired
}

export default BlueBox
