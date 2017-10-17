import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
      {posts &&
        posts.map(({ node: post }) => {
          const { path, title, image } = post.frontmatter
          return (
            <div key={path} className="posts">
              <h1>{title}</h1>
              {image && <img src={image} />}
              <Link to={path}>Go to post</Link>
            </div>
          )
        })}
    </div>
  )
}

export const postsQuery = graphql`
  query allBlogPosts {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
            title
            image
          }
          html
        }
      }
    }
  }
`

export default IndexPage
