import React from 'react'

function SubmitButton({handleSignIn, name}) {
  return (
    <button 
    className="btn btn-primary">
    {name}</button>
  )
}

export default SubmitButton