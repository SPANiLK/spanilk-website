module.exports = {
  env: {
    CONTENT_API_KEY : "b7e7921b548233955a0518488a",
    BLOG_URL : "https://spanilk-blog-backend.herokuapp.com",
    GOOGLE_MEASUREMENT_ID : "G-NJQNLJEEJ6"
  },
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
