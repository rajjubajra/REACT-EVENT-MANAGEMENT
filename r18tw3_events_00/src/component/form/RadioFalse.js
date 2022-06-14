import React from 'react'

function RadioFalse({radio, setRadio}) {
  return (
    <input type="radio" 
        className="input-field" 
        name="booking-password" 
        onChange={(e)=>setRadio(false)} 
        />
  )
}

export default RadioFalse
