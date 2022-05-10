import axios from 'axios';
import {baseurl} from '../../redux/config';

export const registerUser = async (username, email, password) => {

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
  data: {
    'name': {
      'value': username
    },
    'mail': {
      'value': email
    },
    'pass': {
      'value': password
    }
  }
})
.then(response => {console.log(response)})
.catch(err => {console.log(err)})


}