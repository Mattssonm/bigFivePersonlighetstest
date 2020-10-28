import React from 'react'
import './sitewide.css'

export default function Button(props) {
  return <button 
    className={props.classes} 
    onClick={props.handleClick}>
      {props.text}
    </button>
}