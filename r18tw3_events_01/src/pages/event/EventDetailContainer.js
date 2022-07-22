import React,{useState, useEffect} from 'react';
import DetailCard from './DetailCard';

function EventDetailContainer({nid, data, data_address, data_hourlySchedule}) {

  console.log(typeof(nid), typeof(data[0].nid[0].value));
  console.log(nid, data);
  console.log(data_address);
  console.log(data_hourlySchedule)

  /** Re-arranged JSON data into new Array */
  const [event, setEvent] = useState([]);

  /** DRUPAL VIEW - REST API [Event - Hourly Schedule ]
   * source:  "{baseurl.URL}/paragraph-hourly-schedule?_format=json" */
  const scheduleArr = (nid, schedule ) => {
    const arr = [];
    console.log("Schedul Array: ",arr);
    schedule?.map(inc => {
          return parseInt(nid) === parseInt(inc.parent_id[0].value) && 
          arr.push({
          "nid": inc.parent_id[0].value,
          "brief": inc.field_event_session_brief[0].value,
          "start": inc.field_event_session_start[0].value,
          "end": inc.field_event_session_end[0].value,
          "status": inc.status[0].value
        }) 
    })
    return arr;
  }

  /** DRUPAL VIEW - REST API [Event - Address Lines]
   * source:  "{baseurl.URL}/paragraph-address-form?_format=json" */
  const eventLocation = (nid,address) => {
    const arr = [];
    //console.log("Address Array: ",arr);
    address?.map(inc => {
      return parseInt(inc.parent_id[0].value) === nid && 
      arr.push({
        "address_1": inc.field_address_line_one[0].value,
        "address_2": inc.field_address_line_two[0].value,
        "address_3": inc.field_address_line_three[0].value,
        "address_4": inc.field_address_line_four[0].value
      })
    })
    return arr;

  }


  useEffect(()=>{

    const arr = [];
    console.log("Card Array: ",arr);

    /** JSON DATA TO NEW ARRAY FOR "event" STATE  */
    data?.map(item => {
      console.log("NODE ID: ",nid, item.nid[0].value);
      return parseInt(nid) === item.nid[0].value && arr.push({
        "id": item.uuid[0].value,
        "nid": item.nid[0].value,
        "title": item.title[0].value,
        "date_time_from": item.field_event_data_and_time[0].value,
        "date_time_to": item.field_event_data_and_time[0].end_value,
        "details": item.field_event_details[0].value,
        "location": eventLocation(item.nid[0].value, data_address),
        "organiser": item.field_event_organizer[0].value,
        "schedule": scheduleArr(item.nid[0].value, data_hourlySchedule)
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