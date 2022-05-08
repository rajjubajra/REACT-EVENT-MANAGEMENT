import React,{useEffect, useState} from 'react';
import EmailField from '../../component/form/EmailField';
import RadioTrue from '../../component/form/RadioTrue';
import RadioFalse from '../../component/form/RadioFalse';
import PasswordField from '../../component/form/PasswordField';
import RegisterButton from '../../component/form/RegisterButton';
import SignInButton from '../../component/form/SignInButton';

function EventBookingForm({nid}) {


  const [radio, setRadio] = useState(false);
  //console.log(registration);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e);
  }

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log(e);
  }

  console.log(email);
  console.log(password);

  return (
    <div>
      <h2>Event Title</h2>
      <p>Please sign in to book a place</p>
      <form className="md:w-1/2 w-full">

{/** Email Address */}
        <EmailField setEmail={setEmail} />

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
        ? <PasswordField setPassword={setPassword} />
        : <RegisterButton handleRegister={handleRegister} />
      }
      {
        radio && <SignInButton handleSignIn={handleSignIn} />
      }
      </form>

    </div>
  )
}

export default EventBookingForm