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

    // Grab state
    const {
      signUpUsername,
      signUpPassword,
    } = this.state;
    this.setState({
      isLoading: true,
    });

    // alert('Signup callback, see log on the console to see the data.');

    // ----- Adding Favourites
    axios.post('/api/account/signup', data)
      .then(function (res) {
        console.log(res);

      })

      .then(json => {
        console.log('json', json);
        if (json.success) {
          this.setState({
            signUpError: json.message,
            isLoading: false,
            signUpUsername: '',
            signUpPassword: '',
          });
        } else {
          this.setState({
            signUpError: json.message,
            isLoading: false,
          });
        }
      })


      .catch(function (err) {
        console.log(err);
      });

  };
  const loginWasClickedCallback = (data) => {
    console.log(data);
    // alert('Login callback, see log on the console to see the data.');

    axios.post('/api/account/signin', data)
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
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