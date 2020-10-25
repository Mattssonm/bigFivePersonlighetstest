import React, { useEffect } from 'react'
import './Results.css'
import Traitlist from './Traitlist' 

export default function Results(props) {

  let traits = [
    { 
      trait: "Extroversion",
      description: "en tendens att söka stimulans och andras sällskap.",
      traitScore: props.testResults[0]
    }, {
      trait: "Tillmötesgående",
      description: "en tendens att vara medkännande och samarbetsvillig snarare än tävlingsinriktad och fientligt inställd mot andra.",
      traitScore: props.testResults[1]
    }, { 
      trait: "Samvetsgrannhet",
      description: "en tendens att vara självdisciplinerad, agera plikttroget, målinriktning; att planera snarare än att agera spontant.",
      traitScore: props.testResults[2]
    }, {
      trait: "Neuroticism",
      description: "en tendens att lätt kunna uppleva obehagliga känslor som till exempel ilska, ångest, depression, eller sårbarhet",
      traitScore: props.testResults[3]
    }, {
      trait: "Öppenhet",
      description: "en tendens att uppskatta konst, känslor, äventyr, ovanliga idéer, fantasi, nyfikenhet och omväxlande erfarenheter.",
      traitScore: props.testResults[4]
    }
  ]

  return (
    <div>
      <h1>Resultat:</h1>
      <p className="align-center">Högre värden tyder på...</p>
      <Traitlist traits={traits}/>
    </div>
  )
}