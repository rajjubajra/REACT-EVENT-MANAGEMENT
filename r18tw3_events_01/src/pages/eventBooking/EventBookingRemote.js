import React from 'react';
import LoginForm from '../user/LoginForm';
import RegisterUserForm from '../user/RegisterUserForm';
import {useSelector} from 'react-redux';



function EventBookingRemote({nodeId}) {

  
  const {status} = useSelector(state=>state.booking_password);
  console.log("STATUS : ", status);

  
  return (
      status 
      ? <LoginForm />
      : <RegisterUserForm />
  )
}

export default EventBookingRemote