module.exports = {
  siteMetadata: {
    title: `ShortBear`,
    siteUrl: `https://shortbear.com`
  },
  plugins: ["gatsby-plugin-postcss", {
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: "GTM-MCWFBZM",
      includeInDevelopment: false,
      // Defaults to false
      enableWebVitalsTracking: true,
    },
  }, "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};