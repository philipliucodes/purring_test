import { useState } from 'react'
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
    setRewardPoints(prevPoints => Math.max(0, prevPoints - deduction))
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
    </>
  )
}

export default App