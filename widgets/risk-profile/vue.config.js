module.exports = {
  publicPath: "",
  devServer: {
    disableHostCheck: true,
    port: 8089
  },

  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  }
};
