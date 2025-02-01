import { useState } from 'react'
import { motion } from 'framer-motion'
import './App.css'

import Header from './components/Header'
import BoxList from './components/boxes/BoxList'
import AnswerInput from './components/AnswerInput'

const INITIAL_REWARD_POINTS = 100

function App() {
  const [rewardPoints, setRewardPoints] = useState(INITIAL_REWARD_POINTS)
  const [answer, setAnswer] = useState('')

  // Function to decrease rewards only
  const decreaseReward = (deduction) => {
    if (deduction < 0) {
      console.warn('Deduction should be a positive number')
      return
    }
    setRewardPoints((prevPoints) => Math.max(0, prevPoints - deduction))
  }

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value)
  }

  const handleSubmit = () => {
    // TODO: Add submit logic here
    console.log('Submitted answer:', answer)
  }

  const handleClear = () => {
    setAnswer('')
  }

  return (
      <div className="min-h-screen bg-gray-100">
        <Header title="PURRING TEST" rewardPoints={rewardPoints} />

        <div className="container mx-auto px-4 py-6">
          {/* Animated Heading */}
          <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
          >
            <h2 className="text-2xl font-bold text-gray-800">Category: Thing</h2>
          </motion.div>

          {/* Animated Container for Boxes */}
          <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
          >
            {/* Replaces the three BlueBox calls with the BoxList component */}
            <BoxList onDecrease={decreaseReward} />
          </motion.div>

          {/* Answer Input (with onSubmit/onClear) */}
          <div className="flex justify-center">
            <AnswerInput
                value={answer}
                onChange={handleAnswerChange}
                onSubmit={handleSubmit}
                onClear={handleClear}
            />
          </div>
        </div>
      </div>
  )
}

export default App
