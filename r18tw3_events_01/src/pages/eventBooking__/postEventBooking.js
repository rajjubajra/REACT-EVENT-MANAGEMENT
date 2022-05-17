import ajax from '../../redux/ajax';

const postEventBooking = async ({nid, uid, event_title}) => {

    const node = {
      type: [{
          target_id: 'event_booking_log_book',
          target_type: 'node_type',
        }],
      title: [{
        value: event_title
      }],
      field_event_node_id: [{
        value: nid
      }],
      field_event_booked_by_userid: [{
        value: uid
      }]
    }

    try{
      const axios = await ajax()// wait for an initialized axios object
      const response = await axios.pos('/node', node) //wait for the post AJAX request to complete
      console.log("node created", response)
    }catch(e){
      console.log("Error: ",e);
    }


}