var chai = require('chai');
var mock = require('chai-kerouac-middleware');
var cname = require('../lib');


describe('kerouac-cname', function() {
  
  it('should export function', function() {
    expect(cname).to.be.a('function');
  });
  
  describe('without base url setting', function() {
    var page, err;

    before(function(done) {
      chai.kerouac.use(cname())
        .page(function(page) {
          page.site = new mock.Site();
          page.pages = [
            { url: '/hello' },
          ];
        })
        .next(function(e) {
          err = e;
          done();
        })
        .dispatch();
    });
  
    it('should error', function() {
      expect(err).to.be.an.instanceOf(Error);
      expect(err.message).to.equal('CNAME require "base url" setting');
    });
  }); // without base url setting
  
});
