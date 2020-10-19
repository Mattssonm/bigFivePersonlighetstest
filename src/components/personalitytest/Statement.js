import React from 'react';
import buttonFull from '../../assets/buttons/button-full.png';
import buttonEmpty from '../../assets/buttons/button-empty.png';

function Statement({ statement, index}) {
  function handleClick(event) {
    event.preventDefault()
    console.log(this);
  }
  return (
    <div key={index} className="statement">
      <p>{statement}</p>
      <div className="container">
        <p>Håller inte med</p>
        <img onClick={handleClick} src={buttonEmpty} />
        <img src={buttonEmpty}/>
        <img src={buttonEmpty}/>
        <img src={buttonEmpty}/>
        <img src={buttonEmpty}/>
        <p>Håller med</p>
      </div>
    </div>
  )
}

export default Statement;
