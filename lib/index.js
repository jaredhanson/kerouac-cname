var uri = require('url');

exports = module.exports = function(options) {
  
  return function cname(page, next) {
    if (!page.baseURL) { return next(new Error('CNAME require "base url" setting')) };
    url = uri.parse(page.baseURL);
    
    page.write(url.hostname);
    page.end();
  }
}
