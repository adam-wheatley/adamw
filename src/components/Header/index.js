import React from 'react'
import BackgroundSection from './BackgroundSection'
import NavigationBar from '../Nav'
import './Header.scss'

const Header = ({ bgStyle, imageName, title, description, children }) => (
    <BackgroundSection style={bgStyle} imageName={imageName}>
        <NavigationBar />
        <header className="header">
            {title && <h1 className="header__title">{title}</h1>}
            {description && <p className="header__description">{description}</p>}
            {children}
        </header>
    </BackgroundSection>
);

export default Header;