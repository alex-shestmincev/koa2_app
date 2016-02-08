'use strict';
const Koa = require('koa');
const app = new Koa();
const convert = require('koa-convert');
const debug = require('debug')('koa2_app_auth');
const Router = require('koa-router')();

const jwtMiddleware = require('../../middlewares/jwt');

const AuthController = require('./AuthController');


Router.post('/login', AuthController.Login );
Router.get('/check', convert.compose(jwtMiddleware, AuthController.Check) );


app.use(convert(Router.routes()));
app.use(convert(Router.allowedMethods()));

module.exports = app;