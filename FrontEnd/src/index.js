import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './logInPage';
import reportWebVitals from './reportWebVitals';
import SignUp from './LogIn_Page/sign_up';
import NavigionatLinks from 'App';
import { MyProvider } from './helpers/context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode> 
  <MyProvider>
    < NavigionatLinks/>
  </MyProvider>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
