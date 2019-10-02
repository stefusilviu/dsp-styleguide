import path from 'path'

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
    router: {
        base: '/dsp-styleguide/'
    }
} : {}

module.exports = {
    head: {
        titleTemplate: '%s - DSP Styleguide',
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
    },
    css: [
        'element-ui/lib/theme-chalk/reset.css',
        'element-ui/lib/theme-chalk/index.css',
        './assets/scss/main.scss'
    ],

    /*
    ** Add element-ui in our app, see plugins/element-ui.js file
    */
    plugins: [
        '@/plugins/element-ui',
        { src: "@/plugins/prism", ssr: false }
    ],

    build: {
        extend(config, ctx) {
            config.module.rules.push(
                {
                    test: /\.html$/,
                    use: ['html-loader']
                },
                {
                    test: /\.css$/i,
                    include: [
                        path.resolve(__dirname, 'content')
                    ],
                    use: 'raw-loader'
                }
            )
        }
    },

    router: {
        ...routerBase
    },

    modules: [
        '@nuxtjs/markdownit'
    ],

    // [optional] markdownit options
    // See https://github.com/markdown-it/markdown-it
    markdownit: {
        preset: 'default',
        linkify: true,
        breaks: false
    }
}