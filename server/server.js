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

server.listen(process.env.PORT || 3000, (err) => {
  if(err) throw err;
  console.log(`Started on port ${process.env.PORT}`);
});

module.exports = {server};

/////////////////////////////////
// CONFIGURACION SERVIDOR NEXT //
/////////////////////////////////
const next = require('next');
const dev = process.env.NODE_ENV !== 'production'
console.log('dev', dev);
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  server.get(['/:language(es|en)/home/', '/:language(es|en)/inicio/', '/:language(es|en)/'], (req, res, next) => {
    app.render(req, res, '/index', req.query);
  });

  server.get('/:language(es|en)/about', (req, res, next) => {
    app.render(req, res, '/about', req.query);
  });

  server.get('/:language(es|en)/services', (req, res, next) => {
    app.render(req, res, '/services', req.query);
  });

  server.get('/:language(es|en)/contact', (req, res, next) => {
    app.render(req, res, '/contact', req.query);
  });

  server.get('/:language(es|en)/portfolio', (req, res, next) => {
    app.render(req, res, '/portfolio', req.query);
  });

  server.get('*', (req, res) => {
    handle(req, res);
  });
});