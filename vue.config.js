const path = require('path')


module.exports = {
  // publicPath:process.env.NODE_ENV==='production'?'/':'/c',
  chainWebpack: config=>{
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource( config.module.rule('scss').oneOf(type)))
  },
  css:{
    sourceMap:true,
    loaderOptions:{
      sass:{

      }
    },
  },
  // loaders:{
  //   test:/\.scss$/,
  //   loaders:['style','css','sass']
  // },
  lintOnSave:false
}



function addStyleResource(rule){
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
        patterns:[
          path.resolve(__dirname, './src/style/common.scss')
        ]
    })
}