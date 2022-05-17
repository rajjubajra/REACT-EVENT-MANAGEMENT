import React from 'react';
import {useParams} from 'react-router-dom';
import EventBookingLocal from './eventBooking/EventBookingLocal';
import EventBookingRemote from './eventBooking/EventBookingRemote';



function EventBooking() {

  const {nid} = useParams();

  console.log("NODE ID",nid);
  
  return (
    window.location.origin === 'http://localhost:3000'
    ? <EventBookingLocal />
    : <EventBookingRemote />

  )
}


export default EventBooking