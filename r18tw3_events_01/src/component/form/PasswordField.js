import React from 'react'

function PasswordField({setPassword}) {
  return (
    <div className="flex flex-col w-full">
      <label>Password</label>
      <input type="password" 
          className="input-field"
          name="password" 
          onChange={(e)=> setPassword(e.target.value)} />
    </div>
  )
}

export default PasswordField