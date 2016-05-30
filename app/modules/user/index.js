'use strict';

const Koa = require('koa');
const app = new Koa();
const convert = require('koa-convert');
const compose = convert.compose;
const Router = require('koa-router')();

const checkTokenMdlw = require('../../middlewares/checkToken');

const UserController = require('./userController');

Router.post('/login', UserController.Login);
Router.post('/logout', compose(checkTokenMdlw, UserController.Logout));
Router.get('/check', compose(checkTokenMdlw, UserController.Check));

app.use(convert(Router.routes()));
app.use(convert(Router.allowedMethods()));

module.exports = app;
