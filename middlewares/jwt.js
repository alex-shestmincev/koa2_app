'use strict';
const jwt = require('koa-jwt');
const config = require('config');
const convert = require('koa-convert');

module.exports = convert(jwt({ secret: config.secret }));