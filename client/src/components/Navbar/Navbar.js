// ----- NavTabs component
import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="nav_color navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            {/* <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a> */}
                            <Link className="mr-3" to={'/home'}>Home </Link>
                        </li>
                        <li className="nav-item">
                            {/* <a class="nav-link" href="/video">Video</a> */}
                            <Link className="mr-3" to={'/video'}>Video </Link>

                        </li>
                        <li className="nav-item">
                            {/* <a class="nav-link" href="/game">Game</a> */}
                            <Link className="mr-3" to={'/game'}>Game </Link>

                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;