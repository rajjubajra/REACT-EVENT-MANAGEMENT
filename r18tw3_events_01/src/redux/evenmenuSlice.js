import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { baseurl } from '../config/config';


export const actionEventMenu = createAsyncThunk("event_menu/getEventMenu", async () => {
  return axios({
    method: 'GET',
    url: `${baseurl.URL}/jsonapi/menu_items/event-management-main`,
    headers: {
      'Accept': 'application/vnd.api+json'
    }
  }).then(response => response.data).catch(err => { console.error(err)})
})


const eventMenuSlice = createSlice({
  name: 'event_menu',
  initialState:{
    eventmenu: [],
    loading: false,
    fetched: false
  },

  extraReducers:{
    [actionEventMenu.pending]: (state) => {
      state.loading = true;
    },
    [actionEventMenu.fulfilled]: (state,action) => {
      console.log(action.payload);
      state.loading = false;
      state.eventmenu = action.payload.data;
      state.fetched = true;
    },
    [actionEventMenu.rejected]: (state,action) => {
      state.loading = false;
      state.fetched = false;
    },
  },
})

// Action creators are generated for each case reducer function
//export const { actionFetchMainMenu } =  mainMenuSlice.actions
export default eventMenuSlice.reducer