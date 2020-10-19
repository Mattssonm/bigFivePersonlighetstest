import React, { useState } from 'react';
import './App.css';
import Statement from './components/personalitytest/Statement.js'

function App() {
  const [answers, setAnswers] = useState({
    1: 3
  })

  const statements = [
    "Är pratsam",
    "Tenderar att hitta fel hos andra",
    "Gör ett grundligt jobb",
    "Är deprimerad, nere"
  ];

  const statementsJSX = statements.map(( statement, index ) => {
    return (
      <Statement key={index} statement={statement} />
    )
  });

  return (
    <div className="app">
      <div className="instructions">
        <h3>Instruktioner</h3>
        <p>
          Här är ett antal egenskaper som kanske eller kanske inte stämmer in på dig. Instämmer du till
          exempel i att du är någon som tycker om att umgås med andra? Skriv en siffra framför varje
          påstående för att ange hur mycket påståendet stämmer eller inte stämmer.
        </p>
      </div>
      <div className="statementList">
        {statementsJSX}
        {console.log(answers)}
      </div>
    </div>
  );
}

export default App;
