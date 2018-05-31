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