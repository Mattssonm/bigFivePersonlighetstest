import React from 'react'
import './Results.css'
import Traitdescription from './Traitdescription'
import Traitpercentage from './Traitpercentage'

export default function Traitlist() {
  return (
    <div>
      <Traitdescription />
      <Traitpercentage />
    </div>
  )
}