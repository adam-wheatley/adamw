import React from "react"
import PropTypes from "prop-types"
import Footer from '../Footer'
import SEO from '../SEO'

import "animate.css/animate.min.css"
import '../../scss/main.scss'

const Layout = ({ children, seoTitle, seoKeywords }) => (
  <div>
    <SEO title={seoTitle} keywords={seoKeywords}/>
    <main>{children}</main>
    <Footer />
  </div>
);

Layout.defaultProps = {
  seoKeywords: [
    `web`,
    `development`,
    `software`,
    `design`,
    `freelance`,
    `scotland`,
  ]
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  seoTitle: PropTypes.string.isRequired,
  seoKeywords: PropTypes.array,
}

export default Layout
