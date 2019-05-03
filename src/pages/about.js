import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from '../components/About'
import Nav from '../components/Nav'

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`web`, `development`, `software`, `design`, `freelance`, `scotland`]} />
    <About />
  </Layout>
)

export default AboutPage
