import React from 'react'
import './Introduction.css'
import Introtext from './Introtext'
import Button from '../general/Button'

export default function Introduction() {
	return (
		<div className="instructions">
			<h3>Instruktioner</h3>
			<Introtext />
      <div className="flex-center">
        <Button text={"Starta testet"} />
      </div>
		</div>
	)
}