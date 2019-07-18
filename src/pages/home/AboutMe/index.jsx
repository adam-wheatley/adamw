import React from "react"
import "./AboutMe.scss"

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="about-me__content">
        <div className="about-me__heading" height="15">
          <h1 className="about-me__heading-main">About Me</h1>
          <div className="about-me__pill" />
          <h4 className="about-me__heading-sub">
            Hey, I’m Adam. I am a freelance web developer that aim's to provide
            hiqh quality, unqiue & custom web solutions to fit your needs.
          </h4>
        </div>
        <br />
        <p className="about-me__description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint perferendis ad itaque minus inventore consectetur saepe illo mollitia quidem dolores repellat rem nulla quaerat eos, iste hic in fugiat pariatur.Similique sapiente eius doloremque quas animi commodi quae quaerat repellat fuga magnam inventore totam perspiciatis magni architecto quis officiis temporibus nihil earum cumque deleniti, quos voluptates debitis! Hic, eveniet consequatur!
        </p>
      </div>
    </div>
  )
}

export default AboutMe
