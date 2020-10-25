import React, { useState } from 'react'
import './Personalitytest.css'

import Statementlist from './Statementlist'
import Button from '../sitewide/Button'

export default function Personalitytest(props) {

  return (
    <div>
      <Statementlist updateAnswers={props.updateAnswers} getAnswers={props.getAnswers} />
      <div className="flex-center">
        <Button text={"Visa resultat"} handleClick={props.showResults} />
      </div>
    </div>
  )
}