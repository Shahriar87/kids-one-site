import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Video from "./pages/Video/Video";
import Game from "./pages/Game/Game";
import MessengerApp from "./components/messenger/MessengerApp";

import LoginApp from "./LoginApp";


class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Route exact path="/" component={LoginApp} />

          <Navbar />
          <Route exact path="/home" component={Home} />
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
