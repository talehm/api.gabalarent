const serve = require('koa-static');
const path = require('path');

module.exports = (config, { strapi }) => {
  const staticDir = path.resolve(strapi.dirs.public);

  return serve(staticDir, { defer: true });
};