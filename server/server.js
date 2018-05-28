"use strict";
/////////////////////////////////
// CONFIGURACION SERVIDOR API: //
/////////////////////////////////

require('./config/config.js');
const bodyParser = require('body-parser');
const {mongoose}  = require('./db/mongoose');
const _ = require('lodash');
const server = require('express')();

server.use(bodyParser.json());
server.use(require('./routes/api/user/user'));
server.use(require('./routes/api/user/user-phone'));
server.use(require('./routes/api/user/user-address'));

server.listen(process.env.PORT, (err) => {
  if(err) throw err;
  console.log(`Started on port ${process.env.PORT}`);
});

module.exports = {server};

/////////////////////////////////
// CONFIGURACION SERVIDOR NEXT //
/////////////////////////////////
const next = require('next')
console.log(process.env.NODE_ENV)
const dev = false //process.env.NODE_ENV !== 'production'
console.log('dev', dev);
const app = next({ dev })
const handle = app.getRequestHandler()

server.get('/lala', (req, res) => {
  res.send('lala');
});


app.prepare().then(() => {
  server.get('/', (req, res) => {
    console.log('/', req.query);
    return app.render(req, res, '/', req.query)
  })

  server.get('/b', (req, res) => {
    return app.render(req, res, '/a', req.query)
  });

  server.get('/prueba', (req, res) => {
    return app.render(req, res, '/', req.query)
  });

  server.get('/posts/:id', (req, res) => {
    return app.render(req, res, '/posts', { id: req.params.id })
  });

  server.get('*', (req, res) => {
    return handle(req, res)
  });
});