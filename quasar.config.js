/* eslint-env node */
module.exports = function (/* quasar */) {
  return {
    // https://v1.quasar.dev/quasar-cli/supporting-ts
    supportTS: false,

    // https://v1.quasar.dev/quasar-cli/prefetch-feature
    // preFetch: true,

    // https://v1.quasar.dev/quasar-cli/boot-files
    boot: [
      'axios'
    ],

    // https://v1.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-css
    css: [
      'app.scss'
    ],

    // https://github.com/quasarframework/quasar/tree/dev/extras
    extras: [],

    // https://v1.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-build
    build: {
      appBase: process.env.APP_BASE || '/',
      publicPath: process.env.PUBLIC_PATH || process.env.APP_BASE || '/',
      vueRouterBase: process.env.VUE_ROUTER_BASE || process.env.APP_BASE || '/',
      vueRouterMode: process.env.VUE_ROUTER_MODE || 'history',

      // https://v1.quasar.dev/quasar-cli/handling-process-env
      env: {
        SERVER_BASE_URL: process.env.SERVER_BASE_URL || 'http://localhost:8000/api',
        BUCKET_URL: process.env.BUCKET_URL,
        ENVIRONMENT: process.env.ENVIRONMENT || 'local',
        ANALYTICS_KEY: process.env.ANALYTICS_KEY || '',
        ABLY_KEY: process.env.ABLY_KEY,
        ME_VERSION: 2,
        GLEAP: 'xpmjE9v5bGNseP8kGAyPzqjwkUmWNEo4'
      },

      sourceMap: true,

      // https://v1.quasar.dev/quasar-cli/handling-webpack
    },

    // https://v1.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-devServer
    devServer: {
      https: false,
      port: 8080,
      open: true
    },

    // https://v1.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-framework
    framework: {
      iconSet: 'material-icons', // Quasar icon set
      lang: 'pt-BR', // Quasar language
      cssAddon: true,
      config: {},

      importStrategy: 'auto',

      components: [],

      directives: [],

      plugins: []
    },

    // https://v1.quasar.dev/options/animations
    animations: [],

    // https://v1.quasar.dev/quasar-cli/developing-ssr/configuring-ssr
    ssr: {
      pwa: false
    },

    // https://v1.quasar.dev/quasar-cli/developing-pwa/configuring-pwa
    pwa: {
      workboxPluginMode: 'GenerateSW',
      workboxOptions: {},
    },

    // https://v1.quasar.dev/quasar-cli/developing-cordova-apps/configuring-cordova
    cordova: {},

    // https://v1.quasar.dev/quasar-cli/developing-capacitor-apps/configuring-capacitor
    capacitor: {},

    // https://v1.quasar.dev/quasar-cli/developing-electron-apps/configuring-electron
    electron: {
      bundler: 'packager',

      // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options
      packager: {},

      builder: {
        // https://www.electron.build/configuration/configuration
        appId: 'webpack-5-99-0'
      },

      // https://v1.quasar.dev/quasar-cli/developing-electron-apps/node-integration
      nodeIntegration: true,

      extendWebpack (/* webpack */) { }
    }
  }
}