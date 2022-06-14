import React from 'react';
import LoginForm from '../user/LoginForm';
import RegisterUserForm from '../user/RegisterUserForm';
import {useSelector} from 'react-redux';
import BookingForm from './BookingForm';



function EventBookingLocal({nodeId}) {

  /** 
   * if user is registred then 
   * status is true else false
   */
  const {registered} = useSelector(state => state.user_register_status);
  
  const {login} = useSelector(state => state.login_status);
  console.log("login status", login);

  /** Login Status */

  return (
      login.status === 200
      ? <BookingForm nodeId={nodeId}  />
      : registered 
      ? <LoginForm nodeId={nodeId} />
      : <RegisterUserForm />
  )
}

export default EventBookingLocal