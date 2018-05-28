"use strict";


var env = process.env.NODE_ENV || 'development' ;
// process.env.NODE_ENV =  env;
console.log('process.env.NODE_ENV ', process.env.NODE_ENV )

if(env === 'development' || env === 'test' || env === 'test_cloud' || env === 'production'){
    const config = require('./config.json');
    const envConfig = config[env];

    Object.keys(envConfig).forEach((key)=>{
        process.env[key] = envConfig[key];
    });
};
