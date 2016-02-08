'use strict';
const debug = require('debug')('koa2_app_auth');
const config = require('config');
const jwt = require('jsonwebtoken');


exports.Login = (ctx) => {

    let token = jwt.sign({ login: ctx.state.body.login }, config.secret);
    debug('Post Login');
    ctx.body = {token: token};
    ctx.status = 200;

    debug('Login');
}

exports.Check = async (ctx) => {
try {
    console.log('ctx.body',ctx.body);
    ctx.body = {user: ctx.state.user};
    //ctx.status = 200;
} catch (e){
    console.log(e);
}


    debug('Check');
}