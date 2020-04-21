const path = require('path')
const glob = require('glob')

const markdownPaths = ['posts']

export default {
  mode: 'universal',
  // Headers of the page
  head: {
    title: 'EclecticSaddlebag',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My miscellaneous ramblings in tech...' },
      // Open Graph
      { name: 'og:title', content: 'Eclectic Saddlebag' },
      { name: 'og:description', content: 'My miscellaneous ramblings in tech...' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://eclecticsaddlebag.com' },
      // { name: 'og:image', content: 'https://nuxtjs.org/meta_640.png' },
      // Twitter Card
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@EclecticCoding' },
      { name: 'twitter:title', content: 'Eclectic Saddlebag' },
      { name: 'twitter:description', content: 'My miscellaneous ramblings in tech...' },
      // { name: 'twitter:image', content: 'https://nuxtjs.org/meta1640640640_640.png' },
      // { name: 'twitter:image:alt', content: 'NuxtJS Logo' }
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
    { src: '~/assets/styles/main.scss', lang: 'scss' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/prism', ssr: false },
    // { src: '~/plugins/vue-scroll', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    ['nuxt-fontawesome', {
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faCalendarAlt']
        }
      ]
    }
    ]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  generate: {
    routes: dynamicMarkdownRoutes()
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.module.rules.push(
        {
          test: /\.md$/,
          include: path.resolve(__dirname, 'content'),
          loader: 'frontmatter-markdown-loader'
        }
      )
    }
  }
}

function dynamicMarkdownRoutes() {
  return [].concat(
    ...markdownPaths.map(mdPath => {
      return glob.sync(`${mdPath}/*.md`, { cwd: 'content' })
        .map(filepath => `${mdPath}/${path.basename(filepath, '.md')}`);
    })
  );
}


