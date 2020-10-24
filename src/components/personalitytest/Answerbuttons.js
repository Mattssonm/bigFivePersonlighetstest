import React from 'react';
import './Personalitytest.css'
import buttonFull from '../../assets/buttons/button-full.png';
import buttonEmpty from '../../assets/buttons/button-empty.png';

export default function Answerbuttons(props) {

  function handleClick(num) {
    props.updateAnswers(props.index, num)
  }

  /*
  Each button calls handleClick with a number corresponding to how much they agree with 
  the statement. If the state answers object is filled in with the same number as this button 
  render buttonFull. Else, render buttonEmpty.
  */
  return (
		<div className="flex-center buttonsContainer">
      <img 
        onClick={() => handleClick(5)} 
        src={props.getAnswers[props.index] === 5 ? buttonFull : buttonEmpty} 
        alt="5"
      />
      <img 
        onClick={() => handleClick(4)} 
        src={props.getAnswers[props.index] === 4 ? buttonFull : buttonEmpty} 
        alt="4"
      />
      <img 
        onClick={() => handleClick(3)} 
        src={props.getAnswers[props.index] === 3 ? buttonFull : buttonEmpty} 
        alt="3"
      />
      <img 
        onClick={() => handleClick(2)} 
        src={props.getAnswers[props.index] === 2 ? buttonFull : buttonEmpty} 
        alt="2"
      />
      <img 
        onClick={() => handleClick(1)} 
        src={props.getAnswers[props.index] === 1 ? buttonFull : buttonEmpty} 
        alt="1"/>
		</div>
	)
}