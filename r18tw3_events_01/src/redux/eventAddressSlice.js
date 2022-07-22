import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { baseurl } from '../config/config';
import { csrfToken } from '../config/csrfToken';


export const actionEventAddress = createAsyncThunk("event_address/getEventAddress", 
async () => {
  
  return axios({
    method: 'GET',
    url: `${baseurl.URL}/paragraph-address-form?_format=json`,
    headers: {
      'Accept': 'application/json',
      'X-CSRF-Token': csrfToken(),
  }})
  .then(response => response)
  .catch(err => { console.error(err)})

})
    


const eventAddressSlice = createSlice({
  name: 'event_address',
  initialState:{
    eventAddress: [],
    loading: false,
    fetched: false
  },

  extraReducers:{
    [actionEventAddress.pending]: (state) => {
      state.loading = true;
    },
    [actionEventAddress.fulfilled]: (state,action) => {
      console.log(action.payload);
      state.loading = false;
      state.eventAddress = action.payload;
      state.fetched = true;
    },
    [actionEventAddress.rejected]: (state,action) => {
      state.loading = false;
      state.fetched = false;
    },
  },
})

//Action creators are generated for each case reducer function
//export const { actionFetchMainMenu } =  mainMenuSlice.actions
export default eventAddressSlice.reducer