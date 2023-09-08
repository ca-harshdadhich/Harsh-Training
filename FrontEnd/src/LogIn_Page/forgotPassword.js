
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './forgotPassword.css';

function ForgotPassword() {
  const navigate = useNavigate();
 const resetPassword=()=>{
         navigate('/resetpassword');
      
  }
   return (
        <button onClick={resetPassword} className='forgotbuton' > Forgot Password ? </button>
    );
}

export default ForgotPassword;
