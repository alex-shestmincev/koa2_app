'use strict';
const config = require('config');
const log = require('../libs/log');

global.stats = {};

module.exports = async (ctx, next) => {
  if (config.isDevelopment) {
    const start = Date.now();
    if (!global.stats[process.pid]) global.stats[process.pid] = 1;
    else global.stats[process.pid] += 1;

    await next();
    const l = `cluser ${process.pid} responed is ${Date.now() - start} ms \n`;
    log.debug(l, global.stats);
  } else {
    await next();
  }
};
