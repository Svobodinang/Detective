
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'DETECTIVE.MOSCOW',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Детективное агенство DETECTIVE.MOSCOW. Мы знаем все' },
      { name: "viewport", content: 'width=1200' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/scss/main.scss', lang: 'scss' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/ui.js',
    '~plugins/vuelidate.js',
    '~plugins/vMask.js',
    { src: '~plugins/yandexMaps.js', mode: 'client' }
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
    '@nuxtjs/style-resources'
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '65346256',
        webvisor: true,
        clickmap:true,
        useCDN:false,
        trackLinks:true,
        accurateTrackBounce:true,
      }
    ],
  ],
  // Чтобы глобально подключать файлы стилей
  styleResources: {
    scss: [
      'assets/scss/_variables.scss',
      'assets/scss/_default.scss'
    ]
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
