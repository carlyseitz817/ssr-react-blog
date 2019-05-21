const express = require('express');
const next = require('next');
const routes = require('../routes');
const bodyParser = require('body-parser');
const compression = require('compression');
const mongoose = require('mongoose');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();



const secretData = [
  {
    title: 'SecretData 1',
    description: 'Plans how to build spaceship'
  },
  {
    title: 'SecretData 2',
    description: 'My secret passwords'
  }
]

// mongoose.connect(config.DB_URI, { useNewUrlParser: true})
//   .then(() => console.log('Database Connected!'))
//   .catch(err => console.error(err));

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/blog_db_test";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true });
mongoose.set('useFindAndModify', false);

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.json());

    server.get('/api/v1/secret', (req, res) => {
      return res.json(secretData);
    })

    const postRoutes = require('./routes/post');

    server.use('/api/v1/posts', postRoutes);


    server.get('/blog/:title'.replace(/ /g, "-"), (req, res) => {
      const actualPage = '/post'
      const queryParams = { title: req.params.title }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })