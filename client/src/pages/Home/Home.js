import React from "react";
import ContentBody from "../../components/ContentBody/ContentBody";
import GameBody from "../../components/GameBody/GameBody";
import VideoBody from "../../components/VideoBody/VideoBody";
import LoginApp from "../../LoginApp";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from 'react-router-dom';


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Home() {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={LoginApp} />
                    <Route exact path="/home" component={ContentBody} />
                    <Route exact path="/video" component={VideoBody} />
                    <Route exact path="/game" component={GameBody} />
                </Switch>
                <Footer />
            </div>
        </Router >



    );
}

export default Home;