import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import ContentBody from "./components/ContentBody";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar
          // score={this.state.score}
        />
        <ContentBody />
        <Footer />
      </div>
    );
  }
}

export default App;
