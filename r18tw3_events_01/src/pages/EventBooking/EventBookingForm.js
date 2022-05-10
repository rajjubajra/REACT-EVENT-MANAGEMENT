import React,{useEffect, useState} from 'react';
import UsernameField from '../../component/form/UsernameField';
import RadioTrue from '../../component/form/RadioTrue';
import RadioFalse from '../../component/form/RadioFalse';
import PasswordField from '../../component/form/PasswordField';
import RegisterButton from '../../component/form/RegisterButton';
import SignInButton from '../../component/form/SignInButton';
import {loginuser} from '../loginuser/loginuser';


function EventBookingForm({nid}) {


  /** radios button status "is user registerd or not"  */
  const [radio, setRadio] = useState(false);
  console.log(radio);

  /** login form value */
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [msgUsername, setMsgUsername] = useState(false);
  const [msgPassword, setMsgPassword] = useState(false);


  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e); 
  }



  const handleSignIn = (e) => {

    /** PREVENT DEFAULT BROWSER */
    e.preventDefault();
    console.log("handle signin?", e);

    /** FORM VALIDATION */
    /** CHECK username input filed */
    !username ? setMsgUsername(true) : setMsgUsername(false)
    /** CHECK password input filed */
    !password ? setMsgPassword(true) : setMsgPassword(false)
    /** if username or password field is empty, setMessage " " [Signin Message] empty */
    if(!username || !password){
      setMessage('');
    }
    /** RUN loginuser function */
    if(username && password){
      loginuser(username,password, setMessage)
    }
  }


  
  // console.log(email);
  // console.log(password);


  return (
    <div>
      <h2>Event Title</h2>
      {
          message && 
          <div className="my-4 p-2 text-red-700 bg-red-200">{message}</div>
      }   
      <p>Please sign in to book a place</p>


      
      
      <form className="md:w-1/2 w-full" onSubmit={handleSignIn}>
      
      {/** Username field */}
        <UsernameField setUsername={setUsername} msgUsername={msgUsername} />
        

{/** RADIO BUTTONS */}
        <div className="my-3">          
          <label>Do you have a booking password</label>
          <div>
            <div>
              <RadioTrue setRadio={setRadio} />
              <span className="ml-2">Yes</span>
            </div>
            <div>
              <RadioFalse setRadio={setRadio} />
              <span className="ml-2">No, I have not booked before</span>
            </div>  
          </div>      
        </div>

{/** PASSWORD INPUT */}
      {
        radio
        ? <PasswordField setPassword={setPassword} msgPassword={msgPassword}  />
        : <RegisterButton  />
      }
      {
        radio &&  <SignInButton />
      }
      </form>

    </div>
  )
}

export default EventBookingForm