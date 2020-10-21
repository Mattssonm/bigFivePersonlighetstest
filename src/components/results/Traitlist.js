import React from 'react'
import './Results.css'
import Traitdescription from './Traitdescription'
import Traitpercentage from './Traitpercentage'

export default function Traitlist(props) {

  const jsx = props.traits.map(( element, index ) => {
    return <div key={index}>
        <Traitdescription trait={element.trait} description={element.description}/>
        <Traitpercentage traitScore={element.traitScore}/>
      </div>
  })
  
  return <div>{jsx}</div>;
}