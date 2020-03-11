// next.config.js
const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')
const path = require('path')

module.exports = withLess(withCSS({
  cssLoaderOptions: {
    url: false
  }
}))
