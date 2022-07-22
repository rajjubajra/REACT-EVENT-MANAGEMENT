import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { baseurl } from '../config/config';
import { csrfToken } from '../config/csrfToken';


export const actionEventHourlySchedule = createAsyncThunk("event_hourly_schedule/getEventHourlySchedule", 
async () => {
  
  return axios({
    method: 'GET',
    url: `${baseurl.URL}/paragraph-hourly-schedule?_format=json`,
    headers: {
      'Accept': 'application/json',
      'X-CSRF-Token': csrfToken(),
  }})
  .then(response => response)
  .catch(err => { console.error(err)})

})
    


const eventHourlyScheduleSlice = createSlice({
  name: 'event_hourly_schedule',
  initialState:{
    eventHourlySchedule: [],
    loading: false,
    fetched: false
  },

  extraReducers:{
    [actionEventHourlySchedule.pending]: (state) => {
      state.loading = true;
    },
    [actionEventHourlySchedule.fulfilled]: (state,action) => {
      console.log(action.payload);
      state.loading = false;
      state.eventHourlySchedule = action.payload;
      state.fetched = true;
    },
    [actionEventHourlySchedule.rejected]: (state,action) => {
      state.loading = false;
      state.fetched = false;
    },
  },
})

export default eventHourlyScheduleSlice.reducer