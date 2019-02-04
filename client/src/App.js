import React, { Component } from 'react';
import './App.css';
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import LoginApp from "./LoginApp";

const fakeAuth = {
  isAuthenticated: true,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100) // fake async
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
      fakeAuth.isAuthenticated === true
      ?<Component {...props}/>
      :<Redirect to='/'/>
  )} />
)


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LoginApp} />
          <PrivateRoute exact path="/home" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
