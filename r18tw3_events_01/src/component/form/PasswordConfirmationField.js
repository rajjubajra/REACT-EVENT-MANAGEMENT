import React from 'react'

function PasswordConfirmationField({setConfirmPassword, msgConfirmPassword}) {
  return (
    <div className="flex flex-col w-full">
      <label>Confirm Password</label>
      <input type="password" 
          className="input-field"
          name="confirm_password" 
          onChange={(e)=> setConfirmPassword(e.target.value)} />
          <div className="text-xs text-red-700 -mt-1 mb-3">
          { msgConfirmPassword ? "Please enter confirm password" : '' }
          </div>
    </div>
  )
}

export default PasswordConfirmationField