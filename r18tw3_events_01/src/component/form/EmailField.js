import React from 'react'

function EmailField({setEmail, msgEmail}) {
  return (
    <div className="flex flex-col w-full">
      <label>Email Address</label>
      <input type="email" 
          className="input-field"
          name="email"
          onChange={(e)=> setEmail(e.target.value)} />
          <div className="text-xs text-red-700 -mt-1 mb-3">
          { msgEmail ? "Please enter your email" : '' }
          </div>
    </div>
  )
}

export default EmailField