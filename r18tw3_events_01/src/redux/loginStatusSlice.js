import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';


export const actionLoginStatus = createAsyncThunk("login_status/getLoginStatus", 
async (status) => {
  console.log(status);
  return status;
})


const loginStatusSlice = createSlice({

  name: 'login_status',
  initialState:{
    login: ''
  },

  extraReducers:{
    [actionLoginStatus.fulfilled]: (state,action) => {
      console.log("redux login status",action.payload);
      state.login = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
//export const { actionFetchMainMenu } =  mainMenuSlice.actions
export default loginStatusSlice.reducer