import React, { useState } from 'react';
import axios from 'axios';
import 'LogIn_Page/sign_up.css';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  let res="";
  const navigate = useNavigate();
  const [emailId, setEMAIID] = useState('');
  const [password, setPASSWORD] = useState('');
  const submit = async (event) => {  //fucntion to execute when user hit "Create Account Button"........
     event.preventDefault();
     if (emailId.trim() === '' || password.trim() === '') {
       alert('Please enter both email and password');
       return;
     }
     console.log(emailId);
     console.log(password);
 
     try {
       const response = await axios.post('http://localhost:8000/resetpassword', { emailId, password });
       console.log(response.data.message);
       alert(response.data.message);
       res=response.data.message;
       console.log(response.data.message);
       if(res=="Password updated successfully!")
       {
         navigate('/');
       }
     } catch (error) {
       console.error(error);
       console.log('Error occurred');
     }
   };
 

  

  return (
         
     <body>
    <div className='SIGNUP-BOX11'>
         <div className='logoPIC11'>
                  <img src=" ../images/LOGOsignup.png"></img>
         </div>
         <h2 className='txt11'>Enter details to change password</h2>
         <p  className='txt11'>Enter your details below</p>
         <form className='formName11'>
         <div className='email-box11'>
              <img id="email-image11" src="../images/Email.png" alt="email logo" />
              <input id="email-input11" type="text" name="username" placeholder="Enter Email Address" onChange={(e) => { setEMAIID(e.target.value) }} />
              <br />
         </div>
         <div className='password-box11'>
              <img id="password-image11" src="../images/password.png" alt="password logo" />
              <input type="password" id="password11" name="password" placeholder="Enter your password" onChange={(e) => {  setPASSWORD(e.target.value) }} />
              <br />
         </div>
         
         <button type="submit" className="btn" onClick={submit}>Reset Password</button>
         </form>
      
    </div>
    </body>
  );
}

export default SignUp;
