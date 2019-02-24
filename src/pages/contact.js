import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactHeader from '../components/Contact/Header'
import Nav from '../components/Nav'

const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`web`, `development`, `software`, `design`, `freelance`, `scotland`]} />
    <Nav />
    <ContactHeader />
  </Layout>
)

export default ContactPage
