import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import "./Nav.scss"

const NavigationBar = () => (
  <div>
    <Navbar className="nav" expand="lg">
      <Link className="nav__brand" to="/">
        Adam Wheatley
      </Link>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav abs-center-x">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            What I do
          </Link>
          <Link to="/work" className="nav-link">
            Client Work
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </Nav>
        <button className="nav__button ml-auto mt-4">
          Give me a call +447393507971
        </button>
      </Navbar.Collapse>
    </Navbar>
  </div>
)

export default NavigationBar
