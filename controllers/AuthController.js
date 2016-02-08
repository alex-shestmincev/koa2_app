'use strict';
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
    ctx.body = 'Hello world';
    console.log('test');
});

module.exports = app;