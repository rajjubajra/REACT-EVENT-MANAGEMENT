import React from 'react';
import {useSelector} from 'react-redux';

function AlertMessage() {

  //const {login} = useSelector(state => state.login_status);
  const {login_error} = useSelector(state => state.login_status_error)

  return (
    login_error.status === 400 
    && <div className="p-2 my-2 bg-red-300">
          {login_error && login_error.data.message}
        </div>
    

  )
}

export default AlertMessage