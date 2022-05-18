import React from 'react';
import {useParams} from 'react-router-dom';
import EventBookingLocal from './eventBooking/EventBookingLocal';
import EventBookingRemote from './eventBooking/EventBookingRemote';



function EventBooking() {

  const {nid} = useParams();

  console.log("NODE ID",nid);
  
  return (
    window.location.origin === 'http://localhost:3000'
    ? <EventBookingLocal nodeId={nid} />
    : <EventBookingRemote nodeId={nid} />

  )
}


export default EventBooking