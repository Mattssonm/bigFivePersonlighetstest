import React from 'react'
import './Results.css'
import Traitdescription from './Traitdescription'
import Traitpercentage from './Traitpercentage'

export default function Traitlist(props) {

  const jsx = props.traits.map(( element, index ) => {
    return <div key={index}>
        <h2 className="align-center">{element.trait}</h2>
        <Traitpercentage traitScore={element.traitScore}/>
        <Traitdescription trait={element.trait} description={element.description}/>
        <hr />
      </div>
  })
  
  return <div>{jsx}</div>;
}