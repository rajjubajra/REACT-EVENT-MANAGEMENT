import axios from 'axios';
import {baseurl} from '../../redux/config';


export const registerbooking = ({status, userId, nodeId}) => {


    console.log("REGISTER BOOKING", 
    status, "userId", userId, "nodeId", nodeId);

    // const node = {
    //   type: [{ 
    //     target_id: 'event_booking_log_book',
    //     target_type: 'node_type',
    //   }],
    //   title: [{ 
    //     value: 'Booking for node - ' + nodeId
    //   }],
    //   field_event_booked_by_userid: [{ 
    //     value: userId
    //   }],
    //   field_event_node_id: [{ 
    //     value: nodeId
    //   }]
    // }

    const node = {
      type: [{
        target_id: 'article',
        target_type: 'node_type',
      }],
      title: [{
        value: "this is test title 2022",
      }],
      body: [{
        value: "test body test text 2022" + userId + "Node Id" + nodeId,
        format: 'plain_text',
      }],
    };

    const token = () => {
      return  axios({
      method: 'GET',
      url: `${baseurl.URL}/session/token`,
      })
      .then(response => response.data)
      .catch(err => console.log(err));
    }

    axios({
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'X-CSRF-Token': token(),
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