import React from 'react';
import {useSelector} from 'react-redux';
import EventListingContainer from './EventListingContainer';




function EventListingRemote() {

  /** NOTE: DATA FETCHED FROM REST API - source : Drupal View   */
  const data = useSelector(state => state.events_data.eventsdata.data)
  const data_paragraph_hourlySchedule 
  = useSelector(state => state.event_hourly_schedule.eventHourlySchedule.data)
  const data_paragraph_location 
  = useSelector(state => state.event_address.eventAddress.data);

  
  return (
    <EventListingContainer 
      data={data} 
      data_location={data_paragraph_location} 
      data_hourlyScedule={data_paragraph_hourlySchedule} />
  )
}

export default EventListingRemote
