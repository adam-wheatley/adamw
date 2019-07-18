import React from "react"
import "./Services.scss"

const Services = () => {
  return (
    <div className="services">
      <div className="services__content">
        <div className="services__heading" height="15">
          <h1 className="services__heading-main">Services</h1>
          <div className="services__pill" />
          {/* <br /> */}
          <h4 className="services__heading-sub">
            Hey, I’m Adam. I am a freelance web developer that aim's to provide
            hiqh quality, unqiue & custom web solutions to fit your needs.
          </h4>
        </div>
        <br />
        <p className="services__description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint perferendis ad itaque minus inventore consectetur saepe illo mollitia quidem dolores repellat rem nulla quaerat eos, iste hic in fugiat pariatur.Similique sapiente eius doloremque quas animi commodi quae quaerat repellat fuga magnam inventore totam perspiciatis magni architecto quis officiis temporibus nihil earum cumque deleniti, quos voluptates debitis! Hic, eveniet consequatur!
        </p>
      </div>
    </div>
  )
}

export default Services
