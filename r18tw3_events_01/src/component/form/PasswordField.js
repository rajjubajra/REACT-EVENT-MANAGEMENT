import React from 'react'

function PasswordField({setPassword, msgPassword}) {
  return (
    <div className="flex flex-col w-full">
      <label>Password</label>
      <input type="password" 
          className="input-field"
          name="password" 
          onChange={(e)=> setPassword(e.target.value)} />
          <div className="text-xs text-red-700 -mt-1 mb-3">
          { msgPassword ? "Please enter password" : '' }
          </div>
    </div>
  )
}

export default PasswordField