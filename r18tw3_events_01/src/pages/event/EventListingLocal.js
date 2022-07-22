import React from 'react';
import data from './event_restapi.json';
import data_paragraph_location from './event_paragraph_address_form.json';
import data_paragraph_hourlySchedule from './event_paragraph_hourlySchedule.json';
import EventListingContainer from './EventListingContainer';


function EventListingLocal() {



return (
<div>
  <EventListingContainer 
    data={data}
    data_location={data_paragraph_location}
    data_hourlyScedule={data_paragraph_hourlySchedule} />
</div>

)


}

export default EventListingLocal
