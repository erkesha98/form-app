import React from 'react'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import Stepper from './Stepper'
import "./form.style.css"

const FormApp = () => {
  return (
    <div>
        <div><Stepper/></div>
        <div><FirstStep/></div>
        <div><SecondStep/></div>
    </div>
  )
}

export default FormApp