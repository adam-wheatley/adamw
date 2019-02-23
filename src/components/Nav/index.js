import React from 'react'
import { Navbar, Nav }from 'react-bootstrap'
import { Link } from 'gatsby'
import './Nav.scss'

const NavigationBar = () => (
    <Navbar className="nav" expand="lg">
        <Navbar.Brand className="nav__brand" href="#home">Adam Wheatley</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav abs-center-x">
            <Link to='/' className="nav-link">Work</Link>
            <Link to='/services' className="nav-link">Services</Link>
            <Link to='/about' className="nav-link">About</Link>
            <Link to='/contact' className="nav-link">Contact</Link>
        </Nav>
        <button className="nav__button ml-auto mt-4">Give me a call +447393507971</button>
        </Navbar.Collapse>
    </Navbar>
);

export default NavigationBar;
