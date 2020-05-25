import React from 'react';
import './App.css';
import Question from './components/question.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Big Five Personlighetstest</h1>
        <p>Svara på frågorna nedan för att få reda på testresultatet</p>
      </header>
      <Question/>
    </div>
  );
}

export default App;
