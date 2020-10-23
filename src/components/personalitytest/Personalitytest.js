import React, { useState } from 'react'
import './Personalitytest.css'

import Statementlist from './Statementlist'
import Button from '../general/Button'
import Progressbar from './Progressbar'

export default function Personalitytest(props) {
  function handleClick() {
    props.updatePage("results")
  }
  return (
    <div>
      <Statementlist updateAnswers={props.updateAnswers} getAnswers={props.getAnswers} />
      <div className="flex-center">
        {/* <Button text={"Nästa"} /> */}
        <Button text={"Visa resultat"} handleClick={handleClick} />
      </div>
      <Progressbar />
    </div>
  )
}