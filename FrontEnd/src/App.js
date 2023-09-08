import React from 'react';
import { BrowserRouter as Router, Routes , Route ,BrowserRouter,} from 'react-router-dom';
import App from './logInPage';
import SignUp from './LogIn_Page/sign_up';
import  DashHome from './dashBoard/dashboard';
import ResetPassword from 'LogIn_Page/resetPassword';

function NavigionatLinks(){
         return(
                 <Routes>
                           
                            <Route path="/" element={<App/>}/>
                            <Route path="/signup" element={<SignUp/>}/>
                            <Route path="/dashboard" element={<DashHome/>}/>
                            <Route path="/resetpassword" element={< ResetPassword />}/>
                            >
                  </Routes> <BrowserRouter
                  
                  </BrowserRouter>
         );
}
export default  NavigionatLinks;