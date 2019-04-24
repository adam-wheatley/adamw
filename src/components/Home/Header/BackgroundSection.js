import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ children }) => (
    <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "bg1.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
     render={data => {
       // Set ImageData.
       const imageData = data.desktop.childImageSharp.fluid
       return (
          <BackgroundImage Tag="section"
                           style={{
                               width: '100%',
                               minHeight: '50vh',
                               backgroundRepeat: 'repeat-y',
                               backgroundImage: `linear-gradient(171.8deg,rgba(255,159,0,1) -6.3%, rgba(208,23,23,1) 86.7%)`
                           }}
                           fluid={imageData}
          >
            {children}
          </BackgroundImage>
       )
     }
     }
    />
)

export default BackgroundSection