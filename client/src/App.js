import React, { Component } from 'react';
import './App.css';
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginApp from "./LoginApp";



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LoginApp} />
          <Route exact path="/home" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
