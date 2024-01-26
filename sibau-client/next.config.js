module.exports = {
  images: {
    domains: [
      "localhost",
      "www.youtube.com",
      "youtube.com",
      "api.dicebear.com",
    ],
  },
  css: {
    loaderOptions: {
      postcss: {
        config: {
          path: "./postcss.config.js",
        },
      },
    },
  },
};
