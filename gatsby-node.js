const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              image
            }
          }
        }
      }
    }
  `).then(result => generateContent(createPage, result))
}

function generateContent(createPage, graphqlResults) {
  if (graphqlResults.errors) {
    return Promise.reject(graphqlResults.errors)
  }

  const postTemplate = path.resolve('src/templates/post.js')

  graphqlResults.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: postTemplate
    })
  })
}
