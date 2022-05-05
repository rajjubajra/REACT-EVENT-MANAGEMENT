import {configureStore} from '@reduxjs/toolkit';
import eventMenuReducer from './evenmenuSlice';
import eventDataReducer from './eventsSlice';


export const store = configureStore({
  reducer:{
    event_menu: eventMenuReducer,
    event_data: eventDataReducer
  }

})