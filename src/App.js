import React, { useState } from 'react'
import './App.css'

import Introduction from './components/introduction/Introduction.js'
import Personalitytest from './components/personalitytest/Personalitytest.js'
import Results from './components/results/Results'

export default function App() {
  const [answers, setAnswers] = useState({
    1: 3
  })

  return (
    <div className="app">
      <Introduction />
      <br />
      <Personalitytest />
      <br />
      <Results />
    </div>
  )
}
