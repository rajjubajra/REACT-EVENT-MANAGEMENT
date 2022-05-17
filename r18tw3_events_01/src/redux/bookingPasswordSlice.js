import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';


export const actionBookingPassword = createAsyncThunk("booking_password/getBookingPassword", 
async (status) => {
  console.log(status);
  return status;
})


const bookingPasswordSlice = createSlice({

  name: 'booking_password',
  initialState:{
    status: true
  },


  extraReducers:{
    [actionBookingPassword.fulfilled]: (state,action) => {
      console.log(action.payload);
      state.status = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
//export const { actionFetchMainMenu } =  mainMenuSlice.actions
export default bookingPasswordSlice.reducer