import React from 'react'
import './Personalitytest.css'

import Statementlist from './Statementlist'
import Button from '../general/Button'
import Progressbar from './Progressbar'

export default function Personalitytest() {
    return (
      <div>
        <Statementlist />
        <div className="flex-center">
          <Button text={"Nästa"} />
          <Button text={"Visa resultat"} />
        </div>
        <Progressbar />
      </div>
    )
}