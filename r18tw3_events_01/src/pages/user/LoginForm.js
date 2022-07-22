import React, {useState, useEffect} from 'react';
import UsernameField from '../../component/form/UsernameField';
import PasswordField from '../../component/form/PasswordField';
import SubmitButton from '../../component/form/SubmitButton';
import {useDispatch, useSelector} from 'react-redux';
import {loginuser} from './loginuser';
import AlertMessage from '../../component/AlertMessage';
import {actionLoginStatus} from '../../redux/loginStatusSlice';
import {actionLoginStatusError} from '../../redux/loginStatusErrorSlice';
import UserRegisterStatusForm from './UserRegisterStatusForm';
import {simpleOauthToken} from '../../config/simpleOauthToken';



function LoginForm({nodeId}){

  const dispatch = useDispatch();

  /** user registration status */
  const {registered} = useSelector(state => state.user_register_status);
  //console.log("REgistered : ", registered);


  /** Form input value */
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  /** Login Response [axios] */
  const [status, setStatus] = useState('');
  /** Login Error Response [axios] */
  const [error, setError] = useState('');


  /** JWT TOKEN STATUS  */
  const [tokenStatus, setTokenStatus] = useState('');
  const [tokenError, setTokenError] = useState('');
  //console.log("Simple Oauth STATUS : ",tokenStatus, tokenError);


  /** Login status sent to redux state management */
  useEffect(()=>{
      dispatch(actionLoginStatus(status));
  },[dispatch, status])
  /** Login Error message to redux state mangement */
  useEffect(()=>{
    dispatch(actionLoginStatusError(error));
  },[dispatch, error])


  console.log("Login Status : ", status);
  console.log("error Status : ", error);


  /** Input Field Message True of false 
   *  in order to input field validation
  */
  const [msgUsername, setMsgUsername] = useState(false);
  const [msgPassword, setMsgPassword] = useState(false);

  
  /** HANDLE SIGN-IN FORM */
  const handleSignIn = (e) => {

    e.preventDefault();
    
    /** form validation */
    username ? setMsgUsername(false) : setMsgUsername(true);
    password ? setMsgPassword(false) : setMsgPassword(true);

    if(username && password) {
      //dispatch(actionUserLogin(username, password));
      loginuser(username, password, setStatus, setError);
      console.log("userlogin ???", username, password, status);
      //simpleOauthToken(username, password, setTokenStatus, setTokenError);
    }
  }


  return (
    <div>
        <h3 className="text-xl font-thin p-2 my-2 bg-gray-50">
          Please sign in to book a place</h3>
        <AlertMessage message="Message Alert" status={status} />
      <form className="md:w-1/2 w-full" onSubmit={handleSignIn}>
      
      {/** Username field */}
        <UsernameField setUsername={setUsername} msgUsername={msgUsername} />
        

{/** RADIO BUTTONS */}
    <div className="my-3">           
    {/** Radio button : View change Login Form and Register Form */}           
      <UserRegisterStatusForm />
    </div>  
          

{/** PASSWORD INPUT */}
      { registered &&
        <span>
        <PasswordField 
          setPassword={setPassword} 
          msgPassword={msgPassword}/>
        <SubmitButton name="Log-in" />
        </span>}
      </form>
    </div>
  )
}

export default LoginForm;