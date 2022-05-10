import axios from 'axios';
import {baseurl} from '../../redux/config';

export const loginuser = async (username, password, setMessage) => {


  console.log("login user",username, password);

  const token = () => {
    return  axios({
    method: 'GET',
    url: `${baseurl.URL}/session/token`,
    })
    .then(response => console.log(response.data))
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
      //console.log("response 1", response);
      response.status === 200 ? setMessage("Login successful") : setMessage("");
    })
    .catch(err => {
      //console.log("Login Error",err)
        if(err.response.status === 400 || 403) 
        {
          setMessage(err.response.data.message)
        }else{
          setMessage("");
        }
    })

}//loginuser