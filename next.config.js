module.exports = {
  reactStrictMode: true,
  images:{
    domains:['images.unsplash.com','images01.nicepage.com',"static.ghost.org"]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}
