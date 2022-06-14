import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';


export const actionUserRegisterStatus = createAsyncThunk("user_register_status/getUserRegisterStatus", 
async (status) => {
  console.log(status);
  return status;
})


const userRegisterStatusSlice = createSlice({

  name: 'user_register_status',
  initialState:{
    registered: true
  },


  extraReducers:{
    [actionUserRegisterStatus.fulfilled]: (state,action) => {
      console.log(action.payload);
      state.registered = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
//export const { actionFetchMainMenu } =  mainMenuSlice.actions
export default userRegisterStatusSlice.reducer