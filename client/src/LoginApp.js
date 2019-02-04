/* ---- Sign Up page */
import './shims.js';

import React from 'react';
import ReactSignupLoginComponent from './components/ReactSignupLoginComponent';
import { withRouter } from 'react-router-dom';

import './index.css';
import axios from 'axios';


const LoginApp = (props) => {
  const signupWasClickedCallback = (data) => {
    console.log(data);
    // ----- Adding User
    axios.post('/api/account/signup', data)
      .then(function (res) {
        // console.log(res.data);
        if (res.data.success) {
          props.history.push('/home');
        } else {
          props.history.push('/');
          alert(res.data.message);
        }
      })
      .catch(function (err) {
        // console.log(err);
      });
  };

  const loginWasClickedCallback = (data) => {
    console.log(data);
    // alert('Login callback, see log on the console to see the data.');

    axios.post('/api/account/signin', data)
      .then(function (res) {
        console.log(res);
        if (res.data.success) {
          props.history.push('/home');

        } else {
          props.history.push('/');
          alert(res.data.message);
        }
      })
      .catch(function (err) {
        // console.log(err);
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


export default withRouter(LoginApp);