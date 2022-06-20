import axios from 'axios';
import {baseurl} from '../../config/config';



export const loginuser = async (
  username, 
  password, 
  setStatus,
  setError) => {


  console.log("login user",username, password);

  const token = () => {
    return  axios({
    method: 'GET',
    url: `${baseurl.URL}/session/token`,
    })
    .then(response => response.data)
    .catch(err => console.log(err));
  }

  //token();

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
    .then(response => {
      setStatus(response);
      console.log("response 1", response);
      console.log("UserId", response.data.current_user.uid);
    })
    .catch(err => {
        setError(err.response);
        console.log("Login Error",err, err.response.data.message)
    })

}//loginuser