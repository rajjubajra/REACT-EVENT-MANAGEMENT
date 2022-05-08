import React from 'react';
import {useParams} from 'react-router-dom';
import EventDetailsLocal from './event/EventDetailsLocal';
import EventDetailsRemote from './event/EventDetailsRemote';


function EventDetails() {

  const {nid} = useParams();

  console.log(nid);

  return (
    
      window.location.origin === 'http://localhost:3000'
      ? <EventDetailsLocal nid={nid} />
      : <EventDetailsRemote nid={nid} />
    
  )
}

export default EventDetails