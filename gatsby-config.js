require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: "nüte",
        description: "Nature’s nütrition - science-based and simple",
        siteUrl: "https://www.nutefoods.com",
    },
    plugins: [
        {
            resolve: `gatsby-source-strapi`,
            options: {
                apiURL: process.env.STRAPI_API_URL,
                accessToken: process.env.STRAPI_TOKEN,
                collectionTypes: ["icebar", "we-image", "bundle", "starter-set"],
                singleTypes: [],
            },
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /\.svg$/, // See below to configure properly
                },
            },
        },
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-nprogress`,
        },
    ],
};
