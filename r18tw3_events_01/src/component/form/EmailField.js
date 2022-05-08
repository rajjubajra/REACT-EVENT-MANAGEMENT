import React from 'react'

function EmailField({setEmail}) {
  return (
    <div className="flex flex-col w-full">
      <label>Email Address</label>
      <input type="email" 
          className="input-field"
          name="email"
          onChange={(e)=> setEmail(e.target.value)} />
    </div>
  )
}

export default EmailField