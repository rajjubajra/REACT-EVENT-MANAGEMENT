import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { baseurl } from './config';


export const actionEvents = createAsyncThunk("events_data/getEventsData", async () => {

  return axios({
    method: 'GET',
    url: `${baseurl.URL}/session/token`,
    headers: {
      'Content-Type':'application/vnd.api+json'
    }
    }).then(res => 
      {
        return axios({
          method: 'GET',
          url: `${baseurl.URL}/jsonapi/node/event_listing?include=field_event_location,field_hourly_schedule`,
          headers: {
            'Content-Type': 'application/vnd.api+json',
            'Accept': 'application/vnd.api+json',
            'X-CSRF-Token': res.data,
          }
        })
        .then(response => response.data)
      })
      .catch(err => { console.error(err)})
})


const eventsSlice = createSlice({
  name: 'events_data',
  initialState:{
    eventsdata: [],
    loading: false,
    fetched: false
  },

  extraReducers:{
    [actionEvents.pending]: (state) => {
      state.loading = true;
    },
    [actionEvents.fulfilled]: (state,action) => {
      //console.log(action.payload);
      state.loading = false;
      state.eventsdata = action.payload;
      state.fetched = true;
    },
    [actionEvents.rejected]: (state,action) => {
      state.loading = false;
      state.fetched = false;
    },
  },
})

// Action creators are generated for each case reducer function
//export const { actionFetchMainMenu } =  mainMenuSlice.actions
export default eventsSlice.reducer