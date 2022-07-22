import React,{useEffect} from 'react';
import EventListingRemote from './event/EventListingRemote';
import EventListingLocal from './event/EventListingLocal';


function Events() {


  return (
      window.location.origin === 'http://localhost:3000'
      ? <EventListingLocal />
      : <EventListingRemote />
  )
}

export default Events