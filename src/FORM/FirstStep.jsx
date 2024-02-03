import React, { useState } from 'react'
import SecondStep from './SecondStep'

const FirstStep = () => {
    const[showSecond, setShowSecond]=useState(false)
    const nextHandler=()=>{
setShowSecond(true);
    }
  return (
    <div className='input'>
        {!showSecond&&(
            <>
        <div>
    <input type="text" placeholder='Name'/>
    </div>
    <div>
  
        <input type="email"  placeholder='Email'/>

    </div>
    <div>

        <input type="phone" placeholder='Phone' />
 
    </div>
    <div><button onClick={nextHandler}>Next</button></div>
    </>
    )}
    {showSecond&&
        <SecondStep/>
    }
    </div>
  )
}

export default FirstStep