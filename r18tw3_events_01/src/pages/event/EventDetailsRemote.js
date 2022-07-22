import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actionEvents} from '../../redux/eventsSlice';
import EventDetailContainer from './EventDetailContainer';

function EventDetailsRemote({nid}) {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(actionEvents());
  },[dispatch])

  /** NOTE: DATA FETCHED FROM REST API - source : Drupal View   */
  const data = useSelector(state => state.events_data.eventsdata.data)
  const data_hourlySchedule = useSelector(state => state.event_hourly_schedule.eventHourlySchedule.data)
  const data_address = useSelector(state => state.event_address.eventAddress.data);

  return (
    <div>
    <EventDetailContainer 
        nid={nid}
        data={data}
        data_address={data_address}
        data_hourlySchedule={data_hourlySchedule} />
    </div> 
  )
}

export default EventDetailsRemote