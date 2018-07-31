"use strict";

const moment = require('moment');

const genPayload = ({_id, access, expTime}) => {
  const payload = {
      access: access, 
      _id: _id.toHexString(),
      iat: moment.now() / 1000,
      exp: expTime ? expTime :  moment().add(1, 'h')
  };

  return payload;
};

module.exports = {
  genPayload
};
