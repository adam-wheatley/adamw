import React from "react"
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import Preview from './preview.png';
import './scss/work.scss';

const WorkPage = () => (
  <Layout seoTitle="Client Work">
    <Header
      bgStyle={{
        width: "100%",
        backgroundRepeat: "repeat-y",
        backgroundImage: `linear-gradient(109.6deg, rgba(83,94,161,1) 44.5%, rgba(188,14,107,1) 100.2%)`,
      }}
      imageName="bg3.jpg"
      title="Client Work"
    />
    <section className="work">
      <div className="work__header">
        <h1>Webster Fire Protection</h1>
        <div className="work__pill" />
      </div>
      <div className="work__img-wrapper">
        <img className="work__img" src={Preview} alt="" />
      </div>

      <div className="work__description">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint perferendis ad itaque minus inventore consectetur saepe illo mollitia quidem dolores repellat rem nulla quaerat eos, iste hic in fugiat pariatur.Similique sapiente eius doloremque quas animi commodi quae quaerat repellat fuga magnam inventore totam perspiciatis magni architecto quis officiis temporibus nihil earum cumque deleniti, quos voluptates debitis! Hic, eveniet consequatur!
        </p>
      </div>
    </section>
    <section className="work-sub">
      <div className="work-sub__main">
      <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint perferendis ad itaque minus inventore consectetur saepe illo mollitia quidem dolores repellat rem nulla quaerat eos.
        </p>
      </div>

    </section>
  </Layout>
)

export default WorkPage
