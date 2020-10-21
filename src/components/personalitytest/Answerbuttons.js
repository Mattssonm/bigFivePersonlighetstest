import React from 'react';
import './Personalitytest.css'
import buttonFull from '../../assets/buttons/button-full.png';
import buttonEmpty from '../../assets/buttons/button-empty.png';

export default function Answerbuttons() {
	return (
		<div className="flex-center buttonsContainer">
			<img src={buttonEmpty} />
			<img src={buttonEmpty}/>
			<img src={buttonEmpty}/>
			<img src={buttonEmpty}/>
			<img src={buttonEmpty}/>
		</div>
	)
}