const path = require("path")

// create pages dynamically

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query getProducts {
      products: allContentfulProduct {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.products.nodes.forEach(pro => {
    createPage({
      path: `/products/${pro.slug}`,
      component: path.resolve("src/templates/product-template.js"),
      context: {
        slug: pro.slug,
      },
    })
  })
}
