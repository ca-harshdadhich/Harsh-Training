import React, { useState } from 'react';
import './logInPage.css';

import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ForgotPassword from 'LogIn_Page/forgotPassword';
import { Axios,Axios_v2 } from "./axios";



// This function deals 
function App() {
  
  const [condition,setCONDITION]=useState(false);
  const [LoginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
    });
  
  
  
  const navigate = useNavigate();

  const emailHandler = (value) => {
    // setIsEmailvalid(emailValidator(value));
    setLoginDetails((prevValue) => ({ ...prevValue, email: value }));
    
  };
  const passwordHandler = (value) => {
    // setisPasswordValid(passwordValidator(value));
    setLoginDetails((prevValue) => ({ ...prevValue, password: value }));
  };
  
  let res;
  const submit = async (event) => {
    event.preventDefault();
    if (LoginDetails.email.trim() === '' || LoginDetails.password.trim() === '') {
      alert('Please enter both email and password');
      return;
    }
   

    try {
      const response =  await Axios_v2.post("/auth/login/", LoginDetails);
      console.log(response.data.message);
      console.log(response);
      console.log(response.data.response);
      //alert(response.data.message);
      //res=response.data.message;
      
      if(response.data.message=="You have signin successfully!")
      {
       console.log("signed in ");
       alert('success');
      }
      if(response.data=="password not matched"){
          setCONDITION(true);
      }
      else{
        setCONDITION(false);
      }

    } catch (error) {
      console.error(error);
      console.log('Error occurred');
      console.log('harsh');
    }
  };

  return (

<div className="App1">
        <div className="image-container1">
          <img src={process.env.PUBLIC_URL + '/images/log_in_pic.png'} alt="Sign-Up Logo Picture" />
        </div>
        <div className="login-details">
          <div className="Logo_Name">
            <img src={process.env.PUBLIC_URL + '/images/logo_2.png'} alt="logo image" />
          </div>
          <div className="no-Account">
            <p>
              <Link to="/signup"   >
                <button  className="sign-up">
                Don't have an account! Sign up
                </button>
              </Link>
            </p>
          </div>
          <div className="login-form">
            <h2>Hello! Let's get started</h2>
            <form>
              <label htmlFor="username">Enter your details below. </label>
              <br />
              <div className="email-box">
                <img id="email-image" src="../images/Email.png" alt="email logo" />
                <input
                  id="email-input"
                  type="text"
                  name="username"
                  placeholder="Enter Email Address"
                  onChange={(e) => {
                    emailHandler(e.target.value);
                  }}
                />
                <br />
              </div>
              <div className="password-box">
                <img id="password-image" src="../images/password.png" alt="password logo" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={(e) => {
                    passwordHandler(e.target.value);
                  }}
                />
                <br />
              </div>
              <button type="submit" onClick={submit} id="bn">
                LOG IN
              </button>
              <br></br>
              {condition && <ForgotPassword />}
            </form>
          </div>
        </div>
      </div>
      
     
  );    
     
                }
export default App;
