'use strict';
const Koa = require('koa');
const debug = require('debug')('koa2_app');
const convert = require('koa-convert');
const mount = require('./libs/mount');
const AuthController = require('./controllers/AuthController');

const app = new Koa();

app.use( async (ctx, next) => {
    debug('Start app');
    await next();
    debug('Finish app');
});

app.use(convert(mount('/auth', AuthController)));

app.listen('3000', () => {
    debug('Listen 3000');
});