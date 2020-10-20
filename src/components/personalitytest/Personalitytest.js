import React from 'react'
import './Personalitytest.css'

import Statementlist from './Statementlist'
import Button from './Button'
import Progressbar from './Progressbar'

export default function Personalitytest() {
    return (
      <div>
        <Statementlist />
        <Button text={"Nästa"} />
        <Button text={"Visa resultat"} />
        <Progressbar />
      </div>
    )
}