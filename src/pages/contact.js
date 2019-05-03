import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from '../components/Contact'

const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`web`, `development`, `software`, `design`, `freelance`, `scotland`]} />
    <Contact />
  </Layout>
)

export default ContactPage
