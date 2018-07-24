// __dirname是node.js的全局变量，它指向当前执行脚本所在的目录。
var webpack = require('webpack');
var proxy = require('http-proxy-middleware');
// 查看打包中各文件的大小
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
module.exports ={
    // devtool: 'inline-source-map',
    entry:__dirname + '/src/root.js',
    output:{
      path:__dirname+'/src',
      filename:'bundle.js'
    },
    mode:'development',
    devServer: {
      host: 'localhost',
      port: '8080',
      proxy:{
        '/api':{
          target: 'http://localhost/',
          // pathRewrite:{'^/api':'/'},
          changeOrigin: true,
          secure: false
        }
      }
    } ,
    module:{
      rules:[
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env','react','stage-2'],
        //   plugins: [
        //     ['import', [{ libraryName: "antd", style: 'css' }]],
        //  ],
        },
      },
      {
        test:/\.(png)|(jpg)$/,
        loader: "url?limit=50000"
      },
      // {
      //   test: /\.css$/,
      //   loader: [ 'style-loader', 'css-loader' ]
      // }
      {
        test: /\.css$/,
        exclude:[/node_modules/],
        use: [
          require.resolve('style-loader'), {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: true, // 新增对css modules的支持
              localIdentName: '[name]__[local]__[hash:base64:5]'
            }
          }, 
          // {
          //   loader: require.resolve('postcss-loader'),
          //   options: {
          //     // Necessary for external CSS imports to work
          //     // https://github.com/facebookincubator/create-react-app/issues/2677
          //     ident: 'postcss',
          //     plugins: () => [
          //       require('postcss-flexbugs-fixes'),
          //       autoprefixer({
          //         browsers: [
          //           '>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9', // React doesn't support IE8 anyway
          //         ],
          //         flexbox: 'no-2009'
          //       })
          //     ]
          //   }
          // }
        ]
      },
      {
        test: /\.css$/,
        exclude:[/src/],
        use: [
          require.resolve('style-loader'), {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              // modules: true, // 新增对css modules的支持
              // localIdentName: '[name]__[local]__[hash:base64:5]'
            }
          },
          //  {
          //   loader: require.resolve('postcss-loader'),
          //   options: {
          //     // Necessary for external CSS imports to work
          //     // https://github.com/facebookincubator/create-react-app/issues/2677
          //     ident: 'postcss',
          //     plugins: () => [
          //       require('postcss-flexbugs-fixes'),
          //       autoprefixer({
          //         browsers: [
          //           '>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9', // React doesn't support IE8 anyway
          //         ],
          //         flexbox: 'no-2009'
          //       })
          //     ]
          //   }
          // }
        ]
      },
      ]
    },
    plugins:[
      new webpack.ProvidePlugin({
        $:"jquery",
        jQuery:"jquery",
        "window.jQuery":"jquery"
      }),
      new BundleAnalyzerPlugin(),
      new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(js|css)$'),
        threshold: 50240,
        minRatio: 0.8
    }),
    ],
    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
      'redux': 'Redux',
      // 'react-router-dom': true,
      'jquery': 'jQuery',
      'react-redux': 'ReactRedux',
      'antd':'antd'
  },
  }