import React from 'react';
import buttonFull from '../assets/buttons/button-full.png';
import buttonEmpty from '../assets/buttons/button-empty.png';

function Question(props) {
  const questions = [
    "Är pratsam",
    "Tenderar att hitta fel hos andra",
    "Gör ett grundligt jobb",
    "Är deprimerad, nere"
  ];
  const markup = questions.map(q => {
    return (
      <div key={q+1} className="question">
        <p>{q}</p>
        <div className="container">
          <p>Håller inte med</p>
          <img src={buttonFull}/>
          <img src={buttonEmpty}/>
          <p>Håller med</p>
        </div>
      </div>
    )
  })
  return (
    <div>{markup}</div>
  )
}

export default Question;
