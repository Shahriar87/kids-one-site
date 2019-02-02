import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";



class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <Home />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
