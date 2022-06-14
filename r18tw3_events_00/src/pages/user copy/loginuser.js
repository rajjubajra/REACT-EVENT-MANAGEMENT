import axios from 'axios';
import {baseurl} from '../../redux/config';



export const loginuser = async (
  username, 
  password, 
  setMessage, 
  setStatus, 
  setResponse,
  setUserId) => {


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
      console.log("response 1", response);
      console.log("UserId", response.data.current_user.uid);
      response.status === 200 && setResponse("login response");

      /** SET LOGED IN SUCCESS MESSAGE */
      response.status === 200 
      ? setMessage("Login successful")
      : setMessage("");

      /** SET response Status 200 or ... */
      response.status === 200 &&
      setStatus(response.status)
      /** SET "USER-ID" OF THE LOGGED IN USER */
      setUserId(response.data.current_user.uid)

    })
    .catch(err => {
        console.log("Login Error",err, err.response.data.message)
        setStatus(err.response.status)
        setMessage(err.response.data.message)
    })

}//loginuser