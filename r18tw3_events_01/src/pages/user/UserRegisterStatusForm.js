import React from 'react';
import {actionUserRegisterStatus} from '../../redux/userRegisterStatusSlice';
import {useDispatch, useSelector} from 'react-redux';


function UserRegisterStatusForm() {

  const dispatch = useDispatch();

  /** set password input field view and hide */
  const {registered} = useSelector(state => state.user_register_status);   
  console.log("register statu form",registered);


  return (
    <>
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
                    onClick={()=> dispatch(actionUserRegisterStatus(true))}
                    checked={registered && "checked"}
                    />
              <span className="ml-2">Yes</span>
            </div>
            <div>
            <input type="radio" 
                    className="input-field" 
                    name="booking-password" 
                    onChange={()=> dispatch(actionUserRegisterStatus(false))}
                    checked={!registered && "checked"}
                    />
              <span className="ml-2">No, I have not booked before</span>
            </div>  
          </div>      
        </div>
      </>
  )
}

export default UserRegisterStatusForm