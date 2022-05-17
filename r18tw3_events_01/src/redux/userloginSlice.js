import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {baseurl} from './config';


export const actionUserLogin = createAsyncThunk("user_login/getUserlogin",

  async (username, password) => {

    console.log(username, password)

    const token = () => {
      return axios({
        method: 'get',
        url: `${baseurl.URL}/session/token`
      })
      .then(response => response.data)
      .catch(err => console.log(err))
    }

    await axios({
      method:'post',
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
    .then(response => console.log("Login Success",response.data))
    .catch(err => { console.error("Error Message: ",err)})

})


const userloginSlice = createSlice({

  name:'user_login',
  initialState:{
    userlogin : [],
    loging: false,
    loggedIn: false
  },

  extraReducers:{
    [actionUserLogin.pending]: (state) => {
      state.loging = true;
    },
    [actionUserLogin.fulfilled]: (state,action) => {
      console.log(action.payload);
      state.loging = false;
      state.userlogin = action.payload;
      state.loggedIn = true;
    },
    [actionUserLogin.rejected]: (state,action) => {
      state.loging = false;
      state.loggedIn = false;
    },
  }
})


export default userloginSlice.reducer