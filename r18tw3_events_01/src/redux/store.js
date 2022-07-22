import {configureStore} from '@reduxjs/toolkit';
import eventMenuReducer from './evenmenuSlice';
import eventDataReducer from './eventsSlice';
import eventAddressReducer from './eventAddressSlice';
import eventHourlyScheduleReducer from './eventHourlyScheduleSlice';
import postEventBookingReducer from './postEventBookingSlice';
import bookingPasswordReducer from './bookingPasswordSlice';
import loginStatusReducer from './loginStatusSlice';
import loginStatusErrorReducer from './loginStatusErrorSlice';
import userRegisterStatusReducer from './userRegisterStatusSlice';



export const store = configureStore({
  reducer:{
    event_menu: eventMenuReducer,
    events_data: eventDataReducer,
    event_address: eventAddressReducer,
    event_hourly_schedule: eventHourlyScheduleReducer,
    post_eventbooking: postEventBookingReducer,
    booking_password: bookingPasswordReducer,
    login_status: loginStatusReducer,
    login_status_error: loginStatusErrorReducer,
    user_register_status: userRegisterStatusReducer

  }

})