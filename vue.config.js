module.exports = {
    /* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */
    /* baseUrl: process.env.NODE_ENV === 'production' ? './' : '/' */
    publicPath: process.env.NODE_ENV === 'production' ? '/vue3.0-system/dist' : './',
    // publicPath:"./",
    /* 输出文件目录：在npm run build时，生成文件的目录名称 */
    outputDir: 'dist',
    /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
    assetsDir: "assets",
    /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
    productionSourceMap: false,
    /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
    filenameHashing: false,
    /* 代码保存时进行eslint检测 */
    lintOnSave: true,
    /* webpack-dev-server 相关配置 */
    devServer: {
        port: 8080, // 端口号
        host: 'localhost',
        https: false, // https:{type:Boolean}
        // open: true, //配置自动启动浏览器 /* 设置true后项目会打开浏览器2次，所以在package.json文件中 设置 scripts下的 "serve": "vue-cli-service serve --open", */
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
        // proxy: {
        //     '/api':{
        //         target:'http://jsonplaceholder.typicode.com',
        //         changeOrigin:true,
        //         pathRewrite:{
        //             '/api':''
        //         }
        //     },
        //     '/ms':{
        //         target: 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128',
        //         changeOrigin: true
        //     }
        //     // 配置跨域处理,多个代理
        // }
    }
}