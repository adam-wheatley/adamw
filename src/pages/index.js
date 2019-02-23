import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from '../components/Home/Header'
import About from '../components/Home/About'
import CaseStudies from '../components/Home/CaseStudies'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`web`, `development`, `software`, `design`, `freelance`, `scotland`]} />
    <Header />
    <About />
    <CaseStudies />
  </Layout>
)

export default IndexPage
