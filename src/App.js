import React from 'react';
import buttonFull from './assets/buttons/button-full.png';
import './App.css';

function App() {
  return (
    <div>
      <div>
        <h3>Instruktioner</h3>
        <p>
          Här är ett antal egenskaper som kanske eller kanske inte stämmer in på dig. Instämmer du till
          exempel i att du är någon som tycker om att umgås med andra? Skriv en siffra framför varje
          påstående för att ange hur mycket påståendet stämmer eller inte stämmer.
        </p>
      </div>
      <div class="question">
        <p>2. Tenderar att hitta fel hos andra</p>
        <div class="container">
          <p>Håller inte med</p>
          <img class="unchecked" src={buttonFull}/>
          <img class="checked displayNone" src=""/>
          <p>Håller med</p>
        </div>
      </div>
    </div>
  );
}

export default App;
