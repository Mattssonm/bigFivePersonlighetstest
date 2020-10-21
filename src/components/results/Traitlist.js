import React from 'react'
import './Results.css'
import Traitdescription from './Traitdescription'
import Traitpercentage from './Traitpercentage'

export default function Traitlist(props) {
  let jsx = []
  console.log(props.traits);
  props.traits.forEach(element => {
    jsx.push(
      <Traitdescription trait={element.trait} description={element.description}/>,
      <Traitpercentage traitScore={element.traitScore}/>,
      <br />
      )
  });
  
  return <div>{jsx}</div>;
}