import React from 'react'
import './Results.css'

export default function Traitpercentage(props) {
  console.log(props);
  return (
    <div id="traitProgress">
      <div id="traitBar" style={{width: props.traitScore + "%"}}>
          <span>{props.traitScore + "%"}</span>
      </div>
    </div>
  )
  
}