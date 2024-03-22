var uri = require('url')
  , Mapper = require('./mapper');

/**
 * @param {object} options
 * @return {function}
 * @api public
 */
exports = module.exports = function(options) {
  
  return function cname(page, next) {
    var baseURL = page.app.get('base url');
    if (!baseURL) { return next(new Error('CNAME require "base url" setting')) };
    url = uri.parse(baseURL);
    
    page.write(url.hostname);
    page.end();
  }
}

exports.createMapper = function() {
  return new Mapper();
};
