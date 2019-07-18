import React from "react"
import { graphql, StaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"

const RenderImage = ({ file, children, style }) => (
  <BackgroundImage
    Tag="section"
    style={style}
    fluid={file.node.childImageSharp.fluid}
  >
    {children}
  </BackgroundImage>
);

const BackgroundSection = ({ imageName, children, style }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(
          filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }
        ) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(quality: 100, maxWidth: 4160) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={({ images }) => {
      const file = images.edges.find(image => image.node.relativePath === imageName);
      return <RenderImage file={file} style={style}>{children}</RenderImage>;
    }}
  />
)

export default BackgroundSection
