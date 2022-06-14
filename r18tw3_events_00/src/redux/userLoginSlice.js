import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { baseurl } from './config';


export const actionUserLogin = createAsyncThunk("user_login/getUserLogin", async ({username, password}) => {

  console.log("actionUserLogin",username, password);
  
  const token = () => {
    return  axios({
    method: 'GET',
    url: `${baseurl.URL}/session/token`,
    })
    .then(response => response.data)
    .catch(err => console.log(err));
  }


  await axios({
        method: "POST",
        url: `${baseurl.URL}/user/login?_format=json`,
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': token()
        },
        data: {
          'name': username,
          'pass': password
        }
    })
    .then(response => { return response.data
      //console.log("response 1", response);
      //console.log("UserId", response.data.current_user.uid);
    })
    .catch(err => {
        console.log("Login Error",err, err.response.data.message)
    });

})//actionClosed


const UserLoginSlice = createSlice({
  name: 'user_login',
  initialState:{
    userLogin: [],
    logging: false,
    login: false,
    status: ''
  },

  

  extraReducers:{
    [actionUserLogin.pending]: (state) => {
      state.logging = true;
    },
    [actionUserLogin.fulfilled]: (state,action) => {
      console.log(action.payload);
      state.logging = false;
      state.userLogin = action.payload;
      state.login = true;
    },
    [actionUserLogin.rejected]: (state,action) => {
      state.logging = false;
      state.login = false;
    },
  },
})

// Action creators are generated for each case reducer function
//export const { actionFetchMainMenu } =  mainMenuSlice.actions
export default UserLoginSlice.reducer