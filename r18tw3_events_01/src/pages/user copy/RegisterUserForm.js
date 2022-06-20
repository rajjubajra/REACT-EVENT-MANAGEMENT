import React,{useState} from 'react';
import UsernameField from '../../component/form/UsernameField';
import EmailField from '../../component/form/EmailField';
import PasswordField from '../../component/form/PasswordField';
import PasswordConfirmationField from '../../component/form/PasswordConfirmationField';
import RegisterButton from '../../component/form/RegisterButton';
import {actionBookingPassword} from '../../redux/bookingPasswordSlice';
import {useDispatch} from 'react-redux';
import AlertMessage from '../../component/AlertMessage';
import {registeruser} from './registeruser';


function RegisterUserForm( 
  setBookingPassword) {

  /** redux value for "Do you have Booking Password" true/false  
   *  value pass by radio button */  
  const dispatch = useDispatch();

  /** FORM input field value */
  const [username, setUsername] = useState('')    
  const [password, setPassword] = useState('')
  const [email,setEmail] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  /** Form validation message */
  const [msgUsername, setMsgUsername] = useState(false);
  const [msgPassword, setMsgPassword] = useState(false);
  const [msgEmail, setMsgEmail] = useState(false);
  const [msgConfirmPassword, setMsgConfirmPassword] = useState(false)

  /** Register Status Message */
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');



    const handleRegister = (e) => {
      e.preventDefault();

     /** form validation */
      username ? setMsgUsername(false) : setMsgUsername(true);
      password ? setMsgPassword(false) : setMsgPassword(true);
      email ? setMsgEmail(false) : setMsgEmail(true);
      confirmPassword ? setMsgConfirmPassword(false) : setMsgConfirmPassword(true)

      if(username && password && confirmPassword && email){
        registeruser(username, email, password, setMessage, setStatus);
      }



    }


  

  return (
    <div>
      <h3 className="text-xl font-thin p-2 bg-gray-50 my-2">Please register</h3>
      <AlertMessage message={message} status={status} />
      <form className="md:w-1/2 w-full" onSubmit={handleRegister}>

        {/** Username Field */}
        <UsernameField setUsername={setUsername} msgUsername={msgUsername} />
        {/** Email field */}
        <EmailField setEmail={setEmail} msgEmail={msgEmail} />
        {/** Password Field */}
        <PasswordField setPassword={setPassword} msgPassword={msgPassword} />
        {/** Confirm Password Field */}
        <PasswordConfirmationField setConfirmPassword={setConfirmPassword} msgConfirmPassword={msgConfirmPassword} />


      {/** RADIO BUTTONS for BookingPassword True/False */}
        <div className="my-3">          
          <label>Do you have a booking password</label>
          <div>
            <div>
            <input type="radio" 
                    className="input-field" 
                    name="booking-password" 
                    onChange={() => dispatch(actionBookingPassword(true))} 
                    />
              <span className="ml-2">Yes</span>
            </div>
            <div>
            <input type="radio" 
                    className="input-field" 
                    name="booking-password" 
                    onChange={() => dispatch(actionBookingPassword(false))} 
                    />
              <span className="ml-2">No, I have not booked before</span>
            </div>  
          </div>      
        </div>

      {/** PASSWORD INPUT */}
      <RegisterButton  />
      </form>
    </div>
  )
}

export default RegisterUserForm
