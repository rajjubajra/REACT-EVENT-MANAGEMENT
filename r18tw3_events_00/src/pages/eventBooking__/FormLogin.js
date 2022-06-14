import React from 'react';
import UsernameField from '../../component/form/UsernameField';
import RadioTrue from '../../component/form/RadioTrue';
import RadioFalse from '../../component/form/RadioFalse';
import PasswordField from '../../component/form/PasswordField';
import SignInButton from '../../component/form/SignInButton';



function FormLogin(
  setUsername, 
  msgUsername, 
  setRadio, 
  setPassword, 
  msgPassword,
  username, setMsgUsername,
  password, setMsgPassword,
  setMessage, loginuser
  ) {


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

  return (
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
  )
}

export default FormLogin