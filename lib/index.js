var uri = require('url');

exports = module.exports = function(options) {
  
  return function cname(page, next) {
    var site = page.site;
    
    var url = site.get('base url');
    if (!url) { return next(new Error('CNAME require "base url" setting')) };
    url = uri.parse(url);
    
    page.write(url);
    page.end();
  }
}
