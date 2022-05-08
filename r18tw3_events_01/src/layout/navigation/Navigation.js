import React from 'react'
import NavLocal from './NavLocal';
import NavRemote from './NavRemote';

function Navigation() {


  return (
    window.location.origin === 'http://localhost:3000'
    ? <NavLocal />
    : <NavRemote />
  )
}

export default Navigation