import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';


export const actionLoginStatusError = createAsyncThunk("login_status_error/getLoginStatusError", 
async (error) => {
  console.log(error);
  return error;
})


const loginStatusSliceError = createSlice({

  name: 'login_status_error',
  initialState:{
    login_error: ''
  },

  extraReducers:{
    [actionLoginStatusError.fulfilled]: (state,action) => {
      console.log("redux login status Error", action.payload);
      state.login_error = action.payload;
    },
  },

})

// Action creators are generated for each case reducer function
//export const { actionFetchMainMenu } =  mainMenuSlice.actions
export default loginStatusSliceError.reducer