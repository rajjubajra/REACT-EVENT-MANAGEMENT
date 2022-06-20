import axios from 'axios';
import {baseurl} from './config';

export const simpleOauthToken = ({username, password}) => {
  return  axios({
    method: 'POST',
    url: `${baseurl.URL}/oauth/token`, 
    data:{ 
      grant_type: 'password',
      client_id: 'cd7acf28-dd1d-40f2-b98c-fda0b5f936f0',
      client_secret: 'abc123',
      username : username,
      password : password 
    }
  })
  .then(response => console.log("SIMPLE AUTH : ",response))
  .catch(err => console.log("simple Oauth Token error: ",err));
}