export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: '/scripts/jquery-1.12.4.min.js',
        type: 'text/javascript'
      },
      {
        src: '/scripts/vendor/bootstrap.min.js',
        type: 'text/javascript'
      },
      {
        src: '/scripts/vendor/popper.min.js',
        type: 'text/javascript'
      },
      {
        src: '/scripts/vendor/bootstrap-material-design.min.js',
        type: 'text/javascript'
      },
      {
        src: '/scripts/vendor/material-kit.min.js',
        type: 'text/javascript'
      },
      {
        src: '/scripts/vendor/aos.js',
        type: 'text/javascript'
      },
      {
        src: '/scripts/vendor/owl-carousel.js',
        type: 'text/javascript'
      },
      {
        src: '/scripts/vendor/isotop.js',
        type: 'text/javascript'
      },
      {
        src: '/scripts/vendor/magnifice-js.js',
        type: 'text/javascript'
      },
      {
        src: '/scripts/vendor/swiper.js',
        type: 'text/javascript'
      },
      {
        src: '/scripts/vendor/easing.js',
        type: 'text/javascript'
      },
      {
        src: '/scripts/main.js',
        type: 'text/javascript'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/eslint-module'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
