const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true.valueOf,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/OS_memory_management/'
    : '/'
})
