import path from 'path'

module.exports = {
    head: {
        titleTemplate: '%s - DSP Styleguide',
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,700&display=swap' }],
        meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }]
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
        '@/plugins/global',
        { src: "@/plugins/prism", ssr: false }
    ],

    build: {
        extend(config, ctx) {
            config.module.rules.push({
                test: /\.html$/,
                use: ['html-loader']
            })
        }
    }
}