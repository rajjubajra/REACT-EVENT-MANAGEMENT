import axios from 'axios';
import {baseurl} from '../../config/config';
import {csrfToken} from '../../config/csrfToken';





export const registerbooking = async ({userId, nodeId, username, password}) => {

    console.log("REGISTER BOOKING", "userId", userId, "nodeId", nodeId);
   
    const node = {
      type: [{ 
        target_id: 'event_booking_log_book',
        target_type: 'node_type',
      }],
      title: [{ 
        value: 'Booking for node - ' + nodeId
      }],
      field_event_booked_by_userid: [{ 
        value: userId
      }],
      field_event_node_id: [{ 
        value: nodeId
      }]
    }

    axios({
      method: 'POST',
      
      headers: {
        'Accept': 'application/json',   
        'X-CSRF-Token': csrfToken(),// include this header in every request
      },
      url:`${baseurl.URL}/node`,
      data: node,
      params: { _format: 'json'}
    })
    .then(response => {
      console.log(response) 
    })
    .catch(err => {
      console.log(err)
    })

}
