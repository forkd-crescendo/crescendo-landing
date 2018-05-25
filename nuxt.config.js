const nodeExternals = require('webpack-node-externals');

module.exports = {
  head: {
    title: 'crescendo-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Encuentra tu sonido!' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:400,700,900' },
      { rel: 'stylesheet', href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css' },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Lato" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Muli" }
    ],
    script: [
      { src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" },
      { src: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.bundle.min.js" },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js" }
    ]
  },
  loading: { color: '#3B8070' },
  router: {
    base: process.env.ROUTER_BASE || '/'
  },
  build: {
    extend (config, { isDev, isClient, isServer }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i, /^bootstrap-vue/]
          })
        ]
      }
    }
  }
}
