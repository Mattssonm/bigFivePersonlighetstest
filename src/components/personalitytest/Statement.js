import React from 'react';
import './Personalitytest.css'
import Answerbuttons from  './Answerbuttons'

export default function Statement( { getAnswers, updateAnswers, statement, index } ) {
  return (
    <div key={statement+index} className="statement">
      <p>{statement}</p>
      <Answerbuttons index={index} updateAnswers={updateAnswers} getAnswers={getAnswers} />
      <span className="agree">Instämmer</span>
      <span className="disagree">Instämmer inte</span>
      <hr />
    </div>
  )
}