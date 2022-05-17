import axios from 'axios';
import {baseurl} from '../../redux/config';

export const registeruser = async (username, email, password, setMessage, setStatus) => {

  setMessage("");

  const token = () => {
    return  axios({
    method: 'GET',
    url: `${baseurl.URL}/session/token`,
    })
    .then(response => console.log(response.data))
    .catch(err => console.log(err));
  }


    axios({
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-Token': token()
      },
      url:`${baseurl.URL}/user/register?_format=json`,
      data: {
        "name": {"value": username},
        "mail": {"value": email},
        "pass": {"value": password}
      }
    })
    .then(response => {
      console.log(response)
      response.status === 200 && 
      setMessage("User registered successfully")
      setStatus(response.status)
    })
    .catch(err => {
      console.log(err)
      setMessage(err.response.data.message);
      setStatus(err.response.status)
    })


}