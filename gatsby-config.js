module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "ammex",
  },
  plugins: [
    "gatsby-plugin-sass",
    /*{
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "",
      },
    },*/
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp"
  ],
};
