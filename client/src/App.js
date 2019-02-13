import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  // Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import Home from "./pages/Home/Home";
import ReactSignupLoginComponent from './components/Authentication/ReactSignupLoginComponent';
import axios from 'axios';

import './App.css';

// ---- Authentication Function with callback
const authFunc = {
  isAuthenticated: false,
  authenticate(cb) {
    setTimeout(cb, 100) // Async Simulation
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100) // Async Simulation
  }
}

let userName = '';
let profilePic = '';

// ---- Stateful Login Component
class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }

  // ---- Log in authentication
  loginWasClickedCallback = (data) => {
    // console.log(data);
    // alert('Login callback, see log on the console to see the data.');

    axios.post('/api/account/signin', data)
      .then(function (res) {
        // console.log(res.data.success);
        if (res.data.success) {
          authFunc.isAuthenticated = true
          userName = data.username
          profilePic = res.data.profilePic
          console.log(userName)
          console.log(data)
        } else {
          authFunc.isAuthenticated = false
          alert(res.data.message)
        }
      })
      .then(this.login)
      .catch(function (err) {
        console.log(err);
      });
  };

  // ---- Sign up authentication
  signupWasClickedCallback = (data) => {
    console.log(data);
    // ----- Adding User
    axios.post('/api/account/signup', data)
      .then(function (res) {
        // console.log(res.data);
        if (res.data.success) {
          authFunc.isAuthenticated = true
          userName = data.username
          profilePic = data.profilePic
          console.log(profilePic)
        } else {
          authFunc.isAuthenticated = false
          alert(res.data.message)
        }
      })
      .then(this.login)
      .catch(function (err) {
        console.log(err);
      });
  };

  // ---- State changing function
  login = () => {
    authFunc.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }
  render() {
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to='/home' />
    }

    return (
      <div className="loginWrapper">
        <ReactSignupLoginComponent
          title="Welcome to KidKlub!"
          handleSignup={this.signupWasClickedCallback}
          handleLogin={this.loginWasClickedCallback}
        />
      </div>
    )
  }
}

// ---- Custom Made PrivateRoute component
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    authFunc.isAuthenticated === true
      ? <Component {...props} userName={userName} profilePic={profilePic}/>   // Passing username & profilePic as props
      : <Redirect to={{
        pathname: '/auth',
        state: { from: props.location }
      }} />
  )} />
)

const AuthButton = withRouter(({ history }) => (
  authFunc.isAuthenticated ? (
    <p className ="signout_button">
      Welcome! <button onClick={() => {
        authFunc.signout(() => history.push('/auth'))
      }}>Sign out</button>
    </p>
  ) : (
      <div>
        {/* <p>You are not logged in.</p> */}
        <Redirect to="/auth" />
      </div>
    )
))

export default function App() {



  return (
    <Router>
      <div>
        <AuthButton />
        <Route path="/" render={() => (
          <Redirect to="/home" />
        )} />
        <Route path="/auth" component={Login} />
        <Route path="/home" component={Home} />
        {/* <PrivateRoute
          path='/home'
           component={Home}
        /> */}
      </div>
    </Router>
  )
}