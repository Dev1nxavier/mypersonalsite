module.exports = {
  siteMetadata: {
    title: `My Gatsby Portfolio Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-netlify-cms", "gatsby-plugin-mdx", "gatsby-plugin-image", "gatsby-plugin-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": 'blog',
      "path": `${__dirname}/blog`,
    },
    __key: "pages"
  },
  "gatsby-plugin-mdx",
  "gatsby-transformer-sharp"
]
};