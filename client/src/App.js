import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Game from "./pages/Game";

class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/video" component={Video} />
          <Route exact path="/game" component={Game} />

          {/* <Route exact path="/about" component={About} /> */}
 
          <Footer />
        </div>
      </Router >



    );
  }
}

export default App;
