// https://github.com/zeit/next-plugins/tree/master/packages/next-sass

// const withSass = require('@zeit/next-sass')
// console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);
// module.exports = process.env.NODE_ENV !== 'production' ?
//   withSass() : {};

// const withSass = require('@zeit/next-sass')
// console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);
// module.exports = withSass();

// const withSass = require('@zeit/next-sass')
// module.exports = withSass({
//   webpack(config, options) {
//     return config
//   }
// })

// module.exports = {
//   webpack: function(config, options) {
//     config.resolve.extensions = ['.js', '.jsx', '.scss'];
//     config.module.rules.push({
//       test: /\.s?css$/,
//       exclude: /node_modules/,
//       use: ['style-loader', 'css-loader', 'sass-loader']
//     });
//
//     return config;
//   }
// };

const withSass = require('@zeit/next-sass');
module.exports = () => {
  if (process.env.NODE_ENV === 'production') {
    return {};
  }

  return withSass();
}
