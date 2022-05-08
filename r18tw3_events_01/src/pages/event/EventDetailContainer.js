import React,{useState, useEffect} from 'react';
import DetailCard from './DetailCard';

function EventDetailContainer({nid, data}) {

  console.log(nid, data);

  /** Re-arranged JSON data into new Array */
  const [event, setEvent] = useState([]);

  /** JSONAPI "included" type "'paragraph--hourly_schedule'" data push to schedule item */
  const scheduleArr = (nid, data ) => {
    const arr = [];
    data?.included?.map(inc => {
        const { 
          field_event_session_brief, 
          field_event_session_start, 
          field_event_session_end, 
          status, parent_id
          } = inc.attributes;

          return parseInt(nid) === parseInt(parent_id) 
              && inc.type === 'paragraph--hourly_schedule'
              && arr.push({
          "nid": nid,
          "brief": field_event_session_brief.value,
          "start": field_event_session_start,
          "end": field_event_session_end,
          "status": status
        }) 
    })
    return arr;
  }

  /** JSONAPI "included" type "'paragraph--address_form'" data push to Venue item */
  const eventLocation = (nid,data) => {
    const arr = [];
    
    data?.included?.map(inc => {
      const {field_address_line_one, field_address_line_two, field_address_line_three, field_address_line_four, parent_id} = inc.attributes;

      return parseInt(nid) === parseInt(parent_id) 
      && inc.type === 'paragraph--address_form'
      && arr.push({
        "address_1": field_address_line_one,
        "address_2": field_address_line_two,
        "address_3": field_address_line_three,
        "address_4": field_address_line_four
      })
    })
    return arr;

  }


  useEffect(()=>{

    const arr = [];

    /** JSON DATA TO NEW ARRAY FOR "event" STATE  */
    data?.data?.map(item => {
      const {title, 
        field_event_data_and_time, 
        field_event_details,
        field_event_organizer,
        drupal_internal__nid } = item.attributes;

      return parseInt(nid) === drupal_internal__nid && arr.push({
        "id": item.id,
        "nid": drupal_internal__nid,
        "title": title,
        "date_time_from": field_event_data_and_time.value,
        "date_time_to": field_event_data_and_time.end_value,
        "details": field_event_details.value,
        "location": eventLocation(drupal_internal__nid, data),
        "organiser": field_event_organizer.value,
        "schedule": scheduleArr(drupal_internal__nid, data)//DATA FROM JSON-INCLUDED
        })
    })
    /** SET ARRAY INTO THE "event" STATE */
    setEvent(arr);
  },[data, nid])

  console.log("Event ",event);





  return (
    <div>EventDetailContainer
    <h1>Events</h1>
      <DetailCard  event={event} />
      </div>
  )
}

export default EventDetailContainer