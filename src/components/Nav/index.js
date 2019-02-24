import React from "react"
import { slide as Menu } from "react-burger-menu"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import "./Nav.scss"

var styles = {
    bmBurgerButton: {
      position: 'absolute',
      width: '36px',
      height: '30px',
      right: '20px',
      top: '20px'
    },
    bmBurgerBars: {
      background: '#FFF'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#22333B',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }


const NavigationBar = () => (
  <div>
    <Navbar className="nav" expand="lg">
      <Link className="nav__brand" to="/">
        Adam Wheatley
      </Link>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav abs-center-x">
          <Link to="/" className="nav-link">
            Work
          </Link>
          <Link to="/services" className="nav-link">
            Services
          </Link>
          <Link to="/about" className="nav-link">
            About
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
    <div style={{ marginTop: '-80px'}}>
    <Menu width={ 280 } styles={ styles } >
        <div className="sidemenu-nav">
        <Link className="sidemenu-nav__brand" to="/">
        Adam Wheatley
      </Link>
            <ul className="sidemenu-nav__list">
                <li className="sidemenu-nav__list-item">
                    <Link className="sidemenu-nav__list-item-link" to="/">Home</Link>
                </li>
                <li className="sidemenu-nav__list-item">
                <Link className="sidemenu-nav__list-item-link" to="/about">About</Link>
            </li>
                    <li className="sidemenu-nav__list-item">
                    <Link className="sidemenu-nav__list-item-link" to="/services">Servcies</Link>
                </li>
                <li className="sidemenu-nav__list-item">
                <Link className="sidemenu-nav__list-item-link" to="/contact">Contact</Link>
            </li>
            </ul>
        </div>
    </Menu>
    </div>
  </div>
)

export default NavigationBar
