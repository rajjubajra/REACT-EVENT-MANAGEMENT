import React from 'react';
import data from './eventlist.json';
import EventDetailContainer from './EventDetailContainer';

function EventDetailsLocal({nid}) {

  console.log(data);

  return (
    <EventDetailContainer nid={nid} data={data} />
  )
}

export default EventDetailsLocal