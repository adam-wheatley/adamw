import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Services from '../components/Services'
import Nav from '../components/Nav'

const ServicesPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`web`, `development`, `software`, `design`, `freelance`, `scotland`]} />
    <Nav />
    <Services />
  </Layout>
)

export default ServicesPage
