import {configureStore} from '@reduxjs/toolkit';
import eventMenuReducer from './evenmenuSlice';
import eventDataReducer from './eventsSlice';
import postEventBookingReducer from './postEventBookingSlice';
import bookingPasswordReducer from './bookingPasswordSlice';
import userLoginReducer from './userloginSlice';


export const store = configureStore({
  reducer:{
    event_menu: eventMenuReducer,
    events_data: eventDataReducer,
    post_eventbooking: postEventBookingReducer,
    booking_password: bookingPasswordReducer,
    user_login: userLoginReducer
  }

})