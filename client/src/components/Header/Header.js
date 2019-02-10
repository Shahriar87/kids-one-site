// ----- NavTabs component
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <Navbar id="nav_main" expand="lg">
                <Navbar.Brand id="nav_brad" className="shadow" href="#home">Welcome to KidKlub!</Navbar.Brand>
                <img src=""></img>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>
                            <Link className="mr-3" to={'/home'}>Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="mr-3" to={'/video'}>Video</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="mr-3" to={'/game'}>Game</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;