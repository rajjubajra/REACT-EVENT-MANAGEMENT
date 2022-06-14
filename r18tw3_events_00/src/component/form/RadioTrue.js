import React from 'react'

function RadioTrue({setRadio}) {
  return (
    <input type="radio" 
            className="input-field"
            name="booking-password" 
            onChange={(e)=>setRadio(true)} />
  )
}

export default RadioTrue
