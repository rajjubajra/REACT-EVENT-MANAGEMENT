import React, {useState, useEffect} from 'react';
import ListingCard from './ListingCard';


function EventListingContainer({data, data_location, data_hourlyScedule}) {

  /** Re-arranged RESTFUL Services 
    * "event-listing?_format=json" data into new Array */
  const [event, setEvent] = useState([]);
  console.log("Event Listing data : ",data);

  /** VENUE - PARAGRAPH ADDRESS FORM 
   * Merge Two Array paragraph_address_form and
   * field_event_location
  */
  const venue_detail = (venueId) => {

    let newArr = [];

    data_location?.map(item=> {
      //console.log(item.id[0].value, venueId);
      return item.id[0].value === venueId && newArr.push({
        "address_1": item.field_address_line_one[0].value,
        "address_2": item.field_address_line_two[0].value,
        "address_3": item.field_address_line_three[0].value,
        "address_4": item.field_address_line_four[0].value
      })
    })
    console.log(newArr);

    return newArr;
  }






  /** HOURLY SCHEDULE - PARAGRAPH
    * Merget Two Array paragraph_hourlyScedule and   field_hourly_schedule from the data
    * then create new array with required field only
    */
  const hourlySchedule = (schedule) => {   

     /** Array Merged */
      let arr = data_hourlyScedule.map((item,i)=> 
      Object.assign({}, item, schedule[i]))

      let newArr = [] 
      /** arr with required field only */
      arr?.map(item=>(
        newArr.push({
          "brief": item.field_event_session_brief.value,
          "start": item.field_event_session_start.value,
          "end": item.field_event_session_end.value,
          "status": item.status.value
        })   
      ))

      return newArr;
      
  }



  useEffect(()=> {
    
    let arr = []
    data?.map(item=>{
      return arr.push({
        id: item.uuid[0].value,
        "nid": item.nid[0].value,
        "title": item.title[0].value,
        "date_time_from": item.field_event_data_and_time[0].value,
        "date_time_to": item.field_event_data_and_time[0].end_value,
        "duration": item.field_event_data_and_time[0].duration,
        "details": item.field_event_details[0].value,
        "location": venue_detail(item.field_event_location[0].target_id),
        "organiser": item.field_event_organizer[0].value,
        "schedule": hourlySchedule(item.field_hourly_schedule),
      })
    })

    setEvent(arr);

  },[data])/** DO NOT ADD FUNCTION */
  

  
  

  return (
    <div>
      <h1 className="text-3xl font-light tracking-wide">Events</h1>
      <ListingCard event={event && event} />
    </div>
  )
}

export default EventListingContainer