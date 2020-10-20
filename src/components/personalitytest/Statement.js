import React from 'react';
import './Personalitytest.css'
import Answerbuttons from  './Answerbuttons'

export default function Statement({ statement, index}) {
  return (
    <div key={index} className="statement">
      <p>{statement}</p>
      <Answerbuttons />
    </div>
  )
}