import webpack from 'webpack'

module.exports = {
    head: {
        titleTemplate: '%s - DSP Styleguide',
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,700&display=swap' }
        ],
        meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
        script: [
            { src: 'https://code.jquery.com/jquery-3.4.1.slim.min.js', body: true },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js', body: true },
            { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js', body: true },
            { src: '/js/vendor/cleave.min.js', body: true },
            { src: '/js/select-box.js', body: true},
            { src: '/js/password-switch.js', body: true },
            { src: '/js/card-toggle.js', body: true },
            { src: '/js/plugins.js', body: true }
        ],
    },
    css: [
        'element-ui/lib/theme-chalk/reset.css',
        'element-ui/lib/theme-chalk/index.css',
        '@fortawesome/fontawesome-free/css/solid.css',
        '@fortawesome/fontawesome-free/css/brands.css',
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