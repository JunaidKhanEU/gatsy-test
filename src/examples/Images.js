import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import img from "../images/img-1.jpg"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "img-3.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    fluid: file(relativePath: { eq: "img-2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const Images = () => {
  const { fixed, fluid } = useStaticQuery(getImages)
  console.log(fixed, fluid)
  return (
    <section className="images">
      <article className="single-image">
        <h3> basic image </h3>
        <img src={img} alt="basic" width="100%" />
        <h2>content</h2>
      </article>
      <article className="single-image">
        <h3> Fixed image / blur </h3>
        <Image fixed={fixed.childImageSharp.fixed} />
        <h2>content</h2>
      </article>
      <article className="single-image">
        <h3> Fluid image / SVG </h3>
        <Image fluid={fluid.childImageSharp.fluid} />
        <h2>content</h2>
      </article>
    </section>
  )
}

export default Images
