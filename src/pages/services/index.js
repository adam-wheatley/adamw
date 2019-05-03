import React from "react"
import Header from '../../components/Header'
import Layout from '../../components/Layout'

const ServicesPage = () => (
  <Layout seoTitle="Services">
    <Header
      bgStyle={{
        width: "100%",
        backgroundRepeat: "repeat-y",
        backgroundImage: `linear-gradient( 109.6deg,  rgba(83,94,161,1) 44.5%, rgba(188,14,107,1) 100.2% );`,
      }}
      imageName="bg3.jpg"
      title="Services"
    />
  </Layout>
)

export default ServicesPage
