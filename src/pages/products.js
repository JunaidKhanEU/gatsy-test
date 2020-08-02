import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../styles/product.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"

const ComponentName = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data

  console.log("products", products)
  return (
    <Layout>
      <section className={styles.page}>
        {products.map(pro => {
          return (
            <article key={pro.id}>
              <Image fluid={pro.image.fluid} alt={pro.title} />
              <h3>
                {pro.title} <span>${pro.price}</span>
                <Link to={`/products/${pro.slug}`}>more details</Link>
              </h3>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      totalCount
      nodes {
        title
        price
        id
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default ComponentName
