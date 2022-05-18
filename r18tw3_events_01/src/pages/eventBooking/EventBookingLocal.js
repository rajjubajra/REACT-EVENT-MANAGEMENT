import React from 'react';
import LoginForm from '../user/LoginForm';
import RegisterUserForm from '../user/RegisterUserForm';
import {useSelector} from 'react-redux';



function EventBookingLocal({nodeId}) {

  const {status} = useSelector(state=>state.booking_password);
  console.log("STATUS : ", status);


  return (
      status 
      ? <LoginForm nodeId={nodeId} />
      : <RegisterUserForm />
  )
}

export default EventBookingLocal