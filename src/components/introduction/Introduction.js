import React from 'react'
import './Introduction.css'
import Button from '../sitewide/Button'

export default function Introduction(props) {
  
  function handleClick() {
    props.updatePage("test");
  }
  
  return (
		<div className="instructions">
			<h1>Big Five Personlighetstest</h1>
      <p>Big Five teorin är den personlighetsteori som har störst vetenskaplig grund inom personlighetspsykologin. Gör testet nedan för att få reda på din rankning i de fem personlighetsdragen. </p>
      <p>Du kommer få läsa ett antal påståenden som kanske eller kanske inte stämmer in på dig. Tryck på knappen nedan för att börja fylla i hur mycket du instämmer med varje påstående.</p>
      <div className="flex-center">
        <Button text={"Starta Testet"} handleClick={handleClick} />
      </div>
		</div>
	)
}