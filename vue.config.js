module.exports = {
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false
    }
  },
  publicPath: './',
  lintOnSave: undefined,
  devServer: {
    // public: process.env.NODE_DEVSERVER_PUBLIC || 'localhost:8080',
    public: 'pinarello.shio-lab.com:8080',
    allowedHosts: [
      'localhost:8080',
      'pinarello.shio-lab.com:8080',
    ],
  },
}
