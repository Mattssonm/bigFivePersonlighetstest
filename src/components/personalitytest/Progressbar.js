import React from 'react'
import './Personalitytest.css'

export default function Progressbar() {
  return (
    <div>
      <p className="align-center">5%</p>
      <div id="testProgress">
        <div id="testBar" style={{width: "5%"}}></div>
      </div>
    </div>
  )
}