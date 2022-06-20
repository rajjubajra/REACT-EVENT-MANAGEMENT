import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import ajax from '../config/ajax';


export const actionPostEventBooking = createAsyncThunk("post_eventbooking/postEventBooking", 

    async ({event_title, nid, userId}) => {
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
        value: userId
      }]
    }

    try{
      const axios = await ajax()// wait for an initialized axios object
      const response = await axios.post('/node', node) //wait for the post AJAX request to complete
      console.log("node created", response)
    }catch(e){
      console.log("Error: ",e);
    }
  }



)


const postEventBookingSlice = createSlice({
  name: 'post_eventbooking',
  initialState:{
    posteventbooking: [],
    loading: false,
    fetched: false
  },

  extraReducers:{
    [actionPostEventBooking.pending]: (state) => {
      state.loading = true;
    },
    [actionPostEventBooking.fulfilled]: (state,action) => {
      console.log(action.payload);
      state.loading = false;
      state.posteventbooking = action.payload.data;
      state.fetched = true;
    },
    [actionPostEventBooking.rejected]: (state,action) => {
      state.loading = false;
      state.fetched = false;
    },
  },
})

// Action creators are generated for each case reducer function
//export const { actionFetchMainMenu } =  mainMenuSlice.actions
export default postEventBookingSlice.reducer