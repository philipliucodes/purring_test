import { useState } from 'react'
import './App.css'
import Header from './components/Header'

const INITIAL_REWARD_POINTS = 100 // Define initial value as a constant

function App() {
  const [rewardPoints, 
    //setRewardPoints
  ] = useState(INITIAL_REWARD_POINTS)

  // Function to decrease rewards only,  uncomment when need
  // const decreaseReward = (deduction) => {
  //   if (deduction < 0) {
  //     console.warn('Deduction should be a positive number')
  //     return
  //   }
  //   setRewardPoints(prevPoints => Math.max(0, prevPoints - deduction))
  // }

  return (
    <>
      <Header title="PURRING TEST" rewardPoints={rewardPoints} />
      <div className="container mx-auto px-4 py-6">
        {/* Other content goes here */}
      </div>
    </>
  )
}

export default App
