import React from 'react';
import './Personalitytest.css'
import Answerbuttons from  './Answerbuttons'

export default function Statement( { getState, updateState, statement, index } ) {
  return (
    <div key={index} className="statement">
      <p>{statement}</p>
      <Answerbuttons index={index} updateState={updateState} getState={getState} />
      <span className="agree">Instämmer</span>
      <span className="disagree">Instämmer inte</span>
      <hr />
    </div>
  )
}