import React from 'react'
import './General.css'

export default function Button(props) {
  return <button className={"primary-btn"}>{props.text}</button>
}