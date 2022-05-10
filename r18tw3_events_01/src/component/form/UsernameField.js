import React from 'react'

function UsernameField({setUsername, msgUsername}) {
  return (
    <div className="flex flex-col w-full">
      <label>Username</label>
      <input type="text"
          className="input-field"
          name="username"
          onChange={(e)=> setUsername(e.target.value)} />
          <div className="text-xs text-red-700 -mt-1 mb-3">
          { msgUsername ? "Please enter username" : '' }
          </div>

    </div>
  )
}

export default UsernameField