import React from 'react';
import data from './event_restapi.json';
import data_address from './event_paragraph_address_form.json';
import data_hourlySchedule from './event_paragraph_hourlySchedule.json';
import EventDetailContainer from './EventDetailContainer';

function EventDetailsLocal({nid}) {

  console.log(data);

  return (
    <EventDetailContainer 
    nid={nid} 
    data={data} 
    data_address={data_address}
    data_hourlySchedule={data_hourlySchedule} />
  )
}

export default EventDetailsLocal