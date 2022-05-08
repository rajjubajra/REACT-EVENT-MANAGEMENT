import React from 'react'

function SignInButton({handleSignIn}) {
  return (
    <button 
    className="btn btn-primary"
    onCkicked={()=> handleSignIn()}
    >Sign in</button>
  )
}

export default SignInButton