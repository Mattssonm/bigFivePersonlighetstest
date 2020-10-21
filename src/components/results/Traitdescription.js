import React from 'react'
import './Results.css'

export default function Traitdescription(props) {
  return <div className="align-center">
      <h3>{props.trait}</h3>
      <p>{props.description}</p>
      <span></span>
    </div>
}