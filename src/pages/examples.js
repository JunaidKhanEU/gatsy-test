import React from "react"
import Header from "../examples/Header"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
const examples = props => {
  return (
    <Layout>
      <h1>ExamplePage</h1>
      <p>{props.data.site.info.description}</p>
      <Header />
    </Layout>
  )
}

export const data = graphql`
  query {
    site {
      info: siteMetadata {
        author
        data
        description
        title
        person {
          age
          name
        }
      }
    }
  }
`

export default examples
