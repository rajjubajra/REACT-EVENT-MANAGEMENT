import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actionEvents} from '../../redux/eventsSlice';
import EventDetailContainer from './EventDetailContainer';

function EventDetailsRemote({nid}) {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(actionEvents());
  },[dispatch])

  const {eventsdata} = useSelector(state => state.events_data);

  return (
    <div>
      <div>EventDetailsRemote</div>
      <EventDetailContainer nid={nid} data={eventsdata} />
    </div> 
  )
}

export default EventDetailsRemote