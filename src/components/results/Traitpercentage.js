import React from 'react'
import './Results.css'

export default function Traitpercentage(props) {
  return <div>
    <h3 className="align-center">{props.traitScore + "%"}</h3>
    <div id="traitProgress">
      <div id="traitBar" style={{width: props.traitScore + "%"}}>
      </div>
    </div>
  </div>
}