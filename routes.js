const routes = require('next-routes')

module.exports = routes()                           
  .add('about')                                       
  // .add('blog', '/blog/:slug')                         
  .add('userPosts', '/dashboard')
  .add('postEditor', '/blog/new')
  .add('postDetail', '/blog/:slug')
  .add('postEditorUpdate', '/blog/:id/edit')