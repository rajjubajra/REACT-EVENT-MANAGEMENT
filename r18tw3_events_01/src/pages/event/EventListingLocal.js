import React,{useEffect, useState} from 'react';
import data from './eventlist.json';


function EventListingLocal() {

  /** Re-arranged JSON data into new Array */
  const [event, setEvent] = useState([]);



  /** JSON included data push to schedule object */
  const scheduleArr = (nid, data ) => {
    const arr = [];

    data?.included?.map(inc => {
        const { 
          field_event_session_brief, 
          field_event_session_start, 
          field_event_session_end, 
          status, parent_id
          } = inc.attributes;

          return parseInt(nid) === parseInt(parent_id) && arr.push({
          "nid": nid,
          "brief": field_event_session_brief.value,
          "start": field_event_session_start,
          "end": field_event_session_end,
          "status": status
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
        field_event_location,
        field_event_organizer,
        drupal_internal__nid } = item.attributes;

      return arr.push({
        "id": item.id,
        "nid": drupal_internal__nid,
        "title": title,
        "date_time": field_event_data_and_time.value,
        "details": field_event_details.value,
        "location": field_event_location.value,
        "organiser": field_event_organizer.value,
        "schedule": scheduleArr(drupal_internal__nid, data)//DATA FROM JSON-INCLUDED
        })
  
    })
    /** SET ARRAY INTO THE "event" STATE */
    setEvent(arr);
  },[])

  console.log(data);
  console.log("Event ",event);
  const date = new Date();
  const monthname = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  return (
    <div>
      <h1>Events</h1>
      {
        event?.map((item,i)=>{
          return (<div className="my-10 flex text-sm font-light" key={i}>
                <div className="text-xl">{item.title}</div> 
                <div className="text-sm mx-10">
                  Venue:<div dangerouslySetInnerHTML={{__html: item.location}}  />
                </div>
                <div>Date: 
                  {date.getDate(item.date_time)} 
                    {monthname[date.getMonth(item.date_time)-1]}, 
                  {date.getFullYear(item.date_time)}
                </div>
            </div>)
        })
      }
    </div>
  )
}

export default EventListingLocal
