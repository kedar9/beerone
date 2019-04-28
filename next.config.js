// https://github.com/zeit/next-plugins/tree/master/packages/next-sass

// const withSass = require('@zeit/next-sass')
// console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);
// module.exports = process.env.NODE_ENV !== 'production' ?
//   withSass() : {};

const withSass = require('@zeit/next-sass')

module.exports = () => {
  return (process.env.NODE_ENV !== 'production')?
    withSass() : {};
}
