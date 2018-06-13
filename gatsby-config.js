module.exports = {
  siteMetadata: {
    title: 'Oneshots',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/adventures`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-remark`,
  ],
}
