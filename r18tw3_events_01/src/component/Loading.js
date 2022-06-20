import React from 'react';
import Logo from '../yw-logo-240x240.png';

function Loading() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      
          <img className="w-20" src={Logo}  alt="Loading" />
          <p className="font-thin uppercase my-10 tracking-widest">Loading...</p>   
    </div>
    
  )
}

export default Loading
