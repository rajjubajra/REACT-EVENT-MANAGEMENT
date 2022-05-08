import React from 'react'

function RegisterButton({handleRegister}) {
  return (
    <button 
    className="btn btn-primary"
    onClick={()=> handleRegister()}>Register</button> 
  )
}

export default RegisterButton