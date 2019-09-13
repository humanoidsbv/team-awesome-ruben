/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        cssLoaderOptions: {
          camelCase: false
        },
        postCssPlugins: [
          require('postcss-import'),
          require('postcss-url'),
          require('postcss-custom-properties')({ preserve: false }),
          require('postcss-custom-media'),
          require('postcss-modules-scope'),
          require('autoprefixer')
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    }
  ]
};
