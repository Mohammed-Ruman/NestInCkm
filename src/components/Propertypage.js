import React from 'react'
import {  useParams } from 'react-router-dom'

function Propertypage() {

    const paramId=useParams();
    

  return (
    <div>{paramId.propertyId}</div>
  )
}

export default Propertypage