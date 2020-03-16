import config from './config';

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt JS Template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Template Nuxt JS' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,500,500i,600,600i,700,700i&display=swap' },
      { rel: 'stylesheet', href: 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css' }
    ],
    script: [
      {
        src: config.base + 'assets/vendor/jquery/dist/jquery.min.js'
      },
      {
        src: config.base + 'assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js'
      },
      {
        src: config.base + 'assets/vendor/js-cookie/js.cookie.js'
      },
      {
        src: config.base + 'assets/vendor/jquery.scrollbar/jquery.scrollbar.min.js'
      },
      {
        src: config.base + 'assets/vendor/jquery-scroll-lock/dist/jquery-scrollLock.min.js'
      },
      {
        src: config.base + 'assets/vendor/chart.js/dist/Chart.min.js'
      },
      {
        src: config.base + 'assets/vendor/chart.js/dist/Chart.extension.js'
      },
      {
        src: config.base + 'assets/js/argon.min001.js'
      },
    ]
  },
  module: {
    rules: [
        {
           test: /\.s[ac]ss$/i,
           use: ['style-loader','css-loader','sass-loader',],
         },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@static/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css',
    '@static/assets/vendor/nucleo/css/nucleo.css',
    '@static/assets/css/argon.min.css',
    '@static/assets/scss/jmli.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    {src: '@plugins/laue'},
    {src: '@plugins/skeleton', ssr:false},
    {src: '@plugins/ckeditor', ssr:false},
    {src: '@plugins/highcharts', ssr:false},
    {src: '@plugins/helper', ssr:false}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: config.baseApiUrl,
    headers: {
      'Content-Type':'application/json',
      'X-Requested-With':'XMLHttpRequest'
    }
  },
  auth: {
    busy:false,
    loggedIn:true,
    strategies: {
      local: {
        endpoints: {
          login: {url: 'auth/login', method: 'post', propertyName: 'data.token'},
          logout: false,
          user: {url: 'auth/user', method: 'get', propertyName: 'data'},
        },
        tokenRequired: true,
        tokenType: 'Bearer'
      }
    },
    redirect: {
      login: '/login',
      logout: '/login',
      user: '/profile',
      callback:'/'
    }
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
