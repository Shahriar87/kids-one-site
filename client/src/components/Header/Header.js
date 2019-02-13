// ----- NavTabs component
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';



class Header extends Component {
    render() {
        return (
            <Navbar id="nav_main" expand="lg">
                <Navbar.Brand id="nav_brad" className="shadow" href="#home">Welcome to KidKlub!</Navbar.Brand>
                <img src="/Images/kidklub.png" alt="logo" style={{width: "5%"}}/>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>
                            <Link className="mr-3 navigation" to={'/home'}>Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="mr-3 navigation" to={'/video'}>Video</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="mr-3 navigation" to={'/game'}>Game</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;