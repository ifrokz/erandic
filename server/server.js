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
const next = require('next');
const dev = process.env.NODE_ENV !== 'production'
console.log('dev', dev);
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  server.get('/:lang(es|en)', (req, res) => {
    console.log('Server: /', req.query, req.params);
    return app.render(req, res, '/', req.query)
  });

  server.get('*', (req, res) => {
    return handle(req, res)
  });
});