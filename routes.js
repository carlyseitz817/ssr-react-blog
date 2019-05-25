const routes = require('next-routes')

module.exports = routes()                           
  .add('about')                                       
  .add('blog', '/blog/:slug')                         
  .add('userPosts', '/posts/dashboard')
  .add('postEditor', '/posts/new')
  .add('postDetail', '/posts/:slug')
  .add('postEditorUpdate', '/posts/:id/edit')