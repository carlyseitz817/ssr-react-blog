const routes = require('next-routes')

module.exports = routes()                                                  
  .add('userPosts', '/dashboard')
  .add('postEditor', '/blog/new')
  .add('postDetail', '/blog/:slug')
  .add('postEditorUpdate', '/blog/:id/edit')