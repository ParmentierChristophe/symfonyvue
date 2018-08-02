// webpack.config.js
var Encore = require('@symfony/webpack-encore');
const { VueLoaderPlugin } = require('vue-loader');

Encore
    // the project directory where all compiled assets will be stored
    .setOutputPath('public/build')

    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')

    // will create public/build/app.js and public/build/app.css
    .addEntry('app', './assets/js/app.js')
    .addEntry('style', './assets/css/style.scss')



    // empty the outputPath dir before each build
    .cleanupOutputBeforeBuild()
    .addPlugin(new VueLoaderPlugin())
    .enableVueLoader()

    // create hashed filenames (e.g. app.abc123.css)
    // .enableVersioning()

    // allow sass/scss files to be processed
    // .enableSassLoader()
;

// export the final configuration
module.exports = Encore.getWebpackConfig();