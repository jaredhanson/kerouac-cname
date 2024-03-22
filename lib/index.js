var kerouac = require('kerouac')
  , uri = require('url')
  , Mapper = require('./mapper');


exports = module.exports = function(options) {
  var router = new kerouac.Router();
  router.page('/CNAME', exports.cname(options));
  return router;
}

/**
 * @param {object} options
 * @return {function}
 * @api public
 */
exports.cname = function(options) {
  
  return function cname(page, next) {
    var baseURL = page.app.get('base url');
    if (!baseURL) { return next(new Error('CNAME require "base url" setting')) };

    var url = uri.parse(baseURL);
    page.write(url.hostname);
    page.end();
  }
}

exports.createMapper = function() {
  return new Mapper();
};
