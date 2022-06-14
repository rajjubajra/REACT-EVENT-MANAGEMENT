import React, {useState, useEffect} from 'react';
import UsernameField from '../../component/form/UsernameField';
import PasswordField from '../../component/form/PasswordField';
import SubmitButton from '../../component/form/SubmitButton';
import {actionBookingPassword} from '../../redux/bookingPasswordSlice';
import {useDispatch} from 'react-redux';
//import {actionUserLogin} from '../../redux/userloginSlice';
import {loginuser} from '../user/loginuser';
import AlertMessage from '../../component/AlertMessage';
import {registerbooking} from '../eventBooking/registerbooking';
import {actionLoginStatus} from '../../redux/loginStatusSlice';



function LoginForm({nodeId}){

  const dispatch = useDispatch();

  /** Response from axios - loginuser  */
  const [response, setResponse] = ('');
  console.log("RESPONSE", response);
  /** pass response to Redux state management */
  



  /** set password input field view and hide */
  const [viewPassField, setViewPassField] = useState(false);


  /** Form input value */
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  /** Login Status Messages - "fetched from remote backend" */
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');



  /** Input Field Message True of false */
  const [msgUsername, setMsgUsername] = useState(false);
  const [msgPassword, setMsgPassword] = useState(false);

  /** After Login Success set UserId and Node Id */
  const [userId, setUserId] = useState('');
  
  const handleSignIn = (e) => {

    e.preventDefault();
    
    registerbooking({status,userId, nodeId})
    //console.log("HANDLE SIGN IN",e);
    /** form validation */
    username ? setMsgUsername(false) : setMsgUsername(true);
    password ? setMsgPassword(false) : setMsgPassword(true);

    if(username && password) {
      //dispatch(actionUserLogin(username, password));
      loginuser(username, password, setResponse ,setMessage, setStatus, setUserId);
      console.log("userlogin ???", username, password);
    }
  }

  const handleFormField = (sta) => {
    setViewPassField(sta);
    dispatch(actionBookingPassword(true))
  }


  return (
    <div>
        <h3 className="text-xl font-thin p-2 my-2 bg-gray-50">Please sign in to book a place</h3>
        <AlertMessage message={message} status={status} />
      <form className="md:w-1/2 w-full" onSubmit={handleSignIn}>
      
      {/** Username field */}
        <UsernameField setUsername={setUsername} msgUsername={msgUsername} />
        

{/** RADIO BUTTONS */}
        <div className="my-3">           
          <label>Do you have a booking password</label>
          <div>
            <div>
    {/** 
    This radio button do View 
    Change Login Form and Register Form
    */}           
            <input type="radio" 
                    className="input-field" 
                    name="booking-password" 
                    onClick={()=> handleFormField(true)}
                    />
              <span className="ml-2">Yes</span>
            </div>
            <div>
            <input type="radio" 
                    className="input-field" 
                    name="booking-password" 
                    onChange={()=> dispatch(actionBookingPassword(false))}
                    />
              <span className="ml-2">No, I have not booked before</span>
            </div>  
          </div>      
        </div>

{/** PASSWORD INPUT */}
      { viewPassField &&
        <span>
        <PasswordField setPassword={setPassword} msgPassword={msgPassword}/>
        <SubmitButton name="Log-in" />
        </span>}
      </form>
      </div>
  )
}

export default LoginForm;