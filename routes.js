const routes = require('next-routes')

                                                    // Name   Page      Pattern
module.exports = routes()                           // ----   ----      -----
.add('about')                                       // about  about     /about
.add('blog', '/blog/:slug')                         // blog   blog      /blog/:slug
