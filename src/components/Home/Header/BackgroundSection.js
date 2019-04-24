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
                           }}
                           fluid={imageData}
                           backgroundColor={`#040e18`}
          >
            {children}
          </BackgroundImage>
       )
     }
     }
    />
)

export default BackgroundSection