import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import BoxList from './components/boxes/BoxList'
import AnswerInput from './components/AnswerInput'
import Congratulations from './components/Congratulations'

const INITIAL_REWARD_POINTS = 100
const CORRECT_ANSWER = "speaker" // This will come from your backend later
const INCORRECT_ANSWER_PENALTY = 1

function App() {  
  const [rewardPoints, setRewardPoints] = useState(INITIAL_REWARD_POINTS)
  const [answer, setAnswer] = useState('')
  const [showCongrats, setShowCongrats] = useState(false)

  // Function to decrease rewards only
  const decreaseReward = (deduction) => {
    if (deduction < 0) {
      console.warn('Deduction should be a positive number')
      return
    }
    setRewardPoints(prevPoints => Math.max(0, prevPoints - deduction))
  }

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value)
  }

  const handleSubmit = () => {
    const normalizedAnswer = answer.toLowerCase().trim()
    const normalizedCorrectAnswer = CORRECT_ANSWER.toLowerCase()

    if (normalizedAnswer === normalizedCorrectAnswer) {
      setShowCongrats(true)
    } else if (normalizedAnswer !== '') { // Only penalize if answer isn't empty
      decreaseReward(INCORRECT_ANSWER_PENALTY)
    }
  }

  const handleClear = () => {
    setAnswer('')
  }

  const handleCongratsClose = () => {
    setShowCongrats(false)
    setAnswer('')
    // Additional reset logic can go here
  }

  return (
    <>
      <Header title="PURRING TEST" rewardPoints={rewardPoints} />
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-6">Category: Thing</h2>
        
        <BoxList onDecrease={decreaseReward} />

        <div className="flex justify-center">
          <AnswerInput 
            value={answer}
            onChange={handleAnswerChange}
            onSubmit={handleSubmit}
            onClear={handleClear}
          />
        </div>
      </div>
      
      {showCongrats && <Congratulations onClose={handleCongratsClose} />}
    </>
  )
}

export default App