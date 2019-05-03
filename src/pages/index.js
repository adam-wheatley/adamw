import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Home/Header"
import About from "../components/Home/About"
import CaseStudies from "../components/Home/CaseStudies"
import BackgroundSection from "../components/Home/Header/BackgroundSection"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `web`,
        `development`,
        `software`,
        `design`,
        `freelance`,
        `scotland`,
      ]}
    />
    <BackgroundSection
      style={{
        width: "100%",
        minHeight: "50vh",
        backgroundRepeat: "repeat-y",
        backgroundImage: `linear-gradient(171.8deg,rgba(255,159,0,1) -6.3%, rgba(208,23,23,1) 86.7%)`,
      }}
      imageName="bg1.jpg"
    >
      <Header />
    </BackgroundSection>
    <About />
    <CaseStudies />
  </Layout>
)

export default IndexPage
