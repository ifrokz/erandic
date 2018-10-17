"use strict";

const {ObjectID} = require('mongodb');

const users = require('./user_data').users;

const IDs = [
  new ObjectID(),
  new ObjectID(),
  new ObjectID()
];

const addressData = [
   {    
      _id: IDs[0].toHexString(),
      _creator: users[0]._id.toHexString(),
      "country": "USA",
      "state": "Pensilvania",
      "post_code": "19019",
      "city": "Philadelphia",
      "street": "N 6th St",
      "number": 100,
      "floor": 6,
      "door": 23,
      selected_default: false
    },
    {    _id: IDs[1].toHexString(),
      _creator: users[1]._id.toHexString(),
      "country": "Spain",
      "state": "C.Valenciana",
      "post_code": "46126",
      "city": "Valencia",
      "street": "C/ Inventada",
      "number":2,
      "floor": 8,
      "door": 32,
      selected_default: true
    },
    {    _id: IDs[2].toHexString(),
      _creator: users[1]._id.toHexString(),
      country: "Spain",
      state: 'C.Valenciana',
      post_code: "46046",
      city: "Valencia",
      street: "C/ Principal",
      number: 15,
      floor: 5,
      door: 12,
      selected_default: false
    }
];

module.exports = {
  users, addressData
}