import React from 'react'

function PasswordConfirmationField({setConfirmPassword}) {
  return (
    <div className="flex flex-col w-full">
      <label>Confirm Password</label>
      <input type="password" 
          className="input-field"
          name="confirm_password" 
          onChange={(e)=> setConfirmPassword(e.target.value)} />
    </div>
  )
}

export default PasswordConfirmationField