'use strict';
const parse = require('co-body');

module.exports = async (ctx, next) => {
    if (ctx.method === 'POST') {
        ctx.state.body = await parse(ctx);
    }

    await next();
}
