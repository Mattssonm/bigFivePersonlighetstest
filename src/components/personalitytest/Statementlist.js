import React from 'react';
import './Personalitytest.css'
import Statement from './Statement'

export default function Statementlist() {
    
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
		<div className="statementList">
			{statementsJSX}
		</div>
	)
}