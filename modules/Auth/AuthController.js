'use strict';
const debug = require('debug')('koa2_app_auth');
const config = require('config');
const jwt = require('jsonwebtoken');
const User = require('../User/UserModel');

exports.Register = async (ctx, next) => {
    let data = {
        email: ctx.state.body.email,
        password: ctx.state.body.password,
        salt: Math.random()
    };

    let user;
    try {
        user = await User.create(data);
    } catch (e) {
        debug(e);
        ctx.throw('Error while registering user', 400);
        return;
    }

    let token = jwt.sign({ id: user._id }, config.secret);
    ctx.body = {token: token};
    ctx.status = 200;
}

exports.Login = async (ctx) => {

    let user = await User.findOne({email: ctx.state.body.email});
    if (!user || !user.checkPassword(ctx.state.body.password)) {
        ctx.throw('Error while logging in', 400);
        return;
    }

    let token = jwt.sign({ id: user._id }, config.secret);
    ctx.body = {token: token};
    ctx.status = 200;
}



exports.Check = async (ctx) => {
    if (!ctx.state.user.id) {
        return ctx.throw('Bad auth data', 400);
    }
    let user;
    try {
        user = await User.findById(ctx.state.user.id);
    } catch (err) {
        return ctx.throw('User not found', 404);
    }


    ctx.body = {user: user.email};
}