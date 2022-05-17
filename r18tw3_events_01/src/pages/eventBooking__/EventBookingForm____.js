import React,{useEffect, useState} from 'react';
import UsernameField from '../../component/form/UsernameField';
import EmailField from '../../component/form/EmailField';
import RadioTrue from '../../component/form/RadioTrue';
import RadioFalse from '../../component/form/RadioFalse';
import PasswordField from '../../component/form/PasswordField';
import RegisterButton from '../../component/form/RegisterButton';
import SignInButton from '../../component/form/SignInButton';
import {loginuser} from '../loginuser/loginuser';
import {registerUser} from '../loginuser/registeruser'; 



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
  const [msgEmail, setMsgEmail] = useState(false);

  /** Set Registration Form true */
  const [registrationForm, setRegistrationForm] = useState(false);


  useEffect(()=>{
    setMessage("")
  },[radio])


  const handleRegister = (e) => {
    e.preventDefault();
    console.log("REGISTER",e); 


    /** FORM VALIDATION */
    /** CHECK username input filed */
    !username ? setMsgUsername(true) : setMsgUsername(false)
    /** CHECK password input filed */
    !password ? setMsgPassword(true) : setMsgPassword(false)
    /** CHECK email input filed */
    !email ? setMsgEmail(true) : setMsgEmail(false)
    /** if username or password or email field is empty, setMessage is empty [Signin Message] = empty */


    return registrationForm 
    ? registerUser(username,email,password, setMessage)
    : setRegistrationForm(true)

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


      { /** LOGIN FORM **************************/
        radio
        ? /** YES RADIO BUTTON USE LOGIN FORM */
      <div>
        <h3 className="text-xl font-thin p-2 my-2 bg-gray-50">Please sign in to book a place</h3>
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
      
        <PasswordField setPassword={setPassword} msgPassword={msgPassword}  />
      
        <SignInButton />
      
      </form>
      </div>



      

      : /** IF RADIO BUTTONS false */ 
      /** REGISTRATION FORM *************************/
      <div>

      <h3 className="text-xl font-thin p-2 bg-gray-50 my-2">Please register</h3>
      
      <form className="md:w-1/2 w-full" onSubmit={handleRegister}>
      
      {/** Username Field */}
        <UsernameField setUsername={setUsername} msgUsername={msgUsername} />

      {
        registrationForm 
        && 
        <span>
        <EmailField setEmail={setEmail} msgEmail={msgEmail} />
        <PasswordField setPassword={setPassword} msgPassword={msgPassword} />
        </span>
      }
      
      

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
      <RegisterButton  />
    
      </form>
        </div>
      }
    </div>
  )
}

export default EventBookingForm