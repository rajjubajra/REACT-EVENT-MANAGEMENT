import React from 'react'

/** 
 * setNumber is input value
 * msgNumerb is form validation true or false
*/
function NumberField({setNumber, msgNumber}) {
  return (
    <div className="flex flex-col w-full">
      <label>Number/s</label>
      <input type="number" 
          className="input-field"
          name="number"
          onChange={(e)=> setNumber(e.target.value)} />
          <div className="text-xs text-red-700 -mt-1 mb-3">
          { msgNumber ? "Please enter number" : '' }
          </div>
    </div>
  )
}

export default NumberField
