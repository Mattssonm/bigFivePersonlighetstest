import React from 'react';
import './Personalitytest.css'
import buttonFull from '../../assets/buttons/button-full.png';
import buttonEmpty from '../../assets/buttons/button-empty.png';

export default function Answerbuttons(props) {

  function handleClick(num) {
    props.updateState(props.index, num)
  }

  return (
		<div className="flex-center buttonsContainer">
			<img onClick={() => handleClick(1)} src={props.getState[props.index] === 1 ? buttonFull : buttonEmpty} />
			<img onClick={() => handleClick(2)} src={props.getState[props.index] === 2 ? buttonFull : buttonEmpty}/>
			<img onClick={() => handleClick(3)} src={props.getState[props.index] === 3 ? buttonFull : buttonEmpty}/>
			<img onClick={() => handleClick(4)} src={props.getState[props.index] === 4 ? buttonFull : buttonEmpty}/>
			<img onClick={() => handleClick(5)} src={props.getState[props.index] === 5 ? buttonFull : buttonEmpty}/>
		</div>
	)
}