import React from "react"
import NavigationBar from "./../../../components/Nav"
import BackgroundSection from "../../Home/Header/BackgroundSection"
import "./Header.scss"

const Header = () => (
  <BackgroundSection
    style={{
      width: "100%",
      backgroundRepeat: "repeat-y",
      backgroundImage: `linear-gradient( 109.6deg,  rgba(83,94,161,1) 44.5%, rgba(188,14,107,1) 100.2% );`,
    }}
    imageName="bg5.jpg"
  >
    <div className="about-header">
      <NavigationBar />
      <h1 className="about-header__title">About Me</h1>
    </div>
  </BackgroundSection>
)

export default Header
