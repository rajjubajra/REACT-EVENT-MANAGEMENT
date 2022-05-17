import React from 'react'

function AlertMessage({status, message}) {
  console.log("Alert Status: ",status);
  return (
    status === 200
    ? message && <div className="p-2 my-2 bg-green-400">{message}</div>
    : message && <div className="p-2 my-2 bg-red-300">{message}</div>

  )
}

export default AlertMessage