module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/fest_prog/' : '/',
    pwa: {
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        name: 'test',
        themeColor: '#00ff00',
        msTileColor: '#000000',
        manifestOptions: {
            name: 'testname',
            short_name: 'testshortname',
            start_url: 'https://darabosg.github.io/fest_prog',
            display: 'standalone',
            theme_color: '#00ff00',
        },
        iconPaths: {
            favicon32: 'img/icons/favicon-32x32.png',
            favicon16: 'img/icons/favicon-16x16.png',
            appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
            maskIcon: 'img/icons/safari-pinned-tab.svg',
            msTileImage: 'img/icons/msapplication-icon-144x144.png',
        },
    },
}
