import React from "react"
import PropTypes from "prop-types"
import Footer from './Footer'
import "animate.css/animate.min.css"
import './styles/main.scss'

const Layout = ({ children }) => (
  <div>
    <main>{children}</main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
