const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://ssr-nextjs-react-blog-cms.herokuapp.com/' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://ssr-nextjs-react-blog-cms.herokuapp.com/',
  'process.env.CLIENT_ID': '7ZE6aNVCenqc2Ghy21fA7VcWbzcgPEWz'
}
