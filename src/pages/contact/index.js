import React from "react"
import Header from "../../components/Header"
import Layout from "../../components/Layout"
import Form from "./Form"

const ContactPage = () => (
  <Layout seoTitle="Contact Me">
    <Header
      bgStyle={{
        width: "100%",
        backgroundRepeat: "repeat-y",
        backgroundImage: `linear-gradient(109.6deg,  rgba(83,94,161,1) 44.5%, rgba(188,14,107,1) 100.2%)`,
      }}
      imageName="bg2.jpg"
      title="Get in Touch"
      description="If you are interested in hiring me, or just have some questions please get in touch."
    >
      <div className="container">
        <Form />
      </div>
    </Header>
  </Layout>
)

export default ContactPage
