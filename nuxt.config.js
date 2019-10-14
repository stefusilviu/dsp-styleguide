module.exports = {
    head: {
        titleTemplate: '%s - DSP Styleguide',
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,700&display=swap' }],
        meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
        script: [{ src: '/js/select-box.js', body: true}],
    },
    css: [
        'element-ui/lib/theme-chalk/reset.css',
        'element-ui/lib/theme-chalk/index.css',
        '@fortawesome/fontawesome-free/css/solid.css',
        './assets/scss/main.scss'
    ],
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
    },
    modules: [
        '@nuxtjs/font-awesome'
    ],
    generate: {
        dir: 'build'
    }
}