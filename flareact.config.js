module.exports = {
  // https://flareact.com/docs/custom-webpack-config
  webpack: (config, options) => {
    // https://github.com/bhovhannes/svg-url-loader
    config.module.rules.push({
      test: /\.svg/,
      use: {
        loader: 'svg-url-loader',
        options: {}
      }
    })

    return config
  }
}
