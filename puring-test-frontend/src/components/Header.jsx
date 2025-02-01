import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { HelpCircle, Info, Volleyball } from 'lucide-react'

/**
 * A modern, stylized header component with centered reward info and vibrant styling.
 *
 * Props:
 *   - title: string (default: 'PURRING TEST')
 *   - rewardPoints: number
 */
const Header = ({ title = 'PURRING TEST', rewardPoints }) => {
    return (
        <motion.header
            initial={{ y: -50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="
        relative w-full px-6 py-4 flex items-center justify-between
        bg-gradient-to-r from-purple-600 via-pink-500 to-red-400
        text-white shadow-lg
        ring-1 ring-white/10 backdrop-blur-md
        rounded-b-xl
      "
        >
            {/* Left Title */}
            <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-2xl font-bold tracking-wide drop-shadow-[0_0_5px_rgba(255,255,255,0.7)]"
            >
                {title}
            </motion.div>

            {/* Center Reward Info */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-3">
        <span className="text-lg font-semibold uppercase tracking-wider drop-shadow-sm">
          Reward:
        </span>
                <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 0.4,
                        repeat: Infinity,
                        repeatType: 'mirror',
                        ease: 'easeInOut'
                    }}
                    className="
            flex items-center space-x-2
            px-3 py-1 rounded-full
            bg-white/20
            shadow-md
            hover:bg-white/30 transition-colors
          "
                >
                    <span className="text-lg font-bold drop-shadow-sm">{rewardPoints}</span>
                    <Volleyball className="w-5 h-5" />
                </motion.div>
            </div>

            {/* Right Buttons */}
            <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex space-x-3"
            >
                <button
                    className="
            w-9 h-9 flex items-center justify-center
            bg-white/20 rounded-full
            hover:bg-white/30 transition-colors
            text-white
          "
                    aria-label="help"
                    // onClick={handleHelp} // Add your handler if needed
                >
                    <HelpCircle className="w-5 h-5" />
                </button>
                <button
                    className="
            w-9 h-9 flex items-center justify-center
            bg-white/20 rounded-full
            hover:bg-white/30 transition-colors
            text-white
          "
                    aria-label="information"
                    // onClick={handleInfo} // Add your handler if needed
                >
                    <Info className="w-5 h-5" />
                </button>
            </motion.div>
        </motion.header>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    rewardPoints: PropTypes.number,
}

export default Header