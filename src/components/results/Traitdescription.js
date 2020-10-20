import React from 'react'
import './Results.css'

const traits = ["Extroversion", "Samvetsgrannhet", "Trevlighet", "Öppenhet", "Neuroticism"]

export default function Traitdescription() {
  return <div>
      <p>{traits[0]}</p>
    </div>
}