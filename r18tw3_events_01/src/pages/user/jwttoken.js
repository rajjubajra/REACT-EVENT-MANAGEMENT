import axios from 'axios';
import {baseurl} from '../../config/config';



export const jwttoken = async (
  username, 
  password, 
  setTokenStatus,
  setTokenError) => {


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
        url: `${baseurl.URL}/jwt/token`,
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
      setTokenStatus(response);
      console.log("response Jwt Token ", response);
    })
    .catch(err => {
        setTokenError(err);
        console.log("JWT Token Error",err, err.response.data.message)
    })

}//loginuser