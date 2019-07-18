import React from "react"
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import dev from './designer.svg';
import CaseStudies from './CaseStudies';

import './scss/about.scss';

const AboutPage = () => (
  <Layout seoTitle="What I do?">
    <Header
      bgStyle={{
        width: "100%",
        backgroundRepeat: "repeat-y",
        backgroundImage: `linear-gradient(109.6deg,  rgba(83,94,161,1) 44.5%, rgba(188,14,107,1) 100.2%)`,
      }}
      imageName="bg5.jpg"
      title="Full Stack Web Developer"
    />
    <section className="what-i-do">
      <img src={dev} height="250" className="mb-5" />
      <p className="what-i-do__main">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint perferendis ad itaque minus inventore consectetur saepe illo mollitia quidem dolores repellat rem nulla quaerat eos, iste hic in fugiat pariatur.Similique sapiente eius doloremque quas animi commodi quae quaerat repellat fuga magnam inventore totam perspiciatis magni architecto quis officiis temporibus nihil earum cumque deleniti, quos voluptates debitis! Hic, eveniet consequatur!
      </p>
    </section>
    <CaseStudies />
  </Layout>
)

export default AboutPage
