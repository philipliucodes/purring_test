import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { HelpCircle, HelpCircleIcon, Info, InfoIcon, X } from 'lucide-react'

/**
 * A modern, stylized header component with centered reward info, vibrant styling,
 * and two modals for help and information.
 *
 * Props:
 *   - title: string (default: 'PURRING TEST')
 *   - rewardPoints: number
 */
const Header = ({ title = 'PURRING TEST', rewardPoints }) => {
    const [isHelpModalOpen, setIsHelpModalOpen] = React.useState(false)
    const [isInfoModalOpen, setIsInfoModalOpen] = React.useState(false)

    const handleHelpOpen = () => setIsHelpModalOpen(true)
    const handleHelpClose = () => setIsHelpModalOpen(false)

    const handleInfoOpen = () => setIsInfoModalOpen(true)
    const handleInfoClose = () => setIsInfoModalOpen(false)

    return (
        <>
            <motion.header
                initial={{ y: -50, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="
          relative w-full px-6 py-4 flex items-center justify-between
          bg-gradient-to-r from-cyan-600 via-blue-500 to-purple-600
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
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3">
                    <span className="text-lg font-semibold uppercase tracking-wider drop-shadow-sm">
                        Reward:
                    </span>
                    <div
                        className="
              flex items-center gap-1
              px-3 py-1 rounded-full
              bg-white/20
              shadow-md
              hover:bg-white/30 transition-colors
            "
                    >
                        <span className="text-lg font-bold drop-shadow-sm">
                            {rewardPoints}
                        </span>
                        🧶
                        {/* <Volleyball className="w-5 h-5" /> */}
                    </div>
                </div>

                {/* Right Buttons */}
                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex space-x-3"
                >
                    {/* Help Button */}
                    <motion.button
                        onClick={handleHelpOpen
                        }
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        className={`flex items-center justify-center text-sm font-bold rounded-lg shadow-md uppercase transition-colors text-black px-0 py-0
                        }`}
                    >
                        <HelpCircleIcon className="w-5 h-5 px-0 py-0" />
                    </motion.button>

                    {/* Info Button */}
                    <motion.button
                        onClick={handleInfoOpen}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        className={`flex items-center justify-center text-sm font-bold rounded-lg shadow-md uppercase transition-colors text-black px-0 py-0
                        }`}
                    >
                        <InfoIcon className="w-5 h-5" />
                    </motion.button>
                </motion.div>
            </motion.header>

            {/* Help Modal */}
            <HelpModal isOpen={isHelpModalOpen} onClose={handleHelpClose} />

            {/* Info Modal */}
            <InfoModal isOpen={isInfoModalOpen} onClose={handleInfoClose} />
        </>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    rewardPoints: PropTypes.number,
}

export default Header

/**
 * HelpModal: Simple example of a modal component.
 */
const HelpModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Modal Card */}
            <motion.div
                className="
          relative w-96 max-w-full p-6 bg-white text-gray-800 rounded-lg shadow-xl
        "
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-100 hover:text-gray-700"
                >
                    <X className="w-5 h-5 text-black" />
                </button>
                <h2 className="text-xl font-bold mb-4 flex items-center space-x-2 ">
                    <HelpCircle className="w-6 h-6 text-black" />
                    <span>Help Options</span>
                </h2>
                <p className="mb-4">
                    Here you can provide helpful information for your users.
                    Add any text, links, or interactive elements needed.
                </p>
                <button
                    onClick={onClose}
                    className="inline-flex items-center px-4 py-2 mt-2 bg-cyan-600 text-black rounded hover:bg-cyan-700"
                >
                    Close
                </button>
            </motion.div>
        </motion.div>
    )
}

HelpModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

/**
 * InfoModal: Simple example of a modal component.
 */
const InfoModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center text-white bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Modal Card */}
            <motion.div
                className="
          relative w-96 max-w-full p-6 bg-white text-gray-800 rounded-lg shadow-xl
        "
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-100 hover:text-gray-700"
                >
                    <X className="w-5 h-5 text-black" />
                </button>
                <h2 className="text-xl font-bold mb-4 flex items-center space-x-2">
                    <Info className="w-6 h-6 text-black" />
                    <span>Information</span>
                </h2>
                <p className="mb-4 text-black">
                    Provide additional details, disclaimers, or any other info users
                    might need. Customize this content as necessary.
                </p>
                <button
                    onClick={onClose}
                    className="inline-flex items-center px-4 py-2 mt-2 bg-blue-600 text-black rounded hover:bg-blue-700"
                >
                    Close
                </button>
            </motion.div>
        </motion.div>
    )
}

InfoModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};