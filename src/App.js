import React from 'react';
import './App.css';
import Question from './components/Question.js'

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
      <Question />
    </div>
  );
}

export default App;
