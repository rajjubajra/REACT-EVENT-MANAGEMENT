import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {actionEvents} from '../../redux/eventsSlice';
import EventListingContainer from './EventListingContainer';


function EventListingRemote() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(actionEvents());
  },[dispatch])

  const {eventsdata} = useSelector(state => state.events_data)
  console.log(eventsdata);

  return (
    <div>
      <EventListingContainer data={eventsdata} />
    </div>
  )
}

export default EventListingRemote
