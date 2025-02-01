import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import BlueBox from './components/BlueBox'
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

  return (
    <>
      <Header title="PURRING TEST" rewardPoints={rewardPoints} />
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-6">Category: Thing</h2>
        
        <div className="grid grid-cols-3 gap-4 mb-8">
          <BlueBox 
            prompt="Write a riddle with this thing as the answer."
            buttonText="[FREE]"
            onGenerate={() => decreaseReward(0)}
          />
          <BlueBox 
            prompt="Imagine a steampunk version of this thing."
            buttonText="GENERATE [-4 🧶]"
            onGenerate={() => decreaseReward(4)}
          />
          <BlueBox 
            prompt="Draw this thing as a cat."
            buttonText="GENERATE [-6 🧶]"
            onGenerate={() => decreaseReward(6)}
          />
        </div>

        <div className="flex justify-center">
          <AnswerInput 
            value={answer}
            onChange={handleAnswerChange}
          />
        </div>
      </div>
    </>
  )
}

export default App