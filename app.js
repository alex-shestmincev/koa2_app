'use strict';
const Koa = require('koa');
const debug = require('debug')('koa2_app');
const convert = require('koa-convert');
const mount = require('./libs/mount');
const AuthModule = require('./modules/Auth');

const bodyParser = require('./middlewares/bodyParser');
const errorHandler = require('./middlewares/errorHandler');

const fs = require('fs');
const path = require('path');


const app = new Koa();

app.use(errorHandler);

app.use(convert(bodyParser));

app.use(convert(mount('/auth', AuthModule)));

app.listen('3000', () => {
    debug('Listen 3000');
});