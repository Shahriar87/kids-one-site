/* ---- Sign Up page */
import './shims.js';

import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactSignupLoginComponent from './components/ReactSignupLoginComponent';

import './index.css';
import axios from 'axios';


const LoginApp = () => {
  const signupWasClickedCallback = (data) => {
    console.log(data);
    // alert('Signup callback, see log on the console to see the data.');

    // ----- Adding Favourites
    axios.post('/api/account/signup', data)
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });

  };
  const loginWasClickedCallback = (data) => {
    console.log(data);
    // alert('Login callback, see log on the console to see the data.');


  };

  return (
    <div className="loginWrapper">
      <ReactSignupLoginComponent
        title="Welcome to KidKlub!"
        handleSignup={signupWasClickedCallback}
        handleLogin={loginWasClickedCallback}
      />
    </div>
  );
};


export default LoginApp;