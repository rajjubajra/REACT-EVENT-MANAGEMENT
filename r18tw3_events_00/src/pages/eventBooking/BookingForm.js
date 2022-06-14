import React, {useState} from 'react'
import NumberField from '../../component/form/NumberField';
import {registerbooking} from './registerbooking';
import SubmitButton from '../../component/form/SubmitButton';
import {useSelector} from 'react-redux';

function BookingForm({nodeId}) {

  /** Input value */
  const [number, setNumber] = useState('');
  /** input field validation  true or false */
  const [msgNumber, setMsgNumber] = useState('');

  const userId = useSelector(state => state.login_status.login.data.current_user.uid);
  
  console.log("booking number of person",number, "userId", userId, "nodeId", nodeId);

  const handleBooking = (e) => {
    e.preventDefault();
    return  number 
      ? registerbooking({ userId, nodeId})
      : setMsgNumber(false);
  }

  
  
  return (
    <div>
      <form onSubmit={handleBooking}>
      <NumberField 
          setNumber={setNumber} 
          msgNumber={msgNumber} 
          />
      <SubmitButton name="Submit Booking" />
      </form>

    </div>
  )
}

export default BookingForm
