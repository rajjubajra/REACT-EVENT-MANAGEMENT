import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { baseurl } from '../config/config';
import { csrfToken } from '../config/csrfToken';




export const actionEvents = createAsyncThunk("events_data/getEventsData", 
async () => {
  console.log("actionEvents", `${baseurl.URL}/event-listing`);

  return axios({
    method: 'GET',
    url: `${baseurl.URL}/event-listing?_format=json`,
    headers: {
      'Accept': 'application/json',
      'X-CSRF-Token': csrfToken(),
  }})
  .then(response => response)
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
      console.log(action.payload);
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

//Action creators are generated for each case reducer function
//export const { actionFetchMainMenu } =  mainMenuSlice.actions
export default eventsSlice.reducer