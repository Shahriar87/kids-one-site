// ----- NavTabs component
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Navbar, NavDropdown, Nav, NavTabs, Form, FormControl, Button} from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">KidKlub</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/video">Video</Nav.Link>
                        <Nav.Link href="/game">Game</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;