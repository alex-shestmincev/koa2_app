'use strict';
const debug = require('debug')('koa2_app');

module.exports = async (ctx, next) => {
    try {
        await next();
    } catch (err) { console.log('errorHandler');
        if (401 == err.status) {
            ctx.status = 401;
            ctx.body = 'Protected resource, use Authorization header to get access\n';
        } else {
            throw err;
        }
    }
}