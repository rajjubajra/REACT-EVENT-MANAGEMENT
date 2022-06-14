import axios from 'axios';
import {baseurl} from './config';

export const csrfToken = () => {
  return  axios({
  method: 'GET',
  url: `${baseurl.URL}/session/token`,
  })
  .then(response => response.data)
  .catch(err => console.log("csrf token error: ",err));
}