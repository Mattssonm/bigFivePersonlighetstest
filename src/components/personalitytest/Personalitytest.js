import React from 'react'
import './Personalitytest.css'

import Statementlist from './Statementlist'
import Button from '../sitewide/Button'
import ErrorMessage from './ErrorMessage'

export default function Personalitytest({ 
  updateAnswers, 
  getAnswers, 
  showResults, 
  incrementPagination, 
  decrementPagination,
  getPagination, 
  getErrorMessage
}) {

  return (
    <div>
      <Statementlist 
        updateAnswers={updateAnswers} 
        getAnswers={getAnswers} 
        incrementPagination={incrementPagination} 
        decrementPagination={decrementPagination}
        getPagination={getPagination} 
      />
      <div className="flex-center">
        { getPagination === 9 ? <Button text={"Visa resultat"} handleClick={showResults} /> : <></> }
      </div>
        <ErrorMessage text={getErrorMessage} />
    </div>
  )
}