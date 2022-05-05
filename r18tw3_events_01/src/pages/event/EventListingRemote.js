import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {actionEvents} from '../../redux/eventsSlice';
import EventListingContainer from './EventListingContainer';


function EventListingRemote() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(actionEvents());

  },[dispatch])

  return (
    <div>
      <EventListingContainer />
    </div>
  )
}

export default EventListingRemote
