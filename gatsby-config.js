module.exports = {
    siteMetadata: {
        title: 'Wordpress Gatsby',
        subtitle: `Fetch Data From Local WP Install`,
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: "gatsby-source-wordpress",
            options: {
                baseUrl: "gatsby-wp.localhost",
                protocol: "http",
                hostingWPCOM: false,
                useACF: true,
                verboseOutput: true
            }
        }
    ],
};
