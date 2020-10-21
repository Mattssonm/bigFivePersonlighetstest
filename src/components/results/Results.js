import React from 'react'
import './Results.css'
import Traitlist from './Traitlist' 

export default function Results() {

let traits = [
  { 
    trait: "Extroversion",
    description: "textblba",
    traitScore: 56
  }, { 
    trait: "Samvetsgrannhet",
    description: "asd",
    traitScore: 85
  }, {
    trait: "Tillmötesgående",
    description: "asd",
    traitScore: 23
  }, {
    trait: "Öppenhet",
    description: "asd",
    traitScore: 45
  }, {
    trait: "Neuroticism",
    description: "asd",
    traitScore: 92
  }
]

  return (
    <div>
      <h1>Resultat:</h1>
      <Traitlist traits={traits}/>
    </div>
  )
}