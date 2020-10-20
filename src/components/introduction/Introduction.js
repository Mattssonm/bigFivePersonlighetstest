import React from 'react'
import './Introduction.css'
import Introtext from './Introtext'
import Startbutton from './Startbutton'

export default function Introduction() {
	return (
		<div className="instructions">
			<h3>Instruktioner</h3>
			<Introtext />
      <Startbutton />
		</div>
	)
}