import React,{useState} from 'react';
import {Link} from 'react-router-dom';


function BookingButton({nid}) {

  const [bookingState, setBookingState] = useState(true);

  return (  
      bookingState 
      ? <Link className="btn-primary" to={`/event-booking/${nid}`}>
          Booking
        </Link>
      : <button className="px-2 py-1 border mx-2">Closed</button>
  )

}

export default BookingButton