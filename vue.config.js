module.exports = {

  devServer: {
    // host: "localhost",
    //   port: 8080, // 端口号
    // https: false, // https:{type:Boolean}
    // 配置多个代理
    proxy: {
      '/api': {
        target: 'http://uv.newoffen.cn/api-copartner/app/',
        pathRewrite: {
          '^/api': ''
        },
        // debug 可以查看代理正确的请求地址
        // logLevel:'debug',
        // secure: false,
        changeOrigin: true,
        ws: false
      }
    },
  },
  // 多页面配置
  productionSourceMap: false,
  publicPath: './',
  outputDir: "zhaoshang",

  pages: {
    index: {
      // page 的入口
      entry: "src/views/index/main.js",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "Index Page",
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "index"],

    },
    ecity: {
      // page 的入口
      entry: "src/views/ecity/main.js",
      // 模板来源
      template: "public/ecity.html",
      // 在 dist/index.html 的输出
      filename: "ecity.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "Index Page",
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "ecity"]
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // subpage: "public/index.html"
  }
};
