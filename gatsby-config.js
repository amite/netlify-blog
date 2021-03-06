module.exports = {
  siteMetadata: {
    title: `Gatsby Netlify Blog`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content/post`,
        name: 'posts'
      }
    },
    'gatsby-transformer-remark'
  ]
}
