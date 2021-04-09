module.exports = {
  plugins: [
    "gatsby-plugin-catch-links",
    {
      resolve: `gatsby-theme-mdx-deck`,
      options: {
        contentPath: `./decks`,
      },
    },
  ],
};
