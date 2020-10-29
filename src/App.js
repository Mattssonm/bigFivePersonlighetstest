/*
  -- App overview --
  The app consists of three main pages: Introduction, Personalitytest and Results. 
  App owns state and the state data flows up and down through the Personalitytests components, when the 
  user fills in the test. When the user is done, the Personalitytest component calls 
  the functions (in the logic folder) so the testResults state get updated 
  to finally show the results on the Results page. 
-- Component structure --

  App (stateful)
    *Introduction (page)
    *Personalitytest (page)
      Statementlist (44 statements)
        Statement
          Answerbuttons 
    *Results (page)
      Traitlist (5 traits)  
        Traitdescription
        Traitpercentage

  sitewide
    Button
    ErrorMessage
*/

import React, { useState } from 'react'
import './App.css'

import Introduction from './components/introduction/Introduction.js'
import Personalitytest from './components/personalitytest/Personalitytest.js'
import Results from './components/results/Results'

import { calculateResults } from './logic/calculateResults.js'
import { resultsIntoPercent } from './logic/resultsIntoPercent.js'

export default function App() {
  
  //initialize state
  const [answers, setAnswers] = useState({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0, 19: 0, 20: 0, 21: 0, 22: 0, 23: 0, 24: 0, 25: 0, 26: 0, 27: 0, 28: 0, 29: 0, 30: 0, 31: 0, 32: 0, 33: 0, 34: 0, 35: 0, 36: 0, 37: 0, 38: 0, 39: 0, 40: 0, 41: 0, 42: 0, 43: 0, 44: 0 });

  const [page, setPage] = useState("intro");

  const [testResults, setTestResults] = useState([0, 0, 0, 0, 0]);

  const [pagination, setPagination] = useState(1);

  const [errorMessage, setErrorMessage] = useState("");

  //functions
  function updateAnswers( key, value ) {
    setAnswers(prevState => {
      return {...prevState, [key]: value}
    })
  } 

  function updatePage(page) {
    setPage(page);
  } 

  function updateResults(results) {
    setTestResults(results);
  }

  function incrementPagination() {
    setPagination(prevPagination => prevPagination + 1);
    window.scrollTo(0, 0);
  }

  function decrementPagination() {
    setPagination(prevPagination => prevPagination - 1);
    setErrorMessage("");
  }

  function showResults() {
    //check if all answers has been filled in
    for (let answer of Object.entries(answers)) {
      if(answer[1] === 0) {
        setErrorMessage("Du har inte svarat på alla frågor")
        return
      }
    }

    updateResults(resultsIntoPercent(calculateResults(answers)));
    updatePage("results");
  }

  //the page state is used to render the pages conditionally
  return (
    <div id="app">
      {
        page === "intro" 
        ? <Introduction updatePage={updatePage} />
        : page === "test"
          ? <Personalitytest 
              showResults={showResults} 
              updatePage={updatePage} 
              updateAnswers={updateAnswers} 
              incrementPagination={incrementPagination}
              decrementPagination={decrementPagination}
              getAnswers={answers}
              getPagination={pagination}
              getErrorMessage={errorMessage}
            />
          : <Results testResults={testResults}/>
      }
    </div>
  )
}
