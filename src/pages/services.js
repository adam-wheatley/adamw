import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Services from '../components/Services'

const ServicesPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`web`, `development`, `software`, `design`, `freelance`, `scotland`]} />
    <Services />
  </Layout>
)

export default ServicesPage
