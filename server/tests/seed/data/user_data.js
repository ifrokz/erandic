"use strict";

const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

// const {genPayload} = require('./../../../../db/models/utils/user_utils');
const {genPayload} = require('../../../db/models/utils/user_utils');
const personalData = require('./personal_data').personalData;

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const userThreeId = new ObjectID();

const users = [
    {
        _id: userOneId,
        email: 'test@test.com',
        user_name: 'userOne',
        password: 'userOnePass',
        tokens: [{
            access: 'auth',
            token: jwt.sign({...genPayload({access: 'auth', _id: userOneId})}, process.env.JWT_SECRET).toString()
        }],
        name: {
            first: "Ivan",
            second: "Ruiz Rosello"
        }
    },
    {
        _id: userTwoId,
        email: 'admin@test.com',
        user_name: 'userTwo',
        password: 'userTwoPass',
        tokens: [{
            access: 'auth',
            token: jwt.sign({...genPayload({access: 'auth', _id: userTwoId})}, process.env.JWT_SECRET).toString()
        }],
        name: {
            first: "Andrew",
            second: "Mead Mead"
        }
    },
    {
        _id: userThreeId,
        email: 'help@test.com',
        user_name: 'userThree',
        password: 'userThreePass',
        tokens: [{
            access: 'auth',
            token: jwt.sign({...genPayload({access: 'auth', _id: userThreeId})}, process.env.JWT_SECRET).toString()
        }],
        name: {
            first: "Pablo",
            second: "Tolosa Cerezo"
        }
    }   
];

module.exports ={
    personalData, users
};