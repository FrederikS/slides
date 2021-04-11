module.exports = {
  pathPrefix: '/slides',
  plugins: [
    {
      resolve: `gatsby-theme-mdx-deck`,
      options: {
        contentPath: `./decks`,
      },
    },
  ],
};
