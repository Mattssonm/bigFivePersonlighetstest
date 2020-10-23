import React from 'react'
import './Introduction.css'
import Introtext from './Introtext'
import Button from '../general/Button'

export default function Introduction(props) {
  
  function handleClick() {
    props.updatePage("test");
  }
  
  return (
		<div className="instructions">
			<h1>Big Five Personlighetstest</h1>
      <p>Big Five teorin är den personlighetsteori som har störst vetenskaplig grund inom personlighetspsykologin. Gör testet nedan för att få reda på din rankning i de fem personlighetsdragen. </p>
      <h3>Instruktioner</h3>
			<Introtext />
      <div className="flex-center">
        <Button text={"Starta testet"} handleClick={handleClick} />
      </div>
		</div>
	)
}