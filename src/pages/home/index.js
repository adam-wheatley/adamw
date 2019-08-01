import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import Header from "../../components/Header"
import AboutMe from "./AboutMe"
import GetStarted from './GetStarted';
import MyProcess from './MyProcess';
import "./scss/Home.scss"

const HomePage = () => (
  <Layout seoTitle="Home">
    <Header
      bgStyle={{
        width: "100%",
        minHeight: "50vh",
        backgroundRepeat: "repeat-y",
        boxShadow: '0px 15px 10px -15px #111',    
      }}
      imageName="bg1.jpg"
    >
      <div className="home__main">
        <div className="home__main__title">
            <h1 className="home__main__title-text">
              High Quality Bespoke Web Solutions
            </h1>
            <h2 className="home__main__sub-title">
              Hey, I’m <b>Adam</b>. I am a freelance <b>web developer</b> that
              aim's to provide hiqh quality, unqiue & custom web solutions to
              fit your needs.
            </h2>
            <div className="home__main__buttons">
              <Link to="/contact">
                <button className="home__main__buttons-button">
                  Get in touch
                </button>
              </Link>
              <button className="home__main__buttons-button-alt">
                Find out more
              </button>
            </div>
        </div>
      </div>
    </Header>
    {/* <AboutMe />
    <Services />
    <WhatCanIdo /> */}
    {/* <section style={{ background: '#fff', minHeight: '1000px'}}>

    </section> */}

    <AboutMe />
    <MyProcess />
    <GetStarted />

    {/* <AboutMe />
    <WhatCanIdo />
    <CaseStudies /> */}
  </Layout>
)

export default HomePage
